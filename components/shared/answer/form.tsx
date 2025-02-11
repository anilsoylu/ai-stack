"use client"

import { useState, type FormEvent, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface AnswerFormProps {
  questionId: number
  onAnswerSubmit?: (answer: string) => Promise<void>
  className?: string
}

export function AnswerForm({
  questionId,
  onAnswerSubmit,
  className,
}: AnswerFormProps) {
  const [answer, setAnswer] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [charCount, setCharCount] = useState(0)

  const MIN_LENGTH = 30
  const MAX_LENGTH = 10000

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setAnswer(value)
    setCharCount(value.length)
    setError(null)
  }

  const validateAnswer = useCallback(() => {
    if (answer.length < MIN_LENGTH) {
      setError(`Answer must be at least ${MIN_LENGTH} characters long`)
      return false
    }
    if (answer.length > MAX_LENGTH) {
      setError(`Answer cannot exceed ${MAX_LENGTH} characters`)
      return false
    }
    return true
  }, [answer.length])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateAnswer()) return

    setIsSubmitting(true)
    setError(null)

    try {
      if (onAnswerSubmit) {
        await onAnswerSubmit(answer)
      } else {
        // Simüle edilmiş API çağrısı
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log(`Submitting answer for question ${questionId}:`, answer)
      }

      setAnswer("")
      setCharCount(0)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit answer")
    } finally {
      setIsSubmitting(false)
    }
  }

  const isDisabled = answer.length < MIN_LENGTH || isSubmitting

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4", className)}>
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Your Answer</h2>
        <p className="text-sm text-muted-foreground">
          Be specific and clear in your answer. Explain the steps thoroughly.
        </p>
      </div>

      <div className="space-y-2">
        <Textarea
          value={answer}
          onChange={handleTextChange}
          placeholder="Write your answer here..."
          className={cn(
            "min-h-[200px] resize-y",
            error && "border-red-500 focus-visible:ring-red-500"
          )}
          disabled={isSubmitting}
          aria-label="Your answer"
          aria-invalid={!!error}
          aria-describedby={error ? "answer-error" : undefined}
        />

        <div className="flex items-center justify-between text-sm">
          <div className="space-x-2">
            {error && (
              <span id="answer-error" className="text-red-500" role="alert">
                {error}
              </span>
            )}
          </div>
          <span
            className={cn(
              "text-muted-foreground",
              charCount < MIN_LENGTH && "text-red-500",
              charCount > MAX_LENGTH && "text-red-500"
            )}
          >
            {charCount}/{MAX_LENGTH} characters
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Button type="submit" disabled={isDisabled} className="min-w-[120px]">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Posting...
            </>
          ) : (
            "Post Your Answer"
          )}
        </Button>

        {answer.length > 0 && !isSubmitting && (
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              if (
                window.confirm("Are you sure you want to discard your answer?")
              ) {
                setAnswer("")
                setCharCount(0)
                setError(null)
              }
            }}
          >
            Discard
          </Button>
        )}
      </div>
    </form>
  )
}

"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function AnswerForm({ questionId }: { questionId: number }) {
  const [answer, setAnswer] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the answer to your Go backend
    console.log(`Submitting answer for question ${questionId}:`, answer)
    setAnswer("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Your Answer</h2>
      <Textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Write your answer here..."
        className="min-h-[200px]"
      />
      <Button type="submit">Post Your Answer</Button>
    </form>
  )
}

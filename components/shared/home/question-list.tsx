"use client"

import { useMemo } from "react"
import { questions } from "@/data/question"
import { cn } from "@/lib/utils"
import QuestionCard from "./question-card"

export function QuestionList({ className }: { className?: string }) {
  const sortedQuestions = useMemo(() => {
    return [...questions].sort((a, b) => b.votes - a.votes)
  }, [])

  if (!sortedQuestions.length) {
    return (
      <div className="text-center text-muted-foreground py-8">
        No questions found.
      </div>
    )
  }

  return (
    <div
      className={cn("space-y-4", className)}
      role="feed"
      aria-label="Questions list"
    >
      {sortedQuestions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  )
}

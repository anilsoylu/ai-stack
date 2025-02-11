"use client"

import { useMemo } from "react"
import { Answer } from "@/types/question"
import AnswerItem from "./item"

interface AnswerListProps {
  questionId: number
  answers: Answer[]
}

export function AnswerList({ questionId, answers }: AnswerListProps) {
  const sortedAnswers = useMemo(
    () =>
      [...answers].sort((a, b) => {
        if (a.isAccepted !== b.isAccepted) {
          return a.isAccepted ? -1 : 1
        }
        return b.votes - a.votes
      }),
    [answers]
  )

  return (
    <section className="space-y-6 mb-6">
      <h2 className="text-xl font-bold">
        {answers.length} {answers.length === 1 ? "Answer" : "Answers"}
      </h2>

      {sortedAnswers.length === 0 ? (
        <p className="text-muted-foreground text-center py-6">
          No answers yet. Be the first to answer!
        </p>
      ) : (
        <div className="space-y-4">
          {sortedAnswers.map((answer) => (
            <AnswerItem key={answer.id} answer={answer} />
          ))}
        </div>
      )}
    </section>
  )
}

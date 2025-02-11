"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Question } from "@/types/question"
import { cn, formatDate } from "@/lib/utils"
import VoteButton from "@/components/shared/question/vote-button"
interface QuestionDetailProps {
  data: Question
}

export function QuestionDetail({ data }: QuestionDetailProps) {
  const [voteCount, setVoteCount] = useState(data.votes)
  const [userVote, setUserVote] = useState<"up" | "down" | null>(null)
  const [isVoting, setIsVoting] = useState(false)

  const handleVote = async (direction: "up" | "down") => {
    if (isVoting) return

    setIsVoting(true)
    try {
      const newVote = direction === userVote ? null : direction
      const voteChange =
        direction === userVote
          ? direction === "up"
            ? -1
            : 1
          : direction === "up"
          ? 1
          : -1

      setUserVote(newVote)
      setVoteCount((prev) => prev + voteChange)
    } catch (error) {
      console.error("Voting failed:", error)
    } finally {
      setIsVoting(false)
    }
  }

  return (
    <article
      className="border rounded-lg p-6 mb-6 bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-200"
      itemScope
      itemType="http://schema.org/Question"
    >
      <h1 className="text-2xl font-bold mb-4" itemProp="name">
        {data.title}
      </h1>

      <div className="flex items-start space-x-4 mb-4">
        <div className="flex flex-col items-center space-y-2">
          <VoteButton
            direction="up"
            onClick={() => handleVote("up")}
            isActive={userVote === "up"}
            disabled={isVoting}
          />

          <span
            className={cn(
              "font-bold text-lg transition-colors",
              voteCount > data.votes && "text-blue-600",
              voteCount < data.votes && "text-red-600"
            )}
            title={`${voteCount} votes`}
          >
            {voteCount}
          </span>

          <VoteButton
            direction="down"
            onClick={() => handleVote("down")}
            isActive={userVote === "down"}
            disabled={isVoting}
          />
        </div>

        <div className="flex-1 min-w-0">
          <p
            className="text-lg mb-4 whitespace-pre-wrap break-words"
            itemProp="text"
          >
            {data.content}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {data.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span itemProp="author">Asked by {data.author}</span>
            <span>•</span>
            <time
              dateTime={data.createdAt}
              itemProp="dateCreated"
              title={formatDate(data.createdAt)}
            >
              {formatDate(data.createdAt)}
            </time>
          </div>
        </div>
      </div>
    </article>
  )
}

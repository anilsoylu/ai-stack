"use client"

import { useState } from "react"
import { Answer } from "@/types/question"
import { cn, formatDate } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle2 } from "lucide-react"
import VoteButton from "./vote-button"

const AnswerItem = ({ answer }: { answer: Answer }) => {
  const [voteCount, setVoteCount] = useState(answer.votes)
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

      // API çağrısı burada yapılabilir
      // await updateAnswerVote(answer.id, direction)
    } catch (error) {
      console.error("Voting failed:", error)
    } finally {
      setIsVoting(false)
    }
  }

  return (
    <article
      className={cn(
        "border rounded-lg p-4 bg-card text-card-foreground hover:shadow-sm transition-shadow duration-200",
        answer.isAccepted && "ring-2 ring-primary"
      )}
      itemScope
      itemType="http://schema.org/Answer"
    >
      <div className="flex items-start space-x-4">
        <div className="flex flex-col items-center space-y-1">
          <VoteButton
            direction="up"
            onClick={() => handleVote("up")}
            isActive={userVote === "up"}
            disabled={isVoting}
          />
          <span
            className={cn(
              "font-bold transition-colors",
              voteCount > answer.votes && "text-blue-600",
              voteCount < answer.votes && "text-red-600"
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
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Avatar className="h-6 w-6">
                <AvatarImage
                  src={`https://avatar.vercel.sh/${answer.author}`}
                  alt={`${answer.author}'s avatar`}
                />
                <AvatarFallback>
                  {answer.author[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{answer.author}</span>
            </div>
            {answer.isAccepted && (
              <div
                className="flex items-center text-green-600 dark:text-green-400"
                title="This answer has been accepted"
              >
                <CheckCircle2 className="h-5 w-5 mr-1" />
                <span className="text-sm font-medium">Accepted Answer</span>
              </div>
            )}
          </div>

          <div
            className="mb-2 prose dark:prose-invert max-w-none"
            itemProp="text"
          >
            {answer.content}
          </div>

          <time
            className="text-sm text-muted-foreground"
            dateTime={answer.createdAt}
            itemProp="dateCreated"
          >
            Answered on {formatDate(answer.createdAt)}
          </time>
        </div>
      </div>
    </article>
  )
}

export default AnswerItem

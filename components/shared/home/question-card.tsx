"use client"

import { useMemo } from "react"
import { Question } from "@/types/question"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUp, Calendar, MessageSquare, User } from "lucide-react"
import Link from "next/link"
import { formatDate } from "@/lib/utils"

const QuestionCard = ({ question }: { question: Question }) => {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow duration-200">
      <CardHeader className="p-0">
        <CardTitle>
          <Link
            href={`/question/${question.id}`}
            className="flex items-center justify-between group"
          >
            <span className="group-hover:text-blue-600 transition-colors">
              {question.title}
            </span>
            <Badge variant="secondary" className="ml-2 whitespace-nowrap">
              {question.author}
            </Badge>
          </Link>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0 mt-4">
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2" title="Vote count">
            <ArrowUp className="h-4 w-4" />
            <span>{question.votes} votes</span>
          </div>
          <div className="flex items-center space-x-2" title="Author">
            <User className="h-4 w-4" />
            <span>Answered by {question.author}</span>
          </div>
          <div className="flex items-center space-x-2" title="Creation date">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(question.createdAt)}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-0 mt-4 flex justify-between items-center">
        <Button
          variant="ghost"
          size="sm"
          className="hover:bg-blue-50 dark:hover:bg-blue-900"
          title="Answer count"
        >
          <MessageSquare className="mr-1 h-4 w-4" />
          <span>{question.answersCount} answers</span>
        </Button>

        <div className="flex flex-wrap gap-2">
          {question.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}

export default QuestionCard

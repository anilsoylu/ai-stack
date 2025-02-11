import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUp, MessageSquare } from "lucide-react"
import { questions } from "@/data/question"

export function QuestionList() {
  return (
    <div className="space-y-4">
      {questions.map((question) => (
        <div
          key={question.id}
          className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <Link
              href={`/question/${question.id}`}
              className="text-lg font-semibold hover:underline mb-2 md:mb-0"
            >
              {question.title}
            </Link>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <ArrowUp className="mr-1 h-4 w-4" />
                {question.votes}
              </Button>
              <Button variant="ghost" size="sm">
                <MessageSquare className="mr-1 h-4 w-4" />
                {question.answers}
              </Button>
            </div>
          </div>
          <div className="mt-2 space-x-2">
            {question.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUp, Calendar, MessageSquare, User } from "lucide-react"
import { questions } from "@/data/question"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function QuestionList() {
  return (
    <div className="space-y-4">
      {questions.map((question) => (
        <Card key={question.id} className="p-4">
          <CardHeader>
            <CardTitle>
              <Link
                href={`/question/${question.id}`}
                className="flex items-center justify-between"
              >
                <span>{question.title}</span>
                <Badge variant="secondary">{question.author}</Badge>
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <ArrowUp className="h-4 w-4" />
                <span>{question.votes} votes</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Answered by {question.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{question.createdAt}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <MessageSquare className="mr-1 h-4 w-4" />
                {question.answers}
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              {question.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

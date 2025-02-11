import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUp, MessageSquare } from "lucide-react"

const questions = [
  {
    id: 1,
    title: "How to implement GPT-3 in a React application?",
    votes: 42,
    answers: 5,
    tags: ["react", "gpt-3", "ai"],
  },
  {
    id: 2,
    title: "Best practices for fine-tuning BERT models",
    votes: 38,
    answers: 3,
    tags: ["bert", "nlp", "machine-learning"],
  },
  {
    id: 3,
    title: "Optimizing TensorFlow performance on GPU",
    votes: 27,
    answers: 2,
    tags: ["tensorflow", "gpu", "performance"],
  },
]

export function QuestionList() {
  return (
    <div className="space-y-4">
      {questions.map((question) => (
        <div
          key={question.id}
          className="border rounded-lg p-4 bg-card text-card-foreground shadow-sm"
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

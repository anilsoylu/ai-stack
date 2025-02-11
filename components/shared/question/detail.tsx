import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Question } from "@/types/question"
import { ArrowUp, ArrowDown } from "lucide-react"

type QuestionDetailProps = {
  data: Question
}

export function QuestionDetail({ data }: QuestionDetailProps) {
  return (
    <div className="border rounded-lg p-6 mb-6 bg-card text-card-foreground shadow-sm">
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      <div className="flex items-start space-x-4 mb-4">
        <div className="flex flex-col items-center">
          <Button variant="ghost" size="sm">
            <ArrowUp className="h-6 w-6" />
          </Button>
          <span className="font-bold text-lg">{data.votes}</span>
          <Button variant="ghost" size="sm">
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex-1">
          <p className="text-lg mb-4">{data.content}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {data.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Asked by {data.author} on{" "}
            {new Date(data.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  )
}

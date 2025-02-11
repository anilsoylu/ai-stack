import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowUp, ArrowDown, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

// In a real application, you would fetch this data from your Go backend
const answers = [
  {
    id: "1",
    content:
      "To implement GPT-3 in a React application, you can use the OpenAI API. Here's a basic example...",
    votes: 15,
    author: "AIExpert",
    createdAt: "2023-06-15T11:45:00Z",
    isAccepted: true,
  },
  {
    id: "2",
    content:
      "Another approach is to use a pre-built React component that wraps the GPT-3 API. For example...",
    votes: 8,
    author: "ReactDev",
    createdAt: "2023-06-15T13:20:00Z",
    isAccepted: false,
  },
]

export function AnswerList({ questionId }: { questionId: number }) {
  // Sort answers by votes (descending) and then by accepted status
  const sortedAnswers = [...answers].sort((a, b) => {
    if (a.isAccepted !== b.isAccepted) {
      return a.isAccepted ? -1 : 1
    }
    return b.votes - a.votes
  })

  return (
    <div className="space-y-6 mb-6">
      <h2 className="text-xl font-bold">{answers.length} Answers</h2>
      {sortedAnswers.map((answer, index) => (
        <div
          key={answer.id}
          className={cn(
            "border rounded-lg p-4 bg-card text-card-foreground",
            index === 0 && answer.isAccepted && "ring-2 ring-primary"
          )}
        >
          <div className="flex items-start space-x-4">
            <div className="flex flex-col items-center">
              <Button variant="ghost" size="sm">
                <ArrowUp className="h-4 w-4" />
              </Button>
              <span className="font-bold">{answer.votes}</span>
              <Button variant="ghost" size="sm">
                <ArrowDown className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage
                      src={`https://avatar.vercel.sh/${answer.author}`}
                    />
                    <AvatarFallback>{answer.author[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{answer.author}</span>
                </div>
                {answer.isAccepted && (
                  <div className="flex items-center text-green-600 dark:text-green-400">
                    <CheckCircle2 className="h-5 w-5 mr-1" />
                    <span className="text-sm font-medium">Accepted Answer</span>
                  </div>
                )}
              </div>
              <p className="mb-2">{answer.content}</p>
              <span className="text-sm text-muted-foreground">
                Answered on {new Date(answer.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

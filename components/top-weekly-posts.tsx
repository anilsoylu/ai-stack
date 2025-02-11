import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, ThumbsUp } from "lucide-react"
import { questions } from "@/data/question"

export function TopWeeklyPosts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Top Weekly Posts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {questions.map((post) => (
            <li key={post.id}>
              <Link
                href={`/question/${post.id}`}
                className="block hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg p-3 transition-colors duration-200"
              >
                <div className="flex items-start space-x-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={post.authorAvatar} alt={post.author} />
                    <AvatarFallback>{post.author[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {post.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      by {post.author}
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <span className="flex items-center">
                        <ThumbsUp className="w-3 h-3 mr-1" />
                        {post.votes}
                      </span>
                      <span className="flex items-center">
                        <MessageSquare className="w-3 h-3 mr-1" />
                        {post.answers}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

"use client"

import Link from "next/link"
import { useMemo } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, ThumbsUp } from "lucide-react"
import { questions } from "@/data/question"
import { cn } from "@/lib/utils"
import { Question } from "@/types/question" // Question tipini import ediyoruz

interface PostItemProps {
  post: Question
  className?: string
}

const PostItem = ({ post, className }: PostItemProps) => {
  const authorInitial = useMemo(
    () => post.author[0].toUpperCase(),
    [post.author]
  )

  return (
    <li className={className}>
      <Link
        href={`/question/${post.id}`}
        className="block hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg p-3 transition-colors duration-200"
      >
        <div className="flex items-start space-x-3">
          <Avatar className="w-8 h-8 shrink-0">
            <AvatarImage
              src={post.authorAvatar}
              alt={`${post.author}'s avatar`}
              className="object-cover"
            />
            <AvatarFallback className="text-xs">{authorInitial}</AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0 space-y-1">
            <p className="text-sm font-medium leading-none truncate">
              {post.title}
            </p>
            <p className="text-xs text-muted-foreground">by {post.author}</p>

            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <span className="flex items-center" title={`${post.votes} votes`}>
                <ThumbsUp className="w-3 h-3 mr-1" />
                {post.votes}
              </span>
              <span
                className="flex items-center"
                title={`${post.answers} answers`}
              >
                <MessageSquare className="w-3 h-3 mr-1" />
                {post.answersCount} answers
              </span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export function TopWeeklyPosts() {
  const topPosts = useMemo(() => {
    const lastWeek = new Date()
    lastWeek.setDate(lastWeek.getDate() - 365)

    return questions
      .filter((post) => new Date(post.createdAt) >= lastWeek)
      .sort((a, b) => b.votes - a.votes)
      .slice(0, 5)
  }, [])

  if (!topPosts.length) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Top Weekly Posts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground text-center py-4">
            No posts found for this week.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Top Weekly Posts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul
          className="space-y-4"
          role="list"
          aria-label="Top posts from the last week"
        >
          {topPosts.map((post) => (
            <PostItem
              key={post.id}
              post={post}
              className={cn("transition-opacity", "hover:opacity-90")}
            />
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default TopWeeklyPosts

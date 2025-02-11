import { Suspense } from "react"
import { QuestionDetail } from "@/components/shared/question/detail"
import { AnswerList } from "@/components/shared/answer/list"
import { AnswerForm } from "@/components/shared/answer/form"
import { questions } from "@/data/question"
import NotFound from "@/app/not-found"
import { Loader2 } from "lucide-react"

type QuestionPageProps = {
  params: Promise<{ id: number }>
}

function Loading({ message = "Loading..." }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] space-y-4">
      <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  )
}

async function getQuestion(id: number) {
  try {
    const question = questions.find((q) => q.id === Number(id))

    if (!question) {
      throw new Error(`Question with id ${id} not found`)
    }

    return question
  } catch (error) {
    console.error(`Error fetching question ${id}:`, error)
    throw error
  }
}

function QuestionError() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <p className="text-lg font-medium text-red-500">
        Failed to load question
      </p>
      <p className="text-sm text-muted-foreground">
        Please try again later or contact support if the problem persists.
      </p>
    </div>
  )
}

async function QuestionContent({ questionId }: { questionId: number }) {
  try {
    const question = await getQuestion(questionId)

    if (!question) {
      return <NotFound />
    }

    return (
      <>
        <QuestionDetail data={question} />
        <AnswerList questionId={questionId} answers={question.answers} />
        <AnswerForm questionId={questionId} />
      </>
    )
  } catch (error) {
    return <QuestionError />
  }
}

export default async function QuestionPage({ params }: QuestionPageProps) {
  const { id } = await params

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={<Loading message="Loading question details..." />}>
          <QuestionContent questionId={id} />
        </Suspense>
      </div>
    </div>
  )
}

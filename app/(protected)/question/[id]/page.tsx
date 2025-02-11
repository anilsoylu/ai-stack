import { QuestionDetail } from "@/components/shared/question/detail"
import { AnswerList } from "@/components/shared/answer/list"
import { AnswerForm } from "@/components/shared/answer/form"
import { questions } from "@/data/question"
import NotFound from "@/app/not-found"

type QuestionPageProps = {
  params: Promise<{ id: number }>
}

const getQuestion = async (id: number) => {
  const question = questions.find((question) => question.id === Number(id))
  return question
}

export default async function QuestionPage({ params }: QuestionPageProps) {
  const questionId = (await params).id
  const questionData = await getQuestion(questionId)

  if (!questionData) {
    return <NotFound />
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <QuestionDetail data={questionData} />
      <AnswerList questionId={questionId} />
      <AnswerForm questionId={questionId} />
    </div>
  )
}

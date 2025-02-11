export type Question = {
  id: number
  title: string
  content: string
  votes: number
  answersCount: number
  tags: string[]
  author: string
  authorAvatar: string
  createdAt: string
  answers: Answer[]
}

export type Answer = {
  id: string
  content: string
  votes: number
  author: string
  createdAt: string
  isAccepted: boolean
}

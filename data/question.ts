import { Question } from "@/types/question"

export const questions: Question[] = [
  {
    id: 1,
    title: "Understanding GPT-3's impact on AI development",
    content:
      "I'm trying to integrate GPT-3 into my React application, but I'm having trouble with the API calls. Can someone provide a step-by-step guide or some code examples?",
    votes: 120,
    answersCount: 15,
    tags: ["ai", "gpt-3", "development"],
    author: "AIExpert",
    authorAvatar: "https://i.pravatar.cc/150?img=1",
    createdAt: "2025-06-15T10:30:00Z",
    answers: [
      ...Array.from({ length: 15 }, (_, index) => {
        const randomAcceptedIndex = Math.floor(Math.random() * 15)
        return {
          id: index.toString(),
          content: `This is answer ${index + 1}`,
          votes: Math.floor(Math.random() * 100),
          author: "User" + (index + 1),
          createdAt: new Date(
            Date.now() + Math.random() * (Date.now() - Date.now())
          ).toISOString(),
          isAccepted: index === randomAcceptedIndex,
        }
      }),
    ],
  },
  {
    id: 2,
    title: "Best practices for fine-tuning BERT models",
    content:
      "I'm trying to fine-tune BERT for my NLP task, but I'm not sure what the best practices are. Can someone provide some tips or a tutorial?",
    votes: 98,
    answersCount: 8,
    tags: ["nlp", "bert", "fine-tuning"],
    author: "NLPro",
    authorAvatar: "https://i.pravatar.cc/150?img=2",
    createdAt: "2025-06-16T11:45:00Z",
    answers: [
      ...Array.from({ length: 15 }, (_, index) => {
        const randomAcceptedIndex = Math.floor(Math.random() * 15)
        return {
          id: index.toString(),
          content: `This is answer ${index + 1}`,
          votes: Math.floor(Math.random() * 100),
          author: "User" + (index + 1),
          createdAt: new Date(
            Date.now() + Math.random() * (Date.now() - Date.now())
          ).toISOString(),
          isAccepted: index === randomAcceptedIndex,
        }
      }),
    ],
  },
  {
    id: 3,
    title: "Implementing LSTM networks for time series prediction",
    content:
      "I'm trying to implement LSTM networks for my time series prediction task, but I'm not sure what the best approach is. Can someone provide some tips or a tutorial?",
    votes: 85,
    answersCount: 12,
    tags: ["lstm", "time-series", "prediction"],
    author: "DeepLearner",
    authorAvatar: "https://i.pravatar.cc/150?img=3",
    createdAt: "2024-06-17T12:30:00Z",
    answers: [
      ...Array.from({ length: 15 }, (_, index) => {
        const randomAcceptedIndex = Math.floor(Math.random() * 15)
        return {
          id: index.toString(),
          content: `This is answer ${index + 1}`,
          votes: Math.floor(Math.random() * 100),
          author: "User" + (index + 1),
          createdAt: new Date(
            Date.now() + Math.random() * (Date.now() - Date.now())
          ).toISOString(),
          isAccepted: index === randomAcceptedIndex,
        }
      }),
    ],
  },
  {
    id: 4,
    title: "Comparing YOLO and R-CNN for object detection",
    content:
      "I'm trying to compare YOLO and R-CNN for my object detection task, but I'm not sure what the best approach is. Can someone provide some insights or a tutorial?",
    votes: 72,
    answersCount: 6,
    tags: ["object-detection", "yolo", "rcnn"],
    author: "ComputerVision",
    authorAvatar: "https://i.pravatar.cc/150?img=4",
    createdAt: "2025-06-17T12:30:00Z",
    answers: [
      ...Array.from({ length: 15 }, (_, index) => {
        const randomAcceptedIndex = Math.floor(Math.random() * 15)
        return {
          id: index.toString(),
          content: `This is answer ${index + 1}`,
          votes: Math.floor(Math.random() * 100),
          author: "User" + (index + 1),
          createdAt: new Date(
            Date.now() + Math.random() * (Date.now() - Date.now())
          ).toISOString(),
          isAccepted: index === randomAcceptedIndex,
        }
      }),
    ],
  },
  {
    id: 5,
    title: "Techniques for text summarization with deep learning",
    content:
      "I'm trying to implement text summarization with deep learning, but I'm not sure what the best approach is. Can someone provide some tips or a tutorial?",
    votes: 67,
    answersCount: 9,
    tags: ["text-summarization", "deep-learning", "nlp"],
    author: "TextMiner",
    authorAvatar: "https://i.pravatar.cc/150?img=5",
    createdAt: "2024-06-18T13:45:00Z",
    answers: [
      ...Array.from({ length: 15 }, (_, index) => {
        const randomAcceptedIndex = Math.floor(Math.random() * 15)
        return {
          id: index.toString(),
          content: `This is answer ${index + 1}`,
          votes: Math.floor(Math.random() * 100),
          author: "User" + (index + 1),
          createdAt: new Date(
            Date.now() + Math.random() * (Date.now() - Date.now())
          ).toISOString(),
          isAccepted: index === randomAcceptedIndex,
        }
      }),
    ],
  },
]

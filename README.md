# Q&A Platform

This is a modern Q&A (Question & Answer) platform built with [Next.js](https://nextjs.org).

## Project Overview

This platform allows users to:

- Ask questions
- View question details
- Search through questions
- Provide answers to questions
- Access protected routes with authentication
- Handle 404 errors gracefully

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Styling:** Built-in CSS support
- **Components:** Custom shared components for reusability
- **Data Management:** Local data management with TypeScript
- **Authentication:** Protected routes with Next.js middleware
- **Error Handling:** Custom 404 page implementation

## Project Structure

```
├── app/
│   ├── (protected)/
│   │   └── question/
│   │       └── [id]/      # Protected question pages
│   └── not-found.tsx      # Custom 404 page
├── components/
│   └── shared/
│       ├── header/        # Navigation and search components
│       ├── question/      # Question-related components
│       └── answer/        # Answer-related components
├── data/
│   └── question.ts        # Question data management
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Make sure to set up your environment variables:

1. Copy `.env.example` to `.env`
2. Update the variables as needed

## Development

You can start editing the platform by modifying the components in the `components/` directory or the pages in the `app/` directory. The application auto-updates as you edit files.

### Protected Routes

The application uses Next.js route groups for protected content. Any routes under `app/(protected)` require authentication.

### Error Handling

Custom 404 page is implemented in `app/not-found.tsx` for better user experience when accessing non-existent pages.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

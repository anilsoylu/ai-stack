"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { LoginForm } from "@/components/shared/auth/login-form"

export function LoginButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login or Sign Up</DialogTitle>
          <DialogDescription>
            Enter your credentials to access your account or create a new one.
          </DialogDescription>
        </DialogHeader>
        <LoginForm onSuccess={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}

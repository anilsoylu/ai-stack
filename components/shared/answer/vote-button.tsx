import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { ArrowUp, ArrowDown } from "lucide-react"

interface VoteButtonProps {
  direction: "up" | "down"
  onClick: () => void
  isActive: boolean
  disabled?: boolean
  size?: "sm" | "default"
}

const VoteButton = ({
  direction,
  onClick,
  isActive,
  disabled,
  size = "sm",
}: VoteButtonProps) => {
  const Icon = direction === "up" ? ArrowUp : ArrowDown

  return (
    <Button
      variant="ghost"
      size={size}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "transition-colors",
        isActive && "text-blue-600 hover:text-blue-700"
      )}
      title={`Vote ${direction}`}
      aria-label={`Vote ${direction}`}
    >
      <Icon className={cn("h-4 w-4", isActive && "animate-pulse")} />
    </Button>
  )
}

export default VoteButton

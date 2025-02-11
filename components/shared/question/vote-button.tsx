import { ArrowUp, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface VoteButtonProps {
  direction: "up" | "down"
  onClick: () => void
  isActive: boolean
  disabled?: boolean
  className?: string
}

const VoteButton = ({
  direction,
  onClick,
  isActive,
  disabled,
  className,
}: VoteButtonProps) => {
  const Icon = direction === "up" ? ArrowUp : ArrowDown

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "transition-colors",
        isActive && "text-blue-600 hover:text-blue-700",
        className
      )}
      aria-label={`Vote ${direction}`}
      title={`Vote ${direction}`}
    >
      <Icon className={cn("h-6 w-6", isActive && "animate-pulse")} />
    </Button>
  )
}

export default VoteButton

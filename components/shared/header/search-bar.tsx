"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect, useCallback } from "react"
import { Search, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { questions } from "@/data/question"
import { Question } from "@/types/question"
import { cn } from "@/lib/utils"
import { useDebounce } from "@/hooks/use-debounce" // Custom hook oluşturulmalı

const searchQuestions = async (query: string): Promise<Question[]> => {
  try {
    const allQuestions = questions
    return allQuestions.filter((q) =>
      q.title.toLowerCase().includes(query.toLowerCase())
    )
  } catch (error) {
    console.error("Search error:", error)
    return []
  }
}

export function SearchBar() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Question[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const debouncedQuery = useDebounce(query, 300)

  const performSearch = useCallback(async (searchQuery: string) => {
    if (searchQuery.length <= 2) {
      setResults([])
      setOpen(false)
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const searchResults = await searchQuestions(searchQuery)
      setResults(searchResults)
      setOpen(true)
    } catch (err) {
      setError("Failed to perform search")
      setResults([])
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    performSearch(debouncedQuery)
  }, [debouncedQuery, performSearch])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false)
    }
  }

  return (
    <div className="relative w-full">
      <div className="relative">
        {isLoading ? (
          <Loader2 className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground animate-spin" />
        ) : (
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        )}
        <Input
          placeholder="Search questions..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className={cn("pl-8", isLoading && "pr-8")}
          aria-expanded={open}
          aria-controls="search-results"
          aria-label="Search questions"
        />
      </div>

      {open && (
        <div
          className="absolute mt-2 w-full z-10"
          id="search-results"
          role="listbox"
        >
          <Command>
            <CommandList>
              {error ? (
                <CommandEmpty className="text-red-500">{error}</CommandEmpty>
              ) : results.length === 0 ? (
                <CommandEmpty>No results found.</CommandEmpty>
              ) : (
                <CommandGroup heading="Questions">
                  {results.map((result) => (
                    <CommandItem
                      key={result.id}
                      onSelect={() => {
                        router.push(`/question/${result.id}`)
                        setOpen(false)
                        setQuery("")
                      }}
                      className="cursor-pointer"
                    >
                      <span className="truncate">{result.title}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </div>
      )}
    </div>
  )
}

export default SearchBar

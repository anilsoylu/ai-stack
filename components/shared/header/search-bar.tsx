"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Search } from "lucide-react"
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

const searchQuestions = async (query: string): Promise<Question[]> => {
  const allQuestions = questions

  return allQuestions.filter((q) =>
    q.title.toLowerCase().includes(query.toLowerCase())
  )
}

export function SearchBar() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Question[]>([])

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query.length > 2) {
        const searchResults = await searchQuestions(query)
        setResults(searchResults)
        setOpen(true)
      } else {
        setResults([])
        setOpen(false)
      }
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [query])

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search questions..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-8"
        />
      </div>
      {open && (
        <div className="absolute mt-2 w-full z-10">
          <Command>
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Questions">
                {results.map((result) => (
                  <CommandItem
                    key={result.id}
                    onSelect={() => {
                      router.push(`/question/${result.id}`)
                      setOpen(false)
                    }}
                  >
                    {result.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      )}
    </div>
  )
}

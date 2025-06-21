"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)

  const suggestions = ["Dune: Part Two", "Oppenheimer", "Poor Things", "The Batman", "Barbie"]

  const filteredSuggestions = suggestions.filter((suggestion) => suggestion.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="relative">
      <div className="relative">
        <Input
          type="text"
          placeholder="Buscar películas, series, actores..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setShowSuggestions(e.target.value.length > 0)
          }}
          onFocus={() => setShowSuggestions(query.length > 0)}
          className="pl-10 pr-10 bg-secondary"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7"
            onClick={() => {
              setQuery("")
              setShowSuggestions(false)
            }}
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 overflow-hidden bg-popover rounded-md shadow-lg">
          <ul className="py-1">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 text-sm cursor-pointer hover:bg-muted"
                onClick={() => {
                  setQuery(suggestion)
                  setShowSuggestions(false)
                }}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

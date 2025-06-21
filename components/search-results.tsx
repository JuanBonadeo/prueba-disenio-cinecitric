import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const searchResults = [
  {
    id: 1,
    title: "Dune: Part Two",
    rating: 4.8,
    year: 2024,
    type: "Película",
    image: "/placeholder.svg?height=150&width=100",
  },
  {
    id: 2,
    title: "Oppenheimer",
    rating: 4.7,
    year: 2023,
    type: "Película",
    image: "/placeholder.svg?height=150&width=100",
  },
  {
    id: 3,
    title: "Poor Things",
    rating: 4.5,
    year: 2023,
    type: "Película",
    image: "/placeholder.svg?height=150&width=100",
  },
  {
    id: 4,
    title: "The Last of Us",
    rating: 4.6,
    year: 2023,
    type: "Serie",
    image: "/placeholder.svg?height=150&width=100",
  },
  { id: 5, title: "Barbie", rating: 4.4, year: 2023, type: "Película", image: "/placeholder.svg?height=150&width=100" },
]

export function SearchResults() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Resultados</h2>
      <div className="space-y-3">
        {searchResults.map((result) => (
          <Link key={result.id} href={`/movie/${result.id}`}>
            <Card className="overflow-hidden card-hover">
              <CardContent className="p-3">
                <div className="flex gap-3">
                  <div className="relative flex-shrink-0 w-20 h-30">
                    <Image
                      src={result.image || "/placeholder.svg"}
                      alt={result.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="font-medium">{result.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {result.year} • {result.type}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-primary" fill="#FF3A3A" />
                      <span className="text-sm">{result.rating}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

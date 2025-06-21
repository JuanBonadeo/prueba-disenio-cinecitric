import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const similarMovies = [
  { id: 10, title: "Dune (2021)", rating: 4.5, image: "/placeholder.svg?height=300&width=200" },
  { id: 11, title: "Blade Runner 2049", rating: 4.6, image: "/placeholder.svg?height=300&width=200" },
  { id: 12, title: "Arrival", rating: 4.4, image: "/placeholder.svg?height=300&width=200" },
  { id: 13, title: "Interstellar", rating: 4.7, image: "/placeholder.svg?height=300&width=200" },
]

export function SimilarMovies({ id }: { id: string }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Títulos similares</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {similarMovies.map((movie) => (
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <Card className="overflow-hidden card-hover">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="relative aspect-[2/3] w-full">
                    <Image src={movie.image || "/placeholder.svg"} alt={movie.title} fill className="object-cover" />
                  </div>
                  <div className="absolute top-2 right-2 flex items-center justify-center px-2 py-1 text-xs font-bold text-white bg-primary rounded-md">
                    <Star className="w-3 h-3 mr-1" fill="white" />
                    {movie.rating}
                  </div>
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-medium line-clamp-2">{movie.title}</h3>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

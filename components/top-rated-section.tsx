import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const topRatedMovies = [
  { id: 1, title: "The Godfather", rating: 4.9, image: "/placeholder.svg?height=450&width=300" },
  { id: 2, title: "The Shawshank Redemption", rating: 4.9, image: "/placeholder.svg?height=450&width=300" },
  { id: 3, title: "The Dark Knight", rating: 4.8, image: "/placeholder.svg?height=450&width=300" },
  { id: 4, title: "Pulp Fiction", rating: 4.8, image: "/placeholder.svg?height=450&width=300" },
  { id: 5, title: "Fight Club", rating: 4.7, image: "/placeholder.svg?height=450&width=300" },
  { id: 6, title: "Inception", rating: 4.7, image: "/placeholder.svg?height=450&width=300" },
]

export function TopRatedSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Top Rated</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {topRatedMovies.map((movie) => (
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

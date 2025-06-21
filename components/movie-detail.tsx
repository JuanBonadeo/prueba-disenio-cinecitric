import Image from "next/image"
import { Star, Heart, Check, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function MovieDetail({ id }: { id: string }) {
  // En una aplicación real, obtendríamos los datos de la película según el ID
  const movie = {
    id,
    title: "Dune: Part Two",
    rating: 4.8,
    year: 2024,
    duration: "166 min",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    director: "Denis Villeneuve",
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.",
    image: "/placeholder.svg?height=600&width=400",
    isFavorite: false,
    isWatched: true,
  }

  return (
    <div className="space-y-6">
      <div className="relative w-full overflow-hidden rounded-lg aspect-video">
        <Image src={movie.image || "/placeholder.svg"} alt={movie.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold">{movie.title}</h1>
            <div className="flex items-center mt-1 space-x-2 text-muted-foreground">
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-primary" fill="#FF3A3A" />
                <span>{movie.rating}</span>
              </div>
              <span>•</span>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{movie.year}</span>
              </div>
              <span>•</span>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{movie.duration}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {movie.genres.map((genre) => (
            <Badge key={genre} variant="secondary">
              {genre}
            </Badge>
          ))}
        </div>

        <div className="flex space-x-3">
          <Button className="flex-1 bg-primary hover:bg-primary/90 btn-press">
            <Heart className="w-4 h-4 mr-2" fill={movie.isFavorite ? "white" : "none"} />
            Favorito
          </Button>
          <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/10 btn-press">
            <Check className="w-4 h-4 mr-2" />
            Vista
          </Button>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold">Sinopsis</h2>
          <p className="text-sm text-muted-foreground">{movie.description}</p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold">Director</h2>
          <p className="text-sm">{movie.director}</p>
        </div>
      </div>
    </div>
  )
}

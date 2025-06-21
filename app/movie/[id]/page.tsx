import { Navbar } from "@/components/navbar"
import { MovieDetail } from "@/components/movie-detail"
import { ReviewSection } from "@/components/review-section"
import { BottomNav } from "@/components/bottom-nav"
import { SimilarMovies } from "@/components/similar-movies"

export default function MovieDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen pb-16">
      <Navbar />
      <div className="container px-4 py-4 mx-auto space-y-6">
        <MovieDetail id={params.id} />
        <ReviewSection id={params.id} />
        <SimilarMovies id={params.id} />
      </div>
      <BottomNav />
    </main>
  )
}

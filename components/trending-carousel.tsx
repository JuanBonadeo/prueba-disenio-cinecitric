"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const trendingMovies = [
  { id: 1, title: "Dune: Part Two", rating: 4.8, image: "/placeholder.svg?height=500&width=300" },
  { id: 2, title: "Oppenheimer", rating: 4.7, image: "/placeholder.svg?height=500&width=300" },
  { id: 3, title: "Poor Things", rating: 4.5, image: "/placeholder.svg?height=500&width=300" },
  { id: 4, title: "The Batman", rating: 4.6, image: "/placeholder.svg?height=500&width=300" },
  { id: 5, title: "Barbie", rating: 4.4, image: "/placeholder.svg?height=500&width=300" },
]

export function TrendingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const scrollAmount = index * carouselRef.current.offsetWidth
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % trendingMovies.length
    setCurrentIndex(newIndex)
    scrollToIndex(newIndex)
  }

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + trendingMovies.length) % trendingMovies.length
    setCurrentIndex(newIndex)
    scrollToIndex(newIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="relative">
      <h2 className="mb-4 text-xl font-bold">Trending</h2>
      <div className="relative overflow-hidden rounded-lg">
        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {trendingMovies.map((movie, index) => (
            <div key={movie.id} className="flex-none w-full snap-center">
              <Link href={`/movie/${movie.id}`}>
                <Card className="relative overflow-hidden border-2 border-primary card-hover">
                  <div className="relative aspect-[16/9] w-full">
                    <Image src={movie.image || "/placeholder.svg"} alt={movie.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white">{movie.title}</h3>
                      <div className="flex items-center mt-2">
                        <Star className="w-5 h-5 mr-1 text-primary" fill="#FF3A3A" />
                        <span className="text-white">{movie.rating}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          ))}
        </div>

        <Button
          variant="secondary"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full z-10"
          onClick={handlePrev}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <Button
          variant="secondary"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full z-10"
          onClick={handleNext}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>

        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
          {trendingMovies.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-white/50"}`}
              onClick={() => {
                setCurrentIndex(index)
                scrollToIndex(index)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

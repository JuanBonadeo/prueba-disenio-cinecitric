import { Navbar } from "@/components/navbar"
import { TrendingCarousel } from "@/components/trending-carousel"
import { TopRatedSection } from "@/components/top-rated-section"
import { FilterTabs } from "@/components/filter-tabs"
import { BottomNav } from "@/components/bottom-nav"

export default function Home() {
  return (
    <main className="min-h-screen pb-16">
      <Navbar />
      <div className="container px-4 py-4 mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Descubre</h1>
        <TrendingCarousel />
        <FilterTabs />
        <TopRatedSection />
      </div>
      <BottomNav />
    </main>
  )
}

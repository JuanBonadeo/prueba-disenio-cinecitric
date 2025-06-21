import { Navbar } from "@/components/navbar"
import { SearchBar } from "@/components/search-bar"
import { SearchResults } from "@/components/search-results"
import { BottomNav } from "@/components/bottom-nav"

export default function SearchPage() {
  return (
    <main className="min-h-screen pb-16">
      <Navbar />
      <div className="container px-4 py-4 mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Buscar</h1>
        <SearchBar />
        <SearchResults />
      </div>
      <BottomNav />
    </main>
  )
}

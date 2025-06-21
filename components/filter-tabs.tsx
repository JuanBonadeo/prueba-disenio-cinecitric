"use client"

import { useState } from "react"

export function FilterTabs() {
  const [activeTab, setActiveTab] = useState("movies")

  return (
    <div className="flex border-b border-border">
      <button
        className={`px-4 py-2 text-sm font-medium transition-all ${activeTab === "movies" ? "active-tab" : "text-muted-foreground"}`}
        onClick={() => setActiveTab("movies")}
      >
        Películas
      </button>
      <button
        className={`px-4 py-2 text-sm font-medium transition-all ${activeTab === "series" ? "active-tab" : "text-muted-foreground"}`}
        onClick={() => setActiveTab("series")}
      >
        Series
      </button>
      <button
        className={`px-4 py-2 text-sm font-medium transition-all ${activeTab === "favorites" ? "active-tab" : "text-muted-foreground"}`}
        onClick={() => setActiveTab("favorites")}
      >
        Favoritos
      </button>
    </div>
  )
}

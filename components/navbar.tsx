import Link from "next/link"
import { Search, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">CineCritic</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/search">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Search className="w-5 h-5" />
              <span className="sr-only">Buscar</span>
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <Bell className="w-5 h-5" />
            <span className="sr-only">Notificaciones</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reviews = [
  {
    id: 1,
    user: {
      name: "Ana García",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AG",
    },
    rating: 5,
    date: "15 Mar 2024",
    content:
      "Una secuela espectacular que supera a la primera parte. La cinematografía es impresionante y la historia se desarrolla de manera fascinante. Villeneuve ha creado una obra maestra visual.",
  },
  {
    id: 2,
    user: {
      name: "Carlos Rodríguez",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "CR",
    },
    rating: 4,
    date: "10 Mar 2024",
    content:
      "Excelente continuación que profundiza en los personajes y expande el universo de manera coherente. Las actuaciones son sobresalientes, especialmente la de Timothée Chalamet.",
  },
  {
    id: 3,
    user: {
      name: "Laura Martínez",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "LM",
    },
    rating: 4.5,
    date: "5 Mar 2024",
    content:
      "Una película visualmente impresionante con efectos especiales de primer nivel. La trama es compleja pero bien ejecutada. Mi única crítica es que algunas partes del medio se sienten un poco lentas.",
  },
]

export function ReviewSection({ id }: { id: string }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Reseñas</h2>
      <div className="space-y-3">
        {reviews.map((review) => (
          <Card key={review.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Avatar>
                  <AvatarImage src={review.user.avatar || "/placeholder.svg"} alt={review.user.name} />
                  <AvatarFallback>{review.user.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{review.user.name}</h3>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                  <div className="flex items-center mt-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(review.rating) ? "text-primary" : "text-muted"}`}
                        fill={i < Math.floor(review.rating) ? "#FF3A3A" : "none"}
                      />
                    ))}
                    <span className="ml-2 text-sm">{review.rating}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{review.content}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

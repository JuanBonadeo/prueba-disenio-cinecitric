import { Navbar } from "@/components/navbar"
import { ProfileHeader } from "@/components/profile-header"
import { ProfileTabs } from "@/components/profile-tabs"
import { BottomNav } from "@/components/bottom-nav"

export default function ProfilePage() {
  return (
    <main className="min-h-screen pb-16">
      <Navbar />
      <div className="container px-4 py-4 mx-auto space-y-6">
        <ProfileHeader />
        <ProfileTabs />
      </div>
      <BottomNav />
    </main>
  )
}

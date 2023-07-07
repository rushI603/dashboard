import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import Profilebar from '@/components/Profilebar'
import Base from '@/components/Base'
export default function Home() {
  return (
    <main className="flex items-start nmx-2">
      <Sidebar/>
      <Profilebar/>
      <Base/>
    </main>
  )
}

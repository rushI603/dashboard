import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import Profilebar from '@/components/Profilebar'
import Base from '@/components/Base'
export default function Home() {
  return (
    <main className="flex items-start min-h-[515px]">
      <Sidebar/>
      <Profilebar className="m"/>
      <Base/>
    </main>
  )
}

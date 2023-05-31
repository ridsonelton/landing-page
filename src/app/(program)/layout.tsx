'use client'

import Header from '../components/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-w-full overflow-hidden">
      <div className="h-10 sm:h-16">
        <Header></Header>
      </div>
      <div className="w-full mx-auto ">{children}</div>
    </div>
  )
}

'use client'

import Header from '../components/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-w-full overflow-hidden">
      <div className="h-10 sm:h-16">
        <Header></Header>
      </div>
      <div className="w-full mx-auto container my-14">
        <div className="mx-8 lg:mx-16 xl:mx-36">{children}</div>
      </div>
    </div>
  )
}

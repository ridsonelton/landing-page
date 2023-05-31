'use client'

import Header from '../components/Header'
import { useState, createContext } from 'react'

export const HeaderContext = createContext({} as any)

export default function Layout({ children }: { children: React.ReactNode }) {
  const [header, setheader] = useState(0)
  return (
    <HeaderContext.Provider value={[header, setheader]}>
      <div className="min-w-full overflow-hidden">
        <div className="h-10 sm:h-16">
          <Header></Header>
        </div>
        <div className="w-full mx-auto ">{children}</div>
      </div>
    </HeaderContext.Provider>
  )
}

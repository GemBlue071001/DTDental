import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import '../index.css'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="page-content">
        {children}
      </main>
      <Footer />
    </>
  )
}

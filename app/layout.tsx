import './globals.css'
import { Navbar, Footer } from '@/components'

export const metadata = {
  title: 'PokéMount',
  description: 'Discover the best Pokémon mounts in the world!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

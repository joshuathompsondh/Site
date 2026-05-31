import type { Metadata } from 'next'
import { JetBrains_Mono, Cormorant_Garamond } from 'next/font/google'
import '@/styles/globals.css'
import { TopBar } from '@/components/shell/TopBar'
import { Sidebar } from '@/components/shell/Sidebar'
import { BottomPlayer } from '@/components/shell/BottomPlayer'
import { RightRail } from '@/components/shell/RightRail'
import { NoiseOverlay } from '@/components/ui/NoiseOverlay'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500', '700'],
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Gnostic Album Project — Exegesis on the World',
  description: 'Private dashboard for the Gnostic Album Project.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${cormorantGaramond.variable}`}
    >
      <body>
        <NoiseOverlay />

        {/* Top bar */}
        <TopBar />

        {/* Main shell: sidebar + content + right rail */}
        <div
          style={{
            position: 'fixed',
            top: '70px',
            bottom: '90px',
            left: 0,
            right: 0,
            display: 'flex',
          }}
        >
          {/* Left sidebar */}
          <Sidebar />

          {/* Scrollable content area */}
          <main
            style={{
              marginLeft: '220px',
              marginRight: '340px',
              flex: 1,
              overflowY: 'auto',
              overflowX: 'hidden',
              background: '#0a0907',
            }}
          >
            {children}
          </main>

          {/* Right rail */}
          <RightRail />
        </div>

        {/* Bottom player */}
        <BottomPlayer />
      </body>
    </html>
  )
}

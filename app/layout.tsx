import type { Metadata } from 'next'
import './styles.css'

export const metadata: Metadata = {
  title: 'Strato Lab - AI Influencer Knowledge Management',
  description: 'Track and analyze content from AI influencers like Matthew Berman, Lex Fridman, Joe Rogan, and All-In Podcast',
  keywords: 'AI, Influencers, Knowledge Management, Matthew Berman, Lex Fridman, Joe Rogan, All-In Podcast, OpenClaw, Machine Learning',
  authors: [{ name: 'Strato Lab' }],
  openGraph: {
    title: 'Strato Lab - AI Influencer Knowledge Management',
    description: 'Track and analyze content from AI influencers',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        padding: 0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        color: 'white',
        minHeight: '100vh'
      }}>
        {children}
      </body>
    </html>
  )
}
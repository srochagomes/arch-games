import './globals.css'
import type { Metadata } from 'next'
import Layout from './components/Layout'

export const metadata: Metadata = {
  title: 'Arch Games',
  description: 'Sistema de gerenciamento de imagens do Arch Games',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
} 
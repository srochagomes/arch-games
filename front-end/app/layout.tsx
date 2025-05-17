import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arch Games - Dados do Competidor',
  description: 'Formulário para inserção dos dados do competidor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
} 
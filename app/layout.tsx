import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Toda Meiga | Pulseiras Exclusivas Banhadas a Ouro e Prata",
  description:
    "Descubra nossa coleção exclusiva de pulseiras artesanais banhadas a ouro e prata refinada. Kit Rainha com 32 peças ou Kit Princesa com 16 peças. Luxo acessível para mulheres sofisticadas.",
  keywords:
    "joias exclusivas, pulseiras artesanais, ouro, prata refinada, acessórios femininos, luxo acessível, toda meiga",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

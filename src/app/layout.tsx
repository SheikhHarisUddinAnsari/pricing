

export const metadata = {
  title: 'Pricing UI',
  description: 'sample pricing ui using next.js + chakra_ui',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

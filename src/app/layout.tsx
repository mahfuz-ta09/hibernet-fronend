import type { Metadata } from "next"
import "./globals.css"
import Providers from "@/utils/Providers/Providers"


export const metadata: Metadata = {
  title: "Hiber-net",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body>
          {children}
        </body>
      </Providers>
    </html>
  )
}

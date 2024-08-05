import type { Metadata } from "next"
import "./globals.css"
import Providers from "@/utils/Providers/Providers"
import { Toaster } from "sonner";


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
          <Toaster  position="top-right" richColors/>
        </body>
      </Providers>
    </html>
  )
}

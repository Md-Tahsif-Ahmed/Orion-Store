import Providers from "@/providers";
import { publicSans } from "./fonts";
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.className} antialiased`}
      >
        <Providers>{children}</Providers>
        
      </body>
    </html>
  );
}

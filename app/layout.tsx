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
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { libration, titilliumWeb} from '@/app/fonts'
import "./globals.css";


export const metadata: Metadata = {
  title: "Awelecukwu Journal",
  description: "Awelechukwu Journal application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${titilliumWeb.variable} ${libration.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

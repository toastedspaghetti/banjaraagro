import type { Metadata } from "next";

import Header from "./components/header";
import Footer from "./components/footer";
import PageTransition from "./components/PageTransition";
import RecaptchaProvider from "./providers/RecaptchaProvider"; // ✅ Import here

// app/layout.tsx or pages/_app.tsx
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../../styles/custom.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Banjara Agro Group",
  description: "Banjara Agro Group",
  keywords: "Banjara agro Agriculture Nepal",
  icons: {
    icon: "/assets/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RecaptchaProvider>
          <PageTransition>
            <Header />
            {children}
            <Footer />
          </PageTransition>
        </RecaptchaProvider>
      </body>
    </html>
  );
}

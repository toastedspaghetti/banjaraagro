// app/layout.tsx
import "../globals.css";
import "../../../styles/custom.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PageTransition from "../components/PageTransition";
import BodyWrapper from "../components/BodyWrapper";

export const metadata = {
  title: "Banjara Agro Group",
  description: "Banjara Agro Group",
  icons: {
    icon: "/assets/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en">
    // <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <BodyWrapper>
      <PageTransition>{children}</PageTransition>
    </BodyWrapper>
    // </body>
    // </html>
  );
}

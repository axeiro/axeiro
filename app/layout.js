import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Axeiro — Technology Infrastructure for a Smarter World.",
    template: "%s | Axeiro",
  },
  description:
    "Axeiro builds technology products and infrastructure across cloud, safety, commerce, trading, and developer tools.",
  keywords: [
    "Axeiro",
    "technology infrastructure",
    "cloud infrastructure",
    "AI",
    "edge AI",
    "developer tools",
    "software engineering",
  ],
  authors: [{ name: "Axeiro" }],
  creator: "Axeiro",
  publisher: "Axeiro",
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable}`}
    >
      <body>
        <SmoothScroll />

        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
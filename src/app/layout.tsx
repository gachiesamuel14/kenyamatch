import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KenyaMatch - Location-Based Dating for Kenya",
  description: "Connect with people nearby in Kenya. Swipe, match, and chat based on location, county, interests, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-rose-50 to-orange-50 text-gray-900`}>
        <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-rose-600">KenyaMatch</Link>
            <div className="flex gap-4 text-sm font-medium">
              <Link href="/discover" className="hover:text-rose-600">Discover</Link>
              <Link href="/profile" className="hover:text-rose-600">Profile</Link>
              <Link href="/matches" className="hover:text-rose-600">Matches</Link>
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
        <footer className="text-center text-sm text-gray-500 py-6 border-t mt-12">
          KenyaMatch — Connecting Kenyans nearby. Built for Netlify + GitHub.
        </footer>
      </body>
    </html>
  );
}

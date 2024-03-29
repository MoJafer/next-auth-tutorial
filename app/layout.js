import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <main className="main">
            <h1 className="text-2xl mb-10">Next Auth</h1>
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}

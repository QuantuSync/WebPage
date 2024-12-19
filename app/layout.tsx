import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "SASCOI - Quantum & AI for Brain Health",
  description: "Transforming brain health through Quantum Computing and AI",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">{children}</body>
    </html>
  );
}

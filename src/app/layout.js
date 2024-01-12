import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "이끽기 포트폴리오",
  description: "오늘도 열공",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="bg-primary">
        <body className={inter.className}>{children}</body>
      </div>
    </html>
  );
}

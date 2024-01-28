import { Inter } from "next/font/google";
import "@/styles/global.css";
import "@/styles/reset.css";

import Header from "@/component/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="container">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

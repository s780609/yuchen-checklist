import { Inter } from "next/font/google";
import "@/app/globals.css";
import Notion from "./notion";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "yuchen checklist",
  description: "yuchen checklist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Notion></Notion>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MinimalWork – Find Legitimate Low-Effort Tech Jobs",
  description: "Job board filtering for roles with flexible requirements, minimal oversight, and great work-life balance."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e33cf48c-7614-4b29-a204-19b8e07ec982"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

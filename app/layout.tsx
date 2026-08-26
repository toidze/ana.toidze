import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-epilogue",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ana-portfolio.example.com"),
  title: {
    default: "Ana Toidze — Product Designer",
    template: "%s — Ana Toidze",
  },
  description:
    "Digital product designer with 8+ years of experience in complex SaaS products.",
  openGraph: {
    title: "Ana Toidze — Product Designer",
    description:
      "Digital product designer with 8+ years of experience in complex SaaS products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${epilogue.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper text-ink antialiased font-sans">
        {children}
      </body>
    </html>
  );
}

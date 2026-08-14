import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luke Ponga — Backend Software Developer",
  description:
    "Luke Ponga is a Hamilton, New Zealand software developer building practical, safety-focused systems, APIs, cloud tooling and AI experiences.",
  metadataBase: new URL("https://lukeponga.dev"),
  openGraph: {
    title: "Luke Ponga — Backend Software Developer",
    description: "Production-minded software, cloud systems and AI built in Aotearoa.",
    url: "https://lukeponga.dev",
    siteName: "Luke Ponga",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NZ">
      <body>{children}</body>
    </html>
  );
}

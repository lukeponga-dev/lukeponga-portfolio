import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Luke Ponga — Software Developer", template: "%s · Luke Ponga" },
  description: "Luke Ponga builds practical software, APIs, cloud systems and AI experiences from Aotearoa New Zealand.",
  metadataBase: new URL("https://lukeponga.dev"),
  alternates: { canonical: "https://lukeponga.dev" },
  openGraph: { title: "Luke Ponga — Software Developer", description: "Production-minded software, cloud systems and AI built in Aotearoa.", url: "https://lukeponga.dev", siteName: "Luke Ponga", locale: "en_NZ", type: "website" },
  twitter: { card: "summary_large_image", title: "Luke Ponga — Software Developer", description: "Production-minded software, cloud systems and AI built in Aotearoa." },
};

const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: "Luke Ponga", jobTitle: "Backend-focused software developer", address: { "@type": "PostalAddress", addressLocality: "Hamilton", addressCountry: "NZ" }, url: "https://lukeponga.dev", sameAs: ["https://github.com/lukeponga-dev", "https://www.linkedin.com/in/lukeponga"] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-NZ" suppressHydrationWarning><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{children}</body></html>;
}

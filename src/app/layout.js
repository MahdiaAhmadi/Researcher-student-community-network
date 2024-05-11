import "@/css/tailwind.css";
import "pliny/search/algolia.css";
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionContainer from "@/components/SectionContainer";
import siteMetadata from "@/data/siteMetadata";
import { Space_Grotesk } from "next/font/google";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: "./",
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang={siteMetadata.language} className="scroll-smooth">
      <body className="text-white h-screen w-full">
        <SectionContainer>
          <header className="sticky top-0 z-50">
            <Header />
          </header>
          <main className="h-full">
            {children}
          </main>
          <footer className="sticky bottom-0 z-50">
            <Footer />
          </footer>
        </SectionContainer>

      </body>
    </html >
  );
}

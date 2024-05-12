import "@/css/tailwind.css";
import "pliny/search/algolia.css";
import './globalicon.css';
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionContainer from "@/components/SectionContainer";
import siteMetadata from "@/data/siteMetadata";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ['latin'] });

export default function RootLayout({ children }) {

  return (
    <html lang={siteMetadata.language} className="scroll-smooth">
      <body className={"text-white h-screen w-full ".concat(lexend.className)}>
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

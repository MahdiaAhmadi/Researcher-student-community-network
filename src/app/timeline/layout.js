import "pliny/search/algolia.css";
import "../css/tailwind.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionContainer from "@/components/SectionContainer";
import siteMetadata from "@/data/siteMetadata";
import { Space_Grotesk } from "next/font/google";
import RecentViewPostCards from "../../components/RecentViewCard";

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

      <body className="bg-[#072344] text-white h-screen w-full">
        <SectionContainer>
          <header className="sticky top-0 z-50">
            <Header />
          </header>
          <main className="h-full">
            <div className="w-8/12 px-4">{children}</div>
            <div className="w-4/12 px-4">
                <div className="bg-gray-100 px-5 py-3 mt-6 shadow-md rounded-md flex-wrap">
                    <h1 className='font-black text-2xl text-black'>Recent Views</h1>
                    <RecentViewPostCards/>
                </div>       
            </div>
          </main>
        </SectionContainer>

      </body>

    </html>
  );
}

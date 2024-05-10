import "pliny/search/algolia.css";
import "../css/tailwind.css";

<<<<<<< HEAD
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import { Space_Grotesk } from 'next/font/google'
import PostCards from '@/components/PostCard'
import RecentViewTab from '@/components/RecentViewTab'
=======
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionContainer from "@/components/SectionContainer";
import siteMetadata from "@/data/siteMetadata";
import { Space_Grotesk } from "next/font/google";
>>>>>>> 3c7503a3be647b5362514a6de983deac5de5b4e4

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
<<<<<<< HEAD
    <html
      lang={siteMetadata.language}
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#072344" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <body className="pl-[calc(100vw-100%)] antialiased bg-[#072344] text-white">
        <div className="flex h-screen flex-col justify-between font-sans">
          <Header />
          <main className="flex flex-grow">
            <div className="w-8/12 px-4">
              <PostCards></PostCards>
              <PostCards></PostCards>
              <PostCards></PostCards>
            </div>
            <div className="w-4/12 px-4">
              <RecentViewTab/>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
=======
    <html lang={siteMetadata.language} className="scroll-smooth">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/static/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#072344"
        />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className="bg-[#072344] text-white h-screen w-full">
        <SectionContainer>
          <header className="sticky top-0 z-50">
            <Header />
          </header>
          <main className="flex-1">{children}</main>
          <footer className="sticky bottom-0 z-50">
            <Footer />
          </footer>
        </SectionContainer>
      </body>
    </html>
  );
}
>>>>>>> 3c7503a3be647b5362514a6de983deac5de5b4e4

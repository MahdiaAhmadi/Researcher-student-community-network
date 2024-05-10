import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
      <div className="flex h-screen flex-col justify-between font-sans">
        <Header />
        <main className="flex flex-grow">
            <div className="w-7/12 px-4"></div>
            <div className="w-5/12 px-4">{children}</div>
        </main>
      </div>
  );
}

import siteMetadata from "@/data/siteMetadata";
import Link from "./Link";

export default function Footer() {
  return (
    <footer className="  bg-secondary bg-cover h-14">
      <div className="flex flex-col items-center ">
        <div className="mb-2 mt-4 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  );
}

import Link from "./Link";
import MobileNav from "./MobileNav";
import SearchButton from "./SearchButton";
import UserIcon from "./Usericon";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between py-10  bg-secondary  px-10 ">
      <div>
        <Link href="/">
          <div className="flex items-center justify-between">
            <div className="mr-3"></div>
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              ResearchHub
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <Link
          href="/post/timeline"
          className="hidden font-medium text-white-100 dark:text-gray-100 sm:block hover:border-b-2  hover:border-spacing-1 hover:border-primary-950  hover:   hover:transition duration-100 ease-in-out "
        >
          Home
        </Link>
        <SearchButton />
        <UserIcon />
        <MobileNav />
      </div>
    </header>
  );
}

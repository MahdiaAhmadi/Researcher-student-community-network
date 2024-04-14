import Link from './Link'
import MobileNav from './MobileNav'
import SearchButton from './SearchButton'

export default function Header() {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/">
          <div className="flex items-center justify-between">
            <div className="mr-3">
            </div>
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              ResearchHub
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <Link
          href="/post/timeline"
          className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
        >
          Home
        </Link>
        <SearchButton />
        <MobileNav />
      </div>
    </header>
  )
}


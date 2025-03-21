import Image from "next/image"
import Link from "next/link"
import { Search, Github, Globe } from "lucide-react"

export function Header() {
  return (
    <header className="h-16 border-b border-[#1e2130] px-6 py-3 flex items-center justify-between">
      <Link href="/">
        <div className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <Image
              src="/header_logo.png?height=40&width=40"
              alt="Crudiverse Logo"
              width={40}
              height={40}
              className="text-[#60fefe]"
            />
          </div>
          <Image
              src="/header_name.png?height=28&width=97"
              alt="Crudiverse Name"
              width={97}
              height={28}
            />
        </div>
      </Link>

      <div className="flex-1 max-w-xl mx-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-[#545c78]" />
          </div>
          <input
            type="text"
            placeholder="Search for a framework or technology"
            className="w-full bg-[#545c78]/30 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder:text-[#545c78]"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <Link href="#" className="text-[#b3b3b3] hover:text-white transition-colors">
          Guides
        </Link>
        <Link href="#" className="text-[#b3b3b3] hover:text-white transition-colors">
          About
        </Link>
        <Globe className="h-5 w-5 text-[#b3b3b3] hover:text-white cursor-pointer transition-colors" />
        <Link target="_blank" href="https://github.com/DanielRagi/crudiverse">
          <Github className="h-5 w-5 text-[#b3b3b3] hover:text-white cursor-pointer transition-colors" />
        </Link>
      </div>
    </header>
  )
}


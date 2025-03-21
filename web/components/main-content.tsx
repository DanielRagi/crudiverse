import Image from "next/image"
import Link from "next/link"
import { Search, Github, Linkedin } from "lucide-react"
import { DatabaseIcon } from "@/components/database-icon"

export function MainContent() {
  return (
    <main className="flex-1 h-[calc(100vh-64px)] overflow-y-auto custom-scrollbar">
      <div className="p-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-[#194242] to-[#292441] rounded-lg p-10 mb-8">
          <div className="flex items-center justify-center gap-6">
            <div className="relative h-40 w-40 flex-shrink-0">
              <Image
                src="/hero_logo.png?height=160&width=160"
                alt="Crudiverse Logo"
                width={160}
                height={160}
              />
            </div>

            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">BUILD CRUD APPS</h1>
              <p className="text-[#b3b3b3]">
                The definitive guide to implementate CRUD
                <br />
                APIs and consumptions
              </p>
            </div>
          </div>

          <div className="mt-8 relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#545c78]" />
            </div>
            <input
              type="text"
              placeholder="Search your favorite framework"
              className="w-full bg-[#545c78]/30 rounded-full py-3 pl-10 pr-24 text-white placeholder:text-[#545c78]"
            />
            <button className="absolute right-1 top-1 bottom-1 px-6 bg-gradient-to-r from-[#60fefe]/20 to-[#60fefe]/40 text-[#0f101a] font-medium rounded-full hover:from-[#60fefe]/30 hover:to-[#60fefe]/50 transition-colors">
              GO
            </button>
          </div>
        </div>

        {/* Get Started Section */}
        <h2 className="text-2xl font-semibold mb-6">Get Started</h2>

        <div className="bg-[#1e2130]/70 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-2">I want to create an API with CRUD operations</h3>
          <p className="text-[#b3b3b3]">
            You can search your favorite backend framework and follow a simple guide with everything you need to create
            a functional API with the CRUD operations (Create, Read, Update, Delete) with and SQL or NoSQL example
            database.
          </p>
        </div>

        <div className="bg-[#1e2130]/70 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-2">I want to create an UI to consume an API</h3>
          <p className="text-[#b3b3b3]">
            You can search your favorite frontend framework and follow a simple guide with everything you need to create
            a functional user interface to consume the operations from an existing API.
          </p>
        </div>

        <div className="bg-[#1e2130]/70 rounded-lg p-6 mb-10">
          <h3 className="text-xl font-semibold mb-2">I just want the code</h3>
          <p className="text-[#b3b3b3]">
            If you just want to see or use the code with the example of the guide, you can visit our GitHub repo.
          </p>
        </div>

        {/* Centered Footer */}
        <div className="flex justify-center items-center mb-6">
          <div className="text-center">
            <div className="text-[#b3b3b3]">
              Created by: <Link target="_blank" href="https://www.danielramirez.pro/"><span className="text-white">Daniel Ramirez</span></Link>
            </div>
            <div className="flex justify-center gap-4 mt-2">
              <Link target="_blank" href="https://github.com/DanielRagi"><Github className="h-5 w-5 text-[#b3b3b3] hover:text-white cursor-pointer transition-colors" /></Link>
              <Link target="_blank" href="https://www.linkedin.com/in/danielramg/"><Linkedin className="h-5 w-5 text-[#b3b3b3] hover:text-white cursor-pointer transition-colors" /></Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


import Link from "next/link"
import { Github, ChevronDown } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function Sidebar() {
  return (
    <aside className="w-[400px] bg-[#1e2130]/30 h-[calc(100vh-64px)] flex flex-col">
      {/* Scrollable content area with custom scrollbar */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Explore</h2>

          <div className="space-y-6">
            <div className="bg-[#1e2130]/70 rounded-lg p-4 hover:bg-[#1e2130] transition-colors cursor-pointer">
              <h3 className="text-xl font-medium">Get Started</h3>
            </div>

            <Collapsible defaultOpen className="space-y-2">
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center justify-between p-2 hover:bg-[#1e2130]/50 rounded-md transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 bg-[#60fefe]/20 rounded flex items-center justify-center">
                      <div className="h-4 w-4 bg-[#60fefe]/80 rounded-sm"></div>
                    </div>
                    <span className="font-medium">Examples Database</span>
                  </div>
                  <ChevronDown className="h-5 w-5 text-[#545c78] transition-transform ui-open:rotate-180" />
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="ml-11 space-y-3 text-[#b3b3b3]">
                  <Link href="#" className="block text-sm hover:text-white transition-colors">
                    MySQL
                  </Link>
                  <Link href="#" className="block text-sm hover:text-white transition-colors">
                    MongoDB
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible defaultOpen className="space-y-2">
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center justify-between p-2 hover:bg-[#1e2130]/50 rounded-md transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 bg-[#60fefe]/20 rounded flex items-center justify-center">
                      <div className="h-4 w-4 bg-[#60fefe]/80 rounded-sm"></div>
                    </div>
                    <span className="font-medium">API Implementation</span>
                  </div>
                  <ChevronDown className="h-5 w-5 text-[#545c78] transition-transform ui-open:rotate-180" />
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="ml-11 space-y-3 text-[#b3b3b3]">
                  <Link href="#" className="block text-sm hover:text-white transition-colors">
                    Node.js + MySQL
                  </Link>
                  <Link href="#" className="block text-sm hover:text-white transition-colors">
                    Node.js + MongoDB
                  </Link>
                  <Link href="#" className="block text-sm hover:text-white transition-colors">
                    FastAPI + MySQL
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible defaultOpen className="space-y-2">
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center justify-between p-2 hover:bg-[#1e2130]/50 rounded-md transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 bg-[#60fefe]/20 rounded flex items-center justify-center">
                      <div className="h-4 w-4 bg-[#60fefe]/80 rounded-sm"></div>
                    </div>
                    <span className="font-medium">API Integration</span>
                  </div>
                  <ChevronDown className="h-5 w-5 text-[#545c78] transition-transform ui-open:rotate-180" />
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="ml-11 space-y-3 text-[#b3b3b3]">
                  <Link href="#" className="block text-sm hover:text-white transition-colors">
                    React
                  </Link>
                  <Link href="#" className="block text-sm hover:text-white transition-colors">
                    Next.js
                  </Link>
                  <Link href="#" className="block text-sm hover:text-white transition-colors">
                    Angular
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>

      {/* Fixed footer */}
      <div className="p-6 border-t border-[#1e2130] bg-[#1e2130]/30">
        <Link
          href="#"
          className="flex items-center justify-center gap-2 bg-[#60fefe]/20 text-[#60fefe] px-6 py-3 rounded-lg hover:bg-[#60fefe]/30 transition-colors w-full"
        >
          <Github className="h-5 w-5" />
          <span className="font-medium">VISIT GITHUB</span>
        </Link>
      </div>
    </aside>
  )
}


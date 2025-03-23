"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

interface TerminalBlockProps {
  commands: string[]
}

export function TerminalBlock({ commands }: TerminalBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(commands.join("\n"))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-lg overflow-hidden mb-6">
      <div className="bg-[#292441] px-4 py-2 text-sm text-[#b3b3b3] flex items-center">
        <span>Terminal</span>
      </div>
      <div className="relative">
        <pre className="bg-black p-4 overflow-x-auto text-sm font-mono">
          {commands.map((command, index) => (
            <div key={index} className="flex">
              <span className="text-[#60fefe] mr-2">$</span>
              <span className="text-white">{command}</span>
            </div>
          ))}
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 p-2 rounded-md bg-[#292441] hover:bg-[#3d3660] transition-colors"
          aria-label="Copy commands"
        >
          {copied ? <Check className="h-4 w-4 text-[#60fefe]" /> : <Copy className="h-4 w-4 text-[#b3b3b3]" />}
        </button>
      </div>
    </div>
  )
}


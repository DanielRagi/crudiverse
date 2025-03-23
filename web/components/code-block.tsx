"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

interface CodeBlockProps {
  code: string
  language: string
  filename?: string
}

export function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-lg overflow-hidden mb-6">
      {filename && (
        <div className="bg-[#292441] px-4 py-2 text-sm text-[#b3b3b3] flex items-center">
          <span>{filename}</span>
          <div className="ml-auto flex gap-2">
            <span className="text-xs text-[#60fefe]">{language}</span>
          </div>
        </div>
      )}
      <div className="relative">
        <pre className="bg-[#1e2130] p-4 overflow-x-auto text-sm text-white">
          <code>{code}</code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 p-2 rounded-md bg-[#292441] hover:bg-[#3d3660] transition-colors"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-4 w-4 text-[#60fefe]" /> : <Copy className="h-4 w-4 text-[#b3b3b3]" />}
        </button>
      </div>
    </div>
  )
}


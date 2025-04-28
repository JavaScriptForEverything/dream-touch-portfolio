// components/GetAQuoteButton.tsx
'use client'

import { MessageIcon } from '@/icons'
// import { MessageSquare } from 'lucide-react';

export default function GetAQuoteButton() {
  return (
    <button className="flex overflow-hidden rounded-md shadow-md cursor-pointer group ">
      <span className="bg-red-500/80 text-white px-4 py-3 text-sm font-semibold hover:bg-red-500 group-hover:bg-red-500 ">
        Get A Quote
      </span>
      <span className="bg-slate-700/80 px-3 py-2 flex items-center justify-center group-hover:bg-slate-700 ">
        {/* <MessageSquare className="w-4 h-4 text-white" /> */}
        <MessageIcon className="w-4 h-4 text-white" />
      </span>
    </button>
  )
}

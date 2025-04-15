// components/GetAQuoteButton.tsx
'use client';

import { MessageSquare } from 'lucide-react';

export default function GetAQuoteButton() {
  return (
    <button className="flex overflow-hidden rounded-md shadow-md">
      <span className="bg-red-500 text-white px-4 py-3 text-sm font-semibold">
        Get A Quote
      </span>
      <span className="bg-slate-700 px-3 py-2 flex items-center justify-center">
        <MessageSquare className="w-4 h-4 text-white" />
      </span>
    </button>
  );
}

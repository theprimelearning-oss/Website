'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { getWhatsAppLink, CONTEXTUAL_WA_MESSAGES } from '@/lib/constants';
import { db } from '@/lib/db';

export default function WhatsAppFloatingButton() {
  const settings = db.getSettings();
  const whatsappUrl = getWhatsAppLink(settings.whatsappNumber, CONTEXTUAL_WA_MESSAGES.general);

  return (
    <div className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-40 group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Prime Learning on WhatsApp"
        className="flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group-hover:rotate-6 border-2 border-white"
      >
        <MessageSquare className="w-7 h-7 fill-current" />
      </a>
      <div className="absolute right-16 top-2 hidden lg:group-hover:block bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
        Chat with us on WhatsApp 💬
      </div>
    </div>
  );
}

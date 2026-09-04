'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, GraduationCap } from 'lucide-react';
import { getTelLink, getWhatsAppLink, CONTEXTUAL_WA_MESSAGES } from '@/lib/constants';
import { db } from '@/lib/db';

interface MobileStickyBarProps {
  onOpenTrialModal?: () => void;
}

export default function MobileStickyBar({ onOpenTrialModal }: MobileStickyBarProps) {
  const settings = db.getSettings();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* Call Button */}
        <a
          href={getTelLink(settings.phone)}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition text-center"
        >
          <Phone className="w-4 h-4 text-slate-700 mb-0.5" />
          <span className="text-[11px] font-bold">Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={getWhatsAppLink(settings.whatsappNumber, CONTEXTUAL_WA_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition text-center shadow-sm"
        >
          <MessageSquare className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

        {/* Free Trial Button */}
        <Link
          href="/free-trial"
          onClick={(e) => {
            if (onOpenTrialModal) {
              e.preventDefault();
              onOpenTrialModal();
            }
          }}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-prime-orange text-white hover:bg-prime-orange-hover transition text-center shadow-md animate-pulse"
        >
          <GraduationCap className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[11px] font-bold">Free Trial</span>
        </Link>

      </div>
    </div>
  );
}

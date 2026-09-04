'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GraduationCap, MessageSquare, Phone, CheckCircle2, Star, Sparkles, Users, Award } from 'lucide-react';
import { getTelLink, getWhatsAppLink, CONTEXTUAL_WA_MESSAGES } from '@/lib/constants';
import { db } from '@/lib/db';

interface HeroProps {
  onOpenTrialModal?: () => void;
  onOpenEnquiryModal?: () => void;
}

export default function Hero({ onOpenTrialModal, onOpenEnquiryModal }: HeroProps) {
  const settings = db.getSettings();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-prime-orange-light/60 via-white to-slate-50/50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100">
      
      {/* Decorative background glow elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-prime-orange/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-400/10 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Small Trust Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-prime-orange/10 border border-prime-orange/20 text-prime-orange text-xs sm:text-sm font-bold">
              <Sparkles className="w-4 h-4 text-prime-orange animate-spin-slow" />
              <span>Trusted Local Coaching for Students in {settings.locationName}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Learn Better.{' '}
              <span className="text-prime-orange block sm:inline">Understand Better.</span>{' '}
              Achieve More.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              Quality coaching, personal attention and focused learning to help students build strong academic foundations and achieve their goals.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/free-trial"
                onClick={(e) => {
                  if (onOpenTrialModal) {
                    e.preventDefault();
                    onOpenTrialModal();
                  }
                }}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-base text-white bg-prime-orange hover:bg-prime-orange-hover shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5"
              >
                <GraduationCap className="w-5 h-5 mr-2.5" />
                Book a FREE Trial Class
              </Link>

              <a
                href={getWhatsAppLink(settings.whatsappNumber, CONTEXTUAL_WA_MESSAGES.freeTrial())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-base text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition"
              >
                <MessageSquare className="w-5 h-5 mr-2 text-emerald-600" />
                WhatsApp Us
              </a>

              <a
                href={getTelLink(settings.phone)}
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition"
              >
                <Phone className="w-4 h-4 mr-2 text-slate-600" />
                Call Now
              </a>
            </div>

            {/* Trust Footer Bullet */}
            <div className="pt-4 border-t border-slate-200/80 flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Personal Attention • Experienced Teachers • Student-Focused Learning</span>
            </div>

          </div>

          {/* Right Hero Visual (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Premium Hero Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/80 relative z-10 overflow-hidden">
                
                {/* Header Logo Display inside Card */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="relative w-36 h-10">
                    <Image 
                      src="/logo-transparent.png" 
                      alt="Prime Learning Logo" 
                      fill 
                      className="object-contain object-left" 
                    />
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-100 text-emerald-800">
                    Admissions Open
                  </span>
                </div>

                {/* Card Main Highlight Box */}
                <div className="my-6 p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center font-semibold text-prime-orange">
                      <Star className="w-3.5 h-3.5 mr-1 fill-current" />
                      Class 6 to Class 12
                    </span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-[10px]">Small Batches</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Maths & Science Focus</h3>
                  <p className="text-xs text-slate-300">
                    Concept clarity, regular chapter assessments, and direct parent communication.
                  </p>
                </div>

                {/* 3 Quick Cards Grid */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-prime-orange/10 text-prime-orange flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Small Batches</div>
                      <div className="text-[10px] text-slate-500">Max 15 Students</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">2 Expert Faculty</div>
                      <div className="text-[10px] text-slate-500">10+ Yrs Exp</div>
                    </div>
                  </div>
                </div>

                {/* Free Trial Urgent Badge */}
                <div className="mt-6 p-3 rounded-xl bg-amber-50 border border-amber-200 text-center">
                  <div className="text-xs font-bold text-amber-900">
                    ⚡ {settings.trialSlotsAvailable} Free Trial Slots Available This Week
                  </div>
                  <button
                    onClick={onOpenTrialModal}
                    className="mt-2 text-xs font-bold text-prime-orange hover:underline inline-flex items-center"
                  >
                    Reserve Your Seat Now &rarr;
                  </button>
                </div>

              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3 hidden sm:flex z-20">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm">
                  100%
                </div>
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Concept Focused</div>
                  <div className="text-slate-500">No Rote Learning</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Heart, ShieldCheck, Award, CheckCircle2, GraduationCap, Users } from 'lucide-react';
import { db } from '@/lib/db';

export default function AboutPage() {
  const settings = db.getSettings();

  return (
    <div className="py-12 bg-white space-y-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-prime-orange-light/50 to-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-prime-orange uppercase tracking-wider bg-prime-orange/10 px-3 py-1 rounded-full">
            About Our Institute
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
            About Prime Learning
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A trusted local coaching institute built on quality teaching, personal student attention, strong fundamentals, and genuine academic growth.
          </p>
        </div>
      </section>

      {/* 1. Our Story & Why We Started */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-prime-orange uppercase tracking-wider">Our Story</span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Why We Started Prime Learning
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Prime Learning was founded with a clear objective: to fill the gap left by large, overcrowded coaching centers where students often become just another roll number.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We recognized that students achieve their highest potential when educators take the time to understand individual learning paces, clarify basic doubts without judgment, and provide continuous support to build confidence.
            </p>
          </div>

          <div className="lg:col-span-6 bg-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-6">
            <div className="relative w-40 h-10">
              <Image src="/logo-transparent.png" alt="Prime Learning Logo" fill className="object-contain object-left" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Core Mission</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              To empower school students in mathematics and science through concept-based learning, small batch interaction, transparent parent updates, and disciplined academic practice.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                <div className="text-lg font-bold text-prime-orange">Small Batches</div>
                <div className="text-[11px] text-slate-400">Max 15 Students per batch</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                <div className="text-lg font-bold text-emerald-400">100% Focused</div>
                <div className="text-[11px] text-slate-400">Individual doubt resolution</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Our Teaching Philosophy & Approach */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">Our Teaching Approach</h2>
            <p className="text-sm text-slate-600">How we help students overcome subject fear and build academic confidence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-prime-orange/10 text-prime-orange flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-base">Concept Foundation First</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Before attempting complex numericals or board questions, we ensure the core theoretical concept is crystal clear.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-base">Guided Problem Solving</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Teachers work through step-by-step examples on the board before students practice independently in class.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-base">Regular Assessment & Feedback</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fortnightly chapter assessments help identify individual weak points early so corrective guidance is provided immediately.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. What Makes Us Different */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-md space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center">
            What Makes Prime Learning Different?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">Experienced Local Teachers:</strong> Classes are led directly by senior educators with over a decade of teaching experience.
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">Strictly Small Batches:</strong> We limit batch sizes to 15 students so no student is left behind in doubts.
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">Transparent Parent Updates:</strong> Regular attendance reporting and test score breakdown delivered straight to parents on WhatsApp.
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">Approachable Environment:</strong> A supportive, encouraging atmosphere where students feel comfortable asking any question.
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/free-trial"
              className="py-3.5 px-8 rounded-xl font-bold text-sm text-white bg-prime-orange hover:bg-prime-orange-hover shadow-lg transition inline-flex items-center"
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Experience a FREE Trial Class
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

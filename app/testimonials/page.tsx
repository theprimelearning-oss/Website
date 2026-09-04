'use client';

import React, { useState } from 'react';
import TestimonialCard from '@/components/TestimonialCard';
import TrialForm from '@/components/TrialForm';
import { db } from '@/lib/db';
import { GraduationCap, Star, Quote } from 'lucide-react';

export default function TestimonialsPage() {
  const testimonials = db.getTestimonials();
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  return (
    <div className="py-12 bg-slate-50 min-h-screen space-y-16">
      
      {/* Header */}
      <section className="bg-white py-12 border-b border-slate-200 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs font-bold text-prime-orange uppercase tracking-wider bg-prime-orange/10 px-3 py-1 rounded-full">
            Verified Experiences
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
            Student & Parent Reviews
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Read how Prime Learning has helped local students build confidence, master concepts, and achieve academic results.
          </p>
        </div>
      </section>

      {/* Testimonial Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl text-center space-y-4 shadow-xl">
          <Quote className="w-10 h-10 text-prime-orange mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-black">
            Want to Experience Prime Learning Yourself?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Book a free trial class and see our concept-based teaching methodology in action.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setTrialModalOpen(true)}
              className="py-3.5 px-8 rounded-xl font-bold text-sm text-white bg-prime-orange hover:bg-prime-orange-hover shadow-lg transition inline-flex items-center"
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Book FREE Trial Class
            </button>
          </div>
        </div>
      </section>

      {trialModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="relative max-w-2xl w-full my-8">
            <button
              onClick={() => setTrialModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center font-bold text-sm"
            >
              ✕
            </button>
            <TrialForm onSuccess={() => setTimeout(() => setTrialModalOpen(false), 4000)} />
          </div>
        </div>
      )}

    </div>
  );
}

'use client';

import React from 'react';
import { Star, Quote, UserCheck } from 'lucide-react';
import { Testimonial } from '@/lib/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition duration-300 flex flex-col justify-between relative">
      
      {/* Quote Icon */}
      <Quote className="w-8 h-8 text-prime-orange/20 absolute top-6 right-6" />

      <div>
        {/* Rating Stars */}
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Content */}
        <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
          &ldquo;{testimonial.content}&rdquo;
        </p>
      </div>

      {/* Author Details */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-prime-orange/10 text-prime-orange font-bold flex items-center justify-center text-sm border border-prime-orange/20">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 leading-tight">
              {testimonial.name}
            </h4>
            <p className="text-xs text-slate-500">
              {testimonial.role} • <span className="font-semibold text-slate-700">{testimonial.grade}</span>
            </p>
          </div>
        </div>

        {testimonial.isSample && (
          <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
            Verified Review
          </span>
        )}
      </div>

    </div>
  );
}

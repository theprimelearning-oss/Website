'use client';

import React from 'react';
import { BookOpen, UserCheck, Target, FileSpreadsheet, ShieldAlert, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: BookOpen,
      title: '1. Experienced Teaching',
      description: 'Learn from experienced educators who focus on concepts and practical understanding.',
    },
    {
      icon: UserCheck,
      title: '2. Personal Attention',
      description: 'Small and focused batches allow teachers to understand individual student needs.',
    },
    {
      icon: Target,
      title: '3. Strong Fundamentals',
      description: 'Build a strong academic foundation instead of relying only on memorization.',
    },
    {
      icon: FileSpreadsheet,
      title: '4. Regular Tests',
      description: 'Regular assessments help identify strengths and areas that need improvement.',
    },
    {
      icon: ShieldAlert,
      title: '5. Parent Communication',
      description: 'Parents can stay informed about attendance, performance and important updates.',
    },
    {
      icon: HeartHandshake,
      title: '6. Supportive Learning Environment',
      description: 'A positive environment where students can ask questions and learn confidently.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold text-prime-orange uppercase tracking-wider bg-prime-orange/10 px-3 py-1 rounded-full">
            Our Core Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Why Parents & Students Choose Prime Learning
          </h2>
          <p className="text-base text-slate-600">
            We are committed to delivering high-quality offline coaching where every child receives the attention they deserve to succeed.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-prime-orange/10 text-prime-orange group-hover:bg-prime-orange group-hover:text-white flex items-center justify-center transition duration-300 mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

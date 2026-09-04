'use client';

import React from 'react';
import { Award, Users, UserCheck, BarChart3 } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      icon: Award,
      title: 'Experienced Teachers',
      subtitle: 'Qualified educators with 10+ years teaching experience.',
      color: 'text-prime-orange bg-prime-orange-light border-prime-orange/30',
    },
    {
      icon: Users,
      title: 'Small Batch Learning',
      subtitle: 'Limited students per batch ensuring every voice is heard.',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
      icon: UserCheck,
      title: 'Personal Attention',
      subtitle: 'Individual doubt-clearing sessions for every student.',
      color: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
      icon: BarChart3,
      title: 'Regular Performance Tracking',
      subtitle: 'Chapter tests with transparent progress updates for parents.',
      color: 'text-purple-600 bg-purple-50 border-purple-200',
    },
  ];

  return (
    <section className="py-10 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const IconComp = stat.icon;
            return (
              <div 
                key={index} 
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition duration-300 flex items-start space-x-4"
              >
                <div className={`p-3 rounded-xl border shrink-0 ${stat.color}`}>
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-tight">
                    {stat.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {stat.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

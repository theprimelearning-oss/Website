'use client';

import React from 'react';
import Link from 'next/link';
import { Award, BookOpen, User, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { Teacher } from '@/lib/types';

interface TeacherCardProps {
  teacher: Teacher;
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group">
      
      {/* Top Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white relative">
        <div className="flex items-center space-x-4">
          
          {/* Avatar Placeholder / Photo */}
          <div className="w-20 h-20 rounded-2xl bg-prime-orange/20 border-2 border-prime-orange flex items-center justify-center text-white shrink-0 overflow-hidden shadow-inner relative">
            <User className="w-10 h-10 text-white/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-prime-orange text-white uppercase tracking-wider">
              Faculty Member
            </span>
            <h3 className="text-xl font-extrabold text-white mt-1 group-hover:text-prime-orange transition">
              {teacher.name}
            </h3>
            <p className="text-xs text-slate-300 font-medium">
              {teacher.qualification}
            </p>
            <div className="inline-flex items-center space-x-1 text-[11px] text-amber-400 font-bold mt-1">
              <Award className="w-3.5 h-3.5" />
              <span>{teacher.experience}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Body Details */}
      <div className="p-6 space-y-4 text-sm text-slate-700 flex-grow">
        
        {/* Subjects & Classes Tags */}
        <div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Subjects & Classes Taught
          </div>
          <div className="flex flex-wrap gap-1.5">
            {teacher.subjects.map((sub, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-lg text-xs font-bold bg-prime-orange-light text-prime-orange border border-prime-orange/20">
                {sub}
              </span>
            ))}
            {teacher.classesTaught.map((cls, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700">
                {cls}
              </span>
            ))}
          </div>
        </div>

        {/* Teaching Philosophy */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 italic text-xs text-slate-600 leading-relaxed">
          &ldquo;{teacher.teachingPhilosophy}&rdquo;
        </div>

        {/* Key Expertise */}
        <div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Key Areas of Expertise
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {teacher.areasOfExpertise.map((exp, idx) => (
              <div key={idx} className="flex items-center space-x-1.5 text-slate-700">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>{exp}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer CTA */}
      <div className="p-4 bg-slate-50 border-t border-slate-100">
        <Link
          href={`/teachers#${teacher.id}`}
          className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-prime-orange transition flex items-center justify-center shadow-md group-hover:shadow-lg"
        >
          <span>View Complete Profile</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>

    </div>
  );
}

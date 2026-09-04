'use client';

import React from 'react';
import TeacherCard from '@/components/TeacherCard';
import { db } from '@/lib/db';
import { GraduationCap, Award, BookOpen, Star, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function TeachersPage() {
  const teachers = db.getTeachers();

  return (
    <div className="py-12 bg-slate-50 min-h-screen space-y-16">
      
      {/* Header */}
      <section className="bg-white py-12 border-b border-slate-200 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs font-bold text-prime-orange uppercase tracking-wider bg-prime-orange/10 px-3 py-1 rounded-full">
            Faculty Directory
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
            Meet Our Teachers
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Experienced, passionate educators dedicated to building student fundamentals, confidence, and academic success.
          </p>
        </div>
      </section>

      {/* Teachers List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>

        {/* Detailed Profiles Section */}
        <div className="space-y-12 pt-8 border-t border-slate-200">
          <h2 className="text-2xl font-black text-slate-900 text-center">Detailed Faculty Profiles</h2>
          
          {teachers.map((teacher) => (
            <div 
              key={teacher.id} 
              id={teacher.id} 
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-6 max-w-4xl mx-auto"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 pb-6 gap-4">
                <div>
                  <span className="text-xs font-bold text-prime-orange uppercase">Faculty Profile</span>
                  <h3 className="text-2xl font-black text-slate-900">{teacher.name}</h3>
                  <div className="text-xs text-slate-500 font-semibold">{teacher.qualification} • {teacher.experience}</div>
                </div>

                <Link
                  href={`/free-trial?teacher=${encodeURIComponent(teacher.name)}`}
                  className="py-2.5 px-5 rounded-xl font-bold text-xs text-white bg-prime-orange hover:bg-prime-orange-hover transition shadow"
                >
                  Book Trial in {teacher.name.split(' ')[0]}&apos;s Class
                </Link>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs text-slate-400 tracking-wider mb-1">Teaching Approach & Philosophy</h4>
                  <p className="bg-slate-50 p-4 rounded-2xl italic border border-slate-100 text-slate-600">
                    &ldquo;{teacher.teachingPhilosophy}&rdquo;
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs text-slate-400 tracking-wider mb-2">Areas of Expertise</h4>
                    <ul className="space-y-1.5">
                      {teacher.areasOfExpertise.map((exp, i) => (
                        <li key={i} className="flex items-center space-x-2 text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs text-slate-400 tracking-wider mb-2">Key Achievements</h4>
                    <ul className="space-y-1.5">
                      {teacher.achievements.map((ach, i) => (
                        <li key={i} className="flex items-center space-x-2 text-slate-700">
                          <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs text-slate-400 tracking-wider mb-2">Student & Parent Feedback</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {teacher.studentFeedback.map((fb, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-900 text-xs">{fb.author}</span>
                          <div className="flex space-x-0.5">
                            {[...Array(fb.rating)].map((_, r) => (
                              <Star key={r} className="w-3 h-3 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 italic">&ldquo;{fb.comment}&rdquo;</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}

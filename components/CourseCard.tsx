'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, IndianRupee, Users, CheckCircle2, MessageSquare, GraduationCap } from 'lucide-react';
import { Course } from '@/lib/types';
import { getWhatsAppLink, CONTEXTUAL_WA_MESSAGES } from '@/lib/constants';
import { db } from '@/lib/db';

interface CourseCardProps {
  course: Course;
  onOpenTrialModal?: (course: Course) => void;
  onOpenEnquiryModal?: (course: Course) => void;
}

export default function CourseCard({ course, onOpenTrialModal, onOpenEnquiryModal }: CourseCardProps) {
  const settings = db.getSettings();

  const getStatusBadge = (status: Course['status']) => {
    switch (status) {
      case 'Fast Filling':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Full':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      default:
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      
      {/* Top Header */}
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-prime-orange bg-prime-orange-light px-3 py-1 rounded-full uppercase tracking-wider">
            {course.grade}
          </span>
          <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${getStatusBadge(course.status)}`}>
            {course.status} • {course.availableSeats} Seats Left
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 group-hover:text-prime-orange transition">
          {course.subject}
        </h3>

        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          {course.description}
        </p>
      </div>

      {/* Details Box */}
      <div className="p-6 bg-slate-50/60 space-y-3 text-xs text-slate-700">
        <div className="flex items-center space-x-2.5">
          <Clock className="w-4 h-4 text-prime-orange shrink-0" />
          <span className="font-semibold">{course.batchTiming}</span>
        </div>

        <div className="flex items-center space-x-2.5">
          <IndianRupee className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="font-bold text-slate-900 text-sm">{course.monthlyFee}</span>
        </div>

        <div className="pt-2 border-t border-slate-200/80 space-y-1.5">
          {course.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-center space-x-2 text-slate-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTAs Footer */}
      <div className="p-4 bg-white border-t border-slate-100 grid grid-cols-2 gap-2">
        <button
          onClick={() => onOpenTrialModal ? onOpenTrialModal(course) : null}
          className="w-full py-2.5 px-3 rounded-xl font-bold text-xs text-white bg-prime-orange hover:bg-prime-orange-hover transition flex items-center justify-center shadow-sm"
        >
          <GraduationCap className="w-3.5 h-3.5 mr-1" />
          Book Free Trial
        </button>

        <a
          href={getWhatsAppLink(settings.whatsappNumber, CONTEXTUAL_WA_MESSAGES.courseEnquiry(`${course.grade} ${course.subject}`))}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-3 rounded-xl font-bold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 transition flex items-center justify-center"
        >
          <MessageSquare className="w-3.5 h-3.5 mr-1 text-emerald-600" />
          Enquire Now
        </a>
      </div>

    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import CourseCard from '@/components/CourseCard';
import TeacherCard from '@/components/TeacherCard';
import TestimonialCard from '@/components/TestimonialCard';
import TrialForm from '@/components/TrialForm';
import LocationSection from '@/components/LocationSection';
import FAQSection from '@/components/FAQSection';
import EnquiryModal from '@/components/EnquiryModal';
import { db } from '@/lib/db';
import { Course } from '@/lib/types';
import { GraduationCap, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { getWhatsAppLink, CONTEXTUAL_WA_MESSAGES } from '@/lib/constants';

export default function HomePage() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | undefined>(undefined);

  const courses = db.getCourses();
  const teachers = db.getTeachers();
  const testimonials = db.getTestimonials();
  const settings = db.getSettings();

  const handleOpenTrialModal = (course?: Course) => {
    setSelectedCourse(course);
    setTrialModalOpen(true);
  };

  const handleOpenEnquiryModal = (course?: Course) => {
    setSelectedCourse(course);
    setEnquiryModalOpen(true);
  };

  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section */}
      <Hero 
        onOpenTrialModal={() => handleOpenTrialModal()}
        onOpenEnquiryModal={() => handleOpenEnquiryModal()}
      />

      {/* 2. Hero Trust Stats Cards */}
      <StatsSection />

      {/* 3. Why Choose Prime Learning (6 Pillars) */}
      <WhyChooseUs />

      {/* 4. Courses & Classes Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-prime-orange uppercase tracking-wider bg-prime-orange/10 px-3 py-1 rounded-full">
                Academic Programs
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                Our Popular Coaching Classes
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                Structured batches for Class 6 to Class 12 designed for concept mastery and board exam success.
              </p>
            </div>

            <Link
              href="/courses"
              className="inline-flex items-center text-sm font-bold text-prime-orange hover:text-prime-orange-hover group"
            >
              <span>View All Courses & Fee Details</span>
              <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, 6).map((course) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                onOpenTrialModal={handleOpenTrialModal}
                onOpenEnquiryModal={handleOpenEnquiryModal}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 5. Teachers Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-prime-orange uppercase tracking-wider bg-prime-orange/10 px-3 py-1 rounded-full">
              Expert Educator Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Meet Our Teachers
            </h2>
            <p className="text-sm text-slate-600">
              Dedicated educators who prioritize conceptual understanding, individual attention, and continuous student feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>

        </div>
      </section>

      {/* 6. FREE TRIAL CLASS Registration Section */}
      <section id="free-trial-section" className="py-16 sm:py-24 bg-gradient-to-b from-white via-prime-orange-light/30 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrialForm 
            initialCourse={selectedCourse ? { grade: selectedCourse.grade, subject: selectedCourse.subject } : undefined}
          />
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-prime-orange uppercase tracking-wider bg-prime-orange/10 px-3 py-1 rounded-full">
              Parent & Student Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              What Parents & Students Say
            </h2>
            <p className="text-sm text-slate-600">
              Real experiences from families who trust Prime Learning for their children&apos;s education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>

          {/* Testimonials CTA */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md text-center max-w-2xl mx-auto space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Want to Experience Prime Learning Firsthand?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Book a no-risk free trial class and see our teaching methodology in action.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleOpenTrialModal()}
                className="py-3 px-6 rounded-xl font-bold text-sm text-white bg-prime-orange hover:bg-prime-orange-hover shadow-md transition inline-flex items-center"
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Book Your FREE Trial Class
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Location Section */}
      <LocationSection />

      {/* 9. FAQ Section */}
      <FAQSection />

      {/* 10. WhatsApp Community Banner */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
            Official WhatsApp Community
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Stay Connected With Prime Learning
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Receive class updates, test timetables, holiday notices, and free study materials directly on your phone.
          </p>
          <div className="pt-2">
            <a
              href={settings.whatsappCommunityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg transition"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Join Official WhatsApp Community
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Modals */}
      <EnquiryModal 
        isOpen={enquiryModalOpen} 
        onClose={() => setEnquiryModalOpen(false)}
        initialCourse={selectedCourse ? { grade: selectedCourse.grade, subject: selectedCourse.subject } : undefined}
      />

      {trialModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="relative max-w-2xl w-full my-8">
            <button
              onClick={() => setTrialModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center font-bold text-sm"
            >
              ✕
            </button>
            <TrialForm 
              initialCourse={selectedCourse ? { grade: selectedCourse.grade, subject: selectedCourse.subject } : undefined}
              onSuccess={() => {
                setTimeout(() => setTrialModalOpen(false), 4000);
              }}
            />
          </div>
        </div>
      )}

    </div>
  );
}

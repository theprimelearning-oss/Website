'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { db } from '@/lib/db';

export default function FAQSection() {
  const settings = db.getSettings();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What classes do you teach at Prime Learning?',
      a: 'We offer coaching classes for students from Class 6 through Class 12, covering middle school foundation concepts, high school board preparation, and senior secondary subjects.',
    },
    {
      q: 'Which subjects are available for enrollment?',
      a: 'Our core focus is Mathematics and Science (Physics & Chemistry). We also provide specialized Foundation Math, Integrated Science, and Senior Physics modules.',
    },
    {
      q: 'How can I book a free trial class?',
      a: 'You can book a free trial class by clicking "Book Free Trial" on our website navbar or hero section, filling out the quick registration form, or contacting us directly via WhatsApp/Call.',
    },
    {
      q: 'How much are the monthly fees?',
      a: 'Our fees range from ₹1,800/month for foundation classes up to ₹3,000/month for Class 11-12 specialized courses. Detailed batch fee listings can be found on our Fees & Timings page.',
    },
    {
      q: 'Where is Prime Learning located?',
      a: `Our physical coaching center is located at: ${settings.address} (Landmark: ${settings.landmark}). You can view our exact location on Google Maps on our Contact page.`,
    },
    {
      q: 'Do you provide personal attention to every student?',
      a: 'Yes! We strictly maintain small batch sizes (maximum 15 students per batch) to ensure that our teachers can answer individual doubts, track homework, and provide personalized feedback.',
    },
    {
      q: 'How can parents contact the teachers?',
      a: 'Parents can reach our teachers during center hours, call our official line, or receive direct regular attendance and test performance reports via WhatsApp and parent-teacher meetings.',
    },
    {
      q: 'How can I join the Prime Learning WhatsApp community?',
      a: 'You can join our official WhatsApp community by clicking the "Join WhatsApp Community" link on our website footer or home page to receive instant test updates, schedules, and study material announcements.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-prime-orange/10 text-prime-orange text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600">
            Find quick answers to common questions about our coaching classes, trial sessions, and admissions.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-slate-900 text-sm sm:text-base hover:text-prime-orange transition focus:outline-none"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-prime-orange shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

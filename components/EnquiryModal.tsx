'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { db } from '@/lib/db';
import { getWhatsAppLink, CONTEXTUAL_WA_MESSAGES } from '@/lib/constants';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourse?: { grade?: string; subject?: string };
}

export default function EnquiryModal({ isOpen, onClose, initialCourse }: EnquiryModalProps) {
  const settings = db.getSettings();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grade: initialCourse?.grade || 'Class 10',
    subject: initialCourse?.subject || 'Mathematics',
    preferredTiming: 'Evening (5:30 PM)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    db.addEnquiry({
      name: formData.name,
      phone: formData.phone,
      grade: formData.grade,
      subject: formData.subject,
      preferredTiming: formData.preferredTiming,
      message: formData.message,
    });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative border border-slate-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center space-y-4 py-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Enquiry Submitted!</h3>
            <p className="text-xs text-slate-600">
              Thank you for contacting Prime Learning. We will reach out to you at <strong>{formData.phone}</strong> shortly.
            </p>
            <div className="pt-2 flex flex-col space-y-2">
              <a
                href={getWhatsAppLink(settings.whatsappNumber, CONTEXTUAL_WA_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 transition flex items-center justify-center"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Chat on WhatsApp Now
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2 rounded-xl text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold text-prime-orange bg-prime-orange-light px-2.5 py-1 rounded-full uppercase tracking-wider">
                Quick Enquiry
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-2">
                Enquire About Classes
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in your details below and our team will get back to you promptly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Parent / Student Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-prime-orange text-xs outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-prime-orange text-xs outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Class / Grade
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-prime-orange text-xs outline-none bg-white"
                  >
                    <option value="Class 6">Class 6</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Subject & Message
                </label>
                <textarea
                  rows={2}
                  placeholder="Which subject or timing are you looking for?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-prime-orange text-xs outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-prime-orange hover:bg-prime-orange-hover transition shadow-md flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Enquiry</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}

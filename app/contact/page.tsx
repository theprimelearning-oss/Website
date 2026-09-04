'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, MessageSquare, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { db } from '@/lib/db';
import { getTelLink, getWhatsAppLink, CONTEXTUAL_WA_MESSAGES } from '@/lib/constants';

export default function ContactPage() {
  const settings = db.getSettings();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    db.addEnquiry({
      name: formData.name,
      phone: formData.phone,
      grade: 'General',
      subject: 'General Enquiry',
      preferredTiming: 'Any',
      message: `${formData.email ? `Email: ${formData.email} | ` : ''}${formData.message}`,
    });
    setSubmitted(true);
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen space-y-12">
      
      {/* Header */}
      <section className="bg-white py-12 border-b border-slate-200 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="relative w-48 h-12 mx-auto">
            <Image src="/logo-transparent.png" alt="Prime Learning Logo" fill className="object-contain" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 pt-2">
            Contact Prime Learning
          </h1>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Have questions regarding admissions, fee plans, or course schedules? Reach out to us directly.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-6">
            <h2 className="text-xl font-black text-slate-900">Institute Information</h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-prime-orange shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">{settings.name}</div>
                  <div className="text-slate-600">{settings.address}</div>
                  <div className="text-xs font-semibold text-prime-orange mt-0.5">Landmark: {settings.landmark}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-prime-orange shrink-0" />
                <a href={getTelLink(settings.phone)} className="hover:text-prime-orange font-bold">
                  {settings.phone}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                <a 
                  href={getWhatsAppLink(settings.whatsappNumber, CONTEXTUAL_WA_MESSAGES.general)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-700 hover:underline font-bold"
                >
                  WhatsApp: {settings.whatsappNumber}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-prime-orange shrink-0" />
                <span>{settings.email}</span>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Center Opening Hours</div>
                  <div className="text-slate-600">{settings.openingHours}</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2">
              <a
                href={getWhatsAppLink(settings.whatsappNumber, CONTEXTUAL_WA_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 transition shadow flex items-center justify-center"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Chat Live on WhatsApp
              </a>

              <a
                href={getTelLink(settings.phone)}
                className="w-full py-3 rounded-xl font-bold text-xs text-slate-800 bg-slate-100 hover:bg-slate-200 transition flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2 text-slate-600" />
                Call Center Directly
              </a>
            </div>
          </div>

          {/* Contact Form & Map (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md">
              <h2 className="text-xl font-black text-slate-900 mb-6">Send Us a Direct Enquiry</h2>

              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Thank you! Your message has been sent.</h3>
                  <p className="text-xs text-slate-600">Our team will call or WhatsApp you at {formData.phone} shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-prime-orange text-sm outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-prime-orange text-sm outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="e.g. parent@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-prime-orange text-sm outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Your Message / Question *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-prime-orange text-sm outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-extrabold text-sm text-white bg-prime-orange hover:bg-prime-orange-hover shadow-lg transition flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry</span>
                  </button>
                </form>
              )}
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md h-72">
              <iframe
                title="Prime Learning Map Location"
                src={settings.googleMapsEmbedUrl}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

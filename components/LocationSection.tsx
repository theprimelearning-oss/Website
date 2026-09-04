'use client';

import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation } from 'lucide-react';
import { getTelLink, getWhatsAppLink, CONTEXTUAL_WA_MESSAGES } from '@/lib/constants';
import { db } from '@/lib/db';

export default function LocationSection() {
  const settings = db.getSettings();

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-prime-orange uppercase tracking-wider bg-prime-orange/10 px-3 py-1 rounded-full">
            Visit Our Center
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Find Prime Learning Near You
          </h2>
          <p className="text-sm text-slate-600">
            Conveniently located for local students and parents with easy public transport connectivity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Side (5 cols) */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-md flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              <h3 className="text-2xl font-bold text-slate-900">
                {settings.name} Center
              </h3>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-prime-orange/10 text-prime-orange flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Full Address</div>
                    <div className="text-slate-600 mt-0.5">{settings.address}</div>
                    <div className="text-xs font-semibold text-prime-orange mt-1">Landmark: {settings.landmark}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Center Opening Hours</div>
                    <div className="text-slate-600 mt-0.5">{settings.openingHours}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Contact Number</div>
                    <a href={getTelLink(settings.phone)} className="text-slate-600 hover:text-prime-orange font-semibold">
                      {settings.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-4 border-t border-slate-100">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(settings.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 transition flex items-center justify-center"
              >
                <Navigation className="w-3.5 h-3.5 mr-1" />
                Directions
              </a>

              <a
                href={getTelLink(settings.phone)}
                className="py-2.5 px-3 rounded-xl font-bold text-xs text-slate-800 bg-slate-100 hover:bg-slate-200 transition flex items-center justify-center"
              >
                <Phone className="w-3.5 h-3.5 mr-1 text-slate-600" />
                Call Now
              </a>

              <a
                href={getWhatsAppLink(settings.whatsappNumber, CONTEXTUAL_WA_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 transition flex items-center justify-center"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1" />
                WhatsApp
              </a>
            </div>

          </div>

          {/* Map Side (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200 shadow-md min-h-[350px] relative bg-slate-200">
            <iframe
              title="Prime Learning Location Map"
              src={settings.googleMapsEmbedUrl}
              className="w-full h-full min-h-[380px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

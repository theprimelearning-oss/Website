'use client';

import React from 'react';
import { db } from '@/lib/db';

export default function SEOStructuredData() {
  const settings = db.getSettings();

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    'name': settings.name,
    'description': settings.tagline,
    'url': 'https://primelearning.edu.in',
    'telephone': settings.phone,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': settings.address,
      'addressLocality': settings.locationName,
      'addressCountry': 'IN',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '12.9747',
      'longitude': '77.6382',
    },
    'openingHours': 'Mo-Sa 15:00-20:30, Su 09:00-13:00',
    'priceRange': '₹1800 - ₹3000',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}

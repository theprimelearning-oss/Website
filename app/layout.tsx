import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import SEOStructuredData from '@/components/SEOStructuredData';

export const metadata: Metadata = {
  title: 'Prime Learning | Quality Coaching Classes in Indiranagar, Bangalore',
  description: 'Prime Learning provides focused coaching, experienced teachers, personal attention, and student-focused learning for school students in Class 6 to 12. Book a free trial class today.',
  keywords: [
    'coaching classes near me',
    'tuition classes near me',
    'math tuition near me',
    'science tuition near me',
    'best coaching classes in Indiranagar',
    'Prime Learning coaching',
    'Class 10 CBSE coaching',
    'Class 12 Physics tuition',
  ],
  authors: [{ name: 'Prime Learning' }],
  openGraph: {
    title: 'Prime Learning | Quality Coaching Classes',
    description: 'Trusted local coaching institute focused on quality teaching, personal attention, and student results.',
    images: ['/logo.png'],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo-transparent.png" />
      </head>
      <body className="bg-white text-slate-900 font-sans antialiased min-h-screen flex flex-col justify-between selection:bg-prime-orange selection:text-white">
        <SEOStructuredData />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileStickyBar />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}

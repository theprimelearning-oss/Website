import { InstituteSettings } from './types';

export const DEFAULT_SETTINGS: InstituteSettings = {
  name: 'Prime Learning',
  tagline: 'Quality Coaching, Personal Attention & Focused Academic Growth',
  locationName: 'Indiranagar, Bangalore', // Easily configurable for local SEO
  address: 'No. 45, 10th Main Road, 80 Feet Road, Indiranagar, Bangalore - 560038',
  landmark: 'Near Indiranagar Metro Station & BDA Complex',
  phone: '+91 98765 43210',
  whatsappNumber: '+919876543210',
  email: 'info@primelearning.edu.in',
  openingHours: 'Mon - Sat: 3:00 PM - 8:30 PM | Sun: 9:00 AM - 1:00 PM',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.954778107936!2d77.63821037592429!3d12.974735314798363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a72e946a39%3A0x6b6c0e0b3bf1f022!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  whatsappCommunityUrl: 'https://chat.whatsapp.com/PrimeLearningCommunityDemo',
  trialSlotsAvailable: 8,
};

export const getWhatsAppLink = (phoneNumber: string, message: string) => {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
};

export const getTelLink = (phoneNumber: string) => {
  const cleanNumber = phoneNumber.replace(/[^0-9+]/g, '');
  return `tel:${cleanNumber}`;
};

export const CONTEXTUAL_WA_MESSAGES = {
  general: 'Hello Prime Learning, I would like to know more about your coaching classes.',
  freeTrial: (grade?: string, subject?: string) => 
    `Hello Prime Learning, I want to register for a FREE Trial Class${grade ? ` for ${grade}` : ''}${subject ? ` (${subject})` : ''}.`,
  courseEnquiry: (courseTitle: string) => 
    `Hello Prime Learning, I want to enquire about details for ${courseTitle}.`,
  feeEnquiry: (grade?: string) => 
    `Hello Prime Learning, please share the fee details and timings${grade ? ` for ${grade}` : ''}.`,
  teacherEnquiry: (teacherName: string) => 
    `Hello Prime Learning, I want to ask a question regarding ${teacherName}'s batch.`,
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Teachers', href: '/teachers' },
  { label: 'Courses', href: '/courses' },
  { label: 'Fees & Timings', href: '/fees' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

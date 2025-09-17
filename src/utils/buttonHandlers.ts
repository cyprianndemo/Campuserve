import { NavigateFunction } from 'react-router-dom';

// Button handler utilities for consistent functionality across the website
export const handleBookConsultation = (navigate: NavigateFunction) => {
  navigate('/contact');
};

export const handleWhatsAppContact = () => {
  window.open('https://wa.me/254727606568', '_blank', 'noopener,noreferrer');
};

export const handlePhoneCall = () => {
  window.location.href = 'tel:+254727606568';
};

export const handleEmailContact = () => {
  window.location.href = 'mailto:campuservetransnationalacademics@gmail.com';
};

export const handleSocialMediaLink = (platform: string) => {
  const socialLinks = {
    facebook: 'https://facebook.com/campuserve',
    twitter: 'https://twitter.com/campuserve',
    instagram: 'https://instagram.com/campuserve',
    linkedin: 'https://linkedin.com/company/campuserve'
  };
  
  const url = socialLinks[platform as keyof typeof socialLinks];
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

export const handleNewsletterSubscription = (email: string) => {
  // In a real application, this would integrate with an email service
  console.log('Newsletter subscription for:', email);
  alert('Thank you for subscribing! We\'ll keep you updated with the latest news and opportunities.');
};

export const handleEventRegistration = (eventId: string) => {
  // In a real application, this would handle event registration
  console.log('Registering for event:', eventId);
  alert('Registration successful! We\'ll send you event details via email.');
};

export const handleDownloadBrochure = () => {
  // In a real application, this would trigger a PDF download
  console.log('Downloading brochure...');
  alert('Brochure download will be available soon. Please contact us for more information.');
};

export const handleScheduleCallback = (phoneNumber: string) => {
  // In a real application, this would schedule a callback
  console.log('Scheduling callback for:', phoneNumber);
  alert('Callback scheduled! We\'ll contact you within 24 hours.');
};
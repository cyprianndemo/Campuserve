import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  FileText, 
  DollarSign, 
  BookOpen, 
  Plane, 
  Users, 
  Globe,
  CheckCircle,
  Clock,
  Award
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: 'Study Abroad Consultation',
      description: 'Comprehensive guidance on choosing the right country, university, and program based on your academic background and career goals.',
      features: [
        'One-on-one counseling sessions (KSH 500 consultation fee)',
        'Academic and career assessment',
        'Country and university selection',
        'Program matching and recommendations',
        'Timeline planning and milestone tracking'
      ],
      price: 'KSH 500 Consultation Fee'
    },
    {
      icon: <FileText className="h-12 w-12" />,
      title: 'University Application Support',
      description: 'Complete application assistance including document preparation, essay writing, and submission tracking.',
      features: [
        'Applications to up to 10 universities',
        'Statement of Purpose (SOP) writing',
        'Letter of recommendation assistance',
        'Application deadline tracking',
        'Interview preparation and coaching',
        'Document verification and submission'
      ],
      price: '$1,400 (Complete Package)'
    },
    {
      icon: <DollarSign className="h-12 w-12" />,
      title: 'Scholarship & Funding Guidance',
      description: 'Expert assistance in finding and applying for scholarships, grants, and other funding opportunities.',
      features: [
        'Scholarship database access',
        'Eligibility assessment',
        'Application strategy development',
        'Essay and proposal writing',
        'Application submission support',
        'Follow-up and tracking'
      ],
      price: '$150 (Scholarship Essays)'
    },
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: 'Language & Test Preparation',
      description: 'Comprehensive preparation for English proficiency and standardized tests required for international admissions.',
      features: [
        'IELTS preparation and coaching',
        'TOEFL test preparation',
        'GRE and GMAT prep courses',
        'Duolingo English Test guidance',
        'Practice tests and mock exams',
        'Score improvement strategies'
      ],
      price: 'Starting from $100'
    },
    {
      icon: <Plane className="h-12 w-12" />,
      title: 'Visa Application & Interview Prep',
      description: 'Complete visa application support and interview preparation to maximize your chances of approval.',
      features: [
        'Visa application form completion',
        'Document checklist and preparation',
        'Mock visa interviews',
        'Interview coaching and tips',
        'Appeal process assistance',
        'Status tracking and follow-up'
      ],
      price: '$100 (Mock Interview)'
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Pre-Departure & Travel Support',
      description: 'Comprehensive preparation for your journey abroad including travel arrangements and orientation.',
      features: [
        'Pre-departure orientation sessions',
        'Travel booking assistance',
        'Accommodation guidance',
        'Airport pickup arrangements',
        'Emergency contact setup',
        'Cultural adaptation tips'
      ],
      price: 'Included in packages'
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: 'Country-Specific Advice',
      description: 'Detailed guidance on living, studying, and working in your chosen destination country.',
      features: [
        'Cultural orientation sessions',
        'Cost of living information',
        'Healthcare system overview',
        'Banking and financial setup',
        'Local customs and etiquette',
        'Transportation guidance'
      ],
      price: 'Complimentary with services'
    },
    {
      icon: <CheckCircle className="h-12 w-12" />,
      title: 'Ongoing Support',
      description: 'Continued assistance even after you reach your destination to ensure smooth settlement and success.',
      features: [
        'Settlement assistance',
        'Academic support and guidance',
        'Housing and accommodation help',
        'Cultural adaptation support',
        'Career guidance and networking',
        '24/7 emergency support'
      ],
      price: 'Lifetime support'
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: 'Work & Immigration Pathways',
      description: 'Guidance on post-graduation work opportunities and permanent residency pathways.',
      features: [
        'Work permit application support',
        'Job market insights and trends',
        'CV and interview preparation',
        'Permanent residency guidance',
        'Immigration pathway planning',
        'Employer networking opportunities'
      ],
      price: 'Consultation required'
    }
  ];

  const additionalServices = [
    {
      service: 'Statement of Purpose (SOP) Writing',
      price: '$50',
      description: 'Professional SOP crafting tailored to your chosen program and university'
    },
    {
      service: 'CV/Resume Optimization',
      price: '$30',
      description: 'International standard CV formatting and content optimization'
    },
    {
      service: 'Document Translation & Certification',
      price: '$25 per document',
      description: 'Certified translation services for academic and personal documents'
    },
    {
      service: 'Emergency Consultation',
      price: '$75',
      description: 'Urgent assistance for time-sensitive applications or issues'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1600)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive support for every step of your international education journey
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Education Consulting Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial consultation to post-arrival support, we provide end-to-end services to ensure your success in international education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                <div className="text-green-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">What's Included:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-green-600">{service.price}</span>
                    <Link to="/contact" className="text-sm text-green-600 hover:text-green-800 font-medium">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600">Specialized services available à la carte</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{service.service}</h3>
                  <span className="text-lg font-bold text-green-600">{service.price}</span>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">How we guide you through your international education journey</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200 hidden md:block"></div>
            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Initial Consultation',
                  description: 'Free consultation to understand your goals, assess your profile, and recommend the best pathway forward.',
                  duration: '1 hour'
                },
                {
                  step: '2',
                  title: 'Strategic Planning',
                  description: 'Develop a comprehensive plan including university selection, application timeline, and funding strategies.',
                  duration: '1-2 weeks'
                },
                {
                  step: '3',
                  title: 'Application Preparation',
                  description: 'Complete application support including document preparation, essay writing, and submission.',
                  duration: '4-8 weeks'
                },
                {
                  step: '4',
                  title: 'Visa Processing',
                  description: 'Visa application assistance, interview preparation, and documentation support.',
                  duration: '2-4 weeks'
                },
                {
                  step: '5',
                  title: 'Pre-Departure',
                  description: 'Travel arrangements, accommodation setup, and comprehensive orientation sessions.',
                  duration: '2-3 weeks'
                },
                {
                  step: '6',
                  title: 'Ongoing Support',
                  description: 'Continued support for settlement, academic success, and career development.',
                  duration: 'Lifetime'
                }
              ].map((phase, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:w-1/2">
                    <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="flex items-center mb-3">
                        <Clock className="h-5 w-5 text-green-600 mr-2" />
                        <span className="text-sm text-green-600 font-medium">{phase.duration}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg z-10 md:relative md:mx-0 mx-auto mb-4 md:mb-0">
                    {phase.step}
                  </div>
                  <div className="flex-1 md:w-1/2 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free consultation today and take the first step towards your international education dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-green-600 bg-white hover:bg-gray-100 transition-colors duration-200"
            >
              Book Consultation
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-green-700 transition-colors duration-200"
            >
              View Pricing Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
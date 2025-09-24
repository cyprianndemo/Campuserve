import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Globe,
  FileText,
  DollarSign,
  Plane,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Calendar
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: 'Personalized Counselling',
      description: 'One-on-one guidance tailored to your academic goals and career aspirations.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Multiple Study Destinations',
      description: 'Access to top universities across UK, USA, Canada, Australia, and Germany.'
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Visa & Immigration Guidance',
      description: 'Complete support for visa applications and immigration processes.'
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: 'Scholarship Assistance',
      description: 'Expert help in finding and applying for scholarships and funding opportunities.'
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: 'Pre-Departure Support',
      description: 'Comprehensive preparation for your journey abroad and settlement support.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Ongoing Support',
      description: 'Continuous assistance even after you reach your destination.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Free initial consultation to understand your goals and preferences.'
    },
    {
      step: '02',
      title: 'University Selection',
      description: 'Choose from carefully selected universities matching your profile.'
    },
    {
      step: '03',
      title: 'Application Support',
      description: 'Complete assistance with applications, SOPs, and documentation.'
    },
    {
      step: '04',
      title: 'Visa & Travel',
      description: 'Visa application support and travel arrangement guidance.'
    },
    {
      step: '05',
      title: 'Settlement',
      description: 'Orientation and ongoing support for your new journey abroad.'
    }
  ];

  const destinations = [
    {
      country: 'United Kingdom',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800',
      universities: 'Oxford, Cambridge, UCL, Glasgow'
    },
    {
      country: 'United States',
      image: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=800',
      universities: 'Park University, GVSU, Alabama State'
    },
    {
      country: 'Canada',
      image: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=800',
      universities: 'University of Alberta, Saint Mary\'s'
    },
    {
      country: 'Australia',
      image: 'https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=800',
      universities: 'University of Melbourne, RMIT'
    },
    {
      country: 'Germany',
      image: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=800',
      universities: 'Heidelberg, RWTH Aachen'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Kamau',
      destination: 'University of Toronto, Canada',
      content: 'Campuserve made my dream of studying in Canada a reality. Their support was exceptional throughout the entire process.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Michael Ochieng',
      destination: 'Oxford University, UK',
      content: 'I couldn\'t have asked for better guidance. From application to visa, everything was handled professionally.',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Grace Wanjiku',
      destination: 'University of Melbourne, Australia',
      content: 'The scholarship assistance was incredible. Campuserve helped me secure funding for my entire program.',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1600)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Gateway to <span className="text-green-400">Global Education</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Trusted consultancy helping East African students, particularly Kenyan students, achieve their dreams of studying, working, and conducting business abroad. We provide comprehensive support and guidance to individuals seeking opportunities in premier destinations including the United States, Canada, the United Kingdom, Germany, Denmark, Australia, and many other countries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-all duration-200 transform hover:scale-105"
            >
              Book Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/destinations"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-all duration-200 transform hover:scale-105"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Empowering East Africa's Talent for a Global Tomorrow
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            At Campuserve Transnational Hub, we bridge the gap between East Africa talent and global opportunities.
            Our mission is to empower students and professionals to access world-class education and career prospects abroad.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
          >
            Learn More About Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Campuserve?</h2>
            <p className="text-lg text-gray-600">Comprehensive support for your international education journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="text-green-600 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Your journey to international education in 5 simple steps</p>
          </div>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-green-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Study Destinations</h2>
            <p className="text-lg text-gray-600">Discover world-class universities across multiple countries</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {destinations.map((destination, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-shadow duration-200">
                <img
                  src={destination.image}
                  alt={destination.country}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold mb-1">{destination.country}</h3>
                  <p className="text-sm opacity-90">{destination.universities}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/destinations"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
            >
              View All Destinations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">Hear from students who achieved their dreams with Campuserve</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.destination}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/testimonials"
              className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
            >
              Read More Success Stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">Join our education fairs and information sessions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-green-600 mr-2" />
                <span className="text-sm font-medium text-green-600">March 15, 2025</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">UK Universities Fair</h3>
              <p className="text-gray-600 mb-4">Meet representatives from top UK universities and learn about admission requirements.</p>
              <Link
                to="/events"
                className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
              >
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-600">March 22, 2025</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scholarship Workshop</h3>
              <p className="text-gray-600 mb-4">Learn how to find and apply for scholarships to fund your international education.</p>
              <Link
                to="/events"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-600">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-purple-600 mr-2" />
                <span className="text-sm font-medium text-purple-600">March 29, 2025</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">IELTS Preparation Seminar</h3>
              <p className="text-gray-600 mb-4">Master the IELTS exam with expert tips and practice sessions.</p>
              <Link
                to="/events"
                className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
              >
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Journey Today!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards your international education dreams. Book a free consultation with our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-green-600 bg-white hover:bg-gray-100 transition-colors duration-200"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="https://wa.me/254758220860"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-green-700 transition-colors duration-200"
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
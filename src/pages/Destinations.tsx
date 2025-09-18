import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  GraduationCap,
  DollarSign,
  Clock,
  Users,
  Award,
  Globe
} from 'lucide-react';

const Destinations = () => {
  const destinations = [
    {
      country: 'United Kingdom',
      flag: '🇬🇧',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Home to world-renowned universities with rich academic traditions and excellent research opportunities.',
      highlights: [
        'World-class universities like Oxford and Cambridge',
        'Rich cultural heritage and history',
        'Post-study work visa opportunities',
        'Gateway to Europe',
        'English-speaking environment'
      ],
      universities: [
        'University of Oxford',
        'University of Cambridge',
        'University of Glasgow',
        'University of Warwick',
        'University of Leeds',
        'University College London (UCL)',
        'King\'s College London',
        'Imperial College London'
      ],
      requirements: [
        'IELTS 6.0-7.5 (varies by program)',
        'Academic transcripts',
        'Personal statement',
        'Letters of recommendation',
        'Proof of financial support'
      ],
      workRights: 'Up to 20 hours per week during studies, full-time during holidays',
      avgCost: '$25,000 - $45,000 per year',
      duration: '1-4 years depending on program'
    },
    {
      country: 'United States',
      flag: '🇺🇸',
      image: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Leading destination for higher education with diverse programs and extensive research opportunities.',
      highlights: [
        'Top-ranked universities globally',
        'Diverse academic programs',
        'Strong industry connections',
        'Optional Practical Training (OPT)',
        'Innovation and entrepreneurship focus'
      ],
      universities: [
        'Park University',
        'Grand Valley State University',
        'Alabama State University',
        'University of Central Missouri',
        'Eastern Michigan University',
        'Florida International University',
        'University of Bridgeport'
      ],
      requirements: [
        'TOEFL 79-100 or IELTS 6.0-7.5',
        'SAT/GRE/GMAT (program dependent)',
        'Academic transcripts',
        'Statement of Purpose',
        'Financial documentation'
      ],
      workRights: 'On-campus work during studies, OPT after graduation',
      avgCost: '$20,000 - $60,000 per year',
      duration: '1-4 years depending on program'
    },
    {
      country: 'Canada',
      flag: '🇨🇦',
      image: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Welcoming country with high-quality education and excellent immigration pathways.',
      highlights: [
        'Pathway to permanent residency',
        'High quality of life',
        'Multicultural society',
        'Affordable education',
        'Work opportunities during and after studies'
      ],
      universities: [
        'University of Alberta',
        'Saint Mary\'s University',
        'Mount Allison University',
        'University of New Brunswick',
        'Memorial University of Newfoundland',
        'Vancouver Island University',
        'Thompson Rivers University'
      ],
      requirements: [
        'IELTS 6.0-7.0 or TOEFL equivalent',
        'Academic transcripts',
        'Statement of Purpose',
        'Letters of recommendation',
        'Proof of funds'
      ],
      workRights: 'Up to 20 hours per week during studies, full-time during breaks',
      avgCost: '$15,000 - $35,000 per year',
      duration: '1-4 years depending on program'
    },
    {
      country: 'Australia',
      flag: '🇦🇺',
      image: 'https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern education system with beautiful landscapes and excellent student support services.',
      highlights: [
        'World-class education system',
        'Beautiful climate and lifestyle',
        'Strong job market',
        'Post-study work visas',
        'Multicultural environment'
      ],
      universities: [
        'University of Melbourne',
        'RMIT University',
        'University of Sydney',
        'Griffith University',
        'University of Wollongong',
        'Deakin University',
        'Charles Sturt University'
      ],
      requirements: [
        'IELTS 6.0-7.0 or equivalent',
        'Academic transcripts',
        'Statement of Purpose',
        'English proficiency proof',
        'Financial capacity evidence'
      ],
      workRights: 'Up to 40 hours per fortnight during studies',
      avgCost: '$20,000 - $45,000 per year',
      duration: '1-4 years depending on program'
    },
    {
      country: 'Germany',
      flag: '🇩🇪',
      image: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Excellence in engineering and research with many programs offered at low or no tuition fees.',
      highlights: [
        'Low or no tuition fees',
        'Strong engineering programs',
        'Research opportunities',
        'Central location in Europe',
        'Post-graduation work opportunities'
      ],
      universities: [
        'Heidelberg University',
        'RWTH Aachen University',
        'Humboldt University',
        'University of Mannheim',
        'Technical University of Munich',
        'University of Cologne',
        'Frankfurt University'
      ],
      requirements: [
        'TestDaF or DSH for German programs',
        'IELTS/TOEFL for English programs',
        'Academic transcripts (APS certification)',
        'Statement of Purpose',
        'Proof of financial resources'
      ],
      workRights: '120 full days or 240 half days per year',
      avgCost: '€0 - €20,000 per year (public universities)',
      duration: '1-4 years depending on program'
    }
  ];

  const visaFees = [
    { country: 'USA', fee: '$185 (F-1 Visa)', ksh: 'KSH 24,050' },
    { country: 'Canada', fee: 'CAD $150', ksh: 'KSH 14,550' },
    { country: 'UK', fee: '£490-£715', ksh: 'KSH 79,800-116,445' },
    { country: 'Germany', fee: '€75', ksh: 'KSH 9,750' },
    { country: 'Australia', fee: 'AUD $650', ksh: 'KSH 52,650' }
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Study Destinations</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Explore world-class education opportunities across multiple countries
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <Globe className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">5</div>
              <div className="text-sm opacity-90">Countries</div>
            </div>
            <div>
              <GraduationCap className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm opacity-90">Partner Universities</div>
            </div>
            <div>
              <Users className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">2,500+</div>
              <div className="text-sm opacity-90">Students Placed</div>
            </div>
            <div>
              <Award className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm opacity-90">Visa Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {destinations.map((destination, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={destination.image}
                    alt={destination.country}
                    className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">{destination.flag}</span>
                    <h2 className="text-3xl font-bold text-gray-900">{destination.country}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{destination.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Why Choose {destination.country}?</h3>
                      <ul className="space-y-1">
                        {destination.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="flex items-center mb-1">
                          <DollarSign className="h-4 w-4 text-blue-600 mr-1" />
                          <span className="font-medium">Avg. Cost</span>
                        </div>
                        <p className="text-gray-600">{destination.avgCost}</p>
                      </div>
                      <div>
                        <div className="flex items-center mb-1">
                          <Clock className="h-4 w-4 text-green-600 mr-1" />
                          <span className="font-medium">Duration</span>
                        </div>
                        <p className="text-gray-600">{destination.duration}</p>
                      </div>
                      <div>
                        <div className="flex items-center mb-1">
                          <Users className="h-4 w-4 text-purple-600 mr-1" />
                          <span className="font-medium">Work Rights</span>
                        </div>
                        <p className="text-gray-600">{destination.workRights}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities by Country */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partner Universities</h2>
            <p className="text-lg text-gray-600">Our carefully selected university partners across all destinations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-2">{destination.flag}</span>
                  <h3 className="text-xl font-bold text-gray-900">{destination.country}</h3>
                </div>
                <ul className="space-y-2">
                  {destination.universities.map((university, uIndex) => (
                    <li key={uIndex} className="text-gray-600 flex items-center">
                      <GraduationCap className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      {university}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Requirements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Application Requirements</h2>
            <p className="text-lg text-gray-600">General requirements by destination (specific requirements may vary)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-2">{destination.flag}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{destination.country}</h3>
                </div>
                <ul className="space-y-2">
                  {destination.requirements.map((requirement, rIndex) => (
                    <li key={rIndex} className="text-sm text-gray-600 flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Fees */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Visa Fees</h2>
            <p className="text-lg text-gray-600">Approximate visa application fees by country</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Country</th>
                  <th className="px-6 py-4 text-left">Visa Fee (USD/Local)</th>
                  <th className="px-6 py-4 text-left">Approximate KSH</th>
                </tr>
              </thead>
              <tbody>
                {visaFees.map((visa, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{visa.country}</td>
                    <td className="px-6 py-4 text-gray-600">{visa.fee}</td>
                    <td className="px-6 py-4 text-gray-600">{visa.ksh}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            *Fees are subject to change. Additional costs may include SEVIS fees, biometrics, and document processing.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Choose Your Destination?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experts help you select the perfect country and university for your academic and career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-green-600 bg-white hover:bg-gray-100 transition-colors duration-200"
            >
              Book Consultation
            </Link>
            <Link
              to="/destinations"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-green-700 transition-colors duration-200"
            >
              Compare Destinations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
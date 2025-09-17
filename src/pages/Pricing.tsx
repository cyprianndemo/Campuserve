import { Check, Star, Shield, Clock, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const packages = [
    {
      name: 'Starter Package',
      price: '$500',
      popular: false,
      description: 'Perfect for students applying to 1-3 universities',
      features: [
        'Applications to 3 universities',
        'Basic SOP review',
        'Document checklist',
        'Email support',
        'University selection guidance',
        'Application timeline'
      ],
      limitations: [
        'No interview preparation',
        'Basic visa guidance only',
        'No scholarship assistance'
      ]
    },
    {
      name: 'Complete Package',
      price: '$1,400',
      popular: true,
      description: 'Our most popular comprehensive package for serious students',
      features: [
        'Applications to 10 universities',
        'Professional SOP writing',
        'Letter of recommendation assistance',
        'Interview coaching sessions',
        'Visa application support',
        'Scholarship guidance',
        'Document preparation & verification',
        'Application deadline tracking',
        'Pre-departure orientation',
        'Settlement assistance',
        'Priority email & phone support',
        '12-month ongoing support'
      ],
      limitations: []
    },
    {
      name: 'Premium Plus',
      price: '$2,500',
      popular: false,
      description: 'Ultimate package with VIP treatment and guaranteed admission',
      features: [
        'Everything in Complete Package',
        'Applications to 15+ universities',
        'Guaranteed admission to partner universities',
        'Premium university partnerships',
        'Dedicated account manager',
        'Multiple SOP versions',
        'Mock visa interviews (unlimited)',
        'Emergency consultation support',
        'Airport pickup arrangement',
        'First month accommodation assistance',
        '24/7 WhatsApp support',
        'Lifetime career guidance'
      ],
      limitations: []
    }
  ];

  const additionalServices = [
    {
      service: 'Statement of Purpose (SOP) Writing',
      price: '$50',
      description: 'Professional, customized SOP tailored to your chosen program',
      turnaround: '3-5 days'
    },
    {
      service: 'Scholarship Essay Writing',
      price: '$150',
      description: 'Compelling scholarship essays to maximize your funding chances',
      turnaround: '5-7 days'
    },
    {
      service: 'Visa Mock Interview',
      price: '$100',
      description: 'One-on-one practice session with feedback and tips',
      turnaround: 'Same day booking'
    },
    {
      service: 'CV/Resume Optimization',
      price: '$75',
      description: 'International standard formatting and content enhancement',
      turnaround: '2-3 days'
    },
    {
      service: 'Document Translation & Certification',
      price: '$25',
      description: 'Per document translation with official certification',
      turnaround: '1-2 days'
    },
    {
      service: 'Emergency Consultation',
      price: '$100',
      description: 'Urgent assistance for time-sensitive applications',
      turnaround: 'Within 24 hours'
    }
  ];

  const paymentPlans = [
    {
      plan: 'Full Payment',
      discount: '5% discount',
      description: 'Pay the full amount upfront and save'
    },
    {
      plan: '50-50 Plan',
      discount: 'No additional cost',
      description: '50% upfront, 50% before application submission'
    },
    {
      plan: '3-Month Plan',
      discount: '3% processing fee',
      description: 'Spread payments over 3 months'
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Transparent Pricing</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Affordable, comprehensive packages designed to make international education accessible
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-lg text-gray-600">Unmatched value and proven results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Shield className="h-10 w-10 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">95% Success Rate</h3>
              <p className="text-sm text-gray-600">Proven track record of successful applications</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Clock className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Fast Processing</h3>
              <p className="text-sm text-gray-600">Quick turnaround times on all services</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Users className="h-10 w-10 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-sm text-gray-600">Experienced counselors and former admissions officers</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Award className="h-10 w-10 text-yellow-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-sm text-gray-600">Continuous assistance even after admission</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Package</h2>
            <p className="text-lg text-gray-600">Comprehensive packages tailored to different needs and budgets</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-lg shadow-lg p-8 ${pkg.popular ? 'ring-2 ring-green-600 transform scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {pkg.limitations.map((limitation, lIndex) => (
                    <li key={lIndex} className="flex items-center opacity-50">
                      <div className="h-5 w-5 mr-3 flex-shrink-0 flex items-center justify-center">
                        <div className="w-3 h-0.5 bg-gray-400"></div>
                      </div>
                      <span className="text-gray-500">{limitation}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-md font-medium transition-colors duration-200 ${
                  pkg.popular 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                {pkg.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need a custom package? We can tailor our services to your specific needs.</p>
            <a
              href="mailto:campuservetransnationalacademics@gmail.com"
              className="inline-flex items-center px-6 py-3 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-md font-medium transition-colors duration-200"
            >
              Request Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600">À la carte services available separately or as add-ons</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{service.service}</h3>
                  <span className="text-xl font-bold text-green-600">{service.price}</span>
                </div>
                <p className="text-gray-600 mb-3">{service.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Turnaround: {service.turnaround}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Flexible Payment Options</h2>
            <p className="text-lg text-gray-600">Choose a payment plan that works for your budget</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paymentPlans.map((plan, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.plan}</h3>
                <div className="text-lg font-medium text-green-600 mb-3">{plan.discount}</div>
                <p className="text-gray-600">{plan.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              All payments are secure and processed through trusted payment gateways. 
              Refund policy applies as per terms and conditions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">What's included in the application fee?</h3>
              <p className="text-gray-600">Our Complete Package includes everything needed for successful applications: university applications, document preparation, SOP writing, interview coaching, visa guidance, and ongoing support.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">Are university application fees included?</h3>
              <p className="text-gray-600">University application fees are separate and paid directly to the universities. These typically range from $50-200 per application depending on the institution.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">What if I don't get accepted?</h3>
              <p className="text-gray-600">We have a 95% success rate, but if you're not accepted to any of our partner universities, we offer additional applications at no extra charge or partial refund as per our guarantee policy.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">Can I upgrade my package later?</h3>
              <p className="text-gray-600">Yes, you can upgrade to a higher package at any time. You'll only pay the difference between your current package and the upgraded one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss your goals and choose the perfect package for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-green-600 bg-white hover:bg-gray-100 transition-colors duration-200"
            >
              Book Free Consultation
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-green-700 transition-colors duration-200"
            >
              Compare Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
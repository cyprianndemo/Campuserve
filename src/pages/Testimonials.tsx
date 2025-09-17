import React from 'react';
import { Star, Quote, GraduationCap, Award, Globe } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Kamau',
      program: 'Master of Engineering',
      university: 'University of Toronto, Canada',
      year: '2023',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      quote: "Campuserve made my Canadian dream a reality. From university selection to visa processing, their support was exceptional. I received a full scholarship and couldn't be happier with my choice. The team went above and beyond to ensure every detail was perfect.",
      achievement: 'Full Scholarship Recipient',
      flag: '🇨🇦'
    },
    {
      id: 2,
      name: 'Michael Ochieng',
      program: 'PhD in Computer Science',
      university: 'Oxford University, UK',
      year: '2023',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      quote: "Getting into Oxford seemed impossible until I met Campuserve. Their expertise in crafting the perfect application and preparing me for interviews was outstanding. The scholarship guidance helped me secure funding for my entire PhD program.",
      achievement: 'Oxford Scholar',
      flag: '🇬🇧'
    },
    {
      id: 3,
      name: 'Grace Wanjiku',
      program: 'MBA',
      university: 'University of Melbourne, Australia',
      year: '2022',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      quote: "The comprehensive support from Campuserve was incredible. They helped me secure not just admission but also a significant scholarship. The pre-departure orientation and ongoing support made my transition to Australia smooth and stress-free.",
      achievement: 'Dean\'s List Student',
      flag: '🇦🇺'
    },
    {
      id: 4,
      name: 'David Kimani',
      program: 'Master of Business Administration',
      university: 'Park University, USA',
      year: '2023',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      quote: "Campuserve's guidance was instrumental in my admission to Park University. The visa interview preparation was thorough, and I passed on my first attempt. Now I'm thriving in my MBA program and already have job prospects lined up.",
      achievement: 'Student Leadership Award',
      flag: '🇺🇸'
    },
    {
      id: 5,
      name: 'Mercy Akinyi',
      program: 'Master of International Business',
      university: 'Heidelberg University, Germany',
      year: '2022',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      quote: "Studying in Germany seemed complex with all the requirements, but Campuserve made it simple. They handled everything from document authentication to housing assistance. I'm now studying at one of Europe's best universities tuition-free!",
      achievement: 'Research Excellence Award',
      flag: '🇩🇪'
    },
    {
      id: 6,
      name: 'James Mwangi',
      program: 'Master of Data Science',
      university: 'University of Glasgow, UK',
      year: '2023',
      image: 'https://images.pexels.com/photos/3777952/pexels-photo-3777952.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      quote: "The personalized attention I received from Campuserve was amazing. They understood my career goals and matched me with the perfect program. The ongoing support even after arrival in the UK has been invaluable for my success.",
      achievement: 'Top 10% of Class',
      flag: '🇬🇧'
    },
    {
      id: 7,
      name: 'Esther Njeri',
      program: 'Master of Public Health',
      university: 'University of Alberta, Canada',
      year: '2022',
      image: 'https://images.pexels.com/photos/3785557/pexels-photo-3785557.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      quote: "Campuserve's scholarship guidance was exceptional. They helped me identify opportunities I never knew existed and guided me through complex application processes. I'm now studying with a full scholarship and loving every moment in Canada.",
      achievement: 'Graduate Research Assistant',
      flag: '🇨🇦'
    },
    {
      id: 8,
      name: 'Peter Otieno',
      program: 'PhD in Engineering',
      university: 'RMIT University, Australia',
      year: '2023',
      image: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      quote: "The expertise and dedication of the Campuserve team exceeded my expectations. From helping with my research proposal to securing funding, they were with me every step. I'm now pursuing my dream PhD with full funding.",
      achievement: 'Full PhD Funding',
      flag: '🇦🇺'
    },
    {
      id: 9,
      name: 'Lucy Wangari',
      program: 'Master of Architecture',
      university: 'University of Leeds, UK',
      year: '2022',
      image: 'https://images.pexels.com/photos/3756706/pexels-photo-3756706.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      quote: "Campuserve made my architectural dreams come true. The portfolio guidance and interview preparation were outstanding. I'm now at one of the UK's top architecture schools, and my designs have already won awards.",
      achievement: 'Design Competition Winner',
      flag: '🇬🇧'
    }
  ];

  const stats = [
    { number: '2,500+', label: 'Students Successfully Placed', icon: <GraduationCap className="h-8 w-8" /> },
    { number: '95%', label: 'Visa Success Rate', icon: <Award className="h-8 w-8" /> },
    { number: '$5M+', label: 'Scholarships Secured', icon: <Star className="h-8 w-8" /> },
    { number: '15+', label: 'Countries Represented', icon: <Globe className="h-8 w-8" /> }
  ];

  const videoTestimonials = [
    {
      name: 'Kevin Odhiambo',
      university: 'Cambridge University',
      thumbnail: 'https://images.pexels.com/photos/3777952/pexels-photo-3777952.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '2:30'
    },
    {
      name: 'Faith Mutiso',
      university: 'Harvard University',
      thumbnail: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '3:15'
    },
    {
      name: 'Daniel Kiprotich',
      university: 'University of Toronto',
      thumbnail: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '2:45'
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Real students, real achievements, real dreams fulfilled through Campuserve
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-green-200">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Testimonials</h2>
            <p className="text-lg text-gray-600">Hear directly from students who achieved their dreams with our support</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="mr-2">{testimonial.flag}</span>
                      <span>{testimonial.year}</span>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <Quote className="h-8 w-8 text-green-200 mb-2" />
                  <p className="text-gray-600 italic">{testimonial.quote}</p>
                </div>

                <div className="border-t pt-4">
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">{testimonial.program}</p>
                    <p className="text-gray-600">{testimonial.university}</p>
                    <div className="flex items-center mt-2">
                      <Award className="h-4 w-4 text-green-600 mr-1" />
                      <span className="text-sm text-green-600 font-medium">{testimonial.achievement}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
            <p className="text-lg text-gray-600">Watch our students share their journey and experiences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <div key={index} className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 cursor-pointer">
                <img 
                  src={video.thumbnail} 
                  alt={video.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[16px] border-l-blue-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-medium">{video.name}</p>
                  <p className="text-sm opacity-90">{video.university}</p>
                </div>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success by Numbers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success by the Numbers</h2>
            <p className="text-lg text-gray-600">Quantifying our impact on student success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-700">Student Satisfaction Rate</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-700">Scholarship Success Rate</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
              <div className="text-gray-700">First Choice University Admission</div>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <div className="text-3xl font-bold text-yellow-600 mb-2">92%</div>
              <div className="text-gray-700">Students Complete Their Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Network */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Global Alumni Network</h2>
            <p className="text-lg text-gray-600">Where our graduates are making an impact today</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">Technology Sector</h3>
              <p className="text-gray-600 text-sm mb-4">Many of our graduates work at leading tech companies</p>
              <div className="space-y-1 text-sm text-gray-500">
                <p>• Google, Microsoft, Amazon</p>
                <p>• Apple, Meta, Tesla</p>
                <p>• Leading African tech companies</p>
              </div>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">Healthcare & Research</h3>
              <p className="text-gray-600 text-sm mb-4">Contributing to global health and medical research</p>
              <div className="space-y-1 text-sm text-gray-500">
                <p>• WHO, CDC, NHS</p>
                <p>• Leading hospitals and clinics</p>
                <p>• Pharmaceutical research</p>
              </div>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">Business & Finance</h3>
              <p className="text-gray-600 text-sm mb-4">Leading businesses and financial institutions</p>
              <div className="space-y-1 text-sm text-gray-500">
                <p>• Goldman Sachs, JP Morgan</p>
                <p>• McKinsey, BCG, Deloitte</p>
                <p>• Successful entrepreneurs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Success Story Starts Here</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who trusted Campuserve with their international education dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:campurserveducation@gmail.com"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-green-600 bg-white hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Journey Today
            </a>
            <a
              href="mailto:campurserveducation@gmail.com"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-green-700 transition-colors duration-200"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
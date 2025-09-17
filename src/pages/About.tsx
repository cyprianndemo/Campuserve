import React from 'react';
import { Target, Eye, Heart, Users, Award, Globe2 } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency in all our interactions.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide, ensuring the best outcomes for our clients.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Empowerment',
      description: 'We empower individuals to achieve their dreams and reach their full potential globally.'
    }
  ];

  const team = [
    {
      name: 'Director Naomi Onyiego',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Over 10 years of experience in international education consulting with a PhD in Educational Leadership.'
    },
    {
      name: 'Eng. Cyprian Ndemo',
      position: 'Director of Student Services',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Specialist in student counseling and support services with extensive knowledge of global education systems.'
    },
    {
      name: 'Michael Oduya',
      position: 'Visa & Immigration Expert',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Former immigration officer with deep expertise in visa processes across multiple countries.'
    },
    {
      name: 'Grace Wanjiru',
      position: 'Scholarship Coordinator',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Dedicated to helping students secure funding opportunities for their international education dreams.'
    }
  ];

  const achievements = [
    { number: '2,500+', label: 'Students Successfully Placed' },
    { number: '50+', label: 'Partner Universities' },
    { number: '15+', label: 'Countries' },
    { number: '95%', label: 'Visa Success Rate' }
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Campuserve</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Empowering African talent for a global tomorrow through world-class education consulting services.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-green-50 rounded-lg">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower African students and professionals to access global opportunities through education,
                guidance, and support, bridging the gap between local talent and international excellence.
              </p>
            </div>
            <div className="text-center p-8 bg-blue-50 rounded-lg">
              <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become Africa's leading gateway to global education and opportunity,
                creating a world where every talented individual can pursue their dreams without barriers.
              </p>
            </div>
            <div className="text-center p-8 bg-purple-50 rounded-lg">
              <Globe2 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h3>
              <p className="text-gray-600">
                Since our establishment, we have successfully placed thousands of students in top universities worldwide,
                contributing to Africa's global representation in higher education and professional development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
            <div className="text-lg text-gray-600 space-y-6">
              <p>
                Founded with a passion for education and a vision for global opportunity, Campuserve Transnational Hub
                began as a small consultancy with a big dream: to help African students access world-class education abroad.
              </p>
              <p>
                Our founders recognized the immense talent within Africa and the barriers that prevented many bright minds
                from accessing international education opportunities. With combined decades of experience in education,
                immigration, and student services, they created Campuserve to bridge this gap.
              </p>
              <p>
                Today, we are proud to have helped thousands of students achieve their dreams of studying at prestigious
                universities across the globe. Our success is measured not just in numbers, but in the transformed lives
                and the positive impact our alumni are making in their communities and worldwide.
              </p>
              <p>
                As we continue to grow, our commitment remains unchanged: to provide personalized, professional, and
                comprehensive support to every student who entrusts us with their educational journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="text-green-600 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-gray-600">Dedicated professionals committed to your success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl">Numbers that speak to our commitment and success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-lg opacity-90">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Students Choose Campuserve</h2>
            <p className="text-lg text-gray-600">What sets us apart in the international education consulting space</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Personalized Approach</h3>
                  <p className="text-gray-600">Every student receives individual attention and customized guidance based on their unique goals and circumstances.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Extensive Network</h3>
                  <p className="text-gray-600">Strong partnerships with over 50 universities across multiple countries provide diverse opportunities for our students.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">End-to-End Support</h3>
                  <p className="text-gray-600">From initial consultation to post-arrival support, we're with you every step of your journey.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Proven Track Record</h3>
                  <p className="text-gray-600">95% visa success rate and thousands of successfully placed students demonstrate our expertise and reliability.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Expert Team</h3>
                  <p className="text-gray-600">Our team includes former university admissions officers, immigration experts, and experienced counselors.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Affordable Excellence</h3>
                  <p className="text-gray-600">Premium services at competitive prices, with flexible payment options to make international education accessible.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
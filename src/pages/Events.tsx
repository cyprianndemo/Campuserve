import React from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Study in Canada Information Session",
      date: "March 25, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Virtual Event",
      attendees: 150,
      description: "Learn about top Canadian universities, admission requirements, and scholarship opportunities.",
      image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Virtual",
      featured: true
    },
    {
      id: 2,
      title: "UK University Fair 2025",
      date: "April 2, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Convention Center, Downtown",
      attendees: 500,
      description: "Meet representatives from 50+ UK universities and explore your study options.",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "In-Person",
      featured: true
    },
    {
      id: 3,
      title: "IELTS Preparation Workshop",
      date: "March 30, 2025",
      time: "1:00 PM - 5:00 PM",
      location: "Campuserve Office",
      attendees: 25,
      description: "Intensive workshop covering all four IELTS skills with expert instructors.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "In-Person",
      featured: false
    },
    {
      id: 4,
      title: "Scholarship Application Masterclass",
      date: "April 8, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Virtual Event",
      attendees: 200,
      description: "Learn how to write winning scholarship applications and essays.",
      image: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Virtual",
      featured: false
    },
    {
      id: 5,
      title: "Australia Study Abroad Seminar",
      date: "April 15, 2025",
      time: "11:00 AM - 1:00 PM",
      location: "Virtual Event",
      attendees: 100,
      description: "Discover study opportunities in Australia's top universities and cities.",
      image: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Virtual",
      featured: false
    },
    {
      id: 6,
      title: "Student Visa Workshop",
      date: "April 22, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Campuserve Office",
      attendees: 30,
      description: "Step-by-step guidance on student visa applications and requirements.",
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "In-Person",
      featured: false
    }
  ];

  const [selectedType, setSelectedType] = React.useState("All");
  const eventTypes = ["All", "Virtual", "In-Person"];

  const filteredEvents = selectedType === "All" 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === selectedType);

  const handleRegister = (eventTitle: string) => {
    alert(`Registration for "${eventTitle}" - Please contact us to complete your registration!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Join our educational events, workshops, and seminars to boost your study abroad journey.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Event Type Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {eventTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedType === type
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-300'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEvents.filter(event => event.featured).map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.type === 'Virtual' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {event.type}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      {event.attendees} registered
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  
                  <button
                    onClick={() => handleRegister(event.title)}
                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                  >
                    Register Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Events */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">All Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      event.type === 'Virtual' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {event.type}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="h-3 w-3 mr-1" />
                      {event.attendees}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{event.title}</h3>
                  
                  <div className="space-y-1 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-3 w-3 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-3 w-3 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-3 w-3 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                  
                  <button
                    onClick={() => handleRegister(event.title)}
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm"
                  >
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Don't Miss Out!</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Stay updated with our latest events and workshops. Subscribe to our newsletter for early access to event registrations.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
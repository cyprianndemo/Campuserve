import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Universities in Canada for International Students",
      excerpt: "Discover the best Canadian universities that offer excellent programs and support for international students.",
      author: "Sarah Johnson",
      date: "March 15, 2025",
      image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Study Abroad"
    },
    {
      id: 2,
      title: "Scholarship Opportunities for 2025: A Complete Guide",
      excerpt: "Learn about various scholarship programs available for international students and how to apply successfully.",
      author: "Michael Chen",
      date: "March 12, 2025",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Scholarships"
    },
    {
      id: 3,
      title: "Student Visa Requirements: What You Need to Know",
      excerpt: "A comprehensive guide to student visa requirements for popular study destinations.",
      author: "Emily Rodriguez",
      date: "March 10, 2025",
      image: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Visa Guide"
    },
    {
      id: 4,
      title: "Life as an International Student: Tips for Success",
      excerpt: "Essential tips and advice for international students to thrive in their new academic environment.",
      author: "David Kim",
      date: "March 8, 2025",
      image: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Student Life"
    },
    {
      id: 5,
      title: "IELTS vs TOEFL: Which Test Should You Take?",
      excerpt: "Compare IELTS and TOEFL exams to determine which English proficiency test is right for you.",
      author: "Lisa Wang",
      date: "March 5, 2025",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Test Prep"
    },
    {
      id: 6,
      title: "Budget Planning for International Students",
      excerpt: "Learn how to create and manage a budget while studying abroad to make the most of your finances.",
      author: "James Thompson",
      date: "March 3, 2025",
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Finance"
    }
  ];

  const categories = ["All", "Study Abroad", "Scholarships", "Visa Guide", "Student Life", "Test Prep", "Finance"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Education Blog</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Stay updated with the latest insights, tips, and guides for your educational journey abroad.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  
                  <button className="flex items-center text-green-600 hover:text-green-700 font-medium">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest education news, tips, and opportunities.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
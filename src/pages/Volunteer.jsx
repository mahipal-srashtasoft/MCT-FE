import React from 'react';
import { CheckCircle, Calendar, Clock, MapPin } from 'lucide-react';

export default function Volunteer() {
  const opportunities = [
    {
      title: "Teaching Assistant",
      location: "Various Schools",
      commitment: "4 hours/week",
      schedule: "Weekdays",
      description: "Help children with their studies and homework"
    },
    {
      title: "Medical Camp Volunteer",
      location: "Rural Areas",
      commitment: "8 hours/week",
      schedule: "Weekends",
      description: "Assist in organizing and managing medical camps"
    },
    {
      title: "Food Distribution",
      location: "City Centers",
      commitment: "3 hours/week",
      schedule: "Flexible",
      description: "Help distribute food to those in need"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=2000" 
            alt="Volunteer Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Volunteer With Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Join our community of dedicated volunteers making a difference
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Volunteer With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <CheckCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Make an Impact</h3>
              <p className="text-gray-600">
                Directly contribute to meaningful projects that change lives
              </p>
            </div>
            <div className="text-center p-6">
              <Calendar className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">
                Choose opportunities that fit your availability
              </p>
            </div>
            <div className="text-center p-6">
              <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gain Experience</h3>
              <p className="text-gray-600">
                Develop new skills while helping others
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Opportunities Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Current Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{opportunity.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    {opportunity.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    {opportunity.commitment}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    {opportunity.schedule}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Register as a Volunteer</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Areas of Interest
              </label>
              <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                <option>Education</option>
                <option>Healthcare</option>
                <option>Food Distribution</option>
                <option>Environmental</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Tell us about yourself and why you'd like to volunteer..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
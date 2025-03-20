import React from "react";
import { Heart, Users, Handshake, Gift, Flag, CheckCircle } from "lucide-react";

export default function GetInvolved() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-orange-500 text-white py-16 text-center">
        <Heart className="w-12 h-12 mx-auto mb-4" />
        <h1 className="text-4xl font-bold">Get Involved</h1>
        <p className="text-lg mt-2">
          Make a difference in the lives of those who need it most.
        </p>
      </div>

      {/* Ways to Get Involved Section */}
      <div className="max-w-6xl mx-auto my-12">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          How You Can Help
        </h2>
        <p className="text-gray-600 text-center mt-2">
          There are many ways to contribute to our mission.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Donate */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <Gift className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Donate</h3>
            <p className="text-gray-600 mt-2">
              Every donation helps us provide food, education, and medical aid.
            </p>
            <a href="/donate" className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition">
              Donate Now
            </a>
          </div>

          {/* Volunteer */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Volunteer</h3>
            <p className="text-gray-600 mt-2">
              Join us on the ground and make a hands-on impact.
            </p>
            <a href="/volunteer" className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition">
              Become a Volunteer
            </a>
          </div>

          {/* Partner */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <Handshake className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Partner With Us</h3>
            <p className="text-gray-600 mt-2">
              Collaborate with us to expand our impact globally.
            </p>
            <a href="/contact" className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition">
              Contact Us
            </a>
          </div>

          {/* Fundraise */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <Flag className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Fundraise</h3>
            <p className="text-gray-600 mt-2">
              Start your own campaign to support our cause.
            </p>
            <a href="/contact" className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition">
              Start a Campaign
            </a>
          </div>

          {/* Advocate */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <CheckCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Spread Awareness</h3>
            <p className="text-gray-600 mt-2">
              Share our mission on social media and within your community.
            </p>
            <a href="/blog" className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-200 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Join the Movement Today!
        </h2>
        <p className="text-gray-600 mt-2">
          Take action and be a part of the change.
        </p>
        <a href="/volunteer" className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition">
          Get Started
        </a>
      </div>
    </div>
  );
}

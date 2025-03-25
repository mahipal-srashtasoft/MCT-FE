import React from "react";
import { Users, Award, Target } from "lucide-react";
import TeamSection from "../components/TeamSection";

export default function About() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Executive Director",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300",
    },
    {
      name: "Michael Chen",
      role: "Programs Director",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
    {
      name: "Emily Rodriguez",
      role: "Volunteer Coordinator",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=2000"
            alt="About Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Learn about our mission, our team, and the impact we're making
            together
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To empower communities through sustainable development and
                education
              </p>
            </div>
            <div className="text-center p-6">
              <Target className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">
                A world where every individual has access to opportunities for
                growth
              </p>
            </div>
            <div className="text-center p-6">
              <Award className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-gray-600">
                Integrity, compassion, and dedication to sustainable change
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
        <TeamSection />
    </div>
  );
}

import Aos from "aos";
import React, { useEffect } from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const team = [
  {
    name: "Kristin Watson",
    role: "Founder & Executive Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300",
    social: {
      instagram: "https://instagram.com/kristinwatson",
      facebook: "https://facebook.com/kristinwatson",
      twitter: "https://twitter.com/kristinwatson",
    },
  },
  {
    name: "Sophia Martinez",
    role: "Communications Director",
    image:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&q=80&w=300",
    social: {
      instagram: "https://instagram.com/sophiamartinez",
      facebook: "https://facebook.com/sophiamartinez",
      twitter: "https://twitter.com/sophiamartinez",
    },
  },
  {
    name: "Michael Carter",
    role: "Program Manager",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
    social: {
      instagram: "https://instagram.com/michaelcarter",
      facebook: "https://facebook.com/michaelcarter",
      twitter: "https://twitter.com/michaelcarter",
    },
  },
  {
    name: "Olivia Thompson",
    role: "Community Outreach Specialist",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&q=80&w=300",
    social: {
      instagram: "https://instagram.com/oliviathompson",
      facebook: "https://facebook.com/oliviathompson",
      twitter: "https://twitter.com/oliviathompson",
    },
  },
  {
    name: "Ethan Garcia",
    role: "Policy Advisor",
    image:
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&q=80&w=300",
    social: {
      instagram: "https://instagram.com/ethangarcia",
      facebook: "https://facebook.com/ethangarcia",
      twitter: "https://twitter.com/ethangarcia",
    },
  },
  {
    name: "Isabella Nguyen",
    role: "Wellness Coordinator",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=300",
    social: {
      instagram: "https://instagram.com/isabellanguyen",
      facebook: "https://facebook.com/isabellanguyen",
      twitter: "https://twitter.com/isabellanguyen",
    },
  },
  {
    name: "William Davis",
    role: "Environmental Program Lead",
    image:
      "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&q=80&w=300",
    social: {
      instagram: "https://instagram.com/williamdavis",
      facebook: "https://facebook.com/williamdavis",
      twitter: "https://twitter.com/williamdavis",
    },
  },
  {
    name: "Ava Patel",
    role: "Volunteer Coordinator",
    image:
      "https://images.unsplash.com/photo-1522091066250-665186289043?auto=format&fit=crop&q=80&w=300",
    social: {
      instagram: "https://instagram.com/avapatel",
      facebook: "https://facebook.com/avapatel",
      twitter: "https://twitter.com/avapatel",
    },
  },
];

export default function TeamSection() {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl font-bold text-center mb-12"
          data-aos="zoom-out-up"
        >
          Our Leadership Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center flex flex-col items-center justify-between" 
              data-aos="zoom-in"
            >
              <img
                src={member.image}
                alt={member.name}
                data-aos="zoom-out-down"
                className="w-32 h-32 rounded-xl object-cover mb-4"
              />
              <div data-aos="zoom-out-up">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex space-x-3 justify-center">
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    className="text-white p-2 rounded-full bg-orange-500 hover:bg-black transition-all duration-300"
                  >
                    <FaXTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    className="text-white p-2 rounded-full bg-orange-500 hover:bg-black transition-all duration-300"
                  >
                    <FaFacebookF className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    className="text-white p-2 rounded-full bg-orange-500 hover:bg-black transition-all duration-300"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

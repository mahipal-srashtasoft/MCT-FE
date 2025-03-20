import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  ArrowRight,
  Users,
  Heart,
  Globe,
  ShieldAlert,
  PawPrint,
  Activity,
  HomeIcon,
  TreeDeciduous,
  Book,
  User,
} from "lucide-react";
import CleanWaterInitiative from "/public/Images/Clean Water Initiative.jpg";
import HealthcareAccess from "/public/Images/healthcare-3.jpg";
import Education from "/public/Images/Education.jpg";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react"; // Correct import

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import HeroSlider from "../components/HeroSlider";
import GallerySlider from "./GallerySlider";

export default function Home() {
  const campaigns = [
    {
      title: "Education for All",
      description: "Help provide quality education to underprivileged children",
      raised: 25000,
      goal: 50000,
      image: Education,
    },
    {
      title: "Clean Water Initiative",
      description:
        "Support our mission to provide clean water to rural communities",
      raised: 15000,
      goal: 30000,
      image: CleanWaterInitiative,
    },
    {
      title: "Healthcare Access",
      description: "Help us bring medical care to remote areas",
      raised: 35000,
      goal: 40000,
      image: HealthcareAccess,
    },
  ];
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      value: "10K+",
      label: "Communities Helped",
    },
    {
      icon: <Heart className="w-8 h-8 text-orange-500" />,
      value: "500K+",
      label: "Meals Served",
    },
    {
      icon: <Book className="w-8 h-8 text-orange-500" />,
      value: "5K+",
      label: "Children Educated",
    },
    {
      icon: <TreeDeciduous className="w-8 h-8 text-orange-500" />,
      value: "20K+",
      label: "Trees Planted",
    },
    {
      icon: <HomeIcon className="w-8 h-8 text-orange-500" />,
      value: "3K+",
      label: "Families Supported",
    },
    {
      icon: <Activity className="w-8 h-8 text-orange-500" />,
      value: "150+",
      label: "Medical Camps Organized",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      value: "2K+",
      label: "Volunteers Engaged",
    },
    {
      icon: <PawPrint className="w-8 h-8 text-orange-500" />,
      value: "1.5K+",
      label: "Animals Rescued",
    },
    {
      icon: <User className="w-8 h-8 text-orange-500" />,
      value: "8K+",
      label: "Women Empowered",
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-orange-500" />,
      value: "50+",
      label: "Disaster Relief Provided",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSlider />

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <img src="../assets/Images/Library.jpg" alt="" />
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 shadow-orange-500 shadow-sm rounded-lg"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GallerySlider */}
      <div className="py-6 bg-slate-200">
        <GallerySlider />
      </div>

      {/* Current Campaigns */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Current Campaigns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campaigns.map((campaign, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {campaign.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{campaign.description}</p>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Raised: ₹{campaign.raised.toLocaleString()}</span>
                      <span>Goal: ₹{campaign.goal.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full"
                        style={{
                          width: `₹{(campaign.raised / campaign.goal) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  <NavLink to={"/donate"} className="w-full inline-block text-center bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
                    Donate Now
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-gray-600 mb-8">
            Join our community of changemakers and help us create lasting impact
            in communities worldwide.
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition inline-flex items-center">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

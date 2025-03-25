import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import HeroSlider from "../components/HeroSlider";
import GallerySlider from "./GallerySlider";
import MarqueeText from "../components/MarqueeText";
import CountUpNumber from "../components/CountUpNumber";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

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
      value: 10000,
      label: "Communities Helped",
    },
    {
      icon: <Heart className="w-8 h-8 text-orange-500" />,
      value: 500000,
      label: "Meals Served",
    },
    {
      icon: <Book className="w-8 h-8 text-orange-500" />,
      value: 5000,
      label: "Children Educated",
    },
    {
      icon: <TreeDeciduous className="w-8 h-8 text-orange-500" />,
      value: 20000,
      label: "Trees Planted",
    },
    {
      icon: <HomeIcon className="w-8 h-8 text-orange-500" />,
      value: 3000,
      label: "Families Supported",
    },
    {
      icon: <Activity className="w-8 h-8 text-orange-500" />,
      value: 150,
      label: "Medical Camps Organized",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      value: 2000,
      label: "Volunteers Engaged",
    },
    {
      icon: <PawPrint className="w-8 h-8 text-orange-500" />,
      value: 1500,
      label: "Animals Rescued",
    },
    {
      icon: <User className="w-8 h-8 text-orange-500" />,
      value: 8000,
      label: "Women Empowered",
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-orange-500" />,
      value: 50,
      label: "Disaster Relief Provided",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSlider />

      {/* GallerySlider */}
      <div className="py-6 bg-slate-100">
        <GallerySlider />
      </div>

      {/* Current Campaigns */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Current Campaigns
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-aos="fade-up"
          >
            {campaigns.map((campaign, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg"
                data-aos="zoom-in"
              >
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col justify-between ">
                  <div>
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
                            width: `${
                              (campaign.raised / campaign.goal) * 100
                            }%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <NavLink
                    to={"/donate"}
                    className="w-full inline-block text-center bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
                  >
                    Donate Now
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Our Impact in Numbers
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-5 sm:grid-cols-3 gap-8"
            data-aos="fade-up"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 shadow-orange-500 shadow-sm rounded-lg"
                data-aos="zoom-in"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  <CountUpNumber key={index} end={stat.value} suffix="+" />
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <MarqueeText text="Environmental Protection   •   Healthcare Services   •   Cultural Preservation   •   Education Promotion   •   Food and Water   •   Awareness and Knowledge   •   Shelter and Care   •   Animal Welfare   •   Relief Work   •   Guidance for Youth" />
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-white" data-aos="fade-up">
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

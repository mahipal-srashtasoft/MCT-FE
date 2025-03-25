import React, { useEffect } from "react";
import {
  Book,
  Heart,
  Droplet,
  Home,
  TreeDeciduous,
  Users,
  Briefcase,
} from "lucide-react";
import CountUpNumber from "../components/CountUpNumber";
import Aos from "aos";

export default function Programs() {
    useEffect(() => {
      Aos.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    }, []);
  const programs = [
    {
      icon: <Book className="w-12 h-12 text-orange-500" />,
      title: "Education for Tribal Communities",
      description:
        "Providing access to quality education for children in remote tribal regions of Gujarat.",
      impact: "7000+ students empowered",
    },
    {
      icon: <Heart className="w-12 h-12 text-orange-500" />,
      title: "Rural Healthcare Support",
      description:
        "Free health checkups, maternal care, and awareness programs in rural Gujarat.",
      impact: "15000+ patients treated",
    },
    {
      icon: <Droplet className="w-12 h-12 text-orange-500" />,
      title: "Water Conservation Initiative",
      description:
        "Building water harvesting systems and providing clean drinking water in drought-prone areas.",
      impact: "120+ villages benefited",
    },
    {
      icon: <Home className="w-12 h-12 text-orange-500" />,
      title: "Affordable Housing Project",
      description:
        "Constructing low-cost houses for underprivileged families in rural Gujarat.",
      impact: "600+ homes built",
    },
    {
      icon: <TreeDeciduous className="w-12 h-12 text-orange-500" />,
      title: "Environmental Conservation",
      description:
        "Afforestation projects and sustainable farming initiatives in Gujarat.",
      impact: "50,000+ trees planted",
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Women Empowerment Program",
      description:
        "Providing skill development and self-employment opportunities to women.",
      impact: "4000+ women trained",
    },
    {
      icon: <Briefcase className="w-12 h-12 text-orange-500" />,
      title: "Livelihood Development",
      description:
        "Vocational training and employment assistance for youth in Gujarat.",
      impact: "2000+ individuals employed",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=2000"
            alt="Programs Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center px-4" data-aos="zoom-out-down">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Initiatives in Gujarat
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Creating sustainable change across rural and urban communities in
            Gujarat.
          </p>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg" data-aos="zoom-in-up">
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full inline-block">
                  {program.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8"  data-aos="zoom-out">Our Impact in Gujarat</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div data-aos="zoom-out">
              <div className="text-4xl font-bold text-orange-500 mb-2">
                {" "}
                <CountUpNumber end={"100000"} suffix="+" />
              </div>
              <p className="text-gray-600">Donors</p>
            </div>
            <div  data-aos="zoom-out">
              <div className="text-4xl font-bold text-orange-500 mb-2">
                <CountUpNumber end={"250000"} suffix="+" />
              </div>
              <p className="text-gray-600">Volunteers</p>
            </div>
            <div  data-aos="zoom-out">
              <div className="text-4xl font-bold text-orange-500 mb-2">
                <CountUpNumber end={"30"} suffix="+" />
              </div>
              <p className="text-gray-600">Ongoing Programs</p>
            </div>
            <div  data-aos="zoom-out">
              <div className="text-4xl font-bold text-orange-500 mb-2">
                <CountUpNumber end={"10"} suffix="+" />{" "}
              </div>
              <p className="text-gray-600">Years of Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

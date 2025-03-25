import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade, EffectCube, EffectCoverflow } from "swiper/modules";
import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Aos from "aos";
import { useEffect } from "react";

const SlideContent = ({ imageUrl }) => (
  <div className="relative h-[100vh] flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img src={imageUrl} alt="Hero" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50 top-10" />
    </div>

    {/* Content */}
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 capitalize leading-tight drop-shadow-lg" data-aos="zoom-out-down">
        Empowering Change, One Step at a Time
      </h1>
      <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto" data-aos="zoom-out-down">
        Join hands with us to create a brighter future through education,
        sustainability, and community support.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <NavLink
          to="/donate"
          className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-md"
          data-aos="zoom-out-down"
        >
          Donate Now
        </NavLink>
        <NavLink
          to="/get-involved"
          className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-md"
          data-aos="zoom-out-down"
        >
          Get Involved
        </NavLink>
      </div>
    </div>
  </div>
);

const HeroSlider = () => {
    useEffect(() => {
      Aos.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    }, []);
  const slides = [
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000",
    "https://demo.awaikenthemes.com/lenity/wp-content/uploads/2025/02/page-header-bg.jpg",
    "/Images/hero-bg-2.jpg",
    "/Images/hero-bg.jpg",
  ];

  return (
    <Swiper
      modules={[ Pagination, Autoplay, EffectCoverflow]}
      effect="coverflow"
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      
      pagination={{ clickable: true  }}
      className="h-[100vh]"
    >
      {slides.map((imageUrl, index) => (
        <SwiperSlide key={index}>
          <SlideContent imageUrl={imageUrl} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;

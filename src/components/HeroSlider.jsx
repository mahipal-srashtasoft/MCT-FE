import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";



// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Reusable SlideContent Component
const SlideContent = ({ imageUrl }) => (
  <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={imageUrl} alt="Hero" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/60" />
    </div>

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Making a Difference in Lives Around the World
      </h1>
      <p className="text-xl text-gray-200 mb-8">
        Join us in our mission to create positive change through sustainable
        development, education, and community empowerment.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <NavLink
          to="/donate"
          className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          Donate Now
        </NavLink>
        <NavLink
          to="/get-involved"
          className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Get Involved
        </NavLink>
      </div>
    </div>
  </div>
);

const HeroSlider = () => {
  const slides = [
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <Swiper
      modules={[ Autoplay , EffectFade]}
      
      effect="fade"
      autoplay={{ delay: 3000 }}
      className="h-[600px]"
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

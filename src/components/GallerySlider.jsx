import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { GalleryData } from "./galleryData";

const GallerySlider = () => {
  const navigate = useNavigate();
  const sliderData = GalleryData.slice(0, 10); // First 10 items only

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Our Activities</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          320: { slidesPerView: 1 }, // 1 card in mobile
          640: { slidesPerView: 2 }, // 2 cards in tablets
          1024: { slidesPerView: 3 }, // 3 cards in desktop
        }}
        className="w-full py-5"
      >
        {sliderData.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-80">
              <img src={item.url} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col items-center">
                {item.icon}
                <h3 className="text-lg font-semibold mt-2 capitalize">{item.name}</h3>
                <p className="text-gray-500 text-sm capitalize">{item.category}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center mt-6">
        <button
          onClick={() => navigate("/gallery")}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Show More Activities
        </button>
      </div>
    </div>
  );
};

export default GallerySlider;

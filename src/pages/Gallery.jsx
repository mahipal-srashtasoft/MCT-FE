import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GalleryData } from "./GalleryData";
import { FaChevronCircleLeft, FaChevronCircleRight, FaTimes } from "react-icons/fa";
import Aos from "aos";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [visibleImages, setVisibleImages] = useState(6); // Initially show 6 images

    useEffect(() => {
      Aos.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    }, []);

  const categories = [
    "All",
    "Education",
    "Healthcare",
    "Water",
    "Environment",
    "Women Empowerment",
    "Livelihood",
    "Other",
  ];

  // Filter images based on category
  const filteredImages =
    selectedCategory === "All"
      ? GalleryData
      : GalleryData.filter((img) => img.category === selectedCategory);

  // Handle "See More" button click
  const handleSeeMore = () => {
    setVisibleImages((prev) => prev + 6);
  };

  return (
    <div className="min-h-screen bg-white py-10">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=2000"
            alt="Gallery Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" data-aos="zoom-out-down">
            Our Impact in Pictures
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto" data-aos="zoom-out-down">
            A glimpse of our efforts across Gujarat in various fields like
            education, healthcare, and empowerment.
          </p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="my-8 px-4">
        {/* Mobile Dropdown */}
        <div className="md:hidden" data-aos="zoom-out-down">
          <select
            className="w-full p-3 border rounded-lg text-gray-700"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setVisibleImages(6);
            }}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex flex-wrap justify-center gap-4" data-aos="zoom-in">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleImages(6);
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" >
        {filteredImages.slice(0, visibleImages).map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer relative hoverDiv"
            onClick={() => setLightboxIndex(index)}
            data-aos="fade-up"
          >
            <img
              src={image.url}
              alt={image.name}
              className="w-full h-64 object-cover"
            />
            <div className="w-full DetailsSec flex items-center gap-3">
              {image.icon} {image.name || "Other"}
            </div>
          </motion.div>
        ))}
      </div>

      {/* "See More" Button */}
      {visibleImages < filteredImages.length && (
        <div className="text-center mt-8" data-aos="zoom-in">
          <button
            className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
            onClick={handleSeeMore}
          >
            See More
          </button>
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Left Arrow */}
          <button
            className="absolute left-10 text-white text-3xl bg-orange-800/60 p-3 rounded-full hover:bg-orange-700 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prevIndex) =>
                prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1
              );
            }}
          >
            <FaChevronCircleLeft />
          </button>

          {/* Lightbox Image */}
          <img
            src={filteredImages[lightboxIndex].url}
            alt={filteredImages[lightboxIndex].name}
            className="gallaryAllImg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Right Arrow */}
          <button
            className="absolute right-10 text-white text-3xl bg-orange-800/60 p-3 rounded-full hover:bg-orange-700 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prevIndex) =>
                prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1
              );
            }}
          >
            <FaChevronCircleRight />
          </button>

          {/* Close Lightbox */}
          <div
            className="absolute top-5 right-5 text-white bg-orange-500/60 h-10 w-10 flex items-center justify-center rounded-full text-2xl font-semibold cursor-pointer"
            onClick={() => setLightboxIndex(null)}
          >
            <FaTimes />
          </div>
        </div>
      )}
    </div>
  );
}

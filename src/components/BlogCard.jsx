import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";

const BlogCard = ({ post, onClick }) => {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer"
      onClick={() => onClick(post)}
    >
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <User className="w-4 h-4 mr-1" />
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <Calendar className="w-4 h-4 mr-1" />
          <span>{post.date}</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>

        <button className="text-orange-500 font-semibold hover:text-orange-600 transition flex items-center">
          Read More
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;

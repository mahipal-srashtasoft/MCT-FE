import React from "react";
import BlogCard from "./BlogCard";

const BlogList = ({ posts, onPostClick }) => {
  return (
    <div className="md:py-20 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} onClick={onPostClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;

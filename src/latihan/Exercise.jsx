import React, { useState, useEffect } from "react";
import { postsData } from "./postsData.js"; 
import PostCard from "./PostCard";

function Exercise() {
  const [posts, setPosts] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        
        setPosts(postsData); 
        setIsLoading(false); 
      } catch (error) {
        console.error("Gagal memuat data:", error);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-special-red2 mb-12">
          Post Cards
        </h1>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-xl font-medium text-gray-500 animate-pulse">
              Memuat data ...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Exercise;
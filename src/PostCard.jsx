import React, { useState } from "react";

function PostCard({ id, userId, title, body }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div 
      className="flex flex-col justify-between p-6 bg-white border border-transparent rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:border-pink-300 hover:bg-pink-100 h-full text-center"
    >
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4 capitalize leading-tight">{title}</h2>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">{body}</p>
      </div>

      <button
        onClick={() => setIsClicked(true)}
        disabled={isClicked}
        className={`w-full py-3 rounded-md text-white font-medium transition-all hover:brightness-125 ${
        isClicked ? "bg-special-red2 cursor-not-allowed" : "bg-gray-500"
    }`}
      >
        {isClicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default PostCard;
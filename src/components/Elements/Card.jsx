import React from "react";

function Card(props) {
  const { title, link = false, desc } = props;

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center text-gray-02 mb-2">
        <div className="text-2xl">{title}</div>
        
        {/* KITA PAKSA WARNANYA DI SINI DENGAN MENAMBAHKAN text-gray-02 */}
        {link && <div className="text-xs text-gray-02">View All</div>}
      </div>
      
      <div className="bg-white rounded-lg px-6 py-5 shadow-xl flex-1">
        {desc}
      </div>
    </div>
  );
}

export default Card;
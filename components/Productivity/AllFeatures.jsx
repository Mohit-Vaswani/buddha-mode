"use client"

import React, { useState } from "react";
import { ProductivityFeatures } from "@/constants/constant";
import Image from "next/image";

const AllFeatures = () => {
  const [activeTag, setActiveTag] = useState(ProductivityFeatures[0].tag);

  const handleTagClick = (tag) => {
    setActiveTag(tag);
  };

  return (
    <div>
      <div className="mt-12 flex gap-10">
        {ProductivityFeatures.map((features, index) => (
          <div key={index}>
            <p
              className={`text-xl ${
                features.tag === activeTag ? "text-white border-b cursor-pointer" : "text-gray-400 cursor-pointer"
              }`}
              onClick={() => handleTagClick(features.tag)}
            >
              {features.tag}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-10 w-10/12">
        {ProductivityFeatures.map((features, index) => (
          <div key={index}>
            <Image
              src={features.imageLink}
              alt="images"
              width={500}
              height={500}
              className="w-80 h-80 object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFeatures;

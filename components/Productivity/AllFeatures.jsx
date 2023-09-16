"use client"

import React, { useState } from "react";
import { ProductivityFeatures } from "@/constants/constant";
import All from "./All";
import Notes from "./Notes";
import Bookmark from "./Bookmark";
import Quotes from "./Quotes";
import Todo from "./Todo";

const AllFeatures = () => {
  const [activeComponent, setActiveComponent] = useState("All"); // Initialize with "All" as the default active component

  const handleTabClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      <div className="mt-12 flex flex-wrap gap-10">
        {ProductivityFeatures.map((features, index) => (
          <div key={index} className="text-xl text-gray-400 cursor-pointer">
            <p onClick={() => handleTabClick(features.tag)} 
            className={activeComponent === features.tag ? "active text-orange-400" : ""}>
              {features.tag}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full">
        {activeComponent === "All" && <All />}
        {activeComponent === "Notes" && <Notes />}
        {activeComponent === "Bookmark" && <Bookmark />}
        {activeComponent === "Quotes" && <Quotes />}
        {activeComponent === "To-do" && <Todo />}
      </div>
    </div>
  );
};

export default AllFeatures;
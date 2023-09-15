"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react";
import TabLinks from "../crafts/TabLinks"

const Main = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
    <main className="mainComponent w-full lg:w-9/12 flex gap-8 flex-col justify-center items-center lg:border-l border-gray-700">
      <Image src="/assets/Buddha.svg" alt="Buddha logo" width={170} height={170} />
      <h1 className="text-4xl sm:text-5xl"> Happy to see you here 👋 </h1>
      <p className="text-2xl">What are your goals for today?</p>
      {windowSize > 1023 ?  " " : <TabLinks/> }
    </main>
    </>
  )
}

export default Main
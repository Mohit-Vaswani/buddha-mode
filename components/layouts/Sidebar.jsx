import React, { useEffect, useState } from "react";
import NavItems from "../crafts/NavItems";
import BuddhaLogo from "../crafts/BuddhaLogo";
import UserProfile from "../crafts/UserProfile";

const Sidebar = ({ userName }) => {
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
    <nav className="sidebar flex flex-row-reverse lg:flex-col justify-between p-12 w-full lg:w-3/12">
      <UserProfile userName={userName} />
      {windowSize > 1023 ? <NavItems /> : " "}
      <BuddhaLogo />
    </nav>
  );
};

export default Sidebar;

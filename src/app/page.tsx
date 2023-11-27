"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// import backgroundImage from "../../public/assests/webbg.jpg";
// import Navbar from "./components/Navbar/navbar";
// import Image from "next/image";
// import PlanetIcon from "../../public/assests/logo/planet.png";
// import FileIcon from "../../public/assests/logo/file.png";
// import GalaxyIcon from "../../public/assests/logo/galaxy.png";
// import BlackHoleIcon from "../../public/assests/logo/bh.png";
import Diamonds2 from "../../public/assests/logo/Diamonds2.png";
// import MenuIcon from "../../public/assests/logo/menu.png";

const PopupCard = dynamic(() => import("./components/Cards/PopupCard"));

// mobile landing page
const LandingMob = dynamic(
  () => import("./components/landingMobile/LandingMob")
);
const Desktop = dynamic(() => import("./components/common/Desktop"));

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Prata&display=swap"
          rel="stylesheet"
        />
      </head>
      {isMobile ? (
        <LandingMob />
      ) : (
        <Desktop>
          <PopupCard image={Diamonds2} altHeading="diamonds" />{" "}
        </Desktop>
      )}
    </>
  );
};

export default Home;

"use client";
import React, { useState, useEffect } from "react";
// import backgroundImage from "../../public/assests/webbg.jpg";
// import Navbar from "../components/Navbar/navbar";
// import Image from "next/image";
// import PlanetIcon from "../../public/assests/logo/planet.png";
// import FileIcon from "../../public/assests/logo/file.png";
// import GalaxyIcon from "../../public/assests/logo/galaxy.png";
// import BlackHoleIcon from "../../public/assests/logo/bh.png";
// import Diamonds2 from "../../../public/assests/logo/Diamonds2.png";
// import MenuIcon from "../../public/assests/logo/menu.png";
// import PopupCard from "../components/Cards/PopupCard";

// mobile landing page
// import LandingMob from "../components/landingMobile/LandingMob";
import dynamic from "next/dynamic";
const Desktop = dynamic(() => import("../components/common/Desktop2"));
const DashboardCard = dynamic(
  () => import("../components/Dashboard/Dashboardcard")
);
const MobileLayout = dynamic(() => import("../components/Layout/MobileLayout"));
const DashboardMobileCard = dynamic(
  () => import("../components/Dashboard/DashboardMobileCard")
);
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
const Home = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });
  // const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // const toggleSidebar = () => {
  //   setSidebarOpen(!sidebarOpen);
  // };

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
        <MobileLayout>
          <DashboardMobileCard />
        </MobileLayout>
      ) : (
        <Desktop>
          <DashboardCard />
        </Desktop>
      )}
    </>
  );
};

export default Home;

"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import Diamonds2 from "../../../public/assests/logo/Diamonds2.png";
const Redirect = dynamic(() => import("../components/Cards/Redirect"));
// mobile landing page
// import LandingMob from "../components/landingMobile/LandingMob";
const Desktop = dynamic(() => import("../components/common/Desktop"));
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import PopUpLayout from "../components/common/PopUpLayout";
const MobileLayout = dynamic(() => import("../components/Layout/MobileLayout"));

const Login = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.replace("/dashboard");
    }
  }, [session]);

  const [isMobile, setIsMobile] = useState(false);

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
          <div className="my-[15%]">
            <Redirect />
          </div>{" "}
        </MobileLayout>
      ) : (
        <PopUpLayout>
          <Redirect />
        </PopUpLayout>
      )}
    </>
  );
};

export default Login;

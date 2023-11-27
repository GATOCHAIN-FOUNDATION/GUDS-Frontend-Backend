"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import background from "../../../../public/assests/background_images/popup_bg.png";
import { useRouter, useParams } from "next/navigation";

// import Redirect from "../components/Cards/Redirect";
const Verified = dynamic(() => import("../../components/Cards/VerifiedCard"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));
const MobileNav = dynamic(() => import("../../components/Navbar/mobileNav"));

const page = async () => {
  const { token } = useParams();
  const [activatetoken, setActivateToken] = useState(token);
  const [verified, setVerified] = useState(false);
  console.log(token);

  return (
    <>
      <div className="flex flex-col relative min-h-[100vh] max-h-full bg-cover bg-center justify-center items-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={background}
            alt="Background"
            style={{
              zIndex: -2,
            }}
            className="w-full h-full bg-cover"
          />
        </div>

        <div className="absolute inset-0 w-full h-full backdrop-blur-2xl"></div>

        <div className="fixed top-0 z-[20]">
          <MobileNav />
        </div>

        <div className="pt-[200px] my-8 z-[20]">
          {" "}
          <Verified />
        </div>

        <div className="sticky top-[100%] flex justify-start w-full z-[20]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;

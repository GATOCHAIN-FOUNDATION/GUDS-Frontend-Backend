import React, { useState, useEffect } from "react";
// import { useRouter } from 'next/router';
import Image from "next/image";
// import backgroundImage from "../../../../public/assests/background_images/background2.jpg";
import catprofile from "../../../../public/assests/background_images/profile2.png";
import ForwardIcon from "../../../../public/assests/icons/Foward.png";
// import PersonalInformation from "../../components/Profile/personalInformation";
// import Language from "../../components/Profile/language";
// import History from "../../components/Profile/history";
import cross from "../../../../public/assests/icons/cross.png";
import camera from "../../../../public/assests/icons/camera1.png";
import Link from "next/link";

const Profile = () => {
  const links = [
    { id: 1, heading: "Personal Information", to: "/profile/personalInfo" },
    { id: 2, heading: "Order", to: "/profile/order" },
    { id: 3, heading: "History", to: "/profile/history" },
    { id: 4, heading: "Country & Language", to: "/profile/countryandlanguage" },
  ];

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
      <div
        className={`flex  flex-col h-full items-center justify-center w-[80%] font-monl rounded-[50px] ${
          isMobile && "mt-[50px]"
        }`}
        style={{
          background: `rgba(0, 0, 0, 0.2)`,
          backdropFilter: `blur(75px)`,
        }}
      >
        <div className="flex items-center justify-center w-[100%]">
          <Link href="/profile/camera">
            {" "}
            <Image
              alt="camera1"
              src={camera}
              className={"mt-[70px]  "}
              height={20}
              width={20}
            />
          </Link>
          {isMobile ? (
            <Image
              alt="catprofile"
              src={catprofile}
              className={"mt-[-50px] "}
              height={230}
              width={230}
            />
          ) : (
            <Image
              alt="catprofile"
              src={catprofile}
              className={"mt-[-100px] "}
              height={330}
              width={330}
            />
          )}
          <Image
            alt="cross"
            src={cross}
            className={`mt-[-70px] absolute right-5 ${
              isMobile ? "right-5" : "right-15"
            }cursor-pointer`}
            height={10}
            width={10}
          />
        </div>
        <div className={`pb-8  p-5 ${isMobile ? "w-[100%]" : "w-[70%]"} `}>
          {links.map((item) => {
            return (
              <Link href={item.to}>
                <div
                  key={item.id}
                  //   onClick={() => handleTabClick("personalInformation")}
                  className="flex items-center justify-between w-[100%]  hover:bg-white/10 py-3 px-2 border-b-[1px]  cursor-pointer transition duration-300 ease-in transform scale-100"
                >
                  <h1 className="text-white text-base font-monl">
                    {item.heading}
                  </h1>{" "}
                  <Image
                    alt="ForwardIcon"
                    src={ForwardIcon}
                    className={""}
                    height={20}
                    width={20}
                  />
                </div>
              </Link>
            );
          })}
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default Profile;

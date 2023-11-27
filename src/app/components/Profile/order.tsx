"use client";
import React from "react";
import { useState, useEffect } from "react";
import USDT from "../../../../public/assests/logo/tether.png";
import Image from "next/image";
import Logo3 from "../../../../public/assests/logo/logo3.png";
import catprofile from "../../../../public/assests/background_images/profile2.png";
import AddIcon from "../../../../public/assests/logo/Add.png";
import OrderBuy from "../../../../public/assests/icons/orderbuy1.png";
import gem from "../../../../public/assests/dashboard/gem.png";
const order = () => {
  const [balance1, setBalance1] = useState("50000");
  const [balance2, setBalance2] = useState("10 ,6 06");
  const [option, SetOption] = useState(true);
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
    <div
      className={` my-[50px] z-[100] flex flex-col items-center rounded-bl-[20px]  rounded-tr-[20px] rounded-br-[0px] rounded-tl-[20px] justify-start w-[350px] h-[569px]  bg-[#000000] bg-opacity-20  rounded-3xl  relative`}
    >
      <div className="w-[100%] flex items-center justify-center">
        <div className="flex flex-col items-start p-3 justify-start  w-[160px] bg-[#000000] bg-opacity-20    rounded-[20px] mt-[10px] h-[120px]">
          <h1 className="  text-white text-[15px] font-meb">
            GU<span className="font-meul">D</span>S{" "}
            <span className="font-meul italic text-[10px] ">balance</span>
          </h1>
          <h1 className="font-meul text-white text-[20px]">0.0000</h1>
        </div>
        <Image
          alt="catprofile"
          src={catprofile}
          className={"mt-[-70px] "}
          height={180}
          width={180}
        />
      </div>

      <div className="flex items-center justify-center w-[100%]">
        <div className="flex items-center justify-center h-[50px] rounded-lg w-[200px] m-2 bg-[#000000] bg-opacity-20 backdrop-blur-2xl shadow-md">
          {" "}
          <Image alt="gem" src={gem} className={""} height={80} width={80} />
          <h1 className="text-white font-meul text-[10px]">Invite and Earn</h1>
        </div>
        <div className="mt-5 mr-5 ml-5 w-[200px] bg-[#C3F847] backdrop-blur-2xl shadow-md rounded-lg  h-[120px] ">
          <h1 className="italic font-meul text-xs m-2">
            INSURE / INVEST / DONATE
          </h1>
          <br />
          <h1 className="text-center font-meb">WHY BUY ?</h1>
        </div>
      </div>
      <br />

      <div className="w-[100%] flex items-center justify-center">
        <div className="w-[125px] ml-[10px] flex flex-col justify-between bg-[#000000] bg-opacity-20  rounded-[20px] h-[200px] p-3 font-meul text-white text-2xl">
          <div className="w-[100%]">
            <h1>PRE</h1>
            <h1>ORD</h1>
            <h1>ER</h1>
          </div>
          <div className="flex w-[100%] items-center justify-end">
            <Image
              alt={""}
              src={AddIcon}
              className={"mx-2 cursor-pointer"}
              height={60}
              width={60}
            />
          </div>
        </div>

        <Image
          alt="OrderBuy"
          src={OrderBuy}
          className={"ml-[10px] z-[100]"}
          height={200}
          width={200}
        />
      </div>
      <div className="flex items-center justify-end z-0  w-[100%]">
        <div className="w-[200px] h-[60px] bottom-0 rounded-bl-[20px] rounded-br-[20px]  absolute mb-[-60px]  origin-center flex items-center justify-start">
          <div className="border-r-[30px]  border   w-[60px] h-[60px] flex items-center justify-end border-l-[30px] border-b-[30px] border-t-[30px] border-l-transparent border-r-black/20 border-b-transparent border-t-black/20 "></div>
          <div className="bg-black/20  w-[140px] h-[60px] rounded-br-[20px] ">
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default order;

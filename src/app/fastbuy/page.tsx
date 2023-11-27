import React from "react";
import dynamic from "next/dynamic";
const FastBuyCard = dynamic(() => import("../components/FastBuy/FastBuyCard"));
// import Image from "next/image";
const MobileLayout = dynamic(() => import("../components/Layout/MobileLayout"));
// import bg from "../../../public/assests/background_images/background2.jpg";
const FastBuy = () => {
  return (
    <div>
      <MobileLayout>
        <div className="flex items-center justify-center w-[100%] h-screen ">
          <FastBuyCard />
        </div>
      </MobileLayout>
    </div>
  );
};

export default FastBuy;

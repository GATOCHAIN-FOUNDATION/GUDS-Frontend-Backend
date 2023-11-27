import React from "react";
import dynamic from "next/dynamic";

const MobileLayout = dynamic(() => import("../components/Layout/MobileLayout"));
const SuccessCard = dynamic(() => import("../components/Success/success"));
const page = () => {
  return (
    <MobileLayout>
      <SuccessCard />
    </MobileLayout>
  );
};

export default page;

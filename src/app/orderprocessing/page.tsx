import React from "react";
import { OrderProcessing } from "@/app/components/Cards/OrderProcessing";
import MobileLayout from "../../app/components/Layout/MobileLayout";
const page = () => {
  return (
    <div>
      <MobileLayout>
        <OrderProcessing />
        {/* < OrderProcessing/> */}
      </MobileLayout>
    </div>
  );
};

export default page;

import React from "react";
import { CardDetails } from "@/app/components/Cards/CardDetails";
import { OrderProcessing } from "@/app/components/Cards/OrderProcessing";
import MobileLayout from "../../app/components/Layout/MobileLayout";
const page = () => {
  return (
    <div>
      <MobileLayout>
        <CardDetails />
        {/* <OrderProcessing/> */}
      </MobileLayout>
    </div>
  );
};

export default page;

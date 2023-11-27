"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MobileLayout from "../components/Layout/MobileLayout";
import { Thankyou } from "../components/Cards/Thankyou";

const ThankyouPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      //   setShowThankYou(false); // Hide the Thankyou modal
      router.replace("dashboard"); // Redirect after a successful login
    }, 5000);
  });
  return (
    <MobileLayout>
      <Thankyou />
    </MobileLayout>
  );
};

export default ThankyouPage;

"use client";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

import { useWidth } from "../../utils/Resize";
// import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import MobileLayout from "../components/Layout/MobileLayout";
import { ToastContainer } from "react-toastify";
// import { ToastContainer, toast } from "react-toastify";

const Signup = dynamic(() => import("../components/Signup/Signup"));
const Desktop = dynamic(() => import("../components/common/Desktop"));

const SignupPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      // toast.info("Redirecting...", {
      //   position: "bottom-center",
      //   autoClose: 3000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "dark",
      // });
      router.replace("/nftconnect/swap");
    } else {
      // toast.info("Loading...", {
      //   position: "bottom-center",
      //   autoClose: 3000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "dark",
      // });
    }
  }, [session]);

  return (
    <>
      {useWidth() ? (
        <Signup />
      ) : (
        <Desktop>
          <Signup />
        </Desktop>
      )}
      <ToastContainer />
    </>
  );
};

export default SignupPage;

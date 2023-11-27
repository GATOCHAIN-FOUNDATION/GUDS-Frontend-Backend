"use client"
import React from 'react'
import dynamic from "next/dynamic";
import SliderImage from "../../../public/assests/background_images/SliderImage.png";
import SliderImage2 from "../../../public/assests/background_images/SliderImage2.png";
import Rectangle from "../../../public/assests/icons/Rectangle.png";
import GreenTick from "../../../public/assests/icons/GreenCheck.png";
import Image from 'next/image'
const Checkout = dynamic(
    () => import("../../components/Checkout/checkout")
  );
  const CheckoutBeforePayment = dynamic(
    () => import("../../components/Checkout/checkoutBeforePayment")
  ); 
  const Cart = dynamic(
    () => import("../../components/Cart/cart")
  );
  const MobileLayout = dynamic(
    () => import("../../components/Layout/MobileLayout")
  );
const page = () => {
   
  return (
    <MobileLayout>
   <Checkout/>

   </MobileLayout>
  )
}

export default page
"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ethers, BigNumber } from "ethers";
import SliderImage from "../../../../public/assests/background_images/SliderImage.png";
import SliderImage2 from "../../../../public/assests/background_images/SliderImage2.png";
import Rectangle from "../../../../public/assests/icons/Rectangle.png";
import GreenTick from "../../../../public/assests/icons/GreenCheck.png";
import Image from "next/image";
import Link from "next/link";
import CheckoutButton from "../../components/StripeCheckoutButton/CheckoutButton";
import Unchecked from "../../../../public/assests/icons/Uncheck.png";
import WalletConnectBlue from "../../../../public/assests/icons/WalletConnectBlue.png";
import CreditCard from "../../../../public/assests/icons/CreditCard.png";
import TransferBank from "../../../../public/assests/icons/TransferBank.png";
import { redirect, useParams, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { FC } from "react";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useConnect } from "wagmi";
const Checkout = dynamic(() => import("../../components/Checkout/checkout"));
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import {
  CONTRACT_ADDRESS,
  CONTRACT_ABI,
} from "../../../../constants/contract/contract";
import {
  GUDS_CONTRACT_ADDRESS,
  GUDS_CONTRACT_ABI,
} from "../../../../constants/token/GUDSTOKEN";
const MobileLayout = dynamic(
  () => import("../../components/Layout/MobileLayout")
);
const CheckoutBeforePayment = dynamic(
  () => import("../../components/Checkout/checkoutBeforePayment")
);
interface pageProps {
  params: { slug: string };
}
const Cart = dynamic(() => import("../../components/Cart/cart"));
const page: FC<pageProps> = ({ params }) => {
  const { open, close } = useWeb3Modal();
  const [decryptedText, setDecryptedText] = useState("");
  const router = useRouter();
  const func = params.slug[0];
  let amount;
  let passamount = params.slug[1];
  const metadata = params.slug[2];
  if (func == "buy" || func == "stake") {
    amount = ethers.utils.parseEther(passamount);
  }
  console.log("metadata", func, amount, metadata);
  const SliderContent = [
    {
      image: SliderImage,
      heading: "",
      description: "",
      color: "#C3F847",
      order: 1,
    },
    {
      image: SliderImage2,
      heading: "",
      description: "",
      color: "#B384FF",
      order: 2,
    },
  ];
  const [selectedOption, setSelectedOption] = useState("crypto");
  const { connector: activeConnector, isConnected } = useAccount();

  const handleOptionChange = (option: string) => (event: any) => {
    setSelectedOption(option);
  };
  const handleOptionRemove = () => {
    setSelectedOption("");
  };

  const { config } = usePrepareContractWrite({
    address: func == "swap" ? CONTRACT_ADDRESS : GUDS_CONTRACT_ADDRESS,
    abi: func == "swap" ? CONTRACT_ABI : GUDS_CONTRACT_ABI,
    functionName: `${func}`,
    args:
      func == "swap"
        ? [amount, metadata]
        : func == "buy"
        ? [passamount]
        : [passamount],
    chainId: 80001,
    onError(error: any) {
      console.log("Error", error);
    },
    onSuccess(data) {
      console.log("Success", data);
    },
  });

  const { data, write } = useContractWrite(config);

  return (
    <MobileLayout>
      <div className="flex relative flex-col w-[350px] rounded-[20px] shadow-lg h-[500px] items-center justify bg-[#000000] bg-opacity-20 backdrop-blur-2xl">
        <h1 className="font-meul text-white my-4">Check out</h1>
        {/* {SliderContent.map((item) => {
          return (
            <CheckoutBeforePayment
              image={item.image}
              heading={item.heading}
              desc={item.description}
              headingColor={item.color}
              order={item.order}
            />
          );
        })} */}
        <div className="flex flex-col h-[350px] shadow-lg font-dmsans items-center p-3 justify-between w-[90%] bg-[#000000] rounded-[20px] bg-opacity-20 backdrop-blur-2xl">
          <div className="flex flex-col items-start justify-start w-[100%] ] text-white">
            {" "}
            <h1>Proceed with payment</h1>
            <div className="flex w-[100%] items-center justify-between my-1 ">
              <div className="flex items-center justify-start">
                <div className="flex items-center justify-center w-[40px] h-[40px] mr-2 rounded-lg bg-slate-200">
                  <Image
                    src={WalletConnectBlue}
                    width={25}
                    height={5}
                    alt="Check"
                  />
                </div>

                <div className="flex flex-col  ">
                  <h1>Add Crypto Wallet</h1>
                  <h1 className="text-[10px] text-[#C3F847]">
                    Connect your crypto wallet
                  </h1>
                </div>
              </div>
              <div className="flex items-center justify-end">
                {selectedOption == "crypto" ? (
                  <Image
                    src={GreenTick}
                    width={25}
                    height={5}
                    alt="Check"
                    onClick={handleOptionRemove}
                  />
                ) : (
                  <Image
                    src={Unchecked}
                    width={25}
                    height={5}
                    alt="Check"
                    onClick={handleOptionChange("crypto")}
                  />
                )}
              </div>{" "}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[100%] my-1 text-white">
            {" "}
            <h1>Change payment method </h1>
          </div>
          <div className="flex w-[100%] items-center justify-between my-1 ">
            <div className="flex items-center justify-start">
              <div className="flex items-center justify-center w-[40px] h-[40px] mr-2 rounded-lg bg-slate-200">
                <Image src={CreditCard} width={25} height={5} alt="Check" />
              </div>

              <div className="flex flex-col  ">
                <h1 className="text-white">Add Credit/Debit Card</h1>
                <h1 className="text-[10px] text-[#C3F847]">
                  Connect your crypto wallet
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-end">
              {selectedOption == "credit" ? (
                <Image
                  src={GreenTick}
                  width={25}
                  height={5}
                  alt="Check"
                  onClick={handleOptionRemove}
                />
              ) : (
                <Image
                  src={Unchecked}
                  width={25}
                  height={5}
                  alt="Check"
                  onClick={handleOptionChange("credit")}
                />
              )}
            </div>{" "}
          </div>
          <div className="flex w-[100%] items-center justify-between my-1 ">
            <div className="flex items-center justify-start">
              <div className="flex items-center justify-center w-[40px] h-[40px] mr-2 rounded-lg bg-slate-200">
                <Image src={TransferBank} width={25} height={5} alt="Check" />{" "}
              </div>

              <div className="flex flex-col  ">
                <h1 className="text-white">Add Bank Transfer</h1>
                <h1 className="text-[10px] text-[#C3F847]">
                  Connect your crypto wallet
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-end">
              {selectedOption == "card" ? (
                <Image
                  src={GreenTick}
                  width={25}
                  height={5}
                  alt="Check"
                  onClick={handleOptionRemove}
                />
              ) : (
                <Image
                  src={Unchecked}
                  width={25}
                  height={5}
                  alt="Check"
                  onClick={handleOptionChange("card")}
                />
              )}
            </div>{" "}
          </div>

          <div className="flex w-[100%]  border-b-[1px] ">
            {" "}
            <h1 className="text-[#B384FF]">Guds Preorder Info</h1>{" "}
          </div>
          <div className="flex w-[100%] items-center justify-between text-white">
            {" "}
            <h1>Subtotal</h1> <h1>${passamount}</h1>
          </div>
          <div className="flex w-[100%] items-center justify-between text-white text-[10px]">
            {" "}
            <h1>Estimated Time of Activation</h1>
            <h1>23/19/2023</h1>
          </div>
        </div>

        {selectedOption == "crypto" && (
          <button
            className="flex items-center justify-center font-meul absolute bottom-0 p-5 cursor-pointer rounded-[20px] bg-[#C3F847] text-black w-[100%] "
            onClick={() => {
              write?.();
              console.log("write clicked");
            }}
          >
            {" "}
            CONFIRM
          </button>
        )}
        {selectedOption == "credit" && <CheckoutButton amount={passamount} />}
        {selectedOption === "card" && (
          <button className="flex items-center justify-center font-meul absolute bottom-0 p-5 cursor-pointer rounded-[20px] bg-[#C3F847] text-black w-[100%] ">
            {" "}
            <Link href="/carddetails">CONFIRM</Link>
          </button>
        )}
      </div>
    </MobileLayout>
  );
};

export default page;

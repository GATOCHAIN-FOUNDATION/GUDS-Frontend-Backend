"use client";
import React from "react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import axios from "axios";
import { useAccount } from "wagmi";
import Link from "next/link";
import cross from "../../../../public/assests/icons/cross.png";
import coin from "../../../../public/assests/icons/coin2.png";
import coin1 from "../../../../public/assests/coins/Pairs.png";
import coin2 from "../../../../public/assests/coins/Pairs1.png";
import coin3 from "../../../../public/assests/coins/Pairs2.png";
import coin4 from "../../../../public/assests/coins/Pairs3.png";
import coin5 from "../../../../public/assests/coins/Pairs4.png";
import coin6 from "../../../../public/assests/coins/Pairs5.png";
const shortenHash = (hash: any, startLength = 6, endLength = 4) => {
  return `${hash.substring(0, startLength)}...${hash.substring(
    hash.length - endLength
  )}`;
};
const coins = [
  { img: coin2, name: "GUST-GATO", amount: "$271million" },
  { img: coin, name: "DIVI-Dock", amount: "$271million" },
  { img: coin3, name: "USDT_MLN", amount: "$271million" },
  { img: coin4, name: "DAI-CUBE", amount: "$271million" },
  { img: coin5, name: "LTC-BUSD", amount: "$271million" },
  { img: coin1, name: "BTC-FLOW", amount: "$271million" },
  { img: coin, name: "DIVI-Dock", amount: "$271million" },
  { img: coin6, name: "BNB-ETH", amount: "$271million" },
];
const History = () => {
  const [transaction, setTransaction] = useState([]);
  const { address, isConnected, isConnecting, isDisconnected } = useAccount();
  const fetchTransaction = useCallback(() => {
    axios
      .get(
        `https://api-testnet.polygonscan.com/api?module=account&action=tokentx&contractaddress=0xC9AD4900cBcF82992cb0286E7EE22ff0D206b8f4&address=${address}&page=1&offset=5&sort=asc&apikey=ABRAE747ZTSBSPUH8C4PANQ32QTEZDUPMJ`
      )
      .then(function (response) {
        console.log(response, "Transaction res");
        setTransaction(response.data.result);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    fetchTransaction();
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
      className={`flex ${
        isMobile ? "w-[90%]" : "w-[70%]"
      } flex-col items-center justify-center p-5 h-[400px] border-purple-500 border realtive ${
        isMobile && "rounded-[20px]"
      }`}
      style={{
        background: `rgba(0, 0, 0, 0.2)`,
        backdropFilter: `blur(75px)`,
      }}
    >
      <Link href={"/profile"}>
        {" "}
        <Image
          alt="cross"
          src={cross}
          className={"absolute right-5 cursor-pointer top-5"}
          height={15}
          width={15}
        />
      </Link>
      {isConnected ? (
        <h1 className={`font-meul text-white  ${isMobile && "text-xs"}`}>
          YOUR TRANSACTION ARE THERE
        </h1>
      ) : (
        <h1 className={`font-meul text-white  ${isMobile && "text-xs"}`}>
          CONNECT YOUR WALLET FIRST
        </h1>
      )}
      {transaction.map((item: any) => {
        return (
          <>
            <div className="flex w-[90%] items-center justify-between p-2">
              <div className="flex items-center ">
                <Image
                  alt="coin2"
                  src={coin}
                  className={""}
                  height={30}
                  width={30}
                />
                <h1 className="flex items-center  font-monl ml-2 text-white">
                  {item.tokenName}
                </h1>
              </div>
              <h1 className=" font-monl text-white ">
                {shortenHash(item?.hash)}
              </h1>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default History;

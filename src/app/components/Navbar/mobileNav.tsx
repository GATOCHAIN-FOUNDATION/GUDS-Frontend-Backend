"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../../public/assests/logo/logoMobile.png";
import WalletBtn from "../../../../public/assests/buttons/walletButton.png";
import WalletBtn1 from "../../../../public/assests/icons/wcw.png";
import Link from "next/link";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useConnect } from "wagmi";
const MobileNav = () => {
  const { open, close } = useWeb3Modal();
  const { connector: activeConnector, isConnected } = useAccount();
  return (
    <>
      <div className="flex flex-col justify-center  items-center gap-4 h-[128px] rounded-[30px] p-4 bg-[#000000] bg-opacity-25 backdrop-blur-[40px] shadow-md w-[99%]">
        <div className="flex justify-center items-center relative gap-10 w-full -mt-8">
          <Link href="/nftconnect/buy">
            {" "}
            <button className="flex justify-center items-center h-[24px] w-[103px] bg-[#C3F847] rounded-[20px] text-[12px] font-meul uppercase">
              buy guds
            </button>{" "}
          </Link>
          <div className="h-[60.15px] z-20 w-[67.6px] mt-[38px] mr-5">
            <Link href="/dashboard">
              {" "}
              <Image src={Logo} alt={"logo"} />
            </Link>
          </div>
          <button className="h-[30px] w-[65px]">
            {isConnected ? (
              <Image src={WalletBtn1} alt="wallet btn" onClick={() => open()} />
            ) : (
              <Image src={WalletBtn} alt="wallet btn" onClick={() => open()} />
            )}
          </button>
        </div>

        <div className="flex items-center border -mt-8 z-10 border-[#ffffff] relative px-2 rounded-[20px] w-full h-[27px]">
          <div className="font-meul italic text-[#ffffff] text-[12px] uppercase">
            gato price index
          </div>

          <div className="flex justify-center absolute right-1 w-[140px] h-[19px] text-[10px] font-meul bg-[#C3F847] rounded-[20px] items-center uppercase">
            $52.223 USD / AED
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;

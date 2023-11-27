import React from "react";
import Image from "next/image";
import button1 from "../../../../public/assests/dashboard/button1.png";
import button2 from "../../../../public/assests/dashboard/button2.png";
import card1 from "../../../../public/assests/dashboard/card1.png";
import card2 from "../../../../public/assests/dashboard/card2.png";
import card3 from "../../../../public/assests/dashboard/card3.png";
import profile from "../../../../public/assests/background_images/profile2.png";
import diamond from "../../../../public/assests/logo/Diamonds2.png";
import logo from "../../../../public/assests/dashboard/logo.png";
import walletconnect from "../../../../public/assests/dashboard/walletconnectButton.png";
import icon1 from "../../../../public/assests/dashboard/icon1.png";
import gem from "../../../../public/assests/dashboard/gem.png";
import Gudsbuy from "../../../../public/assests/dashboard/gudsBuy.png";
import profileIcon from "../../../../public/assests/icons/footerIcons/profile.png";
import buybutton from "../../../../public/assests/icons/menu.png";
import Link from "next/link";
import { useWeb3Modal } from "@web3modal/react";
import { useRouter, redirect } from "next/navigation";
import { useAccount, useConnect } from "wagmi";
import ProcessRadioBtn from "@/utils/ProcessRadioBtn";
import SwapNFTSlider from "@/utils/SwapNFTSlider";
import BuyGudsBtn from "@/utils/BuyGudsBtn";
import { LoginSignupBtn } from "@/utils/LoginSignupBtn";
import stakeCardImage from "../../../../public/assests/cards/stakeCardMob.png";

const DashboardMobileCard = () => {
  const { open, close } = useWeb3Modal();

  const { connector: activeConnector, isConnected } = useAccount();

  const btnContent = [
    { btnImage: button1, heading: "Offers", to: "/staking" },
    {
      btnImage: button2,
      heading: "Docs",
      to: "https://foundationblockchain.gitbook.io/gusd-protocol/",
    },
    { btnImage: buybutton, heading: "Fast Buy", to: "/nftconnect/buy" },
    { btnImage: button1, heading: "Stake", to: "/nftconnect/swap" },
  ];
  const router = useRouter();
  const navigateToGitbook = () => {
    router.replace("https://foundationblockchain.gitbook.io/gusd-protocol");
  };
  return (
    <div className="flex flex-col gap-3 p-3 items-center justify-center   w-[100%] h-auto">
      <div className="flex  items-center justify-center text-white">
        <div className="flex items-center flex-col justify-center">
          <Link href={"/staking"}>
            <Image
              alt={""}
              src={button1}
              className={"mx-2 cursor-pointer"}
              height={60}
              width={60}
            />
          </Link>
          <h1>Offers</h1>
        </div>

        <div className="flex items-center flex-col justify-center">
          <a
            href="https://foundationblockchain.gitbook.io/gusd-protocol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt={""}
              src={button2}
              className={"mx-2 cursor-pointer"}
              height={60}
              width={60}
            />
          </a>
          <h1>Docs</h1>
        </div>

        <div className="flex items-center flex-col justify-center">
          <Link href={"/nftconnect/buy"}>
            <Image
              alt={""}
              src={buybutton}
              className={"mx-2 cursor-pointer"}
              height={60}
              width={60}
            />
          </Link>
          <h1>Fast Buy</h1>
        </div>

        <div className="flex items-center flex-col justify-center">
          <Link href={"/nftconnect/swap"}>
            <Image
              alt={""}
              src={button1}
              className={"mx-2 cursor-pointer"}
              height={60}
              width={60}
            />
          </Link>
          <h1>Stake</h1>
        </div>
      </div>
      <div className="pb-10">
        <Link href="/swappingoffer">
          {" "}
          <SwapNFTSlider />
        </Link>
      </div>
      <div className="flex gap-1">
        <div className="w-1/2">
          <Link href="/staking">
            {" "}
            <Image
              src={stakeCardImage}
              alt={"stake card"}
              className="w-[200px] aspect-auto"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-12 w-1/2">
          <div className="relative h-[200px]">
            <Image src={diamond} alt="diamond" className="w-[150px]" />
            <div className="absolute top-[40%] right-0">
              <BuyGudsBtn url={"/nftconnect/swap"} />
            </div>
          </div>
          <div>
            <LoginSignupBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMobileCard;

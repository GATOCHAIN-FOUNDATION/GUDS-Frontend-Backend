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
import walletconnect1 from "../../../../public/assests/icons/wcw.png";
import icon1 from "../../../../public/assests/dashboard/icon1.png";
import gem from "../../../../public/assests/dashboard/gem.png";
import Gudsbuy from "../../../../public/assests/dashboard/gudsBuy.png";
import AddIcon from "../../../../public/assests/logo/Add.png";
import profileIcon from "../../../../public/assests/icons/footerIcons/profile.png";
import buybutton from "../../../../public/assests/icons/menu.png";
import Link from "next/link";
import { useWeb3Modal } from "@web3modal/react";
import { LoginSignupBtn } from "@/utils/LoginSignupBtn";
import { useAccount, useConnect } from "wagmi";
import ProcessRadioBtn from "@/utils/ProcessRadioBtn";
import SwapNFTSlider from "@/utils/SwapNFTSlider";
import BuyGudsBtn from "@/utils/BuyGudsBtn";
import { useRouter, redirect } from "next/navigation";

const DashboardCard = () => {
  const { open, close } = useWeb3Modal();

  const { connector: activeConnector, isConnected } = useAccount();
  const router = useRouter();

  const btnContent = [
    { btnImage: button1, heading: "Offers", to: "/staking" },
    {
      btnImage: button2,
      heading: "Docs",
      to: "https://foundationblockchain.gitbook.io/gusd-protocol",
    },
    { btnImage: buybutton, heading: "Fast Buy", to: "/nftconnect/buy" },
    { btnImage: button1, heading: "Stake", to: "/nftconnect/swap" },
  ];

  const handleRoutes = (route: string) => {
    router.push(route);
  };
  const navigateToGitbook = () => {
    router.replace("https://foundationblockchain.gitbook.io/gusd-protocol");
  };

  return (
    <div className="flex items-center justify-center tablet:items-start w-[100%] h-full overflow-auto scrollbar scrollbar-thumb-blue-600 scrollbar-thumb-rounded ">
      <div className="flex w-[71%] h-[100%] tablet:flex-col tablet:w-[50%]">
        <div className="flex flex-col items-center justify-between gap-10  w-[50%] tablet:w-[100%] h-[100%] tablet:h-auto">
          <div className="flex  items-center justify-center text-white">
            <div className="flex items-center flex-col justify-center">
              <Link href={"/staking"}>
                <Image
                  alt={""}
                  src={button1}
                  className={"mx-2"}
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
                  className={"mx-2"}
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
                  className={"mx-2"}
                  height={60}
                  width={60}
                />
              </Link>
              <h1>Stake</h1>
            </div>
          </div>
          <div className="flex  items-center justify-center  w-[98%]">
            <Image
              alt={""}
              src={card1}
              className={"mx-2"}
              height={70}
              width={317}
            />
          </div>
          <div className="flex items-center justify-center  w-[98%]">
            <Link href="/swappingoffer">
              {" "}
              <SwapNFTSlider />{" "}
            </Link>
          </div>
          <div className="flex  items-center justify-center  w-[98%]">
            <Link href="/staking">
              {" "}
              <Image
                alt={""}
                src={card2}
                className={"mx-2 cursor-pointer"}
                height={203}
                width={315}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-10 py-5 px-2 w-[50%] tablet:w-[100%] h-full tablet:h-auto">
          <div className="flex flex-col items-start justify-between relative  w-[320px] rounded-[20px] bg-[#000000] bg-opacity-20 backdrop-blur-2xl shadow-md h-[230px] px-6 py-6">
            <div className="flex items-center justify-center">
              <h1 className="text-3xl font-meb text-white ">
                GU<span className="font-meul">D</span>S
              </h1>{" "}
              <h1 className=" text-white font-meul mt-2 ml-2 text-xs">
                balance
              </h1>
            </div>

            <div className="flex items-center justify-center">
              <h1 className="text-3xl font-meul  text-white">0.0000.0</h1>
            </div>
            <div className="absolute right-[-100px] top-[40%]">
              <BuyGudsBtn url="/nftconnect/buy" />
            </div>
          </div>
          <div className="flex items-center justify-start  w-[98%]">
            <div className="w-[500px] flex items-center justify-center border p-1 rounded-[50px] mt-8">
              <h1 className="w-[40%] font-meul text-white text-xs text-center">
                GATO PRICE INDEX
              </h1>
              <div className="w-[60%] border font-meul text-black rounded-[50px] text-xs text-center p-1 bg-[#C3F847]">
                $52.223 USD /AED
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between  w-[100%]">
            <div className="w-[25%] flex flex-col justify-between bg-[#000000] bg-opacity-20 backdrop-blur-2xl shadow-md rounded-[20px] h-[200px] p-3 font-meul text-white text-2xl">
              <div className="w-[100%]">
                <h1>PRE</h1>
                <h1>ORD</h1>
                <h1>ER</h1>
              </div>
              <div className="flex w-[100%] items-center justify-end">
                <Image
                  alt={""}
                  src={AddIcon}
                  className={"mx-2 cursor-pointer"}
                  height={60}
                  width={60}
                />
              </div>
            </div>{" "}
            <div className=" flex flex-col w-[70%] rounded-[20px] bg-[#000000] bg-opacity-20 backdrop-blur-2xl h-[200px] shadow-md p-3 font-meul text-white text-2xl ">
              <h1>Contract</h1>
              <h1>details</h1>{" "}
            </div>
          </div>

          <ProcessRadioBtn />
          <div className="flex items-center justify-between  w-[100%]">
            <div className="flex rounded-[20px]  items-center justify-center w-[50%] bg-[#000000] bg-opacity-20 backdrop-blur-2xl shadow-md p-2 ">
              <Image alt={""} src={gem} className={""} height={70} width={70} />
              <h1 className="font-meul text-white text-xs">
                Invite & Earn
              </h1>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center tablet:items-start justify-between gap-10 w-[28%] tablet:w-[50%] tablet:m-4 h-[100%]">
        <div className="flex items-center justify-end tablet:justify-start w-[98%]">
          <div className="flex w-[10%]"></div>
          <Link href="/profile">
            {" "}
            <Image
              alt={""}
              src={profile}
              className={"  ml-[80px] mt-[-30px]"}
              height={153}
              width={260}
            />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-end   w-[98%] cursor-pointer ">
          {isConnected ? (
            <Image
              alt={""}
              src={walletconnect1}
              className={"m-1 cursor-pointer"}
              height={80}
              width={106}
              onClick={() => open()}
            />
          ) : (
            <Image
              alt={""}
              src={walletconnect}
              className={"m-1 cursor-pointer"}
              height={80}
              width={106}
              onClick={() => open()}
            />
          )}
          <LoginSignupBtn />
        </div>
        <div className="flex items-center justify-end  w-[98%]">
          <Image
            alt={""}
            src={logo}
            className={"m-2 mr-4"}
            height={60}
            width={60}
          />
        </div>
        <div className="flex items-center justify-start  w-[98%]">
          <Image
            alt={""}
            src={diamond}
            className={"mx-2 mt-[-60px] w-[170px] aspect-auto"}
          />
        </div>

        <div className="flex flex-col items-center justify-start  w-[98%] py-5 rounded-[20px] m-2 text-xs font-dmsans text-white bg-[#000000] bg-opacity-20 backdrop-blur-2xl shadow-md ">
          <div className="flex items-center justify-between  w-[90%] mx-3">
            <h1>HISTORY</h1>
            <Link href="/profile/history">
              {" "}
              <h1 className="text-blue-400 cursor-pointer">See All</h1>
            </Link>
          </div>
          <br />
          <div className="flex items-center justify-between  w-[90%] m-1">
            <div className="flex items-center justify-center">
              {" "}
              <Image
                alt={""}
                src={icon1}
                className={"m-1"}
                height={18}
                width={18}
              />{" "}
              <h1>Akhirnya Joko bayar</h1>
            </div>
            <h1 className="text-blue-400">+0.025</h1>
            <h1>08/26/2018</h1>
          </div>
          <div className="flex items-center justify-between  w-[90%] m-1">
            <div className="flex items-center justify-center">
              {" "}
              <Image
                alt={""}
                src={icon1}
                className={"m-1"}
                height={18}
                width={18}
              />{" "}
              <h1>Cicilan mobil</h1>
            </div>
            <h1 className="text-red-400">-5.23%</h1>
            <h1>08/26/2018</h1>
          </div>
          <div className="flex items-center justify-between  w-[90%] m-1">
            <div className="flex items-center justify-center">
              {" "}
              <Image
                alt={""}
                src={icon1}
                className={"m-1"}
                height={18}
                width={18}
              />{" "}
              <h1>Langganan odobe CCl</h1>
            </div>
            <h1 className="text-red-400">-5.23%</h1>
            <h1>08/26/2018</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;

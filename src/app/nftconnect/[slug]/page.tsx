"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import backgroundImage from "../../../../public/assests/background_images/background2.jpg";
import Logo2 from "../../../../public/assests/logo/logo2.png";
import Wallet from "../../../../public/assests/icons/Wallet.png";
import Transaction from "../../../../public/assests/icons/Transaction.png";
import History from "../../../../public/assests/icons/History.png";
import Rocket from "../../../../public/assests/logo/Rocketship.png";
import WalletConnect from "../../../../public/assests/icons/WalletConnect.png";
import WalletConnect1 from "../../../../public/assests/icons/wcw.png";
import catprofile from "../../../../public/assests/background_images/profile2.png";
import ELMAS from "../../../../public/assests/icons/ELMAS.png";
import NotifyBadge from "../../../../public/assests/icons/NotifyBadge.png";
import Profile from "../../../../public/assests/icons/footerIcons/profile.png";
import SloganText from "../../../../public/assests/icons/gudsSlogan.png";
import { useWeb3Modal } from "@web3modal/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { redirect, useRouter, useParams } from "next/navigation";
import { useAccount, useConnect } from "wagmi";

const FastBuyCard = dynamic(
  () => import("../../components/FastBuy/FastBuyCard")
);
const Footer = dynamic(() => import("../../components/Footer/Footer"));
const OvalTextButton = dynamic(() => import("@/utils/OvalTextButton"));
const IconBtn = dynamic(() => import("@/utils/IconBtn"));
const SwapCard = dynamic(() => import("../../components/Cards/SwapCard"));
const Search = dynamic(() => import("../../components/Search/Search"));
import { isTablet } from "../../../utils/Resize";
import { StakingPlan } from "@/app/components/Cards/StakingPlan";
import { StackingPlanConfirmationDialog } from "@/app/components/Cards/StackingPlanConfirmationDialog";
import { DigitalContractConfirmation } from "@/app/components/Cards/DigitalContractConfirmation";
import { StakingProgram } from "@/app/components/StakingProgram/StakingProgram";
import { WalletProgress } from "@/app/components/Cards/WalletProgress";
import { CardDetails } from "@/app/components/Cards/CardDetails";
import { OrderProcessing } from "@/app/components/Cards/OrderProcessing";
const StakeCard = dynamic(() => import("../../components/Cards/StakeCard"));
const ExchangeCard = dynamic(
  () => import("../../components/Cards/ExchangeCard")
);

const NFTConnect = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });
  const { open, close } = useWeb3Modal();
  const { connector: activeConnector, isConnected } = useAccount();
  const [isMobile, setIsMobile] = useState(false);
  const [firstName, setFirstName] = useState("");
  const userEmail = session?.user?.email;

  const [isWalletProgressOpen, setIsWalletProgressOpen] = useState(true);

  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  const router = useRouter();
  const { slug } = useParams();

  console.log(userEmail);
  useEffect(() => {
    const fetchData = async () => {
      const resUserExists = await fetch("https://guds.vercel.app/api/getUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmail }),
      });
      const { user } = await resUserExists.json();
      setFirstName(user?._firstName);

      console.log("user", user);
    };
    fetchData();
  }, [userEmail]);

  const btnContent = [
    { heading: "Stake", bgColor: "rgb(255 255 255 / 0.2)", txtColor: "white" },
    { heading: "Swap", bgColor: "rgb(255 255 255 / 0.2)", txtColor: "white" },
    { heading: "Buy", bgColor: "rgb(255 255 255 / 0.2)", txtColor: "white" },
    { heading: "Pools", bgColor: "rgb(255 255 255 / 0.2)", txtColor: "white" },
  ];

  const [cardFlag, setCardFlag] = useState(slug);

  useEffect(() => {
    if (slug !== cardFlag) {
      setCardFlag(slug);
    }
  }, [slug]);

  const handleFloatingBtn = (heading: string) => {
    let type = heading.toLowerCase();
    setCardFlag(type);
    console.log(type, "Heading Type");
    if (type === "pools") {
      const newUrl = `/${type}`;
      router.push(newUrl);
    } else {
      const newUrl = `/nftconnect/${type}`;
      router.push(newUrl);
    }
  };

  const iconBtnContent = [
    {
      altHeading: "Rocket",
      image: Rocket,
      heading: "WHY ?",
      link: "https://foundationblockchain.gitbook.io/gusd-protocol/",
    },
    {
      altHeading: "History",
      image: History,
      heading: "History",
      link: "/profile/history",
    },
    {
      altHeading: "Exchange",
      image: Transaction,
      heading: "Exchange",
      link: "/nftconnect/exchange",
    },
    { altHeading: "Wallet", image: Wallet, heading: "Wallet", link: "" },
    {
      altHeading: "Profile",
      image: Profile,
      heading: "Profile",
      link: "/profile",
    },
  ];

  useEffect(() => {
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

  useEffect(() => {
    console.log(isConnected, "Wallet LOAADINGG.. ");
    if (isConnected && isWalletProgressOpen) {
      // Close WalletProgress after 7 seconds
      const timeoutId = setTimeout(() => {
        setIsWalletProgressOpen(false);
      }, 3000);

      // Clean up the timeout when the component unmounts or isConnected changes
      return () => clearTimeout(timeoutId);
    }
  }, [isConnected, isWalletProgressOpen]);

  const handleWalletProgress = () => {
    setIsWalletProgressOpen(false);
  };

  return (
    <>
      <div className="relative flex w-[100%] m-0 items-center justify-center bg-cover min-h-[100vh] z-[10] p-10 max-h-full">
        <div className="absolute inset-0 w-full min-h-[100vh] max-h-full">
          <Image
            src={backgroundImage}
            alt="Background"
            style={{
              zIndex: -2,
            }}
            className="w-full {isMobile ? h-full :min-h-[100vh]} max-h-full bg-cover"
          />
        </div>
        <div className="absolute inset-0 w-full min-h-[100vh] max-h-full backdrop-blur-[20px] z-[10]"></div>

        {isTablet() ? null : (
          <div
            className="absolute left-0 top-0 flex flex-col w-[355px] z-[20] items-center justify-between  h-full rounded-3xl "
            style={{
              background: `rgba(255, 255, 255, 0.06)`,
              backdropFilter: `blur(45px)`,
            }}
          >
            <div className="flex flex-col w-[100%] items-center justify-start ">
              <br />
              <div className="w-[90%] flex items-center justify-center border p-1 rounded-[50px]">
                <h1 className="w-[40%] font-meul text-white text-xs text-center">
                  PRICE INDEX
                </h1>
                <div className="w-[60%] border font-meul text-black rounded-[50px] text-xs text-center p-1 bg-[#C3F847]">
                  $52.223 USD /AED
                </div>
              </div>
              <br />
              <br />
              <Link href="/dashboard">
                {" "}
                <Image
                  alt="Logo2"
                  src={Logo2}
                  className={"cursor-pointer"}
                  height={95}
                  width={107}
                />
              </Link>
              <br />
              <br />
              <br />
              <div className="flex justify-start">
                <Image
                  src={SloganText}
                  alt={"slogan text"}
                  className="w-[324px] h-[114px]"
                />
              </div>
            </div>
            <div className="flex justify-start w-full">
              <Footer />
            </div>
          </div>
        )}

        {cardFlag === "swap" ? (
          <SwapCard />
        ) : cardFlag === "exchange" ? (
          <ExchangeCard />
        ) : cardFlag === "stake" ? (
          <StakeCard />
        ) : cardFlag === "buy" ? (
          <FastBuyCard />
        ) : (
          // <CardDetails />
          // <OrderProcessing />
          ""
        )}

        {isTablet() ? null : (
          <>
            <div className="flex absolute bottom-5 right-[20%] z-[20] flex-col items-end justify-center mb-3 text-xl italic  w-[100%] text-white/20">
              <h1 className="font-meul">Your Personal</h1>
              <h1 className="font-meb">DiamondDeFi</h1>
              <h1 className="font-mer ">Intelligence</h1>
            </div>

            <div className="flex gap-4 z-[20] absolute right-0 h-full">
              <div className=" flex flex-col w-auto items-center justify-start min-h-[100vh]  max-h-full z-[20]">
                <div className="flex items-center gap-4">
                  <div>
                    <Search />
                  </div>

                  <div className="flex items-center justify-center  w-[100%]">
                    <Image
                      alt="catprofile"
                      src={catprofile}
                      className={""}
                      height={200}
                      width={200}
                    />
                    <div className="flex flex-col items-start justify-start  font-dmsans ">
                      <h1 className="text-white text-sm">
                        {`Hi`} {firstName}
                      </h1>
                      <div className="flex items-center justify-between mt-3"></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end z-[20] items-center gap-10">
                  <div className="  flex flex-col gap-6 w-[126px] mr-[20%]">
                    <div className="flex flex-col items-center justify-between h-full">
                      <div className="flex flex-col gap-4  items-end justify-end w-[100%]">
                        {btnContent.map((item, index) => {
                          return (
                            <div
                              className="w-[100%]"
                              key={index}
                              onClick={() => handleFloatingBtn(item.heading)}
                            >
                              <OvalTextButton
                                heading={item.heading}
                                backgroundCol={
                                  cardFlag === item.heading.toLowerCase()
                                    ? " #C3F847"
                                    : item.bgColor
                                }
                                textColor={
                                  cardFlag === item.heading.toLowerCase()
                                    ? "black"
                                    : item.txtColor
                                }
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start w-[230px] justify-end font-meul text-lg text-white ">
                    {iconBtnContent.map((item) => {
                      return (
                        <>
                          <Link
                            href={item.link}
                            onClick={() => {
                              item.heading === "Wallet"
                                ? open()
                                : handleFloatingBtn(item.heading);
                            }}
                          >
                            <IconBtn
                              image={item.image}
                              heading={item.heading}
                              altHeading={item.altHeading}
                            />
                          </Link>
                          <br />
                        </>
                      );
                    })}
                    <br />
                    {isConnected ? (
                      <Image
                        alt="WalletConnect"
                        src={WalletConnect1}
                        className={" mr-2 cursor-pointer"}
                        height={48}
                        width={106}
                        onClick={() => open()}
                      />
                    ) : (
                      <Image
                        alt="WalletConnect"
                        src={WalletConnect}
                        className={" mr-2 cursor-pointer"}
                        height={48}
                        width={106}
                        onClick={() => open()}
                      />
                    )}
                  </div>
                </div>
                <br />
              </div>
            </div>
            <div className="text-[#C3F847] absolute bottom-5 right-7 z-[20] text-xs font-mel italic ">
              SUSTAIN / SCALE / SECURE
            </div>
          </>
        )}
        {/* {isWalletProgressOpen && (
          <div className="absolute w-full h-full flex justify-center items-center z-[999]">
            {isLoading ? (
              <WalletProgress
                status={"connecting"}
                handleReconnect={() => {}}
                onClose={() => handleWalletProgress()}
              />
            ) : isConnected ? (
              <WalletProgress
                status={"success"}
                handleReconnect={() => {}}
                onClose={() => handleWalletProgress()}
              />
            ) : (
              error && (
                <WalletProgress
                  status={"failed"}
                  handleReconnect={() => open()}
                  onClose={() => handleWalletProgress()}
                />
              )
            )}
          </div>
        )} */}
      </div>{" "}
    </>
  );
};

export default NFTConnect;

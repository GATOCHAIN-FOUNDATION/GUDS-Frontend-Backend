"use client";
import React from "react";
import { useState } from "react";
import USDT from "../../../../public/assests/logo/tether.png";
import Image from "next/image";
import Logo3 from "../../../../public/assests/logo/logo3.png";
import CoinsDropdown from "@/utils/CoinsDropdown";
import { useWidth } from "@/utils/Resize";
import Footer from "../Footer/Footer";
import MobileNav from "../Navbar/mobileNav";
import { useBalance } from "wagmi";
import Link from "next/link";
const FastBuyCard = () => {
  const [balance1, setBalance1] = useState("0");
  const [balance2, setBalance2] = useState("0");
  const [option, SetOption] = useState(true);
  const { data, isError, isLoading } = useBalance({
    address: "0x4536b462d0ca9449cDfd5C3E766fd0bd6976db5B",
    token: "0xC9AD4900cBcF82992cb0286E7EE22ff0D206b8f4",
    formatUnits: "gwei",
    watch: true,
  });

  return (
    <div className="flex items-center z-[20] justify-center flex-col">
      {" "}
      {useWidth() ? <MobileNav /> : null}
      <div className=" z-[100] flex flex-col items-center rounded-bl-[20px] rounded-tr-[20px] rounded-br-[0px] rounded-tl-[20px] justify-start w-[345px] h-[569px]   bg-black/20 backdrop-blur-20 rounded-3xl  relative">
        <div className="w-[40%] flex items-center justify-center"> </div>
        <div className="flex flex-col items-center justify-between py-3 w-[92%] bg-black/30 backdrop-blur-75  rounded-[20px] mt-[35px] h-[235px]">
          <h1 className="flex text-white text-[20px] font-meb">
            GU<span className="font-meul">D</span>S BALANCE
          </h1>
          <h1 className="flex text-white text-[20px] font-meb">
            {data?.formatted} {data?.symbol}{" "}
          </h1>
          <input
            className="bg-transparent w-[90%] outline-none text-[60px] italic text-[#C3F847] font-meul "
            value={Number(balance2) * 2}
            inputMode="numeric"
          />
        </div>

        <div className="flex w-[90%] justify-start items-center   rounded-[20px] font-meul italic font-thin text-white/90 text-[10px] my-2 ">
          Enter how much guds do you want{" "}
        </div>
        <div className="flex w-[90%] justify-start items-start my-2">
          <div className="flex w-[100%] items-center justify-start rounded-[20px]  font-meb p-2 text-3xl italic  text-white/50 ">
            FAST BUY
          </div>
        </div>
        <div className=" mt-[30px] flex w-[90%] items-center justify-start  ">
          <h1 className="flex text-white/80 font-meul text-[10px] italic ">
            Enter the amount and currency
          </h1>
        </div>
        <div className="flex flex-col items-start justify-between p-4 w-[90%] bg-black/20 backdrop-blur-75  mt-1 rounded-[20px]  h-[100px]">
          <input
            className="bg-transparent w-[90%] outline-none text-xl text-[#C3F847] font-meul italic "
            value={balance2}
            onChange={(e) => {
              const inputValue = e.target.value.replace(/[^0-9]/g, "");
              setBalance2(inputValue);
            }}
          />
          <div className="flex w-[98%] items-center justify-end font-dmsans text-white">
            <CoinsDropdown />
          </div>
        </div>

        <div className="flex items-center justify-end z-0  w-[100%]">
          <div className="w-[200px] h-[60px] bottom-0 rounded-bl-[20px] rounded-br-[20px]  absolute mb-[-60px]  origin-center flex items-center justify-start">
            <div className="border-r-[30px]  border   w-[60px] h-[60px] flex items-center justify-end border-l-[30px] border-b-[30px] border-t-[30px] border-l-transparent border-r-black/20 border-b-transparent border-t-black/20 "></div>
            <div className="bg-black/20 backdrop-blur-20 w-[140px] h-[60px] rounded-br-[20px]">
              {" "}
              <Link href={`/checkout/buy/${balance2}`}>
                {" "}
                <div className="px-4 py-1 z-0 bg-[#C3F847] rounded-[50px] font-meul mt-[-12px] flex items-center justify-between w-[95%] ">
                  {" "}
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADTUlEQVR4nO2aTU8UQRCGHwPCGoy4Cyse5Wgw6p9QQVGBG4o3DV5EsnpVOaMnExJ+h4YQNGpI1IgfqBcVgZPKwYg3FwiaMRXfSTpxv3d2ZpbwJp0sVE9113R1dfVbA9vYukgBfcBtYAr4BPwENtTs90fJrM9ZIElMkAAuAA+AP4BXZvsNzABDQHMUBuwCrgErzqTWgcfADa3MQb3xnWpJ/c9kN4EnesZ//huQ0csJBaeAZWcCr4CLQGsFuvYCl4DXjr4loIcawt7UpDPgG+B4gPq7gbeO/olarM5+TdwG+AVcARqCHoR/Oq8CWWe1O4JS3qnl9hR1DlF7HAYWNOai5lAV0o7Cl0A74SEJPNXYy/KKipBw3Ok50EL4aAFeOG5W0Z6ZdNzJDruo0OZ4hQWAskOsv7HD2BOl7Jms5mTRreTDzj8nLDpVCz+cVotRZ/OX5GLXnXOiIUaGNALvpMuMKohmpQrW+RjBIChDDCela6XYqgw5EYIYGrLDiaTnCnV8qE6WO8XREMOw9E2TByml1esVJoBhGZLU/WYz3zz7NeAjgkXQhhhmpfM0OXBHQrtPxN2QMekczyWckvBMHRjSL533cgk/S2i3uLgb0iWdxgv8h1UJU3VgSLt0fs8l3JCwqYzJ1aqVcnD7PMHWNWS1jlwrXci1tsxmn5LQGMC4GzJQKPz6B6KRZ3V9IPZJaGxhvaQovfmSMT9pNAYwroaknKRxT75OMxrUaMy4GnJZ+mxP58V5dTIuNq4Xq3npGyx20HxVxxMxNKRXur6UUobIqPN8DMmH99I1UsoDCYfrNUI5LoZkpGehnKJQjx7KihyLGkeBNc2p7FLGhPMGjLaMCmmRcjaXu5UoSIgW8kQkR0Fi7wbmNIe5auqMaSVmflnB/g4LKeCZxl4KouDT6SytudkRwtkTixrTsvIDQSnucNwsK+7VwmHQaFR0WnPcaV/QgyScAOCJUO4J8MS2UoZ/Tvgbu6a1925n2T1xscMVfsWQUu7kpx2eXCnIanHR1Rl10hlPGaml17fEO3UpbDeptaloNKA+sw5P4KcdI1F9AdEsVnxaV4BySYZNZbGDURmQC63iYu3Wdl+1xx/ORzX2+4Oup+Pqm/c+sQ3qHH8BO95tuSa+KVIAAAAASUVORK5CYII="></img>
                  Buy
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      {useWidth() ? <Footer /> : null}
    </div>
  );
};

export default FastBuyCard;

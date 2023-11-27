"use client";
import { useCallback, useEffect } from "react";
import Swal from "sweetalert2";
import Link from "next/link";
import MobileNav from "../../components/Navbar/mobileNav";
import Footer from "../Footer/Footer";
import { useRouter } from "next/navigation";
import { useWeb3Modal } from "@web3modal/react";
import { useWidth } from "../../../utils/Resize";
import { useAccount, useConnect } from "wagmi";
import { useState } from "react";
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
import { AnyCnameRecord } from "dns";
// import "dotenv/config";
import CoinsDropdown from "@/utils/CoinsDropdown";

import axios from "axios";

const SwapCard = () => {
  const [inputText, setInputText] = useState("");
  const router = useRouter();
  const [amount, setAmount] = useState(0);
  const [amountk, setAmountk] = useState("0");
  const [selectedOption, setSelectedOption] = useState("12");
  const [showNFT, setShowNFT] = useState("");
  const [loading, setLoading] = useState(false);
  const [metadata, setMetaData] = useState("");

  // Function to handle the change in the selected option
  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
    setInputText(`swap?amount={event.target.value}`);
  };
  // const handleEncrypt = () => {
  //   const ciphertext = CryptoJS.AES.encrypt(inputText, secretKey).toString();
  //   router.replace(`/checkout/${encodeURIComponent(ciphertext)}`);
  // };

  const { connector: activeConnector, isConnected } = useAccount();
  const { open, close } = useWeb3Modal();
  const { data: useContractWriteData, write } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "swap",
    args: [amount, metadata],
    chainId: 80001,
    onError(error: any) {
      console.log("Error", error);
    },
    onSuccess(data) {
      console.log("Success", data);
      Swal.fire({
        title: "Swapping Done Successfully",
        html: '<a href="https://testnets.opensea.io/collection/guds" className="font-meul">https://testnets.opensea.io/collection/guds</a> ',
        icon: "success",
        width: 400,
        showConfirmButton: false,
        color: "rgba(195, 248, 71, 0.8)",
        background: "rgba(12, 12, 12,1)",
      });
    },
  });

  const fetchNFT = useCallback(() => {
    setLoading(true);

    axios
      .get(
        `https://ipfs.io/ipfs/${
          selectedOption === "12"
            ? "QmWqNS7o57zKUVyvkQhwnoWmmy8AFZnxS9efMEPMPK5FgJ"
            : selectedOption === "15"
            ? "Qmb5oHrqVxAtotAYu7H9Vzzu8uNTbagky2xNUuadNSWUu7"
            : selectedOption === "18"
            ? "QmVvaUHXSoPuXfmwLHpyUnFTjJ4gw79GXHCZPRyFmzoA7E"
            : selectedOption === "20" &&
              "Qme8s7U6KtxSgR4FQgENNmqfknZgDwBtX1KgquMj5594Fn"
        }`
      )
      .then(function (response) {
        console.log(response, "NFT res");
        setShowNFT(response.data.image);
        setAmount(response.data.price);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setLoading(false);
        // always executed
      });
  }, [selectedOption]);

  useEffect(() => {
    fetchNFT();
    setMetaData(
      `${
        selectedOption === "12"
          ? "QmWqNS7o57zKUVyvkQhwnoWmmy8AFZnxS9efMEPMPK5FgJ"
          : selectedOption === "15"
          ? "Qmb5oHrqVxAtotAYu7H9Vzzu8uNTbagky2xNUuadNSWUu7"
          : selectedOption === "18"
          ? "QmVvaUHXSoPuXfmwLHpyUnFTjJ4gw79GXHCZPRyFmzoA7E"
          : selectedOption === "20" &&
            "Qme8s7U6KtxSgR4FQgENNmqfknZgDwBtX1KgquMj5594Fn"
      }`
    );

    if (amount === 100000) {
      setAmountk("100K");
    } else if (amount === 10000) {
      setAmountk("10K");
    } else if (amount === 50000) setAmountk("50K");
    else setAmountk("5K");
  }, [selectedOption, amount]);

  useEffect(() => {
    console.log("__________________________");
    console.log("useContractWriteData:", useContractWriteData);
    console.log("__________________________");
  }, [useContractWriteData]);

  const selectNftSwapPer = ["12", "15", "18", "20"];

  return (
    <div
      className={` flex flex-col w-[350px]  ${
        useWidth() ? "items-between" : "items-center"
      } justify-end z-[20]  h-[100%]`}
    >
      {useWidth() ? <MobileNav /> : null}
      <br />
      <div
        className="flex flex-col items-center justify-center p-3   rounded-[20px] h-[80%]"
        style={{
          background: `rgba(0, 0, 0, 0.2)`,
          backdropFilter: `blur(75px)`,
        }}
      >
        <div
          className="flex flex-col items-center justify-between w-[98%] h-[38%] rounded-2xl  "
          style={{
            background: `rgba(0, 0, 0, 0.1)`,
            backdropFilter: `blur(12px)`,
          }}
        >
          <div className="flex items-center justify-end w-[90%] font-monl text-xs text-white mt-2">
            <div className="w-[30%] flex items-center justify-center">
              <select
                value={selectedOption}
                onChange={handleSelectChange}
                className="w-4/5 bg-transparent  text-xl outline-none"
              >
                {selectNftSwapPer.map((per) => (
                  <option value={per} className="text-black">
                    {per}%
                  </option>
                ))}
              </select>
            </div>
            <div className="w-[40%] flex items-center justify-center">
              {" "}
              {/* <Image
                alt="Logo3"
                src={Logo3}
                className={"mt-[-50px]"}
                height={80}
                width={80}
              /> */}
            </div>
            <div className="z-20">
              <CoinsDropdown />
            </div>
          </div>
          <div className="flex items-center justify-center w-[90%] ">
            {" "}
            <input
              className="outline-none w-[98%] bg-transparent h-[100px] text-7xl text-[#C3F847]/20 font-meul "
              value={amountk}
              type="text"
              inputMode="numeric"
              // onChange={(e: any) => {
              //   const inputValue = e.target.value.replace(/[^0-9]/g, "");

              // }}
            />
          </div>
          <div className="flex items-center justify-end w-[90%] font-monl text-xs text-white mb-2">
            <h1>Availability: 0 USD</h1>
          </div>
        </div>
        <br />
        <div className="flex items-center justify-start w-[90%] mb-3">
          {" "}
          <h1 className="font-meb text-3xl text-slate-400 italic">SWAP</h1>
        </div>
        <div
          className="flex z-10 flex-col items-center justify-between w-[98%] h-[40%] rounded-2xl  "
          style={{
            background: `rgba(0, 0, 0, 0.1)`,
            backdropFilter: `blur(12px)`,
          }}
        >
          <div className="flex items-center justify-end w-[90%] font-monl text-xs text-white mt-2">
            <div className="z-20">{/* <CoinsDropdown /> */}</div>
          </div>
          {/* <h1 className="font-meul text-7xl text-[#C3F847]/20 p-3 "> 15000</h1> */}
          <div className="flex items-center rounded-md justify-center w-[95%] py-3 h-[100%]">
            {" "}
            {/* <input
              className="outline-none w-[98%] bg-transparent h-[100px] text-7xl text-[#C3F847]/20 font-meul "
              value={amount}
              onChange={(e: any) => setAmount(e.target.value)}
              type="text"
            /> */}
            {loading ? (
              <div className="w-[300px] h-[300px] text-[#ffffff] flex justify-center items-center text-[20px]">
                Loading...
              </div>
            ) : (
              <img
                src={showNFT}
                alt={"NFT"}
                // width={300}
                // height={300}
                className="w-[300px] h-[300px] bg-center aspect-auto rounded-[20px] border border-[#ffffff]"
              />
            )}
          </div>
          {/* <div className="flex items-center justify-end w-[90%] font-monl text-xs text-white mb-2">
            <h1>Availability: 87231 USD</h1>
          </div> */}
        </div>
        <div className="flex cursor-pointer  items-center justify-center w-[90%] bg-[#C3F847]  font-meul  h-[55px] rounded-[50px]  p-3">
          {" "}
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADTUlEQVR4nO2aTU8UQRCGHwPCGoy4Cyse5Wgw6p9QQVGBG4o3DV5EsnpVOaMnExJ+h4YQNGpI1IgfqBcVgZPKwYg3FwiaMRXfSTpxv3d2ZpbwJp0sVE9113R1dfVbA9vYukgBfcBtYAr4BPwENtTs90fJrM9ZIElMkAAuAA+AP4BXZvsNzABDQHMUBuwCrgErzqTWgcfADa3MQb3xnWpJ/c9kN4EnesZ//huQ0csJBaeAZWcCr4CLQGsFuvYCl4DXjr4loIcawt7UpDPgG+B4gPq7gbeO/olarM5+TdwG+AVcARqCHoR/Oq8CWWe1O4JS3qnl9hR1DlF7HAYWNOai5lAV0o7Cl0A74SEJPNXYy/KKipBw3Ok50EL4aAFeOG5W0Z6ZdNzJDruo0OZ4hQWAskOsv7HD2BOl7Jms5mTRreTDzj8nLDpVCz+cVotRZ/OX5GLXnXOiIUaGNALvpMuMKohmpQrW+RjBIChDDCela6XYqgw5EYIYGrLDiaTnCnV8qE6WO8XREMOw9E2TByml1esVJoBhGZLU/WYz3zz7NeAjgkXQhhhmpfM0OXBHQrtPxN2QMekczyWckvBMHRjSL533cgk/S2i3uLgb0iWdxgv8h1UJU3VgSLt0fs8l3JCwqYzJ1aqVcnD7PMHWNWS1jlwrXci1tsxmn5LQGMC4GzJQKPz6B6KRZ3V9IPZJaGxhvaQovfmSMT9pNAYwroaknKRxT75OMxrUaMy4GnJZ+mxP58V5dTIuNq4Xq3npGyx20HxVxxMxNKRXur6UUobIqPN8DMmH99I1UsoDCYfrNUI5LoZkpGehnKJQjx7KihyLGkeBNc2p7FLGhPMGjLaMCmmRcjaXu5UoSIgW8kQkR0Fi7wbmNIe5auqMaSVmflnB/g4LKeCZxl4KouDT6SytudkRwtkTixrTsvIDQSnucNwsK+7VwmHQaFR0WnPcaV/QgyScAOCJUO4J8MS2UoZ/Tvgbu6a1925n2T1xscMVfsWQUu7kpx2eXCnIanHR1Rl10hlPGaml17fEO3UpbDeptaloNKA+sw5P4KcdI1F9AdEsVnxaV4BySYZNZbGDURmQC63iYu3Wdl+1xx/ORzX2+4Oup+Pqm/c+sQ3qHH8BO95tuSa+KVIAAAAASUVORK5CYII="></img>
          {/* {isConnected ? (
            <button className="ml-2 cursor-pointer" onClick={() => write()}>
              Buy
            </button>
          ) : (
            <h1 className="ml-2 cursor-pointer" onClick={() => open()}>
              Connect Wallet
            </h1>
          )} */}{" "}
          <Link href={`/checkout/swap/${amount}/${metadata}`}>
            <button className="ml-2 cursor-pointer">Buy</button>
          </Link>
        </div>
      </div>
      <br /> <br />
      {useWidth() ? <Footer /> : null}
    </div>
  );
};

export default SwapCard;

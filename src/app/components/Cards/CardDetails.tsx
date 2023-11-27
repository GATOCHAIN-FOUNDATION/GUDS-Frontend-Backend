"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineLock } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
import cardBg from "../../../../public/assests/background_images/cardBg.png";
import Logo from "../../../../public/assests/logo/logo3.png";

const AddButton = () => {
  return (
    <button className="w-full h-[50px] flex justify-center items-center rounded-[10px] gap-2 bg-[#614AD3]">
      <div className="w-[12.5px] h-[12.5px] rounded-[30px] border border-white flex justify-center items-center text-[7px] text-white">
        <AiOutlinePlus />
      </div>
      <h3 className="text-[17px] text-white font-monl">Track Transaction</h3>
    </button>
  );
};

const ToggelButton = () => {
  return (
    <div className="mb-4">
      <input
        className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault01"
      />
    </div>
  );
};

export const CardDetails = () => {
  const [accountTitle, setAccountTitle] = useState("Gabriele Bigontina");
  const [accountNumber, setAccountNumber] = useState("TRWIBEB1XXX");
  const [iban, setIBAN] = useState("BE92 9670 2898 9323");
  const [address, setAddress] = useState(
    "Rue du Trône 100, 3rd floor Brussels 1050 Belgium"
  );
  const [walletaddress, setwalletAddress] = useState("");

  return (
    <div className="w-[350px] z-[20] relative mt-[12px] max-w-full h-auto p-4 flex flex-col justify-center items-center drop-shadow-2xl gap-10 bg-transparent rounded-[30px]">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          zIndex: -2,
        }}
      >
        <Image
          src={cardBg}
          alt="Background"
          className="w-full h-full bg-contain"
          style={{ filter: "drop-shadow(2px 2px 2px #000000)" }}
        />
      </div>

      <div className="absolute top-0 left-[40%] mt-[-20px] w-full z-20">
        <Image src={Logo} alt={""} className="w-[50px] aspect-auto" />
      </div>

      <article className="flex flex-col w-[310px] gap-5 items-start my-[20%]">
        <button className="bg-[#F5F6FA] bg-opacity-[26%] rounded-full flex justify-center items-center w-[45px] h-[45px] text-[20px] text-[#1D1E20]">
          <BsArrowLeft />
        </button>

        <article className="flex flex-col items-center justify-center gap-5 w-[310px]">
          <h1 className="text-white text-[17px] font-mer">Bank Details </h1>

          <div className="flex flex-col gap-3 w-[310px]">
            <div className="text-white">Card Number</div>
            <div className="w-full h-[34px] rounded-[15px] bg-[#000000] bg-opacity-[20%] shadow-sm flex justify-between p-2 items-center">
              <input
                className="placeholder:text-[7px] placeholder:text-[#ffffff] bg-transparent outline-none font-monl text-[10px] text-[#ffffff] w-[70%]"
                placeholder="Card Number "
                value={accountNumber}
              />
              <Image
                src={""}
                alt={""}
                className="w-[30px] aspect-auto object-contain"
              />
            </div>
            <div className="text-white">Iban Number</div>
            <div className="w-full h-[34px] rounded-[15px] bg-[#000000] bg-opacity-[20%] shadow-sm flex justify-between p-2 items-center">
              <input
                className="placeholder:text-[7px] placeholder:text-[#ffffff] bg-transparent outline-none font-monl text-[10px] text-[#ffffff] w-[70%]"
                placeholder="Iban Number "
                value={iban}
              />
              <Image
                src={""}
                alt={""}
                className="w-[30px] aspect-auto object-contain"
              />
            </div>
            <div className="text-white">Account Name</div>
            <div className="w-full h-[34px] rounded-[15px] bg-[#000000] bg-opacity-[20%] shadow-sm flex justify-between p-2 items-center">
              <input
                className="placeholder:text-[7px] placeholder:text-[#ffffff] bg-transparent outline-none font-monl text-[10px] text-[#ffffff] w-[100%]"
                placeholder="Name on Card "
                value={accountNumber}
              />
            </div>

            <div className="text-white">Address</div>
            <div className="w-full h-[34px] rounded-[15px] bg-[#000000] bg-opacity-[20%] shadow-sm flex justify-between p-2 items-center">
              <input
                className="placeholder:text-[7px] placeholder:text-[#ffffff] bg-transparent outline-none font-monl text-[10px] text-[#ffffff] w-[100%]"
                placeholder="Name on Card "
                value={address}
              />
            </div>

            <div className="text-white">Enter your Wallet Address</div>
            <div className="w-full h-[44px] rounded-[10px] bg-[#000000] bg-opacity-[20%] shadow-sm flex justify-between p-2 items-center">
              <input
                className="placeholder:text-[10px] placeholder:text-[#ffffff] bg-transparent outline-none font-monl text-[10px] text-[#ffffff] w-[100%]"
                placeholder="WalletAdress "
                value={walletaddress}
                onChange={(e: any) => {
                  setwalletAddress(e.target.value);
                }}
              />
            </div>

            {/* <div className="flex items-center justify-between gap-4">
              <div className="w-[70%] h-[34px] rounded-[15px] bg-[#000000] bg-opacity-[20%] shadow-sm flex justify-between p-2 items-center">
                <input
                  className="placeholder:text-[7px] placeholder:text-[#ffffff] bg-transparent outline-none font-monl text-[10px] text-[#ffffff] w-full"
                  placeholder="MM/YYYY "
                />
              </div>
              <div className="w-[30%] h-[34px] rounded-[15px] bg-[#000000] bg-opacity-[20%] shadow-sm flex justify-between p-2 items-center">
                <input
                  className="placeholder:text-[7px] placeholder:text-[#ffffff] bg-transparent outline-none font-monl text-[10px] text-[#ffffff] w-full"
                  placeholder="CVV "
                />
              </div>
            </div> */}

            {/* <p className="text-[#ffffff] text-[9px] font-monl cursor-pointer">
              Save this card
            </p>

            <button className="w-full h-[34px] flex gap-2 justify-center items-center rounded-[15px] bg-[#000000] bg-opacity-[20%] shadow-sm">
              <div className=" flex justify-center items-center text-[15px] text-white">
                <MdOutlineLock />
              </div>
              <h3 className="text-[16px] text-white font-monl">Checkout</h3>
            </button> */}
          </div>
        </article>
        <Link href="/orderprocessing">
          <div className="relative w-[310px]">
            <AddButton />
          </div>
        </Link>
        <br />
        {/* <div className="w-full h-[25px] flex justify-between items-center mb-[5%]">
          <div className="text-[#ffffff] text-[15px]">Save card info</div>
          <ToggelButton />
        </div> */}
      </article>
    </div>
  );
};

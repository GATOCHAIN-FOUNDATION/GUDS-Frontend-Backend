"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import CheckIcon from "../../../../public/assests/icons/Check.png";
import BackIcon from "../../../../public/assests/icons/Back.png";
import FlagIcon1 from "../../../../public/assests/icons/flag1.png";
import Link from "next/link";
import countryData from "../../../../public/assests/counteries.json";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
const Language = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });

  const [selectedCountry, setSelectedCountry] = useState("");
  const [email, setEmail] = useState(session?.user?.email);
  const userEmail = session?.user?.email;
  useEffect(() => {
    const fetchData = async () => {
      const resUserExists = await fetch("/api/getUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmail }),
      });

      const { user } = await resUserExists.json();
      setSelectedCountry(user._country);

      console.log("user", user);
    };
    fetchData();
  }, []);
  const handleCountryClick = async (country: any) => {
    setSelectedCountry(country);
    const resUserExists = await fetch("/api/updateCountry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, country }),
    });

    const { res } = await resUserExists.json();
    console.log("Response", res);
  };
  return (
    <div className="w-[100%]  flex flex-col items-center justify-center bg-white mx-5 overflow-auto">
      <div className=" w-[100%] flex items-center justify-start border-b-[2px] border-zinc-200 p-3 uppercase ">
        <Link href="/profile">
          {" "}
          <Image
            alt="BackIcon"
            src={BackIcon}
            className={"mr-2 cursor-pointer"}
            height={20}
            width={20}
          />{" "}
        </Link>
        <h1 className="  font-mol  ">Country and Language</h1>
      </div>

      {countryData.map((country, index) => (
        <div
          className={`w-[100%] flex items-center justify-between  ${
            selectedCountry === country.name
              ? " border-black border-[2px]"
              : "border-zinc-200 border-b-[2px]"
          }  p-3 `}
          onClick={() => handleCountryClick(country.name)}
        >
          <div className="w-[100%] flex items-center justify-start">
            {/* <Image
            alt="FlagIcon1"
            src={FlagIcon1}
            className={"mr-4"}
            height={20}
            width={20}
          /> */}
            <img
              src={`https://flagsapi.com/${country.code}/flat/64.png `}
              width={30}
              height={30}
              alt={""}
            />

            <h1 className=" font-mol  ml-2 font-semibold ">{country.name}</h1>
          </div>
          {selectedCountry === country.name && (
            <Image
              alt="CheckIcon"
              src={CheckIcon}
              className={""}
              height={20}
              width={20}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Language;

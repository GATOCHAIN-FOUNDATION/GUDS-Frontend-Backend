"use client";
import RoundButton from "@/utils/RoundButton";
import Image from "next/image";
import { FC } from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import googleIcon from "../../../../public/assests/icons/google.png";
import facebookIcon from "../../../../public/assests/icons/facebook.png";
import appleIcon from "../../../../public/assests/icons/apple.png";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CardProps {
  image: any;
  altHeading: string;
}

const LoginCard: FC<CardProps> = ({ image, altHeading }): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const icons = [
    { icon: googleIcon, to: "", altHeading: "google icon", provider: "google" },
    {
      icon: facebookIcon,
      to: "",
      altHeading: "facebook icon",
      provider: "facebook",
    },
    // { icon: appleIcon, to: "", altHeading: "apple icon", provider: "" },
  ];

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(error);
    if (!email || !password) {
      toast.error("Please enter both email and password.", {
        position: "top-center",
      });
      return;
    }
    toast.info("Logging in...", { autoClose: false, position: "top-center" });
    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user?.active === false) {
        router.replace("/redirect");
        return;
      }
      console.log(user);
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid Credentials");
        toast.error("Login failed. Please check your credentials.", {
          position: "top-center",
        });
        return;
      }

      toast.dismiss();

      toast.success("Login successful!", { position: "top-center" });

      router.push("/thankyou");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="relative rounded-[30px] flex flex-col justify-center py-5 gap-4 w-[335px] bg-[#000000] bg-opacity-20 backdrop-blur-2xl shadow-md px-3">
        <div
          className={`absolute ${
            altHeading === "diamonds"
              ? "w-[150px] left-[25%] top-[-60px] "
              : "w-[9rem] top-[-60px]"
          } aspect-auto z-20`}
        >
          <Image src={image} alt={altHeading} />
        </div>

        {/* <div className="flex flex-col relative rounded-[30px] justify-center items-center bg-[#0000003b] bg-opacity-100 backdrop-blur-[45px] z-10 h-[314px] w-[335px] gap-2 pt-5 shadow-2xl"> */}
        <h2 className="text-[25px] pt-10 uppercase text-center text-[#C3F847] font-meul">
          Welcome to <br />
          Back!
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            placeholder={"Email"}
            type={"email"}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#ffffff] bg-opacity-[16%] z-30 rounded-[30px] h-[63.8px] w-full px-4 placeholder:text-[12px] placeholder:text-[#ffffff] outline-none text-white/80 "
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder={"Password"}
            type={"password"}
            className="bg-[#ffffff]/10 bg-opacity-[16%] rounded-[30px] h-[63.8px] w-full px-4 placeholder:text-[12px] placeholder:text-[#ffffff] outline-none text-white/80"
          />

          <p className="text-red-700  pl-3 ">{error}</p>
          <p className="text-[12px] text-[#CACACA] pl-3">
            Do you have an account ?{" "}
            <span className="text-[#C3F847] underline">
              <Link href="/signup">Register</Link>
            </span>
          </p>

          <div className=" flex  gap-4">
            <label className="font-monl text-[10px] text-left pl-3 text-[#ffffff]">
              Remember Me
            </label>
            <input type="checkbox" />
          </div>

          <div className="flex flex-col justify-start gap-4 pl-3">
            <p className="text-[12px] text-[#CACACA]">Or login with</p>
            <div className="pl-3 flex gap-6">
              {icons.map((icon) => {
                return (
                  <Image
                    src={icon.icon}
                    alt={icon.altHeading}
                    width={20}
                    className="aspect-square cursor-pointer"
                    onClick={() => signIn(icon.provider)}
                  />
                );
              })}
            </div>
            <button className="absolute bottom-[-50px] right-9 " type="submit">
              <RoundButton />
            </button>
          </div>
        </form>
        {/* </div> */}
      </div>
    </>
  );
};

export default LoginCard;

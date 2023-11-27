"use client";

import Link from "next/link";
import RoundButton from "./RoundButton";

const BuyGudsBtn = ({ url }: { url: string }) => {
  return (
    <div
      className="bg-black z-[15] bg-opacity-20 rounded-[20px] w-[174px] px-4 py-1 relative"
      style={{ width: "180px" }}
    >
      <div
        className="text-[#C3F847] font-meb text-left"
        style={{ fontSize: "30px" }}
      >
        <h1 className="font-meb ">
          GU<span className="font-meul italic">D</span>S
          <br />
          BUY
        </h1>
        {/* <br /> <h1>BUY</h1> */}
      </div>

      <Link href={url}>
        <button
          className="absolute right-0 top-12"
          style={{ top: "44px", width: "80px" }}
        >
          <RoundButton />
        </button>
      </Link>
    </div>
  );
};

export default BuyGudsBtn;

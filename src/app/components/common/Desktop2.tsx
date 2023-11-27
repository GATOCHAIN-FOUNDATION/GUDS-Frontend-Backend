import { FC, ReactNode } from "react";
import Navbar from "../Navbar/navbar";
import Image from "next/image";
import PlanetIcon from "../../../../public/assests/logo/planet.png";
import FileIcon from "../../../../public/assests/logo/file.png";
import GalaxyIcon from "../../../../public/assests/logo/galaxy.png";
import BlackHoleIcon from "../../../../public/assests/logo/bh.png";
import backgroundImage from "../../../../public/assests/webbg.jpg";
// import Verified from "../Cards/VerifiedCard";

interface props {
  children: ReactNode;
}

const Desktop: FC<props> = ({ children }) => {
  const settingIcons = [
    { source: GalaxyIcon, altHeading: "galaxy icon - Setting icon" },
    { source: FileIcon, altHeading: "File icon - Setting icon" },
    { source: BlackHoleIcon, altHeading: "Black hole icon - Setting icon" },
    { source: PlanetIcon, altHeading: "planet icon - Setting icon" },
  ];

  return (
    <>
      <div className="flex justify-center items-center w-full h-full overflow-hidden">
        <div className="flex items-center justify-center w-[99%] py-3 h-screen mx-auto border    overflow-hidden">
          <div
            className="flex flex-col relative w-full h-full bg-cover rounded-lg overflow-hidden"
            style={{ backgroundImage: `url(${backgroundImage.src})` }}
          >
            {/* {sidebarOpen && ( */}
            <div
              className="absolute flex p-2 justify-center items-center top-0 left-0 2xl:w-[1300px] xl:w-[85%] rounded-2xl h-full bg-opacity-50  "
              style={{
                background: `rgba(255, 255, 255, 0.06)`,
                backdropFilter: `blur(45px)`,
              }}
            >
              <div className="h-full w-[100vw] overflow-auto flex justify-center items-center rounded-[20px]">
                {children}
              </div>
            </div>
            {/* )} */}
            <Navbar />
            <div className="w-[100%] h-[70%] flex items-center justify-center "></div>
            <div className="w-[100%] h-[20%] flex  justify-center  ">
              <div className="w-[100%] h-[20%] flex items-center justify-end">
                <div className="text-[#C3F847] text-xs font-mel mr-10">
                  SUSTAIN / SCALE / SECURE
                </div>
                <div className=" flex items-center justify-center font-mel mr-5">
                  {settingIcons.map((item) => {
                    return (
                      <Image
                        alt={item.altHeading}
                        src={item.source}
                        className={"mx-2"}
                        height={30}
                        width={30}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="absolute">
          <Verified />
        </div> */}
      </div>
    </>
  );
};

export default Desktop;

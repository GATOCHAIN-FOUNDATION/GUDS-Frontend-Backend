import background from "../../../../public/assests/background_images/popup_bg.png";
import PopupCard from "../Cards/PopupCard";
// import MobileNav from "../components/Navbar/mobileNav";
import Logo from "../../../../public/assests/logo/3d_logo.png";
import type { NextPage } from "next";

const Popup: NextPage = () => {
  return (
    <>
      <div
        className="flex relative w-[100vw] h-[100vh] bg-cover bg-center justify-center items-center"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div className="absolute flex justify-center items-center w-[100vw] h-[100vh] bg-[#000000] bg-opacity-5 backdrop-blur-[30px]">
          {/* <div className="absolute top-1 left-0 right-0">
            <MobileNav />
          </div> */}

          <div>
            <PopupCard image={Logo} altHeading="3d logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;

import { useState } from "react";
import background from "../../../../public/assests/background_images/landing_mobile_bg.png";
import WelcomeCard from "../Cards/welcomeCard";
import Popup from "../popup/Popup";

const LandingMob = () => {
  const [showPopUp, setShowPopup] = useState(false);

  return (
    <>
      {showPopUp ? (
        <Popup />
      ) : (
        <div
          className="flex w-[100vw] h-[100vh] bg-cover bg-center justify-center items-center"
          style={{ backgroundImage: `url(${background.src})` }}
        >
          <WelcomeCard setShowPopup={setShowPopup} />
        </div>
      )}
    </>
  );
};

export default LandingMob;

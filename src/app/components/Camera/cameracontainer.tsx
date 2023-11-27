"use client";
import React from "react";
import { useEffect, useState } from "react";
import camera from "../../../../public/assests/icons/camera.png";
import Image from "next/image";
import Webcam from "react-webcam";
import { useForm } from "react-hook-form";
import CameraOption from "./cameraOption";
import FileOption from "./fileOption";

const cameracontainer = () => {
  const [cameraOption, setCameraOption] = useState(false);
  const [fileOption, setFileOption] = useState(false);
  const showCameraOption = () => {
    setCameraOption(true);
    setFileOption(false); // Hide file option when camera option is shown
  };

  const showFileOption = () => {
    setFileOption(true);
    setCameraOption(false); // Hide camera option when file option is shown
  };

  return (
    <>
      {fileOption && <FileOption />}
      {cameraOption && <CameraOption />}
      {!fileOption && !cameraOption && (
        <div className="flex flex-col items-center justify-center text-white  shadow-lg bg-black/25 font-meul w-[300px] rounded-[20px] px-4 py-8  ">
          <div className="mb-6">
            <h1>camera</h1>
          </div>

          <button
            type="submit"
            className="font-meb text-xs bg-[#C3F847] text-purple py-4 text-purple-900 my-2  cursor-pointer  text-center rounded-lg w-[90%]"
            onClick={showCameraOption}
          >
            Take a photo
          </button>

          <button
            type="submit"
            className="font-meb text-xs bg-[#C3F847] text-purple py-4 text-purple-900 my-2  cursor-pointer  text-center rounded-lg w-[90%]"
            onClick={showFileOption}
          >
            Choose from gallery
          </button>
        </div>
      )}
    </>
  );
};

export default cameracontainer;

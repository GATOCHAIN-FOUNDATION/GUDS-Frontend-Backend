import React from 'react'
import dynamic from "next/dynamic";
import Camera from '../../components/Camera/cameracontainer';
const MobileLayout = dynamic(
  () => import("../../components/Layout/MobileLayout")
);
const camera = () => {
  return (
    <MobileLayout>
      <Camera/>
  </MobileLayout>
  )
}

export default camera
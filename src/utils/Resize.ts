// utils.js
"use client";
import { useState,useEffect } from "react";


const useWidth = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
}

const isTablet= () => {
  const [isTabletWidth, setIsTabletWidth] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletWidth(window.innerWidth <= 1350);
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isTabletWidth;
}
  
export {useWidth,isTablet};
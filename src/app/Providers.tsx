"use client";
import "./globals.css";
import { AuthProvider } from "./Provider";
import { Web3Provider } from "./Web3Provider";

import { FC, ReactNode } from "react";


interface props {
    children: ReactNode;
  }
  
  const Providers: FC<props> = ({ children }) => {
  return (
    <AuthProvider>
    <Web3Provider>{children}</Web3Provider>
  </AuthProvider>
  )
}

export default Providers
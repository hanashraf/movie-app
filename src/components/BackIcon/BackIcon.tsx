"use client";
import React from "react";
import { useRouter } from "next/navigation";
import BackIconShape from "./BackIconShape";
const BackIcon = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.back()} style={{ cursor: "pointer" }}>
      <BackIconShape />
    </div>
  );
};

export default BackIcon;

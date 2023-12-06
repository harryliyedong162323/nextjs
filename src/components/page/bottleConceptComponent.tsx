"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

function BottleConceptComponent(props: any) {
  useEffect(() => {}, []);

  return (
    <div className="relative overflow-hidden">
      <div className="flex h-screen">
        <Image
          className="object-cover"
          src={require("../../../public/assets/range/bottle_concept.png")}
          alt={""}
          quality="100"
        ></Image>
      </div>
    </div>
  );
}

export default BottleConceptComponent;

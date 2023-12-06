"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

function ServingSuggestionComponent(props: any) {
  useEffect(() => {}, []);

  return (
    <div className="relative overflow-hidden bg-[#E6E7E8]">
      <div className="flex h-screen flex-col">
        <div className="font-AlbertusNova-Regular text-40px text-center mt-[calc(17vh)] uppercase mobile:text-20px mobile:mt-70px">
          SERVING SUGGESTION
        </div>
        <div className="font-Grotesque-Regularr text-22px text-center mt-20px mobile:text-14px mobile:mt-20px mobile:px-25px">
          Ideal enjoyed neat or slightly chilled with a cube of ice.
        </div>
        <div className="flex justify-between px-[calc(3.125vh)] mt-20px mobile:flex-col mobile:px-0">
          <div className="w-[calc(46.125vw)] mobile:w-full">
            <Image
              className="object-cover w-full h-[calc(38.75vw)] mobile:w-full mobile:h-200px"
              src={require("../../../public/assets/range/product_01.png")}
              alt={""}
              object-fit="contain"
              quality="100"
            ></Image>
            <div className="font-Grotesque-Regular text-22px text-[#696969] mt-20px mobile:text-14px mobile:text-center mobile:px-25px">
              Alternatively, in a Wild Moorland with sweet vermouth, soda water,
              and a Blackberry.
            </div>
          </div>
          <div className="w-[calc(46.125vw)] mobile:w-full mobile:mt-20px">
            <Image
              className="object-cover w-full h-[calc(46.125vw)] mobile:w-full mobile:h-[100vw]"
              src={require("../../../public/assets/range/product_02.png")}
              alt={""}
              object-fit="contain"
              quality="100"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServingSuggestionComponent;

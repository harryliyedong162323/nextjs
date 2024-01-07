"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

function ServingSuggestionComponent(props: any) {
  const headStyle = props.data.entry.headStyle;
  useEffect(() => {}, []);

  return (
    <section id="ServingSuggestion" data-anchor={2} className="relative overflow-hidden bg-[#E6E7E8] select-none">
      <input type="hidden" value={headStyle}/>
      <div className="flex h-screen flex-col justify-center mobile:justify-start">
        <div className="font-AlbertusNova-Regular text-center uppercase text-33px pad:text-27px mobile:text-20px mobile:pt-80px">
          SERVING SUGGESTION
        </div>
        <div className="font-Grotesque-Regular text-center text-[#696969] mt-20px mb-10px pad:mb-4px text-20px pad:text-16px mobile:text-14px mobile:mt-20px mobile:px-50px">
          Ideal enjoyed neat or slightly chilled with a cube of ice.
        </div>
        <div className="flex justify-between mx-auto mt-20px w-[1250px] pad:w-1200px pad:mt-[2%] mobile:w-full mobile:flex-col mobile:px-0">
          <div className="w-615px h-524px pad:w-550px pad:h-524px mobile:w-full mobile:h-265px mobile:mt-35px">
            <Image
              className="object-cover w-full h-412px pad:h-360px mobile:w-full mobile:h-200px"
              src={require("../../../public/assets/range/product_01.png")}
              alt={""}
              object-fit="contain"
              quality="100"
            ></Image>
            <div className="font-Grotesque-Regular text-20px text-[#696969] mt-20px pad:text-16px mobile:text-14px mobile:text-center mobile:px-25px mobile:mt-30px">
              Alternatively, in a Wild Moorland with sweet vermouth, soda water,
              and a Blackberry.
            </div>
          </div>
          <div className="w-593px h-524px pad:w-593px pad:h-524px mobile:w-full mobile:mt-20px">
            <Image
              className="object-cover w-full h-524px pad:h-418px mobile:w-full mobile:h-[100vw]"
              src={require("../../../public/assets/range/product_02.png")}
              alt={""}
              object-fit="contain"
              quality="100"
            ></Image>
          </div>
        </div>
      </div>
      <div className="w-full absolute bottom-0 z-10 mobile:h-110px mobile:bg-gradient-to-t mobile:from-[rgba(0,0,0)] mobile:to-[rgba(0,0,0,0.1)]"></div>
    </section>
  );
}

export default ServingSuggestionComponent;

"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

function ServingSuggestionComponent(props: any) {
  const headStyle = props.data.entry.headStyle;
  useEffect(() => {}, []);

  return (
    <div id="ServingSuggestion" className="relative overflow-hidden bg-[#E6E7E8]">
      <input type="hidden" value={headStyle}/>
      <div className="flex h-screen flex-col">
        <div className="font-AlbertusNova-Regular text-center uppercase text-33px pt-154px paid:text-27px paid:pt-124px mobile:text-20px mobile:pt-82px">
          SERVING SUGGESTION
        </div>
        <div className="font-Grotesque-Regular text-center text-[#696969] mt-20px text-20px paid:text-16px mobile:text-14px mobile:mt-20px mobile:px-50px">
          Ideal enjoyed neat or slightly chilled with a cube of ice.
        </div>
        <div className="flex justify-between mx-auto mt-20px w-[1250px] paid:w-1000px mobile:w-full mobile:flex-col mobile:px-0">
          <div className="w-615px h-524px paid:w-492px paid:h-418px mobile:w-full mobile:h-270px mobile:mt-40px">
            <Image
              className="object-cover w-full h-412px paid:h-328px mobile:w-full mobile:h-200px"
              src={require("../../../public/assets/range/product_01.png")}
              alt={""}
              object-fit="contain"
              quality="100"
            ></Image>
            <div className="font-Grotesque-Regular text-20px text-[#696969] mt-20px paid:text-16px mobile:text-14px mobile:text-center mobile:px-25px">
              Alternatively, in a Wild Moorland with sweet vermouth, soda water,
              and a Blackberry.
            </div>
          </div>
          <div className="w-593px h-524px paid:w-474px paid:h-418px mobile:w-full mobile:mt-20px">
            <Image
              className="object-cover w-full h-524px paid:h-418px mobile:w-full mobile:h-[100vw]"
              src={require("../../../public/assets/range/product_02.png")}
              alt={""}
              object-fit="contain"
              quality="100"
            ></Image>
          </div>
        </div>
      </div>
      <div className="w-full absolute bottom-0 z-10 mobile:h-110px mobile:bg-gradient-to-t mobile:from-[rgba(0,0,0)] mobile:to-[rgba(0,0,0,0.1)]"></div>
      <div className="w-full absolute bottom-20px z-20 font-Grotesque-Regular text-[#969797] uppercase text-20px paid:text-14px mobile:text-10px">
        <div className="flex justify-between mx-auto w-[1250px] paid:w-1000px mobile:w-full text-center">
          <a href="#ProductsFamily" className="inline-block mobile:w-64px">
            products family
          </a>
          <a href="#TalesFromTheWild" className="inline-block mobile:w-64px">
            Tales From The Wild
          </a>
          <a
            href="#ServingSuggestion"
            className="relative inline-block text-[#696969] mobile:w-64px mobile:text-white"
          >
            Serving Suggestion
            <div className="bg-[url('/assets/range/icon_nav_line.png')] absolute bg-cover z-10 left-1/2 w-189px h-7px top-26px -ml-95px paid:w-154px paid:h-6px paid:top-24px paid:-ml-77px mobile:top-36px mobile:w-64px mobile:h-3px mobile:-ml-32px"></div>
          </a>
          <a href="#BottleConcept" className="inline-block mobile:w-64px">
            Bottle Concept
          </a>
          <a href="#FlavourFinder" className="inline-block mobile:w-64px">
            Flavour Finder
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServingSuggestionComponent;

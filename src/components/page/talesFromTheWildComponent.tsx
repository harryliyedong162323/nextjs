"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

function TalesFromTheWildComponent(props: any) {
  useEffect(() => {}, []);

  return (
    <div className="relative overflow-hidden bg-[#E6E7E8]">
      <div className="flex h-screen flex-col">
        <div className="font-AlbertusNova-Regular text-40px text-center mt-[calc(17vh)] uppercase mobile:text-20px mobile:mt-70px">Tales From The Wild</div>
        <div className="px-[calc(3.125vw)] mt-[calc(9.26vh)] inline-flex justify-between mobile:flex-col mobile:px-0 mobile:mt-10px">
          <div className="relative">
            <Image
              className="object-cover w-[calc(45.125vw)] h-[calc(38.75vw)] mobile:w-full mobile:h-[100vw]"
              src={require("../../../public/assets/range/wild_01.png")}
              alt={""}
              object-fit="contain"
              quality="100"
            ></Image>
            <div className="absolute top-0 left-0 px-40px pt-20px inline-flex flex-row items-center mobile:px-20px mobile:mt-10px">
              <Image
                className="object-cover w-58px h-58px mobile:w-48px mobile:h-48px"
                src={require("../../../public/assets/range/wild_face.png")}
                alt={""}
                object-fit="contain"
                quality="100"
              ></Image>
              <div className="text-white text-16px ml-10px mobile:text-14px">NAME of KOL</div>
            </div>
            <div className="absolute inline-flex justify-between bottom-0 w-full px-40px pb-30px  bg-gradient-to-b from-[rgba(10, 22, 27, 0.75)] to-[rgba(0, 0, 0, 0)] mobile:px-24px ">
              <div className="text-white font-Grotesque-Medium text-[calc(1.375vw)] mobile:text-14px">Bring the drinking occasion to life in a way</div>
              <div className="inline-block bg-[url('/assets/range/icon_arrow.png')] bg-cover w-[calc(2.25vw)] h-[calc(2.25vw)] cursor-pointer mobile:w-18px mobile:h-18px"></div>
            </div>
          </div>
        {[0, 1, 2, 3].map((item, index) => {
          return (
            <div key={index} className="relative h-[calc(34vw)] top-[calc(4.75vw)] grayscale hover:top-0 hover:grayscale-0 hover:text-white mobile:top-0 mobile:h-94px">
              <div className="absolute font-AlbertusNova-Regular text-16px rotate-90 top-60px mobile:text-14px mobile:rotate-0 mobile:text-white mobile:ml-20px mobile:top-40px">NAME of KOL</div>
              <div className="absolute cursor-pointer z-10 left-1/2 -ml-[calc(1.125vw)] bottom-20px inline-block bg-[url('/assets/range/icon_add_small.png')] bg-cover w-[calc(2.25vw)] h-[calc(2.25vw)] hover:bg-[url('/assets/range/icon_add.png')] hover:w-[calc(4.5vw)] hover:h-[calc(4.5vw)] hover:-ml-[calc(2.25vw)] mobile:w-18px mobile:h-18px mobile:left-auto mobile:top-40px mobile:right-20px"></div>
              <Image
                className="object-cover w-[calc(10.4vw)] h-[calc(34vw)] mobile:w-full mobile:h-94px"
                src={require("../../../public/assets/range/wild_01.png")}
                alt={""}
                object-fit="contain"
                quality="100"
              ></Image>
            </div>
          )
        })}
        </div>
      </div>
    </div>
  );
}

export default TalesFromTheWildComponent;

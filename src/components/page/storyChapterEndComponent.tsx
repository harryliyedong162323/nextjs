"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

function StoryChapterEndComponent(props: any) {
  useEffect(() => {}, []);

  return (
    <div className="relative overflow-hidden">
      <div className="flex h-screen">
        <Image
          className="object-cover object-left-top"
          src={require("../../../public/assets/story/brand_story_chatper_end.png")}
          alt={""}
          quality="100"
        ></Image>
      </div>
      <div className="absolute flex w-[2000px] overflow-hidden left-0 bottom-[calc(36.5vh)] -ml-150px mobile:ml-0 ">
        <div className="flex flex-col items-center w-470px mobile:ml-0 mobile:w-235px">
          <Image
            className="w-470px h-414px mobile:w-235px mobile:h-207px"
            src={require("../../../public/assets/product/product_01.png")}
            alt={""}
            quality="100"
          ></Image>
          <div className="w-275px text-white font-AlbertusNova-Light inline-flex items-center mobile:w-160px">
            <div>
              <div className="text-56px leading-none mobile:text-34px">23</div>
              <div className="text-10px uppercase mobile:text-6px">years old</div>
            </div>
            <div className="mx-10px h-60px w-2px bg-white mobile:mx-5px mobile:h-40px mobile:w-1px"></div>
            <div className="text-28px uppercase leading-tight mobile:text-16px">DARK MOORLAND</div>
          </div>
        </div>
        <div className="flex flex-col items-center ml-100px w-470px mobile:ml-0 mobile:w-235px">
          <Image
            className="w-470px h-414px mobile:w-235px mobile:h-207px"
            src={require("../../../public/assets/product/product_01.png")}
            alt={""}
            quality="100"
          ></Image>
          <div className="w-275px text-white font-AlbertusNova-Light inline-flex items-center mobile:w-160px">
            <div>
              <div className="text-56px leading-none mobile:text-34px">23</div>
              <div className="text-10px uppercase mobile:text-6px">years old</div>
            </div>
            <div className="mx-10px h-60px w-2px bg-white mobile:mx-5px mobile:h-40px mobile:w-1px"></div>
            <div className="text-28px uppercase leading-tight mobile:text-16px">DARK MOORLAND</div>
          </div>
        </div>
        <div className="flex flex-col items-center ml-100px w-470px mobile:ml-0 mobile:w-235px">
          <Image
            className="w-470px h-414px mobile:w-235px mobile:h-207px"
            src={require("../../../public/assets/product/product_01.png")}
            alt={""}
            quality="100"
          ></Image>
          <div className="w-275px text-white font-AlbertusNova-Light inline-flex items-center mobile:w-160px">
            <div>
              <div className="text-56px leading-none mobile:text-34px">23</div>
              <div className="text-10px uppercase mobile:text-6px">years old</div>
            </div>
            <div className="mx-10px h-60px w-2px bg-white mobile:mx-5px mobile:h-40px mobile:w-1px"></div>
            <div className="text-28px uppercase leading-tight mobile:text-16px">DARK MOORLAND</div>
          </div>
        </div>
        <div className="flex flex-col items-center ml-100px w-470px mobile:ml-0 mobile:w-235px">
          <Image
            className="w-470px h-414px mobile:w-235px mobile:h-207px"
            src={require("../../../public/assets/product/product_01.png")}
            alt={""}
            quality="100"
          ></Image>
          <div className="w-275px text-white font-AlbertusNova-Light inline-flex items-center mobile:w-160px">
            <div>
              <div className="text-56px leading-none mobile:text-34px">23</div>
              <div className="text-10px uppercase mobile:text-6px">years old</div>
            </div>
            <div className="mx-10px h-60px w-2px bg-white mobile:mx-5px mobile:h-40px mobile:w-1px"></div>
            <div className="text-28px uppercase leading-tight mobile:text-16px">DARK MOORLAND</div>
          </div>
        </div>
      </div>
      <div className="absolute text-[#E6E7E8] font-Grotesque-Light text-22px bottom-[calc(11.5vh)] w-full mobile:text-14px">
        <div className="w-996px m-auto mobile:w-300px">
          Drawing from his personal memories and over 25 years experience
          including leading the world’s most awarded single malt Glenfiddich,
          each Wildmoor whisky brings a taste of this epic wilderness in every
          drop.
        </div>
      </div>
    </div>
  );
}

export default StoryChapterEndComponent;

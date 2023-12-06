"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

function StoryChapterThreeComponent(props: any) {
  // useEffect(() => {}, []);

  return (
    <div className="relative overflow-hidden">
      <div className="flex h-screen">
        <Image
          className="object-cover mobile:object-left-top"
          src={require("../../../public/assets/story/brand_story_chatper_03.png")}
          alt={""}
          object-fit="contain"
          quality="100"
        ></Image>
      </div>
      <span className="absolute bg-[url('/assets/story/brand_story_chatper_03_line.png')] w-118px h-1080px bg-cover top-0 left-1/2 -ml-80px -mt-1px mobile:bg-[url('/assets/story/brand_story_chatper_03_line_mobile.png')] mobile:w-56px mobile:h-812px mobile:-ml-11px"></span>
      <div className="absolute top-[calc(15vh)] w-full flex flex-col items-center">
        <div className="bg-[url('/assets/story/brand_story_chatper_03_face_big.png')] w-[calc(62vw)] h-[calc(31.5vw)] bg-cover cursor-pointer z-10 mobile:relative mobile:w-330px mobile:h-264px mobile:left-0"></div>
        <div className="bg-white text-[calc(1.4vw)] font-Grotesque-Regular text-dark-grey w-[calc(62vw)] p-[calc(4vw)] mobile:w-330px mobile:relative mobile:px-25px mobile:py-30px mobile:text-14px mobile:right-0">
          Curated by Master Blender Brian Kinsman and sourced from Scotland’s
          untamed regions and leading distilleries – including notable ghost
          distillery stocks – this is widely considered the finest and most
          diverse collection of aged Scotch Whisky ever assembled.
        </div>
      </div>
      <div className="absolute bottom-24px w-full flex flex-col items-center justify-center">
        <div className="w-18px h-24px border-white border-2 inline-block border-solid rounded-full mb-5px relative before:w-2px before:h-5px before:bg-white before:absolute before:content-[''] before:left-6px before:top-5px before:animate-scroll"></div>
        <div className="text-12px leading-tight text-white font-Grotesque-Regular">
          Scroll to explore more
        </div>
      </div>
    </div>
  );
}

export default StoryChapterThreeComponent;

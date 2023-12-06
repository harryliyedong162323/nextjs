"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

function StoryChapterOneComponent(props: any) {
  // useEffect(() => {}, []);

  return (
    <div className="relative overflow-hidden">
      <div className="flex h-screen">
        <Image
          className="object-cover object-left-top"
          src={require("../../../public/assets/story/brand_story_chatper_01.png")}
          alt={""}
          object-fit="contain"
          quality="100"
        ></Image>
      </div>
      <div className="absolute top-172px mobile:top-86px flex justify-center w-full">
        <span className="text-white font-Grotesque-Regular text-28px w-965px text-center mobile:text-14px mobile:w-275px">
          From the widest ranging ancient reserve of Scotch Whisky in the world,
          a new range of high-aged Blended whiskies is born.
        </span>
      </div>
      <div className="absolute left-1/2 -ml-40px top-483px z-10 h-1/2 mobile:-ml-20px mobile:top-244px mobile:object-left-top">
        <div className="absolute w-78px h-78px border-white border border-solid rounded-full flex items-center justify-center z-10 mobile:w-39px mobile:h-39px">
            <span className="inline-block w-12px h-12px rounded-full bg-white mobile:w-6px mobile:h-6px"></span>
        </div>
        <span className="absolute bg-[url('/assets/story/brand_story_chatper_01_line.png')] inline-block w-4px h-1090px bg-cover top-38px left-38px mobile:w-2px mobile:h-545px mobile:top-19px mobile:left-19px"></span>
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

export default StoryChapterOneComponent;

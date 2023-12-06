"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

function StoryChapterSixComponent(props: any) {
  useEffect(() => {}, []);

  return (
    <div className="relative overflow-hidden">
      <div className="flex h-screen">
        <Image
          className="object-cover mobile:object-left-top"
          src={require("../../../public/assets/story/brand_story_chatper_06.png")}
          alt={""}
          object-fit="contain"
          quality="100"
        ></Image>
      </div>
      <span className="absolute bg-[url('/assets/story/brand_story_chatper_06_line.png')] w-170px h-1080px bg-cover top-0 left-1/2 -ml-210px mobile:bg-[url('/assets/story/brand_story_chatper_06_line_mobile.png')] mobile:w-60px mobile:h-812px mobile:-ml-25px"></span>
      <div className="absolute top-[calc(15vh)] right-100px flex justify-center w-full flex-col items-end mobile:top-86px mobile:right-25px">
        <span className="text-white font-AlbertusNova-Regular uppercase text-[calc(2.5vw)] mobile:text-18px mobile:w-full mobile:text-right">
          An unrestrained
        </span>
        <span className="text-[#d28656] font-AlbertusNova-Regular uppercase text-[calc(4.3vw)] my-40px mobile:text-27px mobile:w-full mobile:my-20px mobile:text-right">
          flavour experience
        </span>
      </div>
      <div className="absolute left-[calc(7.5vw)] top-[calc(30vw)] w-[calc(52vw)] p-[calc(4.25vw)] bg-white text-[calc(1.4vw)] font-Grotesque-Regular text-dark-grey mobile:top-315px mobile:w-330px mobile:px-25px mobile:py-30px mobile:text-14px mobile:right-0">
        Taking from this vault of prized liquids. Kinsman has crafted liquids
        unbound by the established flavour profiles of the traditional regions
        of Scotch to create a new taste experience inspired by Scotland&apos;s epic
        wilderness.
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

export default StoryChapterSixComponent;

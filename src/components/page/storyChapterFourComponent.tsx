"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

function StoryChapterFourComponent(props: any) {
  const [isShow, setIsShow] = useState(false as boolean);
  useEffect(() => {
    console.log("change show", isShow);
  }, [isShow]);

  function showIntroduce(bl: boolean) {
    setIsShow(bl);
  }

  return (
    <div className="relative overflow-hidden">
      <div className="flex h-screen">
        <Image
          className="object-cover mobile:object-left-top"
          src={require("../../../public/assets/story/brand_story_chatper_04.png")}
          alt={""}
          object-fit="contain"
          quality="100"
        ></Image>
      </div>
      <span className="absolute bg-[url('/assets/story/brand_story_chatper_04_line.png')] w-320px h-1080px bg-cover top-0 left-1/2 -ml-86px mobile:bg-[url('/assets/story/brand_story_chatper_04_line_mobile.png')] mobile:w-60px mobile:h-812px mobile:-ml-16px"></span>
      {!isShow && (
        <div className="absolute top-[calc(20vh)] left-100px mobile:top-86px flex justify-center w-full flex-col items-start mobile:left-25px">
          <span className="text-white font-AlbertusNova-Regular uppercase text-[calc(2.5vw)] mobile:text-20px mobile:w-full">
            Inspired by,{" "}
          </span>
          <span className="text-[#d28656] font-AlbertusNova-Regular uppercase text-[calc(4.3vw)] my-40px mobile:text-32px mobile:w-full mobile:my-20px">
            Wild Landscapes,
          </span>
          <span className="text-white font-AlbertusNova-Regular uppercase text-[calc(2.5vw)] mobile:text-20px mobile:w-full">
            unbound by region.
          </span>
        </div>
      )}
      {!isShow && (
        <span
          onClick={() => showIntroduce(true)}
          className="absolute bg-[url('/assets/story/brand_story_chatper_04_face.png')] w-[calc(33vh)] h-[calc(33vh)] bg-cover top-1/2 left-1/2 -ml-[calc(16.5vh)] cursor-pointer mobile:w-177px mobile:h-177px mobile:-ml-88px"
        ></span>
      )}
      {isShow && (
        <div className="absolute top-[calc(15vh)] w-full pl-[calc(10vw)] h-[calc(30.6vw)] mobile:pl-0 mobile:flex mobile:flex-col mobile:h-auto mobile:items-center">
          <div
            onClick={() => showIntroduce(false)}
            className="absolute right-[calc(10vw)] bottom-0  bg-[url('/assets/story/brand_story_chatper_04_face_big.png')] w-[calc(40vw)] h-[calc(26vw)] bg-cover cursor-pointer z-10 mobile:relative mobile:w-330px mobile:h-264px mobile:left-0"
          ></div>
          <div className="absolute left-[calc(10vw)] top-0 w-[calc(47.6vw)] p-[calc(4.25vw)] bg-white text-[calc(1.4vw)] font-Grotesque-Regular text-dark-grey mobile:w-330px mobile:relative mobile:px-25px mobile:py-30px mobile:text-14px mobile:right-0">
            Landscapes of Scotland, including the historic warehouses in the
            heart of Speyside and on the Ayrshire coast inspired William Grant &
            Sons Mlalt Master Distiller Brian Kinsman to create a range of
            Scotch whiskies that would invoke not gentle, picturesque glens, but
            the awe-inspiring landscapes of Scotland.
          </div>
        </div>
      )}
      <div className="absolute bottom-24px w-full flex flex-col items-center justify-center">
        <div className="w-18px h-24px border-white border-2 inline-block border-solid rounded-full mb-5px relative before:w-2px before:h-5px before:bg-white before:absolute before:content-[''] before:left-6px before:top-5px before:animate-scroll"></div>
        <div className="text-12px leading-tight text-white font-Grotesque-Regular">
          Scroll to explore more
        </div>
      </div>
    </div>
  );
}

export default StoryChapterFourComponent;

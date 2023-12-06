"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

function StoryChapterTwoComponent(props: any) {
  const [isShow, setIsShow] = useState(false as boolean);
  useEffect(() => {
    console.log("change show", isShow);
  }, [isShow]);

  function showIntroduce(bl: boolean) {
    setIsShow(bl);
  }

  return (
    <div className="relative overflow-hidden">
      <div className="flex h-screen -mt-1px">
        <Image
          className="object-cover mobile:object-left-top"
          src={require("../../../public/assets/story/brand_story_chatper_02.png")}
          alt={""}
          object-fit="contain"
          quality="100"
        ></Image>
      </div>
      <span className="absolute bg-[url('/assets/story/brand_story_chatper_02_line.png')] w-112px h-1080px bg-cover top-0 left-1/2 -ml-13px mobile:bg-[url('/assets/story/brand_story_chatper_02_line_mobile.png')] mobile:w-56px mobile:h-812px mobile:-ml-7px"></span>
      {!isShow && (
        <div className="absolute top-[calc(20vh)] mobile:top-86px flex justify-center items-end w-full mobile:flex-col mobile:items-start mobile:pl-50px">
          <span className="text-white font-AlbertusNova-Regular uppercase text-[calc(2.5vw)] mobile:text-20px mobile:w-full">
            A family collection,{" "}
          </span>
          <span className="bg-[url('/assets/story/brand_story_chatper_02_year.png')] inline-block w-[calc(19.6vw)] h-[calc(10.6vw)] bg-cover mobile:w-157px mobile:h-85px mobile:mt-40px mobile:mb-40px"></span>
          <span className="text-white font-AlbertusNova-Regular uppercase text-[calc(2.5vw)] mobile:text-20px mobile:w-full">
            in the making.
          </span>
        </div>
      )}
      {!isShow && (
        <span
          onClick={() => showIntroduce(true)}
          className="absolute bg-[url('/assets/story/brand_story_chatper_02_face.png')] w-[calc(33vh)] h-[calc(33vh)] bg-cover top-1/2 left-1/2 -ml-[calc(16.5vh)] cursor-pointer mobile:w-177px mobile:h-177px mobile:-ml-88px"
        ></span>
      )}
      {isShow && (
        <div className="absolute top-[calc(15vh)] w-full pl-[calc(10vw)] h-[calc(30.6vw)] mobile:pl-0 mobile:flex mobile:flex-col mobile:h-auto mobile:items-center">
          <div
            onClick={() => showIntroduce(false)}
            className="absolute left-[calc(10vw)] top-0 bg-[url('/assets/story/brand_story_chatper_02_face_big.png')] w-[calc(40vw)] h-[calc(26vw)] bg-cover cursor-pointer z-10 mobile:relative mobile:w-330px mobile:h-264px mobile:left-0"
          ></div>
          <div className="absolute right-[calc(10vw)] bottom-0 w-[calc(40vw)] p-[calc(4.25vw)] bg-white text-[calc(1.4vw)]font-GalanoGrotesque text-dark-grey mobile:w-330px mobile:relative mobile:px-25px mobile:py-30px mobile:text-14px mobile:right-0">
            Drawn from the Grant Gordon family ancient reserve stock, Wildmoor
            is the cumulation of a decades-long mission to collect the rarest
            and most prestigious aged whiskies.
          </div>
        </div>
      )}
      <div className="absolute bottom-24px w-full flex flex-col items-center justify-center">
        <div className="w-18px h-24px border-white border-2 inline-block border-solid rounded-full mb-5px relative before:w-2px before:h-5px before:bg-white before:absolute before:content-[''] before:left-6px before:top-5px before:animate-scroll"></div>
        <div className="text-12px leading-tight text-white font-GalanoGrotesque">
          Scroll to explore more
        </div>
      </div>
    </div>
  );
}

export default StoryChapterTwoComponent;

"use client";

import React, { useEffect, useState, useCallback } from "react";
import BaseImage from "../base/image";

interface ComponentData {
  id: number;
  bg: {
    mImg: string;
    pImg: string;
  };
  words: {
    first: string;
    second: string;
  };
  description: string;
  scrollText: string;
}

const componentData: ComponentData = {
  id: 1,
  bg: {
    pImg: require("../../../public/assets/story/brand_story_chatper_06.png"),
    mImg: require("../../../public/assets/story/brand_story_chatper_06.png"),
  },
  description:
    "But wild wind-swept moorlands, savage waves breaking across jagged shorelines. And rolling mountains shrouded in mist.",
  scrollText: "Scroll to explore more",
  words: {
    first: "An unrestrained",
    second: "flavour experience",
  },
};

function StoryChapterSixComponent(props: any) {
  const [data, setData] = useState<ComponentData>(componentData);

  const [isFullPage] = useState<boolean>(props.data.entry.isFullPage || false);
  const [isCurrentPage, setIsCurrentPage] = useState<boolean>(false);

  useEffect(() => {
    if (isFullPage) {
      if (props.data.entry.currentPageNumber === props.data.entry.pageNumber) {
        setIsCurrentPage(true);
      } else {
        setIsCurrentPage(false);
      }
    }
  }, [isFullPage, props]);

  return (
    <div className="relative overflow-hidden">
      <div className="flex h-screen">
        <BaseImage
          mImg={data.bg.mImg}
          pImg={data.bg.pImg}
          alt={""}
          layout="fill"
          objectFit="cover"
          quality={100}
        ></BaseImage>
      </div>
      <span className="absolute bg-[url('/assets/story/brand_story_chatper_06_line.png')] w-170px h-1080px bg-cover top-0 left-1/2 -ml-210px mobile:bg-[url('/assets/story/brand_story_chatper_06_line_mobile.png')] mobile:w-60px mobile:h-812px mobile:-ml-25px"></span>
      <div
        className={`absolute top-[calc(15vh)] right-100px flex justify-center w-full flex-col items-end mobile:top-154px mobile:right-25px  transition-all ease-in-out duration-500 delay-1000 ${
          isCurrentPage
            ? "top-197px paid:top-158px mobile:top-86px opacity-100"
            : "top-397px paid:top-358px mobile:top-286px opacity-0"
        }`}
      >
        <span className="text-white font-AlbertusNova-Regular uppercase leading-none text-34px paid:text-28px mobile:text-18px mobile:w-full mobile:text-right">
          {data.words.first}
        </span>
        <span className="text-[#d28656] font-AlbertusNova-Regular uppercase leading-none text-58px mt-60px paid:47px paid:mt-50px mobile:text-27px mobile:w-full mobile:my-20px mobile:text-right">
          {data.words.second}
        </span>
      </div>
      <div className="absolute bg-white font-Grotesque-Regular text-dark-grey w-694px text-20px p-50px top-450px paid:text-16px paid:p-40px paid:top-360px paid:left-80px paid:w-554px mobile:w-330px mobile:px-25px mobile:py-30px mobile:text-14px mobile:top-1/2 mobile:left-1/2 mobile:-ml-165px">
        <div
          className={`w-full absolute z-10 left-0 bottom-0 bg-white transition-all ease-in-out duration-500 delay-1500 ${
            isCurrentPage ? "h-0" : "h-full"
          }`}
        ></div>
        <div>{data.description}</div>
      </div>
      <div
        className={`absolute z-20 w-full flex flex-col items-center justify-center transition-all ease-in-out duration-500 delay-1000 ${
          isCurrentPage ? "bottom-24px" : "-bottom-48px"
        }`}
      >
        <div className="w-18px h-24px border-white border-2 inline-block border-solid rounded-full mb-5px relative before:w-2px before:h-5px before:bg-white before:absolute before:content-[''] before:left-6px before:top-5px before:animate-scrollMore"></div>
        <div className="text-12px leading-tight text-white font-Grotesque-Regular">
          {data.scrollText}
        </div>
      </div>
    </div>
  );
}

export default StoryChapterSixComponent;

"use client";

import React, { useEffect, useState, useCallback } from "react";
import BaseImage from "../base/image";

interface entryContent {
  isFullPage: boolean;
  pageNumber: number;
  currentPageNumber: number;
  sys: {
    id: string;
  };
  storyChapterSixComponentFirst: string;
  storyChapterSixComponentSecond: string;
  storyChapterSixComponentDescription: string;
  storyChapterSixComponentSlidingText: string;
  storyChapterSixComponentBackgroundImage: {
    imagepc: {
      url: string;
    };
    imagemobile: {
      url: string;
    };
    altText: string;
  };
}

export interface propsContent {
  getPageStore: Function;
  updatePageStore: Function;
  changeNavStatus: Function;
  scrollToPage: Function;
  data: {
    entry: entryContent;
    name: string;
    type: string;
  };
}

function StoryChapterSixComponent(props: propsContent) {
  const [data, setData] = useState<entryContent>(props.data.entry);

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
    <section className="relative overflow-hidden select-none">
      <div className="flex -mt-1px h-[calc(100vh+1px)]">
        <BaseImage
          mImg={data.storyChapterSixComponentBackgroundImage.imagemobile.url}
          pImg={data.storyChapterSixComponentBackgroundImage.imagepc.url}
          alt={data.storyChapterSixComponentBackgroundImage.altText}
          layout="fill"
          objectFit="fill"
          quality={100}
        ></BaseImage>
      </div>
      <div className="absolute top-0 left-0 bg-[50%] bg-no-repeat bg-contain w-full bg-[url('/assets/story/brand_story_chatper_06_line.png')]  h-screen"></div>
      <div
        className={`absolute top-[calc(15vh)] right-100px flex justify-center w-full flex-col items-end mobile:top-154px mobile:right-25px transition-all ease-in-out duration-500 delay-1000 ${
          isCurrentPage
            ? "top-197px pad:top-158px mobile:top-86px opacity-100"
            : "top-397px pad:top-358px mobile:top-286px opacity-0"
        }`}
      >
        <span className="text-white font-AlbertusNova-Regular uppercase leading-none text-34px pad:text-28px mobile:text-18px mobile:w-full mobile:text-right">
          {data.storyChapterSixComponentFirst}
        </span>
        <span className="text-[#d28656] font-AlbertusNova-Regular uppercase leading-none text-58px mt-60px pad:47px pad:mt-50px mobile:text-27px mobile:w-full mobile:my-20px mobile:text-right">
          {data.storyChapterSixComponentSecond}
        </span>
      </div>
      <div
        className={`absolute bg-white font-Grotesque text-[#262627] not-italic w-900px left-100px text-18px p-50px pad:text-13px pad:p-40px pad:left-120px pad:w-880px mobile:w-330px mobile:px-25px mobile:py-30px mobile:text-14px mobile:left-1/2 mobile:-ml-165px transition-all ease-in-out duration-500 delay-1000 ${
          isCurrentPage
            ? "top-450px pad:top-460px mobile:top-1/3 opacity-100"
            : "top-650px pad:top-660px mobile:top-2/3 opacity-0"
        }`}
      >
        <div
          className={`w-full absolute z-10 left-0 bottom-0 bg-white transition-all ease-in-out duration-500 delay-1500`}
        ></div>
        <div>{data.storyChapterSixComponentDescription}</div>
      </div>
      <div
        className={`absolute  z-10 w-full flex flex-col items-center justify-center transition-all ease-in-out duration-500 delay-1000 ${
          isCurrentPage
            ? "bottom-24px mobile:bottom-100px"
            : "-bottom-48px mobile:-bottom-48px"
        }`}
      >
        <div className="w-18px h-24px mobile:w-11px mobile:h-14px border-white border-2 inline-block border-solid rounded-full mb-5px relative before:w-2px before:h-5px mobile:before:w-2px mobile:before:h-5px before:bg-white before:absolute before:content-[''] before:left-6px before:top-5px mobile:before:left-4px mobile:before:top-3px before:animate-scrollMore"></div>
        <div className="text-12px leading-tight text-white font-Grotesque-Regular">
          {data.storyChapterSixComponentSlidingText}
        </div>
      </div>
      {/* <div className="absolute z-10 top-0 left-0 w-full bg-gradient-to-b from-[#000000] to-[#28282800] h-414px pad:h-331px mobile:h-0"></div> */}
    </section>
  );
}

export default StoryChapterSixComponent;

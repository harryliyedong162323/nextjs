"use client";

import React, { useEffect, useState, useCallback } from "react";
import BaseImage from "../base/image";

interface entryContent {
  isFullPage: boolean;
  pageNumber: number;
  currentPageNumber: number;
  storyChapterOneComponentTextContent: string;
  storyChapterOneComponentSlidingText: string;
  storyChapterOneComponentBackgroundImage: {
    altText: string;
    imagemobile: {
      url: string;
    }
    imagepc: {
      url: string;
    }
  }
}

export interface propsContent {
  changeNavStatus: Function;
  scrollToPage: Function;
  data: {
    entry: entryContent;
    name: string;
    type: string;
  };
}

function StoryChapterOneComponent(props: propsContent) {
  const [data, setData] = useState<entryContent>(props.data.entry);

  const [isFullPage] = useState<boolean>(props.data.entry.isFullPage || false)
  const [isCurrentPage, setIsCurrentPage] = useState<boolean>(false)

  useEffect(() => {
    if (isFullPage) {
      if (props.data.entry.currentPageNumber === props.data.entry.pageNumber) {
        setIsCurrentPage(true)
      } else {
        setIsCurrentPage(false)
      }
    }
  }, [isFullPage, props]);

  return (
    <section  id="WhatOthersSay" data-anchor={1} className="relative overflow-hidden select-none">
      <div className="flex -mt-1px h-[calc(100vh+1px)]">
        <BaseImage
            mImg={data.storyChapterOneComponentBackgroundImage.imagemobile.url}
            pImg={data.storyChapterOneComponentBackgroundImage.imagepc.url}
            alt={data.storyChapterOneComponentBackgroundImage.altText}
            layout="fill"
            objectFit="fill"
            quality={100}
          ></BaseImage>
      </div>
      <div className="absolute flex justify-center w-full top-294px pad:top-234px mobile:top-135px">
        <div className={`overflow-hidden text-white font-Grotesque-Regular text-center text-28px transition-all ease-in-out duration-500 delay-1000 h-0 ${isCurrentPage? "h-150px mobile:h-90px" : "h-0"} w-965px pad:text-20px pad:w-635px mobile:text-14px mobile:w-275px`}>
          <div>{ data.storyChapterOneComponentTextContent }</div>
        </div>
      </div>
      <div className={`absolute left-1/2 -ml-40px top-483px z-10 h-1/2 transition-all ease-in-out duration-500 delay-1000 ${ isCurrentPage ? 'opacity-100' : 'opacity-0'} mobile:-ml-20px mobile:top-244px mobile:object-left-top`}>
        <div className="absolute w-78px h-78px border-white border border-solid rounded-full flex items-center justify-center z-10 mobile:w-39px mobile:h-39px">
            <span className="inline-block w-12px h-12px rounded-full bg-white mobile:w-6px mobile:h-6px"></span>
        </div>
        <div className="absolute bg-[50%] bg-no-repeat bg-contain w-4px top-38px left-38px bg-[url('/assets/story/brand_story_chatper_01_line.png')] mobile:w-2px mobile:top-19px mobile:left-16px h-screen"></div>
      </div>
      <div
        className={`absolute  z-10 w-full flex flex-col items-center justify-center transition-all ease-in-out duration-500 delay-1000 ${
          isCurrentPage ? "bottom-24px mobile:bottom-100px" : "-bottom-48px mobile:-bottom-48px"
        }`}
      >
        <div className="w-18px h-24px mobile:w-11px mobile:h-14px border-white border-2 inline-block border-solid rounded-full mb-5px relative before:w-2px before:h-5px mobile:before:w-2px mobile:before:h-5px before:bg-white before:absolute before:content-[''] before:left-6px before:top-5px mobile:before:left-4px mobile:before:top-3px before:animate-scrollMore"></div>
        <div className="text-12px leading-tight text-white font-Grotesque-Regular">
          {data.storyChapterOneComponentSlidingText}
        </div>
      </div>
      <div className="absolute z-10 top-0 left-0 w-full bg-gradient-to-b from-[#282828] to-[#28282800] h-382px pad:h-320px mobile:h-0"></div>
      <div className="absolute z-10 bottom-0 left-0 w-full bg-gradient-to-t from-[#2828289c] to-[#28282800] h-280px pad:h-224px mobile:h-0"></div>
    </section>
  );
}

export default StoryChapterOneComponent;

"use client";

import React, { useEffect, useState, useCallback } from "react";
import BaseImage from "../base/image";

export interface entryContent {
  isFullPage: boolean;
  pageNumber: number;
  currentPageNumber: number;
  storyChapterThreeComponentDescription: string;
  storyChapterThreeComponentSlidingText: string;
  storyChapterThreeComponentBackgroundImage: {
    imagepc: {
      url: string;
    };
    imagemobile: {
      url: string;
    };
    altText: string;
  };
  storyChapterThreeComponentFaceImage: {
    imagepc: {
      url: string;
    };
    imagemobile: {
      url: string;
    };
    altText: string;
  };
}
import { TrackingTypeContent } from "@/utils/analytics";
interface propsContent {
  getPageStore: Function;
  updatePageStore: Function;
  changeNavStatus: Function;
  scrollToPage: Function;
  TrackingType: TrackingTypeContent;
  currentSlug: string;
  data: {
    entry: entryContent;
    name: string;
    type: string;
  };
}

function StoryChapterThreeComponent(props: propsContent) {
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
      <input
        type="hidden"
        value={props.TrackingType.scroll50}
        data-slug={props.currentSlug}
      />
      <div className="flex h-screen">
        <BaseImage
          mImg={data.storyChapterThreeComponentBackgroundImage.imagemobile.url}
          pImg={data.storyChapterThreeComponentBackgroundImage.imagepc.url}
          alt={data.storyChapterThreeComponentBackgroundImage.altText}
          layout="fill"
          objectFit="fill"
          quality={100}
        ></BaseImage>
      </div>
      <div className="absolute top-0 left-0 bg-[50%] bg-no-repeat bg-contain w-full bg-[url('/assets/story/brand_story_chatper_03_line.png')]  h-screen"></div>
      <div
        className={`absolute w-full flex flex-col items-center transition-all ease-in-out duration-500 delay-1000 ${
          isCurrentPage
            ? "opacity-100 top-152px pad:top-122px mobile:top-88px"
            : "opacity-0 top-400px"
        }`}
      >
        <div className="relative cursor-pointer z-10 w-825px h-420px pad:w-660px pad:h-335px mobile:relative mobile:w-330px mobile:h-264px mobile:left-0">
          <BaseImage
            mImg={data.storyChapterThreeComponentFaceImage.imagemobile.url}
            pImg={data.storyChapterThreeComponentFaceImage.imagepc.url}
            alt={data.storyChapterThreeComponentFaceImage.altText}
            layout="fill"
            objectFit="cover"
            quality={100}
          ></BaseImage>
        </div>

        <div className="relative bg-white font-Grotesque-Light text-[#262627]  leading-tight w-825px text-18px p-50px pad:w-660px pad:text-13px pad:p-40px mobile:w-330px mobile:relative mobile:px-25px mobile:py-30px mobile:text-14px mobile:right-0">
          <div
            className={`w-full absolute z-10 left-0 bottom-0 bg-white transition-all ease-in duration-500 delay-1500`}
          ></div>
          <div>{data.storyChapterThreeComponentDescription}</div>
        </div>
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
          {data.storyChapterThreeComponentSlidingText}
        </div>
      </div>
      <div className="absolute z-10 bottom-0 left-0 w-full bg-gradient-to-t from-[#000000] to-[#28282800] h-150px pad:h-100px mobile:h-0"></div>
    </section>
  );
}

export default StoryChapterThreeComponent;

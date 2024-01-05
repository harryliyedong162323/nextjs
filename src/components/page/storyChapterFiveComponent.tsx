"use client";

import React, { useEffect, useState, useCallback } from "react";
import BaseImage from "../base/image";

interface ComponentData {
  id: number;
  bg: {
    mImg: string;
    pImg: string;
  };
  avatar: {
    mImg: string;
    pImg: string;
  };
  description: string;
  scrollText: string;
}

const componentData: ComponentData = {
  id: 1,
  bg: {
    pImg: require("../../../public/assets/story/brand_story_chatper_05.png"),
    mImg: require("../../../public/assets/story/brand_story_chatper_05.png"),
  },
  avatar: {
    mImg: require("../../../public/assets/story/brand_story_chatper_05_face_big.png"),
    pImg: require("../../../public/assets/story/brand_story_chatper_05_face_big.png"),
  },
  description:
    "But wild wind-swept moorlands, savage waves breaking across jagged shorelines. And rolling mountains shrouded in mist.",
  scrollText: "Scroll to explore more",
};

function StoryChapterFiveComponent(props: any) {
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
    <section className="relative overflow-hidden select-none">
      <div className="flex h-screen">
        <BaseImage
          mImg={data.bg.mImg}
          pImg={data.bg.pImg}
          alt={""}
          layout="fill"
          objectFit="fill"
          quality={100}
        ></BaseImage>
      </div>
      <div className="absolute top-0 left-0 bg-[50%] bg-no-repeat bg-contain w-full bg-[url('/assets/story/brand_story_chatper_05_line.png')] h-screen"></div>
      <div
        className={`absolute left-1/2 flex flex-col items-center w-970px h-500px -ml-485px pad:w-775px pad:-ml-388px pad:h-400px mobile:w-325px mobile:-ml-163px transition-all ease-in-out duration-500 delay-1000 ${
          isCurrentPage
            ? "opacity-100 top-192px pad:top-154px mobile:top-200px"
            : "opacity-0 top-400px"
        }`}
      >
        <div className="absolute left-0 cursor-pointer z-10 w-630px h-500px pad:w-504px pad:h-400px mobile:relative mobile:w-330px mobile:h-264px mobile:left-0">
          <BaseImage
            mImg={data.avatar.mImg}
            pImg={data.avatar.pImg}
            alt={""}
            layout="fill"
            objectFit="cover"
            quality={100}
          ></BaseImage>
        </div>
        <div className="absolute right-0 z-10 bg-white font-Grotesque-Regular text-dark-grey w-470px text-20px p-50px top-214px pad:w-376px pad:text-16px pad:p-40px pad:top-172px mobile:w-330px mobile:relative mobile:px-25px mobile:py-30px mobile:text-14px mobile:top-0">
          <div
            className={`w-full absolute z-10 left-0 bottom-0 bg-white transition-all ease-in-out duration-500 delay-1500`}
          ></div>
          <div>{data.description}</div>
        </div>
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
      <div className="absolute z-10 top-0 left-0 w-full bg-gradient-to-b from-[#2828289c] to-[#28282800] h-225px pad:h-180px mobile:h-238px"></div>
      <div className="absolute z-10 bottom-0 left-0 w-full bg-gradient-to-t from-[#000000] to-[#28282800] h-414px pad:h-331px mobile:h-238px"></div>
    </section>
  );
}

export default StoryChapterFiveComponent;

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
    thrid: string;
  };
  description: string;
  scrollText: string;
  avatarOne: string;
  avatarTwo: string;
}

const componentData: ComponentData = {
  id: 1,
  bg: {
    pImg: require("../../../public/assets/story/brand_story_chatper_04.png"),
    mImg: require("../../../public/assets/story/brand_story_chatper_04.png"),
  },
  description:
    "Landscapes of Scotland, including the historic warehouses in the heart of Speyside and on the Ayrshire coast inspired William Grant & Sons Mlalt Master Distiller Brian Kinsman to create a range of Scotch whiskies that would invoke not gentle, picturesque glens, but the awe-inspiring landscapes of Scotland.",
  words: {
    first: "Inspired by, ",
    second: "Wild Landscapes,",
    thrid: "unbound by region.",
  },
  scrollText: "Scroll to explore more",
  avatarOne: require("../../../public/assets/story/brand_story_chatper_04_face.png"),
  avatarTwo: require("../../../public/assets/story/brand_story_chatper_04_face_big.png"),
};

function StoryChapterFourComponent(props: any) {
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

  const [isShow, setIsShow] = useState(false as boolean);
  useEffect(() => {
    console.log("change show", isShow);
  }, [isShow]);

  function showIntroduce(bl: boolean) {
    setIsShow(bl);
  }

  return (
    <section className="relative overflow-hidden select-none">
      <div className="flex -mt-1px h-[calc(100vh+1px)]">
        <BaseImage
          mImg={data.bg.mImg}
          pImg={data.bg.pImg}
          alt={""}
          layout="fill"
          objectFit="fill"
          quality={100}
        ></BaseImage>
      </div>
      <div className="absolute top-0 left-0 bg-[50%] bg-no-repeat bg-contain w-full bg-[url('/assets/story/brand_story_chatper_04_line.png')]  h-screen"></div>
      {!isShow && (
        <>
          <div
            className={`absolute flex justify-center w-full flex-col items-start left-100px mobile:left-25px mobile:top-180px transition-all ease-in-out duration-500 delay-1000 ${
              isCurrentPage
                ? "top-294px paid:top-254px mobile:top-86px opacity-100"
                : "top-494px paid:top-454px mobile:top-286px opacity-0"
            }`}
          >
            <span className="text-white font-AlbertusNova-Regular uppercase leading-none text-34px paid:text-27px mobile:text-20px mobile:w-full">
              {data.words.first}
            </span>
            <span className="text-[#d28656] font-AlbertusNova-Regular uppercase leading-none text-58px my-34px paid:text-46px paid:my-27px mobile:text-32px mobile:w-full mobile:my-20px">
              {data.words.second}
            </span>
            <span className="text-white font-AlbertusNova-Regular uppercase leading-none text-34px paid:text-27px mobile:text-20px mobile:w-full">
              {data.words.thrid}
            </span>
          </div>
          <span
            onClick={() => showIntroduce(true)}
            className={`absolute cursor-pointer w-300px h-300px top-244px left-902px paid:w-240px paid:h-240px paid:left-605px paid:top-195px mobile:left-1/2 mobile:top-1/2 mobile:-mt-88px mobile:w-177px mobile:h-177px mobile:-ml-88px transition-all ease-in-out duration-500 delay-1000 ${
              isCurrentPage ? "opacity-100" : "opacity-0"
            }`}
          >
            <BaseImage
              mImg={data.avatarOne}
              pImg={data.avatarOne}
              alt={""}
              layout="fill"
              objectFit="cover"
              quality={100}
            ></BaseImage>
          </span>
        </>
      )}

      {isShow && (
        <div
          className={`absolute w-[1134px] left-1/2 -ml-567px top-174px h-496px paid:w-906px paid:-ml-453px paid:h-398px mobile:w-330px mobile:-ml-165px mobile:pl-0 mobile:flex mobile:flex-col mobile:h-auto mobile:items-center`}
        >
          <div
            onClick={() => showIntroduce(false)}
            className={`absolute cursor-pointer z-20 right-0 w-575px h-388px paid:w-460px paid:h-310px mobile:relative mobile:w-330px mobile:h-264px mobile:left-0 mobile:top-0 transition-all ease-in-out duration-500 delay-1000 ${
              isCurrentPage
                ? "opacity-100 top-200px paid:top-160px"
                : "opacity-0 top-400px"
            }`}
          >
            <BaseImage
              mImg={data.avatarTwo}
              pImg={data.avatarTwo}
              alt={""}
              layout="fill"
              objectFit="cover"
              quality={100}
            ></BaseImage>
          </div>
          <div
            className={`overflow-hidden absolute left-0 top-0 bg-white font-GalanoGrotesque text-[#262627] leading-tight text-20px p-42px w-640px paid:text-16px paid:p-33px paid:w-512px mobile:w-330px mobile:relative mobile:px-25px mobile:py-30px mobile:text-14px mobile:right-0`}
          >
            <div
              className={`h-full absolute z-10 right-0 top-0 bg-white transition-all ease-in-out duration-500 delay-1000 ${
                isCurrentPage ? "w-0" : "w-640px paid:w-512px mobile:w-330px"
              }`}
            ></div>
            <div>{data.description}</div>
          </div>
        </div>
      )}
      <div
        className={`absolute z-20 w-full flex flex-col items-center justify-center transition-all ease-in-out duration-500 delay-1000 ${
          isCurrentPage ? "bottom-24px" : "-bottom-48px"
        }`}
      >
        <div className="w-18px h-24px border-white border-2 inline-block border-solid rounded-full mb-5px relative before:w-2px before:h-5px before:bg-white before:absolute before:content-[''] before:left-6px before:top-5px before:animate-scrollMore"></div>
        <div className="text-12px leading-tight text-white font-GalanoGrotesque">
          {data.scrollText}
        </div>
      </div>
      <div className="absolute z-10 top-0 left-0 w-full bg-gradient-to-b from-[#000000] to-[#28282800] h-160px paid:h-100px mobile:h-100px"></div>
      <div className="absolute z-10 bottom-0 left-0 w-full bg-gradient-to-t from-[#2828289c] to-[#28282800] h-225px paid:h-180px mobile:h-238px"></div>
    </section>
  );
}

export default StoryChapterFourComponent;

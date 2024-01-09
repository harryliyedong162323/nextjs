"use client";

import React, { useEffect, useState, useCallback } from "react";
import BaseImage from "../base/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

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
    mImg: require("../../../public/assets/story/brand_story_chatper_04_m.png"),
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
  const [fadeLock, setFadeLock] = useState(true);
  const [allowScroll, setAllowScroll] = useState(false);

  useEffect(() => {
    const fadeBox: HTMLElement = document.querySelector(
      "#fadeBox2"
    ) as HTMLElement;
    if (fadeBox) {
      fadeBox.onwheel = function (e) {
        if (fadeLock) {
          e.stopPropagation();
        }
      };
      document.ontouchmove = function (e) {
        if (fadeLock && isCurrentPage) {
          e.stopPropagation();
        }
      };
    }
  }, [fadeLock, isCurrentPage]);

  useEffect(() => {
    if (isFullPage) {
      setFadeLock(true);
      if (props.data.entry.currentPageNumber === props.data.entry.pageNumber) {
        setIsCurrentPage(true);
        setTimeout(() => {
          setAllowScroll(true);
        }, 1500);
      } else {
        setIsCurrentPage(false);
        setAllowScroll(false);
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

      <div className="absolute top-0 left-0 w-full h-screen" id="fadeBox2">
        <Swiper
          className="h-screen"
          modules={[EffectFade, Mousewheel]}
          effect={"fade"}
          speed={1000}
          fadeEffect={{
            crossFade: true,
          }}
          direction="vertical"
          mousewheel={true}
          onSlideChangeTransitionEnd={() => {
            setTimeout(() => {
              setFadeLock(false);
            }, 500);
          }}
          onSlideChangeTransitionStart={() => {
            setFadeLock(true);
          }}
          allowSlideNext={allowScroll}
          allowSlidePrev={allowScroll}
        >
          <SwiperSlide>
            <>
              <div
                className={`absolute flex justify-center w-full flex-col items-start left-100px mobile:left-25px mobile:top-180px transition-all ease-in-out duration-500 delay-1000 ${
                  isCurrentPage
                    ? "top-294px pad:top-360px mobile:top-86px opacity-100"
                    : "top-494px pad:top-454px mobile:top-286px opacity-0"
                }`}
              >
                <span className="text-white font-AlbertusNova-Regular uppercase leading-none text-34px pad:text-27px mobile:text-20px mobile:w-full">
                  {data.words.first}
                </span>
                <span className="text-[#d28656] font-AlbertusNova-Regular uppercase leading-none text-58px my-34px pad:text-46px pad:my-27px mobile:text-32px mobile:w-full mobile:my-20px">
                  {data.words.second}
                </span>
                <span className="text-white font-AlbertusNova-Regular uppercase leading-none text-34px pad:text-27px mobile:text-20px mobile:w-full">
                  {data.words.thrid}
                </span>
              </div>
              <span
                onClick={() => showIntroduce(true)}
                className={`absolute cursor-pointer w-300px h-300px top-244px right-600px pad:w-340px pad:h-340px pad:right-580px pad:top-300px mobile:left-1/2 mobile:top-1/2 mobile:-mt-88px mobile:w-177px mobile:h-177px mobile:-ml-88px transition-all ease-in-out duration-500 delay-1000 ${
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
          </SwiperSlide>

          <SwiperSlide>
            <div
              className={`absolute w-[1692px] left-1/2 -ml-900px top-174px h-496px pad:w-906px pad:-ml-453px pad:h-398px mobile:w-330px mobile:-ml-165px mobile:mt-88px mobile:pl-0 mobile:flex mobile:flex-col mobile:h-auto mobile:items-center`}
            >
              <div
                onClick={() => showIntroduce(false)}
                className={`absolute cursor-pointer z-20 right-0 w-828px h-558px pad:w-460px pad:h-310px mobile:relative mobile:w-330px mobile:h-264px mobile:left-0 mobile:top-0 transition-all ease-in-out duration-500 delay-1000 ${
                  isCurrentPage
                    ? "opacity-100 top-100px pad:top-160px"
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
                className={`overflow-hidden absolute left-0 top-0 bg-white font-GalanoGrotesque text-[#262627] leading-tight text-20px py-72px px-94px w-914px pad:text-16px pad:p-33px pad:w-512px mobile:w-330px mobile:relative mobile:px-25px mobile:py-30px mobile:text-14px mobile:right-0`}
              >
                <div
                  className={`h-full absolute z-10 right-0 top-0 bg-white transition-all ease-in-out duration-500 delay-1000 ${
                    isCurrentPage ? "w-0" : "w-640px pad:w-512px mobile:w-330px"
                  }`}
                ></div>
                <div>{data.description}</div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* {!isShow && (
        <>
          <div
            className={`absolute flex justify-center w-full flex-col items-start left-100px mobile:left-25px mobile:top-180px transition-all ease-in-out duration-500 delay-1000 ${
              isCurrentPage
                ? "top-294px pad:top-360px mobile:top-86px opacity-100"
                : "top-494px pad:top-454px mobile:top-286px opacity-0"
            }`}
          >
            <span className="text-white font-AlbertusNova-Regular uppercase leading-none text-34px pad:text-27px mobile:text-20px mobile:w-full">
              {data.words.first}
            </span>
            <span className="text-[#d28656] font-AlbertusNova-Regular uppercase leading-none text-58px my-34px pad:text-46px pad:my-27px mobile:text-32px mobile:w-full mobile:my-20px">
              {data.words.second}
            </span>
            <span className="text-white font-AlbertusNova-Regular uppercase leading-none text-34px pad:text-27px mobile:text-20px mobile:w-full">
              {data.words.thrid}
            </span>
          </div>
          <span
            onClick={() => showIntroduce(true)}
            className={`absolute cursor-pointer w-300px h-300px top-244px right-600px pad:w-340px pad:h-340px pad:right-580px pad:top-300px mobile:left-1/2 mobile:top-1/2 mobile:-mt-88px mobile:w-177px mobile:h-177px mobile:-ml-88px transition-all ease-in-out duration-500 delay-1000 ${
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
          className={`absolute w-[1134px] left-1/2 -ml-567px top-174px h-496px pad:w-906px pad:-ml-453px pad:h-398px mobile:w-330px mobile:-ml-165px mobile:pl-0 mobile:flex mobile:flex-col mobile:h-auto mobile:items-center`}
        >
          <div
            onClick={() => showIntroduce(false)}
            className={`absolute cursor-pointer z-20 right-0 w-575px h-388px pad:w-460px pad:h-310px mobile:relative mobile:w-330px mobile:h-264px mobile:left-0 mobile:top-0 transition-all ease-in-out duration-500 delay-1000 ${
              isCurrentPage
                ? "opacity-100 top-200px pad:top-160px"
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
            className={`overflow-hidden absolute left-0 top-0 bg-white font-GalanoGrotesque text-[#262627] leading-tight text-20px p-42px w-640px pad:text-16px pad:p-33px pad:w-512px mobile:w-330px mobile:relative mobile:px-25px mobile:py-30px mobile:text-14px mobile:right-0`}
          >
            <div
              className={`h-full absolute z-10 right-0 top-0 bg-white transition-all ease-in-out duration-500 delay-1000 ${
                isCurrentPage ? "w-0" : "w-640px pad:w-512px mobile:w-330px"
              }`}
            ></div>
            <div>{data.description}</div>
          </div>
        </div>
      )} */}
      <div
        className={`absolute  z-10 w-full flex flex-col items-center justify-center transition-all ease-in-out duration-500 delay-1000 ${
          isCurrentPage
            ? "bottom-24px mobile:bottom-100px"
            : "-bottom-48px mobile:-bottom-48px"
        }`}
      >
        <div className="w-18px h-24px mobile:w-11px mobile:h-14px border-white border-2 inline-block border-solid rounded-full mb-5px relative before:w-2px before:h-5px mobile:before:w-2px mobile:before:h-5px before:bg-white before:absolute before:content-[''] before:left-6px before:top-5px mobile:before:left-4px mobile:before:top-3px before:animate-scrollMore"></div>
        <div className="text-12px leading-tight text-white font-Grotesque-Regular">
          {data.scrollText}
        </div>
      </div>
      <div className="absolute z-10 top-0 left-0 w-full bg-gradient-to-b from-[#000000] to-[#28282800] h-160px pad:h-100px mobile:h-0"></div>
      <div className="absolute z-10 bottom-0 left-0 w-full bg-gradient-to-t from-[#2828289c] to-[#28282800] h-225px pad:h-180px mobile:h-0"></div>
    </section>
  );
}

export default StoryChapterFourComponent;

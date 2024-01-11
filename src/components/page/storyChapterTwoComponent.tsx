"use client";

import React, { useEffect, useState, useCallback } from "react";
import BaseImage from "../base/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

interface entryContent {
  isFullPage: boolean;
  pageNumber: number;
  currentPageNumber: number;
  sys: {
    id: string;
  };
  storyChapterTwoComponentDescription: string;
  storyChapterTwoComponentFirst: string;
  storyChapterTwoComponentSecond: string;
  storyChapterTwoComponentThird: string;
  storyChapterTwoComponentFourth: string;
  storyChapterTwoComponentFifth: string;
  storyChapterTwoComponentSlidingText: string;
  storyChapterTwoComponentBackgroundImage: {
    imagepc: {
      url: string;
    };
    imagemobile: {
      url: string;
    };
    altText: string;
  };
  storyChapterTwoComponentFaceImage: {
    imagepc: {
      url: string;
    };
    imagemobile: {
      url: string;
    };
    altText: string;
  };
  chapterTwoFaceImageTwo: {
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

function StoryChapterTwoComponent(props: propsContent) {
  const [data, setData] = useState<entryContent>(props.data.entry);

  const [textGradient, setTextGradient] = useState({
    background: "linear-gradient(to left, #ffbb56, #883a17)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  } as React.CSSProperties);

  const [isFullPage] = useState<boolean>(props.data.entry.isFullPage || false);
  const [isCurrentPage, setIsCurrentPage] = useState<boolean>(false);
  // const [fadeLock, setFadeLock] = useState(true);
  const [allowScroll, setAllowScroll] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // useEffect(() => {
  //   const fadeBox: HTMLElement = document.querySelector(
  //     "#fadeBox"
  //   ) as HTMLElement;
  //   if (fadeBox) {
  //     // fadeBox.onwheel = function (e) {
  //     // if (fadeLock) {
  //     //   e.stopPropagation();
  //     // }
  //     // };
  //     document.ontouchmove = function (e) {
  //       if (fadeLock && isCurrentPage) {
  //         e.stopPropagation();
  //       }
  //     };
  //   }
  // }, [fadeLock, isCurrentPage]);

  useEffect(() => {
    if (isFullPage) {
      // setFadeLock(true);
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
    <section
      id="StoryChapterTwo"
      className="relative overflow-hidden select-none"
    >
      <div className="flex h-screen">
        <BaseImage
          mImg={data.storyChapterTwoComponentBackgroundImage?.imagemobile?.url}
          pImg={data.storyChapterTwoComponentBackgroundImage?.imagepc?.url}
          alt={data.storyChapterTwoComponentBackgroundImage?.altText}
          layout="fill"
          objectFit="fill"
          quality={100}
        ></BaseImage>
      </div>
      <div className="absolute top-0 left-0 bg-[50%] bg-no-repeat bg-contain w-full bg-[url('/assets/story/brand_story_chatper_02_line.png')]  h-screen"></div>

      <div className="absolute top-0 left-0 w-full h-screen" id="fadeBox">
        <Swiper
          className="h-screen"
          modules={[Mousewheel, Parallax]}
          parallax={true}
          speed={1000}
          fadeEffect={{
            crossFade: true,
          }}
          nested={true}
          direction="vertical"
          mousewheel={true}
          allowTouchMove={true}
          onSlideChangeTransitionEnd={() => {
            // setTimeout(() => {
            //   setFadeLock(false);
            // }, 500);
          }}
          onSlideChangeTransitionStart={(e) => {
            // setFadeLock(true);
            setCurrentSlideIndex(e.realIndex);
          }}
          allowSlideNext={allowScroll}
          allowSlidePrev={allowScroll}
        >
          <SwiperSlide className="overflow-hidden">
            <>
              <div
                className={`absolute w-full transition-all ease-in-out duration-500 delay-1000 ${
                  isCurrentPage && currentSlideIndex === 0
                    ? "top-135px pad:top-120px mobile:top-86px opacity-100"
                    : "top-300px pad:top-280px mobile:top-260px opacity-0"
                }`}
                data-swiper-parallax={100}
                data-swiper-parallax-opacity={0}
              >
                <div
                  className={`flex justify-center items-baseline mobile:flex-col mobile:items-start mobile:pl-40px`}
                >
                  <span className="text-white font-AlbertusNova-Regular uppercase text-30px pad:text-24px mobile:text-17px mobile:w-full">
                    {data.storyChapterTwoComponentFirst}
                  </span>
                  <span className="flex justify-center items-baseline mx-10px mobile:mx-0">
                    <span style={textGradient} className="font-AlbertusNova-Light text-[#d18350] text-[160px] leading-none mobile:text-[95px]">
                      {data.storyChapterTwoComponentSecond}
                    </span>
                    <span style={textGradient} className="font-AlbertusNova-Regular text-[#d18350] text-42px">
                      {" "}
                      {data.storyChapterTwoComponentThird}
                    </span>
                  </span>
                  <span className="text-white font-AlbertusNova-Regular uppercase text-30px pad:text-24px mobile:text-17px mobile:w-full">
                    {data.storyChapterTwoComponentFourth}
                  </span>
                </div>
                <div className="flex justify-center text-white font-AlbertusNova-Regular uppercase text-30px pad:text-24px mobile:text-17px mobile:justify-start mobile:mt-10px mobile:pl-40px">
                  {" "}
                  {data.storyChapterTwoComponentFifth}
                </div>
              </div>
              <span
                onClick={() => showIntroduce(true)}
                className={`absolute bg-[url('/assets/story/brand_story_chatper_02_face.png')]  bg-cover top-1/2 left-1/2 cursor-pointer transition-all ease-in-out duration-500 delay-1000 ${
                  isCurrentPage && currentSlideIndex === 0
                    ? "opacity-100"
                    : "opacity-0"
                } w-295px h-295px -ml-148px pad:w-300px pad:h-300px mobile:w-177px mobile:h-177px mobile:-ml-88px`}
              >
                <BaseImage
                  mImg={
                    data.storyChapterTwoComponentFaceImage?.imagemobile?.url
                  }
                  pImg={data.storyChapterTwoComponentFaceImage?.imagepc?.url}
                  alt={data.storyChapterTwoComponentFaceImage?.altText}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                ></BaseImage>
              </span>
            </>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden">
            <div
              className={`absolute w-[1364px] left-1/2 -ml-647px top-174px h-471px pad:w-906px pad:-ml-453px pad:h-315px mobile:w-330px mobile:-ml-165px mobile:mt-88px mobile:pl-0 mobile:flex mobile:flex-col mobile:h-auto mobile:items-center`}
              data-swiper-parallax={100}
              data-swiper-parallax-opacity={0}
            >
              <div
                onClick={() => showIntroduce(false)}
                className={`absolute cursor-pointer z-20 left-0 w-632px h-422px pad:w-422px pad:h-282px mobile:relative mobile:w-330px mobile:h-264px mobile:left-0 transition-all ease-in-out duration-500 delay-1000 ${
                  isCurrentPage && currentSlideIndex === 1
                    ? "opacity-100 top-0"
                    : "opacity-0 top-200px"
                }`}
              >
                <BaseImage
                  mImg={data.chapterTwoFaceImageTwo?.imagemobile.url}
                  pImg={data.chapterTwoFaceImageTwo?.imagepc.url}
                  alt={data.chapterTwoFaceImageTwo?.altText}
                  layout="fill"
                  objectFit="fill"
                  quality={100}
                ></BaseImage>
              </div>
              <div
                className={`overflow-hidden absolute right-0 bottom-0 bg-white font-Grotesque-Light text-[#262627] leading-tight text-20px p-42px px-66px w-769px pad:text-16px pad:p-33px pad:w-512px mobile:w-330px mobile:relative mobile:px-25px mobile:py-30px mobile:text-14px mobile:right-0`}
              >
                <div
                  className={`h-full absolute z-10 right-0 top-0 bg-white transition-all ease-in-out duration-11500 delay-1000 ${
                    isCurrentPage && currentSlideIndex === 1
                      ? "w-0"
                      : "w-1000px pad:w-1000px mobile:w-330px"
                  }`}
                ></div>
                <div>{data.storyChapterTwoComponentDescription}</div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
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
          {data.storyChapterTwoComponentSlidingText}
        </div>
      </div>
      <div className="absolute z-10 top-0 left-0 w-full h-382px bg-gradient-to-b from-[#2828289c] to-[#28282800] pad:h-320px mobile:h-0"></div>
    </section>
  );
}

export default StoryChapterTwoComponent;

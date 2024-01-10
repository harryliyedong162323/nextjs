"use client";

import React, { useEffect, useState, useCallback } from "react";
import BaseImage from "../base/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, EffectFade, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

interface entryContent {
  isFullPage: boolean;
  pageNumber: number;
  currentPageNumber: number;
  sys: {
    id: string;
  };
  storyChapterFourComponentDescription: string;
  storyChapterFourComponentFirst: string;
  storyChapterFourComponentSecond: string;
  storyChapterFourComponentThird: string;
  storyChapterFourComponentSlidingText: string;
  storyChapterFourComponentBackgroundImage: {
    imagepc: {
      url: string;
    };
    imagemobile: {
      url: string;
    };
    altText: string;
  };
  storyChapterFourComponentFaceImage: {
    imagepc: {
      url: string;
    };
    imagemobile: {
      url: string;
    };
    altText: string;
  };
  chapterFourFaceImageTwo: {
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
  getPageStore:Function,
  updatePageStore:Function,
  changeNavStatus: Function;
  scrollToPage: Function;
  data: {
    entry: entryContent;
    name: string;
    type: string;
  };
}

function StoryChapterFourComponent(props: propsContent) {
  const [data, setData] = useState<entryContent>(props.data.entry);

  const [isFullPage] = useState<boolean>(props.data.entry.isFullPage || false);
  const [isCurrentPage, setIsCurrentPage] = useState<boolean>(false);
  // const [fadeLock, setFadeLock] = useState(true);
  const [allowScroll, setAllowScroll] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // useEffect(() => {
  //   const fadeBox: HTMLElement = document.querySelector(
  //     "#fadeBox2"
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
    <section className="relative overflow-hidden select-none">
      <div className="flex -mt-1px h-[calc(100vh+1px)]">
        <BaseImage
          mImg={data.storyChapterFourComponentBackgroundImage.imagemobile.url}
          pImg={data.storyChapterFourComponentBackgroundImage.imagepc.url}
          alt={data.storyChapterFourComponentBackgroundImage.altText}
          layout="fill"
          objectFit="fill"
          quality={100}
        ></BaseImage>
      </div>
      <div className="absolute top-0 left-0 bg-[50%] bg-no-repeat bg-contain w-full bg-[url('/assets/story/brand_story_chatper_04_line.png')]  h-screen"></div>

      <div className="absolute top-0 left-0 w-full h-screen" id="fadeBox2">
        <Swiper
          className="h-screen"
          modules={[Parallax, Mousewheel]}
          parallax={true}
          speed={1000}
          nested={true}
          fadeEffect={{
            crossFade: true,
          }}
          direction="vertical"
          mousewheel={true}
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
          <SwiperSlide>
            <>
              <div
                className={`absolute flex justify-center w-full flex-col items-start left-100px mobile:left-25px mobile:top-180px transition-all ease-in-out duration-500 delay-1000 ${
                  isCurrentPage && currentSlideIndex === 0
                    ? "top-294px pad:top-360px mobile:top-86px opacity-100"
                    : "top-494px pad:top-454px mobile:top-286px opacity-0"
                }`}
                data-swiper-parallax={100}
                data-swiper-parallax-opacity={0}
              >
                <span className="text-white font-AlbertusNova-Regular uppercase leading-none text-34px pad:text-27px mobile:text-20px mobile:w-full">
                  {data.storyChapterFourComponentFirst}
                </span>
                <span className="text-[#d28656] font-AlbertusNova-Regular uppercase leading-none text-58px my-34px pad:text-46px pad:my-27px mobile:text-32px mobile:w-full mobile:my-20px">
                  {data.storyChapterFourComponentSecond}
                </span>
                <span className="text-white font-AlbertusNova-Regular uppercase leading-none text-34px pad:text-27px mobile:text-20px mobile:w-full">
                  {data.storyChapterFourComponentThird}
                </span>
              </div>
              <span
                onClick={() => showIntroduce(true)}
                className={`absolute cursor-pointer w-433px h-433px top-244px right-403px pad:w-340px pad:h-340px pad:top-300px mobile:left-1/2 mobile:top-1/2 mobile:-mt-88px mobile:w-177px mobile:h-177px mobile:-ml-88px transition-all ease-in-out duration-500 delay-1000 ${
                  isCurrentPage && currentSlideIndex === 0
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              >
                <BaseImage
                  mImg={data.storyChapterFourComponentFaceImage.imagemobile.url}
                  pImg={data.storyChapterFourComponentFaceImage.imagepc.url}
                  alt={data.storyChapterFourComponentFaceImage.altText}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                ></BaseImage>
              </span>
            </>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className={`absolute w-[1692px] left-1/2 -ml-900px top-174px h-496px mobile:w-330px mobile:-ml-165px mobile:mt-88px mobile:pl-0 mobile:flex mobile:flex-col mobile:h-auto mobile:items-center`}
              data-swiper-parallax={100}
              data-swiper-parallax-opacity={0}
            >
              <div
                onClick={() => showIntroduce(false)}
                className={`absolute cursor-pointer z-20 right-0 w-828px h-558px mobile:relative mobile:w-330px mobile:h-264px mobile:left-0 mobile:top-0 transition-all ease-in-out duration-500 delay-1000 ${
                  isCurrentPage && currentSlideIndex === 1
                    ? "opacity-100 top-100px pad:top-160px"
                    : "opacity-0 top-400px"
                }`}
              >
                <BaseImage
                  mImg={data.chapterFourFaceImageTwo.imagemobile.url}
                  pImg={data.chapterFourFaceImageTwo.imagepc.url}
                  alt={data.chapterFourFaceImageTwo.altText}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                ></BaseImage>
              </div>
              <div
                className={`overflow-hidden absolute left-0 top-0 bg-white font-Grotesque-Light text-[#262627] leading-tight text-20px py-72px px-94px w-914px pad:text-16px mobile:w-330px mobile:relative mobile:px-25px mobile:py-30px mobile:text-14px mobile:right-0`}
              >
                <div
                  className={`h-full absolute z-10 right-0 top-0 bg-white transition-all ease-in-out duration-500 delay-1000 ${
                    isCurrentPage && currentSlideIndex === 1
                      ? "w-0"
                      : "w-1000px pad:w-1000px mobile:w-330px"
                  }`}
                ></div>
                <div>{data.storyChapterFourComponentDescription}</div>
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
          {data.storyChapterFourComponentSlidingText}
        </div>
      </div>
      <div className="absolute z-10 top-0 left-0 w-full bg-gradient-to-b from-[#000000] to-[#28282800] h-160px pad:h-100px mobile:h-0"></div>
      <div className="absolute z-10 bottom-0 left-0 w-full bg-gradient-to-t from-[#2828289c] to-[#28282800] h-225px pad:h-180px mobile:h-0"></div>
    </section>
  );
}

export default StoryChapterFourComponent;

"use client";

import React, { useEffect, useState, useCallback } from "react";
import BaseImage from "@/components/base/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper from "react-id-swiper";
import { EffectCreative, Parallax } from 'swiper/modules';
import "swiper/css";

export interface entryContent {
  isFullPage: boolean;
  pageNumber: number;
  currentPageNumber: number;
  storyOpeningTitle: string
  storyOpeningDescription: string;
  storyOpeningScrollText: string;
  storyOpeningComponentCarouselCollection: {
    items: Array<{
      sys: {
        id: string
      }
      backgroundImage: {
        altText: string;
        imagemobile: {
          url: string;
        }
        imagepc: {
          url: string;
        }
      }
    }>
  }
}

interface propsContent {
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
interface SwiperContent {
  width:number,
  slideToLoop(index: number, speed?: number,flag?:boolean):void;
  slideNext(): void;
  slidePrev(): void;
  slideTo(index: number, speed?: number): void;
  update(): void;
  destroy(deleteInstance?: boolean, cleanStyles?: boolean): void;
  // 其他 Swiper 相关的属性和方法
}
function StoryOpeningComponent(props: propsContent) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState<entryContent>(props.data.entry);

  const [isFullPage] = useState<boolean>(props.data.entry.isFullPage || false);
  const [isCurrentPage, setIsCurrentPage] = useState<boolean>(false);
  const [swiper, setSwiper] = useState<SwiperContent | null>(null);

  const parallaxAmount = swiper ? swiper.width * 1 : 0;

  useEffect(() => {
    if (isFullPage) {
      if (props.data.entry.currentPageNumber === props.data.entry.pageNumber) {
        setIsCurrentPage(true);
      } else {
        setIsCurrentPage(false);
      }
    }
  }, [isFullPage, props])

  const scrollTo = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      swiper?.slideToLoop(index, 500, true);
    },
    [swiper]
  );

  return (
    <section
      id="ADropOfWildness"
      data-anchor={0}
      className="relative overflow-hidden select-none h-screen"
    >
      <Swiper
        modules={[Autoplay, Parallax]}
        loop={true}
        speed={1000}
        allowTouchMove={true}
        autoplay={{
          delay: 3000, // 自动播放的间隔时间（以毫秒为单位）
          disableOnInteraction: false, // 用户互动后是否停止自动播放
        }}
        grabCursor={true}
        effect="slide"
        parallax={true}
        spaceBetween="0"
        centeredSlides= {true}
        onSlideChangeTransitionStart={(e) => {
          setCurrentIndex(e.realIndex);
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
      >
        {data.storyOpeningComponentCarouselCollection.items.map((item, key) => {
          return (
            <SwiperSlide key={key} className="flex relative overflow-hidden">
              <div className="absolute h-screen w-full left-0 top-0" data-swiper-parallax={parallaxAmount}>
                <BaseImage
                  mImg={item.backgroundImage.imagemobile.url}
                  pImg={item.backgroundImage.imagepc.url}
                  alt={item.backgroundImage.altText}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                ></BaseImage>
              </div>
              <div className="relative h-screen"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="absolute z-10 flex justify-center w-full top-144px pad:top-115px mobile:top-86px">
        <span className="bg-[url('/assets/wildmoor_white.png')] inline-block bg-cover w-456px h-74px pad:w-365px pad:h-59px mobile:w-274px mobile:h-44px"></span>
      </div>
      <div
        className={`absolute z-10 w-full flex items-center flex-col justify-center text-white bottom-180px pad:bottom-140px mobile:bottom-220px`}
      >
        <div
          className={`overflow-hidden font-AlbertusNova-Regular text-26px uppercase mb-20px pad:text-18px mobile:text-13px mobile:mb-20px transition-all ease-in-out duration-500 delay-500 h-0 ${
            isCurrentPage ? "h-80px" : "h-0"
          }`}
        >
          <div>{data.storyOpeningTitle}</div>
        </div>
        <div
          className={`overflow-hidden font-AlbertusNova-Light text-center uppercase transition-all ease-in-out duration-500 delay-1000 h-0 ${
            isCurrentPage ? "h-60px pad:h-60px mobile:h-54px" : "h-0"
          } text-40px pad:text-28px mobile:leading-[27px] mobile:w-300px mobile:text-20px`}
        >
          <div>{data.storyOpeningDescription}</div>
        </div>
      </div>
      <div
        className={`absolute  z-10 w-full flex flex-col items-center justify-center transition-all ease-in-out duration-500 delay-1000 ${
          isCurrentPage ? "bottom-24px mobile:bottom-100px" : "-bottom-48px mobile:-bottom-48px"
        }`}
      >
        <div className="w-18px h-24px mobile:w-11px mobile:h-14px border-white border-2 inline-block border-solid rounded-full mb-5px relative before:w-2px before:h-5px mobile:before:w-2px mobile:before:h-5px before:bg-white before:absolute before:content-[''] before:left-6px before:top-5px mobile:before:left-4px mobile:before:top-3px before:animate-scrollMore"></div>
        <div className="text-12px leading-tight text-white font-Grotesque-Regular">
          {data.storyOpeningScrollText}
        </div>
      </div>
      <div className="absolute z-20 w-full h-20px flex items-center justify-center bottom-140px pad:bottom-100px mobile:bottom-190px">
        {data.storyOpeningComponentCarouselCollection.items.map((item, key) => {
          return (
            <div
              key={key}
              className={`relative inline-block z-10 h-5px mx-5px rounded-tr-10px rounded-bl-10px cursor-pointer mobile:h-5px mobile:mx-5px mobile:rounded-tr-10px mobile:rounded-bl-10px  ${
                currentIndex === key ? "bg-white w-50px mobile:w-25px" : "bg-gray-300 w-20px mobile:w-10px"
              }`}
              onClick={() => scrollTo(key)}
            ></div>
          );
        })}
      </div>
      <div className="absolute z-10 bottom-0 left-0 w-full bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] h-160px pad:h-100px mobile:h-0"></div>
    </section>
  );
}

export default StoryOpeningComponent;

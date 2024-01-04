"use client";

import React, { useEffect, useState, useCallback } from "react";
import BaseImage from "@/components/base/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper from "react-id-swiper";
import { EffectCreative } from 'swiper/modules';
import "swiper/css";

interface bg {
  pImg: string;
  mImg: string;
}
interface ComponentData {
  id: number;
  title: string;
  description: string;
  scrollText: string;
  bgList: Array<bg>;
}

const componentData: ComponentData = {
  id: 1,
  title: "OUR STORY",
  description: "A drop of wilderness in every glass.",
  scrollText: "Scroll to explore more",
  bgList: [
    {
      pImg: require("../../../public/assets/story/brand_story_bannner.png"),
      mImg: require("../../../public/assets/story/brand_story_bannner.png"),
    },
    {
      pImg: require("../../../public/assets/productFamily/kv-2.png"),
      mImg: require("../../../public/assets/productFamily/kv-m.png"),
    },
    {
      pImg: require("../../../public/assets/productFamily/kv-3.png"),
      mImg: require("../../../public/assets/productFamily/kv-m.png"),
    },
  ],
};

function StoryOpeningComponent(props: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState<ComponentData>(componentData);

  const [isFullPage] = useState<boolean>(props.data.entry.isFullPage || false);
  const [isCurrentPage, setIsCurrentPage] = useState<boolean>(false);
  const [swiper, setSwiper] = useState<any>(null);

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
      console.log(index)
      setCurrentIndex(index);
      swiper.slideTo(index, 500, true)
    }, [swiper]
  );

  return (
    <div
      id="ADropOfWildness"
      data-anchor={0}
      className="relative overflow-hidden select-none"
    >
      <Swiper
        modules={[Autoplay, EffectCreative]}
        loop={true}
        speed={1000}
        allowTouchMove={true}
        autoplay={{
          delay: 3000, // 自动播放的间隔时间（以毫秒为单位）
          disableOnInteraction: false, // 用户互动后是否停止自动播放
        }}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['0%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        onSlideChange={(e) => {
          setCurrentIndex(e.realIndex);
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
      >
        {data.bgList.map((item, key) => {
          return (
            <SwiperSlide key={key}>
              <div className="relative h-screen">
                <BaseImage
                  mImg={item.mImg}
                  pImg={item.pImg}
                  alt={""}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                ></BaseImage>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="absolute z-10 flex justify-center w-full top-144px paid:top-115px mobile:top-86px">
        <span className="bg-[url('/assets/wildmoor_white.png')] inline-block bg-cover w-456px h-74px paid:w-365px paid:h-59px mobile:w-274px mobile:h-44px"></span>
      </div>
      <div
        className={`absolute z-10 w-full flex items-center flex-col justify-center text-white bottom-180px paid:bottom-140px mobile:bottom-160px`}
      >
        <div
          className={`overflow-hidden font-AlbertusNova-Regular text-26px uppercase mb-20px paid:text-18px mobile:text-13px transition-all ease-in-out duration-500 delay-500 h-0 ${
            isCurrentPage ? "h-32px" : "h-0"
          }`}
        >
          <div>{data.title}</div>
        </div>
        <div
          className={`overflow-hidden font-AlbertusNova-Light text-center uppercase transition-all ease-in-out duration-500 delay-1000 h-0 ${
            isCurrentPage ? "h-48px mobile:h-54px" : "h-0"
          } text-40px paid:text-28px mobile:leading-[27px] mobile:w-325px mobile:text-20px`}
        >
          <div>{data.description}</div>
        </div>
      </div>
      <div
        className={`absolute  z-10 w-full flex flex-col items-center justify-center transition-all ease-in-out duration-500 delay-1000 ${
          isCurrentPage ? "bottom-24px" : "-bottom-48px"
        }`}
      >
        <div className="w-18px h-24px border-white border-2 inline-block border-solid rounded-full mb-5px relative before:w-2px before:h-5px before:bg-white before:absolute before:content-[''] before:left-6px before:top-5px before:animate-scrollMore"></div>
        <div className="text-12px leading-tight text-white font-Grotesque-Regular">
          {data.scrollText}
        </div>
      </div>
      <div className="absolute z-20 w-full h-20px flex items-center justify-center bottom-140px paid:bottom-100px mobile:bottom-120px">
        {data.bgList.map((item, key) => {
          return (
            <div
              key={key}
              className={`relative z-10 h-5px mx-5px inline-block rounded-tr-10px rounded-bl-10px cursor-pointer ${
                currentIndex === key ? "bg-white w-50px" : "bg-gray-300 w-20px"
              }`}
              // onClick={() => scrollTo(key)}
            ></div>
          );
        })}
      </div>
      <div className="absolute z-10 bottom-0 left-0 w-full bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] h-160px paid:h-100px mobile:h-100px"></div>
    </div>
  );
}

export default StoryOpeningComponent;

"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Mousewheel, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { ISlideConfig } from "react-page-slides";
interface SwiperContent {
  slideNext(): void;
  slidePrev(): void;
  slideTo(index: number, speed?: number): void;
  update(): void;
  destroy(deleteInstance?: boolean, cleanStyles?: boolean): void;
  // 其他 Swiper 相关的属性和方法
}

interface Params {
  // [key: string]: any;
  slides: ISlideConfig[];
  transitionSpeed: number;
  enableAutoScroll: boolean;
  currentSlideIndex: number;
  onChange: Function;
  parallax: {
    offset: number;
    type: string;
  };
  freeMode: boolean;
}

const FullPageSwiper = function (params: Params) {
  const {
    enableAutoScroll,
    transitionSpeed,
    currentSlideIndex,
    slides,
    parallax,
    onChange,
    freeMode,
  }: Params = params;
  const [pageSwiper, setPageSwiper] = useState<SwiperContent | null>(null);
  const [swiperHeight, setSwiperHeight] = useState(window.innerHeight);

  useEffect(() => {
    if (freeMode) return;
    pageSwiper && pageSwiper.slideTo(params.currentSlideIndex);
  }, [params, pageSwiper]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSwiperHeight(window.innerHeight);
    }
  }, []);

  useEffect(() => {
    const resizeHandler = () => {
      setSwiperHeight(window.innerHeight);
      pageSwiper && pageSwiper.update();
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [pageSwiper]);

  return (
    <>
      {/* <div>testing</div> */}
      <Swiper
        direction="vertical"
        className="-mt-1px"
        modules={[Mousewheel, FreeMode]}
        freeMode={freeMode}
        mousewheel={{
          thresholdDelta: 120,
        }}
        observer={true}
        observeParents={true}
        speed={transitionSpeed}
        autoHeight={true}
        height={swiperHeight}
        autoplay={enableAutoScroll}
        onSwiper={(e) => {
          setPageSwiper(e);
        }}
        // onSlideChangeTransitionStart={(e) => {
        //   onChange(e.realIndex);
        // }}
        onSlideChange={(e) => {
          onChange(e.realIndex);
        }}
        onProgress={(e) => {
          var scrollEvent = new CustomEvent("scroll", {
            detail: {
              scrollY: Math.abs(e.translate), // 这里用于仿真滚动位置的数据
            },
          });
          window.dispatchEvent(scrollEvent);
        }}
        id="pageSwiper"
        slidesPerView={"auto"}
        spaceBetween={-1}
      >
        {slides.map((item: any, index: number) => (
          <SwiperSlide key={index} className="overflow-hidden">
            <div>{item.content}</div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div>testing</div> */}
    </>
  );
};

export default FullPageSwiper;

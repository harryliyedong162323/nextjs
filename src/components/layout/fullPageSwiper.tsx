"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

interface Params {
  [key: string]: any;
}

const FullPageSwiper = function (params: Params) {
  const {
    enableAutoScroll,
    transitionSpeed,
    currentSlideIndex,
    slides,
    parallax,
    onChange,
  }: Params = params;
  const [pageSwiper, setPageSwiper] = useState<any>(null);
  const [swiperHeight, setSwiperHeight] = useState(window.innerHeight);

  useEffect(() => {
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
        modules={[Mousewheel]}
        mousewheel={{
          sensitivity: 0.1,
          thresholdDelta: 130,
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
        onSlideChangeTransitionStart={(e) => {
          onChange(e.realIndex);
        }}
        id="pageSwiper"
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

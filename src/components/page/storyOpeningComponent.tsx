"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import BaseImage from "@/components/base/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

function StoryOpeningComponent(props: any) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onChangeScroll = useCallback(
    (emblaApi: { selectedScrollSnap: () => any }) => {
      setCurrentIndex(emblaApi?.selectedScrollSnap() || 0);
    },
    []
  );

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      setCurrentIndex(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    emblaApi?.on("select", onChangeScroll);
  }, [emblaApi]);

  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex h-screen">
        <div className="flex-grow-0 flex-shrink-0 basis-full relative">
          {/* <BaseImage
            defaultImg={require("../../../public/assets/story/brand_story_bannner.png")}
            alt={""}
            objectFit="cover"
            quality={100}
          ></BaseImage> */}
          <Image
            className="object-cover h-screen mobile:h-screen mobile:max-w-max"
            src={require("../../../public/assets/story/brand_story_bannner.png")}
            alt={""}
            quality="100"
          ></Image>
          <div className="absolute bottom-154px w-full flex items-center flex-col justify-center text-white mobile:bottom-127px">
            <div className="font-AlbertusNova-Regular text-26px uppercase mb-20px mobile:text-13px">
              OUR STORY
            </div>
            <div className="font-AlbertusNova-Regular text-40px text-center uppercase mobile:w-325px mobile:text-20px">
              A drop of wilderness in every glass.
            </div>
          </div>
        </div>
        <div className="flex-grow-0 flex-shrink-0 basis-full relative">
          <Image
            className="object-cover h-screen mobile:h-screen mobile:max-w-max"
            src={require("../../../public/assets/story/brand_story_bannner.png")}
            alt={""}
            quality="100"
          ></Image>
          <div className="absolute bottom-154px w-full flex items-center flex-col justify-center text-white mobile:bottom-127px">
            <div className="font-AlbertusNova-Regular text-26px uppercase mb-20px mobile:text-13px">
              OUR STORY
            </div>
            <div className="font-AlbertusNova-Regular text-40px text-center uppercase mobile:w-325px mobile:text-20px">
              A drop of wilderness in every glass.
            </div>
          </div>
        </div>
        <div className="flex-grow-0 flex-shrink-0 basis-full relative">
          <Image
            className="object-cover h-screen mobile:h-screen mobile:max-w-max"
            src={require("../../../public/assets/story/brand_story_bannner.png")}
            alt={""}
            object-fit="contain"
            quality="100"
          ></Image>
          <div className="absolute bottom-154px w-full flex items-center flex-col justify-center text-white mobile:bottom-127px">
            <div className="font-AlbertusNova-Regular text-26px uppercase mb-20px mobile:text-13px">
              OUR STORY
            </div>
            <div className="font-AlbertusNova-Regular text-40px text-center uppercase mobile:w-325px mobile:text-20px">
              A drop of wilderness in every glass.
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-172px mobile:top-86px flex justify-center w-full">
        <span className="bg-[url('/assets/wildmoor_white.png')] inline-block w-548px h-88px bg-cover mobile:w-274px mobile:h-44px"></span>
      </div>
      <div className="absolute bottom-100px w-full flex items-center justify-center">
        {[0, 1, 2].map((item, index) => {
          return (
            <div
              key={index}
              className={`h-5px mx-5px inline-block rounded-tr-10px rounded-bl-10px cursor-pointer ${
                currentIndex === index
                  ? "bg-white w-50px"
                  : "bg-gray-300 w-20px"
              }`}
              onClick={() => scrollTo(index)}
            ></div>
          );
        })}
      </div>
      <div className="absolute bottom-24px w-full flex flex-col items-center justify-center">
        <div className="w-18px h-24px border-white border-2 inline-block border-solid rounded-full mb-5px relative before:w-2px before:h-5px before:bg-white before:absolute before:content-[''] before:left-6px before:top-5px before:animate-scroll"></div>
        <div className="text-12px leading-tight text-white font-Grotesque-Regular">Scroll to explore more</div>
      </div>
    </div>
  );
}

export default StoryOpeningComponent;

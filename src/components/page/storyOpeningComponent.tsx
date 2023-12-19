"use client";

import React, { useEffect, useState, useCallback } from "react";
import BaseImage from "@/components/base/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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
  bgList:[{
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
  }]
};

function StoryOpeningComponent(props: any) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState<ComponentData>(componentData);

  const [isFullPage] = useState<boolean>(props.data.entry.isFullPage || false)
  const [isCurrentPage, setIsCurrentPage] = useState<boolean>(false)

  useEffect(() => {
    if (isFullPage) {
      if (props.data.entry.currentPageNumber === props.data.entry.pageNumber) {
        setIsCurrentPage(true)
      } else {
        setIsCurrentPage(false)
      }
    }
  }, [isFullPage, props]);

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
        {data.bgList.map((item, key) => {
          return (
            <div
              key={key}
              className="flex-grow-0 flex-shrink-0 basis-full relative"
            >
              <BaseImage
                mImg={item.mImg}
                pImg={item.pImg}
                alt={""}
                layout="fill"
                objectFit="cover"
                quality={100}
              ></BaseImage>
            </div>
          );
        })}
      </div>
      <div className="absolute w-full flex items-center justify-center top-791px paid:top-634px mobile:top-730px">
        {data.bgList.map((item, key) => {
          return (
            <div
              key={key}
              className={`h-5px mx-5px inline-block rounded-tr-10px rounded-bl-10px cursor-pointer ${
                currentIndex === key ? "bg-white w-50px" : "bg-gray-300 w-20px"
              }`}
              onClick={() => scrollTo(key)}
            ></div>
          );
        })}
      </div>
      <div className="absolute flex justify-center w-full top-144px paid:top-115px mobile:top-86px">
        <span className="bg-[url('/assets/wildmoor_white.png')] inline-block bg-cover w-456px h-74px paid:w-365px paid:h-59px mobile:w-274px mobile:h-44px"></span>
      </div>
      <div className={`absolute w-full flex items-center flex-col justify-center text-white top-660px paid:top-528px mobile:top-605px`}>
        <div className={`overflow-hidden font-AlbertusNova-Regular text-26px uppercase mb-20px paid:text-18px mobile:text-13px transition-all ease-in-out duration-500 delay-500 h-0 ${isCurrentPage? "h-32px" : "h-0"}`}>
          <div>{data.title}</div>
        </div>
        <div className={`overflow-hidden font-AlbertusNova-Light text-center uppercase transition-all ease-in-out duration-500 delay-1000 h-0 ${isCurrentPage? "h-48px mobile:h-54px" : "h-0"} text-40px paid:text-28px mobile:leading-[27px] mobile:w-325px mobile:text-20px`}>
          <div>{data.description}</div>
        </div>
      </div>
      <div className={`absolute  w-full flex flex-col items-center justify-center transition-all ease-in-out duration-500 delay-1000 ${ isCurrentPage ? 'bottom-24px' : '-bottom-48px'}`}>
        <div className="w-18px h-24px border-white border-2 inline-block border-solid rounded-full mb-5px relative before:w-2px before:h-5px before:bg-white before:absolute before:content-[''] before:left-6px before:top-5px before:animate-scrollMore"></div>
        <div className="text-12px leading-tight text-white font-Grotesque-Regular">
          {data.scrollText}
        </div>
      </div>
    </div>
  );
}

export default StoryOpeningComponent;

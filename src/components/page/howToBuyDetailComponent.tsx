"use client";

import React, { useCallback, useEffect, useState } from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
import BaseVideo from "@/components/base/video";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import dynamic from "next/dynamic";
import ReactGA from "react-ga4";

export interface entryContent {
  isFullPage: boolean;
  currentPageNumber: number;
  pageNumber: number;
  headStyle: string;
  howToBuyDetailComponentServiceContent: string;
  howToBuyDetailComponentServiceTitle: string;
  serviceCarouselImageCollection: {
    items: Array<carouselImage>;
  };
}

interface carouselImage {
  sys: {
    id: string;
  };
  altText: string;
  imagemobile: {
    url: string;
  };
  imagepc: {
    url: string;
  };
}

interface propsContent {
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

function HowToBuyDetailComponent(props: propsContent) {
  console.log(props);
  const headStyle = props.data.entry.headStyle;

  const title = props.data.entry.howToBuyDetailComponentServiceTitle;
  const des = props.data.entry.howToBuyDetailComponentServiceContent;
  const serviceCarouselImage =
    props.data.entry.serviceCarouselImageCollection.items;

  const [browser, setBrowser] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isFullPage] = useState<boolean>(props.data.entry.isFullPage || false);
  const [isCurrentPage, setIsCurrentPage] = useState<boolean>(false);

  // useEffect(() => {
  //   ReactGA.event(`Viewpage_Storedetailpage|${title}`);
  // }, []);

  useEffect(() => {
    if (isFullPage) {
      if (props.data.entry.currentPageNumber === props.data.entry.pageNumber) {
        setIsCurrentPage(true);
      } else {
        setIsCurrentPage(false);
      }
    }
  }, [isFullPage, props]);

  const onChangeScroll = useCallback(
    (emblaApi: { selectedScrollSnap: () => number }) => {
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

  useEffect((): void => {
    setBrowser(true);
  }, [browser]);

  return (
    <section className="w-full  relative mobile:h-auto overflow-hidden">
      <input type="hidden" value={headStyle} data-style="headStyle" />

      {/*<section className="">*/}
      {/*${isCurrentPage ? 'translate-y-0 opacity-1' : 'translate-y-[-100%] opacity-0'}*/}
      <div
        className={`w-[50%] pb-66px pad:w-[70%] mobile:w-auto  pb-47px mobile:pt-44px mx-auto   opacity-1 `}
      >
        <div className="text-33px font-normal font-AlbertusNova-Regular pb-64px text-center pt-143px pad:pb-45px pad:pt-102px mobile:pt-42px mobile:text-24px mobile:leading-[40px] mobile:pb-27px uppercase">
          {title} 标题
        </div>
        <div className="font-normal font-Grotesque-Regular text-22px text-center text-dark-grey leading-[1.5em] mobile:text-14px mobile:pl-25px mobile:pb-27px mobile:pr-25px mobile:leading-[2em] flex justify-center">
          {des} 描述
        </div>
      </div>

      <div className="absolute z-10 top-0 right-[0%] h-full w-200px bg-gradient-to-l from-[#f6f6f6] to-[transparent] mobile:hidden"></div>
      <div
        className="relative overflow-hidden pb-33px mobile:pb-20px"
        ref={emblaRef}
      >
        <div className="flex">
          {serviceCarouselImage.length > 0 &&
            serviceCarouselImage.map((item: carouselImage) => {
              return (
                <div
                  key={item.sys.id}
                  className="flex-grow-0 flex-shrink-0 basis-4/6 ml-21px relative h-417px mobile:ml-10px mobile:basis-2/3 mobile:h-455px"
                >
                  <BaseImage
                    mImg={item.imagemobile.url}
                    pImg={item.imagepc.url}
                    alt={item.altText}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  ></BaseImage>
                </div>
              );
            })}

          {/*<div className="flex-grow-0 flex-shrink-0 basis-4/6 ml-21px relative h-417px  mobile:ml-10px mobile:basis-2/3 mobile:h-455px">*/}
          {/*    <BaseImage*/}
          {/*        mImg={require("../../../public/assets/howToBuyDetail/kv-2.png")}*/}
          {/*        pImg={require("../../../public/assets/howToBuyDetail/kv-2.png")}*/}
          {/*        alt={""}*/}
          {/*        layout="fill"*/}
          {/*        objectFit="cover"*/}
          {/*        quality={100}*/}
          {/*    ></BaseImage>*/}

          {/*</div>*/}
          {/*<div className="flex-grow-0 flex-shrink-0 basis-4/6 ml-21px relative h-417px mobile:ml-10px mobile:basis-2/3 mobile:h-455px">*/}
          {/*    <BaseImage*/}
          {/*        mImg={require("../../../public/assets/howToBuyDetail/kv-3.png")}*/}
          {/*        pImg={require("../../../public/assets/howToBuyDetail/kv-3.png")}*/}
          {/*        alt={""}*/}
          {/*        layout="fill"*/}
          {/*        objectFit="cover"*/}
          {/*        quality={100}*/}
          {/*    ></BaseImage>*/}

          {/*</div>*/}
        </div>

        <div className="block mobile:hidden  mt-25px bottom-83px w-full flex items-center justify-center mobile:bottom-50px mobile:scale-50">
          {serviceCarouselImage.length > 0 &&
            serviceCarouselImage.map((item, index) => {
              return (
                <div
                  key={item.sys.id}
                  className={`h-4px mx-4px inline-block rounded-tr-8px rounded-bl-8px cursor-pointer ${
                    currentIndex === index
                      ? "bg-[#696969] w-42px"
                      : "bg-[#969797] w-17px"
                  }`}
                  onClick={() => scrollTo(index)}
                ></div>
              );
            })}
        </div>
        <div className="hidden mobile:block ">
          <div className=" mt-25px bottom-83px w-full flex items-center justify-center mobile:bottom-50px mobile:scale-110  mobile:h-20px">
            {serviceCarouselImage.length > 0 &&
              serviceCarouselImage.map((item, index) => {
                return (
                  <div
                    key={item.sys.id}
                    className={`h-14px mx-20px inline-block rounded-tr-10px rounded-bl-10px cursor-pointer ${
                      currentIndex === index
                        ? "bg-[#696969] w-200px"
                        : "bg-[#969797] w-80px"
                    }`}
                    onClick={() => scrollTo(index)}
                  ></div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToBuyDetailComponent;

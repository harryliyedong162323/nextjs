"use client";

import React, { useEffect, useState, useCallback } from "react";
import BaseImage from "../base/image";
import Marquee from "react-fast-marquee";

export interface entryContent {
  isFullPage: boolean;
  pageNumber: number;
  currentPageNumber: number;
  sys: {
    id: string;
  };
  storyChapterEndComponentDescription: string;
  storyChapterEndComponentSlidingText: string;
  storyChapterEndComponentBackgroundImage: {
    imagepc: {
      url: string;
    };
    imagemobile: {
      url: string;
    };
    altText: string;
  };
  storyChapterEndComponentProductListCollection: {
    items: Array<{
      id: string;
      productName: string;
      age: string;
      unit: string;
      description: string;
      productImage: {
        imagepc: {
          url: string;
        };
        imagemobile: {
          url: string;
        };
        altText: string;
      };
      backGroundImage: {
        imagepc: {
          url: string;
        };
        imagemobile: {
          url: string;
        };
        altText: string;
      };
      ourStoryListImage: {
        imagepc: {
          url: string;
        };
        imagemobile: {
          url: string;
        };
        altText: string;
      };
    }>;
  };
}
import { TrackingTypeContent } from "@/utils/analytics";
interface propsContent {
  getPageStore: Function;
  updatePageStore: Function;
  changeNavStatus: Function;
  scrollToPage: Function;
  TrackingType: TrackingTypeContent;
  currentSlug: string;
  data: {
    entry: entryContent;
    name: string;
    type: string;
  };
}

function StoryChapterEndComponent(props: propsContent) {
  const [data, setData] = useState<entryContent>(props.data.entry);

  const [isFullPage] = useState<boolean>(props.data.entry.isFullPage || false);
  const [isCurrentPage, setIsCurrentPage] = useState<boolean>(false);
  const [play, setPlay] = useState<boolean>(true);

  useEffect(() => {
    if (isFullPage) {
      if (props.data.entry.currentPageNumber === props.data.entry.pageNumber) {
        setIsCurrentPage(true);
      } else {
        setIsCurrentPage(false);
      }
    }
  }, [isFullPage, props]);

  return (
    <section className="relative overflow-hidden select-none">
      <input
        type="hidden"
        value={props.TrackingType.scrollFull}
        data-slug={props.currentSlug}
      />
      <div className="flex h-screen">
        <BaseImage
          mImg={data.storyChapterEndComponentBackgroundImage.imagemobile.url}
          pImg={data.storyChapterEndComponentBackgroundImage.imagepc.url}
          alt={data.storyChapterEndComponentBackgroundImage.altText}
          layout="fill"
          objectFit="fill"
          quality={100}
        ></BaseImage>
      </div>
      <div className="w-full absolute left-0 top-120px pad:top-108px mobile:top-150px">
        <div className="absolute z-10 top-0 -right-25px h-full w-125px bg-gradient-to-l from-[#00000090] to-[#00000000]"></div>
        <Marquee play={play}>
          {data.storyChapterEndComponentProductListCollection.items.map(
            (item, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center w-391px mr-64px pad:w-313px pad:mr-50px mobile:ml-0 mobile:w-235px mobile:mr-30px`}
                >
                  <div
                    className={`inline-block relative w-391px h-345px pad:w-313px pad:h-276px mobile:w-235px mobile:h-207px ${
                      index % 4 == 1 ? "mt-100px" : ""
                    } ${index % 4 == 2 ? "mt-50px" : ""}  ${
                      index % 4 == 3 ? "mt-150px" : ""
                    }`}
                  >
                    <BaseImage
                      mImg={item.ourStoryListImage.imagemobile.url}
                      pImg={item.ourStoryListImage.imagepc.url}
                      alt={item.ourStoryListImage.altText}
                      layout="fill"
                      objectFit="cover"
                      quality={50}
                    ></BaseImage>
                  </div>
                  <div className="text-white font-AlbertusNova-Light inline-flex items-center w-230px pad:w-200px mobile:w-160px">
                    <div>
                      <div className="leading-none text-48px pad:text-38px mobile:text-34px">
                        {item.age}
                      </div>
                      <div className="leading-none uppercase whitespace-nowrap text-10px pad:text-8px mobile:text-6px">
                        {item.unit}
                      </div>
                    </div>
                    <div className="h-[60px!ignore] w-[2px!ignore] bg-white mx-10px text-transparent pad:w-[2px!ignore] pad:h-[46px!ignore] pad:mx-8px mobile:mx-5px mobile:h-[40px!ignore] mobile:w-[1px!ignore]">
                      |
                    </div>
                    <div className="leading-tight uppercase text-24px pad:text-20px mobile:text-16px">
                      {item.productName}
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </Marquee>
      </div>
      <div className="absolute text-[#E6E7E8] font-Grotesque-Light text-22px bottom-[calc(11.5vh)] w-full mobile:text-14px mobile:bottom-150px">
        <div className="w-830px pad:w-664px m-auto mobile:w-300px">
          {data.storyChapterEndComponentDescription}
        </div>
      </div>
    </section>
  );
}

export default StoryChapterEndComponent;

"use client";

import React, { useCallback, useEffect, useState } from "react";
import BaseImage from "@/components/base/image";
import BaseVideo from "@/components/base/video";
import BaseLink from "../base/link";

interface entryContent {
  headStyle: string;
  interactiveVideoComponentIsShow: boolean;
  interactiveVideoComponentTitle: string;
  interactiveVideoComponentExploreMore: string;
  interactiveVideoComponentJumpUrl: string;
  interactiveVideoComponentExploreMoreImage: {
    altText: string;
    imagepc: {
      url: string;
    };
    imagemobile: {
      url: string;
    };
  };
  interactiveVideoComponentImage: {
    altText: string;
    imagepc: {
      url: string;
    };
    imagemobile: {
      url: string;
    };
  };
}
import { TrackingTypeContent } from "@/utils/analytics";
export interface propsContent {
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

function InteractiveVideoComponent(props: propsContent) {
  const headStyle = props.data.entry.headStyle;

  const interactiveVideoData = props.data.entry;

  return (
    <section
      id="TheWildEscape"
      data-anchor={2}
      className="w-full h-screen relative overflow-hidden select-none"
    >
      <input type="hidden" value={headStyle} data-style="headStyle" />
      <input
        type="hidden"
        value={props.TrackingType.scroll50}
        data-slug={"home"}
      />
      <input
        type="hidden"
        value={props.TrackingType.scroll75}
        data-slug={"localMarketActivity"}
      />
      <BaseImage
        pImg={interactiveVideoData.interactiveVideoComponentImage.imagepc.url}
        mImg={
          interactiveVideoData.interactiveVideoComponentImage.imagemobile.url
        }
        alt={interactiveVideoData.interactiveVideoComponentImage.altText}
        layout="fill"
        objectFit="cover"
        quality={100}
      ></BaseImage>
      {/*src="https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/bottle.mp4"*/}

      {/*<BaseVideo*/}
      {/*    src="https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/bottle.webm"*/}
      {/*    className="h-screen object-cover"*/}
      {/*    loop={true}*/}
      {/*    autoplay={true}*/}
      {/*    width="50%"*/}
      {/*    height="100%"*/}
      {/*>*/}
      {/*</BaseVideo>*/}

      <div className="absolute z-20 left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]">
        <div className="uppercase font-normal text-33px text-center font-AlbertusNova-Regular pb-56px text-white pad:text-23px pad:pb-40px mobile:pb-27px mobile:text-20px">
          The Wild Escape{" "}
        </div>
        <BaseLink link={interactiveVideoData.interactiveVideoComponentJumpUrl}>
          {/*
            <div className=" relative w-334px h-65px mx-auto pad:w-238px pad:h-46px   mobile:w-200px mobile:h-39px  ">
              <BaseImage
                pImg={
                  interactiveVideoData.interactiveVideoComponentExploreMoreImage
                    .imagepc.url
                }
                mImg={
                  interactiveVideoData.interactiveVideoComponentExploreMoreImage
                    .imagemobile.url
                }
                alt={
                  interactiveVideoData.interactiveVideoComponentExploreMoreImage
                    .altText
                }
                layout="fill"
                objectFit="contain"
                quality={100}
              ></BaseImage>
              <div className=" flex h-65px pad:h-46px  whitespace-nowrap  mobile:h-39px justify-center items-center  ">
                EXPLORE MORE
              </div>
            </div>
          */}

          <div className="hover:bg-[url('/assets/interactiveVideo/CTZ.png')]  hover:text-black bg-[url('/assets/interactiveVideo/CTZ-Z.png')]   mx-auto w-333px h-73px    cursor-pointer text-center leading-[73px] text-white text-20px pad:text-14px uppercase font-AlbertusNova-Light font-normal mobile:hidden">
            EXPLORE MORE
          </div>
          <div className="hidden mobile:block mobile:cursor-default mobile:bg-[url('/assets/interactiveVideo/CTZ-Z.png')] mobile:mx-auto mobile:text-12px mobile:w-190px mobile:h-30px mobile:text-center mobile:leading-[30px] mobile:text-white mobile:font-AlbertusNova-Light mobile:font-normal">
            EXPLORE MORE
          </div>
          {/* </div> */}
        </BaseLink>
      </div>
    </section>
  );
}

export default InteractiveVideoComponent;

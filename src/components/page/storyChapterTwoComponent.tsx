"use client";

import React, { useEffect, useState, useCallback } from "react";
import BaseImage from "../base/image";

interface ComponentData {
  id: number
  bg: {
    mImg: string
    pImg: string
  },
  words: {
    first: string
    second: string
    thrid: string
    fourth: string
    fifth: string
  }
  description: string
  scrollText: string
  avatarOne: string
  avatarTwo: string
}

const componentData: ComponentData = {
  id: 1,
  bg: {
    pImg: require("../../../public/assets/story/brand_story_chatper_02.png"),
    mImg: require("../../../public/assets/story/brand_story_chatper_02_m.png"),
  },
  description: "Drawn from the Grant Gordon family ancient reserve stock, Wildmoor is the cumulation of a decades-long mission to collect the rarest and most prestigious aged whiskies.",
  words: {
    first: "A family collection,",
    second: "60",
    thrid: "yrs",
    fourth: "in the making.",
    fifth: "Once kep private, now released."
  },
  scrollText: "Scroll to explore more",
  avatarOne: require("../../../public/assets/story/brand_story_chatper_02_face.png"),
  avatarTwo: require("../../../public/assets/story/brand_story_chatper_02_face_big.png"),
}

function StoryChapterTwoComponent(props: any) {
  const [data, setData] = useState<ComponentData>(componentData)

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

  const [isShow, setIsShow] = useState(false as boolean);
  useEffect(() => {
    console.log("change show", isShow);
  }, [isShow]);

  function showIntroduce(bl: boolean) {
    setIsShow(bl);
  }

  return (
    <div id="StoryChapterTwo" className="relative overflow-hidden">
      <div className="flex h-screen">
        <BaseImage
            mImg={data.bg.mImg}
            pImg={data.bg.pImg}
            alt={""}
            layout="fill"
            objectFit="fill"
            quality={100}
          ></BaseImage>
      </div>
      <div className="absolute top-0 left-0 bg-[50%] bg-no-repeat bg-contain w-full bg-[url('/assets/story/brand_story_chatper_02_line.png')]  h-screen"></div>
      {!isShow && (
        <>
          <div className={`absolute w-full transition-all ease-in-out duration-500 delay-1000 ${ isCurrentPage ? 'top-135px paid:top-104px mobile:top-86px opacity-100' : 'top-300px paid:top-280px mobile:top-260px opacity-0'}`}>
            <div className={`flex justify-center items-baseline mobile:flex-col mobile:items-start mobile:pl-50px`}>
              <span className="text-white font-AlbertusNova-Regular uppercase text-30px paid:text-24px mobile:text-17px mobile:w-full">
                { data.words.first }
              </span>
              <span className="flex justify-center items-baseline mx-10px">
                <span className="font-AlbertusNova-Light text-[#d18350] text-[160px]"> { data.words.second }</span>
                <span className="font-AlbertusNova-Regular text-[#d18350] text-42px"> { data.words.thrid }</span>
              </span>
              <span className="text-white font-AlbertusNova-Regular uppercase text-30px paid:text-24px mobile:text-17px mobile:w-full">
              { data.words.fourth }
              </span>
            </div>
            <div className="flex justify-center text-white font-AlbertusNova-Regular uppercase text-30px paid:text-24px mobile:text-17px mobile:justify-start mobile:mt-10px mobile:pl-50px"> { data.words.fifth }</div>
          </div>
          <span
            onClick={() => showIntroduce(true)}
            className={`absolute bg-[url('/assets/story/brand_story_chatper_02_face.png')]  bg-cover top-1/2 left-1/2 cursor-pointer transition-all ease-in-out duration-500 delay-1000 ${ isCurrentPage ? 'opacity-100' : 'opacity-0'} w-295px h-295px -ml-148px paid:w-236px paid:h-236px mobile:w-177px mobile:h-177px mobile:-ml-88px`}
          >
            <BaseImage
              mImg={data.avatarOne}
              pImg={data.avatarOne}
              alt={""}
              layout="fill"
              objectFit="cover"
              quality={100}
            ></BaseImage>
          </span>
        </>
      )}
      {
        isShow && 
        <div className={`absolute w-[1134px] left-1/2 -ml-567px top-174px h-393px paid:w-906px paid:-ml-453px paid:h-315px mobile:w-330px mobile:-ml-165px mobile:pl-0 mobile:flex mobile:flex-col mobile:h-auto mobile:items-center`}>
          <div
            onClick={() => showIntroduce(false)}
            className={`absolute cursor-pointer z-20 left-0 w-528px h-422px paid:w-422px paid:h-282px mobile:relative mobile:w-330px mobile:h-264px mobile:left-0 transition-all ease-in-out duration-500 delay-1000 ${ isCurrentPage ? 'opacity-100 top-0' : 'opacity-0 top-200px'}`}
          >
            <BaseImage
              mImg={data.avatarTwo}
              pImg={data.avatarTwo}
              alt={""}
              layout="fill"
              objectFit="fill"
              quality={100}
            ></BaseImage>
          </div>
          <div className={`overflow-hidden absolute right-0 bottom-0 bg-white font-GalanoGrotesque text-[#262627] leading-tight text-20px p-42px w-640px paid:text-16px paid:p-33px paid:w-512px mobile:w-330px mobile:relative mobile:px-25px mobile:py-30px mobile:text-14px mobile:right-0`}>
            <div className={`h-full absolute z-10 right-0 top-0 bg-white transition-all ease-in-out duration-500 delay-1000 ${ isCurrentPage ? 'w-0' : 'w-640px paid:w-512px mobile:w-330px'}`}></div>
            <div>{ data.description }</div>
          </div>
        </div>
      }
      <div className={`absolute  w-full flex flex-col items-center justify-center transition-all ease-in-out duration-500 delay-1000 ${ isCurrentPage ? 'bottom-24px' : '-bottom-48px'}`}>
        <div className="w-18px h-24px border-white border-2 inline-block border-solid rounded-full mb-5px relative before:w-2px before:h-5px before:bg-white before:absolute before:content-[''] before:left-6px before:top-5px before:animate-scrollMore"></div>
        <div className="text-12px leading-tight text-white font-GalanoGrotesque">
          { data.scrollText }
        </div>
      </div>
      <div className="absolute z-10 top-0 left-0 w-full h-382px bg-gradient-to-b from-[#2828289c] to-[#28282800] paid:h-320px mobile:h-250px"></div>
    </div>
  );
}

export default StoryChapterTwoComponent;

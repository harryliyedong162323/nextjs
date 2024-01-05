"use client";

import React, { useEffect, useState, useCallback } from "react";
import BaseImage from "../base/image";

interface ComponentData {
  id: number
  bg: {
    mImg: string
    pImg: string
  },
  avatar: {
    mImg: string
    pImg: string
  },
  description: string
  scrollText: string
}

const componentData: ComponentData = {
  id: 1,
  bg: {
    pImg: require("../../../public/assets/story/brand_story_chatper_03.png"),
    mImg: require("../../../public/assets/story/brand_story_chatper_03_m.png"),
  },
  avatar: {
    mImg: require("../../../public/assets/story/brand_story_chatper_03_face_big_m.png"),
    pImg: require("../../../public/assets/story/brand_story_chatper_03_face_big.png"),
  },
  description: "Curated by Master Blender Brian Kinsman and sourced from Scotland’s untamed regions and leading distilleries – including notable ghost distillery stocks – this is widely considered the finest and most diverse collection of aged Scotch Whisky ever assembled.",
  scrollText: "Scroll to explore more"
}

function StoryChapterThreeComponent(props: any) {
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

  return (
    <section className="relative overflow-hidden select-none">
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
      <div className="absolute top-0 left-0 bg-[50%] bg-no-repeat bg-contain w-full bg-[url('/assets/story/brand_story_chatper_03_line.png')]  h-screen"></div>
      <div className={`absolute w-full flex flex-col items-center transition-all ease-in-out duration-500 delay-1000 ${ isCurrentPage ? 'opacity-100 top-152px pad:top-122px mobile:top-200px' : 'opacity-0 top-400px'}`}>
        <div className="relative cursor-pointer z-10 w-825px h-420px pad:w-660px pad:h-335px mobile:relative mobile:w-330px mobile:h-264px mobile:left-0">
          <BaseImage
            mImg={data.avatar.mImg}
            pImg={data.avatar.pImg}
            alt={""}
            layout="fill"
            objectFit="cover"
            quality={100}
          ></BaseImage>
        </div>
        <div className="relative bg-white font-Grotesque-Regular text-dark-grey w-825px text-20px p-50px pad:w-660px pad:text-16px pad:p-40px mobile:w-330px mobile:relative mobile:px-25px mobile:py-30px mobile:text-14px mobile:right-0">
          <div className={`w-full absolute z-10 left-0 bottom-0 bg-white transition-all ease-in duration-500 delay-1500`}></div>
          <div>{data.description}</div>
        </div>
      </div>
      <div className={`absolute z-20 w-full flex flex-col items-center justify-center transition-all ease-in-out duration-500 delay-1000 ${ isCurrentPage ? 'bottom-24px' : '-bottom-48px'}`}>
        <div className="w-18px h-24px border-white border-2 inline-block border-solid rounded-full mb-5px relative before:w-2px before:h-5px before:bg-white before:absolute before:content-[''] before:left-6px before:top-5px before:animate-scrollMore"></div>
        <div className="text-12px leading-tight text-white font-Grotesque-Regular">
          {data.scrollText}
        </div>
      </div>
      <div className="absolute z-10 bottom-0 left-0 w-full bg-gradient-to-t from-[#000000] to-[#28282800] h-150px pad:h-100px mobile:h-238px"></div>
    </section>
  );
}

export default StoryChapterThreeComponent;

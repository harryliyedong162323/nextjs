"use client";

import React, { useEffect, useState, useCallback } from "react";
import BaseImage from "../base/image";
import Marquee from "react-fast-marquee";

interface ComponentData {
  id: number;
  bg: {
    mImg: string;
    pImg: string;
  };
  productList: Array<{
    id: number
    year: number
    yearDesc: string
    name: string
    mImg: string;
    pImg: string;
  }>;
  description: string;
  scrollText: string;
}

const componentData: ComponentData = {
  id: 1,
  bg: {
    pImg: require("../../../public/assets/story/brand_story_chatper_end.png"),
    mImg: require("../../../public/assets/story/brand_story_chatper_end.png"),
  },
  productList: [{
    id: 1,
    year: 40,
    yearDesc: "year old",
    name: "BLACK MOUNTAIN",
    mImg: require("../../../public/assets/story/product_01.png"),
    pImg: require("../../../public/assets/story/product_01.png"),
  },
  {
    id: 2,
    year: 23,
    yearDesc: "year old",
    name: "ANCIENT MOORLAND",
    mImg: require("../../../public/assets/story/product_02.png"),
    pImg: require("../../../public/assets/story/product_02.png"),
  },
  {
    id: 3,
    year: 23,
    yearDesc: "year old",
    name: "DARK MOORLAND",
    mImg: require("../../../public/assets/story/product_03.png"),
    pImg: require("../../../public/assets/story/product_03.png"),
  },
  {
    id: 4,
    year: 23,
    yearDesc: "year old",
    name: "RUGGED COAST",
    mImg: require("../../../public/assets/story/product_04.png"),
    pImg: require("../../../public/assets/story/product_04.png"),
  },
  {
    id: 5,
    year: 30,
    yearDesc: "year old",
    name: "TROPICAL COAST",
    mImg: require("../../../public/assets/story/product_05.png"),
    pImg: require("../../../public/assets/story/product_05.png"),
  },
  {
    id: 6,
    year: 23,
    yearDesc: "year old",
    name: "WAKING FOREST",
    mImg: require("../../../public/assets/story/product_06.png"),
    pImg: require("../../../public/assets/story/product_06.png"),
  }],
  description:
    "But wild wind-swept moorlands, savage waves breaking across jagged shorelines. And rolling mountains shrouded in mist.",
  scrollText: "Scroll to explore more",
};


function StoryChapterEndComponent(props: any) {
  const [data, setData] = useState<ComponentData>(componentData);

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
    <div className="relative overflow-hidden">
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
      <div className="w-full absolute left-0 top-120px paid:top-108px mobile:top-210px">
        <div className="absolute z-10 top-0 -right-25px h-full w-125px bg-gradient-to-l from-[#00000090] to-[#00000000]"></div>
          <Marquee play={play}>
            { data.productList.map((item, index) => {
              return (
                <div className={`flex flex-col items-center w-391px mr-64px paid:w-313px paid:mr-50px mobile:ml-0 mobile:w-235px mobile:mr-30px`}>
                  <div className={`inline-block relative w-391px h-345px paid:w-313px paid:h-276px mobile:w-235px mobile:h-207px ${ index % 4 == 1 ? "mt-100px" : "" } ${ index % 4 == 2 ? "mt-50px" : "" }  ${ index % 4 == 3 ? "mt-150px" : "" }`}>
                    <BaseImage
                      mImg={item.mImg}
                      pImg={item.pImg}
                      alt={""}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                    ></BaseImage>
                  </div>
                  <div className="text-white font-AlbertusNova-Light inline-flex items-center w-230px paid:w-200px mobile:w-160px">
                    <div>
                      <div className="leading-none text-48px paid:text-38px mobile:text-34px">{item.year}</div>
                      <div className="leading-none uppercase text-10px paid:text-8px mobile:text-6px">{item.yearDesc}</div>
                    </div>
                    <div className="h-60px w-2px bg-white mx-10px paid:w-1px paid:h-46px paid:mx-8px mobile:mx-5px mobile:h-40px mobile:w-1px"></div>
                    <div className="leading-tight uppercase text-24px paid:text-20px mobile:text-16px">{item.name}</div>
                  </div>
                </div>
              )
            })}
          </Marquee>
      </div>
      <div className="absolute text-[#E6E7E8] font-Grotesque-Light text-22px bottom-[calc(11.5vh)] w-full mobile:text-14px">
        <div className="w-830px paid:w-664px m-auto mobile:w-300px">
          {data.description}
        </div>
      </div>
    </div>
  );
}

export default StoryChapterEndComponent;

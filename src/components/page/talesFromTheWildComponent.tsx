"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import BaseImage from "@/components/base/image";

interface Kol {
  id: string;
  name: string;
  avatar: {
    pImg: string;
    mImg: string;
  };
  banner: {
    pImg: string;
    mImg: string;
  };
  description: string;
}

const kols: Array<Kol> = [
  {
    id: "10086",
    name: "NAME of KOL",
    avatar: {
      pImg: require("../../../public/assets/range/wild_face.png"),
      mImg: require("../../../public/assets/range/wild_face.png"),
    },
    banner: {
      pImg: require("../../../public/assets/range/wild_01.png"),
      mImg: require("../../../public/assets/range/wild_01_m.png"),
    },
    description: "Bring the drinking occasion to life in a way",
  },
  {
    id: "10087",
    name: "NAME of KOL",
    avatar: {
      pImg: require("../../../public/assets/range/wild_face.png"),
      mImg: require("../../../public/assets/range/wild_face.png"),
    },
    banner: {
      pImg: require("../../../public/assets/range/wild_02.png"),
      mImg: require("../../../public/assets/range/wild_02_m.png"),
    },
    description: "Bring the drinking occasion to life in a way",
  },
  {
    id: "10088",
    name: "NAME of KOL",
    avatar: {
      pImg: require("../../../public/assets/range/wild_face.png"),
      mImg: require("../../../public/assets/range/wild_face.png"),
    },
    banner: {
      pImg: require("../../../public/assets/range/wild_03.png"),
      mImg: require("../../../public/assets/range/wild_03_m.png"),
    },
    description: "Bring the drinking occasion to life in a way",
  },
  {
    id: "10089",
    name: "NAME of KOL",
    avatar: {
      pImg: require("../../../public/assets/range/wild_face.png"),
      mImg: require("../../../public/assets/range/wild_face.png"),
    },
    banner: {
      pImg: require("../../../public/assets/range/wild_04.png"),
      mImg: require("../../../public/assets/range/wild_04_m.png"),
    },
    description: "Bring the drinking occasion to life in a way",
  },
  {
    id: "10090",
    name: "NAME of KOL",
    avatar: {
      pImg: require("../../../public/assets/range/wild_face.png"),
      mImg: require("../../../public/assets/range/wild_face.png"),
    },
    banner: {
      pImg: require("../../../public/assets/range/wild_05.png"),
      mImg: require("../../../public/assets/range/wild_05_m.png"),
    },
    description: "Bring the drinking occasion to life in a way",
  },
];

function TalesFromTheWildComponent(props: any) {
  const [currentKol, setCurrentKol] = useState<number>(0);
  const [toKol, setToKol] = useState<number>(0);
  const [kolList, setKolList] = useState<Array<Kol>>(kols);
  const [isAnimation, setIsAnimation] = useState<boolean>(false);
  const [hasNavigation, setHasNavigation] = useState<boolean>(
    props.data.entry.hasNavigation
  );
  // console.log(props);
  const headStyle = props.data.entry.headStyle;
  useEffect(() => {}, [currentKol, kolList]);

  const handleAnimation = (toKol: number) => {
    setToKol(toKol);
    setTimeout(() => {
      setCurrentKol(toKol);
    }, 1000);
  };

  const [num, setNum] = useState(1);
  useEffect(() => {
    const pathName = window.location.pathname;
    const result = pathName.substring(pathName.indexOf("/en-GB/") + 7);
    if (result == "range") {
      setNum(1);
    } else {
      setNum(3);
    }
  }, [num]);
  return (
    <div
      id="TalesFromTheWild"
      data-anchor={num}
      className="relative overflow-hidden bg-[#E6E7E8] select-none"
    >
      <input type="hidden" value={headStyle} />
      <div className="flex h-screen flex-col">
        <div className="font-AlbertusNova-Regular text-center uppercase text-33px pt-154px paid:text-27px paid:pt-124px mobile:text-20px mobile:pt-82px">
          Tales From The Wild
        </div>
        <div className="mx-auto inline-flex justify-between mt-84px w-[1250px] h-516px paid:mt-67px paid:w-1000px paid:h-414px mobile:w-full mobile:flex-col mobile:px-0 mobile:mt-10px">
          {kolList?.length > 0 &&
            kolList.map((item, index) => {
              return (
                <div className="relative" key={index}>
                  {currentKol === index && (
                    <>
                      <div
                        className={`relative inline-block object-cover mobile:flex mobile:w-full mobile:mt-2px transition-all ease-in-out duration-1000 ${
                          currentKol !== toKol
                            ? "w-139px paid:w-111px h-452px paid:h-362px mobile:h-94px mt-77px paid:mt-52px"
                            : "w-615px h-516px paid:w-492px paid:h-414px mobile:h-360px"
                        }`}
                      >
                        <BaseImage
                          mImg={item.banner.mImg}
                          pImg={item.banner.pImg}
                          alt={""}
                          layout="fill"
                          objectFit="cover"
                          quality={100}
                        ></BaseImage>
                      </div>
                      <div
                        className={`${
                          currentKol !== toKol ? "hidden" : ""
                        } absolute top-0 left-0 inline-flex flex-row items-center px-33px pt-33px paid:px-27px paid:pt-27px mobile:px-20px mobile:mt-10px`}
                      >
                        <div className="inline-block relative object-cover w-48px h-48px paid:w-39px paid:h-39px mobile:w-48px mobile:h-48px">
                          <BaseImage
                            mImg={item.avatar.mImg}
                            pImg={item.avatar.pImg}
                            alt={""}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                          ></BaseImage>
                        </div>
                        <div className="text-white text-16px ml-10px paid:text-14px mobile:text-14px">
                          {item.name}
                        </div>
                      </div>
                      <div
                        className={`${
                          currentKol !== toKol ? "hidden" : ""
                        } absolute left-0 inline-flex justify-between bottom-0 w-full bg-gradient-to-b from-[rgba(10, 22, 27, 0.75)] to-[rgba(0, 0, 0, 0)] px-33px pb-33px paid:px-27px paid:pb-27px mobile:px-24px mobile:pb-20px`}
                      >
                        <div className="text-white font-Grotesque-Medium text-20px paid:text-16px mobile:text-14px">
                          {item.description}
                        </div>
                        <div className="inline-block bg-[url('/assets/range/icon_arrow.png')] bg-cover cursor-pointer w-30px h-30px paid:w-24px paid:h-24px mobile:w-18px mobile:h-18px"></div>
                      </div>
                    </>
                  )}
                  {currentKol !== index && (
                    <>
                      <div
                        key={index}
                        className={`relative grayscale hover:grayscale-0 hover:animate-move-top w-139px h-full pt-77px paid:w-111px paid:pt-52px mobile:w-full mobile:pt-0 mobile:mt-2px transition-all ease-in-out duration-1000 ${
                          toKol === index
                            ? "w-615px paid:w-492px mobile:h-360px grayscale-0 animate-move-top"
                            : "w-139px paid:w-111px mobile:h-94px"
                        }`}
                      >
                        <div
                          className={`absolute w-full transition-all hover:text-white  ease-in-out duration-1000 ${
                            toKol === index
                              ? "h-516px paid:h-414px mobile:h-360px text-white"
                              : "h-452px paid:h-362px mobile:h-94px"
                          }`}
                        >
                          <div
                            className={`${
                              toKol === index ? "hidden" : ""
                            } absolute z-10 font-AlbertusNova-Regular text-16px rotate-90 top-60px mobile:text-14px mobile:rotate-0 mobile:text-white mobile:ml-20px mobile:top-40px`}
                          >
                            {item.name}
                          </div>
                          <div
                            onClick={() => {
                              handleAnimation(index);
                            }}
                            className="absolute cursor-pointer z-10 bottom-20px inline-block bg-cover left-1/2 bg-[url('/assets/range/icon_add_small.png')] w-30px h-30px -ml-15px hover:bg-[url('/assets/range/icon_add.png')] hover:w-60px hover:h-60px hover:-ml-30px paid:w-24px paid:h-24px paid:-mt-12px paid:hover:w-48px paid:hover:h-48px paid:hover:-ml-24px mobile:w-18px mobile:h-18px mobile:left-auto mobile:top-40px mobile:right-20px mobile:hover:-mt-20px"
                          ></div>
                          <div
                            className={`relative inline-block object-cover mobile:w-full transition-all ease-in-out duration-1000 ${
                              toKol === index
                                ? "w-615px h-516px paid:w-492px paid:h-414px mobile:h-360px"
                                : "w-139px h-452px paid:w-111px paid:h-362px mobile:h-94px"
                            }`}
                          >
                            <BaseImage
                              mImg={item.banner.mImg}
                              pImg={item.banner.pImg}
                              alt={""}
                              layout="fill"
                              objectFit="cover"
                              quality={100}
                            ></BaseImage>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
        </div>
      </div>
      <div className="w-full absolute bottom-0 z-10 mobile:h-110px mobile:bg-gradient-to-t mobile:from-[rgba(0,0,0)] mobile:to-[rgba(0,0,0,0.1)]"></div>
      {hasNavigation && (
        <div className="w-full absolute bottom-20px z-20 font-Grotesque-Regular text-[#969797] uppercase text-20px paid:text-14px mobile:text-10px">
          <div className="flex justify-between mx-auto w-[1250px] paid:w-1000px mobile:w-full text-center">
            <span
              className="inline-block cursor-pointer mobile:w-64px"
              onClick={() => {
                props.scrollToPage(0);
              }}
            >
              products family
            </span>
            <span
              className="relative inline-block cursor-pointer text-[#696969] mobile:w-64px mobile:text-white"
              onClick={() => {
                props.scrollToPage(1);
              }}
            >
              Tales From The Wild
              <div className="bg-[url('/assets/range/icon_nav_line.png')] absolute bg-cover z-10 left-1/2 w-189px h-7px top-26px -ml-95px paid:w-154px paid:h-6px paid:top-24px paid:-ml-77px mobile:top-36px mobile:w-64px mobile:h-3px mobile:-ml-32px"></div>
            </span>
            <span
              className="inline-block cursor-pointer mobile:w-64px"
              onClick={() => {
                props.scrollToPage(2);
              }}
            >
              Serving Suggestion
            </span>
            <span
              className="inline-block cursor-pointer mobile:w-64px"
              onClick={() => {
                props.scrollToPage(3);
              }}
            >
              Bottle Concept
            </span>
            <span
              className="inline-block cursor-pointer mobile:w-64px"
              onClick={() => {
                props.scrollToPage(4);
              }}
            >
              Flavour Finder
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default TalesFromTheWildComponent;

"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import BaseImage from "@/components/base/image";
import Link from "../base/link";
import BaseLink from "@/components/base/link";


interface Kol {
  sys: {
    id: string;
  };
  id: string;
  listName: string;
  listDescription: string;
  listImage: {
    imagepc: {
      url: string;
    };
    imagemobile: {
      url: string;
    };
    altText: string;
  };
  listSmallImage: {
    imagepc: {
      url: string;
    };
    imagemobile: {
      url: string;
    };
    altText: string;
  };
  listAvatar: {
    imagepc: {
      url: string;
    };
    imagemobile: {
      url: string;
    };
    altText: string;
  };
}

interface entryContent {
  headStyle: string;
  talesFromTheWildTitle: string;
  talesFromTheWildListCollection: {
    items: Array<Kol>
  }
}

export interface propsContent {
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

function isMobile() {
  let ua = navigator.userAgent;
  let iphone = ua.match(/(iPhone\sOS)\s([\d_]+)/),
    android = ua.match(/(Android)\s+([\d.]+)/),
    isMobile = iphone || android;
  return isMobile;
}

function TalesFromTheWildComponent(props: propsContent) {
  const [currentKol, setCurrentKol] = useState<any>(isMobile() ? null : 0);
  const [toKol, setToKol] = useState<any>(isMobile() ? null : 0);
  const [kolList, setKolList] = useState<Array<Kol>>(props.data.entry.talesFromTheWildListCollection.items);

  // console.log(props);
  const headStyle = props.data.entry.headStyle;
  const title = props.data.entry.talesFromTheWildTitle;
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
    <section
      id="TalesFromTheWild"
      data-anchor={num}
      className="relative overflow-hidden bg-[#E6E7E8] select-none"
    >
      <input type="hidden" value={headStyle} data-style="headStyle" />
      <div className="flex h-screen flex-col justify-center mobile:justify-start">
        <div className="font-AlbertusNova-Regular text-center uppercase text-33px pad:text-27px mobile:text-20px mobile:pt-80px">
          { title }
        </div>
        <div className="mx-auto inline-flex justify-between mt-84px w-[1250px] pad:mt-[5%] mobile:w-full mobile:flex-col mobile:px-0 mobile:mt-10px">
          {kolList?.length > 0 &&
            kolList.map((item, index) => {
              return (
                <div className="relative" key={index}>
                  {currentKol === index && (
                    <>
                      <BaseLink link={`/storiesDetail/3vDn9k3B9VI1RwW1Ks2Sqy`}>
                      {/* <BaseLink link={`/storiesDetail/{item.sys.id}`}> */}
                        <div
                          className={`relative inline-block object-cover cursor-pointer mobile:flex mobile:w-full mobile:mt-2px transition-all ease-in-out duration-1000 ${
                            currentKol !== toKol
                              ? "w-139px h-420px mt-98px pad:w-139px pad:h-420px pad:mt-78px mobile:h-94px"
                              : "w-615px h-519px pad:w-615px pad:h-519px mobile:h-360px"
                          }`}
                        >
                          <BaseImage
                            mImg={item.listImage.imagemobile.url}
                            pImg={item.listImage.imagepc.url}
                            alt={item.listImage.altText}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                          ></BaseImage>
                        </div>
                      </BaseLink>
                      <div
                        className={`${
                          currentKol !== toKol ? "hidden" : ""
                        } absolute top-0 left-0 inline-flex flex-row items-center px-33px pt-33px pad:px-27px pad:pt-27px mobile:px-20px mobile:mt-10px`}
                      >
                        <div className="inline-block relative object-cover w-48px h-48px pad:w-39px pad:h-39px mobile:w-48px mobile:h-48px">
                          <BaseImage
                            className="rounded-t-full"
                            mImg={item.listAvatar.imagemobile.url}
                            pImg={item.listAvatar.imagepc.url}
                            alt={item.listAvatar.altText}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                          ></BaseImage>
                        </div>
                        <div className="text-white text-18px ml-10px pad:text-14px mobile:text-14px font-normal font-Grotesque-Regular">
                          {item.listName}
                        </div>
                      </div>
                      <div
                        className={`${
                          currentKol !== toKol ? "hidden" : ""
                        } absolute left-0 inline-flex justify-between bottom-0 w-full bg-gradient-to-b from-[rgba(10, 22, 27, 0.75)] to-[rgba(0, 0, 0, 0)] px-33px pb-33px pad:px-27px pad:pb-27px mobile:px-24px mobile:pb-20px`}
                      >
                        <div className="text-white font-Grotesque-Medium text-20px pad:text-16px mobile:text-14px">
                          {item.listDescription}
                        </div>
                        <BaseLink link={`/storiesDetail/3vDn9k3B9VI1RwW1Ks2Sqy`}>
                        {/* <BaseLink link={`/storiesDetail/${item.sys.id}`}> */}
                          <div className="inline-block bg-[url('/assets/range/icon_arrow.png')] bg-cover cursor-pointer w-30px h-30px pad:w-24px pad:h-24px mobile:w-18px mobile:h-18px"></div>
                        </BaseLink>
                      </div>
                    </>
                  )}
                  {currentKol !== index && (
                    <>
                      <div
                        key={index}
                        className={`relative group grayscale hover:grayscale-0 w-139px h-full pad:w-139px mobile:w-full mobile:pt-0 mobile:mt-2px transition-all ease-in-out duration-1000 ${
                          toKol === index
                            ? "w-615px pad:w-492px mobile:h-360px grayscale-0"
                            : "w-139px pad:w-139px mobile:h-94px"
                        }`}
                      >
                        <div
                          className={`absolute w-full transition-all group-hover:text-white ease-in-out duration-1000 top-98px hover:top-0 ${
                            toKol === index
                              ? "w-615px h-516px pad:w-615px pad:h-516px mobile:w-full mobile:h-360px text-white"
                              : "w-139px h-420px pad:w-139px pad:h-420px mobile:w-full mobile:h-94px"
                          }`}
                        >
                          <div
                            className={`${
                              toKol === index ? "hidden" : ""
                            } absolute z-10 font-AlbertusNova-Regular text-18px rotate-90 top-90px left-13px pad:top-[30%] pad:-left-[46%] pad:w-250px mobile:text-14px mobile:rotate-0 mobile:text-white mobile:ml-20px mobile:top-40px`}
                          >
                            {item.listName}
                          </div>
                          <div
                            onClick={() => {
                              handleAnimation(index);
                            }}
                            className="absolute cursor-pointer z-10 bottom-40px inline-block bg-cover left-1/2 bg-[url('/assets/range/icon_add_small.png')] w-30px h-30px -ml-19px group-hover:bg-[url('/assets/range/icon_add.png')] group-hover:w-60px group-hover:h-60px group-hover:-ml-34px pad:w-24px pad:h-24px pad:-mt-16px pad:group-hover:w-48px pad:group-hover:h-48px pad:group-hover:-ml-30px mobile:w-20px mobile:h-20px mobile:left-auto mobile:top-40px mobile:right-20px mobile:hover:w-20px mobile:hover:h-20px mobile:hover:mt-0px"
                          ></div>
                          <div
                            className={`absolute inline-block object-cover mobile:w-full transition-all ease-in-out duration-1000 ${
                              toKol === index
                                ? "w-615px h-516px pad:w-615px pad:h-516px mobile:h-360px"
                                : "w-139px h-420px pad:w-139px pad:h-420px mobile:h-94px"
                            }`}
                          >
                            <div
                              className={`${
                                toKol === index
                                  ? "w-full h-full"
                                  : "w-0 h-0 overflow-hidden"
                              } relative`}
                            >
                              <BaseImage
                                mImg={item.listImage.imagemobile.url}
                                pImg={item.listImage.imagepc.url}
                                alt={item.listImage.altText}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                              ></BaseImage>
                            </div>
                            <div
                              className={`${
                                toKol === index
                                  ? "w-0 h-0 overflow-hidden"
                                  : "w-full h-full"
                              } relative`}
                            >
                              <BaseImage
                                mImg={item.listSmallImage.imagemobile.url}
                                pImg={item.listSmallImage.imagepc.url}
                                alt={item.listSmallImage.altText}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                              ></BaseImage>
                            </div>
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
    </section>
  );
}

export default TalesFromTheWildComponent;

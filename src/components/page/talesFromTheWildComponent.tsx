"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import BaseImage from "@/components/base/image";

export interface Kol {
  id?: string;
  name?: string;
  avatar: string;
  banner: string;
  description?: string;
}

function TalesFromTheWildComponent(props: any) {
  const [currentKol, setKol] = useState<number>(0);
  const [kolList, setKolList] = useState<Array<Kol>>(props.data.entry.kols);
  const [hasNavigation, setHasNavigation] = useState<boolean>(
    props.data.entry.hasNavigation
  );
  console.log(props);
  const headStyle = props.data.entry.headStyle;
  useEffect(() => {}, [currentKol, kolList]);

  return (
    <div
      id="TalesFromTheWild"
      className="relative overflow-hidden bg-[#E6E7E8]"
    >
      <input type="hidden" value={headStyle}/>
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
                      {/* <div className="relative" key={index}> */}
                      <Image
                        className={`object-cover w-615px h-516px paid:w-492px paid:h-414px mobile:w-full mobile:h-360px transition-all ease-in-out duration-1000 ${ currentKol === index ? 'opacity-100' : 'opacity-0'}`}
                        src={item.banner}
                        alt={""}
                        object-fit="contain"
                        quality="100"
                        width={500}
                        height={500}
                      ></Image>
                      <div className="absolute top-0 left-0 inline-flex flex-row items-center px-33px pt-33px paid:px-27px paid:pt-27px mobile:px-20px mobile:mt-10px">
                        <Image
                          className="object-cover w-48px h-48px paid:w-39px paid:h-39px mobile:w-48px mobile:h-48px"
                          src={item.avatar}
                          alt={""}
                          object-fit="contain"
                          quality="100"
                          width={500}
                          height={500}
                        ></Image>
                        <div className="text-white text-16px ml-10px paid:text-14px mobile:text-14px">
                          {item.name}
                        </div>
                      </div>
                      <div className="absolute inline-flex justify-between bottom-0 w-full bg-gradient-to-b from-[rgba(10, 22, 27, 0.75)] to-[rgba(0, 0, 0, 0)] px-33px pb-33px paid:px-27px paid:pb-27px mobile:px-24px ">
                        <div className="text-white font-Grotesque-Medium text-20px paid:text-16px mobile:text-14px">
                          {item.description}
                        </div>
                        <div className="inline-block bg-[url('/assets/range/icon_arrow.png')] bg-cover cursor-pointer w-30px h-30px paid:w-24px paid:h-24px mobile:w-18px mobile:h-18px"></div>
                      </div>
                      {/* </div> */}
                    </>
                  )}
                  {currentKol !== index && (
                    <>
                      <div
                        key={index}
                        className="relative grayscale hover:grayscale-0 hover:text-white hover:animate-move-top w-139px h-452px top-77px paid:w-111px paid:h-362px paid:top-52px mobile:w-full mobile:top-0 mobile:mt-2px mobile:h-94px"
                      >
                        <div className="absolute font-AlbertusNova-Regular text-16px rotate-90 top-60px mobile:text-14px mobile:rotate-0 mobile:text-white mobile:ml-20px mobile:top-40px">
                          {item.name}
                        </div>
                        <div
                          onClick={() => {
                            setKol(index);
                          }}
                          className="absolute cursor-pointer z-10 bottom-20px inline-block bg-cover left-1/2 bg-[url('/assets/range/icon_add_small.png')] w-30px h-30px -ml-15px hover:bg-[url('/assets/range/icon_add.png')] hover:w-60px hover:h-60px hover:-ml-30px paid:w-24px paid:h-24px paid:-mt-12px paid:hover:w-48px paid:hover:h-48px paid:hover:-ml-24px mobile:w-18px mobile:h-18px mobile:left-auto mobile:top-40px mobile:right-20px"
                        ></div>
                        <Image
                          className="object-cover w-139px h-452px paid:w-111px paid:h-362px mobile:w-full mobile:h-94px"
                          src={item.banner}
                          alt={""}
                          object-fit="contain"
                          quality="100"
                          width={500}
                          height={500}
                        ></Image>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
        </div>
      </div>
      <div className="w-full absolute bottom-0 z-10 mobile:h-110px mobile:bg-gradient-to-t mobile:from-[rgba(0,0,0)] mobile:to-[rgba(0,0,0,0.1)]"></div>
      { hasNavigation && (
        <div className="w-full absolute bottom-20px z-20 font-Grotesque-Regular text-[#969797] uppercase text-20px paid:text-14px mobile:text-10px">
          <div className="flex justify-between mx-auto w-[1250px] paid:w-1000px mobile:w-full text-center">
            <a href="#ProductsFamily" className="inline-block mobile:w-64px">
              products family
            </a>
            <a
              href="#TalesFromTheWild"
              className="relative inline-block text-[#696969] mobile:w-64px mobile:text-white"
            >
              Tales From The Wild
              <div className="bg-[url('/assets/range/icon_nav_line.png')] absolute bg-cover z-10 left-1/2 w-189px h-7px top-30px -ml-95px paid:w-154px paid:h-6px paid:top-24px paid:-ml-77px mobile:top-36px mobile:w-64px mobile:h-3px mobile:-ml-32px"></div>
            </a>
            <a href="#ServingSuggestion" className="inline-block mobile:w-64px">
              Serving Suggestion
            </a>
            <a href="#BottleConcept" className="inline-block mobile:w-64px">
              Bottle Concept
            </a>
            <a href="#FlavourFinder" className="inline-block mobile:w-64px">
              Flavour Finder
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default TalesFromTheWildComponent;

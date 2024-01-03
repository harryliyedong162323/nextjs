"use client";

import React, { useEffect, useState } from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
import {getLastPathName} from "@/utils/common";
import {usePathname} from "next/navigation";
function Footer(props: any) {
  const scrollToPage = props.scrollToPage;

  const headStyle = "none";
  const [language, setLanguage] = useState(false);

  const lastPathName = getLastPathName(usePathname());


  useEffect(() => {


    function wheelHandle(e: Event) {

      e.preventDefault();
      e.stopPropagation();

    }

    function keyDownHandle(e: Event){
      e.preventDefault();
      e.stopPropagation();
    }
    if (language) {
      document.addEventListener("wheel", wheelHandle, { passive: false });
      document.addEventListener("keydown", keyDownHandle, { passive: false });
    }
    return () => {
      const option: any = { passive: false };
      document.removeEventListener("wheel", wheelHandle, option);
      document.removeEventListener("keydown", keyDownHandle, option);
    };
  }, [language]);



  const hanleLanguage = () => {
    setLanguage(true);
  };
  const hanleCloseLanguage = () => {
    setLanguage(false);
  };

  const [pannels, setPanels] = useState([
    {
      id: 1,
      isExpanded: false,
      title: [
        {
          id: 2,
          name: "OUR STORY",
          link: "/story",
        },
      ],
      list: [
        {
          id: 3,
          content: "A Drop Of Wilderness",
          link: "/story?anchor=ADropOfWildness",
        },
        {
          id: 4,
          content: "What Others Say",
          link: "/story?anchor=WhatOthersSay",
        },
      ],
    },
    {
      id: 5,
      isExpanded: false,
      title: [
        {
          id: 6,
          name: "THE WILDMOOR RANGE",
          link: "/range",
        },
      ],
      list: [
        {
          id: 7,
          content: "Products Family",
          link: "/range?anchor=ProductsFamily",
        },
        {
          id: 8,
          content: "Tales From The Wild",
          link: "/range?anchor=TalesFromTheWild",
        },
        {
          id: 9,
          content: "Serving Suggestion",
          link: "/range?anchor=ServingSuggestion",
        },
        {
          id: 10,
          content: "Bottle Concept",
          link: "/range?anchor=BottleConcept",
        },
        {
          id: 99,
          content: "Discover your Wild Flavour",
          link: "/range?anchor=DiscoverYourWildFlavour",
        },
      ],
    },
    {
      id: 11,
      isExpanded: false,
      title: [
        {
          id: 12,
          name: "THE WILD ESCAPE",
          link: "/localMarketActivity",
        },
      ],
      list: [
        {
          id: 1311,
          content: "Wildmoor House",
          link: "/localMarketActivity?anchor=WildmoorHouse",
        },
        {
          id: 13,
          content: "Global News",
          link: "/localMarketActivity?anchor=GlobalNews",
        },
        {
          id: 14,
          content: "The Wild Escape",
          link: "/localMarketActivity?anchor=TheWildEscape",
        },
        {
          id: 15,
          content: "Tales From The Wild",
          link: "/localMarketActivity?anchor=TalesFromTheWild",
        },
      ],
    },
    {
      id: 17,
      isExpanded: false,
      title: [
        {
          id: 18,
          name: "FIND A DROP OF WILDERNESS NEAR YOU",
          link: "/howToBuy",
        },
      ],
      list: [
        {
          id: 13,
          content: "Region Select & Global Store Map",
          link: "/howToBuy?anchor=RegionSelect",
        },
        {
          id: 191,
          content: "IRL Experiences",
          link: "/howToBuy?anchor=IRLExperiences",
        },
        {
          id: 6262,
          content: "Digital Experience",
          link: "/howToBuy?anchor=DigitalExperience",
        },
      ],
    },
  ]);

  const togglePanel = (id: any) => {
    const newPanels = pannels.map((panel) => {
      if (panel.id === id) {
        return { ...panel, isExpanded: !panel.isExpanded };
      } else {
        return { ...panel, isExpanded: false }; // 关闭其他面板
      }
    });
    setPanels(newPanels);
  };
  return (
    <footer className="relative overflow-hidden select-none">
      <input type="hidden" value={headStyle} />
      {/*h-900px*/}
      <div className="w-full bg-[#E6E7E8] h-screen pt-100px pl-50px pr-50px pb-100px bg-[url('/assets/mask_footer.png')] bg-left-top bg-no-repeat mobile:bg-contain mobile:bg-center mobile:pt-31px mobile:pb-78px mobile:h-auto mobile:bg-[url('/assets/mask_footer_2.png')]">
        <div className="flex justify-between pb-50px border-b-2 border-b-500 border-solid border-dark-grey mobile:justify-center mobile:flex-wrap mobile:pb-40px">
          {/*mobile:w-274px mobile:h-44px*/}
          <div className="mobile:w-full mobile:order-2">
            <BaseLink link="/home">
              <div className="bg-[url('/assets/wildmoor_footer.png')] w-262px h-41px bg-cover cursor-pointer mobile:h-27px mobile:w-173px mobile:mx-auto"></div>
            </BaseLink>
          </div>
          <div className="mobile:order-1 mobile:w-full">
            <div
              className="w-44px h-46px bg-[url('/assets/scroll_top.png')] bg-cover cursor-pointer mobile:mb-45px mobile:mx-auto mobile:w-40px mobile:h-42px"
              onClick={() => {
                scrollToPage(0);
              }}
            ></div>
          </div>
        </div>
        <div className="flex justify-between pt-50px pb-50px mobile:flex-wrap mobile:justify-center">
          {pannels.map((panel) => (
            <ul
              className="flex-auto mobile:w-full mobile:hidden"
              key={panel.id}
            >
              <li className="flex justify-between pb-35px mobile:pb-40px">
                <span className="mobile:text-17px">
                  <BaseLink link={panel.title[0].link} className="text-20px font-medium font-Grotesque-Medium dark-grey">
                    {panel.title[0].name}
                  </BaseLink>
                </span>
                <span className="text-33px w-23px h-23px hidden bg-[url('/assets/add_footer.png')] bg-contain cursor-pointer mobile:block"></span>
              </li>
              {panel.list.map((item) => (
                <li
                  className="pb-17px mobile:hidden"
                  key={item.id}
                >
                  <BaseLink link={item.link} hover="text-black-500" className="text-[#696969] text-16px font-normal font-Grotesque-Regular ">
                    {item.content}
                  </BaseLink>
                </li>
              ))}
            </ul>
          ))}

          {pannels.map((panel) => (
            <ul
              className="flex-auto hidden mobile:w-full mobile:block"
              key={panel.id}
            >
              <li className="flex justify-between pb-35px mobile:pb-40px">
                <span className=" w-11/12  mobile:text-17px">
                  <BaseLink link={panel.title[0].link} className="text-20px font-medium font-Grotesque-Regular dark-grey">
                    {panel.title[0].name}
                  </BaseLink>
                </span>
                <span
                  className="text-33px w-23px h-23px hidden bg-[url('/assets/add_footer.png')] bg-contain cursor-pointer mobile:block"
                  onClick={() => togglePanel(panel.id)}
                ></span>
              </li>
              {panel.isExpanded && (
                <div className="mobile:mt-[-22px] mobile:mb-20px">
                  {panel.list.map((item) => (
                    <li
                      className="text-[#696969] text-16px font-normal font-Grotesque-Regular  pb-17px mobile:block "
                      key={item.id}
                    >
                      <div className="flex  justify-between">
                        <div className="w-11/12">
                          <BaseLink link={item.link} hover="text-black-500">
                            {item.content}
                          </BaseLink>
                        </div>

                        <div className="w-13px h-25px bg-[url('/assets/arrow-right.png')] bg-contain bg-no-repeat paid:w-15px  paid:h-16px mobile:w-15px mobile:h-17px reactive">
                          {/*<BaseImage*/}
                          {/*  mImg={require("../../../public/assets/KVAnimation/arrow-right.png")}*/}
                          {/*  pImg={require("../../../public/assets/KVAnimation/arrow-right.png")}*/}
                          {/*  alt={""}*/}
                          {/*  objectFit="contain"*/}
                          {/*  quality={100}*/}
                          {/*></BaseImage>*/}
                        </div>
                      </div>
                    </li>
                  ))}
                </div>
              )}
            </ul>
          ))}
        </div>

        <div className="border-b-2 border-b-500 border-solid border-[#969797] pb-100px mobile:pb-50px">
          <div className="text-[#262627] text-16px font-normal font-Grotesque-Regular pb-46px mobile:text-center mobile:text-14px mobile:23px">
            Join us for more from the Wild
          </div>

          <div>
            <ul className="flex mobile:w-full mobile:justify-center">
              <li className="w-36px h-36px cursor-pointer mr-36px mobile:w-25px mobile:h-25px mobile:mr-25px">
                <BaseLink hover="text-black-500">
                  <span className="block w-36px h-36px bg-cover bg-[url('/assets/instagram.png')] mobile:w-25px mobile:h-25px"></span>
                </BaseLink>
              </li>
              <li className="w-36px h-36px cursor-pointer mr-36px mobile:w-25px mobile:h-25px mobile:mr-25px">
                <BaseLink hover="text-black-500">
                  <span className="block w-36px h-36px bg-cover bg-[url('/assets/facebook.png')] mobile:w-25px mobile:h-25px"></span>
                </BaseLink>
              </li>
              <li className="w-36px h-36px cursor-pointer mr-36px mobile:w-25px mobile:h-25px mobile:mr-0">
                <BaseLink hover="text-black-500">
                  <span className="block w-36px h-36px bg-cover bg-[url('/assets/youtube.png')] mobile:w-25px mobile:h-25px"></span>
                </BaseLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-45px flex justify-between mobile:flex-wrap">
          <div className="text-16px  mobile:w-full">
            <ul className="flex mobile:flex-wrap mobile:justify-center mobile:text-center">
              <li className="mr-84px text-[#696969] font-Grotesque-Regular mobile:hidden">
                &copy; 2023 WILDMOOR All rights reserved
              </li>
              <li className="mr-84px mobile:mr-0 mobile:w-full mobile:mb-25px">
                <BaseLink link="/privacyPolicy" className="font-Grotesque-Regular text-black">Privacy policy</BaseLink>
              </li>
              <li className="mobile:w-full mobile:mb-64px">
                <BaseLink className="font-Grotesque-Regular text-black">Terms of Service</BaseLink>
              </li>
            </ul>
          </div>
          <div className="pr-21px flex mobile:pr-0 mobile:w-full mobile:justify-center mobile:pb-53px">
            <div className="w-24px h-24px mr-10px  bg-cover bg-[url('/assets/language.png')]"></div>
            <div
              className=" font-Grotesque-Regular  text-black text-16px font-medium cursor-pointer"
              onClick={hanleLanguage}
            >
              Location and Language
            </div>
          </div>

          <div className="text-[#696969] font-Grotesque-Regular hidden mobile:text-14px mobile:w-full mobile:text-center mobile:block">
            <BaseLink>&copy; 2023 WILDMOOR All rights reserved</BaseLink>
          </div>
        </div>
      </div>
      {language && (

          <div className="absolute w-full h-screen select-none top-0 right-0 z-30">
            <div className="flex w-full justify-between h-screen">
              <div className="flex  flex-1"   onClick={hanleCloseLanguage}></div>
              <div className="w-400px h-full bg-[#FFFFFF]  pl-33px pr-33px paid:pl-24px paid:pr-24px paid:w-285px mobile:w-full mobile:pl-20px mobile:pr-20px ">
                <div className="flex items-center  mt-27px paid:mt-19px mobile:mt-44px mobile:reactive ">
                  <div className="hidden mobile:block mobile:absolute mobile:left-1/2 mobile:translate-x-[-50%] mobile:w-29px  mobile:h-29px mobile:mr-133px mobile:reactive ">
                    <BaseImage
                        mImg={require("../../../public/assets/logo.png")}
                        pImg={require("../../../public/assets/logo.png")}
                        alt={""}
                        objectFit="contain"
                        quality={100}
                    ></BaseImage>
                  </div>
                  <div
                      className="w-20px h-19px absolute right-33px paid:right-24px   paid:w-14px  paid:h-13px mobile:right-20px mobile:w-20px mobile:h-19px reactive cursor-pointer"
                      onClick={hanleCloseLanguage}
                  >
                    <BaseImage
                        mImg={require("../../../public/assets/KVAnimation/close.png")}
                        pImg={require("../../../public/assets/KVAnimation/close.png")}
                        alt={""}
                        objectFit="contain"
                        quality={100}
                    ></BaseImage>
                  </div>
                </div>
                <div className="flex flex-col mt-67px paid:mt-48px mobile:mt-73px">
                  <div className="mb-75px paid:mb-54px mobile:mb-60px">
                    <BaseLink className={"flex justify-between items-center "} autoLanguage={false} link={`/zh-CN/${lastPathName}`}>
                      <div className="uppercase text-13px paid:text-10px mobile:text-15px not-italic text-[#262627]  font-normal font-Grotesque-Regular w-4/5 truncate">
                        CHINA MAINLAND-SIMPLIFIED CHINESE
                      </div>
                      <div className="w-13px h-25px bg-[url('/assets/arrow-right.png')] bg-contain bg-no-repeat paid:w-15px  paid:h-16px mobile:w-15px mobile:h-17px reactive">
                        {/*<BaseImage*/}
                        {/*  mImg={require("../../../public/assets/KVAnimation/arrow-right.png")}*/}
                        {/*  pImg={require("../../../public/assets/KVAnimation/arrow-right.png")}*/}
                        {/*  alt={""}*/}
                        {/*  objectFit="contain"*/}
                        {/*  quality={100}*/}
                        {/*></BaseImage>*/}
                      </div>
                    </BaseLink>
                  </div>
                  <div className="mb-75px paid:mb-54px mobile:mb-60px">
                    <BaseLink className={"flex justify-between items-center "} autoLanguage={false} link={`/zh-Hant-TW/${lastPathName}`}>
                      <div className="uppercase text-13px paid:text-10px mobile:text-15px  not-italic text-[#262627] font-normal font-Grotesque-Regular w-4/5 truncate">
                        Taiwan region - traditional Chinese
                      </div>
                      <div className="w-13px h-25px bg-[url('/assets/arrow-right.png')] bg-contain bg-no-repeat paid:w-15px  paid:h-16px mobile:w-15px mobile:h-17px reactive">
                        {/*<BaseImage*/}
                        {/*  mImg={require("../../../public/assets/KVAnimation/arrow-right.png")}*/}
                        {/*  pImg={require("../../../public/assets/KVAnimation/arrow-right.png")}*/}
                        {/*  alt={""}*/}
                        {/*  objectFit="contain"*/}
                        {/*  quality={100}*/}
                        {/*></BaseImage>*/}
                      </div>
                    </BaseLink>
                  </div>
                  <div className="mb-75px paid:mb-54px mobile:mb-60px">
                    <BaseLink className={"flex justify-between items-center "} autoLanguage={false} link={`/ko-KR/${lastPathName}`}>
                      <div className="uppercase text-13px paid:text-10px mobile:text-15px not-italic text-[#262627] font-normal font-Grotesque-Regular w-4/5 truncate">
                        Korea - Korean
                      </div>
                      <div className="w-13px h-25px bg-[url('/assets/arrow-right.png')] bg-contain bg-no-repeat paid:w-15px  paid:h-16px mobile:w-15px mobile:h-17px reactive">
                        {/*<BaseImage*/}
                        {/*  mImg={require("../../../public/assets/KVAnimation/arrow-right.png")}*/}
                        {/*  pImg={require("../../../public/assets/KVAnimation/arrow-right.png")}*/}
                        {/*  alt={""}*/}
                        {/*  objectFit="contain"*/}
                        {/*  quality={100}*/}
                        {/*></BaseImage>*/}
                      </div>
                    </BaseLink>
                  </div>
                  <div className="mb-75px paid:mb-54px mobile:mb-60px">
                    <BaseLink className={"flex justify-between items-center "} autoLanguage={false} link={`/en/${lastPathName}`}>
                      <div className="uppercase text-13px paid:text-10px mobile:text-15px not-italic text-[#262627] font-normal font-Grotesque-Regular w-4/5 truncate">
                        Singapore - English
                      </div>
                      <div className="w-13px h-25px bg-[url('/assets/arrow-right.png')] bg-contain bg-no-repeat paid:w-15px  paid:h-16px mobile:w-15px mobile:h-17px reactive">
                        {/*<BaseImage*/}
                        {/*  mImg={require("../../../public/assets/KVAnimation/arrow-right.png")}*/}
                        {/*  pImg={require("../../../public/assets/KVAnimation/arrow-right.png")}*/}
                        {/*  alt={""}*/}
                        {/*  objectFit="contain"*/}
                        {/*  quality={100}*/}
                        {/*></BaseImage>*/}
                      </div>
                    </BaseLink>
                  </div>
                </div>
                <div className="uppercase text-13px paid:text-9px text-black mobile:text-15px font-semibold">
                  United Kingdom - English
                </div>
              </div>

            </div>
          </div>
      )}
    </footer>
  );
}

export default Footer;

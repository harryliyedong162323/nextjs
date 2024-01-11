"use client";

import React, { useEffect, useState } from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
import { getLocalPathName } from "@/utils/common";
import { usePathname } from "next/navigation";

// const [pannels, setPanels] = useState([
//   {
//     id: 1,
//     isExpanded: false,
//     title: [
//       {
//         id: 2,
//         name: footerData.group1Title,
//         link: "/story",
//       },
//     ],
//     list: [
//       {
//         id: 3,
//         content: "A Drop Of Wilderness",
//         link: "/story?anchor=ADropOfWildness",
//       },
//       {
//         id: 4,
//         content: "What Others Say",
//         link: "/story?anchor=WhatOthersSay",
//       },
//     ],
//   },
//   {
//     id: 5,
//     isExpanded: false,
//     title: [
//       {
//         id: 6,
//         name: footerData.group2Title,
//         link: "/range",
//       },
//     ],
//     list: [
//       {
//         id: 7,
//         content: "Products Family",
//         link: "/range?anchor=ProductsFamily",
//       },
//       {
//         id: 8,
//         content: "Tales From The Wild",
//         link: "/range?anchor=TalesFromTheWild",
//       },
//       {
//         id: 9,
//         content: "Serving Suggestion",
//         link: "/range?anchor=ServingSuggestion",
//       },
//       {
//         id: 10,
//         content: "The Story Behind our Bottle",
//         link: "/range?anchor=BottleConcept",
//       },
//       {
//         id: 99,
//         content: "Discover your Wild Flavour",
//         link: "/range?anchor=DiscoverYourWildFlavour",
//       },
//     ],
//   },
//   {
//     id: 11,
//     isExpanded: false,
//     title: [
//       {
//         id: 12,
//         name: footerData.group3Title,
//         link: "/localMarketActivity",
//       },
//     ],
//     list: [
//       {
//         id: 1311,
//         content: "Global News",
//         link: "/localMarketActivity?anchor=WildmoorHouse",
//       },
//       {
//         id: 13,
//         content: "The Wild Escape",
//         link: "/localMarketActivity?anchor=GlobalNews",
//       },
//       {
//         id: 14,
//         content: "Tales From The Wild",
//         link: "/localMarketActivity?anchor=TheWildEscape",
//       },
//     ],
//   },
//   {
//     id: 17,
//     isExpanded: false,
//     title: [
//       {
//         id: 18,
//         name: footerData.group4Title,
//         link: "/howToBuy",
//       },
//     ],
//     list: [
//       {
//         id: 13,
//         content: "Region Select & Global Store Map",
//         link: "/howToBuy?anchor=RegionSelect",
//       },
//       {
//         id: 191,
//         content: "IRL Experiences",
//         link: "/howToBuy?anchor=IRLExperiences",
//       },
//       {
//         id: 6262,
//         content: "Digital Experience",
//         link: "/howToBuy?anchor=DigitalExperience",
//       },
//     ],
//   },
// ]);
//
//

interface groupItems {
  id: number;
  content: string;
  targetPage: string;
}

interface joinUsImagesContent {
  id: number;
  qrCodeImage: null | {
    altText: string;
    imagemobile: {
      url: string;
    };
    imagepc: {
      url: string;
    };
  };
  targetPage: string;
  iconImage: {
    altText: string;
    imagemobile: {
      url: string;
    };
    imagepc: {
      url: string;
    };
  };
}

interface locationAndLanguageContent {
  id?: number;
  language: string;
  region: string;
  targetUrl: string;
  path?: string;
}

export interface propsContent {
  currentSlideIndex?: number;
  getPageStore?: Function;
  updatePageStore?: Function;
  changeNavStatus?: Function;
  scrollToPage?: Function;
  data: {
    copyRightCta: {
      content: string;
      targetPage: string;
    };
    group1ItemsCollection: {
      items: Array<groupItems>;
    };
    group1Title: string;
    group2ItemsCollection: {
      items: Array<groupItems>;
    };
    group2Title: string;
    group3Title: string;
    group3ItemsCollection: {
      items: Array<groupItems>;
    };
    group4Title: string;
    group4ItemsCollection: {
      items: Array<groupItems>;
    };
    joinUsImagesCollection: {
      items: Array<joinUsImagesContent>;
    };
    joinUsPromptWord: string;
    locationAndLanguageCollection: {
      items: Array<locationAndLanguageContent>;
    };
    logo: {
      altText: string;
      imagemobile: {
        url: string;
      };
      imagepc: {
        url: string;
      };
    };
    privacyPolicyCta: {
      content: string;
      targetPage: string;
    };
    regionSwitchingPromptWords: string;
    termsOfServiceCta: {
      content: string;
      targetPage: string;
    };
  };
}

function getCurrentLocation(local: string, locationAndLanguage: any) {
  console.log(locationAndLanguage);
  const currentData = locationAndLanguage.filter(
    (item: locationAndLanguageContent) => {
      if (item.path == local) {
        return item;
      }
    }
  )[0];

  console.log(currentData);
  if (currentData) {
    return (
      <div>
        <p>
          {currentData.region}{" "}
          {!currentData.language && currentData.language == "" ? null : "-"}
        </p>

        {currentData.language && currentData.language == "" ? null : (
          <p>{currentData.language}</p>
        )}
      </div>
    );
  } else {
    return null;
  }
}

function Footer(props: any) {
  // console.log(props)

  const footerData = props.data;

  const locationAndLanguage =
    props.data.locationAndLanguageCollection.items.map(
      (item: locationAndLanguageContent, index: number) => {
        return {
          id: index,
          language: item.language,
          region: item.region,
          targetUrl: item.targetUrl,
          path: item.path,
        };
      }
    );

  const joinUsImages = props.data.joinUsImagesCollection.items.map(
    (item: joinUsImagesContent, index: number) => {
      return {
        id: index,
        qrCodeImage: item.qrCodeImage,
        link: item.targetPage,
        iconImage: item.iconImage,
      };
    }
  );

  const group1Items = props.data.group1ItemsCollection.items.map(
    (item: groupItems, index: number) => {
      return {
        id: index,
        content: item.content,
        targetPage: item.targetPage,
      };
    }
  );

  const group2Items = props.data.group2ItemsCollection.items.map(
    (item: groupItems, index: number) => {
      return {
        id: index,
        content: item.content,
        targetPage: item.targetPage,
      };
    }
  );
  const group3Items = props.data.group3ItemsCollection.items.map(
    (item: groupItems, index: number) => {
      return {
        id: index,
        content: item.content,
        targetPage: item.targetPage,
      };
    }
  );
  const group4Items = props.data.group4ItemsCollection.items.map(
    (item: groupItems, index: number) => {
      return {
        id: index,
        content: item.content,
        targetPage: item.targetPage,
      };
    }
  );

  const scrollToPage = props.scrollToPage;

  const headStyle = "none";
  const [language, setLanguage] = useState(false);
  const localPathName = getLocalPathName(usePathname());

  const currentSlideIndex = props.currentSlideIndex;

  useEffect(() => {
    setLanguage(false);
  }, [currentSlideIndex]);

  // useEffect(() => {
  //
  //
  //   function wheelHandle(e: Event) {
  //
  //     e.preventDefault();
  //     e.stopPropagation();
  //
  //   }
  //
  //   function keyDownHandle(e: Event){
  //     e.preventDefault();
  //     e.stopPropagation();
  //   }
  //   if (language) {
  //     document.addEventListener("wheel", wheelHandle, { passive: false });
  //     document.addEventListener("keydown", keyDownHandle, { passive: false });
  //   }
  //   return () => {
  //     const option: any = { passive: false };
  //     document.removeEventListener("wheel", wheelHandle, option);
  //     document.removeEventListener("keydown", keyDownHandle, option);
  //   };
  // }, [language]);

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
          name: footerData.group1Title,
          link: "/story",
        },
      ],
      list: [...group1Items],
    },
    {
      id: 5,
      isExpanded: false,
      title: [
        {
          id: 6,
          name: footerData.group2Title,
          link: "/range",
        },
      ],
      list: [...group2Items],
    },
    {
      id: 11,
      isExpanded: false,
      title: [
        {
          id: 12,
          name: footerData.group3Title,
          link: "/localMarketActivity",
        },
      ],
      list: [...group3Items],
    },
    {
      id: 17,
      isExpanded: false,
      title: [
        {
          id: 18,
          name: footerData.group4Title,
          link: "/howToBuy",
        },
      ],
      list: [...group4Items],
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
    <footer className="relative overflow-hidden bg-[#E6E7E8] select-none mobile:h-[100%]">
      <input type="hidden" value={headStyle} />
      {/*h-900px*/}
      <div className="w-full bg-[#E6E7E8] h-screen pt-100px pl-50px pr-50px pb-100px bg-[url('/assets/mask_footer.png')] bg-left-top bg-no-repeat mobile:bg-contain mobile:bg-center mobile:pt-31px mobile:pb-78px mobile:h-[100%] mobile:pl-30px mobile:pr-30px mobile:bg-[url('/assets/mask_footer_2.png')] mobile:bg-contain mobile:flex mobile:flex-col mobile:items-center mobile:justify-between">
        <div className="flex justify-between pb-50px border-b-2 border-b-500 border-solid border-dark-grey mobile:justify-center mobile:flex-wrap mobile:pb-30px mobile:w-[100%]">
          {/*mobile:w-274px mobile:h-44px*/}
          <div className="mobile:w-full mobile:order-2">
            <BaseLink link="/home">
              <div className="w-262px h-41px relative bg-cover cursor-pointer mobile:h-27px mobile:w-173px mobile:mx-auto">
                <BaseImage
                  mImg={footerData.logo.imagemobile.url}
                  pImg={footerData.logo.imagepc.url}
                  alt={footerData.logo.altText}
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                ></BaseImage>
              </div>
            </BaseLink>
          </div>
          <div className="mobile:order-1 mobile:w-full">
            <div
              className="w-44px h-46px bg-[url('/assets/scroll_top.svg')] bg-cover cursor-pointer mobile:mb-35px mobile:mx-auto mobile:w-40px mobile:h-42px"
              onClick={() => {
                scrollToPage(0);
              }}
            ></div>
          </div>
        </div>
        <div className="flex justify-between pt-50px mobile:pt-30px pb-50px mobile:flex-wrap mobile:justify-center">
          {pannels.map((panel) => (
            <ul
              className="flex-auto mobile:w-full mobile:hidden"
              key={panel.id}
            >
              <li className="flex justify-between pb-35px mobile:pb-40px items-center">
                <span className="mobile:text-17px">
                  <BaseLink
                    link={panel.title[0].link}
                    className="text-20px font-medium font-Grotesque-Medium dark-grey"
                  >
                    {panel.title[0].name}
                  </BaseLink>
                </span>
                <span className="text-33px w-23px h-23px mobile:w-23px mobile:h-23px hidden bg-[url('/assets/add_footer.png')] bg-contain cursor-pointer mobile:block"></span>
              </li>
              {panel.list.map((item) => (
                <li className="pb-17px mobile:hidden" key={item.id}>
                  <BaseLink
                    link={item.targetPage}
                    hover="text-black-500"
                    className="text-[#696969] text-16px font-normal font-Grotesque-Regular "
                  >
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
              <li className="flex justify-between items-start pb-35px mobile:pb-25px  ">
                <span className="w-10/12  mobile:text-17px">
                  <BaseLink
                    link={panel.title[0].link}
                    className="text-20px mobile:text-17px font-medium font-Grotesque-Medium dark-grey"
                  >
                    {panel.title[0].name}
                  </BaseLink>
                </span>

                {!panel.isExpanded ? (
                  <span
                    className={`text-33px w-23px h-23px mobile:w-23px mobile:h-23px hidden  bg-[url('/assets/add_footer.png')]   bg-contain cursor-pointer mobile:block`}
                    onClick={() => togglePanel(panel.id)}
                  ></span>
                ) : (
                  <span
                    className="text-21px pad:text-17px mobile:text-21px font-Grotesque-Medium"
                    onClick={() => togglePanel(panel.id)}
                  >
                    —
                  </span>
                )}
              </li>
              {panel.isExpanded && (
                <div className="mobile:mt-[-22px] mobile:mb-20px">
                  {panel.list.map((item) => (
                    <li
                      className="text-[#696969] text-16px font-normal font-Grotesque-Regular  pb-17px mobile:block  mobile:pb-20px"
                      key={item.id}
                    >
                      <div className="flex  justify-between">
                        <div className="w-11/12">
                          <BaseLink
                            link={item.targetPage}
                            hover="text-black-500"
                          >
                            {item.content}
                          </BaseLink>
                        </div>

                        <div className="w-13px h-25px bg-[url('/assets/arrow-right.png')] bg-contain bg-no-repeat pad:w-15px  pad:h-16px mobile:w-15px mobile:h-17px reactive">
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

        <div className="border-b-2 border-b-500 border-solid border-[#969797] pb-100px mobile:pb-25px mobile:w-[100%]">
          <div className="text-[#262627] text-16px font-normal font-Grotesque-Regular pb-46px mobile:text-center mobile:text-14px mobile:23px">
            {footerData.joinUsPromptWord}
          </div>

          <div>
            <ul className="flex mobile:w-full mobile:justify-center">
              {joinUsImages.length > 0 &&
                joinUsImages.map((item: any, index: number) => {
                  return (
                    <li
                      key={item.id}
                      className="w-36px h-36px cursor-pointer mr-36px mobile:w-25px mobile:h-25px mobile:mr-25px"
                    >
                      <BaseLink hover="text-black-500" link={item.targetPage}>
                        {/*bg-[url('/assets/instagram.png')]*/}
                        <span className="block w-36px h-36px bg-cover relative mobile:w-25px mobile:h-25px">
                          <BaseImage
                            mImg={item.iconImage.imagemobile.url}
                            pImg={item.iconImage.imagepc.url}
                            alt={item.iconImage.altText}
                            objectFit="contain"
                            layout="fill"
                            quality={100}
                          ></BaseImage>
                        </span>
                      </BaseLink>
                    </li>
                  );
                })}

              {/*<li className="w-36px h-36px cursor-pointer mr-36px mobile:w-25px mobile:h-25px mobile:mr-25px">*/}
              {/*  <BaseLink hover="text-black-500">*/}
              {/*    <span className="block w-36px h-36px bg-cover bg-[url('/assets/facebook.png')] mobile:w-25px mobile:h-25px"></span>*/}
              {/*  </BaseLink>*/}
              {/*</li>*/}
              {/*<li className="w-36px h-36px cursor-pointer mr-36px mobile:w-25px mobile:h-25px mobile:mr-0">*/}
              {/*  <BaseLink hover="text-black-500">*/}
              {/*    <span className="block w-36px h-36px bg-cover bg-[url('/assets/youtube.png')] mobile:w-25px mobile:h-25px"></span>*/}
              {/*  </BaseLink>*/}
              {/*</li>*/}
            </ul>
          </div>
        </div>

        <div className="pt-45px flex justify-between mobile:flex-wrap">
          <div className="text-16px  mobile:w-full">
            <ul className="flex mobile:flex-wrap mobile:justify-center mobile:text-center">
              <li className="mr-84px text-[#696969] font-Grotesque-Regular mobile:hidden">
                <BaseLink link={footerData.copyRightCta.targetPage}>
                  {footerData.copyRightCta.content}
                </BaseLink>
              </li>
              <li className="mr-84px mobile:mr-0 mobile:w-full mobile:mb-15px">
                <BaseLink
                  link={footerData.privacyPolicyCta.targetPage}
                  className="font-Grotesque-Regular text-black"
                >
                  {footerData.privacyPolicyCta.content}
                </BaseLink>
              </li>
              <li className="mobile:w-full mobile:mb-30px">
                <BaseLink
                  className="font-Grotesque-Regular text-black"
                  link={footerData.termsOfServiceCta.targetPage}
                >
                  {footerData.termsOfServiceCta.content}
                </BaseLink>
              </li>
            </ul>
          </div>
          <div className="pr-21px flex mobile:pr-0 mobile:w-full mobile:justify-center mobile:pb-30px items-center">
            <div className="w-24px h-24px mr-10px mobile:w-24px mobile:h-24px  bg-cover bg-[url('/assets/language@4.png')]"></div>
            <div
              className=" font-Grotesque-Medium  text-black text-16px font-medium cursor-pointer"
              onClick={hanleLanguage}
            >
              {footerData.regionSwitchingPromptWords}
            </div>
          </div>

          <div className="text-[#696969] font-Grotesque-Regular hidden mobile:text-14px mobile:w-full mobile:text-center mobile:block">
            <BaseLink link={footerData.copyRightCta.targetPage}>
              {footerData.copyRightCta.content}
            </BaseLink>
          </div>
        </div>
      </div>
      {language && (
        <div className="absolute w-full h-screen select-none top-0 right-0 z-30">
          <div className="flex w-full justify-between h-screen">
            <div className="flex  flex-1" onClick={hanleCloseLanguage}></div>
            <div className="w-381px h-full bg-[#FFFFFF]  pl-33px pr-33px pad:pl-24px pad:pr-24px pad:w-272px mobile:w-full mobile:pl-20px mobile:pr-20px shadow-[-7px_0_10px_0_rgba(0,0,0,0.05)] ">
              <div className="flex items-center  mt-27px pad:mt-19px mobile:mt-44px mobile:reactive ">
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
                  className="w-20px h-19px absolute right-33px pad:right-24px   pad:w-14px  pad:h-13px mobile:right-20px mobile:w-20px mobile:h-19px reactive cursor-pointer"
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
              <div className="flex flex-col mt-67px pad:mt-48px mobile:mt-73px">
                {locationAndLanguage.length > 0 &&
                  locationAndLanguage.map(
                    (item: locationAndLanguageContent, index: number) => {
                      return (
                        <div
                          key={item.id}
                          className="mb-75px pad:mb-54px mobile:mb-60px"
                        >
                          <BaseLink
                            className={"flex justify-between items-center "}
                            autoLanguage={false}
                            link={`${item.targetUrl}`}
                          >
                            <div className="uppercase text-13px pad:text-10px mobile:text-15px not-italic text-[#262627]  font-normal font-Grotesque-Regular w-4/5 truncate">
                              <p>
                                {item.region}{" "}
                                {!item.language && item.language == ""
                                  ? null
                                  : "-"}
                              </p>

                              {item.language && item.language == "" ? null : (
                                <p>{item.language}</p>
                              )}
                            </div>
                            <div className="w-13px h-25px bg-[url('/assets/arrow-right.png')] bg-contain bg-no-repeat pad:w-15px  pad:h-16px mobile:w-15px mobile:h-17px reactive"></div>
                          </BaseLink>
                        </div>
                      );
                    }
                  )}

                {/*<div className="mb-75px pad:mb-54px mobile:mb-60px">*/}
                {/*  <BaseLink*/}
                {/*    className={"flex justify-between items-center "}*/}
                {/*    autoLanguage={false}*/}
                {/*    link={`/zh-Hant-TW/${lastPathName}`}*/}
                {/*  >*/}
                {/*    <div className="uppercase text-13px pad:text-10px mobile:text-15px  not-italic text-[#262627] font-normal font-Grotesque-Regular w-4/5 truncate">*/}
                {/*      <p>Taiwan region -</p>*/}
                {/*      <p>traditional Chinese</p>*/}
                {/*    </div>*/}
                {/*    <div className="w-13px h-25px bg-[url('/assets/arrow-right.png')] bg-contain bg-no-repeat pad:w-15px  pad:h-16px mobile:w-15px mobile:h-17px reactive">*/}
                {/*      /!*<BaseImage*!/*/}
                {/*      /!*  mImg={require("../../../public/assets/KVAnimation/arrow-right.png")}*!/*/}
                {/*      /!*  pImg={require("../../../public/assets/KVAnimation/arrow-right.png")}*!/*/}
                {/*      /!*  alt={""}*!/*/}
                {/*      /!*  objectFit="contain"*!/*/}
                {/*      /!*  quality={100}*!/*/}
                {/*      /!*></BaseImage>*!/*/}
                {/*    </div>*/}
                {/*  </BaseLink>*/}
                {/*</div>*/}
                {/*<div className="mb-75px pad:mb-54px mobile:mb-60px">*/}
                {/*  <BaseLink*/}
                {/*    className={"flex justify-between items-center "}*/}
                {/*    autoLanguage={false}*/}
                {/*    link={`/ko-KR/${lastPathName}`}*/}
                {/*  >*/}
                {/*    <div className="uppercase text-13px pad:text-10px mobile:text-15px not-italic text-[#262627] font-normal font-Grotesque-Regular w-4/5 truncate">*/}
                {/*      <p>Korea -</p>*/}
                {/*      <p>Korean</p>*/}
                {/*    </div>*/}
                {/*    <div className="w-13px h-25px bg-[url('/assets/arrow-right.png')] bg-contain bg-no-repeat pad:w-15px  pad:h-16px mobile:w-15px mobile:h-17px reactive">*/}
                {/*      /!*<BaseImage*!/*/}
                {/*      /!*  mImg={require("../../../public/assets/KVAnimation/arrow-right.png")}*!/*/}
                {/*      /!*  pImg={require("../../../public/assets/KVAnimation/arrow-right.png")}*!/*/}
                {/*      /!*  alt={""}*!/*/}
                {/*      /!*  objectFit="contain"*!/*/}
                {/*      /!*  quality={100}*!/*/}
                {/*      /!*></BaseImage>*!/*/}
                {/*    </div>*/}
                {/*  </BaseLink>*/}
                {/*</div>*/}
                {/*<div className="mb-75px pad:mb-54px mobile:mb-60px">*/}
                {/*  <BaseLink*/}
                {/*    className={"flex justify-between items-center "}*/}
                {/*    autoLanguage={false}*/}
                {/*    link={`/en/${lastPathName}`}*/}
                {/*  >*/}
                {/*    <div className="uppercase text-13px pad:text-10px mobile:text-15px not-italic text-[#262627] font-normal font-Grotesque-Regular w-4/5 truncate">*/}
                {/*      <p>Singapore -</p>*/}
                {/*      <p>English</p>*/}
                {/*    </div>*/}
                {/*    <div className="w-13px h-25px bg-[url('/assets/arrow-right.png')] bg-contain bg-no-repeat pad:w-15px  pad:h-16px mobile:w-15px mobile:h-17px reactive">*/}
                {/*      /!*<BaseImage*!/*/}
                {/*      /!*  mImg={require("../../../public/assets/KVAnimation/arrow-right.png")}*!/*/}
                {/*      /!*  pImg={require("../../../public/assets/KVAnimation/arrow-right.png")}*!/*/}
                {/*      /!*  alt={""}*!/*/}
                {/*      /!*  objectFit="contain"*!/*/}
                {/*      /!*  quality={100}*!/*/}
                {/*      /!*></BaseImage>*!/*/}
                {/*    </div>*/}
                {/*  </BaseLink>*/}
                {/*</div>*/}
              </div>
              <div className="uppercase text-13px pad:text-9px text-black mobile:text-15px font-semibold">
                {localPathName && localPathName != ""
                  ? getCurrentLocation(localPathName, locationAndLanguage)
                  : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;

"use client";
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
import {getLastPathName} from "@/utils/common";
function Header(props: any) {
  const [menu, setMenu] = useState(false);
  const currentSlideIndex = props.currentSlideIndex;
  console.log(currentSlideIndex);





  function wheelHandle(e: Event) {

    e.preventDefault();
    e.stopPropagation();
  }


  function keyDownHandle(e: Event){
    e.preventDefault();
    e.stopPropagation();
  }



  useEffect(() => {

    const option: object = { passive: false };

    setMenu(false)
    document.addEventListener("wheel", wheelHandle, option);
    document.addEventListener("keydown", keyDownHandle, option);


    setTimeout(()=>{
      document.removeEventListener("wheel", wheelHandle, option);
      document.removeEventListener("keydown", keyDownHandle, option);
    },500)


  }, [currentSlideIndex]);


  // useEffect(() => {
  //     setTimeout(()=>{setIsCurrentPage(true)},500)
  // }, [props]);


  // useEffect(() => {
  //
  //   if (menu) {
  //     // const lock = document.getElementsByClassName('lock');
  //     document.addEventListener("wheel", wheelHandle, { passive: false });
  //     document.addEventListener("keydown", keyDownHandle, { passive: false });
  //
  //     // setTimeout(()=>{
  //     //   for(let i=0;i<lock.length;i++){
  //     //     lock[i].addEventListener("wheel", function(e){
  //     //       e.stopPropagation();
  //     //     });
  //     //   }
  //     // },0)
  //   }
  //   return () => {
  //     const option: any = { passive: false };
  //
  //     document.removeEventListener("wheel", wheelHandle, option);
  //     document.removeEventListener("keydown", keyDownHandle, option);
  //
  //
  //   };
  // }, [menu]);






  const headStyle = props.headStyle || "white";

  const handleMenuChange = (menu: boolean) => {

    setMenu(menu);
  };


  const handleMenu = () => {
    setMenu(true);
    // document.body.style.overflow = 'hidden';
  };
  return (
    <div>
      <nav
        id="nav-white"
        className={`h-85px w-full fixed left-0 top-0 z-30 opacity-0 animate-fadeIn mobile:h-59px ${
          headStyle == "white" ? "block" : "hidden"
        }`}
      >
        <div className="bg-[url('/assets/header_logo.png')] w-44px h-44px absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] mobile:w-28px mobile:h-28px "></div>
        <div
          className="bg-[url('/assets/menu-white.png')] w-44px h-44px mobile:w-20px mobile:h-20px  absolute right-[45px] top-1/2 translate-y-[-50%] cursor-pointer"
          onClick={() => {
            handleMenu();
          }}
        ></div>
        {<Panel menuFlag={menu} onMenuChange={handleMenuChange} ></Panel>}
      </nav>

      <nav
        id="nav-black"
        className={`h-85px w-full fixed left-0 top-0 z-30 opacity-0 animate-fadeIn ${
          headStyle == "black" ? "block" : "hidden"
        }`}
      >
        <div className="bg-[url('/assets/header_logo_black.png')] w-44px h-44px absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]"></div>
        <div
          className="bg-[url('/assets/more_menu_black.png')] w-44px h-44px absolute right-[45px] top-1/2 translate-y-[-50%] cursor-pointer"
          onClick={() => {
            handleMenu();
          }}
        ></div>
        {<Panel menuFlag={menu} onMenuChange={handleMenuChange} ></Panel>}
      </nav>

      <nav
        id="nav-large"
        className={` ${
          menu == true ? "overflow-visible" : "overflow-hidden"
        }  w-full fixed left-0 top-0 z-30   ${
          headStyle == "large" ? "block" : "hidden"
        }`}
      >
        {/*${isCurrentPage == true ? "translate-y-0" : "translate-y-full"}*/}
        <div
          id="nav-large-content"
          className={`w-full block translate-y-full transition-all ease-in-out duration-500 delay-1000 h-166px pad:h-118px mobile:h-85px `}
        >
          <div className="w-538px h-86px bg-contain bg-[url('/assets/KVAnimation/logo.png')] cursor-pointer absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] pad:w-380px pad:h-61px mobile:w-186px mobile:h-30px mobile:bg-[url('/assets/KVAnimation/logo-m.png')]"></div>
          <div
            className="w-25px h-23px bg-contain bg-[url('/assets/KVAnimation/menu.png')] cursor-pointer absolute right-50px top-1/2 translate-y-[-50%] mobile:w-20px mobile:h-20px mobile:right-25px"
            onClick={() => {
              handleMenu();
            }}
          ></div>

          {<Panel menuFlag={menu} onMenuChange={handleMenuChange} ></Panel>}
        </div>
      </nav>

      <nav
        id="nav-bg-white"
        className={`bg-white h-85px w-full fixed left-0 top-0 z-30 opacity-0 animate-fadeIn pad:h-118px mobile:h-85px ${
          headStyle == "bg-white" ? "block" : "hidden"
        }`}
      >
        <div className="bg-[url('/assets/header_logo_black.png')] w-44px h-44px absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]"></div>
        <div
          className="bg-[url('/assets/more_menu_black.png')] w-44px h-44px absolute right-[45px] top-1/2 translate-y-[-50%] cursor-pointer"
          onClick={() => {
            handleMenu();
          }}
        ></div>
        {<Panel menuFlag={menu} onMenuChange={handleMenuChange} ></Panel>}
      </nav>
    </div>
  );
}

function Panel({ menuFlag, onMenuChange }: any) {
  const [menu, setMenu] = useState(false);
  const lastPathName = getLastPathName(usePathname());

  useEffect(() => {
    initPanel();
    setMenu(menuFlag);
  }, [menuFlag]);

  const handleMenu = () => {
    setMenu(true);
    // document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    // setMenu(false);
    onMenuChange(false);
    // document.body.style.overflow = 'auto';
  };

  const [language, setLanguage] = useState(false);
  const hanleLanguage = () => {
    setLanguage(!language);
  };
  const handlePrev = () => {
    setLanguage(false);
    setMenu(true);
  };
  const handlePop = () => {
    setLanguage(false);
    handleClose()
    // setMenu(false);
  };

  const [panels, setPanels] = useState([
    {
      id: 1,
      isExpanded: false,
      title: [
        {
          id: 10,
          name: "OUR STORY",
          link: "/story",
        },
      ],
      list: [
        {
          id: 20,
          content: "A Drop Of Wildness",
          link: "/story?anchor=ADropOfWildness",
        },
        {
          id: 21,
          content: "What Others Say",
          link: "/story?anchor=WhatOthersSay",
        },
        {
          id: 22,
          content: "View All",
          link: "/story?anchor=ViewAll",
        },
      ],
    },
    {
      id: 4,
      isExpanded: false,
      title: [
        {
          id: 11,
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
          id: 188,
          content: "Discover your Wild Flavour",
          link: "/range?anchor=DiscoverYourWildFlavour",
        },
      ],
    },
    {
      id: 5,
      isExpanded: false,
      title: [
        {
          id: 110,
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
          id: 131,
          content: "Global News",
          link: "/localMarketActivity?anchor=GlobalNews",
        },
        {
          id: 140,
          content: "The Wild Escape",
          link: "/localMarketActivity?anchor=TheWildEscape",
        },
        {
          id: 152,
          content: "Tales From The Wild",
          link: "/localMarketActivity?anchor=TalesFromTheWild",
        },
      ],
    },
    {
      id: 300,
      isExpanded: false,
      title: [
        {
          id: 101,
          name: "FIND A DROP OF WILDERNESS NEAR YOU",
          link: "/howToBuy",
        },
      ],
      list: [
        {
          id: 1300,
          content: "Region Select & Global Store Map",
          link: "/howToBuy?anchor=RegionSelect",
        },
        {
          id: 1400,
          content: "IRL Experiences",
          link: "/howToBuy?anchor=IRLExperiences",
        },
        {
          id: 1015,
          content: "Digital Experience",
          link: "/howToBuy?anchor=DigitalExperience",
        },
      ],
    },
  ]);

  const togglePanel = (id: number) => {
    const newPanels = panels.map((panel) => {

      if (panel.id === id) {
        return { ...panel, isExpanded: panel.isExpanded = !panel.isExpanded  };
      } else {
        return { ...panel, isExpanded: false }; // 关闭其他面板
      }
    });

    setPanels(newPanels);

  };



  const initPanel = ()=>{
    const newPanels = panels.map((panel) => {
      return { ...panel, isExpanded: false }; // 关闭其他面板
    });

    setPanels(newPanels);
  }

  return (
    <div>
      {menu && (
        <div className="togglePanel absolute w-full h-screen select-none ">
          <div className="flex w-full justify-between h-screen">
            <div className="flex  flex-1"  onClick={(e) => {
              handleClose();
            }}></div>

            <div


                className="w-381px relative pl-33px   overflow-hidden pr-33px pad:pl-24px pad:pr-24px pad:w-272px mobile:w-full mobile:pl-20px mobile:pr-18px bg-[#FFFFFF] shadow-[-7px_0_10px_0_rgba(0,0,0,0.05)] ">
              <div className="h-41px pad:h-29px   mobile:h-40px flex justify-between items-end ">
                <div className="mx-auto opacity-0 mobile:opacity-100 mobile:w-29px mobile:h-29px">
                  <BaseImage
                    mImg={require("../../../public/assets/logo.png")}
                    pImg={require("../../../public/assets/logo.png")}
                    alt={""}
                    objectFit="contain"
                    quality={100}
                  ></BaseImage>
                </div>
                <div
                  className=" w-20px pad:w-14px mobile:w-19px h-20px pad:h-14px mobile:h-19px cursor-pointer"
                  onClick={handleClose}
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
              <div
                  onWheel={(e)=>{
                    e.stopPropagation()
                  }}
                  className="lock mt-64px pad:mt-53px mobile:mt-80px flex flex-col h-[75vh]  overflow-y-auto">
                <div className="flex justify-between mb-91px pad:mb-65 px mobile:mb-75px">
                  <div className="">
                    <BaseLink link={`/home`} className="text-[#000000] text-15px pad:text-13px mobile:text-17px not-italic font-medium font-Grotesque-Medium">HOME</BaseLink>
                  </div>
                </div>

                {panels.map((panel) => (
                  <div
                    className="flex flex-col mb-40px pad:mb-25 px mobile:mb-15px "
                    key={panel.id}
                  >
                    <div className="flex justify-between items-center mb-33px pad:mb-27 px mobile:mb31-px cursor-pointer h-50px">
                      <div className="w-9/12 ">
                        <BaseLink
                            className="text-[#000000] text-15px pad:text-13px mobile:text-17px not-italic font-medium font-Grotesque-Medium "
                          link={panel.title[0].link}
                          onClick={(e) => {
                            handleClose();
                          }}
                        >
                          {panel.title[0].name}
                        </BaseLink>
                      </div>
                      {!panel.isExpanded ? (
                        <div
                          className="w-17px pad:w-15px mobile:w-20px h-18px pad:h-16px mobile:h-22px relative"
                          onClick={() => togglePanel(panel.id)}
                        >
                          <BaseImage
                            mImg={require("../../../public/assets/KVAnimation/add.png")}
                            pImg={require("../../../public/assets/KVAnimation/add.png")}
                            alt={""}
                            objectFit="contain"
                            quality={100}
                          ></BaseImage>
                        </div>
                      ) : (
                        <div className="text-21px pad:text-17px mobile:text-21px font-GalanoGrotesque" onClick={() => togglePanel(panel.id)}>
                          —
                        </div>
                      )}
                    </div>
                    {panel.isExpanded && (
                      <div className="flex flex-col mt-10px pad:mt-8px mobile:mt-15px">
                        {panel.list.map((item) => (
                          <div
                            className="cursor-pointer flex justify-between items-center mb-30px pad:mb-23px mobile:mb-20px"
                            key={item.id}
                          >
                            <div className="w-4/5 truncate">
                              <BaseLink
                                  className="text-14px pad:text-10px mobile:text-15px not-italic text-[#262627] font-normal font-Grotesque-Regular "
                                link={item.link}
                                onClick={(e) => {
                                  handleClose();
                                }}
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
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="absolute bottom-40px  pad:bottom-28px mobile:bottom-13px ">
                <div className="flex items-center">
                  <div
                    className="w-17px pad:w-14px mobile:w-24px h-17px pad:h-14px mobile:h-24px  cursor-pointer relative"
                    onClick={hanleLanguage}
                  >
                    <BaseImage
                      mImg={require("../../../public/assets/language@4.png")}
                      pImg={require("../../../public/assets/language@4.png")}
                      alt={""}
                      objectFit="contain"
                      quality={100}
                    ></BaseImage>
                  </div>
                  <div
                    className="ml-14px pad:ml-12px mobile:ml-10px text-[#000000]  cursor-pointer text-15px pad:text-13px mobile:text-17px not-italic font-medium font-Grotesque-Medium"
                    onClick={hanleLanguage}
                  >
                    Location and Language
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {language && (
        <div className="absolute w-full h-screen select-none">
          <div className="flex w-full justify-between h-screen">
            <div className="flex  flex-1"></div>
            <div className="w-400px relative pl-33px  overflow-hidden pr-33px pad:pl-24px pad:pr-24px pad:w-285px mobile:w-full mobile:pl-20px mobile:pr-18px bg-[#FFFFFF]">
              <div className="flex justify-between items-center  mt-25px pad:mt-18px mobile:mt-15px">
                <div
                  className="w-33px h-17px pad:w-24px pad:h-12px mobile:w-28px mobile:h-13px relative cursor-pointer "
                  onClick={handlePrev}
                >
                  <BaseImage
                    mImg={require("../../../public/assets/KVAnimation/prev.png")}
                    pImg={require("../../../public/assets/KVAnimation/prev.png")}
                    alt={""}
                    objectFit="contain"
                    quality={100}
                  ></BaseImage>
                </div>
                <div className="hidden mobile:block mobile:w-29px mobile:h-29px mobile:relative ">
                  <BaseImage
                    mImg={require("../../../public/assets/logo.png")}
                    pImg={require("../../../public/assets/logo.png")}
                    alt={""}
                    objectFit="contain"
                    quality={100}
                  ></BaseImage>
                </div>
                <div
                  className=" w-20px pad:w-14px mobile:w-19px h-20px pad:h-14px mobile:h-19px cursor-pointer"
                  onClick={handlePop}
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
              <div className="text-center not-italic font-medium font-GalanoGrotesque  text-22px pad:text-15px mobile:text-20px mt-68px pad:mt-48px mobile:mt-53px">
                Location And Language
              </div>
              <div className="flex flex-col mt-67px pad:mt-48px mobile:mt-73px">
                <div className="mb-75px pad:mb-54px mobile:mb-60px cursor-pointer">
                  <BaseLink className={"flex justify-between items-center "} autoLanguage={false} link={`/zh-CN/${lastPathName}`}>
                    <div className="uppercase text-13px pad:text-10px mobile:text-15px not-italic text-[#262627]  font-normal font-Grotesque-Regular w-4/5 truncate">
                      <p>CHINA MAINLAND-</p>
                      <p>SIMPLIFIED CHINESE</p>
                    </div>
                    <div className="w-13px h-25px bg-[url('/assets/arrow-right.png')] bg-contain bg-no-repeat pad:w-9px  pad:h-17px mobile:w-15px mobile:h-17px reactive">
                      {/*<BaseImage*/}
                      {/*    mImg={require("../../../public/assets/arrow-right.png")}*/}
                      {/*    pImg={require("../../../public/assets/arrow-right.png")}*/}
                      {/*    alt={""}*/}
                      {/*    objectFit="contain"*/}
                      {/*    quality={100}*/}
                      {/*></BaseImage>*/}
                    </div>
                  </BaseLink>

                </div>
                <div className="mb-75px pad:mb-54px mobile:mb-60px cursor-pointer">
                  <BaseLink className={"flex justify-between items-center "} autoLanguage={false} link={`/zh-Hant-TW/${lastPathName}`}>
                    <div className="uppercase text-13px pad:text-10px mobile:text-15px  not-italic text-[#262627] font-normal font-Grotesque-Regular w-4/5 truncate">
                      <p>Taiwan region -</p>
                      <p>traditional Chinese</p>
                    </div>
                    <div className="w-13px h-25px bg-[url('/assets/arrow-right.png')] bg-contain bg-no-repeat pad:w-9px  pad:h-17px mobile:w-15px mobile:h-17px reactive">
                      {/*<BaseImage*/}
                      {/*    mImg={require("../../../public/assets/arrow-right.png")}*/}
                      {/*    pImg={require("../../../public/assets/arrow-right.png")}*/}
                      {/*    alt={""}*/}
                      {/*    objectFit="contain"*/}
                      {/*    quality={100}*/}
                      {/*></BaseImage>*/}
                    </div>
                  </BaseLink>

                </div>
                <div className="mb-75px pad:mb-54px mobile:mb-60px cursor-pointer ">
                  <BaseLink className={"flex justify-between items-center "} autoLanguage={false} link={`/ko-KR/${lastPathName}`}>
                    <div className="uppercase text-13px pad:text-10px mobile:text-15px not-italic text-[#262627] font-normal font-Grotesque-Regular w-4/5 truncate">
                      <p>Korea -</p>
                      <p>Korean</p>
                    </div>
                    <div className="w-13px h-25px  pad:w-9px bg-[url('/assets/arrow-right.png')] bg-contain bg-no-repeat pad:h-17px mobile:w-15px mobile:h-17px reactive">
                      {/*<BaseImage*/}
                      {/*    mImg={require("../../../public/assets/arrow-right.png")}*/}
                      {/*    pImg={require("../../../public/assets/arrow-right.png")}*/}
                      {/*    alt={""}*/}
                      {/*    objectFit="contain"*/}
                      {/*    quality={100}*/}
                      {/*></BaseImage>*/}
                    </div>
                  </BaseLink>

                </div>
                <div className="mb-75px pad:mb-54px mobile:mb-60px cursor-pointer ">
                  <BaseLink className={"flex justify-between items-center "} autoLanguage={false} link={`/en/${lastPathName}`}>
                    <div className="uppercase text-13px pad:text-10px mobile:text-15px not-italic text-[#262627] font-normal font-Grotesque-Regular w-4/5 truncate">
                      <p>Singapore -</p>
                      <p>English</p>
                    </div>
                    <div className="w-13px h-25px pad:w-9px  bg-[url('/assets/arrow-right.png')] bg-contain bg-no-repeat pad:h-17px mobile:w-15px mobile:h-17px reactive">
                      {/*<BaseImage*/}
                      {/*    mImg={require("../../../public/assets/arrow-right.png")}*/}
                      {/*    pImg={require("../../../public/assets/arrow-right.png")}*/}
                      {/*    alt={""}*/}
                      {/*    objectFit="contain"*/}
                      {/*    quality={100}*/}
                      {/*></BaseImage>*/}
                    </div>
                  </BaseLink>

                </div>
              </div>
              <div className="uppercase font-medium font-Grotesque-Medium text-14px pad:text-10px mobile:text-15px mt-68px pad:mt-48px mobile:mt-53px">
                <p>United Kingdom -</p>
                <p>English</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;

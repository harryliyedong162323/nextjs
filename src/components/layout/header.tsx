"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
import { getLastPathName } from "@/utils/common";




//
// const [panels, setPanels] = useState([
//   {
//     id: 1,
//     isExpanded: false,
//     title: [
//       {
//         id: 10,
//         name: headerData.group2Title,
//         link: "/story",
//       },
//     ],
//     list: [
//       {
//         id: 20,
//         content: "A Drop Of Wildness",
//         link: "/story?anchor=ADropOfWildness",
//       },
//       {
//         id: 21,
//         content: "What Others Say",
//         link: "/story?anchor=WhatOthersSay",
//       },
//       {
//         id: 22,
//         content: "View All",
//         link: "/story?anchor=ViewAll",
//       },
//     ],
//   },
//   {
//     id: 4,
//     isExpanded: false,
//     title: [
//       {
//         id: 11,
//         name: headerData.group3Title,
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
//         content: "Bottle Concept",
//         link: "/range?anchor=BottleConcept",
//       },
//       {
//         id: 188,
//         content: "Discover your Wild Flavour",
//         link: "/range?anchor=DiscoverYourWildFlavour",
//       },
//     ],
//   },
//   {
//     id: 5,
//     isExpanded: false,
//     title: [
//       {
//         id: 110,
//         name: headerData.group4Title,
//         link: "/localMarketActivity",
//       },
//     ],
//     list: [
//       // {
//       //   id: 1311,
//       //   content: "Wildmoor House",
//       //   link: "/localMarketActivity?anchor=WildmoorHouse",
//       // },
//       {
//         id: 131,
//         content: "Global News",
//         link: "/localMarketActivity?anchor=GlobalNews",
//       },
//       {
//         id: 140,
//         content: "The Wild Escape",
//         link: "/localMarketActivity?anchor=TheWildEscape",
//       },
//       {
//         id: 152,
//         content: "Tales From The Wild",
//         link: "/localMarketActivity?anchor=TalesFromTheWild",
//       },
//     ],
//   },
//   {
//     id: 300,
//     isExpanded: false,
//     title: [
//       {
//         id: 101,
//         name: headerData.group5Title,
//         link: "/howToBuy",
//       },
//     ],
//     list: [
//       {
//         id: 1300,
//         content: "Region Select & Global Store Map",
//         link: "/howToBuy?anchor=RegionSelect",
//       },
//       {
//         id: 1400,
//         content: "IRL Experiences",
//         link: "/howToBuy?anchor=IRLExperiences",
//       },
//       {
//         id: 1015,
//         content: "Digital Experience",
//         link: "/howToBuy?anchor=DigitalExperience",
//       },
//     ],
//   },
// ]);


interface groupItems{
  content:string,
  sys:{
    id:string
  },
  targetPage:string,
}

interface locationAndLanguageContent{
  id?:number,
  language:string,
  region:string,
  targetUrl:string,
}

interface propsContent {
  currentSlideIndex:number,
  getPageStore:Function,
  updatePageStore:Function,
  changeNavStatus:Function,
  scrollToPage:Function,
  data:{
    group1TargetPage:string,
    group2TargetPage:string,
    group3TargetPage:string,
    group4TargetPage:string,
    group5TargetPage:string,


    group1ItemsCollection:{
      items:Array<groupItems>
    },
    group1Title:string,
    group1TitleId:number,
    group2ItemsCollection:{
      items:Array<groupItems>
    },
    group2Title:string,
    group2TitleId:number,
    group3ItemsCollection:{
      items:Array<groupItems>
    },
    group3Title:string,
    group3TitleId:number,
    group4ItemsCollection:{
      items:Array<groupItems>
    },
    group4Title:string,
    group4TitleId:number,
    group5ItemsCollection:{
      items:Array<groupItems>
    },
    group5Title:string,
    group5TitleId:number,
    locationAndLanguageCollection:{
      items:Array<locationAndLanguageContent>
    },
    logo:{
      altText:string,
      imagemobile:{
        url:string,
      },
      imagepc:{
        url:string
      },
    },
    regionSwitchingPromptWords:string,
  }
}






function Header(props: any) {


  console.log(props)
  const headerData = props.data;






  const [menu, setMenu] = useState(false);
  const currentSlideIndex = props.currentSlideIndex;

  function wheelHandle(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }

  function keyDownHandle(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }

  useEffect(() => {
    const option: object = { passive: false };

    setMenu(false);
    document.addEventListener("wheel", wheelHandle, option);
    document.addEventListener("keydown", keyDownHandle, option);

    setTimeout(() => {
      document.removeEventListener("wheel", wheelHandle, option);
      document.removeEventListener("keydown", keyDownHandle, option);
    }, 500);
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
            className={`h-85px w-full fixed left-0 top-0 z-50  opacity-0 animate-fadeIn mobile:h-59px ${
                headStyle == "white" ? "block" : "hidden"
            }`}
        >
          <BaseLink link="/home">
            <div className="bg-[url('/assets/header_logo.png')] w-44px h-44px absolute left-1/2 cursor-pointer translate-x-[-50%] top-1/2 translate-y-[-50%] mobile:w-28px mobile:h-28px "></div>
          </BaseLink>
          <div
              className="bg-[url('/assets/menu-white.png')] w-34px h-34px mobile:w-20px mobile:h-20px  absolute right-[55px] mobile:right-[20px] top-1/2 translate-y-[-50%] cursor-pointer"
              onClick={() => {
                handleMenu();
              }}
          ></div>
          {<Panel menuFlag={menu} onMenuChange={handleMenuChange} headerData={headerData}></Panel>}
        </nav>

        <nav
            id="nav-black"
            className={`h-85px w-full fixed left-0 top-0 z-50 opacity-0 animate-fadeIn mobile:h-59px ${
                headStyle == "black" ? "block" : "hidden"
            }`}
        >
          <BaseLink link="/home">
            <div className="bg-[url('/assets/header_logo_black.png')] w-44px h-44px absolute  cursor-pointer left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] mobile:w-28px mobile:h-28px "></div>
          </BaseLink>
          <div
              className="bg-[url('/assets/more_menu_black.png')] w-34px h-34px absolute right-[45px] top-1/2 translate-y-[-50%] cursor-pointer mobile:w-20px mobile:h-20px mobile:right-[20px]"
              onClick={() => {
                handleMenu();
              }}
          ></div>
          {<Panel menuFlag={menu} onMenuChange={handleMenuChange} headerData={headerData}></Panel>}
        </nav>

        <nav
            id="nav-large"
            className={` ${
                menu == true ? "overflow-visible" : "overflow-hidden"
            }  w-full fixed left-0 top-0 z-50   ${
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
                className="w-34px h-34px bg-contain bg-[url('/assets/more_menu_black.png')] cursor-pointer absolute right-55px top-1/2 translate-y-[-50%] mobile:w-20px mobile:h-20px mobile:right-25px"
                onClick={() => {
                  handleMenu();
                }}
            ></div>

            {<Panel menuFlag={menu} onMenuChange={handleMenuChange} headerData={headerData}></Panel>}
          </div>
        </nav>

        <nav
            id="nav-bg-white"
            className={`bg-white h-85px w-full fixed left-0 top-0 z-50  opacity-0 animate-fadeIn mobile:h-60px ${
                headStyle == "bg-white" ? "block" : "hidden"
            }`}
        >
          <BaseLink link="/home">
            <div className="bg-[url('/assets/header_logo_black.png')] w-44px h-44px cursor-pointer absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] mobile:w-28px mobile:h-28px "></div>
          </BaseLink>
          <div
              className="bg-[url('/assets/more_menu_black.png')] w-34px h-34px absolute right-[45px] top-1/2 translate-y-[-50%] cursor-pointer mobile:w-20px mobile:h-20px mobile:right-[20px] "
              onClick={() => {
                handleMenu();
              }}
          ></div>
          {<Panel menuFlag={menu} onMenuChange={handleMenuChange} headerData={headerData}></Panel>}
        </nav>
      </div>
  );
}

function Panel({ menuFlag, onMenuChange,headerData }: any) {
  const [menu, setMenu] = useState(false);
  const lastPathName = getLastPathName(usePathname());




  const locationAndLanguage = headerData.locationAndLanguageCollection.items.map((item:locationAndLanguageContent,index:number)=>{
    return {
      id: index,
      language: item.language,
      region: item.region,
      targetUrl:item.targetUrl
    }
  });

  const group2Items = headerData.group2ItemsCollection.items.map((item:groupItems,index:number)=>{
    return {
      id: item.sys.id,
      content: item.content,
      link: item.targetPage,
    }
  });

  const group3Items = headerData.group3ItemsCollection.items.map((item:groupItems,index:number)=>{
    return {
      id: item.sys.id,
      content: item.content,
      link: item.targetPage,
    }
  });

  const group4Items = headerData.group4ItemsCollection.items.map((item:groupItems,index:number)=>{
    return {
      id: item.sys.id,
      content: item.content,
      link: item.targetPage,
    }
  });

  const group5Items = headerData.group5ItemsCollection.items.map((item:groupItems,index:number)=>{
    return {
      id: item.sys.id,
      content: item.content,
      link: item.targetPage,
    }
  });

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
    handleClose();
    // setMenu(false);
  };

  const [panels, setPanels] = useState([
    {
      id: 1,
      isExpanded: false,
      title: [
        {
          id: 10,
          name: headerData.group2Title,
          link: headerData.group2TargetPage,
        },
      ],
      list: [
        ...group2Items
      ],
    },
    {
      id: 4,
      isExpanded: false,
      title: [
        {
          id: 11,
          name: headerData.group3Title,
          link: headerData.group3TargetPage,
        },
      ],
      list: [
        ...group3Items
      ],
    },
    {
      id: 5,
      isExpanded: false,
      title: [
        {
          id: 110,
          name: headerData.group4Title,
          link: headerData.group4TargetPage,
        },
      ],
      list: [
        ...group4Items
      ],
    },
    {
      id: 300,
      isExpanded: false,
      title: [
        {
          id: 101,
          name: headerData.group5Title,
          link: headerData.group5TargetPage,
        },
      ],
      list: [
        ...group5Items
      ],
    },
  ]);
  const togglePanel = (id: number) => {
    const newPanels = panels.map((panel) => {
      if (panel.id === id) {
        return { ...panel, isExpanded: (panel.isExpanded = !panel.isExpanded) };
      } else {
        return { ...panel, isExpanded: false }; // 关闭其他面板
      }
    });

    setPanels(newPanels);
  };

  const initPanel = () => {
    const newPanels = panels.map((panel) => {
      return { ...panel, isExpanded: false }; // 关闭其他面板
    });

    setPanels(newPanels);
  };

  return (
    <div>
      {menu && (
        <div className="togglePanel absolute w-full h-screen select-none">
          <div className="flex w-full justify-between h-screen">
            <div
              className="flex  flex-1"
              onClick={(e) => {
                handleClose();
              }}
            ></div>
          </div>
        </div>
      )}
      <div
        className={`fixed w-381px translate-x-381px pad:translate-x-[300px!ignore] mobile:translate-x-[100vw] transition-transform ${
          menu ? "!translate-x-0" : ""
        } duration-[650ms] h-screen right-0 top-0 pl-33px overflow-hidden pr-33px pad:pl-24px pad:pr-24px pad:w-[300px!ignore] mobile:w-screen mobile:pl-20px mobile:pr-18px bg-[#FFFFFF] shadow-[-7px_0_10px_0_rgba(0,0,0,0.05)]`}
      >
        <div className="mt-25px pad:mt-18px mobile:mt-15px   flex justify-end mobile:justify-between items-end  mobile:items-center ">
          <div className="w-33px h-17px pad:w-24px pad:h-12px mobile:w-28px mobile:h-13px relative"></div>
          <div className="mx-auto opacity-0 mobile:opacity-100 mobile:w-29px mobile:h-29px hidden mobile:block">
            <BaseImage
              mImg={require("../../../public/assets/logo.png")}
              pImg={require("../../../public/assets/logo.png")}
              alt={""}
              objectFit="contain"
              quality={100}
            ></BaseImage>
          </div>
          <div
            className="w-20px pad:w-14px mobile:w-19px mobile:ml-9px h-20px pad:h-14px mobile:h-19px cursor-pointer"
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
          onWheel={(e) => {
            e.stopPropagation();
          }}
          onTouchMove={(e) => {
            e.stopPropagation();
          }}
          className="lock mt-64px pad:mt-53px mobile:mt-80px flex flex-col h-[75vh]  overflow-y-auto"
        >
          <div className="flex justify-between mb-91px pad:mb-65 px mobile:mb-75px">
            <div className="">
              <BaseLink
                  link={`${headerData.group1TargetPage}`}
                className="text-[#000000] text-15px pad:text-13px mobile:text-17px not-italic font-medium font-Grotesque-Medium"
              >
                HOME
              </BaseLink>
            </div>
          </div>

          {panels.map((panel) => (
            <div
              className="flex flex-col mb-40px pad:mb-25 px mobile:mb-15px "
              key={panel.id}
            >
              <div className="flex justify-between items-center mb-33px pad:mb-27 px mobile:mb-31px cursor-pointer h-50px mobile:h-22px">
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
                  <div
                    className="text-21px pad:text-17px mobile:text-21px font-Grotesque-Medium"
                    onClick={() => togglePanel(panel.id)}
                  >
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
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="absolute bottom-40px  pad:bottom-28px mobile:bottom-auto mobile:bottom-[10%] bg-white">
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
              {headerData.regionSwitchingPromptWords}
            </div>
          </div>
        </div>
      </div>
      {language && (
        <div
          onWheel={(e) => {
            e.stopPropagation();
          }}
          onTouchMove={(e) => {
            e.stopPropagation();
          }}
          className="absolute w-full h-screen select-none"
        >
          <div className="flex w-full justify-between h-screen">
            <div className="flex  flex-1"></div>
            <div className="w-381px relative pl-33px pad:w-[300px!ignore]  overflow-hidden pr-33px pad:pl-24px pad:pr-24px pad:w-272px mobile:w-full mobile:pl-20px mobile:pr-18px bg-[#FFFFFF]">
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
                  className="w-20px pad:w-14px mobile:w-19px h-20px pad:h-14px mobile:h-19px cursor-pointer"
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
              <div className="text-center not-italic font-medium text-[#000000] font-GalanoGrotesque  text-22px pad:text-16px mobile:text-20px mt-68px pad:mt-48px mobile:mt-53px">
                {headerData.regionSwitchingPromptWords}
              </div>
              <div className="flex flex-col mt-67px pad:mt-48px mobile:mt-73px">
                {
                  locationAndLanguage.length > 0 && locationAndLanguage.map((item:locationAndLanguageContent,index:number)=>{
                    return(
                        <div key={item.id} className="mb-75px pad:mb-54px mobile:mb-60px cursor-pointer">
                          <BaseLink
                              className={"flex justify-between items-center "}
                              autoLanguage={false}
                              link={`${item.targetUrl}`}
                          >
                            <div className="uppercase font-normal not-italic text-[#262627] text-15px font-Grotesque-Regular pad:text-11px mobile:text-17px  w-4/5 truncate">
                              <p>{item.region} {!item.language&&item.language == '' ? null : '-'}</p>

                              {
                                item.language&&item.language == '' ? null : <p>{item.language}</p>
                              }

                            </div>
                            <div className="w-13px h-25px bg-[url('/assets/arrow-right.png')] bg-contain bg-no-repeat pad:w-9px  pad:h-17px mobile:w-15px mobile:h-17px reactive">
                            </div>
                          </BaseLink>
                        </div>
                    )
                  })
                }
                {/*<div className="mb-75px pad:mb-54px mobile:mb-60px cursor-pointer">*/}
                {/*  <BaseLink*/}
                {/*    className={"flex justify-between items-center "}*/}
                {/*    autoLanguage={false}*/}
                {/*    link={`/zh-Hant-TW/${lastPathName}`}*/}
                {/*  >*/}
                {/*    <div className="uppercase font-normal not-italic text-[#262627] text-15px font-Grotesque-Regular pad:text-11px mobile:text-17px    w-4/5 truncate">*/}
                {/*      <p>Taiwan region -</p>*/}
                {/*      <p>traditional Chinese</p>*/}
                {/*    </div>*/}
                {/*    <div className="w-13px h-25px bg-[url('/assets/arrow-right.png')] bg-contain bg-no-repeat pad:w-9px  pad:h-17px mobile:w-15px mobile:h-17px reactive">*/}
                {/*      /!*<BaseImage*!/*/}
                {/*      /!*    mImg={require("../../../public/assets/arrow-right.png")}*!/*/}
                {/*      /!*    pImg={require("../../../public/assets/arrow-right.png")}*!/*/}
                {/*      /!*    alt={""}*!/*/}
                {/*      /!*    objectFit="contain"*!/*/}
                {/*      /!*    quality={100}*!/*/}
                {/*      /!*></BaseImage>*!/*/}
                {/*    </div>*/}
                {/*  </BaseLink>*/}
                {/*</div>*/}
                {/*<div className="mb-75px pad:mb-54px mobile:mb-60px cursor-pointer ">*/}
                {/*  <BaseLink*/}
                {/*    className={"flex justify-between items-center "}*/}
                {/*    autoLanguage={false}*/}
                {/*    link={`/ko-KR/${lastPathName}`}*/}
                {/*  >*/}
                {/*    <div className="uppercase font-normal not-italic text-[#262627] text-15px font-Grotesque-Regular pad:text-11px mobile:text-17px    w-4/5 truncate">*/}
                {/*      <p>Korea -</p>*/}
                {/*      <p>Korean</p>*/}
                {/*    </div>*/}
                {/*    <div className="w-13px h-25px  pad:w-9px bg-[url('/assets/arrow-right.png')] bg-contain bg-no-repeat pad:h-17px mobile:w-15px mobile:h-17px reactive">*/}
                {/*      /!*<BaseImage*!/*/}
                {/*      /!*    mImg={require("../../../public/assets/arrow-right.png")}*!/*/}
                {/*      /!*    pImg={require("../../../public/assets/arrow-right.png")}*!/*/}
                {/*      /!*    alt={""}*!/*/}
                {/*      /!*    objectFit="contain"*!/*/}
                {/*      /!*    quality={100}*!/*/}
                {/*      /!*></BaseImage>*!/*/}
                {/*    </div>*/}
                {/*  </BaseLink>*/}
                {/*</div>*/}
                {/*<div className="mb-75px pad:mb-54px mobile:mb-60px cursor-pointer ">*/}
                {/*  <BaseLink*/}
                {/*    className={"flex justify-between items-center "}*/}
                {/*    autoLanguage={false}*/}
                {/*    link={`/en/${lastPathName}`}*/}
                {/*  >*/}
                {/*    <div className="uppercase font-normal not-italic text-[#262627] text-15px font-Grotesque-Regular pad:text-11px mobile:text-17px    w-4/5 truncate">*/}
                {/*      <p>Singapore -</p>*/}
                {/*      <p>English</p>*/}
                {/*    </div>*/}
                {/*    <div className="w-13px h-25px pad:w-9px  bg-[url('/assets/arrow-right.png')] bg-contain bg-no-repeat pad:h-17px mobile:w-15px mobile:h-17px reactive">*/}
                {/*      /!*<BaseImage*!/*/}
                {/*      /!*    mImg={require("../../../public/assets/arrow-right.png")}*!/*/}
                {/*      /!*    pImg={require("../../../public/assets/arrow-right.png")}*!/*/}
                {/*      /!*    alt={""}*!/*/}
                {/*      /!*    objectFit="contain"*!/*/}
                {/*      /!*    quality={100}*!/*/}
                {/*      /!*></BaseImage>*!/*/}
                {/*    </div>*/}
                {/*  </BaseLink>*/}
                {/*</div>*/}


              </div>

              <div className="uppercase font-medium font-Grotesque-Medium tetx-[#000000]  not-italic text-15px pad:text-11px mobile:text-17px mt-68px pad:mt-48px mobile:mt-53px">
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

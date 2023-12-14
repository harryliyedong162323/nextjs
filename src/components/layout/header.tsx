"use client";


import React, { useEffect, useState } from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
function Header(props: any) {
    // useEffect(() => {
    //
    // }, []);
    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!menu)
      
    }
    const handleClose = () => {
        setMenu(false)
    }
    const [language,setLanguage] = useState(false)
    const hanleLanguage = ()=>{
        setLanguage(!language)
    }
    const handlePrev = ()=>{
        setLanguage(false)
        setMenu(true)
    }
    const handlePop = () =>{
        setLanguage(false)
        setMenu(false)
    }
    return (

        <nav className="h-118px w-full fixed left-0 top-0 z-30">
            <div className="bg-[url('/assets/header_logo.png')] w-44px h-44px absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]" ></div>
            <div className="bg-[url('/assets/more_menu.png')] w-44px h-44px absolute right-[45px] top-1/2 translate-y-[-50%] cursor-pointer" onClick={handleMenu}></div>
            {menu && <div className="absolute w-full h-screen">
                <div className="flex w-full justify-between h-screen">
                    <div className="flex  flex-1"></div>
                    <div className="w-381px relative pl-33px   overflow-hidden pr-33px paid:pl-24px paid:pr-24px paid:w-272px mobile:w-full mobile:pl-20px mobile:pr-18px bg-[#FFFFFF]">
                        <div className="h-41px paid:h-29px   mobile:h-40px flex justify-between items-end ">
                            <div className="mx-auto opacity-0 mobile:opacity-100 mobile:w-29px mobile:h-29px">
                                <BaseImage
                                    mImg={require("../../../public/assets/logo.png")}
                                    pImg={require("../../../public/assets/logo.png")}
                                    alt={""}
                                    objectFit="contain"
                                    quality={100}
                                ></BaseImage>
                            </div>
                            <div className=" w-20px paid:w-14px mobile:w-19px h-20px paid:h-14px mobile:h-19px cursor-pointer" onClick={handleClose}>
                                <BaseImage
                                    mImg={require("../../../public/assets/KVAnimation/close.png")}
                                    pImg={require("../../../public/assets/KVAnimation/close.png")}
                                    alt={""}
                                    objectFit="contain"
                                    quality={100}
                                ></BaseImage>
                            </div>
                        </div>
                        <div className="mt-64px paid:mt-53px mobile:mt-80px flex flex-col">
                            <div className="flex justify-between mb-91px paid:mb-65 px mobile:mb-75px">
                                <div className="text-[#000000] text-15px paid:text-13px mobile:text-17px not-italic font-medium font-GalanoGrotesque">HOME</div>
                            </div>
                            <div className="flex flex-col mb-81px paid:mb-55 px mobile:mb-45px">
                                <div className="flex justify-between mb-33px paid:mb-27 px mobile:mb31-px">
                                    <div className="text-[#000000] text-15px paid:text-13px mobile:text-17px not-italic font-medium font-GalanoGrotesque w-9/12 ">OUR STORY</div>
                                    <div className="w-17px paid:w-12px mobile:w-20px h-18px paid:h-13px mobile:h-22px relative">
                                        <BaseImage
                                            mImg={require("../../../public/assets/KVAnimation/add.png")}
                                            pImg={require("../../../public/assets/KVAnimation/add.png")}
                                            alt={""}
                                            objectFit="contain"
                                            quality={100}
                                        ></BaseImage>
                                    </div>
                                </div>

                            </div>
                            <div className="flex flex-col mb-81px paid:mb-55 px mobile:mb-45px">
                                <div className="flex justify-between mb-33px paid:mb-27 px mobile:mb31-px">
                                    <div className="text-[#000000] text-15px paid:text-13px mobile:text-17px not-italic font-medium font-GalanoGrotesque w-9/12 ">THE WILDMOOR RANGE</div>
                                    <div className="w-17px paid:w-12px mobile:w-20px h-18px paid:h-13px mobile:h-22px relative">
                                        <BaseImage
                                            mImg={require("../../../public/assets/KVAnimation/add.png")}
                                            pImg={require("../../../public/assets/KVAnimation/add.png")}
                                            alt={""}
                                            objectFit="contain"
                                            quality={100}
                                        ></BaseImage>
                                    </div>
                                </div>


                            </div>
                            <div className="flex flex-col mb-81px paid:mb-55 px mobile:mb-45px">
                                <div className="flex justify-between mb-33px paid:mb-27 px mobile:mb31-px">
                                    <div className="text-[#000000] text-15px paid:text-13px mobile:text-17px not-italic font-medium font-GalanoGrotesque w-9/12 ">THE WILD ESCAPE</div>
                                    <div className="w-17px paid:w-12px mobile:w-20px h-18px paid:h-13px mobile:h-22px relative">
                                        <BaseImage
                                            mImg={require("../../../public/assets/KVAnimation/add.png")}
                                            pImg={require("../../../public/assets/KVAnimation/add.png")}
                                            alt={""}
                                            objectFit="contain"
                                            quality={100}
                                        ></BaseImage>
                                    </div>
                                </div>


                            </div>
                            <div className="flex flex-col mb-81px paid:mb-55 px mobile:mb-45px">
                                <div className="flex justify-between mb-33px paid:mb-27 px mobile:mb31-px">
                                    <div className="text-[#000000] text-15px paid:text-13px mobile:text-17px not-italic font-medium font-GalanoGrotesque w-9/12 ">FIND A DROP OF WILDERNESS NEAR YOU</div>
                                    <div className="w-17px paid:w-12px mobile:w-20px h-18px paid:h-13px mobile:h-22px relative">
                                        <BaseImage
                                            mImg={require("../../../public/assets/KVAnimation/add.png")}
                                            pImg={require("../../../public/assets/KVAnimation/add.png")}
                                            alt={""}
                                            objectFit="contain"
                                            quality={100}
                                        ></BaseImage>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-40px  paid:bottom-28px mobile:bottom-13px ">
                            <div className="flex items-center">
                                <div className="w-17px paid:w-14px mobile:w-24px h-17px paid:h-14px mobile:h-24px  cursor-pointer relative"  onClick={hanleLanguage}>
                                    <BaseImage
                                        mImg={require("../../../public/assets/language.png")}
                                        pImg={require("../../../public/assets/language.png")}
                                        alt={""}
                                        objectFit="contain"
                                        quality={100}
                                    ></BaseImage>
                                </div>
                                <div className="ml-14px paid:ml-12px mobile:ml-10px text-[#000000]  cursor-pointer text-15px paid:text-13px mobile:text-17px not-italic font-medium font-GalanoGrotesque" onClick={hanleLanguage}>Location and Language</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
           {language &&  <div className="absolute w-full h-screen">
                <div className="flex w-full justify-between h-screen">
                    <div className="flex  flex-1"></div>
                    <div className="w-381px relative pl-33px  overflow-hidden pr-33px paid:pl-24px paid:pr-24px paid:w-272px mobile:w-full mobile:pl-20px mobile:pr-18px bg-[#FFFFFF]">
                        <div className="flex justify-between items-center  mt-25px paid:mt-18px mobile:mt-15px">
                            <div className="w-33px h-17px paid:w-24px paid:h-12px mobile:w-28px mobile:h-13px relative cursor-pointer " onClick={handlePrev}>
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
                            <div className=" w-20px paid:w-14px mobile:w-19px h-20px paid:h-14px mobile:h-19px cursor-pointer" onClick={handlePop}>
                                <BaseImage
                                    mImg={require("../../../public/assets/KVAnimation/close.png")}
                                    pImg={require("../../../public/assets/KVAnimation/close.png")}
                                    alt={""}
                                    objectFit="contain"
                                    quality={100}
                                ></BaseImage>
                            </div>
                        </div>
                        <div className="text-center not-italic font-medium font-GalanoGrotesque  text-22px paid:text-15px mobile:text-20px mt-68px paid:mt-48px mobile:mt-53px">Location And Language</div>
                        <div className="flex flex-col mt-67px paid:mt-48px mobile:mt-73px">

                            <div className="flex justify-between items-center mb-75px paid:mb-54px mobile:mb-60px">
                                <div className="text-14px paid:text-10px mobile:text-15px not-italic text-[#262627] font-normal font-GalanoGrotesque w-4/5 truncate">CHINA MAINLAND-SIMPLIFIED CHINESE</div>
                                <div className="w-17px h-15px  paid:w-12px  paid:h-13px mobile:w-15px mobile:h-17px reactive cursor-pointer">
                                    <BaseImage
                                        mImg={require("../../../public/assets/KVAnimation/arrow-right.png")}
                                        pImg={require("../../../public/assets/KVAnimation/arrow-right.png")}
                                        alt={""}
                                        objectFit="contain"
                                        quality={100}
                                    ></BaseImage>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mb-75px paid:mb-54px mobile:mb-60px">
                                <div className="text-14px paid:text-10px mobile:text-15px not-italic text-[#262627] font-normal font-GalanoGrotesque w-4/5 truncate">CHINA MAINLAND-SIMPLIFIED CHINESE</div>
                                <div className="w-17px h-15px  paid:w-12px  paid:h-13px mobile:w-15px mobile:h-17px reactive cursor-pointer">
                                    <BaseImage
                                        mImg={require("../../../public/assets/KVAnimation/arrow-right.png")}
                                        pImg={require("../../../public/assets/KVAnimation/arrow-right.png")}
                                        alt={""}
                                        objectFit="contain"
                                        quality={100}
                                    ></BaseImage>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mb-75px paid:mb-54px mobile:mb-60px">
                                <div className="text-14px paid:text-10px mobile:text-15px not-italic text-[#262627] font-normal font-GalanoGrotesque w-4/5 truncate">CHINA MAINLAND-SIMPLIFIED CHINESE</div>
                                <div className="w-17px h-15px  paid:w-12px  paid:h-13px mobile:w-15px mobile:h-17px reactive cursor-pointer">
                                    <BaseImage
                                        mImg={require("../../../public/assets/KVAnimation/arrow-right.png")}
                                        pImg={require("../../../public/assets/KVAnimation/arrow-right.png")}
                                        alt={""}
                                        objectFit="contain"
                                        quality={100}
                                    ></BaseImage>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mb-75px paid:mb-54px mobile:mb-60px">
                                <div className="text-14px paid:text-10px mobile:text-15px not-italic text-[#262627] font-normal font-GalanoGrotesque w-4/5 truncate">CHINA MAINLAND-SIMPLIFIED CHINESE</div>
                                <div className="w-17px h-15px  paid:w-12px  paid:h-13px mobile:w-15px mobile:h-17px reactive cursor-pointer">
                                    <BaseImage
                                        mImg={require("../../../public/assets/KVAnimation/arrow-right.png")}
                                        pImg={require("../../../public/assets/KVAnimation/arrow-right.png")}
                                        alt={""}
                                        objectFit="contain"
                                        quality={100}
                                    ></BaseImage>
                                </div>
                            </div>
                        </div>
                        <div className="font-medium font-GalanoGrotesque text-14px paid:text-10px mobile:text-15px mt-68px paid:mt-48px mobile:mt-53px">UNITED LINGDOM - ENGLISH</div>
                    </div>
                </div>
            </div>}

        </nav>



    );
}

export default Header;

"use client";


import React, { useEffect, useState } from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
function Header(props: any) {
    // useEffect(() => {
    //
    // }, []);
    const [menu, setMenu] = useState(false)

    const headStyle = props.headStyle || 'white';


    const handleMenuChange = (menu:boolean) => {
        setMenu(menu);
    };

    const handleMenu = () => {
        setMenu(true);
        // document.body.style.overflow = 'hidden';

    };
    return (
        <div>
            <nav id="nav-white" className={`h-85px w-full fixed left-0 top-0 z-30 opacity-0 animate-fadeIn ${headStyle == 'white' ? 'block' : 'hidden'}`}>
                <div className="bg-[url('/assets/header_logo.png')] w-44px h-44px absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]" ></div>
                <div className="bg-[url('/assets/more_menu.png')] w-44px h-44px absolute right-[45px] top-1/2 translate-y-[-50%] cursor-pointer" onClick={()=>{handleMenu()}}></div>
                {
                    <Panel menuFlag={menu} onMenuChange={handleMenuChange}></Panel>
                }
            </nav>

            <nav id="nav-black" className={`h-85px w-full fixed left-0 top-0 z-30 opacity-0 animate-fadeIn ${headStyle == 'black' ? 'block' : 'hidden'}`}>
                <div className="bg-[url('/assets/header_logo_black.png')] w-44px h-44px absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]" ></div>
                <div className="bg-[url('/assets/more_menu_black.png')] w-44px h-44px absolute right-[45px] top-1/2 translate-y-[-50%] cursor-pointer" onClick={()=>{handleMenu()}}></div>
                {
                    <Panel menuFlag={menu} onMenuChange={handleMenuChange}></Panel>
                }
            </nav>

            <nav id="nav-large" className={`h-166px w-full fixed left-0 top-0 z-30 opacity-0 animate-fadeIn paid:h-118px mobile:h-85px ${headStyle == 'large' ? 'block' : 'hidden'}`}>
                <div className="w-538px h-86px bg-contain bg-[url('/assets/KVAnimation/logo.png')] cursor-pointer absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] paid:w-380px paid:h-61px mobile:w-186px mobile:h-30px mobile:bg-[url('/assets/KVAnimation/logo-m.png')]"></div>
                <div className="w-25px h-23px bg-contain bg-[url('/assets/KVAnimation/menu.png')] cursor-pointer absolute right-50px top-1/2 translate-y-[-50%] paid:w-17px paid:h-16px mobile:w-20px mobile:h-20px mobile:right-25px" onClick={()=>{handleMenu()}}></div>

                {
                    <Panel menuFlag={menu} onMenuChange={handleMenuChange} ></Panel>
                }
            </nav>

            <nav id="nav-bg-white" className={`bg-white h-85px w-full fixed left-0 top-0 z-30 opacity-0 animate-fadeIn paid:h-118px mobile:h-85px ${headStyle == 'bg-white' ? 'block' : 'hidden'}`}>
                <div className="bg-[url('/assets/header_logo_black.png')] w-44px h-44px absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]" ></div>
                <div className="bg-[url('/assets/more_menu_black.png')] w-44px h-44px absolute right-[45px] top-1/2 translate-y-[-50%] cursor-pointer" onClick={()=>{handleMenu()}}></div>
                {
                    <Panel menuFlag={menu} onMenuChange={handleMenuChange}></Panel>
                }
            </nav>
        </div>




    );
}

function Panel({ menuFlag, onMenuChange }:any){

    const [menu, setMenu] = useState(false)

    useEffect(() => {
        setMenu(menuFlag)
        console.log(menuFlag)
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

    const [language, setLanguage] = useState(false)
    const hanleLanguage = () => {
        setLanguage(!language)
    }
    const handlePrev = () => {
        setLanguage(false)
        setMenu(true)
    }
    const handlePop = () => {
        setLanguage(false)
        setMenu(false)
    }

    const [panels, setPanels] = useState([
        {
            id: 1,
            isExpanded: false,
            title: [
                {
                    id: 10,
                    name: 'OUR STORY',
                }
            ],
            list: [
                {
                    id: 20,
                    content: 'A Drop Of Wildness'
                },
                {
                    id: 21,
                    content: 'What Others Say'
                },
                {
                    id: 22,
                    content: 'View All'
                },
            ]
        },
        {
            id: 4,
            isExpanded: false,
            title: [
                {
                    id: 11,
                    name: 'THE WILDMOOR RANGE',
                }
            ],
            list: [
                {
                    id: 22,
                    content: 'A Drop Of Wildness'
                },
                {
                    id: 23,
                    content: 'What Others Say'
                },
                {
                    id: 2,
                    content: 'View All'
                },
            ]
        },
        {
            id: 5,
            isExpanded: false,
            title: [
                {
                    id: 11,
                    name: 'THE WILD ESCAPE',
                }
            ],
            list: [
                {
                    id: 22,
                    content: 'A Drop Of Wildness'
                },
                {
                    id: 23,
                    content: 'What Others Say'
                },
                {
                    id: 2,
                    content: 'View All'
                },
            ]
        },
        {
            id: 3,
            isExpanded: false,
            title: [
                {
                    id: 11,
                    name: 'FIND A DROP OF WILDERNESS',
                }
            ],
            list: [
                {
                    id: 22,
                    content: 'A Drop Of Wildness'
                },
                {
                    id: 23,
                    content: 'What Others Say'
                },
                {
                    id: 2,
                    content: 'View All'
                },
            ]
        },


    ]);

    const togglePanel = (id: any) => {
        const newPanels = panels.map((panel) => {
            if (panel.id === id) {
                return { ...panel, isExpanded: !panel.isExpanded };
            } else {
                return { ...panel, isExpanded: false }; // 关闭其他面板
            }


        });
        setPanels(newPanels);
    };


    return (
        <div>
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

                            {panels.map((panel) => (
                                <div className="flex flex-col mb-40px paid:mb-25 px mobile:mb-15px" key={panel.id}>
                                    <div className="flex justify-between items-center mb-33px paid:mb-27 px mobile:mb31-px cursor-pointer" onClick={() => togglePanel(panel.id)}>
                                        <div className="text-[#000000] text-15px paid:text-13px mobile:text-17px not-italic font-medium font-GalanoGrotesque w-9/12 ">{panel.title[0].name}</div>
                                        {!panel.isExpanded ?
                                            <div className="w-17px paid:w-15px mobile:w-20px h-18px paid:h-16px mobile:h-22px relative">
                                                <BaseImage
                                                    mImg={require("../../../public/assets/KVAnimation/add.png")}
                                                    pImg={require("../../../public/assets/KVAnimation/add.png")}
                                                    alt={""}
                                                    objectFit="contain"
                                                    quality={100}
                                                ></BaseImage>
                                            </div>
                                            :
                                            <div className="text-21px paid:text-17px mobile:text-21px font-GalanoGrotesque">—</div>}
                                    </div>
                                    {panel.isExpanded && (
                                        <div className="flex flex-col mt-10px paid:mt-8px mobile:mt-15px">
                                            {panel.list.map((item) => (
                                                <div className="flex justify-between items-center mb-30px paid:mb-23px mobile:mb-20px" key={item.id}>
                                                    <div className="text-14px paid:text-10px mobile:text-15px not-italic text-[#262627] font-normal font-GalanoGrotesque w-4/5 truncate">{item.content}</div>
                                                    <div className="w-19px h-23px  paid:w-15px  paid:h-16px mobile:w-15px mobile:h-17px reactive cursor-pointer">
                                                        <BaseImage
                                                            mImg={require("../../../public/assets/KVAnimation/arrow-right.png")}
                                                            pImg={require("../../../public/assets/KVAnimation/arrow-right.png")}
                                                            alt={""}
                                                            objectFit="contain"
                                                            quality={100}
                                                        ></BaseImage>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="absolute bottom-40px  paid:bottom-28px mobile:bottom-13px ">
                            <div className="flex items-center">
                                <div className="w-17px paid:w-14px mobile:w-24px h-17px paid:h-14px mobile:h-24px  cursor-pointer relative" onClick={hanleLanguage}>
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
            {language && <div className="absolute w-full h-screen">
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
        </div>
    )
}




export default Header;

"use client";


import React, { useEffect, useState } from "react";
import BaseImage from "@/components/base/image";



interface bottleContent {
    id: number,
    num: number,
    active: boolean,
    info: {
        name: string,
        bottle: {
            pImg: string,
            mImg: string,
        },
        bg: {
            pImg: string,
            mImg: string,
        },
        year: number,
        price: string,
        des: string,
    }
}

const bottle:bottleContent[] = [
    {
        id:0,
        num:30,
        active:false,
        info:{
            name:'ANCIENT MOORLAND',
            bottle:{
                pImg:require("../../../public/assets/productFamily/kv-3.png"),
                mImg:require("../../../public/assets/productFamily/kv-m.png"),
            },
            bg:{
                pImg:require("../../../public/assets/productFamily/kv.png"),
                mImg:require("../../../public/assets/productFamily/kv.png"),
            },
            year:30,
            price:'£750 RRP ',
            des:'An epic landscape of rich oak, deep vanilla, mellow sherry spice and sweetness, inspired by Scotland’s heather-covered moorlands in full bloom.'
        }
    },
    {
        id:1,
        num:30,
        active:false,
        info:{
            name:'ANCIENT MOORLAND',
            bottle:{
                pImg:require("../../../public/assets/productFamily/kv-3.png"),
                mImg:require("../../../public/assets/productFamily/kv-m.png"),
            },
            bg:{
                pImg:require("../../../public/assets/productFamily/kv-2.png"),
                mImg:require("../../../public/assets/productFamily/kv-m.png"),
            },
            year:30,
            price:'£750 RRP ',
            des:'An epic landscape of rich oak, deep vanilla, mellow sherry spice and sweetness, inspired by Scotland’s heather-covered moorlands in full bloom.'
        }
    },
    {
        id:2,
        num:23,
        active:false,
        info:{
            name:'ANCIENT MOORLAND',
            bottle:{
                pImg:require("../../../public/assets/productFamily/kv-3.png"),
                mImg:require("../../../public/assets/productFamily/kv-m.png"),
            },
            bg:{
                pImg:require("../../../public/assets/productFamily/kv-3.png"),
                mImg:require("../../../public/assets/productFamily/kv-m.png"),
            },
            year:30,
            price:'£750 RRP ',
            des:'An epic landscape of rich oak, deep vanilla, mellow sherry spice and sweetness, inspired by Scotland’s heather-covered moorlands in full bloom.'
        }
    },
    {
        id:3,
        num:23,
        active:false,
        info:{
            name:'ANCIENT MOORLAND',
            bottle:{
                pImg:require("../../../public/assets/productFamily/kv-3.png"),
                mImg:require("../../../public/assets/productFamily/kv-m.png"),
            },
            bg:{
                pImg:require("../../../public/assets/productFamily/kv-4.png"),
                mImg:require("../../../public/assets/productFamily/kv-m.png"),
            },
            year:110,
            price:'£750 RRP ',
            des:'An epic landscape of rich oak, deep vanilla, mellow sherry spice and sweetness, inspired by Scotland’s heather-covered moorlands in full bloom.'
        }
    },
    {
        id:4,
        num:40,
        active:false,
        info:{
            name:'ANCIENT MOORLAND',
            bottle:{
                pImg:require("../../../public/assets/productFamily/kv-3.png"),
                mImg:require("../../../public/assets/productFamily/kv-m.png"),
            },
            bg:{
                pImg:require("../../../public/assets/productFamily/kv-5.png"),
                mImg:require("../../../public/assets/productFamily/kv-m.png"),
            },
            year:31,
            price:'£750 RRP ',
            des:'An epic landscape of rich oak, deep vanilla, mellow sherry spice and sweetness, inspired by Scotland’s heather-covered moorlands in full bloom.'
        }
    },
    {
        id:5,
        num:23,
        active:true,
        info:{
            name:'ANCIENT MOORLAND',
            bottle:{
                pImg:require("../../../public/assets/productFamily/kv-3.png"),
                mImg:require("../../../public/assets/productFamily/kv-m.png"),
            },
            bg:{
                pImg:require("../../../public/assets/productFamily/kv-6.png"),
                mImg:require("../../../public/assets/productFamily/kv-m.png"),
            },
            year:32,
            price:'£750 RRP ',
            des:'An epic landscape of rich oak, deep vanilla, mellow sherry spice and sweetness, inspired by Scotland’s heather-covered moorlands in full bloom.'
        }
    },

];
function ProductFamilyComponent(props: any) {

    // const block1Image = props.data.entry.fields.block1Image.sys.fields;
    const [currentBottleIndex,setCurrentBottleIndex] = useState(0);

    const [bottleData,setBottleData] = useState(bottle);
    const [currentBottleData,setCurrentBottleData] = useState(bottle[0] as bottleContent);
    const handleChooseBottle = (index:number)=>{
        setCurrentBottleData(bottleData[index]);
        setCurrentBottleIndex(index);
    }

    useEffect(() => {
        console.log(bottleData)
        setCurrentBottleData(bottleData[0])
    }, [bottleData]);
    console.log(props)
    return (


        <div id="ProductsFamily" className="h-screen overflow-hidden">
            <div className="h-[70vh] overflow-hidden">
                <div className="relative h-full w-full">
                    <BaseImage
                        mImg={currentBottleData.info.bg.mImg}
                        pImg={currentBottleData.info.bg.pImg}
                        alt={""}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    ></BaseImage>

                    <div className="w-169px h-368px absolute left-1/2 translate-x-[-50%] top-150px paid:w-120px paid:h-262px paid:top-107px  mobile:w-102px mobile:h-223px mobile:top-94px">
                        <BaseImage
                            mImg={require("../../../public/assets/productFamily/bottle-m.png")}
                            pImg={require("../../../public/assets/productFamily/bottle.png")}
                            alt={""}
                            objectFit="contain"
                            quality={100}
                        ></BaseImage>
                    </div>
                    <div className="left-1/2 translate-x-[50%] absolute top-240px text-white paid:top-171px mobile:translate-x-[-50%] mobile:top-342px mobile:pl-23px mobile:pr-23px mobile:w-full">
                        <div className="font-AlbertusNova-Regular font-normal mobile:text-center mobile:w-full mobile:pb-20px">
                            <div className="inline-block align-middle">
                                <div className="relative">
                                   <span className="text-60px font-light font-AlbertusNova-Light paid:text-42px mobile:text-38px">{currentBottleData.info.year}</span>
                                    <span className="text-11px font-bold absolute bottom-0 left-0 w-full text-center paid:text-7px mobile:text-7px">years old</span>
                                </div>
                                {/*<div className="text-11px font-bold">years old</div>*/}
                            </div>
                            <div className="mr-16px ml-9px inline-block align-middle h-[80%] w-2px bg-white paid:mr-11px paid:ml-6px paid:h-[57%] mobile:ml-10px mobile:mr-6px"></div>
                            <div className="inline-block align-middle w-194px text-29px pt-20px paid:w-138px paid:text-20px paid:pt-14px mobile:text-19px mobile:w-125px">{currentBottleData.info.name}</div>
                        </div>
                        <div className="pb-30px w-426px text-20px font-Grotesque-Light font-normal paid:pb-21px paid:w-304px paid:text-14px mobile:w-full mobile:text-center mobile:text-14px mobile:leading-[21px]">
                            {currentBottleData.info.des}
                        </div>
                        <div className="font-Grotesque-Regular font-normal text-21px paid:text-15px mobile:text-center mobile:text-16px">{currentBottleData.info.price}</div>
                    </div>
                </div>
            </div>
            <div className="h-[30vh] overflow-hidden">
                <div className="relative h-full w-full">
                    <BaseImage
                        mImg={require("../../../public/assets/productFamily/bg.png")}
                        pImg={require("../../../public/assets/productFamily/bg.png")}
                        alt={""}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    ></BaseImage>


                    <div className="absolute container left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] leading-[20px] paid:leading-[14px] mobile:w-[80%]">
                        <div className="text-center text-dark-grey font-AlbertusNova-Bold text-16px paid:text-11px mobile:text-14px">SMOKY</div>
                        <div className="pb-11px text-center text-dark-grey text-13px paid:text-9px paid:pb-7px mobile:text-10px">MALT</div>
                        <div className="flex justify-between text-center h-108px pb-11px paid:h-77px paid:pb-7px">
                            <div className="rotate-[-90deg] block">
                                <div className="font-AlbertusNova-Regular font-normal text-dark-grey font-AlbertusNova-Bold text-16px paid:text-11px mobile:text-14px">LIGHT</div>
                                <div className="pb-6px font-AlbertusNova-Medium font-normal text-dark-grey text-13px paid:pb-4px paid:text-9px mobile:text-10px">GRAIN</div>
                            </div>
                            <div className="w-full relative after:content-[''] after:absolute after:top-1/2 after:translate-y-[-50%] after:left-1/2 after:translate-x-[-50%] after:w-full after:h-2px after:bg-dark-grey after:content-[''] before:absolute before:top-1/2 before:translate-y-[-50%] before:left-1/2 before:translate-x-[-50%] before:w-2px before:h-full before:bg-dark-grey">
                                <div className={`select-none cursor-pointer flex justify-center items-center w-60px h-60px absolute z-20 rounded-full  ${currentBottleIndex == 0 ? 'shadow-[#B96566]-500 bg-[#B96566] text-[#fff]' : 'bg-[#CECECE] text-[#588C96]'}  bottom-0 left-1/4 translate-x-[-50%] translate-y-[50%] paid:w-42px paid:h-42px mobile:w-36px mobile:h-36px`} onClick={()=>{handleChooseBottle(0)}}>
                                    <span className="text-26px font-AlbertusNova-Regular font-normal paid:text-18px mobile:text-16px">{bottleData[0].num}</span>
                                </div>
                                <div className={`select-none cursor-pointer flex justify-center items-center w-60px h-60px absolute z-20 rounded-full ${currentBottleIndex == 1 ? 'shadow-[#B96566]-500 bg-[#B96566] text-[#fff]' : 'bg-[#CECECE] text-[#588C96]'} top-1/2 left-1/2 translate-x-[-70%] translate-y-[-70%] paid:w-42px paid:h-42px mobile:w-36px mobile:h-36px`} onClick={()=>{handleChooseBottle(1)}}>
                                    <span className="text-26px font-AlbertusNova-Regular font-normal paid:text-18px mobile:text-16px">{bottleData[1].num}</span>
                                </div>
                                <div className={`select-none cursor-pointer flex justify-center items-center w-60px h-60px absolute z-20 rounded-full  ${currentBottleIndex == 2 ? 'shadow-[#B96566]-500 bg-[#B96566] text-[#fff]' : 'bg-[#CECECE] text-[#779374]'} top-1/2 left-1/2 translate-x-[200%] translate-y-[-50%] paid:w-42px paid:h-42px mobile:w-36px mobile:h-36px mobile:translate-y-[50%] mobile:translate-x-[150%] mobile:right-1/2 mobile:left-auto`} onClick={()=>{handleChooseBottle(2)}}>
                                    <span className="text-26px font-AlbertusNova-Regular font-normal paid:text-18px mobile:text-16px">{bottleData[2].num}</span>
                                </div>
                                <div className={`select-none cursor-pointer flex justify-center items-center w-60px h-60px absolute z-20 rounded-full  ${currentBottleIndex == 3 ? 'shadow-[#B96566]-500 bg-[#B96566] text-[#fff]' : 'bg-[#CECECE] text-[#af4f1f]'} top-0 right-1/4 translate-x-[50%] translate-y-[-50%] paid:w-42px paid:h-42px mobile:w-36px mobile:h-36px`} onClick={()=>{handleChooseBottle(3)}}>
                                    <span className="text-26px font-AlbertusNova-Regular font-normal paid:text-18px mobile:text-16px">{bottleData[3].num}</span>
                                </div>
                                <div className={`select-none cursor-pointer flex justify-center items-center w-60px h-60px absolute z-20 rounded-full  ${currentBottleIndex == 4 ? 'shadow-[#B96566]-500 bg-[#B96566] text-[#fff]' : 'bg-[#CECECE]'}  top-1/2 right-1/4 translate-x-[200%] translate-y-[25%] paid:w-42px paid:h-42px mobile:w-36px mobile:h-36px`} onClick={()=>{handleChooseBottle(4)}}>
                                    <span className="text-26px font-AlbertusNova-Regular font-normal paid:text-18px mobile:text-16px">{bottleData[4].num}</span>
                                </div>
                                <div className={`select-none cursor-pointer flex justify-center items-center w-60px h-60px absolute z-20 rounded-full ${currentBottleIndex == 5 ? 'shadow-[#B96566]-500 bg-[#B96566] text-[#fff]' : 'bg-[#CECECE] text-[#96934C]'} top-1/2 right-0 translate-x-[-100%] translate-y-[-65%] paid:w-42px paid:h-42px mobile:w-36px mobile:h-36px`} onClick={()=>{handleChooseBottle(5)}}>
                                    <span className="text-26px font-AlbertusNova-Regular font-normal  paid:text-18px mobile:text-16px">{bottleData[5].num}</span>
                                </div>
                            </div>
                            <div className="rotate-[90deg] block text-dark-grey font-AlbertusNova-Bold text-16px paid:text-11px mobile:text-14px">RICH</div>
                        </div>
                        <div className=" text-center text-dark-grey font-AlbertusNova-Bold text-16px paid:text-11px mobile:text-14px">SWEET</div>
                    </div>

                </div>
            </div>
        </div>


    );
}

export default ProductFamilyComponent;

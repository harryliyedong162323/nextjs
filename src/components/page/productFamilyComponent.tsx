"use client";

import style from '@/styles/infoBlockComponent.module.css'
import React, { useEffect, useState } from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
import BaseVideo from "@/components/base/video";

function ProductFamilyComponent(props: any) {

    // const block1Image = props.data.entry.fields.block1Image.sys.fields;

    // useEffect(() => {

    // }, []);
    console.log(props)
    return (


        <div className="h-screen overflow-hidden">
            <div className="h-[70vh] overflow-hidden">
                <div className="relative h-full w-full">
                    <BaseImage
                        mImg={require("../../../public/assets/productFamily/kv-m.png")}
                        pImg={require("../../../public/assets/productFamily/kv.png")}
                        alt={""}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    ></BaseImage>

                    <div className="w-169px h-368px absolute left-1/2 translate-x-[-50%] top-150px mobile:w-102px mobile:h-223px mobile:top-94px">
                        <BaseImage
                            mImg={require("../../../public/assets/productFamily/bottle-m.png")}
                            pImg={require("../../../public/assets/productFamily/bottle.png")}
                            alt={""}
                            objectFit="contain"
                            quality={100}
                        ></BaseImage>
                    </div>
                    <div className="left-1/2 translate-x-[50%] absolute top-240px text-white mobile:translate-x-[-50%] mobile:top-342px mobile:pl-23px mobile:pr-23px mobile:w-full">
                        <div className="font-AlbertusNova-Regular font-normal mobile:text-center mobile:w-426px mobile:pb-20px">
                            <div className="inline-block align-middle">
                                <div className="relative">
                                   <span className="text-60px font-light font-AlbertusNova-Light mobile:text-38px">23</span>
                                    <span className="text-11px font-bold absolute bottom-0 left-0 w-full text-center mobile:text-7px">years old</span>
                                </div>
                                {/*<div className="text-11px font-bold">years old</div>*/}
                            </div>
                            <div className="mr-16px ml-9px inline-block align-middle h-[80%] w-2px bg-white mobile:ml-10px mobile:mr-6px"></div>
                            <div className="inline-block align-middle w-194px text-29px pt-20px mobile:text-19px mobile:w-125px">ANCIENT MOORLAND</div>
                        </div>
                        <div className="pb-30px w-426px text-20px font-Grotesque-Light font-normal mobile:w-full mobile:text-center mobile:text-14px mobile:leading-[21px]">
                            An epic landscape of rich oak, deep vanilla, mellow sherry spice and sweetness, inspired by Scotland’s heather-covered moorlands in full bloom.
                        </div>
                        <div className="font-Grotesque-Regular font-normal text-21px mobile:text-center mobile:text-16px">£750 RRP</div>
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


                    <div className="absolute container left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] leading-[20px] mobile:w-[80%]">
                        <div className="text-center text-dark-grey font-AlbertusNova-Bold text-16px mobile:text-14px">SMOKY</div>
                        <div className="pb-11px text-center text-dark-grey text-13px mobile:text-10px">MALT</div>
                        <div className="flex justify-between text-center h-108px pb-11px">
                            <div className="rotate-[-90deg] block">
                                <div className="font-AlbertusNova-Regular font-normal text-dark-grey font-AlbertusNova-Bold text-16px mobile:text-14px">LIGHT</div>
                                <div className="pb-6px font-AlbertusNova-Medium font-normal text-dark-grey text-13px mobile:text-10px">GRAIN</div>
                            </div>
                            <div className="w-full relative after:content-[''] after:absolute after:top-1/2 after:translate-y-[-50%] after:left-1/2 after:translate-x-[-50%] after:w-full after:h-2px after:bg-dark-grey after:content-[''] before:absolute before:top-1/2 before:translate-y-[-50%] before:left-1/2 before:translate-x-[-50%] before:w-2px before:h-full before:bg-dark-grey">
                                <div className="cursor-pointer flex justify-center items-center w-60px h-60px absolute z-20 rounded-full bg-[#CECECE] bottom-0 left-1/4 translate-x-[-50%] translate-y-[50%]">
                                    <span className="text-26px font-AlbertusNova-Regular font-normal text-[#588C96]">30</span>
                                </div>
                                <div className="cursor-pointer flex justify-center items-center w-60px h-60px absolute z-20 rounded-full bg-[#CECECE] top-1/2 left-1/2 translate-x-[-70%] translate-y-[-70%]">
                                    <span className="text-26px font-AlbertusNova-Regular font-normal text-[#588C96]">30</span>
                                </div>
                                <div className="cursor-pointer flex justify-center items-center w-60px h-60px absolute z-20 rounded-full bg-[#CECECE] top-1/2 left-1/2 translate-x-[200%] translate-y-[-50%]">
                                    <span className="text-26px font-AlbertusNova-Regular font-normal text-[#779374]">23</span>
                                </div>
                                <div className="cursor-pointer flex justify-center items-center w-60px h-60px absolute z-20 rounded-full bg-[#CECECE] top-0 right-1/4 translate-x-[50%] translate-y-[-50%]">
                                    <span className="text-26px font-AlbertusNova-Regular font-normal text-[#af4f1f]">40</span>
                                </div>
                                <div className="cursor-pointer flex justify-center items-center w-60px h-60px absolute z-20 rounded-full shadow-[#B96566]-500 bg-[#B96566] top-1/2 right-1/4 translate-x-[200%] translate-y-[25%]">
                                    <span className="text-26px font-AlbertusNova-Regular font-normal text-[#fff]">23</span>
                                </div>
                                <div className="cursor-pointer flex justify-center items-center w-60px h-60px absolute z-20 rounded-full bg-[#CECECE] top-1/2 right-0 translate-x-[-100%] translate-y-[-65%]">
                                    <span className="text-26px font-AlbertusNova-Regular font-normal text-[#96934C]">23</span>
                                </div>
                            </div>
                            <div className="rotate-[90deg] block text-dark-grey font-AlbertusNova-Bold text-16px mobile:text-14px">RICH</div>
                        </div>
                        <div className=" text-center text-dark-grey font-AlbertusNova-Bold text-16px mobile:text-14px">SWEET</div>
                    </div>

                </div>
            </div>
        </div>


    );
}

export default ProductFamilyComponent;
"use client";

import style from '@/styles/KVAnimationComponent.module.css'
import React, { useEffect, useState } from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
import BaseVideo from "@/components/base/video";

function KVAnimationComponent(props: any) {
    console.log(props)
    const headStyle = props.data.entry.headStyle;
  // const block1Image = props.data.entry.fields.block1Image.sys.fields;

  // useEffect(() => {

  // }, []);

  return (


      <section className="h-screen overflow-hidden">
          <input type="hidden" value={headStyle}/>
        {/*<div className="h-166px w-full relative paid:h-118px mobile:h-85px">*/}
        {/*    <div className="w-538px h-86px bg-contain bg-[url('/assets/KVAnimation/logo.png')] cursor-pointer absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] paid:w-380px paid:h-61px mobile:w-186px mobile:h-30px mobile:bg-[url('/assets/KVAnimation/logo-m.png')]"></div>*/}
        {/*    <div className="w-25px h-23px bg-contain bg-[url('/assets/KVAnimation/menu.png')] cursor-pointer absolute right-50px top-1/2 translate-y-[-50%] paid:w-17px paid:h-16px mobile:w-20px mobile:h-20px mobile:right-25px"></div>*/}
        {/*</div>*/}
        <div className="h-166px w-full paid:h-118px mobile:h-85px"></div>
        <div className="pt-20px container mx-auto paid:pt-14px mobile:pl-25px mobile:pr-25px">
            <div className="relative h-500px w-full paid:h-357px  mobile:h-[65vh]">
                <BaseImage
                    mImg={require("../../../public/assets/KVAnimation/kv-m.png")}
                    pImg={require("../../../public/assets/KVAnimation/kv.png")}
                    alt={""}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                ></BaseImage>
                <div className="absolute w-181px h-395px z-20 left-1/2 translate-x-[-50%] bottom-[-80px] paid:w-129px paid:h-282px paid:bottom-[-57px] mobile:w-102px mobile:h-223px mobile:bottom-[-40px]">
                    <BaseImage
                        mImg={require("../../../public/assets/KVAnimation/bottle-m.png")}
                        pImg={require("../../../public/assets/KVAnimation/bottle.png")}
                        alt={""}
                        objectFit="contain"
                        quality={100}
                    ></BaseImage>
                </div>
            </div>
            <div className="pt-94px text-center pb-29px text-30px font-normal font-AlbertusNova-Regular paid:pt-67px paid:pb-20px paid:text-21px mobile:pt-66px">
                A drop of wilderness in every glass
            </div>

            <div className="w-full flex flex-col items-center justify-center mobile:hidden mb-20px">
                <div className="w-18px h-24px border-black border-2 inline-block border-solid rounded-full mb-5px relative before:w-2px before:h-5px before:bg-black before:absolute before:content-[''] before:left-6px before:top-5px before:animate-scrollMore"></div>
                <div className="text-12px leading-tight text-black font-Grotesque-Regular">
                    Scroll to explore more
                </div>
            </div>
        </div>
      </section>


  );
}

export default KVAnimationComponent;

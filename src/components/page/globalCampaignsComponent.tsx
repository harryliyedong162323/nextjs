"use client";

import React, {useCallback, useEffect, useState} from "react";
import BaseImage from "@/components/base/image";


function GlobalCampaignsComponent(props: any) {


    const subTitle:string = "Wildmoor house";
    const title:string = "Shenzhen Nanjing Road";

    return (
        <section className="w-full h-screen overflow-hidden relative">
            <BaseImage
                defaultImg={require("../../../public/assets/howToBuyDetail/bg.png")}
                alt={""}
                layout="fill"
                objectFit="cover"
                quality={100}
            ></BaseImage>

            <div className="absolute z-10 bottom-[178px] left-1/2 w-full translate-x-[-50%] mobile:bottom-[106px]">

                {
                    subTitle != '' ? <div className="font-AlbertusNova-Regular font-normal text-center text-26px pb-50px text-[#E6E7E8] mobile:text-14px mobile:pb-25px uppercase">{subTitle}</div> : null
                }

                {
                    title != '' ? <div className="font-AlbertusNova-Regular font-normal text-center text-[#E6E7E8] text-48px mobile:text-24px uppercase">{title}</div> : null
                }

            </div>


            <div className="absolute bottom-24px w-full flex flex-col items-center justify-center mobile:hidden">
                <div className="w-18px h-24px border-white border-2 inline-block border-solid rounded-full mb-5px relative before:w-2px before:h-5px before:bg-white before:absolute before:content-[''] before:left-6px before:top-5px before:animate-scroll"></div>
                <div className="text-12px leading-tight text-white font-Grotesque-Regular">
                    Scroll to explore more
                </div>
            </div>


        </section>

    );
}

export default GlobalCampaignsComponent;

"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import BaseImage from "@/components/base/image";

function VIPClubComponent(props: any) {

    const headStyle = props.data.entry.headStyle;

    useEffect(() => {}, []);

    return (
        <section className="relative h-screen bg-cover bg-[url('/assets/VIPClub/bg.png')] bg-black overflow-hidden select-none">
            <input type="hidden" value={headStyle}/>
            <div className="relative container mx-auto">
                <div className="pt-154px uppercase font-AlbertusNova-Regular font-normal text-33px text-center w-645px mx-auto text-white pb-114px paid:pt-110px paid:text-23px paid:w-446px paid:pb-81px mobile:text-20px mobile:leading-[30px] mobile:w-325px mobile:pt-90px mobile:pb-67px">Join us in our next adventures,be the first to know.</div>

                <div className="grid grid-cols-3 place-items-center mobile:grid-rows-3 mobile:grid-cols-none">
                    <div className="w-283px h-245px relative self-center paid:w-262px paid:h-235px mobile:w-315px mobile:h-130px mobile:mb-46px">
                        <BaseImage
                            mImg={require("../../../public/assets/VIPClub/list-1-m.png")}
                            pImg={require("../../../public/assets/VIPClub/list-1.png")}
                            alt={""}
                            objectFit="contain"
                            quality={100}
                        ></BaseImage>
                        <div className="hover:bg-[url('/assets/VIPClub/CTA-A.png')] cursor-pointer hover:text-black bg-[url('/assets/VIPClub/CTA.png')] bg-[length:100%_100%] mt-20px mx-auto w-150px h-36px text-center leading-[36px] text-white text-12px uppercase font-AlbertusNova-Regular font-normal paid:w-107px paid:h-25px paid:leading-[25px] paid:text-8px paid:mt-34px">
                            explore
                        </div>
                    </div>
                    <div className="w-283px h-245px relative self-center paid:w-262px paid:h-235px mobile:w-315px mobile:h-130px mobile:mb-46px">
                        <BaseImage
                            mImg={require("../../../public/assets/VIPClub/list-2-m.png")}
                            pImg={require("../../../public/assets/VIPClub/list-2.png")}
                            alt={""}
                            objectFit="contain"
                            quality={100}
                        ></BaseImage>
                        <div className="hover:bg-[url('/assets/VIPClub/CTA-A.png')] cursor-pointer hover:text-black bg-[url('/assets/VIPClub/CTA.png')] bg-[length:100%_100%] mt-20px mx-auto w-150px h-36px text-center leading-[36px] text-white text-12px uppercase font-AlbertusNova-Regular font-normal paid:w-107px paid:h-25px paid:leading-[25px] paid:text-8px paid:mt-34px">
                            explore
                        </div>
                    </div>
                    <div className="w-283px h-245px relative self-center paid:w-262px paid:h-235px mobile:w-315px mobile:h-129px">
                        <BaseImage
                            mImg={require("../../../public/assets/VIPClub/list-3-m.png")}
                            pImg={require("../../../public/assets/VIPClub/list-3.png")}
                            alt={""}
                            objectFit="contain"
                            quality={100}
                        ></BaseImage>
                        <div className="hover:bg-[url('/assets/VIPClub/CTA-A.png')] cursor-pointer hover:text-black bg-[url('/assets/VIPClub/CTA.png')] bg-[length:100%_100%] mt-20px mx-auto w-150px h-36px text-center leading-[36px] text-white text-12px uppercase font-AlbertusNova-Regular font-normal paid:w-107px paid:h-25px paid:leading-[25px] paid:text-8px paid:mt-34px">
                            explore
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VIPClubComponent;

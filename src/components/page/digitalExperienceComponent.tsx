"use client";

import React, { useEffect, useState } from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
import BaseVideo from "@/components/base/video";

function DigitalExperienceComponent(props: any) {
    const headStyle = props.data.entry.headStyle;
    // const block1Image = props.data.entry.fields.block1Image.sys.fields;

    // useEffect(() => {

    // }, []);
    console.log(props)
    return (
        <section id="DigitalExperience" data-anchor={2} className="overflow-hidden h-screen bg-[url('/assets/digitalExperience/bg.png')] bg-cover bg-repeat  select-none">
            <input type="hidden" value={headStyle}/>
            <div className="relative container mx-auto">
                <div className="text-33px font-normal font-AlbertusNova-Regular text-center pt-84px pb-200px text-white mobile:pb-50px mobile:pt-50px mobile:text-20px ">Digital experience</div>

                <div className="grid grid-cols-3 place-items-center mobile:grid-rows-3 mobile:grid-cols-none">
                    <div className="w-155px h-32px paid:w-110px paid:h-22px relative self-center mobile:w-167px mobile:h-204px">
                        <BaseImage
                            mImg={require("../../../public/assets/digitalExperience/list-1-m.png")}
                            pImg={require("../../../public/assets/digitalExperience/list-1.png")}
                            alt={""}
                            objectFit="contain"
                            quality={100}
                        ></BaseImage>
                        <div className="hover:bg-[url('/assets/VIPClub/CTA-A.png')] cursor-pointer hover:text-black bg-[url('/assets/VIPClub/CTA.png')] bg-[length:100%_100%] mt-41px mx-auto w-150px h-36px text-center leading-[36px] text-white text-12px uppercase font-AlbertusNova-Regular font-normal paid:w-107px paid:h-25px paid:leading-[25px] paid:text-8px paid:mt-28px mobile:hidden">
                            explore
                        </div>
                    </div>
                    <div className=" relative self-center  text-center">
                        <div className={`w-137px h-137px mx-auto paid:w-97px paid:h-97px mobile:w-125px mobile:h-89px`}>
                            <BaseImage

                                mImg={require("../../../public/assets/digitalExperience/list-2-m.png")}
                                pImg={require("../../../public/assets/digitalExperience/list-2.png")}
                                alt={""}
                                objectFit="contain"
                                quality={100}
                            ></BaseImage>
                        </div>
                        <div className=" mt-32px mx-auto w-278px  text-white text-17px uppercase text-center font-AlbertusNova-Regular font-normal paid:w-231px paid:text-12px paid:mt-22px  mobile:hidden">
                            Scan to follow WILDMOOR
                        </div>
                    </div>
                    <div className="w-218px h-32px paid:w-110px paid:h-22px relative self-center mobile:w-125px mobile:h-89px">
                        <BaseImage
                            mImg={require("../../../public/assets/digitalExperience/list-3-m.png")}
                            pImg={require("../../../public/assets/digitalExperience/list-3.png")}
                            alt={""}
                            objectFit="contain"
                            quality={100}
                        ></BaseImage>
                        <div className="hover:bg-[url('/assets/VIPClub/CTA-A.png')] cursor-pointer hover:text-black bg-[url('/assets/VIPClub/CTA.png')] bg-[length:100%_100%] mt-41px mx-auto w-150px h-36px text-center leading-[36px] text-white text-12px uppercase font-AlbertusNova-Regular font-normal paid:w-107px paid:h-25px paid:leading-[25px] paid:text-8px paid:mt-28px mobile:hidden">
                            explore
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default DigitalExperienceComponent;

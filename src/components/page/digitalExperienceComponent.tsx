"use client";

import React, { useEffect, useState } from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
import BaseVideo from "@/components/base/video";

function DigitalExperienceComponent(props: any) {

    // const block1Image = props.data.entry.fields.block1Image.sys.fields;

    // useEffect(() => {

    // }, []);
    console.log(props)
    return (
        <section className="overflow-hidden bg-[url('/assets/digitalExperience/bg.png')] bg-cover bg-repeat h-750px mobile:h-auto select-none">
            <div className="relative container mx-auto">
                <div className="text-33px font-normal font-AlbertusNova-Regular text-center pt-84px pb-200px text-white mobile:pb-50px mobile:pt-50px mobile:text-20px ">Digital experience</div>

                <div className="grid grid-cols-3 place-items-center mobile:grid-rows-3 mobile:grid-cols-none">
                    <div className="w-155px h-111px relative self-center cursor-pointer  mobile:w-165px mobile:h-204px">
                        <BaseImage
                            mImg={require("../../../public/assets/digitalExperience/list-1-m.png")}
                            pImg={require("../../../public/assets/digitalExperience/list-1.png")}
                            alt={""}
                            objectFit="contain"
                            quality={100}
                        ></BaseImage>
                    </div>
                    <div className="w-232px h-168px relative self-center cursor-pointer mobile:w-125px mobile:h-89px">
                        <BaseImage
                            mImg={require("../../../public/assets/digitalExperience/list-2-m.png")}
                            pImg={require("../../../public/assets/digitalExperience/list-2.png")}
                            alt={""}
                            objectFit="contain"
                            quality={100}
                        ></BaseImage>
                    </div>
                    <div className="w-218px h-117px relative self-center cursor-pointer mobile:w-125px mobile:h-89px">
                        <BaseImage
                            mImg={require("../../../public/assets/digitalExperience/list-3-m.png")}
                            pImg={require("../../../public/assets/digitalExperience/list-3.png")}
                            alt={""}
                            objectFit="contain"
                            quality={100}
                        ></BaseImage>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default DigitalExperienceComponent;

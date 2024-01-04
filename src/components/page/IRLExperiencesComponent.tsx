"use client";

import React, { useEffect, useState } from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
import BaseVideo from "@/components/base/video";

function IRLExperiencesComponent(props: any) {
    const headStyle = props.data.entry.headStyle;
    // const block1Image = props.data.entry.fields.block1Image.sys.fields;

    // useEffect(() => {

    // }, []);

    return (
        <section id="IRLExperiences" data-anchor={props.data.entry.pageNumber} className="overflow-hidden h-screen container mx-auto pb-164px mobile:pb-67px select-none">
            <input type="hidden" value={headStyle}/>
            <div className="relative">
                <div className="text-40px font-normal font-AlbertusNova-Regular text-center pt-55px pb-54px mobile:text-24px mobile:pt-20px mobile:pb-20px">IRL Experiences</div>

                <div className="grid grid-cols-2 justify-center gap-[41px] paid:gap-[29px] items-center mobile:grid-rows-2 mobile:grid-cols-none">
                    <div className="pl-21px mobile:pl-0 mobile:w-[90%] mobile:mx-auto">
                        <div className="relative h-405px paid:h-289px  mobile:h-217px  mobile:w-full">
                            <BaseImage
                                mImg={require("../../../public/assets/IRLExperiences/list-1.png")}
                                pImg={require("../../../public/assets/IRLExperiences/list-1.png")}
                                alt={""}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                            ></BaseImage>
                        </div>
                        <div className="pt-43px mobile:pt-26px">
                            <div className="pb-25px paid:pb-17px font-medium text-26px paid:text-18px font-AlbertusNova-Regular mobile:text-16px mobile:pb-26px">The Wildmoor House Shanghai</div>
                            <div className="flex justify-between items-center">
                                <div className="w-[90%]  text-13px paid:text-9px font-Grotesque-Regular font-normal  mobile:text-16px ">Step inside The Wildmoor House, where stories of the brand come to life and the art of whisky making finds its ultimate expression.</div>

                            </div>
                            <div className="pt-31px paid:pt-22px">
                                <BaseLink link="/howToBuyDetail">
                                    <div className="w-30px h-30px bg-contain bg-[url('/assets/more.png')] cursor-pointer mobile:w-24px mobile:h-24px"></div>
                                </BaseLink>
                            </div>

                        </div>
                    </div>
                    <div className="pl-21px mobile:pl-0 mobile:w-[90%] mobile:mx-auto">
                        <div className="relative h-405px paid:h-289px mobile:h-217px  mobile:w-full">
                            <BaseImage
                                mImg={require("../../../public/assets/IRLExperiences/list-1.png")}
                                pImg={require("../../../public/assets/IRLExperiences/list-1.png")}
                                alt={""}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                            ></BaseImage>
                        </div>
                        <div className="pt-43px mobile:pt-26px">
                            <div className="pb-25px paid:pb-17px font-medium text-26px paid:text-18px font-AlbertusNova-Regular mobile:text-16px mobile:pb-26px">The Wildmoor House Shanghai</div>
                            <div className="flex justify-between items-center">
                                <div className="w-[90%]  text-13px paid:text-9px  font-Grotesque-Regular font-normal  mobile:text-16px ">Step inside The Wildmoor House, where stories of the brand come to life and the art of whisky making finds its ultimate expression.</div>

                            </div>
                            <div className="pt-31px paid:pt-22px">
                                <BaseLink link="/howToBuyDetail">
                                    <div className="w-30px h-30px bg-contain bg-[url('/assets/more.png')] cursor-pointer mobile:w-24px mobile:h-24px"></div>
                                </BaseLink>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default IRLExperiencesComponent;

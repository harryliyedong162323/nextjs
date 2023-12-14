"use client";

import React, { useEffect, useState } from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
import BaseVideo from "@/components/base/video";

function IRLExperiencesComponent(props: any) {

    // const block1Image = props.data.entry.fields.block1Image.sys.fields;

    // useEffect(() => {

    // }, []);

    return (
        <section className="overflow-hidden container mx-auto pb-164px mobile:pb-67px">
            <div className="relative">
                <div className="text-40px font-normal font-AlbertusNova-Regular text-center pt-55px pb-54px mobile:text-24px mobile:pt-20px mobile:pb-20px">IRL Experiences</div>

                <div className="grid grid-cols-2 justify-center items-center mobile:grid-rows-2 mobile:grid-cols-none">
                    <div className="pr-21px mobile:pr-0 mobile:pb-50px">
                        <div className="relative h-405px mobile:h-217px mobile:w-325px">
                            <BaseImage
                                mImg={require("../../../public/assets/IRLExperiences/list-1.png")}
                                pImg={require("../../../public/assets/IRLExperiences/list-1.png")}
                                alt={""}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                            ></BaseImage>
                        </div>
                        <div className="pt-52px mobile:pt-26px">
                            <div className="pb-43px font-medium text-22px font-Grotesque-Regular mobile:text-16px mobile:pb-26px">Coventry Road</div>
                            <div className="flex justify-between items-center">
                                <div className="w-[80%] truncate text-22px font-Grotesque-Regular font-normal  mobile:text-16px mobile:w-224px">4325 Glenwood AvenueRaleigh, NC 27612, 000-1234567890 10:00-24:00</div>
                                <div className="w-30px h-30px bg-contain bg-[url('/assets/more.png')] cursor-pointer mobile:w-24px mobile:h-24px"></div>
                            </div>

                        </div>
                    </div>
                    <div className="pl-21px mobile:pl-0">
                        <div className="relative h-405px  mobile:h-217px  mobile:w-325px">
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
                            <div className="pb-29px font-medium text-22px font-Grotesque-Regular mobile:text-16px mobile:pb-26px">Coventry Road</div>
                            <div className="flex justify-between items-center">
                                <div className="w-[80%] truncate text-22px font-Grotesque-Regular font-normal  mobile:text-16px mobile:w-224px">4325 Glenwood AvenueRaleigh, NC 27612, 000-1234567890 10:00-24:00</div>
                                <div className="w-30px h-30px bg-contain bg-[url('/assets/more.png')] cursor-pointer mobile:w-24px mobile:h-24px"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default IRLExperiencesComponent;

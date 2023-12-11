"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import BaseImage from "@/components/base/image";

function VIPClubComponent(props: any) {
    useEffect(() => {}, []);

    return (
        <section className="relative h-screen bg-cover bg-[url('/assets/VIPClub/bg.png')] bg-black overflow-hidden">

            <div className="relative container mx-auto">
                <div className="pt-154px uppercase font-AlbertusNova-Regular font-normal text-33px text-center w-625px mx-auto text-white pb-114px paid:pt-110px paid:text-23px paid:w-446px paid:pb-81px mobile:text-20px mobile:leading-[30px] mobile:w-325px mobile:pt-90px mobile:pb-67px">Join us in our next adventures,be the first to know.</div>

                <div className="grid grid-cols-3 place-items-center mobile:grid-rows-3 mobile:grid-cols-none">
                    <div className="w-283px h-330px relative self-center cursor-pointer paid:w-202px paid:h-235px mobile:w-315px mobile:h-130px mobile:mb-46px">
                        <BaseImage
                            mImg={require("../../../public/assets/VIPClub/list-1-m.png")}
                            pImg={require("../../../public/assets/VIPClub/list-1.png")}
                            alt={""}
                            objectFit="contain"
                            quality={100}
                        ></BaseImage>
                    </div>
                    <div className="w-283px h-316px relative self-center cursor-pointer  paid:w-202px paid:h-225px mobile:w-315px mobile:h-130px mobile:mb-46px">
                        <BaseImage
                            mImg={require("../../../public/assets/VIPClub/list-2-m.png")}
                            pImg={require("../../../public/assets/VIPClub/list-2.png")}
                            alt={""}
                            objectFit="contain"
                            quality={100}
                        ></BaseImage>
                    </div>
                    <div className="w-283px h-318px relative self-center cursor-pointer  paid:w-202px paid:h-227px mobile:w-315px mobile:h-129px">
                        <BaseImage
                            mImg={require("../../../public/assets/VIPClub/list-3-m.png")}
                            pImg={require("../../../public/assets/VIPClub/list-3.png")}
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

export default VIPClubComponent;

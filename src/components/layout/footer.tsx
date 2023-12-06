"use client";


import React, { useEffect, useState } from "react";

import BaseLink from "@/components/base/link";
function Footer(props: any) {

    // useEffect(() => {
    //
    // }, []);

    return (
        <footer className="relative overflow-hidden">
            <div className="w-full bg-[#E6E7E8] h-900px pt-100px pl-50px pr-50px pb-100px bg-[url('/assets/mask_footer.png')] bg-left-top bg-no-repeat mobile:bg-contain mobile:bg-center mobile:pt-31px mobile:pb-78px mobile:h-auto mobile:bg-[url('/assets/mask_footer_2.png')]">
                <div className="flex justify-between pb-50px border-b-2 border-b-500 border-solid border-dark-grey mobile:justify-center mobile:flex-wrap mobile:pb-40px">
                    {/*mobile:w-274px mobile:h-44px*/}
                    <div className="mobile:w-full mobile:order-2">
                        <div className="bg-[url('/assets/wildmoor_footer.png')] w-262px h-41px bg-cover cursor-pointer mobile:h-27px mobile:w-173px mobile:mx-auto"></div>
                    </div>
                    <div className="mobile:order-1 mobile:w-full">
                        <div className="w-44px h-46px bg-[url('/assets/scroll_top.png')] bg-cover cursor-pointer mobile:mb-45px mobile:mx-auto mobile:w-40px mobile:h-42px"></div>
                    </div>
                </div>
                <div className="flex justify-between pt-50px pb-50px mobile:flex-wrap mobile:justify-center">
                    <ul className="flex-auto mobile:w-full ">
                        <li className="flex justify-between pb-35px mobile:pb-40px">
                            <span className="text-20px font-medium font-Grotesque-Regular dark-grey mobile:text-17px">our story</span>
                            <span className="text-33px w-23px h-23px hidden bg-[url('/assets/add_footer.png')] bg-contain cursor-pointer mobile:block"></span>
                        </li>
                        <li className="text-[#696969] text-16px font-normal font-Grotesque-Regular pb-17px mobile:hidden">
                            <BaseLink hover="text-black-500">
                                A Drop Of Wildness
                            </BaseLink>
                        </li>
                        <li className="text-[#696969] text-16px font-normal font-Grotesque-Regular pb-17px mobile:hidden">
                            <BaseLink hover="text-black-500">What Others Say</BaseLink>
                        </li>
                    </ul>

                    <ul className="flex-auto mobile:w-full">
                        <li className="flex justify-between  pb-35px mobile:pb-40px">
                            <span className="text-20px font-medium font-Grotesque-Regular dark-grey mobile:text-17px">our range</span>
                            <span className="text-33px w-23px h-23px hidden bg-[url('/assets/add_footer.png')] bg-contain cursor-pointer mobile:block"></span>
                        </li>
                        <li className="text-[#696969] text-16px font-normal font-Grotesque-Regular pb-17px mobile:hidden">
                            <BaseLink hover="text-black-500">Products Family</BaseLink>
                        </li>
                        <li className="text-[#696969] text-16px font-normal font-Grotesque-Regular pb-17px mobile:hidden">
                            <BaseLink hover="text-black-500">Tales From The Wild</BaseLink>
                        </li>
                        <li className="text-[#696969] text-16px font-normal font-Grotesque-Regular pb-17px mobile:hidden">
                            <BaseLink hover="text-black-500">Serving Suggestion</BaseLink>
                        </li>
                        <li className="text-[#696969] text-16px font-normal font-Grotesque-Regular pb-17px mobile:hidden">
                            <BaseLink hover="text-black-500">Bottle Concept</BaseLink>
                        </li>
                        <li className="text-[#696969] text-16px font-normal font-Grotesque-Regular pb-17px mobile:hidden">
                            <BaseLink hover="text-black-500">Flavour Finder</BaseLink>
                        </li>
                    </ul>

                    <ul className="flex-auto mobile:w-full">
                        <li className="flex justify-between  pb-35px mobile:pb-40px">
                            <span className="text-20px font-medium font-Grotesque-Regular dark-grey mobile:text-17px">the Wild Escape Journal</span>
                            <span className="text-33px w-23px h-23px hidden bg-[url('/assets/add_footer.png')] bg-contain cursor-pointer mobile:block"></span>
                        </li>
                        <li className="text-[#696969] text-16px font-normal font-Grotesque-Regular pb-17px mobile:hidden">
                            <BaseLink>Global Campaigns</BaseLink>
                        </li>
                        <li className="text-[#696969] text-16px font-normal font-Grotesque-Regular pb-17px mobile:hidden">
                            <BaseLink>The Wild Escape</BaseLink>
                        </li>
                        <li className="text-[#696969] text-16px font-normal font-Grotesque-Regular pb-17px mobile:hidden">
                            <BaseLink>Tales From The Wild</BaseLink>
                        </li>
                    </ul>

                    <ul className="flex-auto mobile:w-full">
                        <li className="flex justify-between pb-35px mobile:pb-0">
                            <span className="text-20px font-medium font-Grotesque-Regular dark-grey mobile:text-17px">wildmoor near you</span>
                            <span className="text-33px w-23px h-23px hidden bg-[url('/assets/add_footer.png')]  bg-contain cursor-pointer mobile:block"></span>
                        </li>
                        <li className="text-[#696969] text-16px font-normal font-Grotesque-Regular pb-17px mobile:hidden">
                            <BaseLink hover="text-black-500">Region Selection &<br/>Global Store Map</BaseLink>
                        </li>
                        <li className="text-[#696969] text-16px font-normal font-Grotesque-Regular pb-17px mobile:hidden">
                            <BaseLink hover="text-black-500">IRL Experiences</BaseLink>
                        </li>
                        <li className="text-[#696969] text-16px font-normal font-Grotesque-Regular pb-17px mobile:hidden">
                            <BaseLink hover="text-black-500">Digital Experience</BaseLink>
                        </li>
                    </ul>
                </div>

                <div className="border-b-2 border-b-500 border-solid border-[#969797] pb-100px mobile:pb-50px">
                    <div className="text-[#262627] text-16px font-normal font-Grotesque-Regular pb-46px mobile:text-center mobile:text-14px mobile:23px">Follow us</div>

                    <div>
                        <ul className="flex mobile:w-full mobile:justify-center">
                            <li className="w-36px h-36px cursor-pointer mr-36px mobile:w-25px mobile:h-25px mobile:mr-25px">
                                <BaseLink hover="text-black-500">
                                    <span className="block w-36px h-36px bg-cover bg-[url('/assets/instagram.png')] mobile:w-25px mobile:h-25px"></span>
                                </BaseLink>
                            </li>
                            <li className="w-36px h-36px cursor-pointer mr-36px mobile:w-25px mobile:h-25px mobile:mr-25px">
                                <BaseLink hover="text-black-500">
                                    <span className="block w-36px h-36px bg-cover bg-[url('/assets/facebook.png')] mobile:w-25px mobile:h-25px"></span>
                                </BaseLink>
                            </li>
                            <li className="w-36px h-36px cursor-pointer mr-36px mobile:w-25px mobile:h-25px mobile:mr-0">
                                <BaseLink hover="text-black-500">
                                    <span className="block w-36px h-36px bg-cover bg-[url('/assets/youtube.png')] mobile:w-25px mobile:h-25px"></span>
                                </BaseLink>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="pt-45px flex justify-between mobile:flex-wrap">
                    <div className="text-16px  mobile:w-full">
                        <ul className="flex mobile:flex-wrap mobile:justify-center mobile:text-center">
                            <li className="mr-84px text-[#696969] font-Grotesque-Regular mobile:hidden">
                                <BaseLink>
                                    &copy; 2023 WILDMOOR All rights reserved
                                </BaseLink>
                            </li>
                            <li className="mr-84px font-Grotesque-Regular mobile:mr-0 mobile:w-full mobile:mb-25px">
                                <BaseLink>
                                    Privacy policy
                                </BaseLink>
                            </li>
                            <li className="font-Grotesque-Regular mobile:w-full mobile:mb-64px">
                                <BaseLink>
                                    Terms of Service
                                </BaseLink>
                            </li>
                        </ul>
                    </div>
                    <div className="pr-21px flex mobile:pr-0 mobile:w-full mobile:justify-center mobile:pb-53px">
                        <div className="w-24px h-24px mr-10px  bg-cover bg-[url('/assets/language.png')]"></div>
                        <div className=" font-Grotesque-Regular text-16px font-medium cursor-pointer">Location and Language</div>
                    </div>

                    <div className="text-[#696969] font-Grotesque-Regular hidden mobile:text-14px mobile:w-full mobile:text-center mobile:block">
                        <BaseLink>
                            &copy; 2023 WILDMOOR All rights reserved
                        </BaseLink>
                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;
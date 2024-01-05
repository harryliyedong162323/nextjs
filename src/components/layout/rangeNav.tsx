"use client";

import React, { useEffect, useState } from "react";
function RangeNav(props: any) {
  const currentSlideIndex = props.currentSlideIndex;
  console.log("isShowRangeNav", props.isShowRangeNav);
  return (
    (currentSlideIndex !== 0 && currentSlideIndex !== 5 && !(currentSlideIndex === 4 && !props.isShowRangeNav)) && (
      <div
        className={`w-full fixed bottom-20px z-20 font-Grotesque-Regular text-[#969797]}`}
      >
        <div className="flex justify-between mx-auto w-[1250px] pad:w-[70%] mobile:w-full text-center uppercase text-20px pad:text-14px mobile:text-10px">
          <span
            className={`relative inline-block cursor-pointer ${ currentSlideIndex === 0 ? 'text-[#696969] mobile:text-white' : 'text-[#969797]' } mobile:w-64px ${ currentSlideIndex === 3 || currentSlideIndex === 4 ? 'hover:text-[#E6E7E8]' : 'hover:text-[#696969]' }`}
            onClick={() => {
              props.scrollToPage(0);
            }}
          >
            products family
          </span>
          <span
            className={`relative inline-block cursor-pointer ${ currentSlideIndex === 1 ? 'text-[#696969] mobile:text-white' : 'text-[#969797]' } mobile:w-64px ${ currentSlideIndex === 3 || currentSlideIndex === 4 ? 'hover:text-[#E6E7E8]' : 'hover:text-[#696969]' }`}
            onClick={() => {
              props.scrollToPage(1);
            }}
          >
            Tales From The Wild
            {currentSlideIndex === 1 && (
              <div className="bg-[url('/assets/range/icon_nav_line.png')] absolute bg-cover z-10 left-1/2 w-189px h-7px bottom-0px -ml-95px pad:w-154px pad:h-6px pad:-ml-77px mobile:top-36px mobile:w-64px mobile:h-3px mobile:-ml-32px"></div>
            )}
          </span>
          <span
            className={`relative inline-block cursor-pointer ${ currentSlideIndex === 2 ? 'text-[#696969] mobile:text-white' : 'text-[#969797]' } mobile:w-64px ${ currentSlideIndex === 3 || currentSlideIndex === 4 ? 'hover:text-[#E6E7E8]' : 'hover:text-[#696969]' }`}
            onClick={() => {
              props.scrollToPage(2);
            }}
          >
            Serving Suggestion
            {currentSlideIndex === 2 && (
              <div className="bg-[url('/assets/range/icon_nav_line.png')] absolute bg-cover z-10 left-1/2 w-189px h-7px bottom-0px -ml-95px pad:w-154px pad:h-6px pad:-ml-77px mobile:top-36px mobile:w-64px mobile:h-3px mobile:-ml-32px"></div>
            )}
          </span>
          <span
            className={`relative inline-block cursor-pointer ${ currentSlideIndex === 3 ? 'text-[#E6E7E8] mobile:text-white' : 'text-[#969797]' } mobile:w-64px ${ currentSlideIndex === 3 || currentSlideIndex === 4 ? 'hover:text-[#E6E7E8]' : 'hover:text-[#696969]' }`}
            onClick={() => {
              props.scrollToPage(3);
            }}
          >
            Bottle Concept
            {currentSlideIndex === 3 && (
              <div className="bg-[url('/assets/range/icon_nav_line_white.png')] absolute bg-cover z-10 left-1/2 w-189px h-7px bottom-0px -ml-95px pad:w-154px pad:h-6px pad:-ml-77px mobile:top-36px mobile:w-64px mobile:h-3px mobile:-ml-32px"></div>
            )}
          </span>
          <span
            className={`relative inline-block cursor-pointer ${ currentSlideIndex === 4 ? 'text-[#E6E7E8] mobile:text-white' : 'text-[#969797]' } mobile:w-64px ${ currentSlideIndex === 3 || currentSlideIndex === 4 ? 'hover:text-[#E6E7E8]' : 'hover:text-[#696969]' }`}
            onClick={() => {
              props.scrollToPage(4);
            }}
          >
            Flavour Finder
            {currentSlideIndex === 4 && (
              <div className={`bg-[url('/assets/range/icon_nav_line_white.png')] absolute bg-cover z-10 left-1/2 w-189px h-7px bottom-0px -ml-95px pad:w-154px pad:h-6px pad:-ml-77px mobile:top-36px mobile:w-64px mobile:h-3px mobile:-ml-32px`}></div>
            )}
          </span>
        </div>
      </div>
    )
  );
}

export default RangeNav;

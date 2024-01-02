"use client";

import React, { useEffect, useState } from "react";
function RangeNav(props: any) {
  const currentSlideIndex = props.currentSlideIndex;
  console.log("isShowRangeNav", props.isShowRangeNav);
  return (
    (currentSlideIndex !== 0 && currentSlideIndex !== 5 && !(currentSlideIndex === 4 && !props.isShowRangeNav)) && (
      <div
        className={`w-full fixed bottom-20px z-20 font-Grotesque-Regular text-[#969797] uppercase text-20px paid:text-14px mobile:text-10px}`}
      >
        <div className="flex justify-between mx-auto w-[1250px] paid:w-1000px mobile:w-full text-center">
          <span
            className="inline-block cursor-pointer mobile:w-64px"
            onClick={() => {
              props.scrollToPage(0);
            }}
          >
            products family
          </span>
          <span
            className="relative inline-block cursor-pointer text-[#696969] mobile:w-64px mobile:text-white"
            onClick={() => {
              props.scrollToPage(1);
            }}
          >
            Tales From The Wild
            {currentSlideIndex === 1 && (
              <div className="bg-[url('/assets/range/icon_nav_line.png')] absolute bg-cover z-10 left-1/2 w-189px h-7px top-26px -ml-95px paid:w-154px paid:h-6px paid:top-24px paid:-ml-77px mobile:top-36px mobile:w-64px mobile:h-3px mobile:-ml-32px"></div>
            )}
          </span>
          <span
            className="relative inline-block cursor-pointer mobile:w-64px"
            onClick={() => {
              props.scrollToPage(2);
            }}
          >
            Serving Suggestion
            {currentSlideIndex === 2 && (
              <div className="bg-[url('/assets/range/icon_nav_line.png')] absolute bg-cover z-10 left-1/2 w-189px h-7px top-26px -ml-95px paid:w-154px paid:h-6px paid:top-24px paid:-ml-77px mobile:top-36px mobile:w-64px mobile:h-3px mobile:-ml-32px"></div>
            )}
          </span>
          <span
            className="relative inline-block cursor-pointer mobile:w-64px"
            onClick={() => {
              props.scrollToPage(3);
            }}
          >
            Bottle Concept
            {currentSlideIndex === 3 && (
              <div className="bg-[url('/assets/range/icon_nav_line.png')] absolute bg-cover z-10 left-1/2 w-189px h-7px top-26px -ml-95px paid:w-154px paid:h-6px paid:top-24px paid:-ml-77px mobile:top-36px mobile:w-64px mobile:h-3px mobile:-ml-32px"></div>
            )}
          </span>
          <span
            className="relative inline-block cursor-pointer mobile:w-64px"
            onClick={() => {
              props.scrollToPage(4);
            }}
          >
            Flavour Finder
            {currentSlideIndex === 4 && (
              <div className="bg-[url('/assets/range/icon_nav_line.png')] absolute bg-cover z-10 left-1/2 w-189px h-7px top-26px -ml-95px paid:w-154px paid:h-6px paid:top-24px paid:-ml-77px mobile:top-36px mobile:w-64px mobile:h-3px mobile:-ml-32px"></div>
            )}
          </span>
        </div>
      </div>
    )
  );
}

export default RangeNav;

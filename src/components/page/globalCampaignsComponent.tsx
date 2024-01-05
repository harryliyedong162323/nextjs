"use client";

import React, { useCallback, useEffect, useState } from "react";
import BaseImage from "@/components/base/image";

function GlobalCampaignsComponent(props: any) {
  const headStyle = props.data.entry.headStyle;

  const subTitle: string = "Wildmoor house";
  const title: string = "Shenzhen Nanjing Road";



  const [isFullPage] = useState<boolean>(props.data.entry.isFullPage || false);
  const [isCurrentPage, setIsCurrentPage] = useState<boolean>(false);


  useEffect(() => {
    if (isFullPage) {
      if (props.data.entry.currentPageNumber === props.data.entry.pageNumber) {
        setIsCurrentPage(true);
      } else {
        setIsCurrentPage(false);
      }
    }
  }, [isFullPage, props]);



  return (
    <section
      id="WildmoorHouse"
      data-anchor={0}
      className="w-full h-screen overflow-hidden relative select-none"
    >
      <input type="hidden" value={headStyle} />
      <BaseImage
        defaultImg={require("../../../public/assets/howToBuyDetail/bg2.png")}
        alt={""}
        layout="fill"
        objectFit="cover"
        quality={100}
      ></BaseImage>
      <div className="absolute z-10 bottom-0 h-[60vh] w-full bg-gradient-to-b from-[transparent] to-[#000] "></div>
      {/*${isCurrentPage ? 'translate-y-0 opacity-1' : 'translate-y-[-70%] opacity-0'}*/}
      <div className={`absolute z-10 bottom-[148px] left-1/2 w-full  translate-x-[-50%] mobile:bottom-[106px] translate-y-0 opacity-1 `}>
        {subTitle != "" ? (
          <div className="font-AlbertusNova-Regular font-normal text-center text-22px pb-42px text-[#fff] mobile:text-14px mobile:pb-25px uppercase">
            {subTitle}
          </div>
        ) : null}

        {title != "" ? (
          <div className="font-AlbertusNova-Regular font-normal text-center text-[#fff] text-40px mobile:text-24px uppercase">
            {title}
          </div>
        ) : null}


        <div className={`pt-28px relative z-30 pad:pt-20px flex justify-between  mx-auto text-white w-889px pad:w-740px mobile:flex-wrap mobile:justify-center mobile:w-full mobile:text-center`}>
          <div className="font-Grotesque-Regular font-normal text-21px pad:text-15px mobile:w-full mobile:text-12px mobile:pb-15px">
            <span className="w-18px h-24px mobile:w-21px mobile:h-21 pad:w-12px pad:h-20px inline-block align-middle bg-no-repeat bg-[url('/assets/howToBuyDetail/address.png')] bg-contain"></span>
            <span className="inline-block align-middle pl-17px pad:pl-12px mobile:pl-9px">4325 Glenwood AvenueRaleigh, NC 27612, </span>
          </div>
          <div className="font-Grotesque-Regular font-normal text-21px pad:text-15px mobile:text-12px">
            <span className="w-20px h-20px mobile:w-21px mobile:h-21 pad:w-14px pad:h-14px inline-block align-middle bg-no-repeat bg-[url('/assets/howToBuyDetail/time.png')] bg-contain"></span>
            <span className="inline-block align-middle pl-17px pad:pl-12px mobile:pl-9px">10:00-24:00</span>
          </div>
          <div className="font-Grotesque-Regular font-normal text-21px pad:text-15px mobile:text-12px mobile:pl-25px">
            <span className="w-20px h-18px mobile:w-21px mobile:h-21 pad:w-14px pad:h-12px inline-block align-middle bg-no-repeat bg-[url('/assets/howToBuyDetail/phone.png')] bg-contain"></span>
            <span className="inline-block align-middle pl-17px pad:pl-12px mobile:pl-9px">000-1234567890</span>
          </div>
        </div>

      </div>

      <div className="absolute bottom-24px w-full flex flex-col items-center justify-center mobile:hidden z-30">
        <div className="w-18px h-24px border-white border-2 inline-block border-solid rounded-full mb-5px relative before:w-2px before:h-5px before:bg-white before:absolute before:content-[''] before:left-6px before:top-5px before:animate-scrollMore"></div>
        <div className="text-12px leading-tight text-white font-Grotesque-Regular">
          Scroll to explore more
        </div>
      </div>
    </section>
  );
}

export default GlobalCampaignsComponent;

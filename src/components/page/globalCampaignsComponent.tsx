"use client";

import React, { useCallback, useEffect, useState } from "react";
import BaseImage from "@/components/base/image";




interface entryContent{
  isFullPage:boolean,
  currentPageNumber:number,
  pageNumber:number,
  headStyle:string,
  howToBuyDetailComponentBannerImage:{
    altText:string,
    imagemobile:{
      url:string
    },
    imagepc:{
      url:string
    },

  }
  howToBuyDetailComponentBannerTitle:string,
  howToBuyDetailComponentScrollContent:string,
  howToBuyDetailComponentStoreAddress:string,
  howToBuyDetailComponentStoreBusinessHours:string,
  howToBuyDetailComponentStoreName:string,
  howToBuyDetailComponentStorePhone:string,
}

interface propsContent{
  getPageStore:Function,
  updatePageStore:Function,
  changeNavStatus:Function,
  scrollToPage:Function,

  data:{
    entry:entryContent,
    name:string,
    type:string,
  }
}



function GlobalCampaignsComponent(props: propsContent) {
  console.log(props)
  const headStyle = props.data.entry.headStyle;
  const globalCampaigns = props.data.entry;
  const subTitle: string = globalCampaigns.howToBuyDetailComponentScrollContent;
  const title: string = globalCampaigns.howToBuyDetailComponentBannerTitle;
  const address:string = globalCampaigns.howToBuyDetailComponentStoreAddress;
  const time:string = globalCampaigns.howToBuyDetailComponentStoreBusinessHours;
  const phone:string = globalCampaigns.howToBuyDetailComponentStorePhone;
  const banner:object = globalCampaigns.howToBuyDetailComponentBannerImage;

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
        pImg={banner.imagepc.url}
        mImg={banner.imagemobile.url}
        alt={banner.altText}
        layout="fill"
        objectFit="cover"
        quality={100}
      ></BaseImage>
      <div className="absolute z-10 bottom-0 h-[60vh] w-full bg-gradient-to-b from-[transparent] to-[#000] "></div>
      {/*${isCurrentPage ? 'translate-y-0 opacity-1' : 'translate-y-[-70%] opacity-0'}*/}
      <div className={`absolute z-10 bottom-[148px] left-1/2 w-full  translate-x-[-50%] mobile:bottom-[106px] translate-y-0 opacity-1 `}>
        {subTitle != "" ? (
          <div className="font-AlbertusNova-Regular font-normal text-center text-22px pb-42px text-[#fff] mobile:text-14px mobile:pb-25px pad:text-15px uppercase">
            {subTitle}
          </div>
        ) : null}

        {title != "" ? (
          <div className="font-AlbertusNova-Regular font-normal text-center text-[#fff] text-40px pad:text-28px mobile:text-24px uppercase">
            {title}
          </div>
        ) : null}


        {
          (address&&phone&&time)&&<div className={`pt-28px relative z-30 pad:pt-20px justify-center  mx-auto text-white  mobile:flex-wrap mobile:justify-center mobile:w-full mobile:text-center flex `}>
            <div className="font-Grotesque-Regular font-normal text-21px pad:text-15px mobile:w-full mobile:text-12px mobile:pb-15px whitespace-nowrap mr-66px">
              <span className="w-18px h-24px mobile:w-15px mobile:h-15px pad:w-12px pad:h-20px inline-block align-middle bg-no-repeat bg-[url('/assets/howToBuyDetail/address.png')] bg-contain"></span>
              <span className="inline-block align-middle pl-17px pad:pl-12px mobile:pl-9px">{address}</span>
            </div>
            <div className="font-Grotesque-Regular font-normal text-21px pad:text-15px mobile:text-12px whitespace-nowrap mr-66px">
              <span className="w-20px h-20px mobile:w-15px mobile:h-15px pad:w-14px pad:h-14px inline-block align-middle bg-no-repeat bg-[url('/assets/howToBuyDetail/time.png')] bg-contain"></span>
              <span className="inline-block align-middle pl-17px pad:pl-12px mobile:pl-9px">{time}</span>
            </div>
            <div className="font-Grotesque-Regular font-normal text-21px pad:text-15px mobile:text-12px mobile:pl-25px whitespace-nowrap">
              <span className="w-20px h-18px mobile:w-15px mobile:h-15px pad:w-14px pad:h-12px inline-block align-middle bg-no-repeat bg-[url('/assets/howToBuyDetail/phone.png')] bg-contain"></span>
              <span className="inline-block align-middle pl-17px pad:pl-12px mobile:pl-9px">{phone}</span>
            </div>
          </div>
        }

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

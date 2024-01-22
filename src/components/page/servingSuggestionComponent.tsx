"use client";

import React, { useEffect, useState, useCallback } from "react";
import BaseImage from "../base/image";
import eventbus from "@/utils/eventbus";

export interface entryContent {
  headStyle: string;
  servingSuggestionComponentTitle: string;
  productFamilyComponentProducts: productFamilyComponentProductsCollection;
}
interface product {
  id: number;
  productName: string;
  servingSuggestionContentText: string;
  servingSuggestionDescription: string;
  servingSuggestionLeftImage: {
    imagepc: {
      url: string;
    };
    imagemobile: {
      url: string;
    };
    altText: string;
  };
  servingSuggestionRightImage: {
    imagepc: {
      url: string;
    };
    imagemobile: {
      url: string;
    };
    altText: string;
  };
}
interface productFamilyComponentProductsCollection {
  items: Array<product>;
}
import { TrackingTypeContent } from "@/utils/analytics";
interface propsContent {
  getPageStore: Function;
  updatePageStore: Function;
  changeNavStatus: Function;
  scrollToPage: Function;
  TrackingType: TrackingTypeContent;
  currentSlug: string;
  data: {
    entry: entryContent;
    name: string;
    type: string;
  };
}

function ServingSuggestionComponent(props: propsContent) {
  console.log(props);
  const headStyle = props.data.entry.headStyle;
  const title = props.data.entry.servingSuggestionComponentTitle;
  const [data, setData] = useState<product>(
    props.data.entry.productFamilyComponentProducts.items[0]
  );

  eventbus.on("selectProduct", (value: number) => {
    setData(
      props.data.entry.productFamilyComponentProducts.items.filter(
        (item) => item.id === value
      )[0]
    );
  });

  return (
    <section
      id="ServingSuggestion"
      data-anchor={2}
      className="relative overflow-hidden bg-[#E6E7E8] select-none"
    >
      <input type="hidden" value={headStyle} data-style="headStyle" />
      <input
        type="hidden"
        value={props.TrackingType.scroll50}
        data-slug={props.currentSlug}
      />
      <div className="flex h-screen min-h-[950px]  flex-col justify-center mobile:justify-start">
        <div className="font-AlbertusNova-Regular text-center uppercase text-33px pad:text-27px mobile:text-20px mobile:pt-80px">
          {title}
        </div>
        <div className="font-Grotesque-Regular text-center text-[#696969] mt-20px mb-10px pad:mb-4px text-20px pad:text-16px mobile:text-14px mobile:mt-20px mobile:px-50px">
          {data.servingSuggestionContentText}
        </div>
        <div className="flex justify-between mx-auto mt-20px w-[1250px] pad:w-1200px pad:mt-[2%] mobile:w-full mobile:flex-col mobile:px-0">
          <div className="relative w-615px h-524px pad:w-550px pad:h-524px mobile:w-full mobile:h-265px mobile:mt-35px">
            <div className="relative w-full h-412px pad:h-360px mobile:w-full mobile:h-200px">
              <BaseImage
                mImg={data.servingSuggestionLeftImage.imagemobile.url}
                pImg={data.servingSuggestionLeftImage.imagepc.url}
                alt={data.servingSuggestionLeftImage.altText}
                layout="fill"
                objectFit="cover"
                quality={100}
              ></BaseImage>
            </div>
            <div className="font-Grotesque-Regular text-20px text-[#696969] mt-20px pad:text-16px mobile:text-14px mobile:text-center mobile:px-25px mobile:mt-30px">
              {data.servingSuggestionDescription}
            </div>
          </div>
          <div className="relative w-593px h-524px pad:w-593px pad:h-524px mobile:w-full mobile:mt-20px">
            <div className="relative w-full h-524px pad:h-418px mobile:w-full mobile:h-[100vw]">
              <BaseImage
                mImg={data.servingSuggestionRightImage.imagemobile.url}
                pImg={data.servingSuggestionRightImage.imagepc.url}
                alt={data.servingSuggestionRightImage.altText}
                layout="fill"
                objectFit="cover"
                quality={100}
              ></BaseImage>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full absolute bottom-0 z-10 mobile:h-110px mobile:bg-gradient-to-t mobile:from-[rgba(0,0,0)] mobile:to-[rgba(0,0,0,0.1)]"></div>
    </section>
  );
}

export default ServingSuggestionComponent;

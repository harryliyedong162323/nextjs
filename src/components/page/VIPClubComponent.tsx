"use client";

import React, { useEffect, useState, useCallback } from "react";

import BaseImage from "@/components/base/image";
import BaseButton from "../base/button";

export interface entryContent {
  headStyle: string;
  joinUsLeftContent: string;
  joinUsLeftCtaAImage: {
    altText: string;
    imagemobile: {
      url: string;
    };
    imagepc: {
      url: string;
    };
  };
  joinUsLeftCtaImage: {
    altText: string;
    imagemobile: {
      url: string;
    };
    imagepc: {
      url: string;
    };
  };

  joinUsMiddleContent: string;
  joinUsMiddleCtaAImage: {
    altText: string;
    imagemobile: {
      url: string;
    };
    imagepc: {
      url: string;
    };
  };

  joinUsMiddleCtaImage: {
    altText: string;
    imagemobile: {
      url: string;
    };
    imagepc: {
      url: string;
    };
  };
  vipClubComponentJoinUsTitle: string;
  vipClubComponentLeftImage: {
    altText: string;
    imagemobile: {
      url: string;
    };
    imagepc: {
      url: string;
    };
  };

  joinUsRightContent: string;

  joinUsRightCtaAImage: {
    altText: string;
    imagemobile: {
      url: string;
    };
    imagepc: {
      url: string;
    };
  };
  joinUsRightCtaImage: {
    altText: string;
    imagemobile: {
      url: string;
    };
    imagepc: {
      url: string;
    };
  };

  vipClubComponentMiddleImage: {
    altText: string;
    imagemobile: {
      url: string;
    };
    imagepc: {
      url: string;
    };
  };
  vipClubComponentRightImage: {
    altText: string;
    imagemobile: {
      url: string;
    };
    imagepc: {
      url: string;
    };
  };
}

export interface propsContent {
  getPageStore: Function;
  updatePageStore: Function;
  changeNavStatus: Function;
  scrollToPage: Function;

  data: {
    entry: entryContent;
    name: string;
    type: string;
  };
}

function VIPClubComponent(props: propsContent) {
  // console.log(props)
  const headStyle = props.data.entry.headStyle;

  const VIPClubData = props.data.entry;
  const str = VIPClubData.vipClubComponentJoinUsTitle;
  const title = str.split(",");
  useEffect(() => {}, []);

  return (
    <section className="relative h-screen bg-cover bg-[url('/assets/VIPClub/bg.png')] bg-black overflow-hidden select-none">
      <input type="hidden" value={headStyle} data-style="headStyle" />
      <div className="relative container mx-auto">
        <div className="pt-154px uppercase font-AlbertusNova-Regular pb-107px paid:pb-76px font-normal text-33px text-center mx-auto text-white  pad:pt-110px pad:text-23px mobile:text-20px mobile:leading-[30px] mobile:pt-90px mobile:w-325px mobile:mx-auto ">
          <p> {title[0] + ","}</p>
          <p> {title[1]}</p>
        </div>

        <div className="grid grid-cols-3 place-items-center mobile:grid-rows-3 mobile:grid-cols-none">
          <div className="self-center">
            <div className="w-323px h-285px relative pad:w-302px pad:h-275px mobile:w-295px mobile:h-109px mobile:mb-46px">
              <BaseButton action="Homepage" category="Joinus" categorySub="Instgram">
                <BaseImage
                    mImg={VIPClubData.vipClubComponentLeftImage.imagemobile.url}
                    pImg={VIPClubData.vipClubComponentLeftImage.imagepc.url}
                    alt={VIPClubData.vipClubComponentLeftImage.altText}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                ></BaseImage>
              </BaseButton>
            </div>
            <div className="hover:bg-[url('/assets/VIPClub/CTA-A.png')] cursor-pointer hover:text-black bg-[url('/assets/VIPClub/CTA.png')]  mt-20px mx-auto w-150px h-36px text-center leading-[36px] text-white text-12px uppercase font-AlbertusNova-Regular font-normal pad:w-107px pad:h-25px pad:leading-[25px] pad:text-8px pad:mt-34px mobile:hidden">
              explore
            </div>
          </div>

          <div className="self-center">
            <div className="w-323px h-285px relative pad:w-302px pad:h-275px mobile:w-295px mobile:h-109px mobile:mb-46px">
              <BaseButton action="Homepage" category="Joinus" categorySub="facebook">
                <BaseImage
                    mImg={VIPClubData.vipClubComponentMiddleImage.imagemobile.url}
                    pImg={VIPClubData.vipClubComponentMiddleImage.imagepc.url}
                    alt={VIPClubData.vipClubComponentMiddleImage.altText}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                ></BaseImage>
              </BaseButton>

            </div>
            <div className="hover:bg-[url('/assets/VIPClub/CTA-A.png')] cursor-pointer hover:text-black bg-[url('/assets/VIPClub/CTA.png')]  mt-20px mx-auto w-150px h-36px text-center leading-[36px] text-white text-12px uppercase font-AlbertusNova-Regular font-normal pad:w-107px pad:h-25px pad:leading-[25px] pad:text-8px pad:mt-34px mobile:hidden">
              explore
            </div>
          </div>

          <div className="self-center">
            <div className="w-323px h-285px relative  pad:w-302px pad:h-275px mobile:w-295px mobile:h-109px">
              <BaseButton action="Homepage" category="Joinus" categorySub="YouTube">
                <BaseImage
                    mImg={VIPClubData.vipClubComponentRightImage.imagemobile.url}
                    pImg={VIPClubData.vipClubComponentRightImage.imagepc.url}
                    alt={VIPClubData.vipClubComponentRightImage.altText}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                ></BaseImage>
              </BaseButton>

            </div>
            <div className="hover:bg-[url('/assets/VIPClub/CTA-A.png')] cursor-pointer hover:text-black bg-[url('/assets/VIPClub/CTA.png')]  mt-20px mx-auto w-150px h-36px text-center leading-[36px] text-white text-12px uppercase font-AlbertusNova-Regular font-normal pad:w-107px pad:h-25px pad:leading-[25px] pad:text-8px pad:mt-34px mobile:hidden">
              explore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VIPClubComponent;

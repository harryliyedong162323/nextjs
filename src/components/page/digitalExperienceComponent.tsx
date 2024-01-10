"use client";

import React, { useEffect, useState } from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";

interface entryContent {
  headStyle: string;
  digitalExperienceComponentDigitalMiddleImage: {
    altText: string;
    imagemobile: {
      url: string;
    };
    imagepc: {
      url: string;
    };
  };
  digitalExperienceComponentDigitalRightImage: {
    altText: string;
    imagemobile: {
      url: string;
    };
    imagepc: {
      url: string;
    };
  };
  digitalExperienceComponentDigitalLeftImage: {
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

function DigitalExperienceComponent(props: propsContent) {
  // console.log(props)
  const headStyle = props.data.entry.headStyle;
  const digitalExperienceData = props.data.entry;
  // const block1Image = props.data.entry.fields.block1Image.sys.fields;

  // useEffect(() => {

  // }, []);
  // console.log(props)
  return (
    <section
      id="DigitalExperience"
      data-anchor={2}
      className="overflow-hidden h-screen bg-[url('/assets/digitalExperience/bg.png')] bg-cover bg-repeat  select-none"
    >
      <input type="hidden" value={headStyle} />
      <div className="relative container mx-auto">
        <div className="text-33px font-normal font-AlbertusNova-Regular text-center pt-84px pb-200px text-white mobile:pb-50px mobile:pt-50px mobile:text-20px ">
          DIGITAL EXPERIENCE
        </div>

        <div className="grid grid-cols-3 place-items-center mobile:grid-rows-2 mobile:grid-cols-none">
          <div className="self-center">
            <div className="w-155px h-32px pad:w-110px pad:h-22px relative  mobile:w-167px mobile:h-204px">
              <BaseImage
                mImg={
                  digitalExperienceData
                    .digitalExperienceComponentDigitalLeftImage.imagemobile.url
                }
                pImg={
                  digitalExperienceData
                    .digitalExperienceComponentDigitalLeftImage.imagepc.url
                }
                alt={
                  digitalExperienceData
                    .digitalExperienceComponentDigitalLeftImage.altText
                }
                layout="fill"
                objectFit="contain"
                quality={100}
              ></BaseImage>
            </div>
            <div className="hover:bg-[url('/assets/VIPClub/CTA-A.png')] cursor-pointer hover:text-black bg-[url('/assets/VIPClub/CTA.png')] bg-[length:100%_100%] mt-41px mx-auto w-150px h-36px text-center leading-[36px] text-white text-12px uppercase font-AlbertusNova-Regular font-normal pad:w-107px pad:h-25px pad:leading-[25px] pad:text-8px pad:mt-28px mobile:hidden">
              explore
            </div>
          </div>
          <div className=" relative self-center  text-center">
            <div
              className={`w-137px h-137px relative mx-auto pad:w-97px pad:h-97px mobile:w-125px mobile:h-89px`}
            >
              <BaseImage
                mImg={
                  digitalExperienceData
                    .digitalExperienceComponentDigitalMiddleImage.imagemobile
                    .url
                }
                pImg={
                  digitalExperienceData
                    .digitalExperienceComponentDigitalMiddleImage.imagepc.url
                }
                alt={
                  digitalExperienceData
                    .digitalExperienceComponentDigitalMiddleImage.altText
                }
                layout="fill"
                objectFit="contain"
                quality={100}
              ></BaseImage>
            </div>
            <div className=" mt-32px mx-auto w-278px  text-white text-17px uppercase text-center font-AlbertusNova-Regular font-normal pad:w-231px pad:text-12px pad:mt-22px  mobile:hidden">
              Scan to follow WILDMOOR
            </div>
          </div>
          <div className="self-center">
            <div className="w-218px h-32px pad:w-110px pad:h-22px relative  mobile:w-125px mobile:h-89px">
              <BaseImage
                mImg={
                  digitalExperienceData
                    .digitalExperienceComponentDigitalRightImage.imagemobile.url
                }
                pImg={
                  digitalExperienceData
                    .digitalExperienceComponentDigitalRightImage.imagepc.url
                }
                alt={
                  digitalExperienceData
                    .digitalExperienceComponentDigitalRightImage.altText
                }
                layout="fill"
                objectFit="contain"
                quality={100}
              ></BaseImage>
            </div>
            <div className="hover:bg-[url('/assets/VIPClub/CTA-A.png')] cursor-pointer hover:text-black bg-[url('/assets/VIPClub/CTA.png')] bg-[length:100%_100%] mt-41px mx-auto w-150px h-36px text-center leading-[36px] text-white text-12px uppercase font-AlbertusNova-Regular font-normal pad:w-107px pad:h-25px pad:leading-[25px] pad:text-8px pad:mt-28px mobile:hidden">
              explore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DigitalExperienceComponent;

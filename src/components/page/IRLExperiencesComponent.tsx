"use client";

import React, { useEffect, useState } from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

interface propsContent {
  getPageStore: Function;
  updatePageStore: Function;
  changeNavStatus: Function;
  scrollToPage: Function;
  stores: any;
  data: {
    entry: any;
    name: string;
    type: string;
  };
}

interface locationInfoStore {
  sys: {
    id: string;
  };
  howToBuyDescription: string;
  howToBuyDetailComponentBannerImage: {
    altText: string;
    imagemobile: {
      url: string;
    };
    imagepc: {
      url: string;
    };
  };
  howToBuyDetailComponentRegion: {
    name: string;
    regionId: number;
  };
  howToBuyDetailComponentStoreName: string;
  howToBuyIrlImage: {
    altText: string;
    imagemobile: {
      url: string;
    };
    imagepc: {
      url: string;
    };
  };
  howToBuyIrlSort: number;
  howToBuyJumpUrl: string;
  showInHowToBuyIrl: boolean;
}

function IRLExperiencesComponent(props: any) {
  const getPageStore = props.getPageStore;
  const stores = props.data.entry.stores;
  const headStyle = props.data.entry.headStyle;
  // const block1Image = props.data.entry.fields.block1Image.sys.fields;
  const [currentStore, setCurrentStore] = useState<any>([]);

  const [isCurrentPage, setIsCurrentPage] = useState<boolean>(false);
  const [isFullPage] = useState<boolean>(props.data.entry.isFullPage || false);
  useEffect(() => {
    if (isFullPage) {
      if (props.data.entry.currentPageNumber === props.data.entry.pageNumber) {
        setIsCurrentPage(true);
        console.log(getPageStore("IRLExperiencesComponent"));

        setCurrentStore(
          filterStore(
            getPageStore("IRLExperiencesComponent").data?.regionId || 0
          )
        );
      } else {
        setIsCurrentPage(false);
      }
    }
  }, [isFullPage, props]);

  const filterStore = (id: number) => {
    return stores.filter((item: any) => {
      if (
        item.howToBuyDetailComponentRegion.regionId == id &&
        (item.howToBuyIrlSort == 1 || item.howToBuyIrlSort == 2)
      ) {
        return item;
      }
    });
  };

  return (
    <section
      id="IRLExperiences"
      data-anchor={props.data.entry.pageNumber}
      className="overflow-hidden h-screen container mx-auto pb-164px mobile:pb-67px select-none"
    >
      <input type="hidden" value={headStyle} />
      <Swiper
        modules={[FreeMode]}
        direction="vertical"
        nested={true}
        slidesPerView="auto"
      >
        <SwiperSlide>
          <div className="relative">
            <div className="text-40px font-normal font-AlbertusNova-Regular text-center pt-55px pb-54px mobile:text-24px mobile:pt-20px mobile:pb-20px">
              IRL Experiences
            </div>

            {currentStore.length > 0 && (
              <div className="grid grid-cols-2 justify-center gap-[41px] pad:gap-[29px] items-center mobile:grid-rows-2 mobile:grid-cols-none">
                {currentStore[0] && (
                  <div className="pl-21px mobile:pl-0 mobile:w-325px mobile:mx-auto">
                    <div className="relative h-405px pad:h-289px  mobile:h-217px  mobile:w-full">
                      <BaseImage
                        mImg={currentStore[0].howToBuyIrlImage.imagemobile.url}
                        pImg={currentStore[0].howToBuyIrlImage.imagepc.url}
                        alt={currentStore[0].howToBuyIrlImage.altText}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                      ></BaseImage>
                    </div>
                    <div className="pt-43px mobile:pt-15px">
                      <div className="pb-25px pad:pb-17px font-medium text-26px pad:text-18px font-AlbertusNova-Regular mobile:text-16px mobile:pb-15px">
                        {currentStore[0].howToBuyDetailComponentStoreName}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="w-full  text-13px pad:text-9px font-Grotesque-Regular font-normal  mobile:text-11px ">
                          {currentStore[0].howToBuyDescription}
                        </div>
                      </div>
                      <div className="pt-31px pad:pt-22px">
                        <BaseLink
                          link={`/howToBuyDetail?id=${currentStore[0].sys.id}`}
                        >
                          <div className="w-30px h-30px bg-contain bg-[url('/assets/more.png')] cursor-pointer mobile:w-24px mobile:h-24px"></div>
                        </BaseLink>
                      </div>
                    </div>
                  </div>
                )}

                {currentStore[1] && (
                  <div className="pl-21px mobile:pl-0 mobile:w-325px mobile:mx-auto">
                    <div className="relative h-405px pad:h-289px mobile:h-217px  mobile:w-full">
                      <BaseImage
                        mImg={currentStore[1].howToBuyIrlImage.imagemobile.url}
                        pImg={currentStore[1].howToBuyIrlImage.imagepc.url}
                        alt={currentStore[1].howToBuyIrlImage.altText}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                      ></BaseImage>
                    </div>
                    <div className="pt-43px mobile:pt-15px">
                      <div className="pb-25px pad:pb-17px font-medium text-26px pad:text-18px font-AlbertusNova-Regular mobile:text-16px mobile:pb-15px">
                        {currentStore[1].howToBuyDetailComponentStoreName}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-13px pad:text-9px  font-Grotesque-Regular font-normal  mobile:text-11px ">
                          {currentStore[1].howToBuyDescription}
                        </div>
                      </div>
                      <div className="pt-31px pad:pt-22px">
                        <BaseLink
                          link={`/howToBuyDetail?id=${currentStore[1].sys.id}`}
                        >
                          <div className="w-30px h-30px bg-contain bg-[url('/assets/more.png')] cursor-pointer mobile:w-24px mobile:h-24px"></div>
                        </BaseLink>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default IRLExperiencesComponent;

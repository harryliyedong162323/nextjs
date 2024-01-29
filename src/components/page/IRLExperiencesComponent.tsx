"use client";

import React, { useEffect, useState } from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
import { Swiper, SwiperSlide } from "swiper/react";
import eventbus from "@/utils/eventbus";
import "swiper/css";
import "swiper/css/free-mode";

export interface propsContent {
  getPageStore: Function;
  updatePageStore: Function;
  changeNavStatus: Function;
  scrollToPage: Function;
  // stores?: Array<locationInfoStore>;
  data: {
    entry: entryContent;
    name: string;
    type: string;
  };
}

export interface entryContent {
  storeList: Array<locationInfoStore>;
  pageNumber: number;
  isFullPage: boolean;
  headStyle: string;
  currentPageNumber: number;
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
interface SwiperContent {
  slideNext(): void;
  slidePrev(): void;
  slideTo(index: number, speed?: number): void;
  update(): void;
  destroy(deleteInstance?: boolean, cleanStyles?: boolean): void;
  // 其他 Swiper 相关的属性和方法
}
function IRLExperiencesComponent(props: propsContent) {
  // const getPageStore = props.getPageStore;
  const [regionId, setRegionId] = useState(0);
  useEffect(() => {
    const handleRegionId = (id: number) => {
      setRegionId(id);
    };

    eventbus.on("regionId", handleRegionId);

    return () => {
      eventbus.off("regionId", handleRegionId);
    };
  }, []);

  useEffect(() => {
    console.log(regionId);
    setCurrentStore(filterStore(regionId));
  }, [regionId]);

  const stores = props.data.entry.storeList;
  const headStyle = props.data.entry.headStyle;
  // const block1Image = props.data.entry.fields.block1Image.sys.fields;
  const [currentStore, setCurrentStore] = useState<Array<locationInfoStore>>(
    []
  );

  const [isCurrentPage, setIsCurrentPage] = useState<boolean>(false);
  const [isFullPage] = useState<boolean>(false);
  const [pageSwiper, setPageSwiper] = useState<SwiperContent | null>(null);
  // const [swiperHeight, setSwiperHeight] = useState(window.innerHeight);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setSwiperHeight(window.innerHeight);
  //   }
  // }, []);

  // useEffect(() => {
  //   const resizeHandler = () => {
  //     setSwiperHeight(window.innerHeight);
  //     pageSwiper && pageSwiper.update();
  //   };

  //   window.addEventListener("resize", resizeHandler);

  //   return () => {
  //     window.removeEventListener("resize", resizeHandler);
  //   };
  // }, [pageSwiper]);

  useEffect(() => {
    if (!isFullPage) {
      if (props.data.entry.currentPageNumber === props.data.entry.pageNumber) {
        setIsCurrentPage(true);

        setCurrentStore(filterStore(regionId));

        // console.log(
        //   filterStore(
        //     getPageStore("IRLExperiencesComponent").data?.regionId || 0
        //   )
        // );
      } else {
        setIsCurrentPage(false);
      }
    }
  }, [isFullPage, props]);

  const filterStore = (id: number) => {
    return stores.filter((item: locationInfoStore) => {
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
      className="overflow-hidden  w-[1534px]  mx-auto pb-164px mobile:w-full mobile:pb-0 select-none"
    >
      <input type="hidden" value={headStyle} data-style="headStyle" />
      <Swiper
        direction="vertical"
        nested={true}
        slidesPerView="auto"
        // height={swiperHeight}
        resistanceRatio={0}
        onSwiper={(e) => {
          setPageSwiper(e);
        }}
      >
        <SwiperSlide>
          <div className="relative">
            <div className="text-40px font-normal font-AlbertusNova-Regular text-center pt-55px pb-54px mobile:text-24px mobile:pt-20px mobile:pb-20px">
              IRL Experiences
            </div>

            {currentStore.length > 0 && (
              <div className="grid grid-cols-2 justify-center gap-[41px]  items-center mobile:grid-rows-2 mobile:grid-cols-none">
                {currentStore[0] && (
                  <div className="pl-21px mobile:pl-0 mobile:w-325px mobile:mx-auto">
                    <BaseLink
                      link={`/howToBuyDetail/${currentStore[0].sys.id}`}
                    >
                      <div className="relative h-[405px]  cursor-pointer  mobile:h-217px  mobile:w-full">
                        <BaseImage
                          mImg={
                            currentStore[0].howToBuyIrlImage.imagemobile.url
                          }
                          pImg={currentStore[0].howToBuyIrlImage.imagepc.url}
                          alt={currentStore[0].howToBuyIrlImage.altText}
                          layout="fill"
                          objectFit="cover"
                          quality={100}
                        ></BaseImage>
                      </div>
                    </BaseLink>
                    <div className="pt-43px ">
                      <div className="pb-25px  font-medium text-26px  font-AlbertusNova-Regular">
                        {currentStore[0].howToBuyDetailComponentStoreName}
                      </div>
                      <div className="flex justify-between items-center mobile:mb-10px">
                        <div className="w-full  text-13px  font-Grotesque-Regular font-normal  mobile:text-11px ">
                          {currentStore[0].howToBuyDescription}
                        </div>
                      </div>
                      <div className="pt-31px  mobile:mb-25px">
                        <BaseLink
                          link={`/howToBuyDetail/${currentStore[0].sys.id}`}
                        >
                          <div className="w-40px h-40px bg-contain bg-[url('/assets/more.png')] cursor-pointer mobile:w-24px mobile:h-24px"></div>
                        </BaseLink>
                      </div>
                    </div>
                  </div>
                )}

                {currentStore[1] && (
                  <div className="pl-21px mobile:pl-0 mobile:w-325px mobile:mx-auto">
                    <BaseLink
                      link={`/howToBuyDetail/${currentStore[1].sys.id}`}
                    >
                      <div className="relative h-[405px] cursor-pointer mobile:h-217px  mobile:w-full">
                        <BaseImage
                          mImg={
                            currentStore[1].howToBuyIrlImage.imagemobile.url
                          }
                          pImg={currentStore[1].howToBuyIrlImage.imagepc.url}
                          alt={currentStore[1].howToBuyIrlImage.altText}
                          layout="fill"
                          objectFit="cover"
                          quality={100}
                        ></BaseImage>
                      </div>
                    </BaseLink>
                    <div className="pt-43px ">
                      <div className="pb-25px  font-medium text-26px  font-AlbertusNova-Regular mobile:text-16px mobile:pb-15px">
                        {currentStore[1].howToBuyDetailComponentStoreName}
                      </div>
                      <div className="flex justify-between items-center mobile:mb-10px">
                        <div className="text-13px   font-Grotesque-Regular font-normal  mobile:text-11px ">
                          {currentStore[1].howToBuyDescription}
                        </div>
                      </div>
                      <div className="pt-31px  mobile:mb-35px">
                        <BaseLink
                          link={`/howToBuyDetail/${currentStore[1].sys.id}`}
                        >
                          <div className="w-40px h-40px bg-contain bg-[url('/assets/more.png')] cursor-pointer mobile:w-24px mobile:h-24px"></div>
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

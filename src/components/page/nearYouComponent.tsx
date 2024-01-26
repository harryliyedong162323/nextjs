"use client";

import React, { useCallback, useEffect, useState, useRef } from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Mousewheel, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
interface SwiperContent {
  updateSlides(): void;
  slideNext(): void;
  slidePrev(): void;
  slideTo(index: number, speed?: number): void;
  update(): void;
  destroy(deleteInstance?: boolean, cleanStyles?: boolean): void;
  // 其他 Swiper 相关的属性和方法
}
export interface entryContent {
  headStyle: string;
  nearYouContentTitle: string;
  nearYouComponentStoresCollection: nearYouComponentStoresCollectionContent;
}
interface nearYouComponentStoresCollectionContent {
  items: Array<campaignsContent>;
}
import { TrackingTypeContent } from "@/utils/analytics";
import BaseButton from "../base/button";
import { useParams } from "next/navigation";
export interface propsContent {
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

interface campaignsChildren {
  id: number;
  imagesCollection: {
    items: Array<campaignsImg>;
  };
}

interface campaignsImg {
  altText: string;
  imagemobile: {
    url: string;
  };
  imagepc: {
    url: string;
  };
}

interface campaignsContent {
  nearYouId: number;
  howToBuyDetailComponentStoreName: string;
  howToBuyDetailComponentStoreAddress: string;
  nearYouActive: boolean;
  nearYouDes: string;
  nearYouComponentNearYouCarouselImageCollection: {
    items: Array<campaignsChildren>;
  };
}

//
// const campaigns = [
//     {
//         id:0,
//         title:'NAME of the store',
//         des:'Bring the drinking occasion to life in a way Bring the drinking occasion...',
//         active:false,
//         children:[
//             {
//                 id:0,
//                 mImg:require("../../../public/assets/nearYou/kv-1.png"),
//                 pImg:require("../../../public/assets/nearYou/kv-1.png"),
//             },
//             {
//                 id:1,
//                 mImg:require("../../../public/assets/nearYou/kv-2.png"),
//                 pImg:require("../../../public/assets/nearYou/kv-2.png"),
//             },
//             {
//                 id:2,
//                 mImg:require("../../../public/assets/nearYou/kv-3.png"),
//                 pImg:require("../../../public/assets/nearYou/kv-3.png"),
//             }
//         ]
//     },
//     {
//         id:1,
//         title:'NAME of the store',
//         des:'Bring the drinking occasion to life in a way Bring the drinking occasion...',
//         active:false,
//         children:[
//             {
//                 id:0,
//                 mImg:require("../../../public/assets/nearYou/kv-2.png"),
//                 pImg:require("../../../public/assets/nearYou/kv-2.png"),
//             },
//
//         ]
//     },
//     {
//         id:2,
//         title:'NAME of the store',
//         des:'Bring the drinking occasion to life in a way Bring the drinking occasion...',
//         active:false,
//         children:[
//             {
//                 id:0,
//                 mImg:require("../../../public/assets/nearYou/kv-3.png"),
//                 pImg:require("../../../public/assets/nearYou/kv-3.png"),
//             },
//
//         ]
//     },
//     {
//         id:3,
//         title:'NAME of the store',
//         des:'Bring the drinking occasion to life in a way Bring the drinking occasion...',
//         active:false,
//         children:[
//             {
//                 id:0,
//                 mImg:require("../../../public/assets/nearYou/kv-1.png"),
//                 pImg:require("../../../public/assets/nearYou/kv-1.png"),
//             },
//
//         ]
//     },
//     {
//         id:4,
//         title:'NAME of the store',
//         des:'Bring the drinking occasion to life in a way Bring the drinking occasion...',
//         active:false,
//         children:[
//             {
//                 id:0,
//                 mImg:require("../../../public/assets/nearYou/kv-2.png"),
//                 pImg:require("../../../public/assets/nearYou/kv-2.png"),
//             },
//
//         ]
//     },
//     {
//         id:5,
//         title:'NAME of the store',
//         des:'Bring the drinking occasion to life in a way Bring the drinking occasion...',
//         active:false,
//         children:[
//             {
//                 id:0,
//                 mImg:require("../../../public/assets/nearYou/kv-3.png"),
//                 pImg:require("../../../public/assets/nearYou/kv-3.png"),
//             },
//
//         ]
//     }
// ];

function NestedCarousel(props: any) {
  // Autoplay()
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      setCurrentIndex(index);
    },
    [emblaApi]
  );

  const onChangeScroll = useCallback(
    (emblaApi: { selectedScrollSnap: () => any }) => {
      setCurrentIndex(emblaApi?.selectedScrollSnap() || 0);
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi?.on("select", onChangeScroll);
  }, [emblaApi, onChangeScroll]);

  const activeFlag = props.activeFlag;

  const data = props.list;
  return (
    // ${
    //
    //   activeFlag == true && data.length != 1
    //     ? "pointer-events-auto mobile:pointer-events-auto"
    //     : "pointer-events-auto"
    // }
    <div className={` overflow-hidden relative h-full w-full`} ref={emblaRef}>
      <div className="flex h-full w-full">
        {data.map((item: campaignsChildren, index: number) => {
          return (
            <div
              key={item.id}
              className="relative flex-grow-0 flex-shrink-0 basis-full"
            >
              <BaseImage
                mImg={item.imagesCollection.items[0].imagemobile.url}
                pImg={item.imagesCollection.items[0].imagepc.url}
                alt={item.imagesCollection.items[0].altText}
                layout="fill"
                objectFit="cover"
                quality={100}
              ></BaseImage>
            </div>
          );
        })}
      </div>

      <div
        className={` absolute mt-30px left-41px bottom-41px w-full items-center justify-start mobile:bottom-50px  pad:bottom-29px pad:left-29px  ${
          activeFlag == true ? "flex mobile:hidden" : "hidden"
        }`}
      >
        {data.length == 1
          ? null
          : data.map((item: any, index: number) => {
              return (
                <div
                  key={item.id}
                  className={`h-4px mx-4px inline-block rounded-tr-10px rounded-bl-10px cursor-pointer pad:mx-3px pad:h-3px ${
                    currentIndex === index
                      ? "bg-[#fff] w-41px pad:w-29px"
                      : "bg-[#969797] w-16px pad:w-16px"
                  }`}
                  onClick={() => scrollTo(index)}
                ></div>
              );
            })}
      </div>
    </div>
  );
}

function MobileCarousel(props: any) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      setCurrentIndex(index);
    },
    [emblaApi]
  );

  const onChangeScroll = useCallback(
    (emblaApi: { selectedScrollSnap: () => any }) => {
      setCurrentIndex(emblaApi?.selectedScrollSnap() || 0);
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi?.on("select", onChangeScroll);
  }, [emblaApi, onChangeScroll]);

  const data = props.list;
  const children = data.nearYouComponentNearYouCarouselImageCollection.items;
  return (
    <div>
      {/*mobile:h-246px*/}
      <div
        className={`h-246px overflow-hidden relative  w-full mobile:h-143px`}
        ref={emblaRef}
      >
        <div className="flex h-full w-full">
          {children.map((item: campaignsChildren, index: number) => {
            return (
              // item.id
              <div
                key={item.id}
                className="relative flex-grow-0 flex-shrink-0 basis-full"
              >
                <BaseImage
                  mImg={item.imagesCollection.items[0].imagemobile.url}
                  pImg={item.imagesCollection.items[0].imagepc.url}
                  alt={item.imagesCollection.items[0].altText}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                ></BaseImage>
              </div>
            );
          })}
        </div>

        <div
          className={` mt-30px absolute z-30 bottom-25px  w-full items-center justify-center flex`}
        >
          {children.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className={`h-4px mx-4px mobile:mx-5px inline-block rounded-tr-10px rounded-bl-10px cursor-pointer mobile:h-2px pad:mx-3px pad:h-3px ${
                  currentIndex === index
                    ? "bg-[#fff] w-41px mobile:w-25px pad:w-29px"
                    : "bg-[#969797] w-16px mobile:w-10px pad:w-16px"
                }`}
                onClick={() => scrollTo(index)}
              ></div>
            );
          })}
        </div>
      </div>

      <div className="pt-43px pl-22px pr-25px mobile:pl-25px  mobile:mt-10px">
        <div className="select-none font-Grotesque-Medium font-medium text-18px pb-15px text-20px mobile:mb-5px ">
          {data.howToBuyDetailComponentStoreName}
        </div>
        <div
          className={`select-none font-Grotesque-Regular font-medium w-full  justify-between items-center flex  `}
        >
          <span className="w-[85%] truncate text-14px ">
            {data.howToBuyDetailComponentStoreAddress}
          </span>
          <span className="cursor-pointer bg-cover bg-[url('/assets/nearYou/more.png')] w-21px h-21px  mobile:w-21px mobile:h-21px"></span>
        </div>
      </div>
    </div>
  );
}

function NearYouComponent(props: propsContent) {
  const headStyle = props.data.entry.headStyle;
  const [swiper, setSwiper] = useState<SwiperContent | null>(null);
  const campaigns = props.data.entry.nearYouComponentStoresCollection.items;
  const title = props.data.entry.nearYouContentTitle;
  // watchDrag: true
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true, watchDrag: true },
    [Autoplay()]
  );
  const params = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);

  const [campaignData, setCampaignData] = useState(campaigns);
  const [campaignLoadFlag, setCampaignLoadFlag] = useState(false);

  const computedActiveDrop = (index: number) => {
    const updatedData: campaignsContent[] = campaignData.map((item: any) => {
      if (item.nearYouId === index) {
        return { ...item, nearYouActive: true };
      } else {
        return { ...item, nearYouActive: false };
      }
    });
    // console.log(updatedData)

    setCampaignData(updatedData);
    //
    setTimeout(() => {
      setCampaignLoadFlag(true);
    }, 3000);
  };

  // const onChangeScroll = useCallback(
  //   (emblaApi: { selectedScrollSnap: () => any }) => {
  //     // console.log(emblaApi?.selectedScrollSnap());
  //     setCurrentIndex(emblaApi?.selectedScrollSnap() || 0);
  //     setTimeout(() => {
  //       computedActiveDrop(emblaApi?.selectedScrollSnap() || 0);
  //     }, 500);
  //   },
  //   []
  // );

  // const scrollTo = useCallback(
  //   (index: number) => {
  //     emblaApi?.scrollTo(index);
  //     setCurrentIndex(index);
  //   },
  //   [emblaApi]
  // );

  const scrollNext = () => {
    if (!campaignLoadFlag) return false;
    // emblaApi?.scrollNext();
    swiper?.slideNext();
    setCampaignLoadFlag(false);
  };
  const scrollPrev = () => {
    if (!campaignLoadFlag) return false;
    // emblaApi?.scrollPrev();
    swiper?.slidePrev();
    setCampaignLoadFlag(false);
  };

  // useEffect(() => {
  //   if (!emblaApi) return;
  //   computedActiveDrop(0);
  //   emblaApi?.on("select", onChangeScroll);
  // }, [emblaApi, onChangeScroll]);

  useEffect(() => {
    computedActiveDrop(0);
  }, []);
  let str = title;
  let substr1 = str.substring(0, 14);
  let substr2 = str.substring(15);
  return (
    <section className="w-full h-screen overflow-hidden bg-while relative select-none  ">
      <input type="hidden" value={headStyle} data-style="headStyle" />
      <input
        type="hidden"
        value={props.TrackingType.scrollFull}
        data-slug={props.currentSlug}
      />

      <div className="pt-104px uppercase font-AlbertusNova-Regular font-normal text-33px text-center pad:text-23px mobile:hidden mobile:text-20px mobile:pt-77px">
        {substr1} {substr2}
      </div>
      <div className="hidden mobile:block mobile:w-full mobile:text-24px mobile:pt-77px mobile:uppercase mobile:font-AlbertusNova-Regular mobile:font-normal">
        <div className="text-center">{substr1}</div>
        <div className="text-center">{substr2}</div>
      </div>

      <div className="w-full pt-20px hidden mobile:block mobile:pt-20px">
        {<MobileCarousel list={campaignData[0]}></MobileCarousel>}
      </div>

      {/* <div className="absolute z-10 top-0 right-[0%] h-full w-[30%] bg-gradient-to-l from-[#f6f6f6f6] to-[transparent] mobile:hidden"></div> */}

      {/*spaceBetween={15}*/}
      {/*freeMode={true}*/}
      {/*modules={[FreeMode]}*/}
      <div className="relative z-20 pt-83px mobile:pl-25px ml-[10%] h-[700px] w-full mobile:ml-0 mobile:h-auto mobile:pt-25px">
        <Swiper
          speed={1500}
          loop={true}
          direction="horizontal"
          slidesPerView="auto"
          onBeforeInit={(e) => {
            setTimeout(() => {
              const slides = e.slides;
              slides.forEach((item) => {
                item.style.width = "auto";
              });
            }, 250);
          }}
          onSlideChange={(e) => {
            setCurrentIndex(e.realIndex);
            computedActiveDrop(e.realIndex);
            // setTimeout(() => {
            //     swiper?.updateSlides();
            // }, 200);
          }}
          onSwiper={(swiper) => {
            console.log(swiper);
            setSwiper(swiper);
            setTimeout(() => {
              swiper?.updateSlides();
            }, 200);
          }}
          className=" w-full overflow-hidden"
          nested={true}
        >
          {campaignData.map((item: any, index: number) => {
            return (
              <SwiperSlide
                className={` w-[406px!ignore] ml-48px -mr-20px mobile:ml-0 mobile:-mr-0px pad:290px mobile:w-192px`}
                key={item.nearYouId}
              >
                <div className={`mr-25px  h-auto  relative mobile:mr-25px`}>
                  {/*<div className={`float-left`}>*/}

                  <div
                    className={`transition-all delay-1000 ease-in-out duration-1000   relative 
                                            
                                             ${
                                               item.nearYouActive == true
                                                 ? "w-615px pad:w-439px mobile:w-192px"
                                                 : "w-406px pad:290px mobile:w-192px"
                                             }
                                            
                                          `}
                  >
                    {/*link="/howToBuyDetail"*/}
                    <BaseLink
                      link={`${params.locale}/howToBuyDetail/${item.sys.id}`}
                    >
                      <div
                        className={`relative transition-all delay-1000  cursor-pointer ease-in-out  ${
                          item.nearYouActive == true
                            ? "h-455px pad:h-325px mobile:h-166px"
                            : "h-406px pad:h-290px mobile:h-166px"
                        } duration-500 mb-40px pad:mb-28px `}
                      >
                        <NestedCarousel
                          list={
                            item.nearYouComponentNearYouCarouselImageCollection
                              .items
                          }
                          activeFlag={item.nearYouActive}
                        ></NestedCarousel>

                        {/*{*/}
                        {/*    <BaseButton*/}
                        {/*        action="Homepage"*/}
                        {/*        category="Nearyou"*/}
                        {/*        categorySub={item.howToBuyDetailComponentStoreName}*/}
                        {/*    >*/}
                        {/*        <NestedCarousel*/}
                        {/*            list={*/}
                        {/*                item*/}
                        {/*                    .nearYouComponentNearYouCarouselImageCollection*/}
                        {/*                    .items*/}
                        {/*            }*/}
                        {/*            activeFlag={item.nearYouActive}*/}
                        {/*        ></NestedCarousel>*/}
                        {/*    </BaseButton>*/}
                        {/*}*/}
                      </div>
                    </BaseLink>
                    {/*    ${*/}
                    {/*    item.nearYouActive == true*/}
                    {/*        ? "translate-x-[2.5vw]"*/}
                    {/*        : ""*/}
                    {/*}*/}
                    <div
                      className={`w-500px select-none font-Grotesque-Medium  font-medium text-18px pad:text-12px mobile:w-500px mobile:text-16px
                                            
                                           
                                            `}
                    >
                      {item.howToBuyDetailComponentStoreName}
                    </div>
                    <div
                      className={`select-none font-Grotesque-Regular font-medium w-full justify-between items-center pad:bottom-[-25px]  ${
                        item.nearYouActive == true
                          ? "flex mobile:hidden"
                          : "hidden"
                      }`}
                    >
                      {/*    ${*/}
                      {/*    item.nearYouActive == true*/}
                      {/*        ? "translate-x-[2.5vw]"*/}
                      {/*        : ""*/}
                      {/*}*/}
                      <span
                        className={`w-[70%] truncate pad:w-[50%]
                                                  
                                                 
                                                  `}
                      >
                        {item.nearYouDes} + &quot;54545&ldquo;
                      </span>
                      {/*link="/howToBuyDetail"*/}
                      <BaseLink
                        link={`${params.locale}/howToBuyDetail/${item.sys.id}`}
                      >
                        <BaseButton
                          action="Homepage"
                          category="Nearyou"
                          categorySub={item.howToBuyDetailComponentStoreName}
                        >
                          <div className="cursor-pointer bg-contain bg-[url('/assets/nearYou/more.png')] w-30px h-30px pad:w-21px pad:h-21px"></div>
                        </BaseButton>
                      </BaseLink>
                    </div>
                  </div>

                  {/*</div>*/}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="absolute z-10 top-0 right-[0%] h-full w-[30%] bg-gradient-to-l from-[#f6f6f6f6] to-[transparent] mobile:hidden"></div>
        <div className="absolute z-50 top-0 right-[0%] h-full w-[35%] bg-gradient-to-l from-[#f6f6f6f6] to-[transparent] mobile:from-[#ffffff94] mobile:block"></div>
      </div>

      {/*<div className="relative z-20 mobile:pl-25px h-full w-full">*/}
      {/*    <div*/}
      {/*        className="relative  overflow-hidden ml-[10%]  pt-80px pad:pt-57px pad:ml-[7%]  mobile:ml-[0] mobile:pt-50px mobile:ml-22px mobile:h-auto"*/}
      {/*        ref={emblaRef}*/}
      {/*    >*/}
      {/*        <div*/}

      {/*            className="flex text-dark-grey items-end pb-40px pad:pb-28px">*/}
      {/*            {campaignData.map((item: any, index: number) => {*/}
      {/*                return (*/}
      {/*                    <div*/}
      {/*                        key={item.nearYouId}*/}
      {/*                        className={` ml-25px h-auto pad:ml-17px relative mobile:ml-25px`}*/}
      {/*                    >*/}
      {/*                        /!*<div className={`float-left`}>*!/*/}
      {/*                        <div*/}
      {/*                            className={`transition-all ease-in-out origin-left duration-1000  relative ${*/}
      {/*                                item.nearYouActive == true*/}
      {/*                                    ? "w-615px pad:w-439px mobile:w-192px"*/}
      {/*                                    : "w-406px pad:290px mobile:w-192px"*/}
      {/*                            }`}*/}
      {/*                        >*/}
      {/*                            /!*link="/howToBuyDetail"*!/*/}
      {/*                            <BaseLink>*/}
      {/*                                <div*/}
      {/*                                    className={`relative transition-all  cursor-pointer ease-in-out  origin-left  duration-500 mb-40px pad:mb-28px ${*/}
      {/*                                        item.nearYouActive == true*/}
      {/*                                            ? "h-455px pad:h-325px mobile:h-166px"*/}
      {/*                                            : "h-406px pad:h-290px mobile:h-166px"*/}
      {/*                                    }`}*/}
      {/*                                >*/}
      {/*                                    <BaseImage*/}
      {/*                                        mImg={item.nearYouComponentNearYouCarouselImageCollection.items[0].imagesCollection.items[0].imagemobile.url}*/}
      {/*                                        pImg={item.nearYouComponentNearYouCarouselImageCollection.items[0].imagesCollection.items[0].imagepc.url}*/}
      {/*                                        alt={""}*/}
      {/*                                        layout="fill"*/}
      {/*                                        objectFit="cover"*/}
      {/*                                        quality={100}*/}
      {/*                                    ></BaseImage>*/}

      {/*                                    /!*{*!/*/}
      {/*                                    /!*    <BaseButton*!/*/}
      {/*                                    /!*        action="Homepage"*!/*/}
      {/*                                    /!*        category="Nearyou"*!/*/}
      {/*                                    /!*        categorySub={item.howToBuyDetailComponentStoreName}*!/*/}
      {/*                                    /!*    >*!/*/}
      {/*                                    /!*        <NestedCarousel*!/*/}
      {/*                                    /!*            list={*!/*/}
      {/*                                    /!*                item*!/*/}
      {/*                                    /!*                    .nearYouComponentNearYouCarouselImageCollection*!/*/}
      {/*                                    /!*                    .items*!/*/}
      {/*                                    /!*            }*!/*/}
      {/*                                    /!*            activeFlag={item.nearYouActive}*!/*/}
      {/*                                    /!*        ></NestedCarousel>*!/*/}
      {/*                                    /!*    </BaseButton>*!/*/}
      {/*                                    /!*}*!/*/}
      {/*                                </div>*/}
      {/*                            </BaseLink>*/}
      {/*                            <div className="w-500px select-none font-Grotesque-Medium font-medium text-18px pad:text-12px mobile:w-500px mobile:text-16px">*/}
      {/*                                {item.howToBuyDetailComponentStoreName}*/}
      {/*                            </div>*/}
      {/*                            <div*/}
      {/*                                className={`select-none font-Grotesque-Regular font-medium w-full absolute left-0 bottom-[-25px] z-20 justify-between items-center pad:bottom-[-25px]  ${*/}
      {/*                                    item.nearYouActive == true*/}
      {/*                                        ? "flex mobile:hidden"*/}
      {/*                                        : "hidden"*/}
      {/*                                }`}*/}
      {/*                            >*/}
      {/*      <span className="w-[70%] truncate pad:w-[50%] ">*/}
      {/*        {item.nearYouDes} + &quot;54545&ldquo;*/}
      {/*      </span>*/}
      {/*                                /!*link="/howToBuyDetail"*!/*/}
      {/*                                <BaseLink>*/}
      {/*                                    <BaseButton*/}
      {/*                                        action="Homepage"*/}
      {/*                                        category="Nearyou"*/}
      {/*                                        categorySub={item.howToBuyDetailComponentStoreName}*/}
      {/*                                    >*/}
      {/*                                        <div className="cursor-pointer bg-contain bg-[url('/assets/nearYou/more.png')] w-30px h-30px pad:w-21px pad:h-21px"></div>*/}
      {/*                                    </BaseButton>*/}
      {/*                                </BaseLink>*/}
      {/*                            </div>*/}
      {/*                        </div>*/}

      {/*                        /!*</div>*!/*/}
      {/*                    </div>*/}
      {/*                );*/}
      {/*            })}*/}
      {/*        </div>*/}
      {/*    </div>*/}

      {/*    <div className="absolute z-30 top-0 right-[0%] h-full w-[30%] bg-gradient-to-l from-[#f6f6f6f6] to-[transparent] mobile:from-[#ffffff94] mobile:block"></div>*/}
      {/*</div>*/}

      <div className="flex justify-end pr-10 relative z-30 mobile:pr-0 mobile:pt-25px">
        <div>
          {/*${currentIndex == 0 ? "bg-[url('/assets/nearYou/prev.png')]" : "bg-[url('/assets/nearYou/prev-active.png')]"}*/}
          <span
            className={`cursor-pointer bg-contain bg-[url('/assets/nearYou/prev-active.png')]  w-44px h-44px inline-block align-middle mr-7px pad:w-31px pad:h-31px pad:mr-5px mobile:w-26px mobile:h-26px`}
            onClick={() => {
              scrollPrev();
            }}
          ></span>
          {/*${currentIndex == campaignData.length-1 ? "bg-[url('/assets/nearYou/next.png')]" : "bg-[url('/assets/nearYou/next-active.png')]"}*/}
          <span
            className={`cursor-pointer bg-contain bg-[url('/assets/nearYou/next-active.png')]  w-44px h-44px inline-block align-middle pad:w-31px pad:h-31px mobile:w-26px mobile:h-26px`}
            onClick={() => {
              scrollNext();
            }}
          ></span>
        </div>
      </div>
    </section>
  );
}

export default NearYouComponent;

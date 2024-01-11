"use client";

import React, { useEffect, useState, useCallback } from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
import BaseVideo from "@/components/base/video";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface entryContent {
  isFullPage: boolean;
  currentPageNumber: number;
  pageNumber: number;
  headStyle: string;
  pageDetailComponentTitle: string;
  pageDetailCollection: {
    items: Array<Collection>;
  };
}

interface Collection {
  __typename: string;
  contentTitle?: string;
  title?: string;
  internalName?: string;
  imagesCollection?: {
    items: Array<{
      imagepc: {
        url: string;
      };
      imagemobile: {
        url: string;
      };
      altText: string;
    }>
  }
  contentText?: {
    json: {
      content: Array<{
        nodeType: string;
        content: Array<{
          nodeType: string;
          value: string;
        }>
      }>
    };
    links: any;
  };
  image?: {
    imagepc: {
      url: string;
    };
    imagemobile: {
      url: string;
    };
    altText: string;
  };
  video?: {
    video: {
      url: string;
    }
  }
}

interface propsContent {
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

function ActivityDetailComponent(props: propsContent) {
  console.log(props)
  const [data, setData] = useState<entryContent>(props.data.entry);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onChangeScroll = useCallback(
    (emblaApi: { selectedScrollSnap: () => any }) => {
      setCurrentIndex(emblaApi?.selectedScrollSnap() || 0);
    },
    []
  );

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      setCurrentIndex(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    emblaApi?.on("select", onChangeScroll);
  }, [emblaApi, onChangeScroll]);

  return (
    <div className="pl-33px pr-33px overflow-hidden mobile:pl-0 mobile:pr-0">
      <div className="text-22px font-normal text-center text-dark-grey pt-95px pb-42px font-AlbertusNova-Regular mobile:pt-22px mobile:pb-20px mobile:text-14px uppercase pad:pt-150px">
        the Wild Escape Journal
      </div>
      <div className="text-40px font-normal text-center w-623px mx-auto font-AlbertusNova-Regular pb-117px mobile:pl-45px mobile:pr-45px mobile:text-20px mobile:w-auto mobile:pb-40px uppercase">
        Bring the drinking occasion to life in a way
      </div>
      {
          data.pageDetailCollection.items.map((item:any, key:number) => {
            return <>
            {/* {item.__typename} */}
              { item.__typename === "DataLocalMarketDetailMultipleContent" && <>
              <div key={key} className="text-dark-grey pl-53px pr-53px pb-67px text-22px color-dark-grey font-normal leading-[2em] font-Grotesque-Regular mobile:text-14px mobile:pl-25px mobile:pr-25px mobile:pb-20px mobile:leading-[2em] mobile:flex mobile:flex-wrap">
                  { item.contentText?.json.content.map((paragraph: any, key2: number) => {
                    {
                      return paragraph.content.map((row:any, key3:number) => {
                        return <>
                          <p key={key3} className="mobile:order-2 mobile:pb-20px">
                          { row.value }
                          </p>
                         </>
                      })
                    }
                  })}
                </div>
              </>}
              { item.__typename === "DataLocalMarketDetailCarouselImage" && <>
                <div
                  className="relative overflow-hidden pb-33px mobile:pb-20px"
                  ref={emblaRef}
                >
                  <div className="flex">
                    {
                      item.imagesCollection?.items.map((image: any, key2:number) => {
                        return (
                          <div key={key2} className="flex-grow-0 flex-shrink-0 basis-full relative h-420px">
                            <BaseImage
                              mImg={image?.imagemobile?.url}
                              pImg={image?.imagepc?.url}
                              alt={image?.altText}
                              layout="fill"
                              objectFit="cover"
                              quality={100}
                            ></BaseImage>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className="absolute bottom-83px w-full flex items-center justify-center mobile:bottom-50px mobile:scale-50">
                    {item.imagesCollection?.items.map((item: any, index:number) => {
                      return (
                        <div
                          key={index}
                          className={`h-4px mx-4px inline-block rounded-tr-8px rounded-bl-8px cursor-pointer ${
                            currentIndex === index
                              ? "bg-white w-42px"
                              : "bg-gray-300 w-17px"
                          }`}
                          onClick={() => scrollTo(index)}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              </>}
              { item.__typename === "DataLocalMarketDetailOneImageContent1" && <>
                <section className="flex justify-between pb-117px mobile:pb-10px mobile:flex-wrap mobile:hidden">
                  <div className="w-583px h-500px mr-68px relative flex-shrink-0 block mobile:w-full mobile:mr-0 mobile:h-321">
                      <BaseImage
                        mImg={item.image?.imagemobile?.url}
                        pImg={item.image?.imagepc?.url}
                        alt={item.image?.altText}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                      ></BaseImage>
                  </div>
                  <div>
                    <div className="color-dark-grey text-27px font-normal pb-33px font-AlbertusNova-Regular mobile:text-center mobile:text-16px mobile:pb-20px mobile:pt-20px">
                      { item.contentTitle }
                    </div>
                    <p className="color-dark-grey font-Grotesque-Regular text-22px font-normal pb-50px leading-[2em] mobile:pl-25px mobile:pr-25px mobile:pb-30px mobile:text-14px mobile:leading-[2em]">
                      Bring the drinking occasion to life in a way that gives us a place
                      in culture and gets people talking. Bring the drinking occasion to
                      life in a way that gives us a place in culture and gets people
                      talking.{" "}
                    </p>
                    <p className="color-dark-grey font-Grotesque-Regular text-22px font-normal leading-[2em] mobile:pl-25px mobile:pr-25px mobile:pb-30px mobile:text-14px mobile:leading-[2em]">
                      Bring the drinking occasion to life in a way that gives us a place
                      in culture and gets people talking. Bring the drinking occasion to
                      life in a way that gives us a place in culture and gets people
                      talking.{" "}
                    </p>
                  </div>
                </section>
              </>}
              { item.__typename === "DataLocalMarketDetailOneVideo" && <>
              <section>
                  <div className="text-center text-33px font-normal pb-33px font-AlbertusNova-Regular mobile:text-16px mobile:pb-20px">
                    { item.title }
                  </div>
                  <div className="relative overflow-hidden pb-33px mobile:pb-20px">
                    <div className="w-117px h-117px absolute inset-0 cursor-pointer z-10 top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] mobile:w-70px mobile:h-70px">
                      {/* <BaseImage
                        defaultImg={require("../../../public/assets/storiesDetail/player.png")}
                        alt={"}
                        objectFit="contain"
                        quality={100}
                      ></BaseImage> */}
                    </div>

                    <div className="w-full block h-667px mobile:h-588px relative">
                      <BaseVideo
                        src={item.video?.video.url}
                        className="h-full object-cover"
                        loop={true}
                        autoplay={true}
                        width="100%"
                        height="100%"
                      ></BaseVideo>
                    </div>
                  </div>

                  <div className="pr-48px pl-48px pb-117px flex mobile:flex-wrap mobile:pr-25px mobile:pl-25px mobile:pb-40px">
                    <div className="flex-shrink-0 w-238px pr-33px text-22px font-normal font-AlbertusNova-Regular mobile:font-Grotesque-Regular mobile:text-dark-grey mobile:text-14px mobile:leading-[22px] mobile:pr-0 mobile:w-full">
                      Bring the drinking occasion to life
                    </div>
                    <div className=" pr-33px text-22px font-normal font-Grotesque-Regular text-dark-grey leading-[2em]  mobile:text-14px mobile:leading-[2em]  mobile:pr-0  mobile:w-full">
                      The Wildmoor Wild Escape Experience includes a carefully curated
                      stay within the Alladale estate lands, a 23,000-acre Wilderness
                      Reserve, providing a luxury .
                    </div>
                  </div>
                </section>
              </>}
              { item.__typename === "DataLocalMarketDetailOneImageContent2" && <>
                <section className="pb-132px flex justify-between mobile:flex-wrap mobile:justify-center mobile:hidden">
                  <div className="mr-88px">
                    <div className="flex-shrink-0 pr-33px pb-33px text-27px font-normal font-AlbertusNova-Regular">
                      { item.contentTitle }
                    </div>
                    <p className="text-22px font-normal font-Grotesque-Regular color-dark-grey leading-[2em]">
                      Bring the drinking occasion to life in a way that gives us a place
                      in culture and gets people talking. Bring the drinking occasion to
                      life in a way that gives us a place in culture and gets people
                      talking.{" "}
                    </p>
                    <p className="text-22px font-normal font-Grotesque-Regular color-dark-grey leading-[2em]">
                      Bring the drinking occasion to life in a way that gives us a place
                      in culture and gets people talking. Bring the drinking occasion to
                      life in a way that gives us a place in culture and gets people
                      talking.{" "}
                    </p>
                    <p className="text-22px font-normal font-Grotesque-Regular color-dark-grey leading-[2em]">
                      Bring the drinking occasion to life in a way that gives us a place
                      in culture and gets people talking. Bring the drinking occasion to
                      life in a way that gives us a place in culture and gets people
                      talking.
                    </p>
                    <p className="pt-42px text-22px font-normal font-Grotesque-Regular color-dark-grey leading-[2em]">
                      Bring the drinking occasion to life in a way that gives us a place
                      in culture and gets people talking.
                    </p>
                  </div>
                  <div className="relative w-523px h-696px flex-shrink-0 block">
                      <BaseImage
                        mImg={item.image?.imagemobile?.url}
                        pImg={item.image?.imagepc?.url}
                        alt={item.image?.altText}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                      ></BaseImage>
                  </div>
                </section>
              </>}
            </>
          })
        }
    </div>
  );
}

export default ActivityDetailComponent;

"use client";

import React, { useEffect, useState, useCallback } from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
import BaseVideo from "@/components/base/video";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
function StoriesDetailComponent(props: any) {
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
    }, [emblaApi]);


    return (
        <section>

            <div className="w-full h-407px overflow-hidden relative mobile:hidden">
                <BaseImage
                    defaultImg={require("../../../public/assets/storiesDetail/pic-0.png")}
                    alt={""}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                ></BaseImage>

                <div className="uppercase font-AlbertusNova-Regular w-623px text-center text-[#E6E7E8] absolute z-10 top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] text-40px">Bring the drinking occasion to life in a way</div>

            </div>





            <div className="container mx-auto  mobile:pt-100px">

                <div className="hidden mobile:block">
                    <div className="uppercase pl-25px pr-25px text-center pt-18px pb-33px text-20px font-AlbertusNova-Bold mobile:w-[80%] mobile:mx-auto mobile:pt-18px mobile:pb-33px">Bring the drinking occasion to life in a way</div>

                    <div className="h-253px relative w-full mobile:h-253px">
                        <BaseImage
                            defaultImg={require("../../../public/assets/storiesDetail/pic-0-m.png")}
                            alt={""}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        ></BaseImage>
                    </div>
                </div>


                <div className="pt-26px relative pb-107px mobile:pt-65px mobile:pb-21px">
                    <div className="z-40 w-158px h-158px absolute left-11px top-[-42px] mobile:w-90px mobile:h-90px mobile:top-[-45px]">
                        <BaseImage
                            defaultImg={require("../../../public/assets/storiesDetail/avatar.png")}
                            alt={""}
                            objectFit="contain"
                            quality={100}
                        ></BaseImage>
                    </div>

                    <div className="pl-196px pb-8px color-dark-grey text-23px font-bold  mobile:pl-25px mobile:text-14px">Name of KOL </div>
                    <div className="pl-196px text-[#969797] font-Grotesque-Regular font-medium text-23px mobile:pl-25px mobile:text-14px">Sailor | Professional traveler</div>
                </div>

                <div className="text-dark-grey pl-53px pr-53px pb-67px text-22px color-dark-grey font-normal leading-[38px] font-Grotesque-Regular mobile:text-14px mobile:pl-25px mobile:pr-25px mobile:pb-20px mobile:leading-[22px] mobile:flex mobile:flex-wrap">
                    <p className="mobile:order-2">Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking.  </p>
                    <p className="mobile:order-1 mobile:pb-20px ">Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking.</p>
                </div>


                <div className="relative overflow-hidden pb-33px mobile:pb-20px" ref={emblaRef}>
                    <div className="flex">
                        <div className="flex-grow-0 flex-shrink-0 basis-full relative">
                            <BaseImage
                                mImg={require("../../../public/assets/storiesDetail/kv-m.png")}
                                pImg={require("../../../public/assets/storiesDetail/kv.png")}
                                alt={""}
                                objectFit="contain"
                                quality={100}
                            ></BaseImage>

                        </div>
                        <div className="flex-grow-0 flex-shrink-0 basis-full relative">
                            <BaseImage
                                mImg={require("../../../public/assets/storiesDetail/kv-m.png")}
                                pImg={require("../../../public/assets/storiesDetail/kv.png")}
                                alt={""}
                                objectFit="contain"
                                quality={100}
                            ></BaseImage>

                        </div>
                        <div className="flex-grow-0 flex-shrink-0 basis-full relative">
                            <BaseImage
                                mImg={require("../../../public/assets/storiesDetail/kv-m.png")}
                                pImg={require("../../../public/assets/storiesDetail/kv.png")}
                                alt={""}
                                objectFit="contain"
                                quality={100}
                            ></BaseImage>

                        </div>
                    </div>

                    <div className="absolute bottom-83px w-full flex items-center justify-center mobile:bottom-50px mobile:scale-50">
                        {[0, 1, 2].map((item, index) => {
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

                <p className="color-dark-grey text-22px font-normal leading-[38px] font-Grotesque-Regular pl-47px pr-47px pb-117px mobile:text-14px mobile:pl-25px mobile:pr-25px mobile:leading-[22px] mobile:pb-40px">Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking.</p>


                <section className="flex justify-between pb-117px mobile:pb-10px mobile:flex-wrap mobile:hidden">
                    <div className="w-583px h-500px mr-68px relative flex-shrink-0 block mobile:w-full mobile:mr-0 mobile:h-321">
                        <BaseImage
                            mImg={require("../../../public/assets/storiesDetail/pic-1-m.png")}
                            pImg={require("../../../public/assets/storiesDetail/pic-1.png")}
                            alt={""}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        ></BaseImage>
                    </div>
                    <div>
                        <div className="color-dark-grey text-27px font-normal pb-33px font-AlbertusNova-Regular mobile:text-center mobile:text-16px mobile:pb-20px mobile:pt-20px">Bring the drinking occasion</div>
                        <p className="color-dark-grey font-Grotesque-Regular text-22px font-normal pb-50px leading-[38px] mobile:pl-25px mobile:pr-25px mobile:pb-30px mobile:text-14px mobile:leading-[22px]">Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. </p>
                        <p className="color-dark-grey font-Grotesque-Regular text-22px font-normal leading-[38px] mobile:pl-25px mobile:pr-25px mobile:pb-30px mobile:text-14px mobile:leading-[22px]">Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. </p>
                    </div>
                </section>

                <section>
                    <div className="text-center text-33px font-normal pb-33px font-AlbertusNova-Regular mobile:text-16px mobile:pb-20px">Bring the drinking occasion</div>

                    <div className="relative overflow-hidden pb-33px mobile:pb-20px">

                        <div className="w-117px h-117px absolute inset-0 cursor-pointer z-10 top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] mobile:w-70px mobile:h-70px">
                            <BaseImage

                                defaultImg={require("../../../public/assets/storiesDetail/player.png")}
                                alt={""}
                                objectFit="contain"
                                quality={100}
                            ></BaseImage>
                        </div>

                        <div className="w-full block h-667px mobile:h-588px relative">
                            <BaseImage
                                mImg={require("../../../public/assets/storiesDetail/pic-2-m.png")}
                                pImg={require("../../../public/assets/storiesDetail/pic-2.png")}
                                alt={""}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                            ></BaseImage>
                            {/*<BaseVideo></BaseVideo>*/}
                        </div>



                    </div>

                    <div className="pr-48px pl-48px pb-117px flex mobile:flex-wrap mobile:pr-25px mobile:pl-25px mobile:pb-40px">
                        <div className="flex-shrink-0 w-238px pr-33px text-22px font-normal font-AlbertusNova-Regular mobile:font-Grotesque-Regular mobile:text-dark-grey mobile:text-14px mobile:leading-[22px] mobile:pr-0 mobile:w-full">Bring the drinking occasion to life</div>
                        <div className=" pr-33px text-22px font-normal font-Grotesque-Regular text-dark-grey leading-[38px]  mobile:text-14px mobile:leading-[22px]  mobile:pr-0  mobile:w-full">The Wildmoor Wild Escape Experience includes a carefully curated stay within the Alladale estate lands, a 23,000-acre Wilderness Reserve, providing a luxury .</div>
                    </div>


                </section>


                <section className="pb-132px flex justify-between mobile:flex-wrap mobile:justify-center mobile:hidden">
                    <div className="mr-88px">
                        <div className="flex-shrink-0 pr-33px pb-33px text-27px font-normal font-AlbertusNova-Regular">Bring the drinking occasion</div>
                        <p className="text-22px font-normal font-Grotesque-Regular color-dark-grey leading-[38px]">Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. </p>
                        <p className="text-22px font-normal font-Grotesque-Regular color-dark-grey leading-[38px]">Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. </p>
                        <p className="text-22px font-normal font-Grotesque-Regular color-dark-grey leading-[38px]">Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking.</p>
                        <p className="pt-42px text-22px font-normal font-Grotesque-Regular color-dark-grey leading-[38px]">Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking.</p>

                    </div>
                    <div className="w-523px h-696px flex-shrink-0 block">
                        <BaseImage

                            defaultImg={require("../../../public/assets/storiesDetail/pic-3.png")}
                            alt={""}
                            objectFit="contain"
                            quality={100}
                        ></BaseImage>
                    </div>
                </section>


            </div>
        </section>

    );
}

export default StoriesDetailComponent;

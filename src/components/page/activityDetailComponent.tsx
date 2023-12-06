"use client";

import React, { useEffect, useState, useCallback } from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
import BaseVideo from "@/components/base/video";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

function ActivityDetailComponent(props: any) {
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
    }, [emblaApi,onChangeScroll]);


    return (
        <div className="container mx-auto overflow-hidden">
            <div className="text-26px font-normal text-center text-dark-grey pt-86px pb-50px font-AlbertusNova-Regular mobile:pt-22px mobile:pb-20px mobile:text-14px uppercase">the Wild Escape Journal</div>
            <div className="text-48px font-normal text-center w-747px mx-auto font-AlbertusNova-Regular pb-140px mobile:pl-45px mobile:pr-45px mobile:text-20px mobile:w-auto mobile:pb-40px uppercase">Bring the drinking occasion to life in a way</div>
            <div className="text-dark-grey pl-64px pr-64px pb-80px text-26px color-dark-grey font-normal leading-[45px] font-Grotesque-Regular mobile:text-14px mobile:pl-25px mobile:pr-25px mobile:pb-20px mobile:leading-[22px] mobile:flex mobile:flex-wrap">
                <p className="mobile:order-2">Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. </p>
                <p className="mobile:order-1 mobile:pb-20px ">Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking.</p>
            </div>

            <div className="relative overflow-hidden pb-40px mobile:pb-20px" ref={emblaRef}>
                <div className="flex">
                    <div className="flex-grow-0 flex-shrink-0 basis-full relative">
                        <BaseImage
                            mImg={require("../../../public/assets/activityDetail/kv-m.png")}
                            pImg={require("../../../public/assets/activityDetail/kv.png")}
                            alt={""}
                            objectFit="contain"
                            quality={100}
                        ></BaseImage>

                    </div>
                    <div className="flex-grow-0 flex-shrink-0 basis-full relative">
                        <BaseImage
                            mImg={require("../../../public/assets/activityDetail/kv-m.png")}
                            pImg={require("../../../public/assets/activityDetail/kv.png")}
                            alt={""}
                            objectFit="contain"
                            quality={100}
                        ></BaseImage>

                    </div>
                    <div className="flex-grow-0 flex-shrink-0 basis-full relative">
                        <BaseImage
                            mImg={require("../../../public/assets/activityDetail/kv-m.png")}
                            pImg={require("../../../public/assets/activityDetail/kv.png")}
                            alt={""}
                            objectFit="contain"
                            quality={100}
                        ></BaseImage>

                    </div>
                </div>

                <div className="absolute bottom-100px w-full flex items-center justify-center mobile:bottom-50px mobile:scale-50">
                    {[0, 1, 2].map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`h-5px mx-5px inline-block rounded-tr-10px rounded-bl-10px cursor-pointer ${
                                    currentIndex === index
                                        ? "bg-white w-50px"
                                        : "bg-gray-300 w-20px"
                                }`}
                                onClick={() => scrollTo(index)}
                            ></div>
                        );
                    })}
                </div>

            </div>

            <p className="color-dark-grey text-26px font-normal leading-[45px] font-Grotesque-Regular pl-56px pr-56px pb-140px mobile:text-14px mobile:pl-25px mobile:pr-25px mobile:leading-[22px] mobile:pb-82px">Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking.</p>


            <section className="flex justify-between pb-140px mobile:pb-10px mobile:flex-wrap">
                <div className="w-700px h-600px mr-81px relative flex-shrink-0 block mobile:w-full mobile:mr-0 mobile:h-321">
                    <BaseImage
                        mImg={require("../../../public/assets/activityDetail/pic-1-m.png")}
                        pImg={require("../../../public/assets/activityDetail/pic-1.png")}
                        alt={""}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    ></BaseImage>
                </div>
                <div>
                    <div className="color-dark-grey text-32px font-normal pb-40px font-AlbertusNova-Regular mobile:text-center mobile:text-16px mobile:pb-20px mobile:pt-20px">Bring the drinking occasion</div>
                    <p className="color-dark-grey font-Grotesque-Regular text-26px font-normal pb-60px leading-[45px] mobile:pl-25px mobile:pr-25px mobile:pb-30px mobile:text-14px mobile:leading-[22px]">Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. </p>
                    <p className="color-dark-grey font-Grotesque-Regular text-26px font-normal leading-[45px] mobile:pl-25px mobile:pr-25px mobile:pb-30px mobile:text-14px mobile:leading-[22px]">Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. </p>
                </div>
            </section>

            <section>
                <div className="text-center text-40px font-normal pb-40px font-AlbertusNova-Regular mobile:text-16px mobile:pb-20px">Bring the drinking occasion</div>

                <div className="relative overflow-hidden pb-40px mobile:pb-20px">

                    <div className="w-140px h-140px absolute inset-0 cursor-pointer z-10 top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] mobile:w-70px mobile:h-70px">
                        <BaseImage

                            defaultImg={require("../../../public/assets/activityDetail/player.png")}
                            alt={""}
                            objectFit="contain"
                            quality={100}
                        ></BaseImage>
                    </div>

                    <div className="w-full block h-800px relative mobile:h-588px">
                        <BaseImage
                            mImg={require("../../../public/assets/activityDetail/pic-2-m.png")}
                            pImg={require("../../../public/assets/activityDetail/pic-2.png")}
                            alt={""}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        ></BaseImage>
                        {/*<BaseVideo></BaseVideo>*/}
                    </div>



                </div>

                <div className="pr-57px pl-57px pb-140px flex mobile:flex-wrap mobile:pr-25px mobile:pl-25px mobile:pb-40px">
                    <div className="flex-shrink-0 w-286px pr-40px text-26px font-normal font-AlbertusNova-Regular mobile:font-Grotesque-Regular mobile:text-dark-grey mobile:text-14px mobile:leading-[22px] mobile:pr-0 mobile:w-full">Bring the drinking occasion to life</div>
                    <div className=" pr-40px text-26px font-normal font-Grotesque-Regular text-dark-grey leading-[45px]  mobile:text-14px mobile:leading-[22px]  mobile:pr-0  mobile:w-full">The Wildmoor Wild Escape Experience includes a carefully curated stay within the Alladale estate lands, a 23,000-acre Wilderness Reserve, providing a luxury .</div>
                </div>


            </section>


            <section className="pb-158px flex justify-between mobile:flex-wrap mobile:justify-center mobile:hidden">
                <div className="mr-106px">
                    <div className="flex-shrink-0 pr-40px pb-40px text-32px font-normal font-AlbertusNova-Regular">Bring the drinking occasion</div>
                    <p className="text-26px font-normal font-Grotesque-Regular color-dark-grey leading-[45px]">Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. </p>
                    <p className="text-26px font-normal font-Grotesque-Regular color-dark-grey leading-[45px]">Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. </p>
                    <p className="text-26px font-normal font-Grotesque-Regular color-dark-grey leading-[45px]">Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking. Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking.</p>
                    <p className="pt-50px text-26px font-normal font-Grotesque-Regular color-dark-grey leading-[45px]">Bring the drinking occasion to life in a way that gives us a place in culture and gets people talking.</p>

                </div>
                <div className="w-628px h-835px flex-shrink-0 block">
                    <BaseImage

                        defaultImg={require("../../../public/assets/activityDetail/pic-3.png")}
                        alt={""}
                        objectFit="contain"
                        quality={100}
                    ></BaseImage>
                </div>
            </section>


        </div>
    );
}

export default ActivityDetailComponent;

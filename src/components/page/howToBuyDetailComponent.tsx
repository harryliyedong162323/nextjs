"use client";

import React, {useCallback, useEffect, useState} from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
import BaseVideo from "@/components/base/video";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import dynamic from "next/dynamic";
const Baidu:React.ComponentType<{}> = dynamic(() => import('@/components/map/baidu'));



function HowToBuyDetailComponent(props: any) {
    const [browser,setBrowser] = useState(false);
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

    useEffect(():void => {

        setBrowser(true);

    }, [browser]);


    return (
       <div className="w-full">
           <div className="w-full h-screen overflow-hidden relative">
               <BaseImage
                   defaultImg={require("../../../public/assets/howToBuyDetail/bg.png")}
                   alt={""}
                   layout="fill"
                   objectFit="cover"
                   quality={100}
               ></BaseImage>

               <div className="absolute z-10 bottom-[178px] left-1/2 w-full translate-x-[-50%] mobile:bottom-[106px]">
                   <div className="font-AlbertusNova-Regular font-normal text-center text-26px pb-50px text-[#E6E7E8] mobile:text-14px mobile:pb-25px">Wildmoor house</div>
                   <div className="font-AlbertusNova-Regular font-normal text-center text-[#E6E7E8] text-48px mobile:text-24px">Shenzhen Nanjing Road</div>
               </div>


               <div className="absolute bottom-24px w-full flex flex-col items-center justify-center mobile:hidden">
                   <div className="w-18px h-24px border-white border-2 inline-block border-solid rounded-full mb-5px relative before:w-2px before:h-5px before:bg-white before:absolute before:content-[''] before:left-6px before:top-5px before:animate-scroll"></div>
                   <div className="text-12px leading-tight text-white font-Grotesque-Regular">
                       Scroll to explore more
                   </div>
               </div>


           </div>


           <section>
              <div className="w-full container pb-80px mx-auto">
                  <div className="text-40px font-normal font-AlbertusNova-Regular pb-77px text-center pt-81px mobile:pt-42px mobile:text-24px mobile:leading-[40px] mobile:pb-45px">Servicing</div>
                  <div className="font-normal font-Grotesque-Regular text-26px text-center text-dark-grey leading-[40px] mobile:text-14px mobile:pl-25px mobile:pr-25px mobile:leading-[20px]">The Ancient Reserve is a diverse collection of rare, high-aged whiskies sourced and maintained over 6 decades by the Grant family. It includes casks from every region of Scotland, including some notable ghost distillery stocks.</div>
              </div>

               <div className="relative overflow-hidden pb-40px mobile:pb-20px" ref={emblaRef}>
                   <div className="flex">
                       <div className="flex-grow-0 flex-shrink-0 basis-4/5 ml-25px relative h-500px mobile:ml-10px mobile:basis-2/3 mobile:h-455px">
                           <BaseImage
                               mImg={require("../../../public/assets/howToBuyDetail/kv-1.png")}
                               pImg={require("../../../public/assets/howToBuyDetail/kv-1.png")}
                               alt={""}
                               layout="fill"
                               objectFit="cover"
                               quality={100}
                           ></BaseImage>

                       </div>
                       <div className="flex-grow-0 flex-shrink-0 basis-4/5 ml-25px relative h-500px  mobile:ml-10px mobile:basis-2/3 mobile:h-455px">
                           <BaseImage
                               mImg={require("../../../public/assets/howToBuyDetail/kv-2.png")}
                               pImg={require("../../../public/assets/howToBuyDetail/kv-2.png")}
                               alt={""}
                               layout="fill"
                               objectFit="cover"
                               quality={100}
                           ></BaseImage>

                       </div>
                       <div className="flex-grow-0 flex-shrink-0 basis-4/5 ml-25px relative h-500px mobile:ml-10px mobile:basis-2/3 mobile:h-455px">
                           <BaseImage
                               mImg={require("../../../public/assets/howToBuyDetail/kv-3.png")}
                               pImg={require("../../../public/assets/howToBuyDetail/kv-3.png")}
                               alt={""}
                               layout="fill"
                               objectFit="cover"
                               quality={100}
                           ></BaseImage>

                       </div>
                   </div>

                   <div className="mt-30px bottom-100px w-full flex items-center justify-center mobile:bottom-50px mobile:scale-50">
                       {[0, 1, 2].map((item, index) => {
                           return (
                               <div
                                   key={index}
                                   className={`h-5px mx-5px inline-block rounded-tr-10px rounded-bl-10px cursor-pointer ${
                                       currentIndex === index
                                           ? "bg-[#696969] w-50px"
                                           : "bg-[#969797] w-20px"
                                   }`}
                                   onClick={() => scrollTo(index)}
                               ></div>
                           );
                       })}
                   </div>

               </div>


           </section>

           <section>
               <div className="h-900px relative w-full overflow-hidden mobile:h-auto mobile:flex mobile:flex-wrap">
                   <div className="h-900px w-full relative mobile:order-2 mobile:h-211px">

                       <div className="absolute z-20 top-[37px] right-[50px] grid grid-rows-3 mobile:top-[25px] mobile:right-[20px] ">
                           <div className="bg-[url('/assets/add.png')] bg-contain w-48px h-48px inline-block align-middle cursor-pointer mobile:w-32px mobile:h-32px" ></div>
                           <div className="bg-[url('/assets/reduce.png')] bg-contain w-48px h-48px inline-block align-middle cursor-pointer mobile:w-32px mobile:h-32px" ></div>
                           <div className="bg-[url('/assets/positioning.png')] bg-contain w-48px h-48px inline-block align-middle cursor-pointer mobile:w-32px mobile:h-32px"></div>
                       </div>


                       {
                           browser ? <Baidu></Baidu> : null
                       }
                   </div>


                   <div className="absolute top-0 left-0 z-20 h-900px w-526px bg-white flex flex-wrap mobile:static mobile:w-full mobile:h-auto mobile:order-1">
                       <div className="w-full font-AlbertusNova-Regular font-normal h-293px pt-43px pl-50px pr-24px border-b-4 border-[#CACACA] border-solid mobile:pt-89px mobile:pl-25 mobile:pr-25 mobile:h-auto mobile:border-b-2 mobile:pb-34px mobile:pl-25px mobile:pr-25px">
                           <div className="text-26px text-dark-grey mobile:text-14px">WILDMOOR house</div>
                           <div className="text-40px text-dark-grey mobile:text-24px">Shenzhen Nanjing Road</div>
                       </div>
                       <div className="w-full h-162px border-b-2 border-[#CACACA] border-solid pt-55px pl-50px pr-95px text-26px mobile:text-14px  mobile:h-auto  mobile:border-b-1 mobile:pb-26px mobile:pl-25px mobile:pr-25px mobile:pt-23px">
                           <div className="text-dark-grey ">4325 Glenwood</div>
                           <div className="text-dark-grey">AvenueRaleigh, NC 27612,</div>
                       </div>
                       <div className="w-full h-160px border-b-2 border-[#CACACA] border-solid pt-86px pl-50px pr-95px  text-26px mobile:text-14px mobile:h-auto  mobile:border-b-1 mobile:pb-26px mobile:pt-32px mobile:pl-25px mobile:pr-25px">
                           <span className="bg-[url('/assets/phone.png')] bg-contain w-23px h-22px inline-block align-middle mr-15px mobile:h-11px mobile:w-11px mobile:ml-5px"></span>
                           <span className="text-dark-grey ">000-1234567890</span>
                       </div>
                       <div className="w-full h-285px  pt-83px pl-50px pr-95px  text-26px mobile:text-14px mobile:h-auto mobile:pb-31px mobile:pt-32px mobile:pl-25px mobile:pr-25px">
                           <span className="bg-[url('/assets/time.png')] bg-contain w-24px h-24px inline-block align-middle mr-15px mobile:w-12px mobile:h-12px mobile:ml-5px"></span>
                           <span>10:00-24:00</span>
                       </div>
                   </div>

               </div>
           </section>
       </div>
    );
}

export default HowToBuyDetailComponent;

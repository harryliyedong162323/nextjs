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

    const headStyle = props.data.entry.headStyle;

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
       <section className="w-full h-screen">
           <input type="hidden" value={headStyle}/>
           {/*<section className="">*/}
              <div className="w-[50%] pb-67px mx-auto">
                  <div className="text-33px font-normal font-AlbertusNova-Regular pb-64px text-center pt-78px mobile:pt-42px mobile:text-24px mobile:leading-[40px] mobile:pb-45px uppercase">Servicing</div>
                  <div className="font-normal font-Grotesque-Regular text-22px text-center text-dark-grey leading-[33px] mobile:text-14px mobile:pl-25px mobile:pr-25px mobile:leading-[20px]">The Ancient Reserve is a diverse collection of rare, high-aged whiskies sourced and maintained over 6 decades by the Grant family. It includes casks from every region of Scotland, including some notable ghost distillery stocks.</div>
              </div>

               <div className="relative overflow-hidden pb-33px mobile:pb-20px" ref={emblaRef}>
                   <div className="flex">
                       <div className="flex-grow-0 flex-shrink-0 basis-4/5 ml-21px relative h-417px mobile:ml-10px mobile:basis-2/3 mobile:h-455px">
                           <BaseImage
                               mImg={require("../../../public/assets/howToBuyDetail/kv-1.png")}
                               pImg={require("../../../public/assets/howToBuyDetail/kv-1.png")}
                               alt={""}
                               layout="fill"
                               objectFit="cover"
                               quality={100}
                           ></BaseImage>

                       </div>
                       <div className="flex-grow-0 flex-shrink-0 basis-4/5 ml-21px relative h-417px  mobile:ml-10px mobile:basis-2/3 mobile:h-455px">
                           <BaseImage
                               mImg={require("../../../public/assets/howToBuyDetail/kv-2.png")}
                               pImg={require("../../../public/assets/howToBuyDetail/kv-2.png")}
                               alt={""}
                               layout="fill"
                               objectFit="cover"
                               quality={100}
                           ></BaseImage>

                       </div>
                       <div className="flex-grow-0 flex-shrink-0 basis-4/5 ml-21px relative h-417px mobile:ml-10px mobile:basis-2/3 mobile:h-455px">
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

                   <div className="mt-25px bottom-83px w-full flex items-center justify-center mobile:bottom-50px mobile:scale-50">
                       {[0, 1, 2].map((item, index) => {
                           return (
                               <div
                                   key={index}
                                   className={`h-4px mx-4px inline-block rounded-tr-8px rounded-bl-8px cursor-pointer ${
                                       currentIndex === index
                                           ? "bg-[#696969] w-42px"
                                           : "bg-[#969797] w-17px"
                                   }`}
                                   onClick={() => scrollTo(index)}
                               ></div>
                           );
                       })}
                   </div>

               </div>


           {/*</section>*/}

           {/*<section>*/}
           {/*    <div className="h-750px relative w-full overflow-hidden mobile:h-auto mobile:flex mobile:flex-wrap">*/}
           {/*        <div className="h-750px w-full relative mobile:order-2 mobile:h-211px">*/}

           {/*            <div className="absolute z-20 top-[31px] right-[42px] grid grid-rows-3 mobile:top-[25px] mobile:right-[20px] ">*/}
           {/*                <div className="bg-[url('/assets/add.png')] bg-contain w-40px h-40px inline-block align-middle cursor-pointer mobile:w-32px mobile:h-32px" ></div>*/}
           {/*                <div className="bg-[url('/assets/reduce.png')] bg-contain w-40px h-40px inline-block align-middle cursor-pointer mobile:w-32px mobile:h-32px" ></div>*/}
           {/*                <div className="bg-[url('/assets/positioning.png')] bg-contain w-40px h-40px inline-block align-middle cursor-pointer mobile:w-32px mobile:h-32px"></div>*/}
           {/*            </div>*/}


           {/*            {*/}
           {/*                browser ? <Baidu></Baidu> : null*/}
           {/*            }*/}
           {/*        </div>*/}


           {/*        <div className="absolute top-0 left-0 z-20 h-750px w-438px bg-white flex flex-wrap mobile:static mobile:w-full mobile:h-auto mobile:order-1">*/}
           {/*            <div className="w-full font-AlbertusNova-Regular font-normal h-244px pt-36px pl-42px pr-20px border-b-3 border-[#CACACA] border-solid mobile:pt-89px mobile:pl-25 mobile:pr-25 mobile:h-auto mobile:border-b-2 mobile:pb-34px mobile:pl-25px mobile:pr-25px">*/}
           {/*                <div className="text-22px text-dark-grey mobile:text-14px uppercase">WILDMOOR house</div>*/}
           {/*                <div className="text-33px text-dark-grey mobile:text-24px uppercase">Shenzhen Nanjing Road</div>*/}
           {/*            </div>*/}
           {/*            <div className="w-full h-135px border-b-2 border-[#CACACA] border-solid pt-46px pl-42px pr-79px text-22px mobile:text-14px  mobile:h-auto  mobile:border-b-1 mobile:pb-26px mobile:pl-25px mobile:pr-25px mobile:pt-23px">*/}
           {/*                <div className="text-dark-grey ">4325 Glenwood</div>*/}
           {/*                <div className="text-dark-grey">AvenueRaleigh, NC 27612,</div>*/}
           {/*            </div>*/}
           {/*            <div className="w-full h-133px border-b-2 border-[#CACACA] border-solid pt-72px pl-42px pr-79px  text-22px mobile:text-14px mobile:h-auto  mobile:border-b-1 mobile:pb-26px mobile:pt-32px mobile:pl-25px mobile:pr-25px">*/}
           {/*                <span className="bg-[url('/assets/phone.png')] bg-contain w-19px h-18px inline-block align-middle mr-13px mobile:h-11px mobile:w-11px mobile:ml-5px"></span>*/}
           {/*                <span className="text-dark-grey ">000-1234567890</span>*/}
           {/*            </div>*/}
           {/*            <div className="w-full h-238px  pt-69px pl-42px pr-79px  text-22px mobile:text-14px mobile:h-auto mobile:pb-31px mobile:pt-32px mobile:pl-25px mobile:pr-25px">*/}
           {/*                <span className="bg-[url('/assets/time.png')] bg-contain w-20px h-20px inline-block align-middle mr-13px mobile:w-12px mobile:h-12px mobile:ml-5px"></span>*/}
           {/*                <span>10:00-24:00</span>*/}
           {/*            </div>*/}
           {/*        </div>*/}

           {/*    </div>*/}
           {/*</section>*/}
       </section>
    );
}

export default HowToBuyDetailComponent;

"use client";

import React, {useCallback, useEffect, useState,useRef} from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
import BaseVideo from "@/components/base/video";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const campaigns:object[] = [
    {
        id:0,
        mImg:require("../../../public/assets/howToBuyDetail/kv-1.png"),
        pImg:require("../../../public/assets/howToBuyDetail/kv-1.png"),
        title:'NAME of the store',
        des:'Bring the drinking occasion to life in a way Bring the drinking occasion...',
        active:false,
    },
    {
        id:1,
        mImg:require("../../../public/assets/howToBuyDetail/kv-2.png"),
        pImg:require("../../../public/assets/howToBuyDetail/kv-2.png"),
        title:'NAME of the store',
        des:'Bring the drinking occasion to life in a way Bring the drinking occasion...',
        active:false,
    },
    {
        id:2,
        mImg:require("../../../public/assets/howToBuyDetail/kv-3.png"),
        pImg:require("../../../public/assets/howToBuyDetail/kv-3.png"),
        title:'NAME of the store',
        des:'Bring the drinking occasion to life in a way Bring the drinking occasion...',
        active:false,
    },
    {
        id:3,
        mImg:require("../../../public/assets/howToBuyDetail/kv-3.png"),
        pImg:require("../../../public/assets/howToBuyDetail/kv-3.png"),
        title:'NAME of the store',
        des:'Bring the drinking occasion to life in a way Bring the drinking occasion...',
        active:false,
    },
    {
        id:4,
        mImg:require("../../../public/assets/howToBuyDetail/kv-3.png"),
        pImg:require("../../../public/assets/howToBuyDetail/kv-3.png"),
        title:'NAME of the store',
        des:'Bring the drinking occasion to life in a way Bring the drinking occasion...',
        active:false,
    },
    {
        id:5,
        mImg:require("../../../public/assets/howToBuyDetail/kv-3.png"),
        pImg:require("../../../public/assets/howToBuyDetail/kv-3.png"),
        title:'NAME of the store',
        des:'Bring the drinking occasion to life in a way Bring the drinking occasion...',
        active:false,
    }
];

function NearYouComponent(props: any) {




    const [emblaRef, emblaApi] = useEmblaCarousel({ align:'start',loop: true }, [Autoplay()]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [campaignData,setCampaignData] = useState(campaigns);


    const computedActiveDrop = (index:number)=>{

        const updatedData:object[] = campaignData.map((item:any) => {
            if (item.id === index) {
                return { ...item, active: true };
            }else{
                return item;
            }

        });
        console.log(updatedData)

        setCampaignData(updatedData)
    }


    const onChangeScroll = useCallback(
        (emblaApi: { selectedScrollSnap: () => any }) => {
            console.log(emblaApi?.selectedScrollSnap());
            setCurrentIndex(emblaApi?.selectedScrollSnap() || 0);
            setTimeout(()=>{
                computedActiveDrop(emblaApi?.selectedScrollSnap() || 0);
            },500);
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
        if (!emblaApi) return;
        computedActiveDrop(0);
        emblaApi?.on("select", onChangeScroll);

    }, [emblaApi,onChangeScroll]);


    return (
        <section className="w-full h-screen overflow-hidden bg-while relative">
            <div className="pt-154px uppercase font-AlbertusNova-Regular font-normal text-33px text-center paid:text-23px mobile:text-20px mobile:pt-77px">Wildmoor near you</div>

            <div className="relative overflow-hidden ml-[10%] pt-80px paid:pt-57px paid:ml-[7%] mobile:ml-[0] mobile:pt-128px" ref={emblaRef}>
                <div className="flex text-dark-grey items-end pb-40px paid:pb-28px">

                    {
                        campaignData.map((item:any,index:number)=>{

                            return (
                                <div  key={item.id} className={` ml-25px h-auto paid:ml-17px`}>

                                    <div className={`transition-all ease-in-out origin-left  duration-1000 relative ${item.active == true ? 'w-615px paid:w-439px mobile:w-192px' : 'w-406px paid:290px mobile:w-192px'}`}>
                                        <div className={`relative  mb-40px w-full paid:mb-28px ${item.active == true ? 'h-455px paid:h-325px mobile:h-166px' : 'h-406px paid:h-290px mobile:h-166px'}`}>
                                            <BaseImage
                                                mImg={item.mImg}
                                                pImg={item.pImg}
                                                alt={""}
                                                layout="fill"
                                                objectFit="cover"
                                                quality={100}
                                            ></BaseImage>
                                        </div>


                                        <div className="font-Grotesque-Medium font-medium text-18px paid:text-12px mobile:text-16px">{item.title}</div>
                                        <div className={`font-Grotesque-Regular font-medium w-full absolute left-0 bottom-[-25px] z-20 justify-between items-center paid:bottom-[-17px]  ${item.active == true ? 'flex mobile:hidden' : 'hidden'}`}>
                                            <span className="w-[70%] truncate paid:w-[50%]">{item.des}</span>
                                            <span className="cursor-pointer bg-cover bg-[url('/assets/nearYou/more.png')] w-30px h-30px paid:w-21px paid:h-21px"></span>
                                        </div>
                                    </div>



                                </div>
                            );
                        })
                    }



                </div>



            </div>

        </section>
    );
}

export default NearYouComponent;

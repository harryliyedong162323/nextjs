"use client";

import React, {useCallback, useEffect, useState,useRef} from "react";
import BaseImage from "@/components/base/image";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";


const campaigns:object[] = [
    {
        id:0,
        mImg:require("../../../public/assets/howToBuyDetail/kv-1.png"),
        pImg:require("../../../public/assets/howToBuyDetail/kv-1.png"),
        title:'New York',
        des:'Bring the drinking occasion to life in a way Bring the drinking occasion...',
        date:'2023-11-11',
    },
    {
        id:1,
        mImg:require("../../../public/assets/howToBuyDetail/kv-2.png"),
        pImg:require("../../../public/assets/howToBuyDetail/kv-2.png"),
        title:'New York',
        des:'Bring the drinking occasion to life in a way Bring the drinking occasion...',
        date:'2023-11-11',
    },
    {
        id:2,
        mImg:require("../../../public/assets/howToBuyDetail/kv-3.png"),
        pImg:require("../../../public/assets/howToBuyDetail/kv-3.png"),
        title:'New York',
        des:'Bring the drinking occasion to life in a way Bring the drinking occasion...',
        date:'2023-11-11',
    },
    {
        id:3,
        mImg:require("../../../public/assets/howToBuyDetail/kv-3.png"),
        pImg:require("../../../public/assets/howToBuyDetail/kv-3.png"),
        title:'New York',
        des:'Bring the drinking occasion to life in a way Bring the drinking occasion...',
        date:'2023-11-11',
    }
];

function IntroduceCampaignComponent(props: any) {

    const carouselRefs = useRef([]);


    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, }, [Autoplay()]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [alignment, setAlignment] = useState<'start' | 'center' | 'end' | 'justify' | undefined>('start');
    // const [alignment, setAlignment] = useState('center'); // 初始对齐方式为 'start'

    const computedActiveDrop = (index:number)=>{
        let currentDom = null;
        if(index == 0){
            currentDom = document.getElementById(`campaign-${campaigns.length-1}`);
        }else{
            currentDom = document.getElementById(`campaign-${index - 1}`);
        }

        const campaignList = document.getElementsByClassName('campaign');

        for (let i =0;i<campaignList.length;i++){
            // @ts-ignore
            campaignList[i].style.height = 0;
        }
        // @ts-ignore
        currentDom.style.height = '150px';


    }


    const onChangeScroll = useCallback(
        (emblaApi: { selectedScrollSnap: () => any }) => {
            console.log(emblaApi?.selectedScrollSnap());
            setCurrentIndex(emblaApi?.selectedScrollSnap() || 0);
            computedActiveDrop(emblaApi?.selectedScrollSnap() || 0)
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

    const scrollNext = ()=>{

        emblaApi?.scrollNext();

    }
    const scrollPrev = ()=>{

        emblaApi?.scrollPrev();

    }



    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            const newAlignment = windowWidth <= 768 ? 'end' : 'center';
            setAlignment(newAlignment);
        };

        // 监听窗口大小变化
        window.addEventListener('resize', handleResize);
        // 初始化对齐方式
        handleResize();

        return () => {
            // 清除事件监听器
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        computedActiveDrop(0);
        emblaApi?.on("select", onChangeScroll);

        // @ts-ignore
        emblaApi.reInit({ align: alignment });



    }, [emblaApi,onChangeScroll,alignment]);




    return (
        <section className="w-full h-screen overflow-hidden bg-cover bg-[url('/assets/introduceCampaign/bg.png')] bg-[#E6E7E8] relative">

            <div className="absolute top-1/2 translate-y-[-50%] right-0 bg-contain bg-[url('/assets/introduceCampaign/line.png')] bg-center w-[75%] h-600px bg-no-repeat  paid:h-428px paid:w-[75%] paid:top-[35%] mobile:bg-[url('/assets/introduceCampaign/line-m.png')] mobile:w-[40%] mobile:left-[30%]"></div>

            <div className="pt-104px uppercase font-AlbertusNova-Regular font-normal text-33px text-center paid:pt-110px paid:text-23px mobile:pt-84px mobile:text-24px">Global Campaigns</div>



            <div className="relative overflow-hidden pt-75px h-685px paid:h-489px  paid:pt-53px mobile:pt-113px " ref={emblaRef}>
                <div className="flex text-dark-grey">

                    {
                        campaigns.map((item:any,index:number)=>{

                            return (
                                <div  key={item.id} className="flex-grow-0 flex-shrink-0 basis-1/3 ml-25px w-280px paid:w-200px paid:ml-17px mobile:w-179px mobile:ml-56px mobile:basis-1/2">
                                    <div id={`campaign-${index}`} className={`h-0 transition-all ease-in-out  campaign`} ref={carouselRefs.current[index]}></div>

                                    <div className="relative mx-auto w-280px h-280px rounded-full overflow-hidden mb-25px paid:w-200px paid:h-200px paid:mb-17px mobile:w-179px mobile:h-179px mobile:mb-25px">
                                        <BaseImage
                                            mImg={item.mImg}
                                            pImg={item.pImg}
                                            alt={""}
                                            layout="fill"
                                            objectFit="cover"
                                            quality={100}
                                        ></BaseImage>
                                    </div>
                                    <div className="text-center text-21px font-Grotesque-Medium font-medium paid:text-15px mobile:text-16px">
                                        <span className="w-12px h-14px bg-contain bg-[url('/assets/introduceCampaign/subtract.png')] inline-block align-middle paid:w-8px paid:h-10px mobile:w-10px mobile:h-11px"></span>
                                        <span className="uppercase inline-block align-middle pl-8px paid:pl-5px mobile:pl-9px">{item.title}</span>
                                    </div>

                                    <div className="text-center font-Grotesque-Medium font-medium text-19px pb-10px paid:text-13px paid:pb-7px mobile:text-14px mobile:pb-20px">{item.date}</div>
                                    <div className="font-Grotesque-Regular font-medium truncate mx-auto w-280px paid:w-200px mobile:text-center mobile:w-full">{item.des}</div>
                                    <div className="cursor-pointer bg-contain bg-[url('/assets/introduceCampaign/more.png')] w-30px h-30px mx-auto mt-25px paid:w-21px paid:h-21px mt-17px mobile:w-24px mobile:h-24px mobile:mt-15px"></div>

                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <div className="flex justify-end pr-10">
                <div>
                    <span className={`cursor-pointer bg-contain ${currentIndex == 0 ? "bg-[url('/assets/nearYou/prev.png')]" : "bg-[url('/assets/nearYou/prev-active.png')]"} w-44px h-44px inline-block align-middle mr-7px paid:w-31px paid:h-31px paid:mr-5px mobile:w-26px mobile:h-26px`} onClick={()=>{scrollPrev()}}></span>
                    <span className={`cursor-pointer bg-contain ${currentIndex == campaigns.length-1 ? "bg-[url('/assets/nearYou/next.png')]" : "bg-[url('/assets/nearYou/next-active.png')]"} w-44px h-44px inline-block align-middle paid:w-31px paid:h-31px mobile:w-26px mobile:h-26px`} onClick={()=>{scrollNext()}}></span>
                </div>
            </div>

        </section>
    );
}

export default IntroduceCampaignComponent;
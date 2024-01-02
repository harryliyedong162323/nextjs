"use client";

import React, {useCallback, useEffect, useState,useRef} from "react";
import BaseImage from "@/components/base/image";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface campaignsChildren{
    id:number,
    mImg:string,
    pImg:string,
}
interface campaignsContent {
    id:number,
    title:string,
    des:string,
    active:boolean,
    children:campaignsChildren[]
}


const campaigns:campaignsContent[] = [
    {
        id:0,
        title:'NAME of the store',
        des:'Bring the drinking occasion to life in a way Bring the drinking occasion...',
        active:false,
        children:[
            {
                id:0,
                mImg:require("../../../public/assets/nearYou/kv-1.png"),
                pImg:require("../../../public/assets/nearYou/kv-1.png"),
            },
            {
                id:1,
                mImg:require("../../../public/assets/nearYou/kv-2.png"),
                pImg:require("../../../public/assets/nearYou/kv-2.png"),
            },
            {
                id:2,
                mImg:require("../../../public/assets/nearYou/kv-3.png"),
                pImg:require("../../../public/assets/nearYou/kv-3.png"),
            }
        ]
    },
    {
        id:1,
        title:'NAME of the store',
        des:'Bring the drinking occasion to life in a way Bring the drinking occasion...',
        active:false,
        children:[
            {
                id:0,
                mImg:require("../../../public/assets/nearYou/kv-2.png"),
                pImg:require("../../../public/assets/nearYou/kv-2.png"),
            },

        ]
    },
    {
        id:2,
        title:'NAME of the store',
        des:'Bring the drinking occasion to life in a way Bring the drinking occasion...',
        active:false,
        children:[
            {
                id:0,
                mImg:require("../../../public/assets/nearYou/kv-3.png"),
                pImg:require("../../../public/assets/nearYou/kv-3.png"),
            },

        ]
    },
    {
        id:3,
        title:'NAME of the store',
        des:'Bring the drinking occasion to life in a way Bring the drinking occasion...',
        active:false,
        children:[
            {
                id:0,
                mImg:require("../../../public/assets/nearYou/kv-1.png"),
                pImg:require("../../../public/assets/nearYou/kv-1.png"),
            },

        ]
    },
    {
        id:4,
        title:'NAME of the store',
        des:'Bring the drinking occasion to life in a way Bring the drinking occasion...',
        active:false,
        children:[
            {
                id:0,
                mImg:require("../../../public/assets/nearYou/kv-2.png"),
                pImg:require("../../../public/assets/nearYou/kv-2.png"),
            },

        ]
    },
    {
        id:5,
        title:'NAME of the store',
        des:'Bring the drinking occasion to life in a way Bring the drinking occasion...',
        active:false,
        children:[
            {
                id:0,
                mImg:require("../../../public/assets/nearYou/kv-3.png"),
                pImg:require("../../../public/assets/nearYou/kv-3.png"),
            },

        ]
    }
];

function NestedCarousel(props: any) {
    // Autoplay()
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, }, []);
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
    }, [emblaApi,onChangeScroll]);

    const activeFlag = props.activeFlag;

    const data = props.list;
    return (

        <div className={`${activeFlag == true && data.length != 1 ? 'pointer-events-auto mobile:pointer-events-none' : 'pointer-events-none'} overflow-hidden relative h-full w-full`} ref={emblaRef}>
            <div className="flex h-full w-full">
                {
                    data.map((item:any,index:number)=>{
                        return(
                            <div key={item.id} className="relative flex-grow-0 flex-shrink-0 basis-full">

                                <BaseImage
                                    mImg={item.mImg}
                                    pImg={item.pImg}
                                    alt={""}
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100}
                                ></BaseImage>
                            </div>
                        )
                    })
                }
            </div>

            <div className={` absolute mt-30px left-41px bottom-41px w-full items-center justify-start mobile:bottom-50px  paid:bottom-29px paid:left-29px  ${activeFlag == true ? 'flex mobile:hidden' : 'hidden'}`}>
                {data.length == 1 ? null : data.map((item:any, index:number) => {
                    return (
                        <div
                            key={index}
                            className={`h-4px mx-4px inline-block rounded-tr-10px rounded-bl-10px cursor-pointer paid:mx-3px paid:h-3px ${
                                currentIndex === index
                                    ? "bg-[#fff] w-41px paid:w-29px"
                                    : "bg-[#969797] w-16px paid:w-16px"
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

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, }, [Autoplay()]);
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
    }, [emblaApi,onChangeScroll]);




    const data = props.list
    const children = data.children;
    return (

        <div>
            <div className={`h-246px overflow-hidden relative  w-full`} ref={emblaRef}>
                <div className="flex h-full w-full">
                    {
                        children.map((item:any,index:number)=>{
                            return(
                                <div key={item.id} className="relative flex-grow-0 flex-shrink-0 basis-full">

                                    <BaseImage
                                        mImg={item.mImg}
                                        pImg={item.pImg}
                                        alt={""}
                                        layout="fill"
                                        objectFit="cover"
                                        quality={100}
                                    ></BaseImage>
                                </div>
                            )
                        })
                    }
                </div>

                <div className={` mt-30px absolute z-20 bottom-25px  w-full items-center justify-center flex`}>
                    {children.map((item:any, index:number) => {
                        return (
                            <div
                                key={index}
                                className={`h-4px mx-4px inline-block rounded-tr-10px rounded-bl-10px cursor-pointer paid:mx-3px paid:h-3px ${
                                    currentIndex === index
                                        ? "bg-[#fff] w-41px paid:w-29px"
                                        : "bg-[#969797] w-16px paid:w-16px"
                                }`}
                                onClick={() => scrollTo(index)}
                            ></div>
                        );
                    })}
                </div>
            </div>

            <div className="pt-43px pl-22px pr-25px">
                <div className="select-none font-Grotesque-Medium font-medium text-18px pb-15px text-20px ">{data.title}</div>
                <div className={`select-none font-Grotesque-Regular font-medium w-full  justify-between items-center flex  `}>
                    <span className="w-[85%] truncate text-14px ">{data.des}</span>
                    <span className="cursor-pointer bg-cover bg-[url('/assets/nearYou/more.png')] w-21px h-21px  "></span>
                </div>
            </div>

        </div>
    );
}





function NearYouComponent(props: any) {

    const headStyle = props.data.entry.headStyle;

    // Autoplay()
    const [emblaRef, emblaApi] = useEmblaCarousel({ align:'start',loop: true,watchDrag:false }, []);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [campaignData,setCampaignData] = useState(campaigns);
    const [campaignLoadFlag,setCampaignLoadFlag] = useState(false);

    const computedActiveDrop = (index:number)=>{

        const updatedData:campaignsContent[] = campaignData.map((item:any) => {
            if (item.id === index) {
                return { ...item, active: true };
            }else{
                return item;
            }

        });
        // console.log(updatedData)

        setCampaignData(updatedData)

        setTimeout(()=>{
            setCampaignLoadFlag(true)
        },1000);


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

    const scrollNext = ()=>{
        if(!campaignLoadFlag) return false
        emblaApi?.scrollNext();
        setCampaignLoadFlag(false)
    }
    const scrollPrev = ()=>{
        if(!campaignLoadFlag) return false
        emblaApi?.scrollPrev();
        setCampaignLoadFlag(false)
    }

    useEffect(() => {
        if (!emblaApi) return;
        computedActiveDrop(0);
        emblaApi?.on("select", onChangeScroll);

    }, [emblaApi,onChangeScroll]);


    return (
        <section className="w-full h-screen overflow-hidden bg-while relative select-none  ">

            <input type="hidden" value={headStyle}/>
            <div className="pt-104px uppercase font-AlbertusNova-Regular font-normal text-33px text-center paid:text-23px mobile:text-20px mobile:pt-77px">Wildmoor near you</div>


            <div className="w-full pt-20px hidden mobile:block">
                {<MobileCarousel list={campaignData[0]}></MobileCarousel>}
            </div>


            <div className="relative  overflow-hidden ml-[10%] h-630px pt-80px paid:pt-57px paid:ml-[7%] paid:h-450px mobile:ml-[0] mobile:pt-50px mobile:ml-22px mobile:h-auto" ref={emblaRef}>
                <div className="flex text-dark-grey items-end pb-40px paid:pb-28px">

                    {
                        campaignData.map((item:any,index:number)=>{

                            return (
                                <div  key={item.id} className={` ml-25px h-auto paid:ml-17px relative`}>

                                  {/*<div className={`float-left`}>*/}
                                      <div className={`transition-all ease-in-out origin-left duration-1000 relative ${item.active == true ? 'w-615px paid:w-439px mobile:w-192px' : 'w-406px paid:290px mobile:w-192px'}`}>
                                          <div className={`relative transition-all ease-in-out  origin-left  duration-500 mb-40px paid:mb-28px ${item.active == true ? 'h-455px paid:h-325px mobile:h-166px' : 'h-406px paid:h-290px mobile:h-166px'}`}>
                                              {/*<BaseImage*/}
                                              {/*    mImg={item.mImg}*/}
                                              {/*    pImg={item.pImg}*/}
                                              {/*    alt={""}*/}
                                              {/*    layout="fill"*/}
                                              {/*    objectFit="cover"*/}
                                              {/*    quality={100}*/}
                                              {/*></BaseImage>*/}


                                              {
                                                  <NestedCarousel list={item.children} activeFlag={item.active}></NestedCarousel>
                                              }

                                          </div>


                                          <div className="w-500px select-none font-Grotesque-Medium font-medium text-18px paid:text-12px mobile:text-16px">{item.title}</div>
                                          <div className={`select-none font-Grotesque-Regular font-medium w-full absolute left-0 bottom-[-25px] z-20 justify-between items-center paid:bottom-[-17px]  ${item.active == true ? 'flex mobile:hidden' : 'hidden'}`}>
                                              <span className="w-[70%] truncate paid:w-[50%] ">{item.des}</span>
                                              <span className="cursor-pointer bg-cover bg-[url('/assets/nearYou/more.png')] w-30px h-30px paid:w-21px paid:h-21px"></span>
                                          </div>
                                      </div>


                                  {/*</div>*/}

                                </div>
                            );
                        })
                    }



                </div>
            </div>


            <div className="flex justify-end pr-10">
                <div>
                    {/*${currentIndex == 0 ? "bg-[url('/assets/nearYou/prev.png')]" : "bg-[url('/assets/nearYou/prev-active.png')]"}*/}
                    <span className={`cursor-pointer bg-contain bg-[url('/assets/nearYou/prev-active.png')]  w-44px h-44px inline-block align-middle mr-7px paid:w-31px paid:h-31px paid:mr-5px mobile:w-26px mobile:h-26px`} onClick={()=>{scrollPrev()}}></span>
                    {/*${currentIndex == campaignData.length-1 ? "bg-[url('/assets/nearYou/next.png')]" : "bg-[url('/assets/nearYou/next-active.png')]"}*/}
                    <span className={`cursor-pointer bg-contain bg-[url('/assets/nearYou/next-active.png')]  w-44px h-44px inline-block align-middle paid:w-31px paid:h-31px mobile:w-26px mobile:h-26px`} onClick={()=>{scrollNext()}}></span>
                </div>
            </div>

        </section>
    );
}

export default NearYouComponent;

"use client";

import React, {useCallback, useEffect, useState,useRef} from "react";
import BaseImage from "@/components/base/image";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";






interface entryContent{
    headStyle:string,
    nearYouContentTitle:string,
    nearYouComponentStoresCollection:nearYouComponentStoresCollectionContent
}
interface nearYouComponentStoresCollectionContent{
    items:Array<campaignsContent>
}



export interface propsContent{
    changeNavStatus:Function,
    scrollToPage:Function,

    data:{
        entry:entryContent,
        name:string,
        type:string,
    }
}



interface campaignsChildren{
    id:number,
    imagesCollection:{
        items:Array<campaignsImg>
    }

}

interface campaignsImg{
    altText:string,
    imagemobile:{
        url:string
    },
    imagepc:{
        url:string
    },
}

interface campaignsContent {
    nearYouId:number,
    howToBuyDetailComponentStoreName:string,
    howToBuyDetailComponentStoreAddress:string,
    nearYouActive:boolean,
    nearYouComponentNearYouCarouselImageCollection:{
        items:Array<campaignsChildren>
    }
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
                    data.map((item:campaignsChildren,index:number)=>{
                        return(
                            <div key={item.id} className="relative flex-grow-0 flex-shrink-0 basis-full">

                                <BaseImage
                                    mImg={item.imagesCollection.items[0].imagemobile.url}
                                    pImg={item.imagesCollection.items[0].imagepc.url}
                                    alt={item.imagesCollection.items[0].altText}
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100}
                                ></BaseImage>
                            </div>
                        )
                    })
                }
            </div>

            <div className={` absolute mt-30px left-41px bottom-41px w-full items-center justify-start mobile:bottom-50px  pad:bottom-29px pad:left-29px  ${activeFlag == true ? 'flex mobile:hidden' : 'hidden'}`}>
                {data.length == 1 ? null : data.map((item:any, index:number) => {
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




    const data = props.list
    const children = data.nearYouComponentNearYouCarouselImageCollection.items
    return (

        <div>
            {/*mobile:h-246px*/}
            <div className={`h-246px overflow-hidden relative  w-full mobile:h-143px`} ref={emblaRef}>
                <div className="flex h-full w-full">
                    {
                        children.map((item:campaignsChildren,index:number)=>{
                            return(
                                // item.id
                                <div key={item.id} className="relative flex-grow-0 flex-shrink-0 basis-full">

                                    <BaseImage
                                        mImg={item.imagesCollection.items[0].imagemobile.url}
                                        pImg={item.imagesCollection.items[0].imagepc.url}
                                        alt={item.imagesCollection.items[0].altText}
                                        layout="fill"
                                        objectFit="cover"
                                        quality={100}
                                    ></BaseImage>
                                </div>
                            )
                        })
                    }
                </div>

                <div className={` mt-30px absolute z-30 bottom-25px  w-full items-center justify-center flex`}>
                    {children.map((item:any, index:number) => {
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

            <div className="pt-43px pl-22px pr-25px">
                <div className="select-none font-Grotesque-Medium font-medium text-18px pb-15px text-20px ">{data.howToBuyDetailComponentStoreName}</div>
                <div className={`select-none font-Grotesque-Regular font-medium w-full  justify-between items-center flex  `}>
                    <span className="w-[85%] truncate text-14px ">{data.howToBuyDetailComponentStoreAddress}</span>
                    <span className="cursor-pointer bg-cover bg-[url('/assets/nearYou/more.png')] w-21px h-21px  mobile:w-21px mobile:h-21px"></span>
                </div>
            </div>

        </div>
    );
}





function NearYouComponent(props: propsContent) {
    // console.log(props)
    const headStyle = props.data.entry.headStyle;

    const campaigns = props.data.entry.nearYouComponentStoresCollection.items;
    const title = props.data.entry.nearYouContentTitle;
    const [emblaRef, emblaApi] = useEmblaCarousel({ align:'start',loop: true,watchDrag:false }, [Autoplay()]);


    const [currentIndex, setCurrentIndex] = useState(0);

    const [campaignData,setCampaignData] = useState(campaigns);
    const [campaignLoadFlag,setCampaignLoadFlag] = useState(false);

    const computedActiveDrop = (index:number)=>{

        const updatedData:campaignsContent[] = campaignData.map((item:any) => {
            if (item.nearYouId === index) {
                return { ...item, nearYouActive: true };
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
            // console.log(emblaApi?.selectedScrollSnap());
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
            <div className="pt-104px uppercase font-AlbertusNova-Regular font-normal text-33px text-center pad:text-23px mobile:text-20px mobile:pt-77px">{title}</div>


            <div className="w-full pt-20px hidden mobile:block mobile:pt-20px">
                {<MobileCarousel list={campaignData[0]}></MobileCarousel>}
            </div>
            <div className="absolute z-10 top-0 right-[0%] h-full w-[30%] bg-gradient-to-l from-[#f6f6f6f6] to-[transparent] mobile:hidden"></div>
            <div className="relative">
                <div className="relative  overflow-hidden ml-[10%] h-630px pt-80px pad:pt-57px pad:ml-[7%] pad:h-500px mobile:ml-[0] mobile:pt-50px mobile:ml-22px mobile:h-auto" ref={emblaRef}>
                    <div className="flex text-dark-grey items-end pb-40px pad:pb-28px">

                        {
                            campaignData.map((item:any,index:number)=>{

                                return (
                                    <div  key={item.nearYouId} className={` ml-25px h-auto pad:ml-17px relative mobile:ml-25px`}>

                                        {/*<div className={`float-left`}>*/}
                                        <div className={`transition-all ease-in-out origin-left duration-1000  relative ${item.nearYouActive == true ? 'w-615px pad:w-439px mobile:w-192px' : 'w-406px pad:290px mobile:w-192px'}`}>
                                            <div className={`relative transition-all ease-in-out  origin-left  duration-500 mb-40px pad:mb-28px ${item.nearYouActive == true ? 'h-455px pad:h-325px mobile:h-166px' : 'h-406px pad:h-290px mobile:h-166px'}`}>
                                                {/*<BaseImage*/}
                                                {/*    mImg={item.nearYouComponentNearYouCarouselImageCollection.items[0].imagesCollection.items[0].imagemobile.url}*/}
                                                {/*    pImg={item.nearYouComponentNearYouCarouselImageCollection.items[0].imagesCollection.items[0].imagepc.url}*/}
                                                {/*    alt={""}*/}
                                                {/*    layout="fill"*/}
                                                {/*    objectFit="cover"*/}
                                                {/*    quality={100}*/}
                                                {/*></BaseImage>*/}


                                                {
                                                    <NestedCarousel list={item.nearYouComponentNearYouCarouselImageCollection.items} activeFlag={item.nearYouActive}></NestedCarousel>
                                                }

                                            </div>


                                            <div className="w-500px select-none font-Grotesque-Medium font-medium text-18px pad:text-12px mobile:w-500px mobile:text-16px">{item.howToBuyDetailComponentStoreName}</div>
                                            <div className={`select-none font-Grotesque-Regular font-medium w-full absolute left-0 bottom-[-25px] z-20 justify-between items-center pad:bottom-[-25px]  ${item.nearYouActive == true ? 'flex mobile:hidden' : 'hidden'}`}>
                                                <span className="w-[70%] truncate pad:w-[50%] ">{item.howToBuyDetailComponentStoreAddress}</span>
                                                <span className="cursor-pointer bg-cover bg-[url('/assets/nearYou/more.png')] w-30px h-30px pad:w-21px pad:h-21px"></span>
                                            </div>
                                        </div>


                                        {/*</div>*/}

                                    </div>
                                );
                            })
                        }



                    </div>
                </div>

                <div className="absolute z-30 top-0 right-[0%] h-full w-[30%] bg-gradient-to-l from-[#f6f6f6f6] to-[transparent] mobile:from-[#ffffff94] mobile:block"></div>
            </div>

            <div className="flex justify-end pr-10 relative z-30">
                <div>
                    {/*${currentIndex == 0 ? "bg-[url('/assets/nearYou/prev.png')]" : "bg-[url('/assets/nearYou/prev-active.png')]"}*/}
                    <span className={`cursor-pointer bg-contain bg-[url('/assets/nearYou/prev-active.png')]  w-44px h-44px inline-block align-middle mr-7px pad:w-31px pad:h-31px pad:mr-5px mobile:w-26px mobile:h-26px`} onClick={()=>{scrollPrev()}}></span>
                    {/*${currentIndex == campaignData.length-1 ? "bg-[url('/assets/nearYou/next.png')]" : "bg-[url('/assets/nearYou/next-active.png')]"}*/}
                    <span className={`cursor-pointer bg-contain bg-[url('/assets/nearYou/next-active.png')]  w-44px h-44px inline-block align-middle pad:w-31px pad:h-31px mobile:w-26px mobile:h-26px`} onClick={()=>{scrollNext()}}></span>
                </div>
            </div>

        </section>
    );
}

export default NearYouComponent;

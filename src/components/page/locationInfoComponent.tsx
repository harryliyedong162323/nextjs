"use client";

import React, { useEffect, useState } from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
import Marquee from "react-fast-marquee";


interface ComponentData {
    id: number;
    bg: {
        mImg: string;
        pImg: string;
    };
    productList: Array<{
        id: number
        link: string,
        name: string
        mImg: string;
        pImg: string;
    }>;
    description: string;
    scrollText: string;
}

const componentData: ComponentData = {
    id: 1,
    bg: {
        pImg: require("../../../public/assets/story/brand_story_chatper_end.png"),
        mImg: require("../../../public/assets/story/brand_story_chatper_end.png"),
    },
    productList: [{
        id: 1,

        link:"/howToBuyDetail",
        name: "Taiwan region",
        mImg: require("../../../public/assets/howToBuy/list-1.png"),
        pImg: require("../../../public/assets/howToBuy/list-1.png"),
    },
        {
            id: 2,
            link:"/howToBuyDetail",
            name: "ANCIENT MOORLAND",
            mImg: require("../../../public/assets/howToBuy/list-2.png"),
            pImg: require("../../../public/assets/howToBuy/list-2.png"),
        },
        {
            id: 3,
            link:"/howToBuyDetail",
            name: "DARK MOORLAND",
            mImg: require("../../../public/assets/howToBuy/list-1.png"),
            pImg: require("../../../public/assets/howToBuy/list-1.png"),
        },
        {
            id: 4,
            link:"/howToBuyDetail",
            name: "RUGGED COAST",
            mImg: require("../../../public/assets/howToBuy/list-2.png"),
            pImg: require("../../../public/assets/howToBuy/list-2.png"),
        },
        {
            id: 5,
            link:"/howToBuyDetail",
            name: "TROPICAL COAST",
            mImg: require("../../../public/assets/howToBuy/list-1.png"),
            pImg: require("../../../public/assets/howToBuy/list-1.png"),
        },
        {
            id: 6,
            link:"/howToBuyDetail",
            name: "WAKING FOREST",
            mImg: require("../../../public/assets/howToBuy/list-2.png"),
            pImg: require("../../../public/assets/howToBuy/list-2.png"),
        }],
    description:
        "But wild wind-swept moorlands, savage waves breaking across jagged shorelines. And rolling mountains shrouded in mist.",
    scrollText: "Scroll to explore more",
};





function LocationInfoComponent(props: any) {
    const headStyle = props.data.entry.headStyle;
    const [data, setData] = useState<ComponentData>(componentData);
    const [play, setPlay] = useState<boolean>(true);


    const handleMouseEnter = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {

        setPlay(false)

    };

    const handleMouseLeave = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setPlay(true)
    };

    return (
        <section id="RegionSelect" data-anchor={0} className="w-full h-screen overflow-hidden bg-cover bg-[url('/assets/howToBuy/bg.png')] bg-[#E6E7E8] relative select-none">
            <input type="hidden" value={headStyle}/>

            <div className="pt-104px uppercase font-AlbertusNova-Regular font-normal text-33px text-center paid:pt-110px paid:text-23px mobile:pt-84px mobile:text-24px">Find A Drop of Wilderness Near You</div>



            <div className="w-full mt-145px paid:mt-103px mobile:mt-132px ">
                {/*<div className="absolute z-10 top-0 -right-25px h-full w-125px bg-gradient-to-l from-[#00000090] to-[#00000000]"></div>*/}
                <Marquee play={play}>
                    <div className="w-250px mobile:hidden"></div>
                    { data.productList.map((item, index) => {
                        return (
                            <div

                                key={index}
                                className={`flex flex-nowrap items-center w-[50vw] mobile:w-[100vw]`}
                                 >
                                {/*${ index % 4 == 1 ? "mt-100px" : "" } ${ index % 4 == 2 ? "mt-50px" : "" }  ${ index % 4 == 3 ? "mt-150px" : "" }*/}
                                <BaseLink
                                    onMouseEnter={(e)=>{handleMouseEnter(e)}}
                                    onMouseLeave={(e)=>{handleMouseLeave(e)}}
                                    link={item.link}
                                >
                                    <div className={`relative inline-block align-middle w-152px h-152px mr-20px paid:mr-14px mobile:mr-12px paid:w-108px paid:h-108px mobile:w-91px mobile:h-91px `}>
                                        <BaseImage

                                            mImg={item.mImg}
                                            pImg={item.pImg}
                                            alt={""}
                                            layout="fill"
                                            objectFit="cover"
                                            quality={50}
                                        ></BaseImage>
                                    </div>
                                    <div className="text-black inline-block align-bottom font-AlbertusNova-Light items-center w-291px paid:w-208px mobile:w-175px">
                                        <div className="leading-tight uppercase text-33px paid:text-23px mobile:text-20px">{item.name}</div>

                                        <div className="w-195px h-60px mt-16px paid:mt-11px mobile:mt-10px">
                                            <BaseImage
                                                mImg={require("../../../public/assets/howToBuy/btn.png")}
                                                pImg={require("../../../public/assets/howToBuy/btn.png")}
                                                alt={""}

                                                objectFit="contain"
                                                quality={100}
                                            ></BaseImage>
                                        </div>
                                    </div>
                                </BaseLink>
                            </div>
                        )
                    })}
                </Marquee>
            </div>

            <div className="w-full mt-148px paid:mt-105px mobile:mt-128px ">
                {/*<div className="absolute z-10 top-0 -right-25px h-full w-125px bg-gradient-to-l from-[#00000090] to-[#00000000]"></div>*/}
                <Marquee play={play}>
                    { data.productList.map((item, index) => {
                        return (
                            <div

                                key={index}
                                className={`flex flex-nowrap items-center w-[50vw] mobile:w-[100vw]`}
                                >
                                {/*${ index % 4 == 1 ? "mt-100px" : "" } ${ index % 4 == 2 ? "mt-50px" : "" }  ${ index % 4 == 3 ? "mt-150px" : "" }*/}
                                <BaseLink
                                    onMouseEnter={(e)=>{handleMouseEnter(e)}}
                                    onMouseLeave={(e)=>{handleMouseLeave(e)}}
                                    link={item.link}
                                >
                                    <div className={`relative inline-block align-middle  w-152px h-152px mr-20px paid:mr-14px mobile:mr-12px paid:w-108px paid:h-108px mobile:w-91px mobile:h-91px `}>
                                        <BaseImage
                                            mImg={item.mImg}
                                            pImg={item.pImg}
                                            alt={""}
                                            layout="fill"
                                            objectFit="cover"
                                            quality={50}
                                        ></BaseImage>
                                    </div>
                                    <div className="text-black inline-block align-bottom font-AlbertusNova-Light items-center w-291px paid:w-208px mobile:w-175px">
                                        <div className="leading-tight uppercase text-24px paid:text-20px mobile:text-16px">{item.name}</div>

                                        <div className="w-195px h-60px mt-16px paid:mt-11px mobile:mt-10px">
                                            <BaseImage
                                                mImg={require("../../../public/assets/howToBuy/btn.png")}
                                                pImg={require("../../../public/assets/howToBuy/btn.png")}
                                                alt={""}

                                                objectFit="contain"
                                                quality={100}
                                            ></BaseImage>
                                        </div>
                                    </div>
                                </BaseLink>
                            </div>
                        )
                    })
                    }
                </Marquee>
            </div>


        </section>
    );
}

export default LocationInfoComponent;

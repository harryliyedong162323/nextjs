"use client";

import React, { useEffect, useState,CSSProperties  } from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
import Marquee from "react-fast-marquee";
import Select, {SingleValue} from 'react-select';
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';







interface entryContent{
    headStyle:string,
    locationInfoComponentTitle:string,

    locationInfoComponentStoreListCollection:locationInfoComponentStoreListCollectionContent,

}


interface locationInfoComponentStoreListCollectionContent{
    items:Array<ComponentData>
}



interface propsContent{
    changeNavStatus:()=>{},
    scrollToPage:()=>{},
    data:{
        entry:entryContent,
        name:string,
        type:string,
    }
}





interface locationData {
    id:number,
    name:string,
    des:string,
    link:string,
    listImg:{
        mImg: string,
        pImg: string,
    }
}

interface ComponentData {
    id: number;

    productList: Array<{
        id: number
        location: Array<locationData>,
        name: string
        mImg: string;
        pImg: string;
    }>;

}


const locationList:Array<locationData> = [
    {
        id:0,
        name:'The Wildmoor House Shanghai',
        des:'Step inside The Wildmoor House, where stories of the brand come to life and the art of whisky making finds its ultimate expression.',
        link:'/howToBuyDetail',
        listImg:{
            mImg: require("../../../public/assets/howToBuy/list-1.png"),
            pImg: require("../../../public/assets/howToBuy/list-1.png"),
        }
    },{
        id:1,
        name:'The Wildmoor House Shanghai',
        des:'Step inside The Wildmoor House, where stories of the brand come to life and the art of whisky making finds its ultimate expression.',
        link:'/howToBuyDetail',
        listImg:{
            mImg: require("../../../public/assets/howToBuy/list-1.png"),
            pImg: require("../../../public/assets/howToBuy/list-1.png"),
        }
    },
    {
        id:2,
        name:'The Wildmoor House Shanghai',
        des:'Step inside The Wildmoor House, where stories of the brand come to life and the art of whisky making finds its ultimate expression.',
        link:'/howToBuyDetail',
        listImg:{
            mImg: require("../../../public/assets/howToBuy/list-1.png"),
            pImg: require("../../../public/assets/howToBuy/list-1.png"),
        }
    },
    {
        id:3,
        name:'The Wildmoor House Shanghai',
        des:'Step inside The Wildmoor House, where stories of the brand come to life and the art of whisky making finds its ultimate expression.',
        link:'/howToBuyDetail',
        listImg:{
            mImg: require("../../../public/assets/howToBuy/list-1.png"),
            pImg: require("../../../public/assets/howToBuy/list-1.png"),
        }
    },
    {
        id:4,
        name:'The Wildmoor House Shanghai',
        des:'Step inside The Wildmoor House, where stories of the brand come to life and the art of whisky making finds its ultimate expression.',
        link:'/howToBuyDetail',
        listImg:{
            mImg: require("../../../public/assets/howToBuy/list-1.png"),
            pImg: require("../../../public/assets/howToBuy/list-1.png"),
        }
    },
]




const componentData: ComponentData = {
    id: 1,

    productList: [
        {
        id: 0,

        location:[
            ...locationList
        ],
        name: "CHINA MAINLAND",
        mImg: require("../../../public/assets/howToBuy/list-1.png"),
        pImg: require("../../../public/assets/howToBuy/list-1.png"),
    },
        {
            id: 1,
            location:[
                ...locationList
            ],
            name: "TAIWAN REGION",
            mImg: require("../../../public/assets/howToBuy/list-2.png"),
            pImg: require("../../../public/assets/howToBuy/list-2.png"),
        },
        {
            id: 2,
            location:[
                {
                    id:2,
                    name:'The Wildmoor House Shanghai',
                    des:'Step inside The Wildmoor House, where stories of the brand come to life and the art of whisky making finds its ultimate expression.',
                    link:'/howToBuyDetail',
                    listImg:{
                        mImg: require("../../../public/assets/howToBuy/list-1.png"),
                        pImg: require("../../../public/assets/howToBuy/list-1.png"),
                    }
                }
            ],
            name: "SINGAPORE",
            mImg: require("../../../public/assets/howToBuy/list-1.png"),
            pImg: require("../../../public/assets/howToBuy/list-1.png"),
        },
        {
            id: 3,
            location:[
                ...locationList
            ],
            name: "KOREA",
            mImg: require("../../../public/assets/howToBuy/list-2.png"),
            pImg: require("../../../public/assets/howToBuy/list-2.png"),
        },
        {
            id: 4,
            location:[
                {
                    id:4,
                    name:'The Wildmoor House Shanghai',
                    des:'Step inside The Wildmoor House, where stories of the brand come to life and the art of whisky making finds its ultimate expression.',
                    link:'/howToBuyDetail',
                    listImg:{
                        mImg: require("../../../public/assets/howToBuy/list-1.png"),
                        pImg: require("../../../public/assets/howToBuy/list-1.png"),
                    }
                }
            ],
            name: "UNITED KINGDOM",
            mImg: require("../../../public/assets/howToBuy/list-1.png"),
            pImg: require("../../../public/assets/howToBuy/list-1.png"),
        },
        {
            id: 5,
            location:[
                {
                    id:5,
                    name:'The Wildmoor House Shanghai',
                    des:'Step inside The Wildmoor House, where stories of the brand come to life and the art of whisky making finds its ultimate expression.',
                    link:'/howToBuyDetail',
                    listImg:{
                        mImg: require("../../../public/assets/howToBuy/list-1.png"),
                        pImg: require("../../../public/assets/howToBuy/list-1.png"),
                    }
                }
            ],
            name: "WAKING FOREST",
            mImg: require("../../../public/assets/howToBuy/list-2.png"),
            pImg: require("../../../public/assets/howToBuy/list-2.png"),
        }],

};

const options = [
    { value: '0', label: 'CHINA MAINLAND' },
    { value: '1', label: 'TAIWAN REGION' },
    { value: '2', label: 'SINGAPORE' },
    { value: '3', label: 'KOREA' },
    { value: '4', label: 'UNITED KINGDOM' },
];



interface OptionType {
    value: string;
    label: string;
}

function LocationStoreList(props: any){

    const location = props.location.location;
    const id = props.location.id;

    const customStyles = {
        control: (styles:any) => ({
            ...styles,
            backgroundColor: 'transparent',
            color:'#000',
            border:'1px solid #696969',
            ':hover': {
                border:'1px solid #696969',
            },

        }),
        dropdownIndicator: (styles:object) => ({
            ...styles,
            color:'#000',
            ':hover': {
                color:'#000',
            },
        }),
        placeholder: (styles:object) => ({
            ...styles,
            color:'#000',
        }),
        singleValue: (styles:object) => ({
            ...styles,
            color:'#000',
        }),
    };
    const [centeredSlides,setCenteredSlides] = useState(true);
    const [slidesPerView, setSlidesPerView] = useState<number>(3);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [swiper, setSwiper] = useState<any>(null);
    const [locationInfo,setLocationInfo] = useState(location);
    const [selectedOption, setSelectedOption] = useState(options[0] as OptionType);
    const [spaceBetween,setSpaceBetween] = useState(90);
    const [selectedReady,setSelectReady] = useState(false);
    useEffect(()=>{

        const currentLocation = options.filter((item:any)=>{
            return parseInt(item.value) == id;
        })


        setSelectedOption(currentLocation[0])
    },[props])
    useEffect(()=>{
        setSelectReady(true)
    },[selectedOption])
    const scrollNext = ()=>{


        swiper?.slideNext();

    }
    const scrollPrev = ()=>{


        swiper?.slidePrev();
    }

    const handleChange = (selectedOption: SingleValue<{ value: string; label: string } | null>) => {
        if (selectedOption) {
            const value = (selectedOption as OptionType).value;
            console.log('Selected option:', value);

            setLocationInfo(componentData.productList[parseInt(value)].location)

            // 执行其他逻辑操作
        }
    };



    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            // const newAlignment = windowWidth <= 768 ? 'end' : 'center';
            // setAlignment(newAlignment);
            if(windowWidth <= 768){

                setSlidesPerView(2);
                setSpaceBetween(200);
            }else{
                setSlidesPerView(3);
                setSpaceBetween(0);
            }


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

    return (
        <section className="pt-138px  pad:pt-98px   mobile:pt-112px">

            <div className="pb-45px relative z-20 pad:pb-32px mobile:pb-35px">
                {
                    selectedReady ? <Select
                        styles={customStyles}
                        className={`text-14px pt-18px pb-18px mx-auto pr-25px bg-transparent w-255px h-55px pad:pt-12px pad:pb-12px pad:pl-0 mobile:pl-0`}
                        defaultValue={selectedOption}
                        options={options}
                        onChange={(e: SingleValue<{value: string, label: string} | null>)=>{handleChange(e)}}
                    /> : null
                }

            </div>


            <div>
                {/*modules={[Autoplay]}*/}
                <Swiper



                    slidesPerView={slidesPerView}
                    loop={true}

                    spaceBetween={spaceBetween}

                    centeredSlides={centeredSlides}
                    speed={1500}
                    allowTouchMove={false}
                    autoplay={
                        {

                            delay: 3000, // 自动播放的间隔时间（以毫秒为单位）
                            disableOnInteraction: false // 用户互动后是否停止自动播放
                        }
                    }


                    onSlideChange={(e)=>{

                        setCurrentIndex(e.realIndex);

                    }}
                    onSwiper={(swiper) => {


                        setSwiper(swiper);

                    }}
                >

                    {
                        locationInfo.length>0 && locationInfo.map((item:any,index:number)=>{
                            return (
                                <div key={item.id}>
                                    <SwiperSlide key={item.id} className={`  pl-20px pr-20px `}>
                                        <div className={`w-full   mobile:w-265px mobile:pl-0 mobile:pr-0`}>
                                            <BaseLink link={item.link} className="text-black">
                                                <div className="relative w-full h-320px  pad:h-230px mobile:w-265px mobile:h-240px">
                                                    <BaseImage
                                                        mImg={item.listImg.mImg}
                                                        pImg={item.listImg.pImg}
                                                        alt={""}
                                                        layout="fill"
                                                        objectFit="cover"
                                                        quality={100}
                                                    ></BaseImage>
                                                </div>
                                                <div className="pt-25px pad:pt-17px mobile:pt-29px">
                                                    <div className="pb-16px font-medium text-31px font-AlbertusNova-Regular pad:text-22px pad:pb-11px w-auto mobile:text-16px mobile:pb-15px">{item.name}</div>
                                                    <div className="w-[85%]  text-15px font-Grotesque-Regular font-normal pad:text-10px mobile:text-11px ">{item.des}</div>
                                                    <div className="mt-25px w-40px h-40px bg-contain bg-[url('/assets/more.png')]  pad:w-28px pad:h-28px pad:mt-17px mobile:mt-23px mobile:w-24px mobile:h-24px"></div>

                                                </div>
                                            </BaseLink>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            )
                        })
                    }





                </Swiper>
            </div>


            <div className="flex justify-end pr-10 pt-97px pad:pt-69px">
                <div>
                    {/*${currentIndex == 0 ? "bg-[url('/assets/nearYou/prev.png')]" : "bg-[url('/assets/nearYou/prev-active.png')]"}*/}
                    <span className={`cursor-pointer bg-contain bg-[url('/assets/nearYou/prev-active.png')] w-44px h-44px inline-block align-middle mr-7px pad:w-31px pad:h-31px pad:mr-5px mobile:w-26px mobile:h-26px`} onClick={()=>{scrollPrev()}}></span>
                    <span className={`cursor-pointer bg-contain bg-[url('/assets/nearYou/next-active.png')] w-44px h-44px inline-block align-middle pad:w-31px pad:h-31px mobile:w-26px mobile:h-26px`} onClick={()=>{scrollNext()}}></span>
                    {/*${currentIndex == locationInfo.length-2 ? "bg-[url('/assets/nearYou/next.png')]" : "bg-[url('/assets/nearYou/next-active.png')]"}*/}
                </div>
            </div>



        </section>
    )
}


function LocationInfoComponent(props: any) {

    console.log(props);

    const headStyle = props.data.entry.headStyle;
    const [data, setData] = useState<ComponentData>(componentData);
    const [play, setPlay] = useState<boolean>(true);
    const [isChooseMarquee,setIsChooseMarquee] = useState<boolean>(false);
    const [locationInfo,setLocationInfo] = useState({});
    const handleClick = (item:any)=>{
        setIsChooseMarquee(true);
        setLocationInfo({
            id:item.id,
            location:item.location
        });
    }
    const handleMouseEnter = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {

        setPlay(false)

    };

    const handleMouseLeave = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setPlay(true)
    };

    return (
        <section id="RegionSelect" data-anchor={0} className="w-full h-screen overflow-hidden bg-cover bg-[url('/assets/howToBuy/bg.png')] bg-[#E6E7E8] relative select-none">
            <input type="hidden" value={headStyle}/>


            {
                isChooseMarquee == false ? <div>
                    <div className="pt-104px uppercase font-AlbertusNova-Regular font-normal text-33px text-center pad:pt-110px pad:text-23px mobile:pt-112px mobile:text-24px">Find A Drop of Wilderness Near You</div>
                    <div className=" ">
                        <div className="w-full mt-145px pad:mt-243px mobile:mt-132px  ">

                            <Marquee play={play}>
                                <div className="w-250px mobile:hidden"></div>
                                { [data.productList[0],data.productList[1],data.productList[2]].map((item, index) => {
                                    return (
                                        <div

                                            key={index}
                                            className={`flex flex-nowrap items-center w-[50vw] mobile:w-[100vw]`}
                                        >

                                   <span
                                       className={`cursor-pointer`}
                                       onClick={()=>{handleClick(item)}}
                                       onMouseEnter={(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{handleMouseEnter(e)}}
                                       onMouseLeave={(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{handleMouseLeave(e)}}
                                   >

                                        <div className={`relative inline-block align-middle w-152px h-152px mr-20px pad:mr-14px mobile:mr-12px pad:w-108px pad:h-108px mobile:w-91px mobile:h-91px `}>
                                            <BaseImage

                                                mImg={item.mImg}
                                                pImg={item.pImg}
                                                alt={""}
                                                layout="fill"
                                                objectFit="cover"
                                                quality={50}
                                            ></BaseImage>
                                        </div>
                                        <div className="text-black inline-block align-bottom font-AlbertusNova-Light items-center w-291px pad:w-208px mobile:w-175px">
                                            <div className="leading-tight uppercase text-33px pad:text-23px mobile:text-20px whitespace-nowrap">{item.name}</div>

                                            <div className="w-195px h-60px mt-16px pad:mt-11px mobile:mt-10px">
                                                <BaseImage
                                                    mImg={require("../../../public/assets/howToBuy/btn.png")}
                                                    pImg={require("../../../public/assets/howToBuy/btn.png")}
                                                    alt={""}

                                                    objectFit="contain"
                                                    quality={100}
                                                ></BaseImage>
                                            </div>
                                        </div>
                                   </span>
                                        </div>
                                    )
                                })}
                            </Marquee>
                        </div>

                        <div className="w-full mt-148px pad:mt-105px mobile:mt-128px ">

                            <Marquee play={play}>
                                { [data.productList[3],data.productList[4]].map((item, index) => {
                                    return (
                                        <div

                                            key={index}
                                            className={`flex flex-nowrap items-center w-[50vw] mobile:w-[100vw]`}
                                        >

                                    <span
                                        className={`cursor-pointer`}
                                        onClick={()=>{handleClick(item)}}
                                        onMouseEnter={(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{handleMouseEnter(e)}}
                                        onMouseLeave={(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{handleMouseLeave(e)}}
                                    >


                                        <div className={`relative inline-block align-middle  w-152px h-152px mr-20px pad:mr-14px mobile:mr-12px pad:w-108px pad:h-108px mobile:w-91px mobile:h-91px `}>
                                            <BaseImage
                                                mImg={item.mImg}
                                                pImg={item.pImg}
                                                alt={""}
                                                layout="fill"
                                                objectFit="cover"
                                                quality={50}
                                            ></BaseImage>
                                        </div>
                                        <div className="text-black inline-block align-bottom font-AlbertusNova-Light items-center w-291px pad:w-208px mobile:w-175px">
                                            <div className="leading-tight uppercase text-33px pad:text-23px mobile:text-20px whitespace-nowrap">{item.name}</div>

                                            <div className="w-195px h-60px mt-16px pad:mt-11px mobile:mt-10px">
                                                <BaseImage
                                                    mImg={require("../../../public/assets/howToBuy/btn.png")}
                                                    pImg={require("../../../public/assets/howToBuy/btn.png")}
                                                    alt={""}

                                                    objectFit="contain"
                                                    quality={100}
                                                ></BaseImage>
                                            </div>
                                        </div>
                                  </span>
                                        </div>
                                    )
                                })
                                }
                            </Marquee>
                        </div>
                    </div>

                </div> : <LocationStoreList location={locationInfo}></LocationStoreList>

            }

        </section>
    );
}

export default LocationInfoComponent;

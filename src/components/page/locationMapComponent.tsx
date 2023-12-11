"use client";
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
import BaseVideo from "@/components/base/video";
import {any, number, object} from "prop-types";

const Baidu:React.ComponentType<{}> = dynamic(() => import('@/components/map/baidu'));


function LocationMapComponent(props: any) {

    // const block1Image = props.data.entry.fields.block1Image.sys.fields;

    //mock
    const cityInfo:Array<object> = [
        {
            id:0,
            name:'CHINA mainland',
            point:{
                lng: -73.868851,
                lat: 40.843036
            },
            zoom:10,
        },
        {
            id:1,
            name:'Taiwan region',
            point:{
                lng: 116.410593,
                lat: 39.915378
            },
            zoom:10,
        },
        {
            id:2,
            name:'SINGAPORE',
            point:{
                lng: 121.482265,
                lat: 31.235929
            },
            zoom:10,
        },
        {
            id:3,
            name:'KOREA',
            point:{
                lng: 120.205162,
                lat: 30.249089
            },
            zoom:10,
        },
        {
            id:4,
            name:'UNited kingdom',
            point:{
                lng: 120.581489,
                lat: 31.303071
            },
            zoom:10,
        }
    ]


    const items = ['Item 1', 'Item 2', 'Item 3'];
    const [browser,setBrowser] = useState(false);

    const [selectedItem, setSelectedItem] = useState({
        name:'UNited Kingdom',
        id:4,
        point: {

        }
    });


    const [selectLocation, setSelectLocation] = useState(0);

    let [selectZoom, setSelectZoom] = useState(10);



    const [openSelected, setOpenSelected] = useState(false);

    const handleItemClick = (info:any):void => {
        setSelectedItem(info);
    };

    const handleOpenSelected = (flag:boolean):void => {
        setOpenSelected(flag);
    };

    const handleLocation = ():void => {
        setSelectLocation(selectLocation+1);
    };


    const handleSelectAdd = () => {
        if(selectZoom == 20){
            return false;
        }
        setSelectZoom(selectZoom++);

    };

    const handleSelectReduce = () => {
        if(selectZoom == 0){
            return false;
        }
        setSelectZoom(selectZoom--);

    };

    useEffect(():void => {

        setBrowser(true);

    }, [browser]);


    return (
        <div className="overflow-hidden">
            <div className="h-screen relative">
                {  // @ts-ignore
                    browser ? <Baidu info={selectedItem} location={selectLocation} zoom={selectZoom}></Baidu> : null
                }


                <div className="absolute z-20 top-[37px] right-[50px] grid grid-rows-3 mobile:top-[25px] mobile:right-[20px]">
                    <div className="bg-[url('/assets/add.png')] bg-contain w-48px h-48px inline-block align-middle cursor-pointer mobile:w-32px mobile:h-32px" onClick={()=>handleSelectAdd()}></div>
                    <div className="bg-[url('/assets/reduce.png')] bg-contain w-48px h-48px inline-block align-middle cursor-pointer mobile:w-32px mobile:h-32px" onClick={()=>handleSelectReduce()}></div>
                    <div className="bg-[url('/assets/positioning.png')] bg-contain w-48px h-48px inline-block align-middle cursor-pointer mobile:w-32px mobile:h-32px" onClick={()=>handleLocation()}></div>
                </div>

                <div className="absolute z-20 left-[50px] bottom-[100px] select-none font-Grotesque-Medium font-medium text-black mobile:hidden">
                    <span className="bg-[url('/assets/location_black.png')] bg-contain w-13px h-17px inline-block align-middle mr-14px"></span>
                    <span className="text-14px inline-block align-middle">Select your location</span>
                </div>

                <div className="absolute left-0 bottom-0 z-20 w-full overflow-hidden">
                    <div className="hidden flex justify-between pr-25px pl-25px h-57px bg-[rgba(0,0,0,.4)] backdrop-opacity-10 text-white select-none font-Grotesque-Regular font-medium mobile:flex active:bg-[rgba(0,0,0,.6)]"  onClick={()=>handleOpenSelected(!openSelected)}>
                        <div className="text-center leading-[53px]">
                            <span className="bg-[url('/assets/location.png')] bg-contain w-7px h-9px inline-block align-middle mr-7px"></span>
                            <span className="inline-block align-middle">{selectedItem.name}</span>
                            {/*<span className="inline-block align-middle">UNited Kingdom</span>*/}
                        </div>
                        <div className="text-center leading-[53px]">
                            <span className=" bg-[url('/assets/arrow.png')] bg-contain w-15px h-7px bg-no-repeat inline-block"></span>
                        </div>
                    </div>
                    <div className={`transition font-Grotesque-Regular font-medium grid grid-cols-5 divide-x-2 bg-[rgba(0,0,0,.4)] backdrop-opacity-10 text-white select-none mobile:grid-rows-5 mobile:grid-cols-none ${openSelected ? 'mobile:h-auto' : 'mobile:h-0'}`}>

                        {
                            cityInfo.map((item:any, index:number) => (
                                <div key={item.id} className={`text-center leading-[53px] ${selectedItem.id === item.id ? 'bg-white text-black' : ''}`} onClick={()=>handleItemClick(item)}>
                                    <span className="cursor-pointer">{item.name}</span>
                                </div>
                            ))
                        }

                        {/*<div className={`text-center leading-[53px] ${selectedItem === 'CHINA mainland' ? 'bg-white text-black' : ''}`} onClick={()=>handleItemClick('CHINA mainland')}>*/}
                        {/*    <span className="cursor-pointer">CHINA mainland</span>*/}
                        {/*</div>*/}
                        {/*<div className={`text-center leading-[53px] ${selectedItem === 'Taiwan region' ? 'bg-white text-black' : ''}`} onClick={()=>handleItemClick('Taiwan region')}>*/}
                        {/*    <span className="cursor-pointer">Taiwan region</span>*/}
                        {/*</div>*/}
                        {/*<div className={`text-center leading-[53px] ${selectedItem === 'SINGAPORE' ? 'bg-white text-black' : ''}`} onClick={()=>handleItemClick('SINGAPORE')}>*/}
                        {/*    <span className="cursor-pointer">SINGAPORE</span>*/}
                        {/*</div>*/}
                        {/*<div className={`text-center leading-[53px] ${selectedItem === 'KOREA' ? 'bg-white text-black' : ''}`} onClick={()=>handleItemClick('KOREA')}>*/}
                        {/*    <span className="cursor-pointer">KOREA</span>*/}
                        {/*</div>*/}
                        {/*<div className={`text-center leading-[53px] ${selectedItem === 'UNited kingdom' ? 'bg-white text-black' : ''}`} onClick={()=>handleItemClick('UNited kingdom')}>*/}
                        {/*    <span className="cursor-pointer">UNited kingdom</span>*/}
                        {/*</div>*/}
                    </div>
                </div>



            </div>
        </div>
    );
}

export default LocationMapComponent;

"use client";
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from "react";



const Baidu:React.ComponentType<{}> = dynamic(() => import('@/components/map/baidu'));


function LocationMapComponent(props: any) {
    const headStyle = props.data.entry.headStyle;
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

    interface zoomContent {add:number,reduce:number}


    const items = ['Item 1', 'Item 2', 'Item 3'];
    const [browser,setBrowser] = useState(false);

    const [selectedItem, setSelectedItem] = useState({
        name:'UNited Kingdom',
        id:4,
        point: {

        }
    });


    let [selectLocation, setSelectLocation] = useState(0);

    let [selectZoom, setSelectZoom] = useState({
        add:0,
        reduce:0,
    } as zoomContent);


    let [selectZoomIn,setSelectZoomIn]  = useState(0);

    let [selectZoomOut,setSelectZoomOut]  = useState(0);


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
        // if(selectZoom == 20){
        //     return false;
        // }


        setSelectZoomIn(selectZoomIn+1);

    };

    const handleSelectReduce = () => {
        // if(selectZoom == 0){
        //     return false;
        // }

        setSelectZoomOut(selectZoomOut+1);


    };

    useEffect(():void => {

        setBrowser(true);

    }, [browser,selectZoom]);


    return (
        <section className="overflow-hidden">
            <input type="hidden" value={headStyle} data-style="headStyle" />
            <div className="h-screen relative">
                {  // @ts-ignore
                    browser ? <Baidu  info={selectedItem} location={selectLocation} zoomIn={selectZoomIn} zoomOut={selectZoomOut}></Baidu> : null
                }


                <div className="absolute z-20 top-[118px] right-[42px] grid grid-rows-3 mobile:top-[25px] mobile:right-[20px]">
                    <div className="bg-[url('/assets/add.png')] bg-contain w-40px h-40px inline-block align-middle cursor-pointer mobile:w-32px mobile:h-32px" onClick={()=>handleSelectAdd()}></div>
                    <div className="bg-[url('/assets/reduce.png')] bg-contain w-40px h-40px inline-block align-middle cursor-pointer mobile:w-32px mobile:h-32px" onClick={()=>handleSelectReduce()}></div>
                    <div className="bg-[url('/assets/positioning.png')] bg-contain w-40px h-40px inline-block align-middle cursor-pointer mobile:w-32px mobile:h-32px" onClick={()=>handleLocation()}></div>
                </div>

                <div className="absolute z-20 left-[31px] bottom-[83px] select-none font-Grotesque-Medium font-medium text-black mobile:hidden">
                    <span className="bg-[url('/assets/location_black.png')] bg-contain w-11px h-14px inline-block align-middle mr-12px"></span>
                    <span className="text-12px inline-block align-middle">Select your location</span>
                </div>

                <div className="absolute left-0 bottom-0 z-20 w-full overflow-hidden">
                    <div className="hidden flex justify-between pr-21px pl-21px h-47.5px bg-[rgba(0,0,0,.4)] backdrop-opacity-10 text-white select-none font-Grotesque-Regular font-medium mobile:flex active:bg-[rgba(0,0,0,.6)]"  onClick={()=>handleOpenSelected(!openSelected)}>
                        <div className="text-center leading-[44px]">
                            <span className="bg-[url('/assets/location.png')] bg-contain w-6px h-8px inline-block align-middle mr-6px"></span>
                            <span className="inline-block align-middle">{selectedItem.name}</span>
                            {/*<span className="inline-block align-middle">UNited Kingdom</span>*/}
                        </div>
                        <div className="text-center leading-[44px]">
                            <span className=" bg-[url('/assets/arrow.png')] bg-contain w-13px h-6px bg-no-repeat inline-block"></span>
                        </div>
                    </div>
                    <div className=" backdrop-opacity-10 mobile:bg-[rgba(0,0,0,.4)]">
                        <div className={`transition font-Grotesque-Regular font-medium grid grid-cols-5   text-white select-none mobile:grid-rows-5 mobile:grid-cols-none mobile:pr-25px mobile:pl-25px ${openSelected ? 'mobile:h-auto' : 'mobile:h-0'}`}>

                            {
                                cityInfo.map((item:any, index:number) => (
                                    <div key={item.id} className={`  text-center leading-[53px] relative bg-[length:120%_65px] bg-no-repeat bg-[center_top_-6.5px] ${cityInfo.length-1 == index ? "" : "mobile:border-b-[0.2px] mobile:border-solid mobile:border-b-[rgba(255,255,255,.2)]"} ${selectedItem.id === item.id ? "bg-[url('/assets/block.png')] text-black" : 'bg-[rgba(0,0,0,.4)] mobile:bg-transparent'}`} onClick={()=>handleItemClick(item)}>
                                        <span className="cursor-pointer">{item.name}</span>
                                        {/*<span className="triangle-down w-0 h-0 border-solid border-t-[6px] border-l-[12px] border-r-[12px] border-l-transparent border-r-transparent  border-t-red-500 absolute left-[50%] translate-x-[-50%] top-0 z-20"></span>*/}
                                    </div>
                                ))
                            }

                            <div className="mobile:h-50px"></div>

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
        </section>
    );
}

export default LocationMapComponent;

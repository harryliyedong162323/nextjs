"use client";

import React, { useEffect, useRef, useState } from "react";
import BaseImage from "@/components/base/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import eventbus from "@/utils/eventbus";

interface entryContent {
  headStyle: string;
  selectedProductId?: number;
  productFamilyComponentProductsCollection: productFamilyComponentProductsCollectionContent;
}
interface productFamilyComponentProductsCollectionContent {
  items: Array<bottleContent>;
}

export interface propsContent {
  getPageStore: Function;
  updatePageStore: Function;
  changeNavStatus: Function;
  scrollToPage: Function;
  TrackingType: object;
  currentSlug: string;
  data: {
    entry: entryContent;
    name: string;
    type: string;
  };
}

interface bottleContent {
  id: number;
  num: string;
  active: boolean;
  productName: string;
  productImage: {
    altText: string;
    imagepc: {
      url: string;
    };
    imagemobile: {
      url: string;
    };
  };
  backGroundImage: {
    altText: string;
    imagepc: {
      url: string;
    };
    imagemobile: {
      url: string;
    };
  };
  age: string;
  tag?: string | null;
  unit: string;
  price: string;
  description: string;
}

function ProductFamilyComponent(props: propsContent) {
  const headStyle = props.data.entry.headStyle;

  const bottle =
    props.data.entry.productFamilyComponentProductsCollection.items;

  const selectedProductId = props.data.entry.selectedProductId;

  const [alignment, setAlignment] = useState(false);
  // const block1Image = props.data.entry.fields.block1Image.sys.fields;
  const [currentBottleIndex, setCurrentBottleIndex] = useState(
    selectedProductId || 0
  );
  const [textGradient, setTextGradient] = useState({
    background: "linear-gradient(to bottom, #e9aa87, #953e1a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  } as React.CSSProperties);
  const container = useRef(null);
  const [animationReady, setAnimationReady] = useState(false);
  const [bottleData, setBottleData] = useState(bottle);
  const [currentBottleData, setCurrentBottleData] = useState(
    bottle[0] as bottleContent
  );

  eventbus.on("selectProduct", (value: number) => {
    bottleData.map((item, index) => {
      if (item.id === value) {
        handleChooseBottle(index);
      }
    });
    // setCurrentBottleData(bottleData.filter(item => item.id === value)[0])
  });

  const handleChooseBottle = (index: number) => {
    // if (animationReady) return false;

    setAnimationReady(true);

    setTimeout(() => {
      setCurrentBottleData(bottleData[index]);
    }, 500);

    if (index == 3) {
      setTextGradient({
        color: "#fff",
      });
    } else {
      setTextGradient({
        background: "linear-gradient(to bottom, #e9aa87, #953e1a)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      });
    }

    setCurrentBottleIndex(index);
  };

  const handleMouseEnter = (index: number) => {
    if (index == 3) {
      setTextGradient({
        color: "#fff",
      });
    }
  };

  const handleMouseLeave = () => {
    if (currentBottleIndex == 3) {
      setTextGradient({
        color: "#fff",
      });
    } else {
      setTextGradient({
        background: "linear-gradient(to bottom, #e9aa87, #953e1a)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      });
    }
  };
  useGSAP(
    () => {
      gsap
        .timeline()
        .from(".an-group-1", { width: "auto" })
        .from(".an-bottle,.an-text", { x: "150%", duration: 1 })
        .to(".an-bg", {
          opacity: 0,
          duration: 0.5,
          onComplete: function () {
            setAnimationReady(false);
          },
        });
    },
    {
      scope: container,
      dependencies: [currentBottleData],
      revertOnUpdate: true,
    }
  );

  useGSAP(
    () => {
      gsap
        .timeline()

        .to(".an-group-1", { width: 0 });
      // .to('.an-bg',{opacity:1})
    },
    {
      scope: container,
      dependencies: [currentBottleIndex],
      revertOnUpdate: true,
    }
  );

  // useEffect(()=>{
  //
  //     if(!alignment){

  //         setTimeout(()=>{
  //             setAnimationReady(false)
  //             handleChooseBottle(currentBottleIndex)
  //         },500)
  //     }
  // },[alignment])

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const newAlignment: boolean = windowWidth <= 768 ? true : false;
      setAlignment(newAlignment);
    };

    // 监听窗口大小变化
    window.addEventListener("resize", handleResize);
    // 初始化对齐方式
    handleResize();

    return () => {
      // 清除事件监听器
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    handleChooseBottle(1);
  }, []);

  return (
    <section
      id="ProductsFamily"
      data-anchor={0}
      className="h-screen overflow-hidden select-none"
      ref={container}
    >
      <input type="hidden" value={headStyle} data-style="headStyle" />
      <input type="hidden" value={props.TrackingType.scroll25} data-slug={'home'}/>
      <input
        type="hidden"
        value={props.TrackingType.scroll25}
        data-slug={props.currentSlug}
      />

      <div className="h-[70vh] overflow-hidden">
        <div className="relative h-full w-full">
          <BaseImage
            className="z-10 left-0 top-0"
            mImg={currentBottleData.backGroundImage.imagemobile.url}
            pImg={currentBottleData.backGroundImage.imagepc.url}
            alt={currentBottleData.backGroundImage.altText}
            layout="fill"
            objectFit="cover"
            quality={100}
          ></BaseImage>

          <BaseImage
            className="an-bg transition-opacity duration-700 ease-in-out left-0 top-0 z-20 mobile:hidden"
            mImg={currentBottleData.backGroundImage.imagemobile.url}
            pImg={currentBottleData.backGroundImage.imagepc.url}
            alt={currentBottleData.backGroundImage.altText}
            layout="fill"
            objectFit="cover"
            quality={100}
          ></BaseImage>

          <div className="an-group-1 w-full overflow-hidden absolute left-[44%] z-30 top-[50%] translate-y-[-50%] mobile:hidden">
            <div className="an-bottle w-989px  flex flex-nowrap items-start">
              <div className="w-244px h-530px relative mr-130px pad:mr-64px mobile:w-102px mobile:h-223px ">
                <BaseImage
                  mImg={currentBottleData.productImage.imagemobile.url}
                  pImg={currentBottleData.productImage.imagepc.url}
                  alt={""}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                ></BaseImage>
              </div>
              <div className="an-text text-white mobile:pl-23px mobile:pr-23px mobile:w-full mt-120px">
                <div className="font-AlbertusNova-Regular pb-29px pad:pb-21px font-normal mobile:text-center mobile:w-full mobile:pb-20px flex items-center pad:min-w-64 pad:w-250px">
                  <div className="relative flex items-center pad:w-[40%] flex-nowrap">
                    <span className="text-60px font-light font-AlbertusNova-Light pb-8px pad:text-42px pad:pb-5px mobile:text-38px">
                      {currentBottleData.age}
                    </span>
                    <p className="text-11px font-AlbertusNova-Regular absolute bottom-0 left-0 w-full text-center pad:text-left pad:whitespace-nowrap pad:text-7px mobile:text-7px uppercase">
                      {currentBottleData.unit}
                    </p>
                  </div>
                  <div className="mr-16px ml-9px pad:translate-y-[5px] translate-y-[7px] h-70px w-2px bg-white pad:mr-11px pad:ml-6px pad:h-50px mobile:ml-10px mobile:mr-6px"></div>
                  <div className="flex flex-nowrap uppercase relative align-middle text-29px pt-20px   pad:text-20px pad:pt-14px mobile:text-19px mobile:w-125px">
                    <div className="flex flex-nowrap items-end justify-start">
                      <div className=" w-125px  paid:w-89px  relative ">
                        {currentBottleData.productName}
                        {currentBottleData.tag &&
                        currentBottleData.tag != "" ? (
                          <span className="pl-10px text-8px paid:text-5px whitespace-nowrap">
                            {currentBottleData.tag}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pb-30px  w-426px text-20px font-Grotesque-Light font-normal pad:pb-21px pad:w-304px pad:text-14px mobile:w-full mobile:text-center mobile:text-14px mobile:leading-[21px]">
                  {currentBottleData.description}
                </div>
                <div className="font-Grotesque-Regular font-normal text-21px pad:text-15px mobile:text-center mobile:text-16px">
                  {currentBottleData.price}
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full  overflow-hidden  absolute  z-30 top-150px mobile:top-[55%] mobile:scale-[.8] mobile:translate-y-[-50%]  hidden mobile:block">
            <div className="pad:w-500px flex flex-wrap items-center justify-center  ">
              <div className="w-169px h-368px  relative mr-90px  pad:mr-64px pad:w-120px pad:h-262px mobile:mr-0  mobile:w-102px mobile:h-223px ">
                <BaseImage
                  mImg={currentBottleData.productImage.imagemobile.url}
                  pImg={currentBottleData.productImage.imagepc.url}
                  alt={currentBottleData.productImage.altText}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                ></BaseImage>
              </div>
              <div className="text-white mobile:pl-23px mobile:pr-23px mobile:w-full">
                <div className="font-AlbertusNova-Regular font-normal mobile:text-center mobile:pt-20px mobile:w-full mobile:pb-20px mobile:flex mobile:flex-wrap justify-center items-start">
                  <div className="inline-block align-middle">
                    <div className="relative">
                      <span className="text-60px font-light font-AlbertusNova-Light pb-8px pad:text-42px pad:pb-5px mobile:text-38px">
                        {currentBottleData.age}
                      </span>
                      <span className="text-11px font-bold absolute bottom-0 left-0 w-full text-center pad:text-7px mobile:text-7px whitespace-nowrap">
                        {currentBottleData.unit}
                      </span>
                    </div>
                    {/*<div className="text-11px font-bold">years old</div>*/}
                  </div>
                  {/*<div className="mr-16px ml-9px inline-block align-middle h-[80%] w-2px mobile:h-50px bg-white pad:mr-11px pad:ml-6px pad:h-[57%] mobile:ml-10px mobile:mr-10px"></div>*/}
                  <div className=" border-l border-white border-solid pl-40px ml-40px inline-block uppercase align-middle w-194px text-29px  pad:w-138px pad:text-20px pad:pt-14px mobile:text-18px mobile:w-80px mobile:translate-y-[5px]  mobile:text-left">
                    <div className="flex flex-wrap">
                      <div className="">{currentBottleData.productName}</div>
                      {currentBottleData.tag && currentBottleData.tag != "" ? (
                        <div className="text-6px font-AlbertusNova-Light whitespace-nowrap">
                          {currentBottleData.tag}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="pb-30px w-426px text-20px font-Grotesque-Light font-normal pad:pb-21px pad:w-304px pad:text-14px mobile:w-full mobile:text-center mobile:text-14px mobile:leading-[21px]">
                  {currentBottleData.description}
                </div>
                <div className="font-Grotesque-Regular font-normal text-21px pad:text-15px mobile:text-center mobile:text-16px">
                  {currentBottleData.price}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[30vh] overflow-hidden pad:h-[35vh]">
        <div className="relative h-full w-full">
          <BaseImage
            mImg={require("../../../public/assets/productFamily/bg.png")}
            pImg={require("../../../public/assets/productFamily/bg.png")}
            alt={""}
            layout="fill"
            objectFit="cover"
            quality={100}
          ></BaseImage>

          <div className="absolute w-full pl-50px pr-50px  left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] pad:translate-y-[-55%]  mobile:w-full">
            <div className="text-center ml-17px font-AlbertusNova-Regular tracking-[5px] text-[#696969] text-16px  mobile:text-14px">
              SMOKY
            </div>
            <div className="pb-11px text-center  ml-17px font-Grotesque-Light tracking-[5px] text-[#696969] text-13px  pad:pb-7px mobile:text-10px">
              MALT
            </div>
            <div className="flex justify-between  h-171px pad:h-168px pb-11px  mobile:h-110px">
              <div className="flex flex-col justify-center items-center rotate-[-90deg]">
                <div className="font-AlbertusNova-Regular leading-tight tracking-[5px] text-[#696969] font-normal  text-16px  mobile:text-14px">
                  LIGHT
                </div>
                <div className="pb-6px  font-normal font-Grotesque-Light tracking-[2px] text-[#696969] text-13px pad:pb-4px  mobile:text-10px">
                  GRAIN
                </div>
              </div>

              <div className="w-full relative after:content-[''] after:absolute after:top-1/2  after:translate-y-[-50%] after:left-1/2 after:translate-x-[-50%] after:w-full mobile:after:w-[85%] after:h-1px after:bg-[#696969] after:content-[''] before:absolute before:top-1/2 before:translate-y-[-50%] before:left-1/2 before:translate-x-[-50%] before:w-1px before:h-full mobile:before:h-[80%] before:bg-[#696969]">
                <div
                  className={`select-none cursor-pointer flex justify-center items-center  w-[4em] h-[4em] hover:shadow-[#B96566]-500 hover:bg-[#588C96] hover:text-[#fff] absolute z-20 rounded-full  ${
                    currentBottleIndex == 0
                      ? "shadow-[#B96566]-500 bg-[#588C96] text-[#fff]"
                      : "bg-[#CECECE] text-[#588C96]"
                  }  bottom-0 left-1/4 translate-x-[-50%] translate-y-[-30%]  mobile:w-28px mobile:h-28px`}
                  onClick={() => {
                    handleChooseBottle(0);
                  }}
                >
                  <span className="text-32px font-AlbertusNova-Regular font-normal  mobile:text-16px">
                    {bottleData[0].num}
                  </span>
                </div>
                <div
                  className={`select-none cursor-pointer flex justify-center items-center w-[4em] h-[4em] hover:shadow-[#B96566]-500 hover:bg-[#5C829A] hover:text-[#fff] absolute z-20 rounded-full ${
                    currentBottleIndex == 1
                      ? "shadow-[#B96566]-500 bg-[#5C829A] text-[#fff]"
                      : "bg-[#CECECE] text-[#5C829A]"
                  } top-1/2 left-1/2 translate-x-[-70%] translate-y-[-70%]  mobile:w-28px mobile:h-28px`}
                  onClick={() => {
                    handleChooseBottle(1);
                  }}
                >
                  <span className="text-32px font-AlbertusNova-Regular font-normal  mobile:text-16px">
                    {bottleData[1].num}
                  </span>
                </div>
                <div
                  className={`select-none cursor-pointer flex justify-center items-center w-[4em] h-[4em] hover:shadow-[#B96566]-500 hover:bg-[#779374] hover:text-[#fff] absolute z-20 rounded-full  ${
                    currentBottleIndex == 2
                      ? "shadow-[#B96566]-500 bg-[#779374] text-[#fff]"
                      : "bg-[#CECECE] text-[#779374]"
                  } top-1/2 right-1/2  translate-x-[300%] pad:translate-x-[190%] translate-y-[-50%]  mobile:w-28px mobile:h-28px mobile:translate-y-[50%] mobile:translate-x-[150%] mobile:right-1/2 mobile:left-auto`}
                  onClick={() => {
                    handleChooseBottle(2);
                  }}
                >
                  <span className="text-32px font-AlbertusNova-Regular font-normal  mobile:text-16px">
                    {bottleData[2].num}
                  </span>
                </div>
                <div
                  className={`select-none cursor-pointer flex justify-center items-center w-[4em] h-[4em]  hover:shadow-[#B96566]-500 hover:bg-[url("/assets/productFamily/drop-bg.png")] hover:bg-contain hover:text-[#fff]  absolute z-20 rounded-full  ${
                    currentBottleIndex == 3
                      ? 'shadow-[#B96566]-500 bg-[url("/assets/productFamily/drop-bg.png")] bg-contain text-[#fff]'
                      : "bg-[#CECECE] text-[#af4f1f]"
                  } top-0 right-1/4 translate-x-[50%] translate-y-[-10%]  mobile:w-28px mobile:h-28px`}
                  onClick={() => {
                    handleChooseBottle(3);
                  }}
                  onMouseEnter={() => {
                    handleMouseEnter(3);
                  }}
                  onMouseLeave={handleMouseLeave}
                >
                  <span
                    className="text-32px font-AlbertusNova-Regular font-normal  mobile:text-16px"
                    style={textGradient}
                  >
                    {bottleData[3].num}
                  </span>
                </div>
                <div
                  className={`select-none cursor-pointer flex justify-center items-center w-[4em] h-[4em] hover:shadow-[#B96566]-500 hover:bg-[#B96566] hover:text-[#fff] absolute z-20 rounded-full  ${
                    currentBottleIndex == 4
                      ? "shadow-[#B96566]-500 bg-[#B96566] text-[#fff]"
                      : "bg-[#CECECE] text-[#B96566]"
                  }  top-1/2 right-1/4 translate-x-[200%] translate-y-[25%]  mobile:w-28px mobile:h-28px`}
                  onClick={() => {
                    handleChooseBottle(4);
                  }}
                >
                  <span className="text-32px font-AlbertusNova-Regular font-normal  mobile:text-16px">
                    {bottleData[4].num}
                  </span>
                </div>
                <div
                  className={`select-none cursor-pointer flex justify-center items-center w-[4em] h-[4em] hover:shadow-[#B96566]-500 hover:bg-[#96934C] hover:text-[#fff]  absolute z-20 rounded-full ${
                    currentBottleIndex == 5
                      ? "shadow-[#B96566]-500 bg-[#96934C] text-[#fff]"
                      : "bg-[#CECECE] text-[#96934C]"
                  } top-1/2 right-0 translate-x-[-100%] translate-y-[-65%]  mobile:w-28px mobile:h-28px`}
                  onClick={() => {
                    handleChooseBottle(5);
                  }}
                >
                  <span className="text-32px font-AlbertusNova-Regular font-normal  mobile:text-16px">
                    {bottleData[5].num}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="rotate-[-90deg]  font-AlbertusNova-Regular tracking-[5px] text-[#696969] text-16px  mobile:text-14px ">
                  RICH
                </div>
              </div>
            </div>
            <div className=" text-center ml-17px font-AlbertusNova-Regular tracking-[5px] text-[#696969] text-16px mobile:text-14px">
              SWEET
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductFamilyComponent;

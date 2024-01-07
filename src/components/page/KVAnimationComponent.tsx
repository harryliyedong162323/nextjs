"use client";


import React, { useEffect, useState,useRef } from "react";
import BaseImage from "@/components/base/image";
import BaseLink from "@/components/base/link";
import BaseVideo from "@/components/base/video";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function KVAnimationComponent(props: any) {

    const headStyle = props.data.entry.headStyle;
  // const block1Image = props.data.entry.fields.block1Image.sys.fields;
    const [isCurrentPage, setIsCurrentPage] = useState(false);

    const container = useRef(null);





  useEffect(() => {
    // setTimeout(()=>{setIsCurrentPage(true)},20);


  }, []);



    useGSAP(
        () => {
            gsap.timeline()
                .to(".bg-border", {scale:1})
                .to(".text-group-1",{display:'block'})
                .to(".text-1,.text-2",{opacity:1})
                // .to("",{opacity:1})
                .to(".bottle",{display:'block'})
                .to(".text-group-1",{delay:0.5,opacity:0,display:'none'})
                .to(".text-group-2",{display:'block'})
                .to(".text-3",{opacity:1})
                .to(".text-group-2",{delay:0.5,display:'none'})
                .to(".text-group-3",{display:'block'})
                .to(".text-4,.text-5",{opacity:1})
                .to(".text-group-4",{y: 0})

        },
        { scope: container }
    );






    return (


      <section className="h-screen overflow-hidden relative select-none" ref={container}>
          <input type="hidden" value={headStyle}/>
        {/*<div className="h-166px w-full relative pad:h-118px mobile:h-85px">*/}
        {/*    <div className="w-538px h-86px bg-contain bg-[url('/assets/KVAnimation/logo.png')] cursor-pointer absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] pad:w-380px pad:h-61px mobile:w-186px mobile:h-30px mobile:bg-[url('/assets/KVAnimation/logo-m.png')]"></div>*/}
        {/*    <div className="w-25px h-23px bg-contain bg-[url('/assets/KVAnimation/menu.png')] cursor-pointer absolute right-50px top-1/2 translate-y-[-50%] pad:w-17px pad:h-16px mobile:w-20px mobile:h-20px mobile:right-25px"></div>*/}
        {/*</div>*/}
        {/*<div className="h-166px w-full pad:h-118px mobile:h-85px"></div>*/}
        {/*<div className="pt-20px container mx-auto pad:pt-14px mobile:pl-25px mobile:pr-25px">*/}
        {/*    <div className="relative h-500px w-full pad:h-357px  mobile:h-[65vh]">*/}

        {/*        <BaseVideo*/}
        {/*            src="https://yumen-ali.oss-cn-beijing.aliyuncs.com/bg.mp4"*/}
        {/*            className="h-full object-cover"*/}
        {/*            loop={true}*/}
        {/*            autoplay={true}*/}
        {/*            width="100%"*/}
        {/*            height="100%"*/}
        {/*        >*/}
        {/*        </BaseVideo>*/}


        {/*        /!*<BaseImage*!/*/}
        {/*        /!*    mImg={require("../../../public/assets/KVAnimation/kv-m.png")}*!/*/}
        {/*        /!*    pImg={require("../../../public/assets/KVAnimation/kv.png")}*!/*/}
        {/*        /!*    alt={""}*!/*/}
        {/*        /!*    layout="fill"*!/*/}
        {/*        /!*    objectFit="cover"*!/*/}
        {/*        /!*    quality={100}*!/*/}
        {/*        /!*></BaseImage>*!/*/}
        {/*        <div className="absolute w-181px h-395px z-20 left-1/2 translate-x-[-50%] bottom-[-80px] pad:w-129px pad:h-282px pad:bottom-[-57px] mobile:w-102px mobile:h-223px mobile:bottom-[-40px]">*/}
        {/*            <BaseImage*/}
        {/*                mImg={require("../../../public/assets/KVAnimation/bottle-m.png")}*/}
        {/*                pImg={require("../../../public/assets/KVAnimation/bottle.png")}*/}
        {/*                alt={""}*/}
        {/*                objectFit="contain"*/}
        {/*                quality={100}*/}
        {/*            ></BaseImage>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className="pt-94px text-center pb-29px text-30px font-normal font-AlbertusNova-Regular pad:pt-67px pad:pb-20px pad:text-21px mobile:pt-66px">*/}
        {/*        A drop of wilderness in every glass*/}
        {/*    </div>*/}

        {/*    <div className="w-full flex flex-col items-center justify-center mobile:hidden mb-20px">*/}
        {/*        <div className="w-18px h-24px border-black border-2 inline-block border-solid rounded-full mb-5px relative before:w-2px before:h-5px before:bg-black before:absolute before:content-[''] before:left-6px before:top-5px before:animate-scrollMore"></div>*/}
        {/*        <div className="text-12px leading-tight text-black font-Grotesque-Regular">*/}
        {/*            Scroll to explore more*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}

        <div className="w-full h-screen">
            <BaseVideo
                src="https://yumen-ali.oss-cn-beijing.aliyuncs.com/bg.mp4"
                className="h-full object-cover"
                loop={true}
                autoplay={true}
                width="100%"
                height="100%"
            >
            </BaseVideo>
        </div>

          {/*<div className="select-none absolute uppercase top-1/2 translate-y-[-50%] w-full text-center text-white leading-[75px] font-Grotesque-Medium font-bold text-56px pad:leading-[53px] pad:text-40px mobile:leading-[37px] mobile:text-28px">*/}

          {/*   <div className={`text-group-1 hidden`}>*/}
          {/*       <div className={`text-1 transition-opacity delay-200 duration-500 ease-in opacity-0`}>discover a wilderness</div>*/}
          {/*       <div className={`text-2 transition-opacity delay-500 duration-500 ease-in opacity-0`}>in every drop</div>*/}
          {/*   </div>*/}

          {/*    <div className={`text-group-2 text-90px hidden pad:text-64px mobile:text-45px`}>*/}
          {/*        <div className={`text-3 transition-opacity delay-200 duration-300 ease-in opacity-0`}>ancient moorland</div>*/}
          {/*    </div>*/}

          {/*    <div className={`text-group-3 hidden`}>*/}
          {/*        <div className={`text-4 transition-opacity delay-200 duration-500 ease-in opacity-0`}>explore the boundless flavours</div>*/}
          {/*        <div className={`text-5 transition-opacity delay-500 duration-500 ease-in opacity-0`}>of where sherry meets malt.</div>*/}
          {/*    </div>*/}

          {/*</div>*/}


        <div className={`bg-border absolute left-0 top-0 w-screen h-screen z-20 scale-[2.5] transition-transform duration-[1500ms] delay-[500ms] ease-in`}>
            <BaseImage

                mImg={require("../../../public/assets/KVAnimation/768.png")}
                pImg={require("../../../public/assets/KVAnimation/1024.png")}
                alt={""}
                objectFit="contain"
                quality={100}
            ></BaseImage>

        </div>

          <div className={`bottle pointer-events-none select-none w-181px h-394px absolute top-1/2 translate-y-[-30%] left-1/2 z-30 translate-x-[-50%] hidden pad:w-129px pad:h-281px pad:translate-y-[-21%] mobile:h-223px mobile:w-102px mobile:translate-y-[0%]`}>
              <BaseVideo
                  src="https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/bottle.webm"
                  className="h-full object-cover"
                  loop={false}
                  autoplay={true}
                  width="100%"
                  height="100%"
              >
              </BaseVideo>
          </div>


         <div className={`absolute bottom-[5%] w-full left-1/2 z-30 mobile:w-[80%] mobile:bottom-[8%]`}>
            <div className={`text-group-4 translate-x-[-50%] translate-y-full transition-all ease-in-out duration-500 delay-1000`}>
                <div className="pt-94px text-center pb-29px text-30px font-normal font-AlbertusNova-Regular pad:pt-67px pad:pb-20px pad:text-21px mobile:pt-66px mobile:text-24px">
                    A drop of wilderness in every glass
                </div>

                <div className="w-full flex flex-col items-center justify-center mobile:hidden mb-20px">
                    <div className="w-18px h-24px border-black border-2 inline-block border-solid rounded-full mb-5px relative before:w-2px before:h-5px before:bg-black before:absolute before:content-[''] before:left-6px before:top-5px before:animate-scrollMore"></div>
                    <div className="text-12px leading-tight text-black font-Grotesque-Regular">
                        Scroll to explore more
                    </div>
                </div>
            </div>
         </div>




      </section>


  );
}

export default KVAnimationComponent;

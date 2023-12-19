"use client";

import React, {useCallback, useEffect, useState} from "react";
import BaseImage from "@/components/base/image";
import BaseVideo from "@/components/base/video";

function InteractiveVideoComponent(props: any) {

    const headStyle = props.data.entry.headStyle;
    return (
       <div className="w-full h-screen relative overflow-hidden bg-black">
           <input type="hidden" value={headStyle}/>
           <BaseImage
               defaultImg={require("../../../public/assets/interactiveVideo/bg.png")}
               alt={""}
               layout="fill"
               objectFit="cover"
               quality={100}
           ></BaseImage>
           {/*src="https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/bottle.mp4"*/}

           {/*<BaseVideo*/}
           {/*    src="https://video.699pic.com/videos/67/96/85/a_6502c28512eef16946796850794.mp4"*/}
           {/*    className="h-screen object-cover"*/}
           {/*    loop={true}*/}
           {/*    autoplay={true}*/}
           {/*    width="100%"*/}
           {/*    height="100%"*/}
           {/*>*/}
           {/*</BaseVideo>*/}


           <div className="absolute z-20 left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]">
               <div className="uppercase font-normal text-33px text-center font-AlbertusNova-Regular pb-56px text-white paid:text-23px paid:pb-40px mobile:pb-27px mobile:text-20px">The Wild Escape </div>
               <div className="cursor-pointer w-334px h-65px mx-auto paid:w-238px paid:h-46px mobile:h-44px mobile:w-200px">
                   <BaseImage
                       defaultImg={require("../../../public/assets/interactiveVideo/CTA.png")}
                       alt={""}
                       objectFit="contain"
                       quality={100}
                   ></BaseImage>
               </div>
           </div>

       </div>

    );
}

export default InteractiveVideoComponent;

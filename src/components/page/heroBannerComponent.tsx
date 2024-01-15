"use client";

import style from "@/styles/heroBannerComponent.module.css";
import React, { useEffect, useState } from "react";
import BaseImage from "@/components/base/image";

function HeroBannerComponent(props: any) {
  useEffect(() => {}, []);

  return (
    <section>
      <div className={style.video_container}>
        <div className={style.video_nav}>
          <div className={style.video_logo}>
            <BaseImage
              alt=""
              width={44}
              height={44}
              mImg={require("../../../public/assets/header_logo.png")}
              pImg={require("../../../public/assets/header_logo.png")}
            ></BaseImage>
          </div>
          <div className={style.video_menu}>
            <BaseImage
              alt=""
              width={40}
              height={40}
              mImg={require("../../../public/assets/more_menu.png")}
              pImg={require("../../../public/assets/more_menu.png")}
            ></BaseImage>
          </div>
        </div>
        <div className={style.video_title}>WILD ESCAPE TRIP TEASER</div>
        <div className={style.video_play}></div>
      </div>
      <div className={style.video_small}>
        <div className={style.small_video_nav}>
          <div className={style.logo}>
            <BaseImage
              alt=""
              width={58}
              height={58}
              mImg={require("../../../public/assets/info_logo.png")}
              pImg={require("../../../public/assets/info_logo.png")}
            ></BaseImage>
          </div>
          <div className={style.menu}>
            <BaseImage
              alt=""
              width={42}
              height={30}
              mImg={require("../../../public/assets/info_menu.png")}
              pImg={require("../../../public/assets/info_menu.png")}
            ></BaseImage>
          </div>
        </div>
        <div className={style.small_video_title}>Wild Escape Trip Teaser</div>
        <div className={style.small_video_play}></div>
        <div className={style.small_video_p}>
          Wildmoor is an epic series of extremely rare and old prestige Scotch
          whiskies from far-flung distilleries all over Scotland.
        </div>
        <div className={style.small_video_next}></div>
      </div>
    </section>
  );
}

export default HeroBannerComponent;

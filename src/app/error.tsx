"use client";

import BaseImage from "@/components/base/image";
import Link from "next/link";
import { useState } from "react";
import BaseLink from "@/components/base/link";

interface ComponentData {
  id: number;
  bg: {
    mImg: string;
    pImg: string;
  };
}

const componentData: ComponentData = {
  id: 1,
  bg: {
    pImg: require("../../public/assets/bg_error.png"),
    mImg: require("../../public/assets/bg_error_m.png"),
  },
};

const Custom500 = () => {
  const [data, setData] = useState<ComponentData>(componentData);
  return (
    <section className="relative overflow-hidden select-none">
      <div className="absolute z-10 flex justify-center w-full top-144px pad:top-115px mobile:top-86px">
        <span className="bg-[url('/assets/wildmoor_white.png')] inline-block bg-cover w-456px h-74px pad:w-365px pad:h-59px mobile:w-274px mobile:h-44px"></span>
      </div>
      <div className="flex h-screen">
        <BaseImage
          mImg={data.bg.mImg}
          pImg={data.bg.pImg}
          alt={""}
          layout="fill"
          objectFit="fill"
          quality={100}
        ></BaseImage>
      </div>
      <div className="absolute w-full top-1/2 -mt-170px text-white font-AlbertusNova-Regular text-44px mobile:text-20px text-center">
        <div className="text-36px mobile:text-18px mb-20px">500</div>
        <div>OOPS! </div>
        <div className="mb-40px">SOMETHING WENT WRONG</div>
        <BaseLink
          link="/home"
          className="uppercase hover:bg-[url('/assets/back_home_white.png')] hover:text-black bg-[url('/assets/back_home_btn.png')] inline-block bg-cover w-295px h-72px leading-[72px] text-center text-16px mobile:hidden "
        >
          back home
        </BaseLink>
        <BaseLink
          link="/home"
          className="hidden mobile:uppercase  mobile:block mobile:bg-[url('/assets/back_home_btn.png')] mobile:inline-block mobile:bg-cover  mobile:text-center mobile:w-148px mobile:h-36px mobile:leading-[36px] mobile:text-12px"
        >
          back home
        </BaseLink>
      </div>
    </section>
  );
};

export default Custom500;

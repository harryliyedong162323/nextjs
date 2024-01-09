"use client";

import React, { useEffect, useState } from "react";

export interface propsContent {
  title: string;
  message: string;
  btnTxt: string;
  visible: boolean;
}

function Popup(props: propsContent) {
  const [visible, setVisible] = useState<boolean>(props.visible);
  useEffect(() => {
    setVisible(props.visible)
  }, [props])

  return (
    <div
      className={`absolute w-screen h-screen overflow-hidden select-none bg-[#000000BF] top-0 z-50 ${ visible ? "block" : "hidden"}`}
      onWheel={(event) => {
        event.stopPropagation();
      }}
    >
      <div className="absolute bg-[url('/assets/bg_popup.png')] w-649px h-467px left-1/2 top-1/2 -ml-325px -mt-234px flex flex-col items-center justify-center mobile:w-325px mobile:h-234px mobile:-ml-162px mobile:-mt-117px">
        <div className="font-AlbertusNova-Regular text-50px uppercase mobile:text-25px">
          {props.title}
        </div>
        <div className="font-AlbertusNova-Regular text-20px uppercase my-40px mobile:text-12px mobile:my-20px">
          {props.message}
        </div>
        <div
          className="bg-[url('/assets/bg_popup_btn.png')] w-197px h-78px mx-auto leading-[78px] text-center cursor-pointer mobile:w-98px mobile:h-39px mobile:leading-[39px]"
          onClick={() => {
            setVisible(false)
          }}
        >
          {props.btnTxt}
        </div>
      </div>
    </div>
  );
}

export default Popup;

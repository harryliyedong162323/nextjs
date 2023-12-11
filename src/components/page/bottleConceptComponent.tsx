"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import ReactPlayer from "react-player";
import Draggable from "react-draggable";
// import dynamic from 'next/dynamic';
// const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

function BottleConceptComponent(props: any) {

  const [hasWindow, setHasWindow] = useState(false);

  const [startPlaying, setStartPlaying] = useState(false);
  const [startVideoEnd, setStartVideoEnd] = useState(false);
  const [bottlePlaying, setBottlePlaying] = useState(false);
  const bottlePlayingRef = useRef(null)

  const [positionX, setPositionX] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  setTimeout(() => {
    setStartPlaying(true);
  }, 1000);

  return (
    <div id="BottleConcept" className="relative overflow-hidden">
      <div className="flex h-screen flex-col justify-center bg-black">
        <div className="absolute w-full z-10 top-124px paid:top-84px mobile:top-82px">
          <div className="font-AlbertusNova-Regular text-white text-center uppercase text-33px paid:text-27px mobile:text-20px">
            BOTTLE CONCEPT
          </div>
        </div>
        {hasWindow && !startVideoEnd && (
          <ReactPlayer
            playing={startPlaying}
            loop={false}
            muted={true}
            controls={false}
            controlsList="nodownload"
            onEnded={() => {
              console.log("onEnded");
              setStartVideoEnd(true);
              // setBottlePlaying(true);
            }}
            width="100%"
            height="100%"
            url="https://yumen-ali.oss-cn-beijing.aliyuncs.com/video_bg.mp4"
          ></ReactPlayer>
        )}
        {hasWindow && startVideoEnd && (
          <>
            <ReactPlayer
              ref={bottlePlayingRef}
              playing={bottlePlaying}
              loop={false}
              muted={true}
              controls={false}
              controlsList="nodownload"
              onEnded={() => {
                console.log("onEnded");
              }}
              width="100%"
              height="100%"
              url="https://yumen-ali.oss-cn-beijing.aliyuncs.com/23_AM.mp4"
            ></ReactPlayer>
            <div className="bg-[url('/assets/range/bg_around.png')] absolute bg-cover z-10 left-1/2 -ml-375px w-750px h-211px paid:-ml-300px paid:w-600px paid:h-169px mobile:-ml-160px mobile:w-320px mobile:h-90px"></div>
            <div id="DraggableBox" className="cursor-pointer absolute z-20 top-1/2 left-1/2 mt-115px -ml-375px w-750px h-44px paid:mt-95px paid:-ml-300px paid:w-600px mobile:mt-50px mobile:-ml-160px mobile:w-320px">
              <Draggable
                axis="x"
                defaultPosition={{ x: positionX, y: 0 }}
                bounds="parent"
                // scale={1}
                onStart={() => {}}
                onDrag={(e, ui) => {
                  const boxWidth = document.getElementById('DraggableBox')?.offsetWidth ?? 0
                  const x = positionX + ui.deltaX
                  setPositionX(positionX + ui.deltaX)
                  bottlePlayingRef.current?.seekTo(x/boxWidth);
                }}
                onStop={() => {}}
              >
                <div className="inline-block bg-[url('/assets/range/icon_pointer.png')] bg-cover w-44px h-44px paid:w-44px paid:h-44px mobile:w-44px mobile:h-44px"></div>
              </Draggable>
            </div>
            <div className="bg-[url('/assets/range/icon_360.png')] absolute bg-cover z-10 left-1/2 -ml-34px w-68px h-35px bottom-80px"></div>
          </>
        )}
      </div>
      <div className="w-full absolute bottom-0 z-10 mobile:h-110px mobile:bg-gradient-to-t mobile:from-[rgba(0,0,0)] mobile:to-[rgba(0,0,0,0.1)]"></div>
      <div className="w-full absolute bottom-20px z-20 font-Grotesque-Regular text-[#969797] uppercase text-20px paid:text-14px mobile:text-10px">
        <div className="flex justify-between mx-auto w-[1250px] paid:w-1000px mobile:w-full text-center">
          <a href="#ProductsFamily" className="inline-block mobile:w-64px">
            products family
          </a>
          <a href="#TalesFromTheWild" className="inline-block mobile:w-64px">
            Tales From The Wild
          </a>
          <a href="#ServingSuggestion" className="inline-block mobile:w-64px">
            Serving Suggestion
          </a>
          <a
            href="#BottleConcept"
            className="relative inline-block text-[#696969] mobile:w-64px mobile:text-white"
          >
            <div className="bg-[url('/assets/range/icon_nav_line.png')] absolute bg-cover z-10 left-1/2 w-189px h-7px top-26px -ml-95px paid:w-154px paid:h-6px paid:top-24px paid:-ml-77px mobile:top-36px mobile:w-64px mobile:h-3px mobile:-ml-32px"></div>
            Bottle Concept
          </a>
          <a href="#FlavourFinder" className="inline-block mobile:w-64px">
            Flavour Finder
          </a>
        </div>
      </div>
    </div>
  );
}

export default BottleConceptComponent;

"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import ReactPlayer from "react-player";
import Draggable from "react-draggable";
// import dynamic from 'next/dynamic';
// const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

function BottleConceptComponent(props: any) {
  const headStyle = props.data.entry.headStyle;
  const [hasWindow, setHasWindow] = useState(false);

  const [startPlaying, setStartPlaying] = useState(false);
  const [startVideoEnd, setStartVideoEnd] = useState(false);
  const [bottlePlaying, setBottlePlaying] = useState(false);
  const bottlePlayingRef = useRef<ReactPlayer>(null)

  const [positionX, setPositionX] = useState(0)

  const [isFullPage] = useState<boolean>(props.data.entry.isFullPage || false);
  const [isCurrentPage, setIsCurrentPage] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  useEffect(() => {
    if (isFullPage) {
      if (props.data.entry.currentPageNumber === props.data.entry.pageNumber) {
        setIsCurrentPage(true);
        setTimeout(() => {
          setStartPlaying(true);
        }, 1000);
      } else {
        setIsCurrentPage(false);
        // setStartVideoEnd(false);
      }
    }
  }, [isFullPage, props]);

  const [startX, setStartX] = useState<number>(0);
  const [endX, setEndX] = useState<number>(0);
  const [currentPercent, setCurrentPercent] = useState(0);
  const [endPercent, setEndPercent] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const bottleRef = useRef<HTMLDivElement | null>(null);

  return (
    <div id="BottleConcept" data-anchor={3} className="relative overflow-hidden select-none">
      <div ref={bottleRef} className="cursor-[url('/assets/range/icon_pointer.cur'),_pointer] absolute w-full top-60px z-50 opacity-0 h-[calc(100vh-120px)] mobile:top-200px mobile:h-500px"
        onMouseDown={(event) => {
          console.log('mouseup', event);
          setIsMouseDown(true);
          setStartX(event.clientX);
        }}
        onTouchStart={(event) => {
          event.stopPropagation()
          console.log('touchStart', event);
          setIsMouseDown(true);
          setStartX(event.touches[0].clientX);
        }}
        onMouseMove={(event) => {
          // console.log('isMouseDown', isMouseDown)
          if (isMouseDown) {
            let percent = ((event.clientX - startX + 600 * endPercent) % 600) / 600;
            console.log('percent:', percent)
            if (percent < 0) {
              percent = 1 + percent
            }
            setCurrentPercent(percent)
            bottlePlayingRef.current?.seekTo(percent);
          }
        }}
        onTouchMove={(event) => {
          event.stopPropagation()
          // console.log('touchMove isMouseDown', isMouseDown)
          if (isMouseDown) {
            let percent = ((event.touches[0].clientX - startX + 375 * endPercent) % 375) / 375;
            console.log('percent:', percent)
            if (percent < 0) {
              percent = 1 + percent
            }
            setCurrentPercent(percent)
            bottlePlayingRef.current?.seekTo(percent);
          }
        }}
        onMouseUp={(event) => {
          // console.log('mouseup', event);
          setIsMouseDown(false);
          setEndPercent(currentPercent);
        }}
        onTouchEnd={(event) => {
          // console.log('touchEnd', event);
          event.stopPropagation()
          setIsMouseDown(false);
          setEndPercent(currentPercent);
          console.log(currentPercent)
        }}></div>
      <input type="hidden" value={headStyle}/>
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
            <div className="bg-[url('/assets/range/icon_360.png')] absolute bg-cover z-10 left-1/2 -ml-34px w-68px h-35px bottom-80px"></div>
          </>
        )}
      </div>
      <div className="w-full absolute bottom-0 z-10 mobile:h-110px mobile:bg-gradient-to-t mobile:from-[rgba(0,0,0)] mobile:to-[rgba(0,0,0,0.1)]"></div>
      <div className="w-full absolute bottom-20px z-20 font-Grotesque-Regular text-[#969797] uppercase text-20px paid:text-14px mobile:text-10px">
        <div className="flex justify-between mx-auto w-[1250px] paid:w-1000px mobile:w-full text-center">
          <span className="inline-block cursor-pointer mobile:w-64px" onClick={() => {props.scrollToPage(0)}}>
            products family
          </span>
          <span className="inline-block cursor-pointer mobile:w-64px" onClick={() => {props.scrollToPage(1)}}>
            Tales From The Wild
          </span>
          <span
            className="inline-block cursor-pointer mobile:w-64px" onClick={() => {props.scrollToPage(2)}}
          >
            Serving Suggestion
          </span>
          <span className="relative inline-block cursor-pointer text-[#696969] mobile:w-64px mobile:text-white" onClick={() => {props.scrollToPage(3)}}>
            Bottle Concept
            <div className="bg-[url('/assets/range/icon_nav_line.png')] absolute bg-cover z-10 left-1/2 w-189px h-7px top-26px -ml-95px paid:w-154px paid:h-6px paid:top-24px paid:-ml-77px mobile:top-36px mobile:w-64px mobile:h-3px mobile:-ml-32px"></div>
          </span>
          <span className="inline-blockcursor-pointer mobile:w-64px" onClick={() => {props.scrollToPage(4)}}>
            Flavour Finder
          </span>
        </div>
      </div>
    </div>
  );
}

export default BottleConceptComponent;

"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import ReactPlayer from "react-player";
import Draggable from "react-draggable";
// import dynamic from 'next/dynamic';
// const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

interface entryContent {
  headStyle: string;
  isFullPage?: boolean;
  pageNumber: number;
  currentPageNumber: number;
  bottleConceptComponentTitle: string;
  bottleConceptComponentPrompttext: string;
  bottleConceptComponentVideo1: {
    video: {
      url: string;
    };
  };
  bottleConceptComponentVideo2: {
    video: {
      url: string;
    };
  };
}

export interface propsContent {
  getPageStore: Function;
  updatePageStore: Function;
  changeNavStatus: Function;
  scrollToPage: Function;

  data: {
    entry: entryContent;
    name: string;
    type: string;
  };
}

function BottleConceptComponent(props: propsContent) {
  const headStyle = props.data.entry.headStyle;
  const [data, setData] = useState(props.data.entry);
  const [hasWindow, setHasWindow] = useState(false);

  const [startPlaying, setStartPlaying] = useState(false);
  const [startVideoEnd, setStartVideoEnd] = useState(false);
  const [bottlePlaying, setBottlePlaying] = useState(false);
  const bottlePlayingRef = useRef<ReactPlayer>(null);

  const [positionX, setPositionX] = useState(0);

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
    <section
      id="BottleConcept"
      data-anchor={3}
      className="relative overflow-hidden select-none"
    >
      <div
        ref={bottleRef}
        className="cursor-[url('/assets/range/icon_pointer.cur'),_pointer] absolute w-full top-60px z-50 opacity-0 h-[calc(100vh-120px)] mobile:top-200px mobile:h-500px"
        onMouseDown={(event) => {
          console.log("mouseup", event);
          setIsMouseDown(true);
          setStartX(event.clientX);
        }}
        onTouchStart={(event) => {
          event.stopPropagation();
          console.log("touchStart", event);
          setIsMouseDown(true);
          setStartX(event.touches[0].clientX);
        }}
        onMouseMove={(event) => {
          // console.log('isMouseDown', isMouseDown)
          if (isMouseDown) {
            let percent =
              ((event.clientX - startX + 600 * endPercent) % 600) / 600;
            console.log("percent:", percent);
            if (percent < 0) {
              percent = 1 + percent;
            }
            setCurrentPercent(percent);
            bottlePlayingRef.current?.seekTo(percent);
          }
        }}
        onTouchMove={(event) => {
          event.stopPropagation();
          // console.log('touchMove isMouseDown', isMouseDown)
          if (isMouseDown) {
            let percent =
              ((event.touches[0].clientX - startX + 375 * endPercent) % 375) /
              375;
            console.log("percent:", percent);
            if (percent < 0) {
              percent = 1 + percent;
            }
            setCurrentPercent(percent);
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
          event.stopPropagation();
          setIsMouseDown(false);
          setEndPercent(currentPercent);
          console.log(currentPercent);
        }}
      ></div>
      <input type="hidden" value={headStyle} />
      <div className="flex h-screen flex-col justify-center bg-black">
        <div className="absolute w-full z-10 top-124px pad:top-84px mobile:top-82px">
          <div className="font-AlbertusNova-Regular text-white text-center uppercase text-33px pad:text-27px mobile:text-20px">
            {data.bottleConceptComponentTitle}
          </div>
        </div>
        {hasWindow && !startVideoEnd && (
          <ReactPlayer
            playing={startPlaying}
            loop={false}
            muted={true}
            controls={false}
            controlsList="nodownload"
            playsInline={true}
            onEnded={() => {
              console.log("onEnded");
              setStartVideoEnd(true);
              // setBottlePlaying(true);
            }}
            width="100%"
            height="100%"
            url={data.bottleConceptComponentVideo1.video.url}
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
              playsInline={true}
              onEnded={() => {
                console.log("onEnded");
              }}
              width="100%"
              height="80%"
              url={data.bottleConceptComponentVideo2.video.url}
            ></ReactPlayer>
            <div className="bg-[url('/assets/range/bg_around.png')] absolute bg-cover z-10 left-1/2 -ml-375px w-750px h-211px pad:-ml-300px pad:w-600px pad:h-169px mobile:-ml-160px mobile:w-320px mobile:h-90px"></div>
            <div className="bg-[url('/assets/range/icon_360.png')] absolute bg-cover z-10 left-1/2 -ml-34px w-68px h-35px bottom-[7em] pad:bottom-5em mobile:w-34px mobile:h-18px "></div>
          </>
        )}
      </div>
      <div className="w-full absolute bottom-0 z-10 mobile:h-110px mobile:bg-gradient-to-t mobile:from-[rgba(0,0,0)] mobile:to-[rgba(0,0,0,0.1)]"></div>
    </section>
  );
}

export default BottleConceptComponent;

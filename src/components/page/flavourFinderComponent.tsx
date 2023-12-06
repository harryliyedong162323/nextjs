"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

function FlavourFinderComponent(props: any) {
  
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  // QUIZ step:  0,1,2,3,4 => Q1,Q2,Q3,Q4,Q5  5 => Result
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [quizOneSelected, setQuizOneSelected] = useState<number>(0);
  const [quizTwoSelected, setQuizTwoSelected] = useState<number>(0);
  const [quizThreeSelected1, setQuizThreeSelected1] = useState<number>(0);
  const [quizThreeSelected2, setQuizThreeSelected2] = useState<number>(0);
  const [quizFourSelected, setQuizFourSelected] = useState<number>(0);
  const [quizFiveSelected, setQuizFiveSelected] = useState<number>(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onChangeScroll = useCallback(
    (emblaApi: { selectedScrollSnap: () => any }) => {
      setCurrentIndex(emblaApi?.selectedScrollSnap() || 0);
    },
    []
  );

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      setCurrentIndex(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    emblaApi?.on("select", onChangeScroll);
  }, [emblaApi, onChangeScroll]);

  useEffect(() => {
    console.log('showQuiz', showQuiz)
    console.log('quizIndex', quizIndex)
  }, [showQuiz, quizIndex]);

  return (
    <div className="relative overflow-hidden">
      { !showQuiz && <>
        <div className="flex h-980px">
          <Image
            className="object-cover"
            src={require("../../../public/assets/range/favour_finder_bg.png")}
            alt={""}
            quality="100"
          ></Image>
        </div>
        <div className="absolute right-0 top-1/2 -mt-[calc(18.4vw)] bg-[url('/assets/range/favour_finder_text_bg.png')] bg-cover w-[calc(42vw)] h-[calc(36.7vw)] mobile:w-325px mobile:h-365px mobile:left-1/2 mobile:-ml-163px mobile:-mt-183px">
          <div className="font-AlbertusNova-Regular text-[calc(2.5vw)] uppercase text-center mt-[calc(7.5vw)] mobile:text-24px">
            flavour finder
          </div>
          <div className="text-[calc(1.5vw)] font-Grotesque-Regular text-[#696969] px-20px m-20px mobile:text-14px">
            <div className="text-center">
              The whisky you choose to drink, and how you drink it, can reveal a
              lot about your character.
            </div>
            <div className="text-center mt-20px">
              Let&apos;s find out which one is your &ldquo;Glass of
              Wildmoor&rdquo; and what is special in YOU.
            </div>
          </div>
          <div onClick={() => setShowQuiz(true)} className="bg-[url('/assets/range/start_btn.png')] bg-cover w-[calc(17vw)] h-[calc(4.15vw)] uppercase leading-[calc(4.5vw)] text-center mx-auto mt-20px mobile:bg-[url('/assets/range/start_btn_small.png')] mobile:w-139px mobile:h-44px mobile:leading-[50px] mobile:text-13px">Start</div>
        </div>
      </>}
      { showQuiz && <>
        <div className={`relative bg-[url('/assets/range/bg_quiz.png')] bg-cover h-980px bg-[#E6E7E8]`}>
          { quizIndex === 0 && <>
            <div className="font-AlbertusNova-Regular text-40px text-black mx-auto text-center pt-150px uppercase">Q1. Which food is your favorite？</div>
            <div className="flex justify-center mt-100px">
              <div className={`px-15px pt-25px pb-15px ${quizOneSelected === 1 ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[5px] border-white border-solid" : "border-[5px] border-[#C6C6C6] border-solid"}`}>
                <div>
                  <Image
                    className="object-cover w-410px h-350px"
                    src={require("../../../public/assets/range/q1_pic_01.png")}
                    alt={""}
                    quality="100"
                    ></Image>
                </div>
                <div className="px-28px flex justify-between items-center mt-10px">
                  <div className="font-Grotesque-Regular text-26px text-[#262627]">Rich and Smoky</div>
                  <i className={`${quizOneSelected === 1 ? "bg-[url('/assets/range/icon_checked.png')]" : "bg-[url('/assets/range/icon_check.png')]"} cursor-pointer bg-cover w-26px h-26px`} onClick={() => {
                    setQuizOneSelected(1)
                    setQuizIndex(1)
                  }}></i>
                </div>
              </div>
              <div className={`px-15px pt-25px pb-15px ml-10px ${quizOneSelected === 2 ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[5px] border-white border-solid" : "border-[5px] border-[#C6C6C6] border-solid"}`}>
                <div>
                  <Image
                    className="object-cover w-410px h-350px"
                    src={require("../../../public/assets/range/q1_pic_02.png")}
                    alt={""}
                    quality="100"
                    ></Image>
                </div>
                <div className="px-28px flex justify-between items-center mt-10px">
                  <div className="font-Grotesque-Regular text-26px text-[#262627]">Light and Sweet</div>
                  <i className={`${quizOneSelected === 2 ? "bg-[url('/assets/range/icon_checked.png')]" : "bg-[url('/assets/range/icon_check.png')]"} cursor-pointer bg-cover w-26px h-26px`} onClick={() => {
                    setQuizOneSelected(2)
                    setQuizIndex(1)
                  }}></i>
                </div>
              </div>
              <div className={`px-15px pt-25px pb-15px ml-10px ${quizOneSelected === 3 ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[5px] border-white border-solid" : "border-[5px] border-[#C6C6C6] border-solid"}`}>
                <div>
                  <Image
                    className="object-cover w-410px h-350px"
                    src={require("../../../public/assets/range/q1_pic_03.png")}
                    alt={""}
                    quality="100"
                    ></Image>
                </div>
                <div className="px-28px flex justify-between items-center mt-10px">
                  <div className="font-Grotesque-Regular text-26px text-[#262627]">Tropical</div>
                  <i className={`${quizOneSelected === 3 ? "bg-[url('/assets/range/icon_checked.png')]" : "bg-[url('/assets/range/icon_check.png')]"} cursor-pointer bg-cover w-26px h-26px`} onClick={() => {
                    setQuizOneSelected(3)
                    setQuizIndex(1)
                  }}></i>
                </div>
              </div>
            </div>
          </>}
          { quizIndex === 1 && <>
            <div className="">
              <div className="font-AlbertusNova-Regular text-40px text-black mx-auto text-center pt-150px uppercase">Q2. Now listen very carefully...<br></br>
                Imagine you are retired from work now,<br></br>
                where do you want to visit most?
              </div>
              <div className="flex justify-center mt-50px">
                <div className={`px-40px pt-25px pb-15px ${quizTwoSelected === 1 ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[5px] border-white border-solid" : "border-[5px] border-[#C6C6C6] border-solid"}`}>
                  <div>
                    <Image
                      className="object-cover w-350px h-350px"
                      src={require("../../../public/assets/range/q2_pic_01.png")}
                      alt={""}
                      quality="100"
                      ></Image>
                  </div>
                  <div className="flex justify-between items-center mt-10px">
                    <div className="font-Grotesque-Regular text-26px text-[#262627] flex items-center">
                      <i className="inline-block cursor-pointer  bg-[url('/assets/range/icon_play.png')] bg-cover w-40px h-40px mr-5px"></i>
                      Play
                    </div>
                    <i className={`${quizTwoSelected === 1 ? "bg-[url('/assets/range/icon_checked.png')]" : "bg-[url('/assets/range/icon_check.png')]"} cursor-pointer bg-cover w-26px h-26px`} onClick={() => {
                      setQuizTwoSelected(1)
                      setQuizIndex(2)
                    }}></i>
                  </div>
                </div>
                <div className={`px-40px pt-25px pb-15px ml-10px ${quizTwoSelected === 2 ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[5px] border-white border-solid" : "border-[5px] border-[#C6C6C6] border-solid"}`}>
                  <div>
                    <Image
                      className="object-cover w-350px h-350px"
                      src={require("../../../public/assets/range/q2_pic_02.png")}
                      alt={""}
                      quality="100"
                      ></Image>
                  </div>
                  <div className="flex justify-between items-center mt-10px">
                    <div className="font-Grotesque-Regular text-26px text-[#262627] flex items-center">
                      <i className="inline-block cursor-pointer  bg-[url('/assets/range/icon_play.png')] bg-cover w-40px h-40px mr-5px"></i>
                      Play
                    </div>
                    <i className={`${quizTwoSelected === 2 ? "bg-[url('/assets/range/icon_checked.png')]" : "bg-[url('/assets/range/icon_check.png')]"} cursor-pointer bg-cover w-26px h-26px`} onClick={() => {
                      setQuizTwoSelected(2)
                      setQuizIndex(2)
                    }}></i>
                  </div>
                </div>
                <div className={`px-40px pt-25px pb-15px ml-10px ${quizTwoSelected === 3 ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[5px] border-white border-solid" : "border-[5px] border-[#C6C6C6] border-solid"}`}>
                  <div>
                    <Image
                      className="object-cover w-350px h-350px"
                      src={require("../../../public/assets/range/q2_pic_03.png")}
                      alt={""}
                      quality="100"
                      ></Image>
                  </div>
                  <div className="flex justify-between items-center mt-10px">
                    <div className="font-Grotesque-Regular text-26px text-[#262627] flex items-center">
                      <i className="inline-block cursor-pointer  bg-[url('/assets/range/icon_play.png')] bg-cover w-40px h-40px mr-5px"></i>
                      Play
                    </div>
                    <i className={`${quizTwoSelected === 3 ? "bg-[url('/assets/range/icon_checked.png')]" : "bg-[url('/assets/range/icon_check.png')]"} cursor-pointer bg-cover w-26px h-26px`} onClick={() => {
                      setQuizTwoSelected(3)
                      setQuizIndex(2)
                    }}></i>
                  </div>
                </div>
              </div>
            </div>
          </>}
          { quizIndex === 2 && <>
            <div className="">
              <div className="font-AlbertusNova-Regular text-40px text-black mx-auto text-center pt-150px uppercase">Q3. When it comes to whisky？</div>
                <div className="flex justify-between w-[1400px] mt-50px mx-auto">
                  <div className="w-600px">
                    <div className="font-Grotesque-Medium text-24px text-[#696969] mx-auto text-center">Where would you commonly enjoy your whisky?</div>
                    <div className={`px-45px py-20px flex justify-between items-center mt-20px ${quizThreeSelected1 === 1 ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[3px] border-white border-solid" : "border-[3px] border-[#C6C6C6] border-solid"}`}>
                      <div className="font-Grotesque-Regular text-28px text-[#262627]">Friendly gathering</div>
                      <i className={`${quizThreeSelected1 === 1 ? "bg-[url('/assets/range/icon_checked.png')]" : "bg-[url('/assets/range/icon_check.png')]"} cursor-pointer bg-cover w-26px h-26px`} onClick={() => {
                        setQuizThreeSelected1(1)
                        if (quizThreeSelected2 !== 0) {
                          setQuizIndex(3)
                        }
                      }}></i>
                    </div>
                    <div className={`px-45px py-20px flex justify-between items-center mt-10px ${quizThreeSelected1 === 2 ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[3px] border-white border-solid" : "border-[3px] border-[#C6C6C6] border-solid"}`}>
                      <div className="font-Grotesque-Regular text-28px text-[#262627]">Business meal</div>
                      <i className={`${quizThreeSelected1 === 2 ? "bg-[url('/assets/range/icon_checked.png')]" : "bg-[url('/assets/range/icon_check.png')]"} cursor-pointer bg-cover w-26px h-26px`} onClick={() => {
                        setQuizThreeSelected1(2)
                        if (quizThreeSelected2 !== 0) {
                          setQuizIndex(3)
                        }
                      }}></i>
                    </div>
                    <div className={`px-45px py-20px flex justify-between items-center mt-10px ${quizThreeSelected1 === 3 ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[3px] border-white border-solid" : "border-[3px] border-[#C6C6C6] border-solid"}`}>
                      <div className="font-Grotesque-Regular text-28px text-[#262627]">Home Sweet Home</div>
                      <i className={`${quizThreeSelected1 === 3 ? "bg-[url('/assets/range/icon_checked.png')]" : "bg-[url('/assets/range/icon_check.png')]"} cursor-pointer bg-cover w-26px h-26px`} onClick={() => {
                        setQuizThreeSelected1(3)
                        if (quizThreeSelected2 !== 0) {
                          setQuizIndex(3)
                        }
                      }}></i>
                    </div>
                    <div className={`px-45px py-20px flex justify-between items-center mt-10px ${quizThreeSelected1 === 4 ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[3px] border-white border-solid" : "border-[3px] border-[#C6C6C6] border-solid"}`}>
                      <div className="font-Grotesque-Regular text-28px text-[#262627]">Working</div>
                      <i className={`${quizThreeSelected1 === 4 ? "bg-[url('/assets/range/icon_checked.png')]" : "bg-[url('/assets/range/icon_check.png')]"} cursor-pointer bg-cover w-26px h-26px`} onClick={() => {
                        setQuizThreeSelected1(4)
                        if (quizThreeSelected2 !== 0) {
                          setQuizIndex(3)
                        }
                      }}></i>
                    </div>
                    <div className={`px-45px py-20px flex justify-between items-center mt-10px ${quizThreeSelected1 === 5 ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[3px] border-white border-solid" : "border-[3px] border-[#C6C6C6] border-solid"}`}>
                      <div className="font-Grotesque-Regular text-28px text-[#262627]">Camping/Picnic</div>
                      <i className={`${quizThreeSelected1 === 5 ? "bg-[url('/assets/range/icon_checked.png')]" : "bg-[url('/assets/range/icon_check.png')]"} cursor-pointer bg-cover w-26px h-26px`} onClick={() => {
                        setQuizThreeSelected1(5)
                        if (quizThreeSelected2 !== 0) {
                          setQuizIndex(3)
                        }
                      }}></i>
                    </div>
                    <div className={`px-45px py-20px flex justify-between items-center mt-10px ${quizThreeSelected1 === 6 ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[3px] border-white border-solid" : "border-[3px] border-[#C6C6C6] border-solid"}`}>
                      <div className="font-Grotesque-Regular text-28px text-[#262627]">Celebrations</div>
                      <i className={`${quizFiveSelected === 6 ? "bg-[url('/assets/range/icon_checked.png')]" : "bg-[url('/assets/range/icon_check.png')]"} cursor-pointer bg-cover w-26px h-26px`} onClick={() => {
                        setQuizThreeSelected1(6)
                        if (quizThreeSelected2 !== 0) {
                          setQuizIndex(3)
                        }
                      }}></i>
                    </div>
                  </div>
                  <div className="w-600px">
                    <div className="font-Grotesque-Medium text-24px text-[#696969] mx-auto text-center">Where  would you most like to enjoy your whiskey?</div>
                    <div className="relative overflow-hidden mt-20px" ref={emblaRef}>
                      <div className="flex">
                        <div className="flex-grow-0 flex-shrink-0 basis-full relative">
                          <div className={`px-40px pt-25px pb-15px ${quizThreeSelected2 === 1 ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[5px] border-white border-solid" : "border-[5px] border-[#C6C6C6] border-solid"}`}>
                            <div>
                              <Image
                                className="object-cover w-500px h-300px"
                                src={require("../../../public/assets/range/q2_pic_01.png")}
                                alt={""}
                                quality="100"
                                ></Image>
                            </div>
                            <div className="flex justify-between items-center mt-10px">
                              <div className="font-Grotesque-Regular text-26px text-[#262627] flex items-center">Top of mountain</div>
                              <i className={`${quizThreeSelected2 === 1 ? "bg-[url('/assets/range/icon_checked.png')]" : "bg-[url('/assets/range/icon_check.png')]"} cursor-pointer bg-cover w-26px h-26px`} onClick={() => {
                                setQuizThreeSelected2(1)
                                if (quizThreeSelected1 !== 0) {
                                  setQuizIndex(3)
                                }
                              }}></i>
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow-0 flex-shrink-0 basis-full relative">
                          <div className={`px-40px pt-25px pb-15px ${quizThreeSelected2 === 2 ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[5px] border-white border-solid" : "border-[5px] border-[#C6C6C6] border-solid"}`}>
                            <div>
                              <Image
                                className="object-cover w-500px h-300px"
                                src={require("../../../public/assets/range/q2_pic_02.png")}
                                alt={""}
                                quality="100"
                                ></Image>
                            </div>
                            <div className="flex justify-between items-center mt-10px">
                              <div className="font-Grotesque-Regular text-26px text-[#262627] flex items-center">Sunny beach</div>
                              <i className={`${quizThreeSelected2 === 2 ? "bg-[url('/assets/range/icon_checked.png')]" : "bg-[url('/assets/range/icon_check.png')]"} cursor-pointer bg-cover w-26px h-26px`} onClick={() => {
                                setQuizThreeSelected2(2)
                                if (quizThreeSelected1 !== 0) {
                                  setQuizIndex(3)
                                }
                              }}></i>
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow-0 flex-shrink-0 basis-full relative">
                          <div className={`px-40px pt-25px pb-15px ${quizThreeSelected2 === 3 ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[5px] border-white border-solid" : "border-[5px] border-[#C6C6C6] border-solid"}`}>
                            <div>
                              <Image
                                className="object-cover w-500px h-300px"
                                src={require("../../../public/assets/range/q2_pic_03.png")}
                                alt={""}
                                quality="100"
                                ></Image>
                            </div>
                            <div className="flex justify-between items-center mt-10px">
                              <div className="font-Grotesque-Regular text-26px text-[#262627] flex items-center">Windy coastline</div>
                              <i className={`${quizThreeSelected2 === 3 ? "bg-[url('/assets/range/icon_checked.png')]" : "bg-[url('/assets/range/icon_check.png')]"} cursor-pointer bg-cover w-26px h-26px`} onClick={() => {
                                setQuizThreeSelected2(3)
                                if (quizThreeSelected1 !== 0) {
                                  setQuizIndex(3)
                                }
                              }}></i>
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow-0 flex-shrink-0 basis-full relative">
                          <div className={`px-40px pt-25px pb-15px ${quizThreeSelected2 === 4 ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[5px] border-white border-solid" : "border-[5px] border-[#C6C6C6] border-solid"}`}>
                            <div>
                              <Image
                                className="object-cover w-500px h-300px"
                                src={require("../../../public/assets/range/q2_pic_03.png")}
                                alt={""}
                                quality="100"
                                ></Image>
                            </div>
                            <div className="flex justify-between items-center mt-10px">
                              <div className="font-Grotesque-Regular text-26px text-[#262627] flex items-center">Hiking through a valley</div>
                              <i className={`${quizThreeSelected2 === 4 ? "bg-[url('/assets/range/icon_checked.png')]" : "bg-[url('/assets/range/icon_check.png')]"} cursor-pointer bg-cover w-26px h-26px`} onClick={() => {
                                setQuizThreeSelected2(4)
                                if (quizThreeSelected1 !== 0) {
                                  setQuizIndex(3)
                                }
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-center mt-20px">
                      {[0, 1, 2, 3].map((item, index) => {
                        return (
                          <div
                            key={index}
                            className={`h-5px mx-5px inline-block rounded-tr-10px rounded-bl-10px cursor-pointer ${
                              currentIndex === index
                                ? "bg-white w-50px"
                                : "bg-gray-300 w-20px"
                            }`}
                            onClick={() => scrollTo(index)}
                          ></div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
          { quizIndex === 3 && <>
            <div className="">
              <div className="font-AlbertusNova-Regular text-40px text-black mx-auto text-center pt-150px uppercase">Q4. Which one is yours ?</div>
              <div className="flex justify-center mt-50px">
                <div className={`px-40px pt-25px pb-15px ${quizFourSelected === 1 ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[5px] border-white border-solid" : "border-[5px] border-[#C6C6C6] border-solid"}`}>
                  <div>
                    <Image
                      className="object-cover w-350px h-350px"
                      src={require("../../../public/assets/range/q4_pic_01.png")}
                      alt={""}
                      quality="100"
                      ></Image>
                  </div>
                  <div className="flex justify-between items-center mt-10px">
                    <div className="font-Grotesque-Regular text-26px text-[#262627] flex items-center">A</div>
                    <i className={`${quizFourSelected === 1 ? "bg-[url('/assets/range/icon_checked.png')]" : "bg-[url('/assets/range/icon_check.png')]"} cursor-pointer bg-cover w-26px h-26px`} onClick={() => {
                      setQuizFourSelected(1)
                      setQuizIndex(4)
                    }}></i>
                  </div>
                </div>
                <div className={`px-40px pt-25px pb-15px ml-10px ${quizFourSelected === 2 ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[5px] border-white border-solid" : "border-[5px] border-[#C6C6C6] border-solid"}`}>
                  <div>
                    <Image
                      className="object-cover w-350px h-350px"
                      src={require("../../../public/assets/range/q4_pic_02.png")}
                      alt={""}
                      quality="100"
                      ></Image>
                  </div>
                  <div className="flex justify-between items-center mt-10px">
                    <div className="font-Grotesque-Regular text-26px text-[#262627] flex items-center">B</div>
                    <i className={`${quizFourSelected === 2 ? "bg-[url('/assets/range/icon_checked.png')]" : "bg-[url('/assets/range/icon_check.png')]"} cursor-pointer bg-cover w-26px h-26px`} onClick={() => {
                      setQuizFourSelected(2)
                      setQuizIndex(4)
                    }}></i>
                  </div>
                </div>
                <div className={`px-40px pt-25px pb-15px ml-10px ${quizFourSelected === 3 ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[5px] border-white border-solid" : "border-[5px] border-[#C6C6C6] border-solid"}`}>
                  <div>
                    <Image
                      className="object-cover w-350px h-350px"
                      src={require("../../../public/assets/range/q2_pic_03.png")}
                      alt={""}
                      quality="100"
                      ></Image>
                  </div>
                  <div className="flex justify-between items-center mt-10px">
                    <div className="font-Grotesque-Regular text-26px text-[#262627] flex items-center">C</div>
                    <i className={`${quizFourSelected === 3 ? "bg-[url('/assets/range/icon_checked.png')]" : "bg-[url('/assets/range/icon_check.png')]"} cursor-pointer bg-cover w-26px h-26px`} onClick={() => {
                      setQuizFourSelected(3)
                      setQuizIndex(4)
                    }}></i>
                  </div>
                </div>
              </div>
            </div>
          </>}
          { quizIndex === 4 && <>
            <div className="">
              <div className="font-AlbertusNova-Regular text-40px text-black mx-auto text-center pt-150px uppercase">Q5. Which best describes you？</div>
              <div className="w-724px mx-auto">
                <div className={`px-50px py-40px flex justify-between items-center mt-80px ${quizFiveSelected === 1 ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[3px] border-white border-solid" : "border-[3px] border-[#C6C6C6] border-solid"}`}>
                  <div className="font-Grotesque-Regular text-28px text-[#262627]">The Purist</div>
                  <i className={`${quizFiveSelected === 1 ? "bg-[url('/assets/range/icon_checked.png')]" : "bg-[url('/assets/range/icon_check.png')]"} cursor-pointer bg-cover w-26px h-26px`} onClick={() => {
                    setQuizFiveSelected(1)
                  }}></i>
                </div>
                <div className={`px-50px py-40px flex justify-between items-center mt-10px ${quizFiveSelected === 2 ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[3px] border-white border-solid" : "border-[3px] border-[#C6C6C6] border-solid"}`}>
                  <div className="font-Grotesque-Regular text-28px text-[#262627]">The rule breaker</div>
                  <i className={`${quizFiveSelected === 2 ? "bg-[url('/assets/range/icon_checked.png')]" : "bg-[url('/assets/range/icon_check.png')]"} cursor-pointer bg-cover w-26px h-26px`} onClick={() => {
                    setQuizFiveSelected(2)
                  }}></i>
                </div>
                <div className={`px-50px py-40px flex justify-between items-center mt-10px ${quizFiveSelected === 3 ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[3px] border-white border-solid" : "border-[3px] border-[#C6C6C6] border-solid"}`}>
                  <div className="font-Grotesque-Regular text-28px text-[#262627]">The open-minded traditionalist</div>
                  <i className={`${quizFiveSelected === 3 ? "bg-[url('/assets/range/icon_checked.png')]" : "bg-[url('/assets/range/icon_check.png')]"} cursor-pointer bg-cover w-26px h-26px`} onClick={() => {
                    setQuizFiveSelected(3)
                  }}></i>
                </div>
              </div>
              <div className="cursor-pointer font-AlbertusNova-Regular text-20px bg-[url('/assets/range/start_btn.png')] bg-cover w-376px h-92px uppercase leading-[90px] text-center mx-auto mt-50px mobile:bg-[url('/assets/range/start_btn_small.png')] mobile:w-139px mobile:h-44px mobile:leading-[50px] mobile:text-13px"
                onClick={() => {
                  setQuizIndex(5)
                }}>see your flavor profile</div>
            </div>
          </>}
          { quizIndex !== 5 && <>
            <div className="absolute w-full bottom-50px">
              <div className="flex w-[1370px] mx-auto justify-center">
                <div className={`${quizIndex === 0 ? "font-Grotesque-Medium border-[#696969]" : "font-Grotesque-Regular border-[#AEAEAE]" } relative text-20px w-280px text-center  border-b-2 border-solid pb-10px`}
                  onClick={() => {
                    setQuizIndex(0)
                  }}>
                  Q1
                  <div className={`${quizIndex === 0 ? "bg-[url('/assets/range/icon_arrow_line.png')]" : ""} absolute w-122px h-9px bg-cover z-10 top-40px left-1/2 -ml-61px`}></div>
                </div>
                <div className={`${quizIndex === 1 ? "font-Grotesque-Medium border-[#696969]" : "font-Grotesque-Regular border-[#AEAEAE]" } relative text-20px w-280px text-center  border-b-2 border-solid pb-10px`}
                  onClick={() => {
                    setQuizIndex(1)
                  }}>
                  Q2
                  <div className={`${quizIndex === 1 ? "bg-[url('/assets/range/icon_arrow_line.png')]" : ""} absolute w-122px h-9px bg-cover z-10 top-40px left-1/2 -ml-61px`}></div>
                </div>
                <div className={`${quizIndex === 2 ? "font-Grotesque-Medium border-[#696969]" : "font-Grotesque-Regular border-[#AEAEAE]" } relative text-20px w-280px text-center  border-b-2 border-solid pb-10px`}
                  onClick={() => {
                    setQuizIndex(2)
                  }}>
                  Q3
                  <div className={`${quizIndex === 2 ? "bg-[url('/assets/range/icon_arrow_line.png')]" : ""} absolute w-122px h-9px bg-cover z-10 top-40px left-1/2 -ml-61px`}></div>
                </div>
                <div className={`${quizIndex === 3 ? "font-Grotesque-Medium border-[#696969]" : "font-Grotesque-Regular border-[#AEAEAE]" } relative text-20px w-280px text-center  border-b-2 border-solid pb-10px`}
                  onClick={() => {
                    setQuizIndex(3)
                  }}>
                  Q4
                  <div className={`${quizIndex === 3 ? "bg-[url('/assets/range/icon_arrow_line.png')]" : ""} absolute w-122px h-9px bg-cover z-10 top-40px left-1/2 -ml-61px`}></div>
                </div>
                <div className={`${quizIndex === 4 ? "font-Grotesque-Medium border-[#696969]" : "font-Grotesque-Regular border-[#AEAEAE]" } relative text-20px w-280px text-center  border-b-2 border-solid pb-10px`}
                  onClick={() => {
                    setQuizIndex(4)
                  }}>
                  Q5
                  <div className={`${quizIndex === 4 ? "bg-[url('/assets/range/icon_arrow_line.png')]" : ""} absolute w-122px h-9px bg-cover z-10 top-40px left-1/2 -ml-61px`}></div>
                </div>
              </div>
            </div>
          </> }
          {
            quizIndex === 5 && <>
            <div className="">
              <div className="font-AlbertusNova-Regular text-40px text-black mx-auto text-center pt-150px uppercase">
                You have an absolute adherence<br></br>
                to traditional rules of Whisky</div>
              </div>
              <div className="text-center mx-auto flex items-center justify-center mt-10px">
                <i className="inline-block bg-[url('/assets/range/icon_redo.png')] bg-cover w-30px h-30px mr-5px"></i>
                <span className="font-Grotesque-Regular text-26px text-black cursor-pointer" 
                  onClick={() => {
                    setQuizIndex(0)
                  }}>Redo</span>
              </div>
              <div className="w-[1251px] mx-auto mt-10px">
                <div className="bg-[url('/assets/range/bg_result.png')] bg-cover w-[1251px] h-400px flex px-125px pt-50px">
                  <div className="inline-flex flex-col items-center w-300px">
                    <Image
                      className="object-cover w-215px h-210px"
                      src={require("../../../public/assets/range/product.png")}
                      alt={""}
                      quality="100"
                      ></Image>
                      <div className="font-AlbertusNova-Regular text-24px text-black uppercase mt-20px">ancient moorland</div>
                  </div>
                  <div className="inline-flex flex-col w-600px ml-50px">
                    <div className="inline-flex items-center">
                        <i className="inline-block bg-[url('/assets/range/icon_business_meal.png')] bg-cover w-80px h-80px mr-10px"></i>
                        <div className="font-AlbertusNova-Regular text-40px text-black uppercase">business meal</div>
                    </div>
                    <div className="font-Grotesque-Regular text-18px text-black uppercase mt-10px">gifting occasion suggestion</div>
                    <div className="font-Grotesque-Regular text-26px leading-[40px] text-black uppercase mt-20px">Business is best served with a glass of untamed pleasure.</div>
                    <div className="inline-block bg-[url('/assets/range/bg_explore_btn.png')] bg-cover w-200px h-66px leading-[70px] font-AlbertusNova-Regular text-20px text-black text-center uppercase mt-20px">explore</div>
                  </div>
                </div>
                <div className="w-[1250px] border border-solid border-black">
                  <div className="bg-[url('/assets/range/bg_result_02.png')] bg-cover w-[1248px] h-113px">
                      <div className="font-Grotesque-Regular text-24px text-[#E6E7E8] text-center pt-20px">I’d like to have a personal copy of the results!</div>
                  </div>
                  <div className="inline-flex items-center pb-20px">
                    <div className="inline-flex items-baseline px-15px">
                      <i className="inline-block bg-[url('/assets/range/icon_account.png')] bg-cover w-22px h-22px mr-10px"></i>
                      <input type="text" className="font-Grotesque-Regular w-270px bg-transparent focus-visible:border-0 outline-none text-black text-24px placeholder:text-[#969797] placeholder:text-24px placeholder:font-Grotesque-Regular placeholder:leading-[24px] placeholder:uppercase"  placeholder="Enter first Name"/>
                    </div>
                    <div className="w-1px h-68px bg-black mx-20px"></div>
                    <div className="inline-flex items-baseline px-15px">
                      <i className="inline-block bg-[url('/assets/range/icon_email.png')] bg-cover w-29px h-22px mr-10px"></i>
                      <input type="text" className="font-Grotesque-Regular w-410px bg-transparent focus-visible:border-0 outline-none text-black text-24px placeholder:text-[#969797] placeholder:text-24px placeholder:font-Grotesque-Regular placeholder:leading-[24px] placeholder:uppercase"  placeholder="Enter your email address"/>
                    </div>
                    <div className="w-1px h-68px bg-black mx-20px"></div>
                    <div className="inline-flex justify-center items-baseline px-15px">
                      <div className="cursor-pointer font-AlbertusNova-Regular text-22px uppercase ml-100px">SUBMIT</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
        </div>
      </>}
    </div>
  );
}

export default FlavourFinderComponent;

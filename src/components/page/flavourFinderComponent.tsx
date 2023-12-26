"use client";

import React, {
  useEffect,
  useState,
  useCallback,
  SyntheticEvent,
  useRef,
} from "react";
import Image from "next/image";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
import Script from "next/script";
import axios from "axios";
import BaseImage from "../base/image";
import ReactPlayer from "react-player";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

declare const grecaptcha: any;

const key: string = "6LdUqy4pAAAAALX0zqKELaTvN8z0s0VhlY_DKaTj";

interface ComponentData {
  id: number;
  bg: {
    mImg: string;
    pImg: string;
  };
  quizs: {
    q1: {
      id: number;
      question: string;
      answers: Array<{
        id: number;
        mImg: string;
        pImg: string;
        value: string;
        label: string;
      }>;
    };
    q2: {
      id: number;
      question: string;
      description: string;
      answers: Array<{
        id: number;
        mImg: string;
        pImg: string;
        value: string;
        label: string;
        audio: string;
      }>;
    };
    q3: {
      id: number;
      question: string;
      step1: {
        id: number;
        title: string;
        answers: Array<{
          id: number;
          value: string;
          label: string;
        }>;
      };
      step2: {
        id: number;
        title: string;
        answers: Array<{
          id: number;
          mImg: string;
          pImg: string;
          value: string;
          label: string;
        }>;
      };
    };
    q4: {
      id: number;
      question: string;
      answers: Array<{
        id: number;
        mImg: string;
        pImg: string;
        value: string;
        label: string;
      }>;
    };
    q5: {
      id: number;
      question: string;
      answers: Array<{
        id: number;
        value: string;
        label: string;
      }>;
    };
  };
  recommendResults: Array<{
    img: {
      pImg: string;
      mImg: string;
    };
    name: string;
    icon: {
      pImg: string;
      mImg: string;
    };
    type: string;
    tips: string;
    description: string;
  }>;
}

const componentData: ComponentData = {
  id: 1,
  bg: {
    pImg: require("../../../public/assets/story/brand_story_chatper_end.png"),
    mImg: require("../../../public/assets/story/brand_story_chatper_end.png"),
  },
  quizs: {
    q1: {
      id: 0,
      question: "Q1. Which food is your favorite？",
      answers: [
        {
          id: 0,
          mImg: require("../../../public/assets/range/q1_pic_01_m.png"),
          pImg: require("../../../public/assets/range/q1_pic_01.png"),
          label: "Rich and Spicy",
          value: "A",
        },
        {
          id: 1,
          mImg: require("../../../public/assets/range/q1_pic_02_m.png"),
          pImg: require("../../../public/assets/range/q1_pic_02.png"),
          label: "Light and Sweet",
          value: "B",
        },
        {
          id: 2,
          mImg: require("../../../public/assets/range/q1_pic_03_m.png"),
          pImg: require("../../../public/assets/range/q1_pic_03.png"),
          label: "Smoky and Mellow",
          value: "C",
        },
      ],
    },
    q2: {
      id: 0,
      question: "Q2. NOW LISTEN VERY CAREFULLY...",
      description:
        "IMAGINE YOU ARE RETIRED FROM WORK NOW, WHERE DO YOU WANT TO VISIT MOST?",
      answers: [
        {
          id: 0,
          mImg: require("../../../public/assets/range/q2_pic_01.png"),
          pImg: require("../../../public/assets/range/q2_pic_01.png"),
          label: "Play",
          value: "A",
          audio: "https://yumen-ali.oss-cn-beijing.aliyuncs.com/01.mp3",
        },
        {
          id: 0,
          mImg: require("../../../public/assets/range/q2_pic_02.png"),
          pImg: require("../../../public/assets/range/q2_pic_02.png"),
          label: "Play",
          value: "B",
          audio: "https://yumen-ali.oss-cn-beijing.aliyuncs.com/02.mp3",
        },
        {
          id: 0,
          mImg: require("../../../public/assets/range/q2_pic_03.png"),
          pImg: require("../../../public/assets/range/q2_pic_03.png"),
          label: "Play",
          value: "C",
          audio: "https://yumen-ali.oss-cn-beijing.aliyuncs.com/03.mp3",
        },
      ],
    },
    q3: {
      id: 0,
      question: "Q3. When it comes to whisky？",
      step1: {
        id: 0,
        title: "Where would you commonly enjoy your whisky?",
        answers: [
          {
            id: 0,
            label: "Friendly Gathering At Home",
            value: "A",
          },
          {
            id: 0,
            label: "Business Meal",
            value: "B",
          },
          {
            id: 0,
            label: "At Home Alone",
            value: "C",
          },
          {
            id: 0,
            label: "Working At The Office",
            value: "D",
          },
          {
            id: 0,
            label: "Camping/Picnic Outdoors",
            value: "E",
          },
          {
            id: 0,
            label: "Special Occasions & Celebrations",
            value: "F",
          },
        ],
      },
      step2: {
        id: 0,
        title: "Where would you most like to enjoy your whiskey?",
        answers: [
          {
            id: 0,
            mImg: require("../../../public/assets/range/q3_pic_01.png"),
            pImg: require("../../../public/assets/range/q3_pic_01.png"),
            label: "Top Of Mountain",
            value: "A",
          },
          {
            id: 0,
            mImg: require("../../../public/assets/range/q3_pic_02.png"),
            pImg: require("../../../public/assets/range/q3_pic_02.png"),
            label: "Sunny Beach",
            value: "B",
          },
          {
            id: 0,
            mImg: require("../../../public/assets/range/q3_pic_03.png"),
            pImg: require("../../../public/assets/range/q3_pic_03.png"),
            label: "Windy Coastline",
            value: "C",
          },
          {
            id: 0,
            mImg: require("../../../public/assets/range/q3_pic_04.png"),
            pImg: require("../../../public/assets/range/q3_pic_04.png"),
            label: "Hiking Through A Valley",
            value: "D",
          },
        ],
      },
    },
    q4: {
      id: 0,
      question: "Q4. Which one is yours ?",
      answers: [
        {
          id: 0,
          mImg: require("../../../public/assets/range/q4_pic_01_m.png"),
          pImg: require("../../../public/assets/range/q4_pic_01.png"),
          label: "A",
          value: "A",
        },
        {
          id: 1,
          mImg: require("../../../public/assets/range/q4_pic_02_m.png"),
          pImg: require("../../../public/assets/range/q4_pic_02.png"),
          label: "B",
          value: "B",
        },
        {
          id: 2,
          mImg: require("../../../public/assets/range/q4_pic_03_m.png"),
          pImg: require("../../../public/assets/range/q4_pic_03.png"),
          label: "C",
          value: "C",
        },
      ],
    },
    q5: {
      id: 0,
      question: "Q5. Which best describes you？",
      answers: [
        {
          id: 0,
          label: "The Purist",
          value: "A",
        },
        {
          id: 0,
          label: "The Rule Breaker",
          value: "B",
        },
        {
          id: 0,
          label: "The Open-Minded Traditionalist",
          value: "C",
        },
      ],
    },
  },
  recommendResults: [
    {
      img: {
        pImg: require("../../../public/assets/range/product.png"),
        mImg: require("../../../public/assets/range/product.png"),
      },
      name: "ancient moorland",
      icon: {
        pImg: require("../../../public/assets/range/icon_business_meal.png"),
        mImg: require("../../../public/assets/range/icon_business_meal.png"),
      },
      type: "business meal",
      tips: "gifting occasion suggestion",
      description: "Business is best served with a glass of untamed pleasure.",
    },
    {
      img: {
        pImg: require("../../../public/assets/range/product_40.png"),
        mImg: require("../../../public/assets/range/product_40.png"),
      },
      name: "Tropical Coast",
      icon: {
        pImg: require("../../../public/assets/range/icon_home_sweet.png"),
        mImg: require("../../../public/assets/range/icon_home_sweet.png"),
      },
      type: "At home alone",
      tips: "gifting occasion suggestion",
      description: "Nothing beats a night cap after another fine day.",
    },
  ],
};

function FlavourFinderComponent(props: any) {
  const headStyle = props.data.entry.headStyle;
  const [data, setData] = useState<ComponentData>(componentData);

  const [isFullPage] = useState<boolean>(props.data.entry.isFullPage || false);
  const [isCurrentPage, setIsCurrentPage] = useState<boolean>(false);

  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  // QUIZ step:  0,1,2,3,4 => Q1,Q2,Q3,Q4,Q5  5 => Result
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [quizOneSelected, setQuizOneSelected] = useState<number>(0);
  const [quizTwoSelected, setQuizTwoSelected] = useState<number>(0);
  const [quizThreeSelected1, setQuizThreeSelected1] = useState<number>(0);
  const [quizThreeSelected2, setQuizThreeSelected2] = useState<number>(0);
  const [quizFourSelected, setQuizFourSelected] = useState<number>(0);
  const [quizFiveSelected, setQuizFiveSelected] = useState<number>(0);

  const [videoPlay1, setVideoPlay1] = useState<boolean>(false);
  const [videoPlay2, setVideoPlay2] = useState<boolean>(false);
  const [videoPlay3, setVideoPlay3] = useState<boolean>(false);

  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerGroup, setSlidesPerGroup] = useState(2);

  const [currentRecommend, setCurrentRecommend] = useState<number>(0);

  // const onChangeScroll = useCallback(
  //   (emblaApi: { selectedScrollSnap: () => any }) => {
  //     setCurrentIndex(emblaApi?.selectedScrollSnap() || 0);
  //   },
  //   []
  // );

  // const scrollTo = useCallback(
  //   (index: number) => {
  //     emblaApi?.scrollTo(index);
  //     setCurrentIndex(index);
  //   },
  //   [emblaApi]
  // );

  const submit = () => {
    grecaptcha.ready(function () {
      grecaptcha
        .execute(key, { action: "submit" })
        .then(async function (token: string) {
          // Add your logic to submit to your backend server here.

          console.log(token);
          axios
            .post(
              "/api/recaptcha",
              {
                token: token,
                cs: "cs",
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        });
    });
  };

  // useEffect(() => {
  //   emblaApi?.on("select", onChangeScroll);
  // }, [emblaApi, onChangeScroll]);

  useEffect(() => {
    console.log("showQuiz", showQuiz);
    console.log("quizIndex", quizIndex);
  }, [showQuiz, quizIndex]);

  return (
    <div id="DiscoverYourWildFlavour" data-anchor={4} className="relative overflow-hidden select-none" >
      <input type="hidden" value={headStyle} />

      {
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${key}`}
          async
          defer
        />
      }

      {!showQuiz && (
        <>
          <div className="flex h-screen">
            <Image
              className="object-cover"
              src={require("../../../public/assets/range/favour_finder_bg.png")}
              alt={""}
              quality="100"
            ></Image>
          </div>
          <div className="absolute right-0 bg-[url('/assets/range/favour_finder_text_bg.png')] bg-cover top-1/2 w-560px h-490px -mt-245px paid:w-448 paid:h-391px paid:-mt-196px mobile:w-325px mobile:h-365px mobile:left-1/2 mobile:-ml-163px mobile:-mt-183px mobile:bg-[url('/assets/range/favour_finder_text_m.png')] ">
            <div className="leading-6 font-AlbertusNova-Regular uppercase text-center text-28px mt-100px paid:text-24px paid:mt-80px mobile:text-20px mobile:mt-60px mobile:w-200px mobile:mx-auto">
              Discover your Wild Flavour
            </div>
            <div className="font-Grotesque-Regular text-[#696969] px-20px m-20px text-18px paid:text-16px mobile:text-14px">
              <div className="text-center">
                The whisky you choose to drink, and how you drink it, can reveal
                a lot about your character.
              </div>
              <div className="text-center mt-10px">
                Let&apos;s find out which one is your &ldquo;Glass of
                Wildmoor&rdquo; and what is special in YOU.
              </div>
            </div>
            <div
              className="cursor-pointer absolute bg-[url('/assets/range/start_btn.png')] bg-cover uppercase text-center left-1/2 bottom-50px w-225px h-55px leading-[55px] -ml-112px paid:w-180px paid:-ml-90px paid:bottom-40px paid:h-44px paid:leading-[44px] mobile:bg-[url('/assets/range/start_btn_small.png')] mobile:w-139px mobile:-ml-70px mobile:bottom-30px mobile:h-44px mobile:leading-[50px] mobile:text-13px"
              onClick={() => setShowQuiz(true)}
            >
              Start
            </div>
          </div>
          <div className="w-full absolute bottom-20px z-20 font-Grotesque-Regular text-[#969797] uppercase text-20px paid:text-14px mobile:text-10px">
            <div className="flex justify-between mx-auto w-[1250px] paid:w-1000px mobile:w-full text-center">
              <span
                className="inline-block cursor-pointer mobile:w-64px"
                onClick={() => {
                  props.scrollToPage(0);
                }}
              >
                products family
              </span>
              <span
                className="inline-block cursor-pointer mobile:w-64px"
                onClick={() => {
                  props.scrollToPage(1);
                }}
              >
                Tales From The Wild
              </span>
              <span
                className="inline-block cursor-pointer mobile:w-64px"
                onClick={() => {
                  props.scrollToPage(2);
                }}
              >
                Serving Suggestion
              </span>
              <span
                className="inline-block cursor-pointer mobile:w-64px"
                onClick={() => {
                  props.scrollToPage(3);
                }}
              >
                Bottle Concept
              </span>
              <span
                className="relative inline-block cursor-pointer text-[#696969] mobile:w-64px mobile:text-white"
                onClick={() => {
                  props.scrollToPage(4);
                }}
              >
                Flavour Finder
                <div className="bg-[url('/assets/range/icon_nav_line.png')] absolute bg-cover z-10 left-1/2 w-189px h-7px top-26px -ml-95px paid:w-154px paid:h-6px paid:top-24px paid:-ml-77px mobile:top-36px mobile:w-64px mobile:h-3px mobile:-ml-32px"></div>
              </span>
            </div>
          </div>
        </>
      )}
      {showQuiz && (
        <>
          <div
            className={`relative bg-[url('/assets/range/bg_quiz.png')] bg-cover h-screen bg-[#E6E7E8]`}
          >
            {quizIndex === 0 && (
              <>
                <div className="font-AlbertusNova-Regular text-black mx-auto text-center pt-150px uppercase text-34px paid:text-28px paid:pt-100px mobile:text-15px mobile:pt-78px">
                  {data.quizs.q1.question}
                </div>
                <div className="flex justify-center mt-84px paid:mt-68px mobile:mt-24px mobile:flex-col mobile:mx-auto mobile:items-center">
                  {data.quizs.q1.answers.map((answer, index) => {
                    return (
                      <div
                        key={index}
                        className={`mx-5px w-341px px-20px pt-20px pb-14px paid:w-277px paid:px-17px paid:pt-17px paid:pb-10px mobile:w-300px mobile:px-20px mobile:pt-17px mobile:pb-10px mobile:mx-0 mobile:my-5px ${
                          quizOneSelected === index + 1
                            ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[5px] border-white border-solid mobile:border-[2px]"
                            : "border-[5px] border-[#C6C6C6] border-solid mobile:border-[2px]"
                        }`}
                      >
                        <div className="relative w-291px h-291px paid:w-233px paid:h-233px mobile:w-250px mobile:h-125px">
                          <BaseImage
                            mImg={answer.mImg}
                            pImg={answer.pImg}
                            alt={""}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                          ></BaseImage>
                        </div>
                        <div className="flex justify-between items-center mt-10px mobile:px-20px">
                          <div className="font-Grotesque-Regular text-[#262627] text-22px paid:text-18px mobile:text-13px">
                            {answer.label}
                          </div>
                          <i
                            className={`cursor-pointer bg-cover w-22px h-22px paid:w-18px paid:h-18px mobile:w-13px mobile:h-13px ${
                              quizOneSelected === index + 1
                                ? "bg-[url('/assets/range/icon_checked.png')]"
                                : "bg-[url('/assets/range/icon_check.png')]"
                            } `}
                            onClick={() => {
                              setQuizOneSelected(index);
                              setQuizIndex(1);
                            }}
                          ></i>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
            {quizIndex === 1 && (
              <>
                <div className="">
                  <div className="font-AlbertusNova-Regular text-black mx-auto text-center pt-150px uppercase w-860px text-34px paid:w-720px paid:text-28px paid:pt-100px mobile:w-325px mobile:text-15px mobile:pt-78px">
                    {data.quizs.q2.question}
                  </div>
                  <div className="font-AlbertusNova-Regular text-black mx-auto text-center uppercase w-860px text-34px paid:w-720px paid:text-28px mobile:w-325px mobile:text-15px">
                    {data.quizs.q2.description}
                  </div>
                  <div className="flex justify-center mt-84px paid:mt-68px mobile:mt-24px mobile:flex-col mobile:mx-auto mobile:items-center">
                    {data.quizs.q2.answers.map((answer, index) => {
                      return (
                        <div
                          key={index}
                          className={`mx-5px w-341px px-20px pt-20px pb-14px paid:w-277px paid:px-17px paid:pt-17px paid:pb-10px mobile:w-300px mobile:p-20px mobile:mx-0 mobile:my-5px mobile:flex ${
                            quizTwoSelected === index + 1
                              ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[5px] border-white border-solid mobile:border-[2px]"
                              : "border-[5px] border-[#C6C6C6] border-solid mobile:border-[2px]"
                          }`}
                        >
                          <div className="relative w-291px h-291px paid:w-233px paid:h-233px mobile:w-150px mobile:h-150px">
                            <BaseImage
                              mImg={answer.mImg}
                              pImg={answer.pImg}
                              alt={""}
                              layout="fill"
                              objectFit="cover"
                              quality={100}
                            ></BaseImage>
                          </div>
                          <div className="flex justify-between items-center mt-10px mobile:w-90px mobile:ml-20px">
                            <div className="font-Grotesque-Regular text-[#262627] flex items-center text-22px paid:text-18px mobile:text-13px mobile:flex-col">
                              <i
                                className="inline-block cursor-pointer  bg-[url('/assets/range/icon_play.png')] bg-cover mr-5px w-34px h-34px paid:w-27px paid:h-27px mobile:w-20px mobile:h-20px"
                                onClick={() => {
                                  if (index === 0) {
                                    setVideoPlay1(!videoPlay1);
                                    setVideoPlay2(false);
                                    setVideoPlay3(false);
                                  } else if (index === 1) {
                                    setVideoPlay1(false);
                                    setVideoPlay2(!videoPlay2);
                                    setVideoPlay3(false);
                                  } else if (index === 2) {
                                    setVideoPlay1(false);
                                    setVideoPlay2(false);
                                    setVideoPlay3(!videoPlay3);
                                  }
                                }}
                              ></i>
                              <span>{answer.label}</span>
                              <ReactPlayer
                                className="hidden"
                                playing={
                                  index === 0
                                    ? videoPlay1
                                    : index === 1
                                    ? videoPlay2
                                    : videoPlay3
                                }
                                loop={true}
                                muted={false}
                                controls={false}
                                controlsList="nodownload"
                                onEnded={() => {}}
                                width="1%"
                                height="1%"
                                url={answer.audio}
                              ></ReactPlayer>
                            </div>
                            <i
                              className={`cursor-pointer bg-cover w-22px h-22px paid:w-18px paid:h-18px mobile:w-13px mobile:h-13px ${
                                quizTwoSelected === index + 1
                                  ? "bg-[url('/assets/range/icon_checked.png')]"
                                  : "bg-[url('/assets/range/icon_check.png')]"
                              } `}
                              onClick={() => {
                                setQuizTwoSelected(index + 1);
                                setQuizIndex(2);
                              }}
                            ></i>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
            {quizIndex === 2 && (
              <>
                <div>
                  <div className="font-AlbertusNova-Regular text-black mx-auto text-center pt-150px uppercase w-860px text-34px paid:w-720px paid:text-28px paid:pt-100px mobile:w-325px mobile:text-15px mobile:pt-78px">
                    {data.quizs.q3.question}
                  </div>
                  <div className="flex justify-between mt-50px mx-auto w-[1166px] paid:w-933px mobile:w-300px mobile:flex-col mobile:mt-21px">
                    <div className="relative w-500px paid:w-400px mobile:w-300px">
                      <div className="font-Grotesque-Medium text-[#696969] mx-auto text-center text-20px mb-20px paid:text-16px paid:mb-20px mobile:text-12px">
                        {data.quizs.q3.step1.title}
                      </div>
                      <div
                        className="relative overflow-auto max-h-[325px] paid:max-h-[235px] mobile:max-h-[400px]"
                        onWheel={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        {data.quizs.q3.step1.answers.map((answer, index) => {
                          return (
                            <div
                              key={index}
                              className={`flex justify-between items-center px-40px py-18px mt-6px paid:px-30px paid:py-14px paid:mt-4px mobile:px-20px mobile:py-17px mobile:mt-5px ${
                                quizThreeSelected1 === index + 1
                                  ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[3px] border-white border-solid mobile:border-[2px]"
                                  : "border-[3px] border-[#C6C6C6] border-solid mobile:border-[2px]"
                              }`}
                            >
                              <div className="font-Grotesque-Regular text-[#262627] text-24px paid:text-18px mobile:text-12px">
                                {answer.label}
                              </div>
                              <i
                                className={`cursor-pointer bg-cover w-22px h-22px paid:w-18px paid:h-18px mobile:w-13px mobile:h-13px ${
                                  quizThreeSelected1 === index + 1
                                    ? "bg-[url('/assets/range/icon_checked.png')]"
                                    : "bg-[url('/assets/range/icon_check.png')]"
                                } `}
                                onClick={() => {
                                  setQuizThreeSelected1(index + 1);
                                  if (quizThreeSelected2 !== 0) {
                                    setQuizIndex(3);
                                  }
                                }}
                              ></i>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="w-500px paid:w-400px mobile:w-310px mobile:mt-30px">
                      <div className="font-Grotesque-Medium text-[#696969] mx-auto text-center text-20px paid:text-16px mobile:text-12px">
                        {data.quizs.q3.step2.title}
                      </div>
                      <div className="w-1000px paid:w-800px mobile:w-620px overflow-hidden">
                        <div
                          className="relative"
                          // ref={emblaRef}
                        >
                          <Swiper
                            modules={[Autoplay]}
                            loop={true}
                            speed={500}
                            allowTouchMove={true}
                            slidesPerView={2}
                            autoplay={{
                              delay: 3000, // 自动播放的间隔时间（以毫秒为单位）
                              disableOnInteraction: false, // 用户互动后是否停止自动播放
                            }}
                            onSlideChange={(e) => {
                              setCurrentIndex(e.realIndex);
                            }}
                          >
                            {data.quizs.q3.step2.answers.map(
                              (answer, index) => {
                                return (
                                  <SwiperSlide
                                    key={index}
                                    className="relative py-20px paid:py-15px mobile:py-10px"
                                  >
                                    <div
                                      className={`mx-10px px-34px pt-21px pb-12px paid:px-26px paid:pt-16px paid:pb-10px mobile:px-22px ${
                                        quizThreeSelected2 === index + 1
                                          ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[5px] border-white border-solid paid:border-[3px] mobile:border-[2px]"
                                          : "border-[5px] border-[#C6C6C6] border-solid paid:border-[3px] mobile:border-[2px]"
                                      }`}
                                    >
                                      <div className="relative h-250px paid:h-200px mobile:h-140px">
                                        <BaseImage
                                          mImg={answer.mImg}
                                          pImg={answer.pImg}
                                          alt={""}
                                          layout="fill"
                                          objectFit="cover"
                                          quality={30}
                                        ></BaseImage>
                                      </div>
                                      <div className="flex justify-between items-center mt-10px">
                                        <div className="font-Grotesque-Regular text-[#262627] flex items-center text-20px py-20px paid:text-16px mobile:py-16px mobile:text-12px">
                                          {answer.label}
                                        </div>
                                        <i
                                          className={`cursor-pointer bg-cover w-22px h-22px paid:w-18px paid:h-18px mobile:w-13px mobile:h-13px ${
                                            quizThreeSelected2 === index + 1
                                              ? "bg-[url('/assets/range/icon_checked.png')]"
                                              : "bg-[url('/assets/range/icon_check.png')]"
                                          }`}
                                          onClick={() => {
                                            setQuizThreeSelected2(index + 1);
                                            if (quizThreeSelected1 !== 0) {
                                              setQuizIndex(3);
                                            }
                                          }}
                                        ></i>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                );
                              }
                            )}
                          </Swiper>
                          {/* <div className="flex">
                            {data.quizs.q3.step2.answers.map(
                              (answer, index) => {
                                return (
                                  <div
                                    key={index}
                                    className="flex-grow-0 flex-shrink-0 basis-full relative py-20px mobile:p-5px"
                                  >
                                    <div
                                      className={`mx-4px px-34px pt-21px pb-12px ml-10px paid:px-26px paid:pt-16px paid:pb-10px mobile:px-22px ${
                                        quizThreeSelected2 === index + 1
                                          ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[5px] border-white border-solid paid:border-[3px] mobile:border-[2px]"
                                          : "border-[5px] border-[#C6C6C6] border-solid paid:border-[3px] mobile:border-[2px]"
                                      }`}
                                    >
                                      <div className="relative w-416px h-250px paid:w-333px paid:h-200px mobile:w-240px mobile:h-140px">
                                        <BaseImage
                                          mImg={answer.mImg}
                                          pImg={answer.pImg}
                                          alt={""}
                                          layout="fill"
                                          objectFit="cover"
                                          quality={30}
                                        ></BaseImage>
                                      </div>
                                      <div className="flex justify-between items-center mt-10px">
                                        <div className="font-Grotesque-Regular text-[#262627] flex items-center text-20px py-20px paid:text-16px mobile:py-16px mobile:text-12px">
                                          {answer.label}
                                        </div>
                                        <i
                                          className={`cursor-pointer bg-cover w-22px h-22px paid:w-18px paid:h-18px mobile:w-13px mobile:h-13px ${
                                            quizThreeSelected2 === index + 1
                                              ? "bg-[url('/assets/range/icon_checked.png')]"
                                              : "bg-[url('/assets/range/icon_check.png')]"
                                          }`}
                                          onClick={() => {
                                            setQuizThreeSelected2(index + 1);
                                            if (quizThreeSelected1 !== 0) {
                                              setQuizIndex(3);
                                            }
                                          }}
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div> */}
                        </div>
                      </div>
                      <div className="w-full flex items-center justify-center">
                        {data.quizs.q3.step2.answers.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className={`h-5px mx-5px inline-block rounded-tr-10px rounded-bl-10px cursor-pointer ${
                                currentIndex === index
                                  ? "bg-white w-50px"
                                  : "bg-gray-300 w-20px"
                              }`}
                              // onClick={() => scrollTo(index)}
                            ></div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {quizIndex === 3 && (
              <>
                <div className="font-AlbertusNova-Regular text-black mx-auto text-center pt-150px uppercase text-34px paid:text-28px paid:pt-100px mobile:text-15px mobile:pt-78px">
                  {data.quizs.q4.question}
                </div>
                <div className="flex justify-center mt-84px paid:mt-68px mobile:mt-24px mobile:flex-col mobile:mx-auto mobile:items-center">
                  {data.quizs.q4.answers.map((answer, index) => {
                    return (
                      <div
                        key={index}
                        className={`mx-5px w-341px px-20px pt-20px pb-14px paid:w-277px paid:px-17px paid:pt-17px paid:pb-10px mobile:w-300px mobile:px-20px mobile:pt-17px mobile:pb-10px mobile:mx-0 mobile:my-5px ${
                          quizFourSelected === index + 1
                            ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[5px] border-white border-solid mobile:border-[2px]"
                            : "border-[5px] border-[#C6C6C6] border-solid mobile:border-[2px]"
                        }`}
                      >
                        <div className="relative w-291px h-291px paid:w-233px paid:h-233px mobile:w-250px mobile:h-125px">
                          <BaseImage
                            mImg={answer.mImg}
                            pImg={answer.pImg}
                            alt={""}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                          ></BaseImage>
                        </div>
                        <div className="flex justify-between items-center mt-10px mobile:px-20px">
                          <div className="font-Grotesque-Regular text-[#262627] text-22px paid:text-18px mobile:text-13px">
                            {answer.label}
                          </div>
                          <i
                            className={`cursor-pointer bg-cover w-22px h-22px paid:w-18px paid:h-18px mobile:w-13px mobile:h-13px ${
                              quizFourSelected === index + 1
                                ? "bg-[url('/assets/range/icon_checked.png')]"
                                : "bg-[url('/assets/range/icon_check.png')]"
                            } `}
                            onClick={() => {
                              setQuizFourSelected(index + 1);
                              setQuizIndex(4);
                            }}
                          ></i>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
            {quizIndex === 4 && (
              <>
                <div className="">
                  <div className="font-AlbertusNova-Regular text-black mx-auto text-center pt-150px uppercase w-860px text-34px paid:w-720px paid:text-28px paid:pt-100px mobile:w-325px mobile:text-15px mobile:pt-195px">
                    {data.quizs.q5.question}
                  </div>
                  <div className="w-724px mx-auto mt-120px paid:mt-96px mobile:mt-42px mobile:w-305px">
                    {data.quizs.q5.answers.map((answer, index) => {
                      return (
                        <div
                          key={index}
                          className={`flex justify-between items-center px-40px py-18px mt-10px paid:px-30px paid:py-14px paid:mt-6px mobile:px-20px mobile:py-17px mobile:mt-5px ${
                            quizFiveSelected === index + 1
                              ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[3px] border-white border-solid mobile:border-[2px]"
                              : "border-[3px] border-[#C6C6C6] border-solid mobile:border-[2px]"
                          }`}
                        >
                          <div className="font-Grotesque-Regular text-[#262627] text-24px paid:text-18px mobile:text-12px">
                            {answer.label}
                          </div>
                          <i
                            className={`cursor-pointer bg-cover w-22px h-22px paid:w-18px paid:h-18px mobile:w-13px mobile:h-13px ${
                              quizFiveSelected === index + 1
                                ? "bg-[url('/assets/range/icon_checked.png')]"
                                : "bg-[url('/assets/range/icon_check.png')]"
                            } `}
                            onClick={() => {
                              setQuizFiveSelected(index + 1);
                            }}
                          ></i>
                        </div>
                      );
                    })}
                  </div>
                  <div
                    className="cursor-pointer font-AlbertusNova-Regular bg-[url('/assets/range/start_btn.png')] bg-cover uppercase text-center mx-auto leading-[80px] text-18px mt-40px w-316px h-77px paid:leading-[65px] paid:text-14px paid:w-254px paid:h-62px paid:mt-36px mobile:bg-[url('/assets/range/start_btn_m2.png')] mobile:w-188px mobile:h-44px mobile:leading-[50px] mobile:text-10px"
                    onClick={() => {
                      setQuizIndex(5);
                    }}
                  >
                    see your flavor profile
                  </div>
                </div>
              </>
            )}
            {quizIndex !== 5 && (
              <>
                <div className="absolute w-full bottom-50px paid:bottom-40px mobile:bottom-35px">
                  <div className="flex mx-auto justify-center w-[1141px] paid:w-913px mobile:w-282px">
                    <div
                      className={`${
                        quizIndex === 0
                          ? "font-Grotesque-Medium border-[#696969]"
                          : "font-Grotesque-Regular border-[#AEAEAE]"
                      } relative cursor-pointer text-20px w-233px paid:w-187px text-center border-b-2 border-solid pb-10px`}
                      onClick={() => {
                        setQuizIndex(0);
                      }}
                    >
                      Q1
                      <div
                        className={`${
                          quizIndex === 0
                            ? "bg-[url('/assets/range/icon_arrow_line.png')] mobile:bg-[url('/assets/range/icon_arrow_line_mobile.png')]"
                            : ""
                        } absolute bg-cover z-10 top-40px left-1/2 w-101px -ml-50px h-8px paid:w-82px paid:-ml-41px paid:h-6px mobile:w-58px mobile:-ml-29px mobile:h-5px`}
                      ></div>
                    </div>
                    <div
                      className={`${
                        quizIndex === 1
                          ? "font-Grotesque-Medium border-[#696969]"
                          : "font-Grotesque-Regular border-[#AEAEAE]"
                      } relative cursor-pointer text-20px w-233px paid:w-187px text-center  border-b-2 border-solid pb-10px`}
                      onClick={() => {
                        setQuizIndex(1);
                      }}
                    >
                      Q2
                      <div
                        className={`${
                          quizIndex === 1
                            ? "bg-[url('/assets/range/icon_arrow_line.png')] mobile:bg-[url('/assets/range/icon_arrow_line_mobile.png')]"
                            : ""
                        } absolute bg-cover z-10 top-40px left-1/2 w-101px -ml-50px h-8px paid:w-82px paid:-ml-41px paid:h-6px mobile:w-58px mobile:-ml-29px mobile:h-5px`}
                      ></div>
                    </div>
                    <div
                      className={`${
                        quizIndex === 2
                          ? "font-Grotesque-Medium border-[#696969]"
                          : "font-Grotesque-Regular border-[#AEAEAE]"
                      } relative cursor-pointer text-20px w-233px paid:w-187px text-center  border-b-2 border-solid pb-10px`}
                      onClick={() => {
                        setQuizIndex(2);
                      }}
                    >
                      Q3
                      <div
                        className={`${
                          quizIndex === 2
                            ? "bg-[url('/assets/range/icon_arrow_line.png')] mobile:bg-[url('/assets/range/icon_arrow_line_mobile.png')]"
                            : ""
                        } absolute bg-cover z-10 top-40px left-1/2 w-101px -ml-50px h-8px paid:w-82px paid:-ml-41px paid:h-6px mobile:w-58px mobile:-ml-29px mobile:h-5px`}
                      ></div>
                    </div>
                    <div
                      className={`${
                        quizIndex === 3
                          ? "font-Grotesque-Medium border-[#696969]"
                          : "font-Grotesque-Regular border-[#AEAEAE]"
                      } relative cursor-pointer text-20px w-233px paid:w-187px text-center  border-b-2 border-solid pb-10px`}
                      onClick={() => {
                        setQuizIndex(3);
                      }}
                    >
                      Q4
                      <div
                        className={`${
                          quizIndex === 3
                            ? "bg-[url('/assets/range/icon_arrow_line.png')] mobile:bg-[url('/assets/range/icon_arrow_line_mobile.png')]"
                            : ""
                        } absolute bg-cover z-10 top-40px left-1/2 w-101px -ml-50px h-8px paid:w-82px paid:-ml-41px paid:h-6px mobile:w-58px mobile:-ml-29px mobile:h-5px`}
                      ></div>
                    </div>
                    <div
                      className={`${
                        quizIndex === 4
                          ? "font-Grotesque-Medium border-[#696969]"
                          : "font-Grotesque-Regular border-[#AEAEAE]"
                      } relative cursor-pointer text-20px w-233px paid:w-187px text-center  border-b-2 border-solid pb-10px`}
                      onClick={() => {
                        setQuizIndex(4);
                      }}
                    >
                      Q5
                      <div
                        className={`${
                          quizIndex === 4
                            ? "bg-[url('/assets/range/icon_arrow_line.png')] mobile:bg-[url('/assets/range/icon_arrow_line_mobile.png')]"
                            : ""
                        } absolute bg-cover z-10 top-40px left-1/2 w-101px -ml-50px h-8px paid:w-82px paid:-ml-41px paid:h-6px mobile:w-58px mobile:-ml-29px mobile:h-5px`}
                      ></div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {quizIndex === 5 && (
              <>
                <div className="">
                  <div className="font-AlbertusNova-Regular text-black mx-auto text-center uppercase pt-135px w-590x text-30px paid:top-100px paid:w-472px paid:text-24px mobile:w-320px mobile:text-15px mobile:pt-85px">
                    You have an absolute adherence<br></br>
                    to traditional rules of Whisky
                  </div>
                </div>
                <div className="text-center mx-auto flex items-center justify-center mt-10px">
                  <i className="inline-block bg-[url('/assets/range/icon_redo.png')] bg-cover mr-5px w-25px h-25px paid:w-20px paid:h-20px mobile:w-15px mobile:h-15px"></i>
                  <span
                    className="font-Grotesque-Regular text-black cursor-pointer text-22px paid:text-18px mobile:text-13px"
                    onClick={() => {
                      setQuizIndex(0);
                    }}
                  >
                    Redo
                  </span>
                </div>
                <div className="mx-auto mt-10px w-[1042px] paid:w-834px mobile:w-330px">
                  <div className="bg-[url('/assets/range/bg_result.png')] mobile:bg-[url('/assets/range/bg_result_m.png')] bg-cover flex px-113px pt-42px w-[1042px] h-334px paid:px-90px paid:pt-34px paid:w-834px paid:h-267px mobile:w-330px mobile:h-461px mobile:flex-col mobile:px-45px mobile:pt-25px">
                    <div className="inline-flex flex-col items-center w-234px paid:w-188px mobile:w-241px">
                      <Image
                        className="object-cover w-180px h-175px paid:w-144px paid:h-120px mobile:w-148px mobile:h-145px"
                        src={data.recommendResults[currentRecommend].img.pImg}
                        alt={""}
                        quality="100"
                      ></Image>
                      <div className="font-AlbertusNova-Regular text-black uppercase mt-20px text-20px paid:text-16px mobile:text-14px">
                        {data.recommendResults[currentRecommend].name}
                      </div>
                      <div className="flex mt-10px">
                        {data.recommendResults.map((item, index) => {
                          return (
                            <div
                              key={key}
                              className={`h-4px mx-4px inline-block rounded-tr-10px rounded-bl-10px cursor-pointer ${
                                currentRecommend === index
                                  ? "bg-[#969797] w-50px"
                                  : "bg-[#E6E7E8] w-20px"
                              }`}
                              onClick={() => setCurrentRecommend(index)}
                            ></div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="inline-flex flex-col ml-50px w-515px paid:w-412px mobile:w-241px mobile:ml-0 mobile:justify-center mobile:items-center mobile:border-t mobile:border-solid mobile:border-[#E6E7E8] mobile:mt-10px mobile:pt-10px">
                      <div className="inline-flex items-center">
                        <i className="inline-block bg-[url('/assets/range/icon_business_meal.png')] bg-cover mr-10px w-68px h-68px paid:w-54px paid:h-54px mobile:w-36px mobile:h-36px"></i>
                        <div className="font-AlbertusNova-Regular text-black uppercase text-34px paid:text-27px mobile:text-16px">
                          {data.recommendResults[currentRecommend].type}
                        </div>
                      </div>
                      <div className="font-Grotesque-Regular text-black uppercase mt-10px text-15px paid:text-12px mobile:text-10px">
                        {data.recommendResults[currentRecommend].tips}
                      </div>
                      <div className="font-Grotesque-Regular text-black uppercase mt-20px leading-normal text-22px paid:text-18px mobile:text-14px mobile:text-center">
                        {data.recommendResults[currentRecommend].description}
                      </div>
                      <div className="inline-block font-AlbertusNova-Regular bg-[url('/assets/range/bg_explore_btn.png')] bg-cover text-black text-center uppercase mt-20px w-167px h-55px leading-[60px] text-17px paid:w-134px paid:h-44px paid:leading-[50px] paid:text-14px">
                        explore
                      </div>
                    </div>
                  </div>
                  <div className="border border-solid border-black w-[1042px] paid:w-834px mobile:w-330px">
                    <div className="bg-[url('/assets/range/bg_result_02.png')] mobile:bg-[url('/assets/range/bg_result_02_m.png')] bg-cover w-[1042px] h-94px paid:w-834px paid:h-75px mobile:w-330px mobile:h-56px">
                      <div className="font-Grotesque-Regular text-[#E6E7E8] text-center pt-17px text-20px paid:pt-14px paid:text-16px mobile:pt-10px mobile:text-12px">
                        I’d like to have a personal copy of the results!
                      </div>
                    </div>
                    <div className="inline-flex items-center pb-17px paid:pb-14px mobile:flex-col mobile:items-start mobile:pb-0">
                      <div className="inline-flex items-center px-25px mobile:pt-10px mobile:pb-20px">
                        <i className="inline-block bg-[url('/assets/range/icon_account.png')] bg-cover mr-14px w-18px h-18px paid:w-15px paid:h-15px mobile:w-12px mobile:h-11px"></i>
                        <input
                          type="text"
                          className="font-Grotesque-Regular bg-transparent focus-visible:border-0 outline-none text-black text-20px placeholder:text-[#969797] placeholder:text-20px placeholder:font-Grotesque-Regular placeholder:leading-[20px] placeholder:uppercase w-208px paid:w-164px paid:text-16px paid:placeholder:text-16px paid:placeholder:leading-[16px] mobile:text-13px mobile:placeholder:text-13px mobile:placeholder:leading-[13px] mobile:w-250px"
                          placeholder="Enter first Name"
                        />
                      </div>
                      <div className="w-1px bg-black h-57px paid:h-45px mobile:h-1px mobile:w-330px"></div>
                      <div className="inline-flex items-center px-25px mobile:py-20px">
                        <i className="inline-block bg-[url('/assets/range/icon_email.png')] bg-cover mr-10px w-24px h-18px paid:w-20px paid:h-15px mobile:w-15px mobile:h-11px"></i>
                        <input
                          type="text"
                          className="font-Grotesque-Regular bg-transparent focus-visible:border-0 outline-none text-black text-20px placeholder:text-[#969797] placeholder:text-20px placeholder:font-Grotesque-Regular placeholder:leading-[20px] placeholder:uppercase w-315px paid:w-250px paid:text-16px paid:placeholder:text-16px paid:placeholder:leading-[16px] mobile:text-13px mobile:placeholder:text-13px mobile:placeholder:leading-[13px] mobile:w-250px"
                          placeholder="Enter your email address"
                        />
                      </div>
                      <div className="w-1px bg-black h-57px paid:h-45px mobile:h-1px mobile:w-330px"></div>
                      <div className="inline-flex justify-center items-center px-15px w-325px paid:w-260px mobile:w-330px mobile:h-60px">
                        <div
                          id="flavourFinderSubmit"
                          className="inline-block cursor-pointer font-AlbertusNova-Regular text-22px uppercase "
                          onClick={() => {
                            submit();
                          }}
                        >
                          SUBMIT
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full absolute bottom-20px z-20 font-Grotesque-Regular text-[#969797] uppercase text-20px paid:text-14px mobile:text-10px">
                  <div className="flex justify-between mx-auto w-[1250px] paid:w-1000px mobile:w-full text-center">
                    <span
                      className="inline-block cursor-pointer mobile:w-64px"
                      onClick={() => {
                        props.scrollToPage(0);
                      }}
                    >
                      products family
                    </span>
                    <span
                      className="inline-block cursor-pointer mobile:w-64px"
                      onClick={() => {
                        props.scrollToPage(1);
                      }}
                    >
                      Tales From The Wild
                    </span>
                    <span
                      className="inline-block cursor-pointer mobile:w-64px"
                      onClick={() => {
                        props.scrollToPage(2);
                      }}
                    >
                      Serving Suggestion
                    </span>
                    <span
                      className="inline-block cursor-pointer mobile:w-64px"
                      onClick={() => {
                        props.scrollToPage(3);
                      }}
                    >
                      Bottle Concept
                    </span>
                    <span
                      className="relative inline-block cursor-pointer text-[#696969] mobile:w-64px mobile:text-white"
                      onClick={() => {
                        props.scrollToPage(4);
                      }}
                    >
                      Flavour Finder
                      <div className="bg-[url('/assets/range/icon_nav_line.png')] absolute bg-cover z-10 left-1/2 w-189px h-7px top-26px -ml-95px paid:w-154px paid:h-6px paid:top-24px paid:-ml-77px mobile:top-36px mobile:w-64px mobile:h-3px mobile:-ml-32px"></div>
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default FlavourFinderComponent;

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
import { FreeMode, Mousewheel, Scrollbar } from "swiper/modules";
import { PopupMessage } from "../layout/popup";
import "swiper/css";
import "swiper/css/scrollbar";
import eventbus from "@/utils/eventbus";
import BaseButton from "../base/button";

declare const grecaptcha: any;

const key: string = "6LdUqy4pAAAAALX0zqKELaTvN8z0s0VhlY_DKaTj";

interface Product {
  id: number;
  name: string;
  productName: string;
  productCode: string;
  quizResultProductImage: {
    altText: string;
    imagemobile: {
      url: string;
    };
    imagepc: {
      url: string;
    };
  };
  productImage: {
    altText: string;
    imagemobile: {
      url: string;
    };
    imagepc: {
      url: string;
    };
  };
}

interface Message {
  dywfMessageTitleSuccess: string;
  dywfMessageSuccess: string;
  dywfMessageTitleFail: string;
  dywfMessageFail: string;
  dywfMessageBtnContent: string;
}

interface result {
  key: string;
  productList: Array<Product>;
}

interface ComponentData {
  basic: {
    dywfEmailAddress: string;
    dywfEmailContent: string;
    dywfEmailName: string;
    dywfExploreContent: string;
    dywfResultContent: string;
    dywfResultSubtitle: string;
    dywfSubmitContent: string;
    flavourFinderComponentDescription1: string;
    flavourFinderComponentDescription2: string;
    flavourFinderComponentTitle: string;
    flavourFinderComponentStartContent: string;
    dywfSeeYourFlavorProfile: string;
    dywfRedo: string;
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
          icon: {
            mImg: string;
            pImg: string;
          };
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
}

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function genComponentData(data: any) {
  const Q1 = data.dataQuizQ1Collection.items[0];
  const Q2 = data.dataQuizQ2Collection.items[0];
  const Q3 = data.dataQuizQ3Collection.items[0];
  const Q4 = data.dataQuizQ4Collection.items[0];
  const Q5 = data.dataQuizQ5Collection.items[0];
  const basic = data.rangeCollection.items[0];

  const _data: ComponentData = {
    basic: {
      dywfEmailAddress: basic.dywfEmailAddress,
      dywfEmailContent: basic.dywfEmailContent,
      dywfEmailName: basic.dywfEmailName,
      dywfExploreContent: basic.dywfExploreContent,
      dywfResultContent: basic.dywfResultContent,
      dywfResultSubtitle: basic.dywfResultSubtitle,
      dywfSubmitContent: basic.dywfSubmitContent,
      flavourFinderComponentDescription1:
        basic.flavourFinderComponentDescription1,
      flavourFinderComponentDescription2:
        basic.flavourFinderComponentDescription2,
      flavourFinderComponentTitle: basic.flavourFinderComponentTitle,
      flavourFinderComponentStartContent:
        basic.flavourFinderComponentStartContent,
      dywfSeeYourFlavorProfile: basic.dywfSeeYourFlavorProfile,
      dywfRedo: basic.dywfRedo,
    },
    quizs: {
      q1: {
        id: Q1.id,
        question: Q1.topicContent,
        answers: [
          {
            id: Q1.optionAId,
            mImg: Q1.optionAImage.imagemobile.url,
            pImg: Q1.optionAImage.imagepc.url,
            value: Q1.optionAValue,
            label: Q1.optionAContent,
          },
          {
            id: Q1.optionBId,
            mImg: Q1.optionBImage.imagemobile.url,
            pImg: Q1.optionBImage.imagepc.url,
            value: Q1.optionBValue,
            label: Q1.optionBContent,
          },
          {
            id: Q1.optionCId,
            mImg: Q1.optionCImage.imagemobile.url,
            pImg: Q1.optionCImage.imagepc.url,
            value: Q1.optionCValue,
            label: Q1.optionCContent,
          },
        ],
      },
      q2: {
        id: Q2.id,
        question: Q2.topicContent,
        description: Q2.description,
        answers: [
          {
            id: Q2.optionAId,
            mImg: Q2.optionAImage.imagemobile.url,
            pImg: Q2.optionAImage.imagepc.url,
            value: Q2.optionAValue,
            label: Q2.optionAContent,
            audio: Q2.optionAAudio.video.url,
          },
          {
            id: Q2.optionBId,
            mImg: Q2.optionBImage.imagemobile.url,
            pImg: Q2.optionBImage.imagepc.url,
            value: Q2.optionBValue,
            label: Q2.optionBContent,
            audio: Q2.optionBAudio.video.url,
          },
          {
            id: Q2.optionCId,
            mImg: Q2.optionCImage.imagemobile.url,
            pImg: Q2.optionCImage.imagepc.url,
            value: Q2.optionCValue,
            label: Q2.optionCContent,
            audio: Q2.optionCAudio.video.url,
          },
        ],
      },
      q3: {
        id: Q3.id,
        question: Q3.topicContent,
        step1: {
          id: Q3.question1Id,
          title: Q3.question1Content,
          answers: [
            {
              id: Q3.option1AId,
              label: Q3.option1AContent,
              value: Q3.option1AValue,
              icon: {
                mImg: Q3.option1AIcon?.imagemobile?.url,
                pImg: Q3.option1AIcon?.imagepc?.url,
              },
            },
            {
              id: Q3.option1BId,
              label: Q3.option1BContent,
              value: Q3.option1BValue,
              icon: {
                mImg: Q3.option1BIcon?.imagemobile?.url,
                pImg: Q3.option1BIcon?.imagepc?.url,
              },
            },
            {
              id: Q3.option1CId,
              label: Q3.option1CContent,
              value: Q3.option1CValue,
              icon: {
                mImg: Q3.option1CIcon?.imagemobile?.url,
                pImg: Q3.option1CIcon?.imagepc?.url,
              },
            },
            {
              id: Q3.option1DId,
              label: Q3.option1DContent,
              value: Q3.option1DValue,
              icon: {
                mImg: Q3.option1DIcon?.imagemobile?.url,
                pImg: Q3.option1DIcon?.imagepc?.url,
              },
            },
            {
              id: Q3.option1EId,
              label: Q3.option1EContent,
              value: Q3.option1EValue,
              icon: {
                mImg: Q3.option1EIcon?.imagemobile?.url,
                pImg: Q3.option1EIcon?.imagepc?.url,
              },
            },
            {
              id: Q3.option1FId,
              label: Q3.option1FContent,
              value: Q3.option1FValue,
              icon: {
                mImg: Q3.option1FIcon?.imagemobile?.url,
                pImg: Q3.option1FIcon?.imagepc?.url,
              },
            },
          ],
        },
        step2: {
          id: Q3.question2Id,
          title: Q3.question2Content,
          answers: [
            {
              id: Q3.option2AId,
              label: Q3.option2AContent,
              value: Q3.option2AValue,
              mImg: Q3.option2AImage?.imagemobile?.url,
              pImg: Q3.option2AImage?.imagepc?.url,
            },
            {
              id: Q3.option2BId,
              label: Q3.option2BContent,
              value: Q3.option2BValue,
              mImg: Q3.option2BImage?.imagemobile?.url,
              pImg: Q3.option2BImage?.imagepc?.url,
            },
            {
              id: Q3.option2CId,
              label: Q3.option2CContent,
              value: Q3.option2CValue,
              mImg: Q3.option2CImage?.imagepc?.url,
              pImg: Q3.option2CImage?.imagemobile?.url,
            },
            {
              id: Q3.option2DId,
              label: Q3.option2DContent,
              value: Q3.option2DValue,
              mImg: Q3.option2DImage?.imagemobile?.url,
              pImg: Q3.option2DImage?.imagepc?.url,
            },
          ],
        },
      },
      q4: {
        id: Q4.id,
        question: Q4.topicContent,
        answers: [
          {
            id: Q4.optionAId,
            mImg: Q4.optionAImage?.imagemobile?.url,
            pImg: Q4.optionAImage?.imagepc?.url,
            value: Q4.optionAValue,
            label: Q4.optionAContent,
          },
          {
            id: Q4.optionBId,
            mImg: Q4.optionBImage?.imagemobile?.url,
            pImg: Q4.optionBImage?.imagepc?.url,
            value: Q4.optionBValue,
            label: Q4.optionBContent,
          },
          {
            id: Q4.optionCId,
            mImg: Q4.optionCImage?.imagemobile?.url,
            pImg: Q4.optionCImage?.imagepc?.url,
            value: Q4.optionCValue,
            label: Q4.optionCContent,
          },
        ],
      },
      q5: {
        id: Q5.id,
        question: Q5.topicContent,
        answers: [
          {
            id: Q5.optionAId,
            value: Q5.optionAValue,
            label: Q5.optionAContent,
          },
          {
            id: Q5.optionBId,
            value: Q5.optionBValue,
            label: Q5.optionBContent,
          },
          {
            id: Q5.optionCId,
            value: Q5.optionCValue,
            label: Q5.optionCContent,
          },
        ],
      },
    },
  };
  return _data;
}

function genProductData(data: any) {
  const _data: any = data.items;
  return _data;
}

function genResultData(productList: Array<Product>) {
  // 0A 1B 2D 3R 4T 5W
  const _data: Array<{
    key: string;
    productList: Array<Product>;
  }> = [
    {
      key: "AAA",
      productList: productList.filter((item) => item.id === 3),
    },
    {
      key: "AAB",
      productList: productList
        .filter((item) => item.id === 3)
        .concat(productList.filter((item) => item.id === 5)),
    },
    {
      key: "AAC",
      productList: productList
        .filter((item) => item.id === 3)
        .concat(productList.filter((item) => item.id === 5)),
    },
    {
      key: "AAD",
      productList: productList.filter((item) => item.id === 2),
    },
    {
      key: "ABA",
      productList: productList.filter((item) => item.id === 5),
    },
    {
      key: "ABB",
      productList: productList.filter((item) => item.id === 3),
    },
    {
      key: "ABC",
      productList: productList.filter((item) => item.id === 3),
    },
    {
      key: "ABD",
      productList: productList.filter((item) => item.id === 3),
    },
    {
      key: "ACA",
      productList: productList.filter((item) => item.id === 3),
    },
    {
      key: "ACB",
      productList: productList
        .filter((item) => item.id === 3)
        .concat(productList.filter((item) => item.id === 5)),
    },
    {
      key: "ACC",
      productList: productList
        .filter((item) => item.id === 3)
        .concat(productList.filter((item) => item.id === 5))
        .concat(productList.filter((item) => item.id === 1)),
    },
    {
      key: "ACD",
      productList: productList
        .filter((item) => item.id === 3)
        .concat(productList.filter((item) => item.id === 5)),
    },
    {
      key: "BAA",
      productList: productList.filter((item) => item.id === 0),
    },
    {
      key: "BAB",
      productList: productList.filter((item) => item.id === 0),
    },
    {
      key: "BAC",
      productList: productList.filter((item) => item.id === 0),
    },
    {
      key: "BAD",
      productList: productList.filter((item) => item.id === 0),
    },
    {
      key: "BBA",
      productList: productList.filter((item) => item.id === 0),
    },
    {
      key: "BBB",
      productList: productList.filter((item) => item.id === 0),
    },
    {
      key: "BBC",
      productList: productList.filter((item) => item.id === 0),
    },
    {
      key: "BBD",
      productList: productList.filter((item) => item.id === 0),
    },
    {
      key: "BCA",
      productList: productList.filter((item) => item.id === 0),
    },
    {
      key: "BCB",
      productList: productList.filter((item) => item.id === 0),
    },
    {
      key: "BCC",
      productList: productList
        .filter((item) => item.id === 0)
        .concat(productList.filter((item) => item.id === 0)),
    },
    {
      key: "BCD",
      productList: productList.filter((item) => item.id === 0),
    },
    {
      key: "CAA",
      productList: productList.filter((item) => item.id === 4),
    },
    {
      key: "CAB",
      productList: productList.filter((item) => item.id === 4),
    },
    {
      key: "CAC",
      productList: productList.filter((item) => item.id === 4),
    },
    {
      key: "CAD",
      productList: productList.filter((item) => item.id === 4),
    },
    {
      key: "CBA",
      productList: productList
        .filter((item) => item.id === 4)
        .concat(productList.filter((item) => item.id === 3)),
    },
    {
      key: "CBB",
      productList: productList.filter((item) => item.id === 4),
    },
    {
      key: "CBC",
      productList: productList.filter((item) => item.id === 4),
    },
    {
      key: "CBD",
      productList: productList.filter((item) => item.id === 4),
    },
    {
      key: "CCA",
      productList: productList.filter((item) => item.id === 4),
    },
    {
      key: "CCB",
      productList: productList.filter((item) => item.id === 4),
    },
    {
      key: "CCC",
      productList: productList
        .filter((item) => item.id === 4)
        .concat(productList.filter((item) => item.id === 1)),
    },
    {
      key: "CCD",
      productList: productList.filter((item) => item.id === 4),
    },
  ];
  return _data;
}
import { TrackingTypeContent } from "@/utils/analytics";
export interface propsContent {
  getPageStore: Function;
  updatePageStore: Function;
  changeNavStatus: Function;
  scrollToPage: Function;
  TrackingType: TrackingTypeContent;
  currentSlug: string;
  data: {
    entry: any;
    name: string;
    type: string;
  };
}

function FlavourFinderComponent(props: propsContent) {
  console.log(props.data.entry);
  const [headStyle, setheadStyle] = useState(props.data.entry.headStyle);
  const currNum = props.data.entry.currentPageNumber;
  const [emailName, setEmailName] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [canSubmit, setCanSubmit] = useState<boolean>(false);

  useEffect(() => {
    if (emailRegex.test(emailAddress) && emailName.length > 0) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [emailName, emailAddress]);

  const handleEmailName = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmailName(e.target.value);
  };
  const handleEmailAddress = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmailAddress(e.target.value);
  };

  if (currNum == 4) {
    let currentNav = document.getElementById(
      "nav-" + headStyle
    ) as HTMLInputElement;
    if (headStyle == "black") {
      let currentNav = document.getElementById(
        "nav-" + "white"
      ) as HTMLInputElement;
      currentNav && (currentNav.style.display = "none");
    }
    currentNav && (currentNav.style.display = "block");
  }
  const _componentData = genComponentData(props.data.entry.data);
  const _productData = genProductData(
    props.data.entry.productFamilyComponentProductsCollection
  );
  const _resultData = genResultData(_productData);
  const _messageData = props.data.entry.data.quizMessage.items[0] as Message;

  const [data, setData] = useState<ComponentData>(_componentData);

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
  const [currentVideoPlay, setCurrentVideoPlay] = useState<number>(0);

  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [currentRecommend, setCurrentRecommend] = useState<number>(0);
  const [recommend, setRecommend] = useState<result>();
  const [swiper, setSwiper] = useState<any>(null);
  const [popupMessage, setPopupMessage] = useState<PopupMessage>({
    title: _messageData.dywfMessageTitleSuccess,
    message: _messageData.dywfMessageSuccess,
    btnTxt: _messageData.dywfMessageBtnContent,
  });

  const scrollTo = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      swiper.slideToLoop(index, 500, true);
    },
    [swiper]
  );

  const doRecommend = () => {
    // todo
    if (
      quizOneSelected === 0 ||
      quizTwoSelected === 0 ||
      quizThreeSelected1 === 0 ||
      quizThreeSelected2 === 0 ||
      quizFourSelected === 0 ||
      quizFiveSelected === 0
    )
      return false;
    const key = `${data.quizs.q1.answers[quizOneSelected - 1].value}${
      data.quizs.q2.answers[quizTwoSelected - 1].value
    }${data.quizs.q3.step2.answers[quizThreeSelected2 - 1].value}`;
    const obj = _resultData.filter((item) => item.key === key)[0];
    console.log("setRecommend", obj);
    setRecommend(obj);
    setQuizIndex(5);
  };

  const submit = () => {
    if (!canSubmit) return;
    eventbus.emit("PopupBoxVisable", popupMessage);
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

  return (
    <section
      id="DiscoverYourWildFlavour"
      data-anchor={4}
      className="relative overflow-hidden select-none"
    >
      <input type="hidden" value={headStyle} data-style="headStyle" />
      <input
        type="hidden"
        value={props.TrackingType.scrollFull}
        data-slug={props.currentSlug}
      />

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
              className="object-cover mobile:h-screen mobile:max-w-none mobile:-ml-160px"
              src={require("../../../public/assets/range/favour_finder_bg.png")}
              alt={""}
              quality="100"
            ></Image>
          </div>
          <div className="absolute right-0  bg-[url('/assets/range/favour_finder_text_bg.png')] bg-cover top-1/2 w-[35em]  -mt-245px   mobile:w-325px  mobile:left-1/2 mobile:-ml-163px mobile:-mt-183px mobile:pr-22px mobile:pl-22px mobile:bg-[url('/assets/range/favour_finder_text_m.png')] ">
            <div className="leading-6 font-AlbertusNova-Regular uppercase text-center text-26px mt-[4em]  mobile:text-20px mobile:mt-60px mobile:w-200px mobile:mx-auto">
              {data.basic.flavourFinderComponentTitle}
            </div>
            <div className="font-Grotesque pl-52px pr-52px text-[#696969] text-18px pad:text-16px  mobile:text-14px mobile:ml-15px mobile:mr-15px ">
              <div className="text-center mt-[2em]  mobile:mt-19px mobile:leading-[2em]">
                {data.basic.flavourFinderComponentDescription1}
              </div>
              <div className="text-center mt-[2em]  mobile:mt-18px mobile:leading-[2em]">
                {data.basic.flavourFinderComponentDescription2}
              </div>
            </div>

            {/* <div
              className="cursor-pointer absolute  bg-[url('/assets/range/start_btn.png')] bg-contain uppercase text-center left-1/2 bottom-[4em] w-225px h-55px leading-[55px] -ml-112px  mobile:bg-[url('/assets/range/start_btn_small.png')] mobile:w-139px mobile:-ml-70px mobile:bottom-38px mobile:h-44px mobile:leading-[50px] mobile:text-13px"
              onClick={() => {
                props.changeNavStatus(false);
                setShowQuiz(true);
              }}
            > */}
            <BaseButton
              className="block mt-88px mb-65px hover:bg-[url('/assets/range/start-T.png')] hover:text-white  bg-[url('/assets/range/start_btn.png')] w-225px h-55px mx-auto  leading-[55px]  cursor-pointer text-center  text-black text-20px pad:text-14px uppercase font-AlbertusNova-Light font-normal mobile:hidden"
              category="Wildmoorrange"
              action="Flavoursurvey"
              onClick={() => {
                props.changeNavStatus(false);
                setShowQuiz(true);
                setheadStyle("black");
              }}
            >
              {data.basic.flavourFinderComponentStartContent}
            </BaseButton>
            <BaseButton
              className="hidden mobile:block mobile:bg-[url('/assets/range/start_btn.png')] mobile:mx-auto mobile:text-12px mobile:w-138px mobile:h-44px mobile:text-center mobile:leading-[44px] mobile:text-black mobile:font-AlbertusNova-Light mobile:font-normal mobile:mt-45px mobile:mb-33px"
              category="Wildmoorrange"
              action="Flavoursurvey"
              onClick={() => {
                props.changeNavStatus(false);
                setShowQuiz(true);
                setheadStyle("black");
              }}
            >
              {data.basic.flavourFinderComponentStartContent}
            </BaseButton>
          </div>
        </>
      )}
      {showQuiz && (
        <>
          <div
            className={`relative bg-[url('/assets/range/bg_quiz.png')] bg-cover h-screen bg-[#E6E7E8] mobile:h-screen mobile:flex mobile:flex-col`}
          >
            {quizIndex === 0 && (
              <>
                <div className="font-AlbertusNova-Regular text-black mx-auto text-center pt-150px uppercase text-34px pad:text-28px pad:pt-100px mobile:text-15px mobile:pt-78px">
                  {data.quizs.q1.question}
                </div>
                <div className="absolute left-1/2 -ml-688px pad:-ml-523px top-1/2 -mt-235px paid:-mt-157px flex justify-center mobile:relative mobile:top-0 mobile:left-0 mobile:mt-24px mobile:flex-col mobile:flex-1 mobile:justify-start mobile:mx-auto mobile:items-center mobile:h-300px">
                  <Swiper
                    freeMode={true}
                    modules={[FreeMode]}
                    direction="vertical"
                    slidesPerView="auto"
                    resistanceRatio={0}
                    className="mobile:h-full"
                    nested={true}
                  >
                    <SwiperSlide>
                      <div className="flex mobile:flex-col px-10px py-20px">
                        {data.quizs.q1.answers.map((answer, index) => {
                          return (
                            <div
                              key={index}
                              onClick={() => {
                                setQuizOneSelected(index + 1);
                                setQuizIndex(1);
                              }}
                              className={`cursor-pointer mx-5px w-450px px-45px pt-20px pb-14px pad:w-341px pad:px-17px pad:pt-17px pad:pb-10px mobile:w-300px mobile:px-20px mobile:pt-17px mobile:pb-10px mobile:mx-0 mobile:my-5px ${
                                quizOneSelected === index + 1
                                  ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[5px] border-white border-solid mobile:border-[2px]"
                                  : "border-[5px] border-[#C6C6C6] border-solid mobile:border-[2px]"
                              }`}
                            >
                              <div className="relative mx-auto w-350px h-350px pad:w-291px pad:h-291px mobile:w-full mobile:h-125px">
                                <BaseImage
                                  mImg={answer.mImg}
                                  pImg={answer.pImg}
                                  alt={""}
                                  layout="fill"
                                  objectFit="cover"
                                  quality={100}
                                ></BaseImage>
                              </div>
                              <div className="flex justify-between items-center mt-10px mobile:pt-10px">
                                <div className="font-Grotesque-Regular text-[#262627] text-22px pad:text-18px mobile:text-13px">
                                  {answer.label}
                                </div>
                                <i
                                  className={` bg-cover w-22px h-22px pad:w-18px pad:h-18px mobile:w-13px mobile:h-13px ${
                                    quizOneSelected === index + 1
                                      ? "bg-[url('/assets/range/icon_checked.png')]"
                                      : "bg-[url('/assets/range/icon_check.png')]"
                                  } `}
                                  onClick={() => {
                                    setQuizOneSelected(index + 1);
                                    // setQuizIndex(1);
                                  }}
                                ></i>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </>
            )}
            {quizIndex === 1 && (
              <>
                <div className="font-AlbertusNova-Regular text-black mx-auto text-center pt-150px uppercase w-860px text-34px pad:w-860px pad:text-28px pad:pt-100px mobile:w-325px mobile:text-15px mobile:pt-78px">
                  {data.quizs.q2.question}
                </div>
                <div className="font-AlbertusNova-Regular text-black mx-auto text-center uppercase w-910px text-34px pad:w-860px pad:text-28px mobile:w-325px mobile:text-15px">
                  {data.quizs.q2.description}
                </div>
                <div className="absolute left-1/2 -ml-688px pad:-ml-523px top-1/2 -mt-135px pad:-mt-87px flex justify-center mobile:relative mobile:top-0 mobile:left-0 mobile:mt-0 mobile:flex-col mobile:mx-auto mobile:items-center mobile:flex-col mobile:flex-1 mobile:justify-start mobile:mx-auto mobile:items-center mobile:h-300px">
                  <Swiper
                    freeMode={true}
                    modules={[FreeMode]}
                    direction="vertical"
                    slidesPerView="auto"
                    resistanceRatio={0}
                    className="mobile:h-full"
                    nested={true}
                  >
                    <SwiperSlide>
                      <div className="flex mobile:flex-col px-10px py-20px cursor-pointer">
                        {data.quizs.q2.answers.map((answer, index) => {
                          return (
                            <div
                              key={index}
                              onClick={() => {
                                if (currentVideoPlay === index + 1) {
                                  setCurrentVideoPlay(0);
                                } else {
                                  setCurrentVideoPlay(index + 1);
                                }
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

                                setQuizTwoSelected(index + 1);
                                setQuizIndex(2);
                              }}
                              className={`mx-5px w-450px px-45px pt-20px pb-14px pad:w-341px pad:px-17px pad:pt-17px pad:pb-10px mobile:w-300px mobile:p-10px mobile:mx-0 mobile:my-5px mobile:flex ${
                                quizTwoSelected === index + 1
                                  ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[5px] border-white border-solid mobile:border-[2px]"
                                  : "border-[5px] border-[#C6C6C6] border-solid mobile:border-[2px]"
                              }`}
                            >
                              <div className="relative mx-auto w-350px h-350px pad:w-291px pad:h-291px mobile:w-150px mobile:h-150px mobile:mx-0">
                                <ReactPlayer
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
                                  width="100%"
                                  height="100%"
                                  url={answer.audio}
                                ></ReactPlayer>
                              </div>
                              <div className="flex justify-between items-center mt-5px mobile:w-100px mobile:ml-20px">
                                <div className="font-Grotesque-Regular text-[#262627] flex items-center text-22px pad:text-18px mobile:text-13px mobile:flex-col">
                                  <i
                                    className={`inline-block  ${
                                      currentVideoPlay == index + 1
                                        ? 'bg-[url("/assets/range/icon_playing.gif")]'
                                        : 'bg-[url("/assets/range/icon_play.png")]'
                                    } bg-cover mr-5px w-40px h-40px pad:w-34px pad:h-34px mobile:w-26px mobile:h-26px`}
                                  ></i>
                                  <span>{answer.label}</span>
                                </div>
                                <i
                                  className={`cursor-pointer bg-cover w-22px h-22px pad:w-18px pad:h-18px mobile:w-13px mobile:h-13px ${
                                    quizTwoSelected === index + 1
                                      ? "bg-[url('/assets/range/icon_checked.png')]"
                                      : "bg-[url('/assets/range/icon_check.png')]"
                                  } `}
                                  onClick={() => {
                                    // setQuizTwoSelected(index + 1);
                                    // setQuizIndex(2);
                                  }}
                                ></i>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </>
            )}
            {quizIndex === 2 && (
              <>
                <div className="font-AlbertusNova-Regular text-black mx-auto text-center pt-150px uppercase w-860px text-34px pad:w-720px pad:text-28px pad:pt-100px mobile:w-325px mobile:text-15px mobile:pt-78px">
                  {data.quizs.q3.question}
                </div>
                <Swiper
                  freeMode={true}
                  modules={[FreeMode]}
                  direction="vertical"
                  slidesPerView="auto"
                  resistanceRatio={0}
                  className="mobile:h-full mobile:w-screen"
                  nested={true}
                >
                  <SwiperSlide>
                    <div className="flex justify-between mt-50px mx-auto w-[1374px] pad:w-[1045px] mobile:w-300px mobile:flex-col mobile:mt-21px">
                      <div className="relative w-600px pad:w-500px mobile:w-300px max-h-[calc(60vh)] flex flex-col">
                        <div className="font-Grotesque-Medium text-[#696969] mx-auto text-center text-20px mb-20px pad:text-16px pad:mb-20px mobile:text-12px">
                          {data.quizs.q3.step1.title}
                        </div>
                        <Swiper
                          freeMode={true}
                          modules={[FreeMode, Mousewheel, Scrollbar]}
                          slidesPerView="auto"
                          resistanceRatio={0}
                          direction="vertical"
                          className="h-full flex-1"
                          nested={true}
                          mousewheel={true}
                          scrollbar={true}
                        >
                          <SwiperSlide>
                            <div
                              className="relative p-10px scrollbar mobile:p-5px"
                              onWheel={(event) => {
                                event.stopPropagation();
                              }}
                            >
                              {data.quizs.q3.step1.answers.map(
                                (answer, index) => {
                                  return (
                                    <div
                                      key={index}
                                      className={`flex cursor-pointer justify-between items-center px-40px py-18px mt-6px pad:px-30px pad:py-14px pad:mt-4px mobile:px-20px mobile:py-10px mobile:mt-5px ${
                                        quizThreeSelected1 === index + 1
                                          ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[3px] border-white border-solid mobile:border-[2px] mobile:shadow-[0_2px_5px_0_rgba(0,0,0,0.4)]"
                                          : "border-[3px] border-[#C6C6C6] border-solid mobile:border-[2px]"
                                      }`}
                                      onClick={() => {
                                        setQuizThreeSelected1(index + 1);
                                        if (quizThreeSelected2 !== 0) {
                                          setQuizIndex(3);
                                        }
                                      }}
                                    >
                                      <div className="font-Grotesque-Regular text-[#262627] text-22px  mobile:text-12px">
                                        {answer.label}
                                      </div>
                                      <i
                                        className={`cursor-pointer bg-cover w-22px h-22px pad:w-18px pad:h-18px mobile:w-13px mobile:h-13px ${
                                          quizThreeSelected1 === index + 1
                                            ? "bg-[url('/assets/range/icon_checked.png')]"
                                            : "bg-[url('/assets/range/icon_check.png')]"
                                        } `}
                                        onClick={() => {
                                          setQuizThreeSelected1(index + 1);
                                          // if (quizThreeSelected2 !== 0) {
                                          //   setQuizIndex(3);
                                          // }
                                        }}
                                      ></i>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </SwiperSlide>
                          <div className="swiper-scrollbar !bg-transparent"></div>
                        </Swiper>
                      </div>
                      <div className="w-600px pad:w-500px mobile:w-310px mobile:mt-30px">
                        <div className="font-Grotesque-Medium text-[#696969] mx-auto text-center mb-10px text-20px pad:text-16px mobile:text-12px">
                          {data.quizs.q3.step2.title}
                        </div>
                        <div className="w-[1200px] pad:w-[1000px] mobile:w-620px overflow-hidden">
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
                              onSwiper={(swiper) => {
                                setSwiper(swiper);
                              }}
                            >
                              {data.quizs.q3.step2.answers.map(
                                (answer, index) => {
                                  return (
                                    <SwiperSlide
                                      key={index}
                                      className="cursor-pointer relative py-20px pad:py-15px mobile:py-10px"
                                      onClick={() => {
                                        setQuizThreeSelected2(index + 1);
                                        if (quizThreeSelected1 !== 0) {
                                          setQuizIndex(3);
                                        }
                                      }}
                                    >
                                      <div
                                        className={`mx-10px px-34px pt-34px pb-12px pad:px-26px pad:pt-26px pad:pb-10px mobile:px-18px mobile:pt-18px ${
                                          quizThreeSelected2 === index + 1
                                            ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[5px] border-white border-solid pad:border-[3px] mobile:border-[2px]"
                                            : "border-[5px] border-[#C6C6C6] border-solid pad:border-[3px] mobile:border-[2px]"
                                        }`}
                                      >
                                        <div className="relative h-300px pad:h-250px mobile:h-140px">
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
                                          <div className="font-Grotesque-Regular text-[#262627] flex items-center text-20px py-20px pad:text-16px mobile:py-16px mobile:text-12px">
                                            {answer.label}
                                          </div>
                                          <i
                                            className={`bg-cover w-22px h-22px pad:w-18px pad:h-18px mobile:w-13px mobile:h-13px ${
                                              quizThreeSelected2 === index + 1
                                                ? "bg-[url('/assets/range/icon_checked.png')]"
                                                : "bg-[url('/assets/range/icon_check.png')]"
                                            }`}
                                          ></i>
                                        </div>
                                      </div>
                                    </SwiperSlide>
                                  );
                                }
                              )}
                            </Swiper>
                          </div>
                        </div>
                        <div className="w-full flex items-center justify-center">
                          {data.quizs.q3.step2.answers.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className={`h-5px mx-5px inline-block rounded-tr-10px rounded-bl-10px cursor-pointer ${
                                  currentIndex === index
                                    ? "bg-[#696969] w-50px"
                                    : "bg-[#969797] w-20px"
                                }`}
                                onClick={() => scrollTo(index)}
                              ></div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </>
            )}
            {quizIndex === 3 && (
              <>
                <div className="font-AlbertusNova-Regular text-black mx-auto text-center pt-150px uppercase text-34px pad:text-28px pad:pt-100px mobile:text-15px mobile:pt-78px">
                  {data.quizs.q4.question}
                </div>
                <div className="absolute left-1/2 -ml-688px pad:-ml-523px top-1/2 -mt-235px paid:-mt-157px flex justify-center mobile:relative mobile:left-0 mobile:top-0 mobile:mt-0 mobile:flex-col mobile:mx-auto mobile:items-center mobile:flex-1 mobile:h-300px">
                  <Swiper
                    freeMode={true}
                    modules={[FreeMode]}
                    direction="vertical"
                    slidesPerView="auto"
                    resistanceRatio={0}
                    className="mobile:h-full"
                    nested={true}
                  >
                    <SwiperSlide>
                      <div className="flex mobile:flex-col px-10px py-20px cursor-pointer ">
                        {data.quizs.q4.answers.map((answer, index) => {
                          return (
                            <div
                              key={index}
                              onClick={() => {
                                setQuizFourSelected(index + 1);
                                setQuizIndex(4);
                              }}
                              className={`mx-5px w-450px px-45px pt-20px pb-14px pad:w-341px pad:px-17px pad:pt-17px pad:pb-10px mobile:w-300px mobile:px-20px mobile:pt-17px mobile:pb-10px mobile:mx-0 mobile:my-5px ${
                                quizFourSelected === index + 1
                                  ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[5px] border-white border-solid mobile:border-[2px]"
                                  : "border-[5px] border-[#C6C6C6] border-solid mobile:border-[2px]"
                              }`}
                            >
                              <div className="relative mx-auto w-350px h-350px pad:w-291px pad:h-291px mobile:w-full mobile:h-125px">
                                <BaseImage
                                  mImg={answer.mImg}
                                  pImg={answer.pImg}
                                  alt={""}
                                  layout="fill"
                                  objectFit="cover"
                                  quality={100}
                                ></BaseImage>
                              </div>
                              <div className="flex justify-between items-center mt-10px mobile:pt-10px">
                                <div className="font-Grotesque-Regular text-[#262627] text-22px pad:text-18px mobile:text-13px">
                                  {answer.label}
                                </div>
                                <i
                                  className={`bg-cover w-22px h-22px pad:w-18px pad:h-18px mobile:w-13px mobile:h-13px ${
                                    quizFourSelected === index + 1
                                      ? "bg-[url('/assets/range/icon_checked.png')]"
                                      : "bg-[url('/assets/range/icon_check.png')]"
                                  } `}
                                ></i>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </>
            )}
            {quizIndex === 4 && (
              <>
                <div className="">
                  <div className="font-AlbertusNova-Regular text-black mx-auto text-center pt-150px uppercase w-860px text-34px pad:w-720px pad:text-28px pad:pt-100px mobile:w-325px mobile:text-15px mobile:pt-195px">
                    {data.quizs.q5.question}
                  </div>
                  <div className="absolute left-1/2 -ml-362px top-1/2 -mt-200px w-724px mx-auto mobile:relative mobile:top-0 mobile:left-0 mobile:mt-42px mobile:mx-auto mobile:w-305px">
                    {data.quizs.q5.answers.map((answer, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => {
                            setQuizFiveSelected(index + 1);
                          }}
                          className={`cursor-pointer flex justify-between items-center px-40px py-40px mt-10px pad:px-30px pad:py-25px pad:mt-6px mobile:px-20px mobile:py-17px mobile:mt-5px ${
                            quizFiveSelected === index + 1
                              ? "bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.4)] border-[3px] border-white border-solid mobile:border-[2px]"
                              : "border-[3px] border-[#C6C6C6] border-solid mobile:border-[2px]"
                          }`}
                        >
                          <div className="font-Grotesque-Regular text-[#262627] text-24px pad:text-18px mobile:text-12px">
                            {answer.label}
                          </div>
                          <i
                            className={`bg-cover w-22px h-22px pad:w-18px pad:h-18px mobile:w-13px mobile:h-13px ${
                              quizFiveSelected === index + 1
                                ? "bg-[url('/assets/range/icon_checked.png')]"
                                : "bg-[url('/assets/range/icon_check.png')]"
                            } `}
                          ></i>
                        </div>
                      );
                    })}
                    <div
                      className={`cursor-pointer font-AlbertusNova-Regular bg-cover uppercase text-center mx-auto leading-[88px] text-18px mt-40px w-375px h-88px pad:leading-[65px] pad:text-14px pad:w-277px pad:h-65px pad:mt-36px mobile:w-188px mobile:h-44px mobile:leading-[44px] mobile:text-10px mobile:mt-20px
                      ${
                        quizOneSelected === 0 ||
                        quizTwoSelected === 0 ||
                        quizThreeSelected1 === 0 ||
                        quizThreeSelected2 === 0 ||
                        quizFourSelected === 0 ||
                        quizFiveSelected === 0
                          ? "bg-[url('/assets/range/result_btn_grey.png')] text-[#969797]"
                          : "bg-[url('/assets/range/result_btn.png')] text-[#000000] hover:bg-[url('/assets/range/result_btn_hover.png')] hover:text-white"
                      }`}
                      onClick={() => {
                        doRecommend();
                      }}
                    >
                      {data.basic.dywfSeeYourFlavorProfile}
                    </div>
                  </div>
                </div>
              </>
            )}
            <div className="mobile:h-70px shrink-0"></div>
            {quizIndex !== 5 && (
              <>
                <div className="absolute w-full bottom-50px pad:bottom-40px mobile:bottom-35px">
                  <div className="relative flex mx-auto justify-center w-[1375px] pad:w-[1045px] mobile:w-282px">
                    <div
                      className={`${
                        quizIndex === 0
                          ? "font-Grotesque-Medium border-[rgba(0,0,0,0)] text-[#696969]  mobile:before:hidden mobile:after:hidden before:content-[''] before:block before:w-[calc(50%_-_12px)] before:h-2px before:bg-[#828282] before:absolute before:left-0 before:-bottom-2px after:content-[''] after:block after:w-[calc(50%_-_12px)] after:h-2px after:bg-[#828282] after:absolute after:right-0 after:-bottom-2px"
                          : quizOneSelected !== 0
                          ? "font-Grotesque-Regular border-[#696969] text-[#696969]"
                          : "font-Grotesque-Regular border-[#AEAEAE] text-[#969797]"
                      } relative cursor-pointer text-20px w-275px pad:w-233px text-center border-b-2 border-solid pb-10px mobile:text-12px`}
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
                        } absolute bg-cover z-10 -bottom-8px left-1/2 w-101px -ml-50px h-8px mobile:w-58px mobile:-ml-29px mobile:h-5px mobile:-bottom-5px`}
                      ></div>
                    </div>
                    <div
                      className={`${
                        quizIndex === 1
                          ? "font-Grotesque-Medium border-[rgba(0,0,0,0)] text-[#696969]  mobile:before:hidden mobile:after:hidden  before:content-[''] before:block before:w-[calc(50%_-_12px)] before:h-2px before:bg-[#828282] before:absolute before:left-0 before:-bottom-2px after:content-[''] after:block after:w-[calc(50%_-_12px)] after:h-2px after:bg-[#828282] after:absolute after:right-0 after:-bottom-2px"
                          : quizTwoSelected !== 0
                          ? "font-Grotesque-Regular border-[#696969] text-[#696969]"
                          : "font-Grotesque-Regular border-[#AEAEAE] text-[#969797]"
                      } relative cursor-pointer text-20px w-275px pad:w-233px text-center border-b-2 border-solid pb-10px mobile:text-12px`}
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
                        } absolute bg-cover z-10 -bottom-8px left-1/2 w-101px -ml-50px h-8px mobile:w-58px mobile:-ml-29px mobile:h-5px mobile:-bottom-5px`}
                      ></div>
                    </div>
                    <div
                      className={`${
                        quizIndex === 2
                          ? "font-Grotesque-Medium border-[rgba(0,0,0,0)] text-[#696969]  mobile:before:hidden mobile:after:hidden  before:content-[''] before:block before:w-[calc(50%_-_12px)] before:h-2px before:bg-[#828282] before:absolute before:left-0 before:-bottom-2px after:content-[''] after:block after:w-[calc(50%_-_12px)] after:h-2px after:bg-[#828282] after:absolute after:right-0 after:-bottom-2px"
                          : quizThreeSelected1 !== 0 && quizThreeSelected2 !== 0
                          ? "font-Grotesque-Regular border-[#696969] text-[#696969]"
                          : "font-Grotesque-Regular border-[#AEAEAE] text-[#969797]"
                      } relative cursor-pointer text-20px w-275px pad:w-233px text-center border-b-2 border-solid pb-10px mobile:text-12px`}
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
                        } absolute bg-cover z-10 -bottom-8px left-1/2 w-101px -ml-50px h-8px mobile:w-58px mobile:-ml-29px mobile:h-5px mobile:-bottom-5px`}
                      ></div>
                    </div>
                    <div
                      className={` ${
                        quizIndex === 3
                          ? "font-Grotesque-Medium border-[rgba(0,0,0,0)] text-[#696969]  mobile:before:hidden mobile:after:hidden  before:content-[''] before:block before:w-[calc(50%_-_12px)] before:h-2px before:bg-[#828282] before:absolute before:left-0 before:-bottom-2px after:content-[''] after:block after:w-[calc(50%_-_12px)] after:h-2px after:bg-[#828282] after:absolute after:right-0 after:-bottom-2px"
                          : quizFourSelected !== 0
                          ? "font-Grotesque-Regular border-[#696969] text-[#696969]"
                          : "font-Grotesque-Regular border-[#AEAEAE] text-[#969797]"
                      } relative cursor-pointer text-20px w-275px pad:w-233px text-center border-b-2 border-solid pb-10px mobile:text-12px`}
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
                        } absolute bg-cover z-10 -bottom-8px left-1/2 w-101px -ml-50px h-8px mobile:w-58px mobile:-ml-29px mobile:h-5px mobile:-bottom-5px`}
                      ></div>
                    </div>
                    <div
                      className={`${
                        quizIndex === 4
                          ? "font-Grotesque-Medium border-[rgba(0,0,0,0)] text-[#696969] mobile:before:hidden mobile:after:hidden before:content-[''] before:block before:w-[calc(50%_-_12px)] before:h-2px before:bg-[#828282] before:absolute before:left-0 before:-bottom-2px after:content-[''] after:block after:w-[calc(50%_-_12px)] after:h-2px after:bg-[#828282] after:absolute after:right-0 after:-bottom-2px"
                          : quizFiveSelected !== 0
                          ? "font-Grotesque-Regular border-[#696969] text-[#696969]"
                          : "font-Grotesque-Regular border-[#AEAEAE] text-[#969797]"
                      } relative cursor-pointer text-20px w-275px pad:w-233px text-center border-b-2 border-solid pb-10px mobile:text-12px`}
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
                        } absolute bg-cover z-10 -bottom-8px left-1/2 w-101px -ml-50px h-8px mobile:w-58px mobile:-ml-29px mobile:h-5px mobile:-bottom-5px`}
                      ></div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {quizIndex === 5 && (
              <>
                <Swiper
                  freeMode={true}
                  modules={[FreeMode]}
                  direction="vertical"
                  slidesPerView="auto"
                  resistanceRatio={0}
                  className="mobile:h-full"
                  nested={true}
                >
                  <SwiperSlide>
                    <div className="">
                      <div className="font-AlbertusNova-Regular line-clamp-2 text-black mx-auto text-center uppercase pt-135px w-800px text-30px pad:top-100px pad:w-590px pad:text-24px mobile:w-320px mobile:text-15px">
                        {data.quizs.q5.answers[quizFiveSelected - 1].value}
                      </div>
                    </div>
                    <div className="text-center mx-auto flex items-center justify-center mt-10px">
                      <i className="inline-block bg-[url('/assets/range/icon_redo.png')] bg-cover mr-5px w-25px h-25px pad:w-20px pad:h-20px mobile:w-15px mobile:h-15px"></i>
                      <span
                        className="font-Grotesque-Regular text-black cursor-pointer text-22px pad:text-18px mobile:text-13px"
                        onClick={() => {
                          setQuizIndex(0);
                        }}
                      >
                        {data.basic.dywfRedo}
                      </span>
                    </div>
                    <div className="mx-auto mt-10px w-[1251px] pad:w-[1042px] mobile:w-330px pb-30px">
                      <div className="bg-[url('/assets/range/bg_result.png')] mobile:bg-[url('/assets/range/bg_result_m.png')] bg-cover flex px-153px pt-42px w-[1251px] h-404px pad:w-[1042px] pad:h-336px pad:px-130px pad:pt-34px mobile:w-330px mobile:h-361px mobile:flex-col mobile:px-45px mobile:pt-25px">
                        <div className="w-280px  mobile:w-241px">
                          {recommend && (
                            <Swiper
                              modules={[Autoplay]}
                              loop={true}
                              speed={500}
                              allowTouchMove={true}
                              autoplay={{
                                delay: 3000, // 自动播放的间隔时间（以毫秒为单位）
                                disableOnInteraction: false, // 用户互动后是否停止自动播放
                              }}
                              onSlideChange={(e) => {
                                setCurrentRecommend(e.realIndex);
                              }}
                            >
                              {recommend.productList.map((product, index) => {
                                return (
                                  <SwiperSlide key={index} className="relative">
                                    <div className="flex flex-col  items-center justify-center">
                                      <div className="relative w-215px h-209px pad:w-180px pad:h-175px mobile:w-148px mobile:h-145px">
                                        <BaseImage
                                          mImg={
                                            product.quizResultProductImage
                                              ?.imagemobile?.url
                                          }
                                          pImg={
                                            product.quizResultProductImage
                                              ?.imagepc?.url
                                          }
                                          alt={
                                            product.quizResultProductImage
                                              ?.altText
                                          }
                                          layout="fill"
                                          objectFit="cover"
                                          quality={100}
                                        ></BaseImage>
                                      </div>
                                      <div className="font-AlbertusNova-Regular whitespace-nowrap text-black uppercase mt-20px text-20px pad:text-16px mobile:text-14px">
                                        {product.productName}
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                );
                              })}
                            </Swiper>
                          )}
                          <div className="flex justify-center mt-10px">
                            {recommend &&
                              recommend.productList.length > 1 &&
                              recommend.productList.map((item, index) => {
                                return (
                                  <div
                                    key={key}
                                    className={`h-4px mx-4px inline-block rounded-tr-10px rounded-bl-10px cursor-pointer ${
                                      currentRecommend === index
                                        ? "bg-[#969797] w-50px"
                                        : "bg-[#E6E7E8] w-20px"
                                    }`}
                                    // onClick={() => setCurrentRecommend(index)}
                                  ></div>
                                );
                              })}
                          </div>
                        </div>
                        <div className="inline-flex flex-col justify-center   ml-50px flex-1 mobile:w-241px mobile:ml-0 mobile:justify-center mobile:items-center mobile:border-t mobile:border-solid mobile:border-[#E6E7E8] mobile:mt-10px mobile:pt-10px">
                          <div className="inline-flex items-center">
                            <div className="relative inline-block w-68px h-68px pad:w-54px pad:h-54px mobile:w-36px mobile:h-36px">
                              <BaseImage
                                mImg={
                                  data.quizs.q3.step1.answers[
                                    quizThreeSelected1 - 1
                                  ].icon.mImg
                                }
                                pImg={
                                  data.quizs.q3.step1.answers[
                                    quizThreeSelected1 - 1
                                  ].icon.pImg
                                }
                                alt={""}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                              ></BaseImage>
                            </div>
                            <div className="ml-10px font-AlbertusNova-Regular text-black text-34px pad:text-27px mobile:text-16px">
                              {
                                data.quizs.q3.step1.answers[
                                  quizThreeSelected1 - 1
                                ].label
                              }
                            </div>
                          </div>
                          <div className="font-Grotesque-Regular text-black uppercase mt-10px text-15px pad:text-12px mobile:text-10px">
                            {data.basic.dywfResultSubtitle}
                          </div>
                          <div className="font-Grotesque-Regular text-black mt-20px leading-normal text-26px opacity-50  mobile:text-14px mobile:text-center">
                            {
                              data.quizs.q3.step1.answers[
                                quizThreeSelected1 - 1
                              ].value
                            }
                          </div>
                          <div
                            onClick={() => {
                              eventbus.emit(
                                "selectProduct",
                                recommend?.productList[currentRecommend].id
                              );
                              props.scrollToPage(0);
                            }}
                            className="cursor-pointer inline-block font-AlbertusNova-Regular bg-[url('/assets/range/bg_explore_btn.png')] hover:bg-[url('/assets/range/bg_explore_btn_hover.png')] hover:text-white bg-cover text-black text-center uppercase mt-20px w-167px h-55px leading-[60px] text-17px pad:w-134px pad:h-44px pad:leading-[50px] pad:text-14px mobile:w-134px mobile:h-44px mobile:leading-[50px] mobile:text-14px"
                          >
                            {data.basic.dywfExploreContent}
                          </div>
                        </div>
                      </div>
                      <div className="border border-solid border-black w-[1251px] pad:w-[1042px] mobile:w-330px">
                        <div className="bg-[url('/assets/range/bg_result_02.png')] mobile:bg-[url('/assets/range/bg_result_02_m.png')] mobile:bg-cover bg-cover w-[1251px] h-113px pad:w-[1042px] pad:h-94px mobile:w-330px mobile:h-56px">
                          <div className="font-Grotesque-Regular text-[#E6E7E8] text-center pt-20px text-30px pad:pt-24px pad:text-16px mobile:pt-10px mobile:text-12px">
                            {data.basic.dywfEmailContent}
                          </div>
                        </div>
                        <div className="flex items-center pb-17px pad:pb-14px mobile:flex-col mobile:items-start mobile:pb-0">
                          <div className="inline-flex items-center px-60px pad:px-60px mobile:pt-10px mobile:pb-20px mobile:px-20px">
                            <i className="inline-block bg-[url('/assets/range/icon_account.png')] bg-cover mr-14px w-18px h-18px pad:w-15px pad:h-15px mobile:w-12px mobile:h-11px"></i>
                            <input
                              type="text"
                              value={emailName}
                              onChange={handleEmailName}
                              className="font-Grotesque-Regular bg-transparent focus-visible:border-0 outline-none text-black text-20px placeholder:text-[#969797] placeholder:text-20px placeholder:font-Grotesque-Regular placeholder:leading-[20px] placeholder:uppercase w-244px pad:w-184px pad:text-16px pad:placeholder:text-16px pad:placeholder:leading-[16px] mobile:text-13px mobile:placeholder:text-13px mobile:placeholder:leading-[13px] mobile:w-250px"
                              placeholder={data.basic.dywfEmailName}
                            />
                          </div>
                          <div className="w-1px bg-black h-57px pad:h-45px mobile:h-1px mobile:w-330px"></div>
                          <div className="inline-flex items-center px-70px pad:px-70px mobile:py-20px mobile:px-20px">
                            <i className="inline-block bg-[url('/assets/range/icon_email.png')] bg-cover mr-10px w-24px h-18px pad:w-20px pad:h-15px mobile:w-15px mobile:h-11px"></i>
                            <input
                              type="text"
                              value={emailAddress}
                              onChange={handleEmailAddress}
                              className="font-Grotesque-Regular bg-transparent focus-visible:border-0 outline-none text-black text-20px placeholder:text-[#969797] placeholder:text-20px placeholder:font-Grotesque-Regular placeholder:leading-[20px] placeholder:uppercase w-350px pad:w-290px pad:text-16px pad:placeholder:text-16px pad:placeholder:leading-[16px] mobile:text-13px mobile:placeholder:text-13px mobile:placeholder:leading-[13px] mobile:w-250px"
                              placeholder={data.basic.dywfEmailAddress}
                            />
                          </div>
                          <div className="w-1px bg-black h-57px pad:h-45px mobile:h-1px mobile:w-330px"></div>
                          <div className="inline-flex flex-1 justify-center items-center px-15px mobile:h-60px mobile:flex-auto mobile:w-full">
                            <div
                              id="flavourFinderSubmit"
                              className={`inline-block cursor-pointer font-AlbertusNova-Regular text-22px uppercase mobile:text-11px ${
                                canSubmit ? "text-[#000000]" : "text-[#696969]"
                              }`}
                              onClick={() => {
                                submit();
                              }}
                            >
                              {data.basic.dywfSubmitContent}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </>
            )}
          </div>
        </>
      )}
    </section>
  );
}

export default FlavourFinderComponent;

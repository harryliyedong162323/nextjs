"use client";
import { useSearchParams } from "next/navigation";
import React, {
  useEffect,
  useState,
  useCallback,
  Suspense,
  useRef,
} from "react";
// import ReactFullpage from '@fullpage/react-fullpage';
import { ISlideConfig, PageSlides, SlideParallaxType } from "react-page-slides";
import FullPageSwiper from "./fullPageSwiper";
import { getHash } from "@/utils/common";
import { useParams } from "next/navigation";
import Header from "@/components/layout/header";
import Footer, {
  propsContent as FooterPropsContent,
} from "@/components/layout/footer";
import RangeNav from "@/components/layout/rangeNav";

import GlobalCampaigns from "@/components/page/globalCampaignsComponent";
import InteractiveVideo, {
  propsContent as InteractiveVideoPropsContent,
} from "@/components/page/interactiveVideoComponent";
import IntroduceCampaign, {
  propsContent as IntroduceCampaignPropsContent,
} from "@/components/page/introduceCampaignComponent";
import HeroBanner from "@/components/page/heroBannerComponent";
import KVAnimation from "@/components/page/KVAnimationComponent";
import NearYou, {
  propsContent as NearYouPropsContent,
} from "@/components/page/nearYouComponent";
import VIPClub, {
  propsContent as VIPClubPropsContent,
} from "@/components/page/VIPClubComponent";
import ProductFamily, {
  propsContent as ProductFamilyPropsContent,
} from "@/components/page/productFamilyComponent";
import Quote from "@/components/page/quoteComponent";
import TextBlock from "@/components/page/textBlockComponent";
import StoryOpening from "@/components/page/storyOpeningComponent";
import StoryChapterOne from "@/components/page/storyChapterOneComponent";
import StoryChapterTwo from "@/components/page/storyChapterTwoComponent";
import StoryChapterThree from "@/components/page/storyChapterThreeComponent";
import StoryChapterFour from "@/components/page/storyChapterFourComponent";
import StoryChapterFive from "@/components/page/storyChapterFiveComponent";
import StoryChapterSix from "@/components/page/storyChapterSixComponent";
import StoryChapterEnd from "@/components/page/storyChapterEndComponent";
import ActivityDetail from "@/components/page/activityDetailComponent";
import StoriesDetail from "@/components/page/storiesDetailComponent";
import TalesFromTheWild from "@/components/page/talesFromTheWildComponent";
import ServingSuggestion from "@/components/page/servingSuggestionComponent";
import FlavourFinder from "@/components/page/flavourFinderComponent";
import BottleConcept from "@/components/page/bottleConceptComponent";
import LocationMap from "@/components/page/locationMapComponent";
import LocationInfo from "@/components/page/locationInfoComponent";
import IRLExperiences from "@/components/page/IRLExperiencesComponent";
import DigitalExperience, {
  propsContent as DigitalExperiencePropsContent,
} from "@/components/page/digitalExperienceComponent";
import PrivacyPolicy from "@/components/page/privacyPolicyComponent";
import HowToBuyDetail from "@/components/page/howToBuyDetailComponent";
import Popup from "./popup";

import { TrackingType } from "@/utils/analytics";

function getComponent(
  data: any,
  k: number,
  currentSlug: string,
  TrackingType: TrackingType,
  scrollToPage: Function,
  changeNavStatus: Function,
  updatePageStore: Function,
  getPageStore: Function
) {
  const props = {
    data: data,
    currentSlug,
    TrackingType,
    scrollToPage,
    changeNavStatus,
    updatePageStore,
    getPageStore,
  };

  switch (data.name) {
    /** public components **/

    case "globalCampaignsComponent":
      return <GlobalCampaigns key={k} {...props} />;
    case "interactiveVideoComponent":
      return (
        <InteractiveVideo
          key={k}
          {...(props as InteractiveVideoPropsContent)}
        />
      );
    case "introduceCampaignComponent":
      return (
        <IntroduceCampaign
          key={k}
          {...(props as IntroduceCampaignPropsContent)}
        />
      );

    /** page components  **/

    case "heroBannerComponent":
      return <HeroBanner key={k} {...props} />;
    case "KVAnimationComponent":
      return <KVAnimation key={k} {...props} />;
    case "nearYouComponent":
      return <NearYou key={k} {...(props as NearYouPropsContent)} />;
    case "VIPClubComponent":
      return <VIPClub key={k} {...(props as VIPClubPropsContent)} />;
    case "productFamilyComponent":
      return (
        <ProductFamily key={k} {...(props as ProductFamilyPropsContent)} />
      );
    case "quoteComponent":
      return <Quote key={k} {...props} />;
    case "textBlockComponent":
      return <TextBlock key={k} {...props} />;

    case "storyOpeningComponent":
      return <StoryOpening key={k} {...props} />;
    case "storyChapterOneComponent":
      return <StoryChapterOne key={k} {...props} />;
    case "storyChapterTwoComponent":
      return <StoryChapterTwo key={k} {...props} />;
    case "storyChapterThreeComponent":
      return <StoryChapterThree key={k} {...props} />;
    case "storyChapterFourComponent":
      return <StoryChapterFour key={k} {...props} />;
    case "storyChapterFiveComponent":
      return <StoryChapterFive key={k} {...props} />;
    case "storyChapterSixComponent":
      return <StoryChapterSix key={k} {...props} />;
    case "storyChapterEndComponent":
      return <StoryChapterEnd key={k} {...props} />;

    case "ActivityDetailComponent":
      return <ActivityDetail key={k} {...props} />;
    case "StoriesDetailComponent":
      return <StoriesDetail key={k} {...props} />;

    case "talesFromTheWildComponent":
      return <TalesFromTheWild key={k} {...props} />;
    case "servingSuggestionComponent":
      return <ServingSuggestion key={k} {...props} />;
    case "flavourFinderComponent":
      return <FlavourFinder key={k} {...props} />;
    case "bottleConceptComponent":
      return <BottleConcept key={k} {...props} />;

    case "locationMapComponent":
      return <LocationMap key={k} {...props} />;
    case "locationInfoComponent":
      return <LocationInfo key={k} {...props} />;
    case "IRLExperiencesComponent":
      return <IRLExperiences key={k} {...props} />;
    case "digitalExperienceComponent":
      return (
        <DigitalExperience
          key={k}
          {...(props as DigitalExperiencePropsContent)}
        />
      );
    case "privacyPolicyComponent":
      return <PrivacyPolicy key={k} {...props} />;
    case "howToBuyDetailComponent":
      return <HowToBuyDetail key={k} {...props} />;
    default:
      return <div></div>;
  }
}

function FullPage(props: any) {
  const footerData: FooterPropsContent = props.footerData;
  const headerData = props.headerData;
  const params = useParams();
  const [currentSlug, setCurrentSlug] = useState(params.slug[0]);
  const [currentScroll, setCurrentScroll] = useState("");

  const [pageStore, setPageStore] = useState([] as any);

  const [isBrowser, setIsBrowser] = useState(false);
  const [slideFlag, setSliderFlag] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(0);
  const [anchor, setAnchor] = useState<string | null>("");
  const [isCurrentPage, setIsCurrentPage] = useState(false);
  const searchParams = useSearchParams();
  // range nav
  const [hasRangeNav, setHasRangeNav] = useState(!!props.data.rangeNav);
  const [isShowRangeNav, setIsShowRangeNav] = useState(true);
  const [rangeNavData, setRangeNavData] = useState(props.data?.rangeNavData);
  const [canScroll, setCanScroll] = useState<boolean>(true);

  // Debug Func
  function getHashParams() {
    interface HashParams {
      [key: string]: any;
    }
    var hash = window.location.hash.substr(1); // 获取URL中的哈希部分（不包括#符号）
    var params = hash.split("&"); // 将哈希参数字符串分割成数组
    var hashParams: HashParams = {};
    for (var i = 0; i < params.length; i++) {
      var param = params[i].split("="); // 将每个参数以等号分割成键和值
      var key = decodeURIComponent(param[0]); // 解码键
      var value = decodeURIComponent(param[1]); // 解码值
      hashParams[key] = value; // 将键值对存入对象中
    }
    return hashParams;
  }

  useEffect(() => {
    setTimeout(() => {
      setAnchor(searchParams.get("anchor"));
      analyzeURL(anchor);
    }, 50);
  }, [anchor, props]);

  useEffect(() => {
    setTimeout(() => {
      setIsBrowser(true);
    }, 50);
  }, []);

  useEffect(() => {
    if (isBrowser) {
      setHeadStyle(0);
    }
  }, [isBrowser]);

  const pageComponents = props.data.entry.children;

  const updatePageStore = (pageName: any, content: any, cb: any) => {
    setPageStore([
      ...pageStore,
      pageStore
        .filter((page: any) => page.name == pageName)
        .map((item: any) => {
          item.data = {
            ...item.data,
            ...content,
          };
          return item;
        }),
    ]);

    cb && cb(getPageStore(pageName));
  };

  const getPageStore = (pageName?: string) => {
    if (pageName) {
      return pageStore.filter((item: any) => item.name == pageName)[0];
    }
    return pageStore;
  };

  useEffect(() => {
    let tmpPageStore: any = [];
    props.data.entry.children.forEach((item: any) => {
      tmpPageStore.push({
        name: item.name,
        data: {},
      });
    });
    setPageStore(tmpPageStore);
  }, [props]);

  const scrollToPage = (page: number) => {
    // console.l2og('currentPage:', page)

    setCurrentSlideIndex(page);
  };

  const changeNavStatus = (status: boolean) => {
    setIsShowRangeNav(status);
  };

  const onScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (!canScroll) {
      event.stopPropagation();
    }
  };

  const analyzeURL = (params: string | null): void => {
    const hashParams = getHashParams();

    if (params) {
      const anchorDom = document.getElementById(params) as HTMLInputElement;
      if (anchorDom) {
        const currentSlideIndex: string | null =
          anchorDom.getAttribute(`data-anchor`);
        if (currentSlideIndex) {
          scrollToPage(parseInt(currentSlideIndex));
        }
      }
    } else if (hashParams.debugPage) {
      setTimeout(() => {
        scrollToPage(parseInt(hashParams.debugPage));
      }, 1000);
    } else {
      scrollToPage(0);
    }
  };

  const slides: ISlideConfig[] = [
    ...pageComponents.map((data: any, k: number) => {
      data.entry.isFullPage = true;
      data.entry.pageNumber = k;
      data.entry.currentPageNumber = currentPageNumber;
      return {
        content: (
          <div
            onWheel={(event) => {
              onScroll(event);
            }}
          >
            {getComponent(
              data,
              k,
              params.slug[0],
              TrackingType,
              scrollToPage,
              changeNavStatus,
              updatePageStore,
              getPageStore
            )}
          </div>
        ),
        style: {},
      };
    }),
    {
      content: <Footer scrollToPage={scrollToPage} data={footerData}></Footer>,
      style: {},
    },
  ];

  const setHeadStyle = (index: number) => {
    // const slide = document.querySelectorAll(".rps-slide");

    const nav = document.getElementsByTagName("nav");
    for (let i = 0; i < nav.length; i++) {
      nav[i].style.display = "none";
    }

    if (index == slides.length - 1) {
      return false;
    }

    const slide = document.querySelectorAll("section");
    const currentHead = slide[index].querySelector(
      'input[type="hidden"][data-style="headStyle"]'
    ) as HTMLInputElement;

    const currentScrollPage = slide[index].querySelector(
      `input[type="hidden"][data-slug="${params.slug[0]}"]`
    ) as HTMLInputElement;

    const value: string = currentHead?.value || "white";

    if (currentScrollPage) {
      setCurrentScroll(currentScrollPage?.value || "");
    }

    let currentNav = document.getElementById(
      "nav-" + value
    ) as HTMLInputElement;

    if (index != 0) {
      let navChildren = document.getElementById("nav-large-content");
      navChildren && (navChildren.style.transform = "translateY(100%)");
    } else {
      let navChildren = document.getElementById("nav-large-content");
      if (isCurrentPage) {
        setTimeout(() => {
          navChildren && (navChildren.style.transform = "translateY(0%)");
        }, 50);
      } else {
        setIsCurrentPage(true);
        setTimeout(() => {
          navChildren && (navChildren.style.transform = "translateY(0%)");
        }, 1500);
      }
    }

    currentNav && (currentNav.style.display = "block");
  };

  const handleSlideChange = (e: number): void => {
    // Used to monitor and determine whether to flip to the current page, to achieve animation effects
    setCurrentPageNumber(e);
    setCurrentSlideIndex(e);

    setCanScroll(false);
    setTimeout(() => {
      setCanScroll(true);
    }, 1500);
    pageComponents.map((item: any) => (item.entry.currentPageNumber = e));

    const nav: any = document.getElementById("nav");

    setHeadStyle(e);
  };

  return (
    <div>
      {/*好用但要收费*/}
      {/*<ReactFullpage*/}
      {/*    //fullpage options*/}
      {/*    credits={{*/}
      {/*        enabled:true,*/}
      {/*        label:'fuck',*/}
      {/*        position: "left"*/}
      {/*    }}*/}
      {/*    //fullpage options*/}
      {/*    licenseKey = {''}*/}
      {/*    scrollingSpeed = {1000} */}
      {/*    scrollHorizontally = {true}  */}
      {/*    scrollHorizontallyKey = {''}*/}
      {/*    render={({ state, fullpageApi }) => {*/}
      {/*        return (*/}
      {/*            <ReactFullpage.Wrapper>*/}

      {/*                {pageComponents.map((data:any, k:number)=>{*/}
      {/*                    return(*/}
      {/*                        <div className="section" key={k}>*/}
      {/*                            {getComponent(data, k)}*/}
      {/*                        </div>*/}
      {/*                    )*/}
      {/*                })}*/}

      {/*            </ReactFullpage.Wrapper>*/}
      {/*        );*/}
      {/*    }}*/}
      {/* />*/}
      {/*currentSlideIndex={2}*/}

      <Header
        scrollToPage={scrollToPage}
        currentSlideIndex={currentSlideIndex}
        data={headerData}
      ></Header>

      {isBrowser == true ? (
        <div>
          <FullPageSwiper
            enableAutoScroll={slideFlag}
            transitionSpeed={1500}
            currentSlideIndex={currentSlideIndex}
            slides={slides}
            parallax={{
              offset: 0.6, //0.6
              type: SlideParallaxType.reveal,
            }}
            onChange={(e: any) => {
              handleSlideChange(e);
            }}
          />
          {/* <PageSlides
            enableAutoScroll={slideFlag}
            transitionSpeed={1500}
            currentSlideIndex={currentSlideIndex}
            slides={slides}
            parallax={{
              offset: 0.6, //0.6
              type: SlideParallaxType.reveal,
            }}
            onChange={(e) => {
              handleSlideChange(e);
            }}
          /> */}
        </div>
      ) : null}
      {hasRangeNav && (
        <RangeNav
          currentSlideIndex={currentSlideIndex}
          scrollToPage={scrollToPage}
          isShowRangeNav={isShowRangeNav}
          onChangeStatus={changeNavStatus}
          {...rangeNavData}
        ></RangeNav>
      )}

      <input
        id="currentScroll"
        type="hidden"
        value={currentScroll}
        data-slug={currentSlug}
      />
    </div>
  );
}

export default FullPage;

"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { ISlideConfig, PageSlides, SlideParallaxType } from "react-page-slides";
import FullPageSwiper from "./fullPageSwiper";

import { useParams } from "next/navigation";

import Header, { headerDataContent } from "@/components/layout/header";
import Footer, { footerDataContent } from "@/components/layout/footer";
import RangeNav from "@/components/layout/rangeNav";

import GlobalCampaigns, {
  entryContent as GlobalCampaignsEntryContent,
} from "@/components/page/globalCampaignsComponent";
import InteractiveVideo, {
  entryContent as interactiveVideoEntryContent,
} from "@/components/page/interactiveVideoComponent";
import IntroduceCampaign, {
  entryContent as introduceCampaignEntryContent,
} from "@/components/page/introduceCampaignComponent";

import KVAnimation, {
  entryContent as KVAnimationEntryContent,
} from "@/components/page/KVAnimationComponent";
import NearYou, {
  entryContent as NearYouEntryContent,
} from "@/components/page/nearYouComponent";
import VIPClub, {
  entryContent as VIPClubEntryContent,
} from "@/components/page/VIPClubComponent";
import ProductFamily, {
  entryContent as ProductFamilyEntryContent,
} from "@/components/page/productFamilyComponent";

import StoryOpening, {
  entryContent as StoryOpeningEntryContent,
} from "@/components/page/storyOpeningComponent";
import StoryChapterOne, {
  entryContent as StoryChapterOneEntryContent,
} from "@/components/page/storyChapterOneComponent";
import StoryChapterTwo, {
  entryContent as StoryChapterTwoEntryContent,
} from "@/components/page/storyChapterTwoComponent";
import StoryChapterThree, {
  entryContent as StoryChapterThreeEntryContent,
} from "@/components/page/storyChapterThreeComponent";
import StoryChapterFour, {
  entryContent as StoryChapterFourEntryContent,
} from "@/components/page/storyChapterFourComponent";
import StoryChapterFive, {
  entryContent as StoryChapterFiveEntryContent,
} from "@/components/page/storyChapterFiveComponent";
import StoryChapterSix, {
  entryContent as StoryChapterSixEntryContent,
} from "@/components/page/storyChapterSixComponent";
import StoryChapterEnd, {
  entryContent as StoryChapterEndEntryContent,
} from "@/components/page/storyChapterEndComponent";
import ActivityDetail, {
  entryContent as ActivityDetailEntryContent,
} from "@/components/page/activityDetailComponent";
import StoriesDetail, {
  entryContent as StoriesDetailEntryContent,
} from "@/components/page/storiesDetailComponent";
import TalesFromTheWild, {
  entryContent as TalesFromTheWildEntryContent,
} from "@/components/page/talesFromTheWildComponent";
import ServingSuggestion, {
  entryContent as ServingSuggestionEntryContent,
} from "@/components/page/servingSuggestionComponent";
import FlavourFinder, {
  propsContent as FlavourFinderEntryContent,
} from "@/components/page/flavourFinderComponent";
import BottleConcept, {
  entryContent as BottleConceptEntryContent,
} from "@/components/page/bottleConceptComponent";
import LocationInfo, {
  entryContent as LocationInfoEntryContent,
} from "@/components/page/locationInfoComponent";
import IRLExperiences, {
  entryContent as IRLExperiencesEntryContent,
} from "@/components/page/IRLExperiencesComponent";
import DigitalExperience, {
  entryContent as DigitalExperienceEntryContent,
} from "@/components/page/digitalExperienceComponent";
import PrivacyPolicy from "@/components/page/privacyPolicyComponent";
import HowToBuyDetail, {
  entryContent as HowToBuyDetailEntryContent,
} from "@/components/page/howToBuyDetailComponent";
import Popup from "./popup";

const checkComponentType = (componentName: string) => {
  let constraintType: string = "";
  switch (componentName) {
    case "interactiveVideoComponent":
      constraintType = "interactiveVideoEntryContent";
      break;
    case "introduceCampaignComponent":
      constraintType = "introduceCampaignEntryContent";
      break;
    default:
      break;
  }

  return constraintType;
};

import { TrackingType, TrackingTypeContent } from "@/utils/analytics";

interface componentContent {
  entry: CombinedInterface;
  name: string;
  type: string;
  isFullPage: boolean;
}
interface CombinedInterface
  extends interactiveVideoEntryContent,
    introduceCampaignEntryContent,
    GlobalCampaignsEntryContent,
    KVAnimationEntryContent,
    NearYouEntryContent,
    VIPClubEntryContent,
    ProductFamilyEntryContent,
    StoryOpeningEntryContent,
    StoryChapterOneEntryContent,
    StoryChapterTwoEntryContent,
    StoryChapterThreeEntryContent,
    StoryChapterFourEntryContent,
    StoryChapterFiveEntryContent,
    StoryChapterSixEntryContent,
    StoryChapterEndEntryContent,
    ActivityDetailEntryContent,
    StoriesDetailEntryContent,
    TalesFromTheWildEntryContent,
    ServingSuggestionEntryContent,
    FlavourFinderEntryContent,
    BottleConceptEntryContent,
    LocationInfoEntryContent,
    IRLExperiencesEntryContent,
    DigitalExperienceEntryContent,
    HowToBuyDetailEntryContent {
  entry: {
    currentPageNumber: number;
  };
}

function getComponent(
  data: componentContent,
  k: number,
  currentSlug: string,
  TrackingType: TrackingTypeContent,
  scrollToPage: Function,
  changeNavStatus: Function,
  changeNavSubmit: Function,
  updatePageStore: Function,
  getPageStore: Function
) {
  const props = {
    data: data,
    currentSlug,
    TrackingType,
    scrollToPage,
    changeNavStatus,
    changeNavSubmit,
    updatePageStore,
    getPageStore,
  };
  switch (data.name) {
    /** public components **/

    case "globalCampaignsComponent":
      return <GlobalCampaigns key={k} {...props} />;
    case "interactiveVideoComponent":
      return <InteractiveVideo key={k} {...props} />;
    case "introduceCampaignComponent":
      return <IntroduceCampaign key={k} {...props} />;

    /** page components  **/

    case "KVAnimationComponent":
      return <KVAnimation key={k} {...props} />;
    case "nearYouComponent":
      return <NearYou key={k} {...props} />;
    case "VIPClubComponent":
      return <VIPClub key={k} {...props} />;
    case "productFamilyComponent":
      return <ProductFamily key={k} {...props} />;
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
    // case "locationMapComponent":
    //   return <LocationMap key={k} {...props} />;
    case "locationInfoComponent":
      return <LocationInfo key={k} {...props} />;
    case "IRLExperiencesComponent":
      return <IRLExperiences key={k} {...props} />;
    case "digitalExperienceComponent":
      return <DigitalExperience key={k} {...props} />;
    case "privacyPolicyComponent":
      return <PrivacyPolicy key={k} {...props} />;
    case "howToBuyDetailComponent":
      return <HowToBuyDetail key={k} {...props} />;
    default:
      return <div></div>;
  }
}

interface propsContent {
  data: dataPageContent<propsContentItem>;
  footerData: footerDataContent;
  headerData: headerDataContent;
}
interface dataPageContent<T> {
  type: string;
  name: string;
  rangeNav?: boolean;
  rangeNavData?: T;
  entry: {
    headStyle?: string;
    children: Array<CombinedInterface>;
  };
}
interface propsContentItem {
  nav1Name?: string;
  nav1Render?: string;
  nav2Name?: string;
  nav2Render?: string;
  nav3Name?: string;
  nav3Render?: string;
  nav4Name?: string;
  nav4Render?: string;
  nav5Name?: string;
  nav5Render?: string;
}
interface pageComponentsContent {
  [key: string]: any;
}
interface pageStoreContent {
  name?: string;
  content?: object;
  data?: object;
}

function FullPage(props: propsContent) {
  // console.log(props);

  const footerData: footerDataContent = props.footerData;
  const headerData = props.headerData;
  const params = useParams();
  const [currentSlug, setCurrentSlug] = useState(params.slug[0]);
  const [currentScroll, setCurrentScroll] = useState("");

  const [pageStore, setPageStore] = useState(
    [] as Array<pageComponentsContent>
  );

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
  const [submit, setSubmit] = useState("");
  const [rangeNavData, setRangeNavData] = useState(props.data?.rangeNavData);
  const [canScroll, setCanScroll] = useState<boolean>(true);

  // Debug Func
  function getHashParams() {
    interface HashParams {
      [key: string]: string;
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

  const updatePageStore = (pageName: string, content: object, cb: Function) => {
    setPageStore([
      ...pageStore,
      pageStore
        .filter((page: pageStoreContent) => page.name == pageName)
        .map((item: pageStoreContent) => {
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
      return pageStore.filter(
        (item: pageStoreContent) => item.name == pageName
      )[0];
    }
    return pageStore;
  };

  useEffect(() => {
    let tmpPageStore: Array<pageStoreContent> = [];
    props.data.entry.children.forEach((item: pageStoreContent) => {
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
  const changeNavSubmit = (str: string) => {
    setSubmit(str);
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
              changeNavSubmit,
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
    pageComponents.map(
      (item: CombinedInterface) => (item.entry.currentPageNumber = e)
    );

    // const nav = document.getElementById("nav") as HTMLInputElement;

    setHeadStyle(e);
  };

  return (
    <>
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
            onChange={(e: number) => {
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
          submit={submit}
          onChangeStatus={changeNavStatus}
          onChangeSubmit={changeNavSubmit}
          rangeNavData={rangeNavData}
        ></RangeNav>
      )}

      <input
        id="currentScroll"
        type="hidden"
        value={currentScroll}
        data-slug={currentSlug}
      />
    </>
  );
}

export default FullPage;

"use client";
import { useSearchParams } from 'next/navigation'
import React, {useEffect, useState, useCallback, Suspense, useRef} from "react";
// import ReactFullpage from '@fullpage/react-fullpage';
import {ISlideConfig, PageSlides, SlideParallaxType} from 'react-page-slides';
import {getHash} from "@/utils/common";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import RangeNav from '@/components/layout/rangeNav';

import GlobalCampaigns from "@/components/page/globalCampaignsComponent";
import InteractiveVideo, { propsContent as InteractiveVideoPropsContent } from "@/components/page/interactiveVideoComponent";
import IntroduceCampaign, { propsContent as IntroduceCampaignPropsContent } from "@/components/page/introduceCampaignComponent";
import HeroBanner from "@/components/page/heroBannerComponent";
import KVAnimation from "@/components/page/KVAnimationComponent";
import NearYou, { propsContent as NearYouPropsContent } from "@/components/page/nearYouComponent";
import VIPClub, { propsContent as VIPClubPropsContent } from "@/components/page/VIPClubComponent";
import ProductFamily, { propsContent as ProductFamilyPropsContent } from "@/components/page/productFamilyComponent";
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
import DigitalExperience, { propsContent as DigitalExperiencePropsContent }  from "@/components/page/digitalExperienceComponent";
import PrivacyPolicy from "@/components/page/privacyPolicyComponent";
import HowToBuyDetail from "@/components/page/howToBuyDetailComponent";

function getComponent(data: any, k:number, scrollToPage: Function, changeNavStatus: Function) {
    const props = { data : data, scrollToPage, changeNavStatus }

    switch(data.name) {
        /** public components **/

        case "globalCampaignsComponent":  return <GlobalCampaigns key={k} {...props} />;
        case "interactiveVideoComponent":  return <InteractiveVideo key={k} {...props as InteractiveVideoPropsContent } />;
        case "introduceCampaignComponent":  return <IntroduceCampaign key={k} {...props as IntroduceCampaignPropsContent } />;


        /** page components  **/

        case "heroBannerComponent":  return <HeroBanner key={k} {...props} />;
        case "KVAnimationComponent":   return <KVAnimation key={k} {...props} />;
        case "nearYouComponent":   return <NearYou key={k} {...props as NearYouPropsContent} />;
        case "VIPClubComponent":   return <VIPClub key={k} {...props as VIPClubPropsContent} />;
        case "productFamilyComponent":   return <ProductFamily key={k} {...props as ProductFamilyPropsContent} />;
        case "quoteComponent":       return <Quote key={k} {...props} />;
        case "textBlockComponent":   return <TextBlock key={k} {...props} />;

        case "storyOpeningComponent":   return <StoryOpening key={k} {...props} />;
        case "storyChapterOneComponent":   return <StoryChapterOne key={k} {...props} />;
        case "storyChapterTwoComponent":   return <StoryChapterTwo key={k} {...props} />;
        case "storyChapterThreeComponent":   return <StoryChapterThree key={k} {...props} />;
        case "storyChapterFourComponent":   return <StoryChapterFour key={k} {...props} />;
        case "storyChapterFiveComponent":   return <StoryChapterFive key={k} {...props} />;
        case "storyChapterSixComponent":   return <StoryChapterSix key={k} {...props} />;
        case "storyChapterEndComponent":   return <StoryChapterEnd key={k} {...props} />;

        case "ActivityDetailComponent":   return <ActivityDetail key={k} {...props} />;
        case "StoriesDetailComponent":   return <StoriesDetail key={k} {...props} />;

        case "talesFromTheWildComponent":   return <TalesFromTheWild key={k} {...props} />;
        case "servingSuggestionComponent":   return <ServingSuggestion key={k} {...props} />;
        case "flavourFinderComponent":   return <FlavourFinder key={k} {...props} />;
        case "bottleConceptComponent":   return <BottleConcept key={k} {...props} />;

        case "locationMapComponent":   return <LocationMap key={k} {...props} />;
        case "locationInfoComponent":   return <LocationInfo key={k} {...props} />;
        case "IRLExperiencesComponent":   return <IRLExperiences key={k} {...props} />;
        case "digitalExperienceComponent":   return <DigitalExperience key={k} {...props as DigitalExperiencePropsContent} />;
        case "privacyPolicyComponent" : return <PrivacyPolicy key={k} {...props} />;
        case "howToBuyDetailComponent":   return <HowToBuyDetail key={k} {...props} />;
        default:      return <div></div>
    }
}


function FullPage(props: any) {


    const [isBrowser, setIsBrowser] = useState(false);
    const [slideFlag,setSliderFlag] = useState(true);
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
    const [currentPageNumber, setCurrentPageNumber] = useState<number>(0);
    const [anchor, setAnchor] = useState<string|null>('');
    const [isCurrentPage, setIsCurrentPage] = useState(false)
    const searchParams = useSearchParams()
    // range nav
    const [hasRangeNav, setHasRangeNav] = useState(!!props.data.rangeNav)
    const [isShowRangeNav, setIsShowRangeNav] = useState(true)
    const [canScroll, setCanScroll] = useState<boolean>(true)
    
    useEffect(() => {
        setTimeout(()=>{
            setAnchor(searchParams.get('anchor'))
            analyzeURL(anchor);
        },50)
    }, [anchor,props]);

    useEffect(() => {
        setTimeout(()=>{
            setIsBrowser(true);
        },50);
    }, []);

    useEffect(() => {
        if(isBrowser){
            setHeadStyle(0);

        }
    }, [isBrowser]);

    const pageComponents = props.data.entry.children;

    const scrollToPage = (page: number) => {
        // console.l2og('currentPage:', page)

        setCurrentSlideIndex(page)
    }

    const changeNavStatus = (status: boolean) => {
        setIsShowRangeNav(status)
    }

    const onScroll = (event: React.WheelEvent<HTMLDivElement>) => {
        if (!canScroll) {
            event.stopPropagation()
        }
    }

    const analyzeURL = (params:string | null):void=>{
        if(params){
            const anchorDom= document.getElementById(params) as HTMLInputElement;
            if(anchorDom){
                const currentSlideIndex:string | null = anchorDom.getAttribute(`data-anchor`);
                if(currentSlideIndex){
                    scrollToPage(parseInt(currentSlideIndex));
                }
            }
        }else{
            scrollToPage(0);
        }

    }



    const slides: ISlideConfig[] = [

        ...pageComponents.map((data:any, k:number)=>{
            data.entry.isFullPage = true
            data.entry.pageNumber = k;
            data.entry.currentPageNumber = currentPageNumber;
            return(

                {
                    content: (
                        <div onWheel={(event) => {
                            onScroll(event)
                        }}>
                            {
                                getComponent(data, k, scrollToPage, changeNavStatus)
                            }
                        </div>
                    ),
                    style: {}
                }

            )
        }),
        {
            content: <Footer scrollToPage={scrollToPage}></Footer>,
            style: {}
        },
    ];




    const setHeadStyle = (index:number):void => {
        const slide = document.querySelectorAll('.rps-slide');
        const currentHead = slide[index].querySelector('input[type="hidden"]') as HTMLInputElement;
        const value:string = currentHead?.value || 'white';

        const nav = document.getElementsByTagName('nav');
        for(let i=0;i<nav.length;i++){
            nav[i].style.display = 'none';
        }
        // console.log('nav-'+value)

        let currentNav = document.getElementById('nav-'+value) as HTMLInputElement;


        if(index != 0){
            let navChildren = document.getElementById('nav-large-content');
            navChildren&&(navChildren.style.transform = 'translateY(100%)');
        }else{
            let navChildren = document.getElementById('nav-large-content');
            if(isCurrentPage){
                setTimeout(()=>{navChildren&&(navChildren.style.transform = 'translateY(0%)');},50)
            }else{
                setIsCurrentPage(true);
                setTimeout(()=>{navChildren&&(navChildren.style.transform = 'translateY(0%)');},1500)
            }

        }

        currentNav&&(currentNav.style.display = 'block');

    }




    const handleSlideChange = (e:number):void=>{
        // Used to monitor and determine whether to flip to the current page, to achieve animation effects
        setCurrentPageNumber(e)
        setCurrentSlideIndex(e)

        setCanScroll(false)
        setTimeout(() => {
            setCanScroll(true)
        }, 1500)
        pageComponents.map((item: any) => item.entry.currentPageNumber = e)

        const nav:any = document.getElementById('nav');


        setHeadStyle(e);

        if(e == slides.length-1){
            // setSliderFlag(false);
            nav&&(nav.style.display = 'none');

        }else{
            // setSliderFlag(true);
            nav&&(nav.style.display = 'block');
        }
    }



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


            <Header scrollToPage={scrollToPage} currentSlideIndex={currentSlideIndex}></Header>

            {
                isBrowser == true ?
                <div>
                    <PageSlides
                        enableAutoScroll={slideFlag}
                        transitionSpeed={1500}
                        currentSlideIndex={currentSlideIndex}
                        slides={slides}
                        parallax={{
                            offset: 0.60,    //0.6
                            type: SlideParallaxType.reveal
                        }}
                        onChange={(e)=>{handleSlideChange(e)}}
                    />
                </div> : null
            }
            {
                hasRangeNav && <RangeNav currentSlideIndex={currentSlideIndex} scrollToPage={scrollToPage} isShowRangeNav={isShowRangeNav} onChangeStatus={changeNavStatus}></RangeNav>
            }




        </div>
    );
}

export default FullPage;

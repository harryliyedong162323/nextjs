"use client";

import React, {useEffect, useState, useCallback, Suspense, useRef} from "react";
// import ReactFullpage from '@fullpage/react-fullpage';
import {ISlideConfig, PageSlides, SlideParallaxType} from 'react-page-slides';


import Footer from '@/components/layout/footer';

import GlobalCampaigns from "@/components/page/globalCampaignsComponent";
import InteractiveVideo from "@/components/page/interactiveVideoComponent";
import IntroduceCampaign from "@/components/page/introduceCampaignComponent";
import HeroBanner from "@/components/page/heroBannerComponent";
import KVAnimation from "@/components/page/KVAnimationComponent";
import NearYou from "@/components/page/nearYouComponent";
import VIPClub from "@/components/page/VIPClubComponent";
import ProductFamily from "@/components/page/productFamilyComponent";
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
import IRLExperiences from "@/components/page/IRLExperiencesComponent";
import DigitalExperience from "@/components/page/digitalExperienceComponent";
import PrivacyPolicy from "@/components/page/privacyPolicyComponent";
import HowToBuyDetail from "@/components/page/howToBuyDetailComponent";

function getComponent(data: any, k:number) {
    const props = { data : data }

    switch(data.name) {
        /** public components **/

        case "globalCampaignsComponent":  return <GlobalCampaigns key={k} {...props} />;
        case "interactiveVideoComponent":  return <InteractiveVideo key={k} {...props} />;
        case "introduceCampaignComponent":  return <IntroduceCampaign key={k} {...props} />;


        /** page components  **/

        case "heroBannerComponent":  return <HeroBanner key={k} {...props} />;
        case "KVAnimationComponent":   return <KVAnimation key={k} {...props} />;
        case "nearYouComponent":   return <NearYou key={k} {...props} />;
        case "VIPClubComponent":   return <VIPClub key={k} {...props} />;
        case "productFamilyComponent":   return <ProductFamily key={k} {...props} />;
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
        case "IRLExperiencesComponent":   return <IRLExperiences key={k} {...props} />;
        case "digitalExperienceComponent":   return <DigitalExperience key={k} {...props} />;
        case "privacyPolicyComponent" : return <PrivacyPolicy key={k} {...props} />;
        case "howToBuyDetailComponent":   return <HowToBuyDetail key={k} {...props} />;
        default:      return <div></div>
    }
}


function FullPage(props: any) {

    console.log(props)
    const [isBrowser, setIsBrowser] = useState(false);
    const [slideFlag,setSliderFlag] = useState(true);
    const [currentPageNumber, setCurrentPageNumber] = useState<number>(0);

    useEffect(() => {

        setTimeout(()=>{setIsBrowser(true);},50);
    }, []);

    useEffect(() => {
        if(isBrowser){
            setHeadStyle(0);
        }
    }, [isBrowser]);

    const pageComponents = props.data.entry.children;


    const slides: ISlideConfig[] = [

        ...pageComponents.map((data:any, k:number)=>{
            data.entry.isFullPage = true
            data.entry.pageNumber = k;
            data.entry.currentPageNumber = currentPageNumber;
            return(

                {
                    content: getComponent(data, k),
                    style: {}
                }

            )
        }),
        {
            content: <Footer></Footer>,
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
         console.log('nav-'+value)

         let currentNav = document.getElementById('nav-'+value) as HTMLInputElement;

         currentNav&&(currentNav.style.display = 'block');

    }




    const handleSlideChange = (e:number):void=>{
        // Used to monitor and determine whether to flip to the current page, to achieve animation effects
        setCurrentPageNumber(e)
        pageComponents.map((item: any) => item.entry.currentPageNumber = e)
        // console.log(slides)
        // console.log((slides as ISlideConfig[])[e].content)
        const nav:any = document.getElementById('nav');

        // console.log(setHeadStyle(e))
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

            {
                isBrowser == true ? <PageSlides
                    enableAutoScroll={slideFlag}
                    transitionSpeed={1500}
                    slides={slides}
                    parallax={{
                        offset: 0.60,    //0.6
                        type: SlideParallaxType.reveal
                    }}
                    onChange={(e)=>{handleSlideChange(e)}}
                /> : null
            }




        </div>
    );
}

export default FullPage;

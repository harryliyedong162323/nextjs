import HomeDao from "@/dao/homeDao";
import StoryDao from "@/dao/storyDao";
import activityDetailDao from "@/dao/activityDetailDao";
import storiesDetailDao from "@/dao/storiesDetailDao";
import RangeDao from "@/dao/rangeDao";
import HowToBuyDao from "@/dao/howToBuyDao";
import HowToBuyDetailDao from "@/dao/howToBuyDetailDao";

import { Suspense } from "react";
import dynamic from "next/dynamic";


import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

import HeroBanner from "@/components/page/heroBannerComponent"
import KVAnimation from "@/components/page/KVAnimationComponent"
import ProductFamily from "@/components/page/productFamilyComponent"
import Quote from "@/components/page/quoteComponent"
import TextBlock from "@/components/page/textBlockComponent"

import StoryOpening from "@/components/page/storyOpeningComponent"
import StoryChapterOne from "@/components/page/storyChapterOneComponent"
import StoryChapterTwo from "@/components/page/storyChapterTwoComponent"
import StoryChapterThree from "@/components/page/storyChapterThreeComponent"
import StoryChapterFour from "@/components/page/storyChapterFourComponent"
import StoryChapterFive from "@/components/page/storyChapterFiveComponent"
import StoryChapterSix from "@/components/page/storyChapterSixComponent"
import StoryChapterEnd from "@/components/page/storyChapterEndComponent"

import ActivityDetail from "@/components/page/activityDetailComponent"
import StoriesDetail from "@/components/page/storiesDetailComponent"

import TalesFromTheWild from "@/components/page/talesFromTheWildComponent"
import ServingSuggestion from "@/components/page/servingSuggestionComponent"
import FlavourFinder from "@/components/page/flavourFinderComponent"
import BottleConcept from "@/components/page/bottleConceptComponent"

import LocationMap from "@/components/page/locationMapComponent"
import IRLExperiences from "@/components/page/IRLExperiencesComponent"
import DigitalExperience from "@/components/page/digitalExperienceComponent"

import HowToBuyDetail from "@/components/page/howToBuyDetailComponent"

function getComponent(data: any, k:number) {

  const props = { data : data }

  switch(data.name) {

    case "heroBannerComponent":  return <HeroBanner key={k} {...props} />;
    case "KVAnimationComponent":   return <KVAnimation key={k} {...props} />;
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

    case "howToBuyDetailComponent":   return <HowToBuyDetail key={k} {...props} />;
    default:      return <div></div>
  }
}

function getDynamicComponent(data: any, k:number) {

  const Component = dynamic(() => import(`@/components/page/${data.name}`), {
    suspense: true,
  })

  const props = { data : data }

  return <Component key={k} {...props} />;
}




async function getPageData(params: any) {
  // params should be paased to fetch()
  console.log(params)
  let result = {}
  switch (params?.slug[0]) {
    case "home":
      result = await HomeDao.fetch();
      break;
    case "story":
      result = await StoryDao.fetch();
      break;
    case "activityDetail":
      result = await activityDetailDao.fetch();
      break;
    case "storiesDetail":
      result = await storiesDetailDao.fetch();
      break;
    case "range":
      result = await RangeDao.fetch();
      break;
    case "howToBuy":
      result = await HowToBuyDao.fetch();
      break;
    case "howToBuyDetail":
      result = await HowToBuyDetailDao.fetch();
      break;
    default:
      result = await HomeDao.fetch();
      break;
  }


  // console.log(res);

  return result;
}

// export const revalidate:boolean = false

export default async function Page({
  params,
}: {
  params: { locale: string; slug: string[] };
}) {
  const data: any = await getPageData(params);


  let componentsData: any[] = [];

  data.forEach((componentData: any, i: number) => {
    componentsData.push(componentData);
  });




  return (

    <div>
      {/*<Header></Header>*/}
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          {componentsData.map((data, k) => (

              getComponent(data, k)

          ))}
        </Suspense>
      </main>
      <Footer></Footer>
    </div>


  );
}

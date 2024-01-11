// import HeaderDao from '@/dao/headerDao'
import FooterDao from '@/dao/footerDao'


import HomeDao from "@/dao/homeDao";
import StoryDao from "@/dao/storyDao";
import activityDetailDao from "@/dao/activityDetailDao";
import storiesDetailDao from "@/dao/storiesDetailDao";
import RangeDao from "@/dao/rangeDao";
import HowToBuyDao from "@/dao/howToBuyDao";
import HowToBuyDetailDao from "@/dao/howToBuyDetailDao";
import LocalMarketActivityDao from "@/dao/localMarketActivityDao";
import PrivacyPolicyDao from '@/dao/privacyPolicyDao'
import ErrorDao from '@/dao/errorDao'
import React, { Suspense } from "react";
import dynamic from "next/dynamic";

//layout
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Popup from '@/components/layout/popup';


function getDynamicComponent(data: any, k:number) {
  const props = { data : data };

  const Component = dynamic(() => import(`@/components/page/${data.name}`), {
    suspense: true,
  });
  const FullPage = dynamic(() => import(`@/components/layout/${data.name}`), {
    suspense: true,
  });

  return data.name == 'fullPage' ? <FullPage key={k} {...props} /> : <Component key={k} {...props} />;
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
      result = await HowToBuyDetailDao.fetch(params?.slug[1]);
      break;
    case "localMarketActivity":
      result = await LocalMarketActivityDao.fetch();
      break;
    case "privacyPolicy":
      result = await PrivacyPolicyDao.fetch();
      break;
    case "error":
      result = await ErrorDao.fetch();
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

  const footerData: any = await FooterDao.fetch();

  // const footerData: any = await FooterDao.fetch();

  let componentsData: any[] = [];

  data.forEach((componentData: any, i: number) => {
    componentsData.push(componentData);
  });

  let isFullPageFlag:boolean = componentsData[0].type != 'fullPage' ? true : false;


  return (
      // className="w-[1920px] mx-auto relative"
    <div>

      {



        isFullPageFlag ?  <Header headStyle={componentsData[0].entry.headStyle}></Header> : null
      }

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          {componentsData.map((data, k) => (
              getDynamicComponent(data, k)
          ))}
        </Suspense>
      </main>
      {
        isFullPageFlag ?  <Footer data={footerData}></Footer> : null
      }
    </div>


  );
}

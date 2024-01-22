import HeaderDao from '@/dao/headerDao'
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
import React, {Suspense} from "react";
import dynamic from "next/dynamic";

import LOCALEMAP from "@/utils/locale";

//layout
import Header, {headerDataContent} from '@/components/layout/header';
import Footer, {footerDataContent} from "@/components/layout/footer";
import Popup from '@/components/layout/popup';

import { notFound } from 'next/navigation'

const Analytics = dynamic(() => import(`@/components/layout/analytics`), {
    suspense: true,
});

function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getDynamicComponent(data: componentsDataContent, k: number, footerData: footerDataContent, headerData: headerDataContent) {
    const props = {data: data, footerData: footerData, headerData};

    const Component:React.ComponentType<{}> = dynamic(() => import(`@/components/page/${data.name}`), {
        suspense: true,
    });
    const FullPage:React.ComponentType<{}> = dynamic(() => import(`@/components/layout/${data.name}`), {
        suspense: true,
    });

    return data.name == 'fullPage' ? <FullPage key={k} {...props}  /> : <Component key={k} {...props} />;
}

export interface paramsContent {
    locale:string,
    slug: Array<string>
}

async function getPageData(params: paramsContent) {
    // params should be paased to fetch()
    console.log(params)
    if(!LOCALEMAP.includes(params?.locale)){
        notFound();
        return false;
    }

    if(params?.locale == 'en-GB'){

        params.locale = 'en';
    }
    console.log(params?.locale)
    let result = {}
    switch (params?.slug[0]) {
        case "home":
            result = await HomeDao.fetch(params);
            break;
        case "story":
            result = await StoryDao.fetch(params);
            break;
        case "activityDetail":
            result = await activityDetailDao.fetch(params);
            break;
        case "storiesDetail":
            result = await storiesDetailDao.fetch(params);
            break;
        case "range":
            result = await RangeDao.fetch(params);
            break;
        case "howToBuy":
            result = await HowToBuyDao.fetch(params);
            break;
        case "howToBuyDetail":
            result = await HowToBuyDetailDao.fetch(params);
            break;
        case "localMarketActivity":
            result = await LocalMarketActivityDao.fetch(params);
            break;
        case "privacyPolicy":
            result = await PrivacyPolicyDao.fetch();
            break;
        case "error":
            result = await ErrorDao.fetch();
            break;
        default:
            notFound();
            // result = await HomeDao.fetch(params);
            break;
    }

    return result
}


// export const revalidate:boolean = false


interface pageContent{
    type:string,
    name:string,
    entry:{
        headStyle?:string,
        children?: Array<object>;
    }
}

interface metaContent{
    title:string,
    description:string,
    keyWords:string,
}


interface dataContent{

    seo?:metaContent,
    page:Array<pageContent>


}

interface componentsDataContent{
    type:string,
    name:string,
    entry:{
        headStyle?:string
    }
}

export async function generateMetadata({params}: { params: { locale: string; slug: string[] }}) {

    let data:dataContent;

    try {
        data = await getPageData(params) as dataContent
    }catch (e){
        notFound();
    }


    // console.log(data.seo)
    return {
        title: data.seo?.title,
        description: data.seo?.description,
        keywords:data.seo?.keyWords,
    }
}


export default async function Page({params}: { params: { locale: string; slug: string[] }}) {

    let data:dataContent;
    let footerData: footerDataContent | {} ;
    let headerData: headerDataContent | {} ;
    try {
        data = await getPageData(params) as dataContent;
        footerData = await FooterDao.fetch(params);
        headerData = await HeaderDao.fetch(params);
    }catch (e){
        notFound();
    }
    let componentsData: Array<componentsDataContent> = [];

    data.page.forEach((componentData: componentsDataContent, i: number) => {
        componentsData.push(componentData);
    });

    let isFullPageFlag: boolean = componentsData[0].type != 'fullPage' ? true : false;

    return (
        <div>
            {
                isFullPageFlag ? <Header headStyle={componentsData[0].entry.headStyle}  data={headerData as headerDataContent}></Header> : null
            }
            <main>
                <Suspense fallback={<div>Loading...</div>}>

                    <Analytics
                        pageView={`Viewpage_${capitalizeFirstLetter(params.slug[0])}${params.slug[1] ? `|${capitalizeFirstLetter(params.slug[1])}` : ""}`}></Analytics>
                    {componentsData.map((data, k) => (
                        getDynamicComponent(data, k, footerData as footerDataContent, headerData as headerDataContent)
                    ))}
                </Suspense>
            </main>
            {
                isFullPageFlag ? <Footer data={footerData as footerDataContent}></Footer> : null
            }
            <Popup></Popup>
        </div>

    );
}

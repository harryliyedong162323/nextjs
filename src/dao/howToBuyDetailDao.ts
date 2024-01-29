import HowToBuyDetailModel from "../model/howToBuyDetailModel";
import {paramsContent} from "@/app/[locale]/[...slug]/page";
import { headers } from 'next/headers';

// const GRAPHQL_URL = 'https://graphql.contentful.com/content/v1/spaces/zedtwknbsk02/environments/staging?access_token=DO_VJeQwGw6xpl4gkcC5xey6o0Yx8zCfOdS6JbJqFss';
//const GRAPHQL_URL = "https://uat-lamerqixi.workbyus.cn/px.php";

const query = `
   query($sysId:String!,$language:String!) {
   
   seo:seoMetaTagsCollection(limit: 1, where: {name: "How To Buy Detail"},locale: $language) {
      items {
          title
          keyWords
          description
      }
    }
   
   
    globalCampaignsComponent:dataStoreCollection (limit:1 where:{sys:{id:$sysId}},locale:$language ) {
      items {
            howToBuyDetailComponentStoreName
            howToBuyDetailComponentStoreAddress
            howToBuyDetailComponentStoreBusinessHours
            howToBuyDetailComponentStorePhone
            howToBuyDetailComponentBannerSubTitle
            howToBuyDetailComponentBannerTitle
            howToBuyDetailComponentScrollContent
            howToBuyDetailComponentBannerImage {
                      imagepc {
                          url
                      }
                      imagemobile {
                          url
                      }
                      altText
            }
    }
}
  howToBuyDetailComponent:dataStoreCollection (limit:1 where:{sys:{id:$sysId}},locale:$language ) {
      items {
            howToBuyDetailComponentServiceTitle
            howToBuyDetailComponentServiceContent

            serviceCarouselImageCollection(limit : 10,locale: $language) {
            items {
                sys {
                    id
                }
                imagepc {
                    url
                }
                imagemobile {
                    url
                }
                altText
            }
        }
    }

    }
  }
`;

class HowToBuyDetailDao {
  static async fetch<HowToBuyDetailModel>(params: paramsContent) {
    const variables = { sysId: params?.slug[1],language: params?.locale || process.env.LOCATION };

    const headersList = headers();
    let url :string
    if (process.env.NODE_ENV === 'development') {
      // 在开发模式下执行的代码
      url = `http://${headersList.get('host')}/data/${params?.locale}/howToBuyDetailDao/${variables.sysId}.json`;
    } else {
      // 在生产模式下执行的代码
      url = `${process.env.DOMAIN}data/${params?.locale}/howToBuyDetailDao/${variables.sysId}.json`;
    }

    console.log(variables)
    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ query, variables }),
    });
    const result = await response.json();
    // return HomeModel.fromJson(result);
    // return result;
    // if(response.code == 200){
    //     return HomeModel.fromJson(result);
    // }else{
    //     throw Error('Failed to load howToBuy_page data');
    // }
    return {
      seo:{
        ...HowToBuyDetailModel.query("seo", result),
      },
      page:[
        // {
        //     type: "fullPage",
        //     name: "fullPage",
        //     entry: {
        //         children:[
        //
        //         ]
        //     }
        // },

        {
          type: "globalCampaignsComponent",
          name: "globalCampaignsComponent",
          entry: {
            headStyle: "bg-white",

            ...HowToBuyDetailModel.query("globalCampaignsComponent", result),
          },
        },
        {
          type: "howToBuyDetailComponent",
          name: "howToBuyDetailComponent",
          entry: {
            headStyle: "black",

            ...HowToBuyDetailModel.query("howToBuyDetailComponent", result),
          },
        },
      ]
    };
  }
}

export default HowToBuyDetailDao;

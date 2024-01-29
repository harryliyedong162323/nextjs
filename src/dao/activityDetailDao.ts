import PageModel from "../model/pageModel";
import {paramsContent} from "@/app/[locale]/[...slug]/page";
import { headers } from 'next/headers';

// const GRAPHQL_URL = 'https://graphql.contentful.com/content/v1/spaces/zedtwknbsk02/environments/staging?access_token=DO_VJeQwGw6xpl4gkcC5xey6o0Yx8zCfOdS6JbJqFss';
//const GRAPHQL_URL = "https://uat-lamerqixi.workbyus.cn/px.php";

const query = `
query($sysId:String!,$language:String!) {
    localMarketActivityDetailCollection (limit:1 where:{sys:{id:$sysId}},locale: $language) {
        items {
            sys {
                id
            }
            sectionName
            activityDetailComponentTitle
  
            pageDetailCollection(locale: $language) {              
                items {
                    ... on DataLocalMarketDetailCarouselImage {
                        imagesCollection (limit : 10,locale: $language) {
                            items {
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
  
                    ... on DataLocalMarketDetailOneImageContent1 {
                        contentTitle
                        contentText {
                            json
                            links {
                                entries {
                                    inline {
                                        sys {
                                            id
                                        }
                                    }
                                }
                            }
                        }
                        image {
                            imagepc {
                                url
                            }
                            imagemobile {
                                url
                            }
                            altText
                        }
                    }
  
                    ... on DataLocalMarketDetailOneImageContent2 {
                        contentTitle
                        contentText {
                            json
                            
                        }
                        image {
                            imagepc {
                                url
                            }
                            imagemobile {
                                url
                            }
                            altText
                        }
                    }
  
                    ... on DataLocalMarketDetailMultipleContent {
                        contentTitle
                        contentText {
                            json
                            links {
                                entries {
                                    inline {
                                        sys {
                                            id
                                        }
                                    }
                                }
                            }
                        }
                    }
  
                    ... on DataLocalMarketDetailOneImage {
                        image {
                            imagepc {
                                url
                            }
                            imagemobile {
                                url
                            }
                            altText
                        }
                        internalName
                      
                    }
  
                    ... on DataLocalMarketDetailOneVideo {
                      title
                      video {
                          video {
                              url
                          }
                      }
                      contentText {
                            json
                            
                        }
                    }
  
  
                    __typename
                }
            }
            
            
  
        }
    }
  
  }
`;

class ActivityDetailDao {
  static async fetch<PageModel>(params: paramsContent) {

    const variables = { sysId: params?.slug[1],language: params?.locale || process.env.LOCATION };

    const headersList = headers();
    let url :string
    //console.log(params);
    //
    if (process.env.NODE_ENV === 'development') {
      // 在开发模式下执行的代码
      url = `http://${headersList.get('host')}/data/${params?.locale}/activitDetailDao/${variables.sysId}.json?v=0129`;
    } else {
      // 在生产模式下执行的代码
      url = `${process.env.DOMAIN}data/${params?.locale}/activitDetailDao/${variables.sysId}.json?v=0129`;
    }





    const response = await fetch(url, {
      // method: "POST",
      // cache: "no-store",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // body: JSON.stringify({ query, variables }),
    });
    const result = await response.json();

    console.log(result)
    return {
      seo:{

      },
      page:[
        {
          type: "activityDetailComponent",
          name: "activityDetailComponent",
          entry: {
            headStyle: "bg-white",
            ...PageModel.query("localMarketActivityDetailCollection", result),
          },
        },
      ]
    };
  }
}

export default ActivityDetailDao;

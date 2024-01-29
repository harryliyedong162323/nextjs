import PageModel from "../model/pageModel";
import {paramsContent} from "@/app/[locale]/[...slug]/page";
import { headers } from 'next/headers';

// const GRAPHQL_URL = 'https://graphql.contentful.com/content/v1/spaces/zedtwknbsk02/environments/staging?access_token=DO_VJeQwGw6xpl4gkcC5xey6o0Yx8zCfOdS6JbJqFss';
// const GRAPHQL_URL = "https://uat-lamerqixi.workbyus.cn/px.php";

const query = `
query($sysId:String!,$language:String!) {
    
    seo:seoMetaTagsCollection(limit: 1, where: {name: "Stories Detail"},locale: $language) {
      items {
          title
          keyWords
          description
      }
    }
    
    storiesDetailCollection (limit:1 where:{sys:{id:$sysId}} locale: $language) {
        items {
            pageName
            storiesDetailComponentTitle
            storiesDetailComponentBackgroundImage {
                imagepc {
                    url
                }
                imagemobile {
                    url
                }
                altText
            }
            storiesDetailComponentName
            storiesDetailComponentAvatar {
                 imagepc {
                    url
                }
                imagemobile {
                    url
                }
                altText
            }
            storiesDetailComponentCareer
  
            storiesDetailComponentDetailCollection(locale: $language) {              
                items {
                    ... on DataKolDetailCarouselImage {
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
  
                    ... on DataKolDetailOneImageContent1 {
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
  
                    ... on DataKolDetailOneImageContent2 {
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
  
                    ... on DataKolDetailMultipleContent {
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
  
                    ... on DataKolDetailOneImage {
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
  
                    ... on DataKolDetailOneVideo {
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

class StoriesDetailDao {
  static async fetch<PageModel>(params: paramsContent) {
    const variables = { sysId: params?.slug[1],language: params?.locale || process.env.LOCATION };

    const headersList = headers();
    let url :string
    if (process.env.NODE_ENV === 'development') {
      // 在开发模式下执行的代码
      url = `http://${headersList.get('host')}/data/${params?.locale}/storiesDetail/${variables.sysId}.json`;
    } else {
      // 在生产模式下执行的代码
      url = `${process.env.DOMAIN}data/${params?.locale}/storiesDetail/${variables.sysId}.json`;
    }

    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ query, variables }),
    });
    const result = await response.json();

    console.log(result);

    return {
      seo:{
        ...PageModel.query("seo", result),
      },
      page:[
        {
          type: "storiesDetailComponent",
          name: "storiesDetailComponent",
          entry: {
            headStyle: "bg-white",
            ...PageModel.query("storiesDetailCollection", result),
          },
        },
      ]
    };
  }
}

export default StoriesDetailDao;

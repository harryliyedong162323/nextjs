import HomeModel from "../model/homeModel";
import {paramsContent} from "@/app/[locale]/[...slug]/page";
import { headers } from 'next/headers';

// const GRAPHQL_URL = 'https://graphql.contentful.com/content/v1/spaces/zedtwknbsk02/environments/staging?access_token=DO_VJeQwGw6xpl4gkcC5xey6o0Yx8zCfOdS6JbJqFss';
const GRAPHQL_URL = "https://uat-lamerqixi.workbyus.cn/px.php";
//
// const path = '/' + params.locale + '/' + params.slug.join('/')
// console.log(path)


// const response = await fetch(HOME_URL + '?path=' + path, { next: { tags: [path] }})

// fetch sharing menu
// fetch sharing footer
// fetch sharing popups

const query = `

   query($language:String!) {
   
   seo:seoMetaTagsCollection(limit: 1, where: {name: "Home"},locale: $language) {
    items {
        title
        keyWords
        description
    }
  }
   
   
   
 KVAnimation: homeCollection(limit: 1, where: {pageName: "home"},locale: $language) {
    items {
      kvAnimationComponentKvTitle
      kvAnimationComponentScrollContent
      kvAnimationComponentBackgroundVideo {
        video {
          url
        }
      }
      kvAnimationComponentProductVideo {
          video {
              url
          }
      }
    }
  }

  productFamily: homeCollection(limit: 1, where: {pageName: "home"},locale: $language) {
    items {
      productFamilyComponentProductsCollection(limit: 10, order:id_ASC,locale: $language) {
        items {
            id
            active
            num
            tag
          productName
          age
          productImage {
            imagepc {
              url
            }
            imagemobile {
              url
            }
            altText
          }
          backGroundImage {
            imagepc {
              url
            }
            imagemobile {
              url
            }
            altText
          }
          age
          unit
          description
          price
        }
      }
    }
  }

  interactiveVideo: homeCollection(limit: 1, where: {pageName: "home"},locale: $language) {
    items {
      interactiveVideoComponentIsShow
      interactiveVideoComponentJumpUrl
      interactiveVideoComponentExploreMoreImage {
          imagepc {
          url
        }
        imagemobile {
          url
        }
        altText
      }
      interactiveVideoComponentImage {
        imagepc {
          url
        }
        imagemobile {
          url
        }
        altText
      }
      interactiveVideoComponentTitle
      interactiveVideoComponentExploreMore
    }
  }

  introduceCampaign: homeCollection(limit: 1, where: {pageName: "home"},locale: $language) {
    items {
        introduceCampaignComponentTitle
        introduceCampaignComponentBackgroundImage {
        imagepc {
          url
        }
        imagemobile {
          url
        }
        altText
      }
      introduceCampaignComponentCampaignsCollection(limit: 10,order:id_DESC,locale: $language) {
        items {
          id  
          location
          year
          description
         
          campaignImage {
            imagepc {
              url
            }
            imagemobile {
              url
            }
            altText
          }
          detailPage {
            sys {
              id
            }
            activityDetailComponentTitle
          }
        }
      }
    }
  }

  nearYou: homeCollection(limit: 1, where: {pageName: "home"},locale: $language) {
    items {
      nearYouContentTitle
      nearYouComponentStoresCollection(limit: 10,locale: $language) {
        items {
            sys{
              id
            }
            nearYouId
            nearYouActive
            howToBuyDetailComponentStoreName
            howToBuyDetailComponentStoreAddress
            nearYouDes
            nearYouComponentNearYouCarouselImageCollection(limit:10,order:id_DESC,locale: $language) {
              items {
                  id
                   imagesCollection(limit:10,locale: $language) {
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
          }
          
        }
      }
    }
  }

  VIPClub: homeCollection(limit: 1, where: {pageName: "home"},locale: $language) {
    items {
      vipClubComponentJoinUsTitle
      vipClubComponentJoinUsSubTitle
      vipClubComponentLeftImage {
        imagepc {
          url
        }
        imagemobile {
          url
        }
        altText
      }
      joinUsLeftCtaImage {
           imagepc {
          url
        }
        imagemobile {
          url
        }
        altText
      }
      joinUsLeftCtaAImage {
           imagepc {
          url
        }
        imagemobile {
          url
        }
        altText
      }
      joinUsLeftContent
      vipClubComponentJoinUsLeftJumpUrl

      vipClubComponentMiddleImage {
        imagepc {
          url
        }
        imagemobile {
          url
        }
        altText
      }
       joinUsMiddleCtaImage {
           imagepc {
          url
        }
        imagemobile {
          url
        }
        altText
      }
      joinUsMiddleCtaAImage {
           imagepc {
          url
        }
        imagemobile {
          url
        }
        altText
      }
      joinUsMiddleContent

      vipClubComponentJoinUsLeftJumpUrl
      vipClubComponentRightImage {
        imagepc {
          url
        }
        imagemobile {
          url
        }
        altText
      }
      joinUsRightCtaImage {
           imagepc {
          url
        }
        imagemobile {
          url
        }
        altText
      }
      joinUsRightCtaAImage {
           imagepc {
          url
        }
        imagemobile {
          url
        }
        altText
      }
      joinUsRightContent
      
    }
  }
}
`;




class HomeDao {
  static async fetch<HomeModel>(params:paramsContent) {
    const headersList = headers();
    let url :string
    if (process.env.NODE_ENV === 'development') {
      // 在开发模式下执行的代码
      url = `http://${headersList.get('host')}/data/${params?.locale}/homeDao.json`;
    } else {
      // 在生产模式下执行的代码
      url = `${process.env.DOMAIN}data/${params?.locale}/homeDao.json`;
    }

    const variables = { language: params?.locale || process.env.LOCATION };
    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ query, variables }),
    });
    const result = await response.json();

    //console.log(result)

    // return HomeModel.fromJson(result);
    // return result;
    // if(response.code == 200){
    //     return HomeModel.fromJson(result);
    // }else{
    //     throw Error('Failed to load home_page data');
    // }

    return {
      seo:{
        ...HomeModel.query("seo", result),
      },
      page:[
        {
          type: "fullPage",
          name: "fullPage",
          entry: {
            children: [
              {
                type: "KVAnimationComponent",
                name: "KVAnimationComponent",
                entry: {
                  headStyle: "large", //large white black bg-white none

                  ...HomeModel.query("KVAnimation", result),
                },
              },
              {
                type: "productFamilyComponent",
                name: "productFamilyComponent",
                entry: {
                  headStyle: "white",

                  ...HomeModel.query("productFamily", result),
                },
              },
              {
                type: "interactiveVideoComponent",
                name: "interactiveVideoComponent",
                entry: {
                  headStyle: "white",

                  ...HomeModel.query("interactiveVideo", result),
                },
              },
              {
                type: "introduceCampaignComponent",
                name: "introduceCampaignComponent",
                entry: {
                  headStyle: "black",

                  ...HomeModel.query("introduceCampaign", result),
                },
              },
              {
                type: "nearYouComponent",
                name: "nearYouComponent",
                entry: {
                  headStyle: "black",

                  ...HomeModel.query("nearYou", result),
                },
              },

              {
                type: "VIPClubComponent",
                name: "VIPClubComponent",
                entry: {
                  headStyle: "white",

                  ...HomeModel.query("VIPClub", result),
                },
              },
            ],
          },
        },
      ]
    }




  }
}

export default HomeDao;

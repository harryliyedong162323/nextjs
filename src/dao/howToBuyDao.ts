import HowToBuyModel from "../model/howToBuyModel";
import { paramsContent } from "@/app/[locale]/[...slug]/page";
// const GRAPHQL_URL = 'https://graphql.contentful.com/content/v1/spaces/zedtwknbsk02/environments/staging?access_token=DO_VJeQwGw6xpl4gkcC5xey6o0Yx8zCfOdS6JbJqFss';
const GRAPHQL_URL = "https://uat-lamerqixi.workbyus.cn/px.php";

const query = `

  query($language:String!) {
    seo:seoMetaTagsCollection(limit: 1, where: {name: "HowToBuy"},locale: $language) {
      items {
          title
          keyWords
          description
      }
    }
  
  irlstores: dataStoreCollection( where: { showInHowToBuyIrl: true },order:howToBuyIrlSort_ASC,locale: $language
 ) {
              items {
                sys {
                      id
                  }
                  howToBuyDetailComponentRegion {
                      regionId
                      name
                  }
                  howToBuyIrlImage {
                      imagepc {
                          url
                      }
                      imagemobile {
                          url
                      }
                      altText
                  }
                  showInHowToBuyIrl
                  howToBuyIrlSort
                  howToBuyDetailComponentStoreName
                  howToBuyDescription

              }
          }
  
  
  stores: dataStoreCollection (limit:80,locale: $language){
              items {
                  sys {
                      id
                  }
                  howToBuyDetailComponentRegion {
                      regionId
                      name
                  }
                  howToBuyDetailComponentStoreName
                  howToBuyDescription
                  howToBuyJumpUrl
                  howToBuyDetailComponentBannerImage {
                      imagepc {
                          url
                      }
                      imagemobile {
                          url
                      }
                      altText
                  }
                  
                  
                 
                  howToBuyIrlImage {
                      imagepc {
                              url
                          }
                          imagemobile {
                              url
                          }
                          altText
                  }
                  showInHowToBuyIrl
                  howToBuyIrlSort
              }
          }
  
  
   locationInfo:howToBuyCollection (limit:1 where:{internalName:"howToBuy"},locale: $language ) {
      items {
          locationInfoComponentTitle
          regionExploreMoreImage {
              imagepc {
                  url
              }
              imagemobile {
                  url
              }
              altText
          }

          locationInfoComponentRegionListCollection(limit :10,order:regionId_ASC,locale: $language) {
              items {
                  name
                  regionId
                  exploreMoreContent
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
          }

          locationInfoComponentStoreListCollection (limit:50,locale: $language){
              items {
                  sys {
                      id
                  }
                  howToBuyDetailComponentRegion {
                      regionId
                      name
                  }
                  howToBuyDetailComponentStoreName
                  howToBuyDescription
                  howToBuyJumpUrl
                  howToBuyDetailComponentBannerImage {
                      imagepc {
                          url
                      }
                      imagemobile {
                          url
                      }
                      altText
                  }
                  
                  
                 
                  howToBuyIrlImage {
                      imagepc {
                              url
                          }
                          imagemobile {
                              url
                          }
                          altText
                  }
                  showInHowToBuyIrl
                  howToBuyIrlSort
              }
          }
      }
  }


  IRLExperiences:howToBuyCollection (limit:1 where:{internalName:"howToBuy"},locale: $language ) {
      items {
           irlExperiencesComponentIrlTitle
          irlExperiencesComponentIrlStoresCollection(locale: $language) {
              items {
                  howToBuyIrlImage {
                      imagepc {
                          url
                      }
                      imagemobile {
                          url
                      }
                      altText
                  }
                  showInHowToBuyIrl
                  howToBuyIrlSort

              }
          }

          irlExperiencesComponentDigitalTitle
          digitalExperienceComponentDigitalLeftImage {
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

  digitalExperience:howToBuyCollection (limit:1 where:{internalName:"howToBuy"},locale: $language ) {
      items {
          digitalExperienceComponentDigitalLeftImage {
              imagepc {
                  url
              }
              imagemobile {
                  url
              }
              altText
          }
          digitalLeftCtaImage {
              imagepc {
                  url
              }
              imagemobile {
                  url
              }
              altText
          } 
          digitalLeftCtaImage {
               imagepc {
                  url
              }
              imagemobile {
                  url
              }
              altText
          }
          digitalLeftCtaAImage {
               imagepc {
                  url
              }
              imagemobile {
                  url
              }
              altText
          }
          digitalleftContent
           digitalExperienceComponentDigitalMiddleImage {
              imagepc {
                  url
              }
              imagemobile {
                  url
              }
              altText
          }
          digitalMiddleCtaImage {
               imagepc {
                  url
              }
              imagemobile {
                  url
              }
              altText
          }
          digitalMiddleCtaAImage {
               imagepc {
                  url
              }
              imagemobile {
                  url
              }
              altText
          }
          digitalMiddleContent
          digitalExperienceComponentDigitalRightImage {
              imagepc {
                  url
              }
              imagemobile {
                  url
              }
              altText
          }
          digitalRightCtaImage {
               imagepc {
                  url
              }
              imagemobile {
                  url
              }
              altText
          }
          digitalRightCtaAImage {
               imagepc {
                  url
              }
              imagemobile {
                  url
              }
              altText
          }
          digitalRightContent
      }
  }


}
  

`;

class HowToBuyDao {
  static async fetch<HowToBuyModel>(params: paramsContent) {
    const variables = { language: params?.locale || process.env.LOCATION };
    const response = await fetch(GRAPHQL_URL, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });
    const result = await response.json();
    console.log(result);
    // return HomeModel.fromJson(result);
    // return result;
    // if(response.code == 200){
    //     return HomeModel.fromJson(result);
    // }else{
    //     throw Error('Failed to load howToBuy_page data');
    // }

    return {
      seo: {
        ...HowToBuyModel.query("seo", result),
      },
      page: [
        {
          type: "locationInfoComponent",
          name: "locationInfoComponent",
          entry: {
            headStyle: "bg-white",
            stores: HowToBuyModel.queryStores(result),
            ...HowToBuyModel.query("locationInfo", result),
          },
        },
        // {
        //     type: "locationMapComponent",
        //     name: "locationMapComponent",
        //     entry: {
        //         headStyle:'black',
        //     },
        // },
        {
          type: "IRLExperiencesComponent",
          name: "IRLExperiencesComponent",
          entry: {
            headStyle: "bg-white",
            storeList: HowToBuyModel.queryIrlstores(result),
          },
        },
        {
          type: "digitalExperienceComponent",
          name: "digitalExperienceComponent",
          entry: {
            headStyle: "bg-white",
            ...HowToBuyModel.query("digitalExperience", result),
          },
        },
      ],
    };
  }
}

export default HowToBuyDao;

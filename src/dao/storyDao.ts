import PageModel from "../model/pageModel";
import {paramsContent} from "@/app/[locale]/[...slug]/page";
import { headers } from 'next/headers';

// const BASE_URL = "https://graphql.contentful.com/content/v1/spaces/zedtwknbsk02/environments/staging?access_token=DO_VJeQwGw6xpl4gkcC5xey6o0Yx8zCfOdS6JbJqFss";

const BASE_URL = "https://uat-lamerqixi.workbyus.cn/px.php";

const query = `
query($language:String!) {

  seo:seoMetaTagsCollection(limit: 1, where: {name: "Story"},locale: $language) {
    items {
        title
        keyWords
        description
    }
  }

  storyOpening : storyCollection (limit:1 where:{pageName:"story"},locale: $language ) {
     items {
         storyOpeningTitle
         storyOpeningDescription
         storyOpeningScrollText
         storyOpeningComponentCarouselCollection(locale: $language) {
             items {
                 sys {
                     id
                 }
                 backgroundImage {
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

 storyChapterOne : storyCollection (limit:1 where:{pageName:"story"},locale: $language ) {
     items {
          storyChapterOneComponentTextContent
         storyChapterOneComponentSlidingText
         storyChapterOneComponentBackgroundImage {
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

  storyChapterTwo : storyCollection (limit:1 where:{pageName:"story"},locale: $language ) {
     items {
         sys {
             id
         }
         storyChapterTwoComponentDescription

         storyChapterTwoComponentFirst

         storyChapterTwoComponentSecond

         storyChapterTwoComponentThird

         storyChapterTwoComponentFourth

         storyChapterTwoComponentFifth

         storyChapterTwoComponentSlidingText

         storyChapterTwoComponentBackgroundImage {
             imagepc {
                 url
             }

             imagemobile {
                 url
             }

             altText
         }

         storyChapterTwoComponentFaceImage {
             imagepc {
                 url
             }
             imagemobile {
                 url
             }
             altText
         }

         chapterTwoFaceImageTwo {
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

 storyChapterThree : storyCollection (limit:1 where:{pageName:"story"},locale: $language ) {
     items {

         sys {
             id
         }

         storyChapterThreeComponentDescription

         storyChapterThreeComponentSlidingText

         storyChapterThreeComponentBackgroundImage {
             imagepc {
                 url
             }

             imagemobile {
                 url
             }

             altText
         }

         storyChapterThreeComponentFaceImage {
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

 storyChapterFour : storyCollection (limit:1 where:{pageName:"story"},locale: $language ) {
     items {
         sys {
             id
         }

         storyChapterFourComponentDescription

         storyChapterFourComponentFirst

         storyChapterFourComponentSecond

         storyChapterFourComponentThird

         storyChapterFourComponentSlidingText

         chapterFourFaceImageTwo {
            imagepc {
                 url
             }

             imagemobile {
                 url
             }

             altText
         }

         storyChapterFourComponentBackgroundImage {
             imagepc {
                 url
             }

             imagemobile {
                 url
             }

             altText
         }

         storyChapterFourComponentFaceImage {
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

 storyChapterFive : storyCollection (limit:1 where:{pageName:"story"},locale: $language ) {
     items {

         sys {
             id
         }

         storyChapterFiveComponentDescription

         storyChapterFiveComponentSlidingText

         storyChapterFiveComponentBackgroundImage {
             imagepc {
                 url
             }
             imagemobile {
                 url
             }
             altText
         }

         storyChapterFiveComponentSmallImage {
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

 storyChapterSix : storyCollection (limit:1 where:{pageName:"story"},locale: $language ) {
     items {

         sys {
             id
         }

         storyChapterSixComponentFirst

         storyChapterSixComponentSecond

         storyChapterSixComponentDescription

         storyChapterSixComponentSlidingText

         storyChapterSixComponentBackgroundImage {
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

 storyChapterEnd : storyCollection (limit:1 where:{pageName:"story"},locale: $language ) {
     items {
         sys {
             id
         }
         storyChapterEndComponentBackgroundImage {
             imagepc {
                 url
             }
             imagemobile {
                 url
             }
             altText
         }

         storyChapterEndComponentDescription
         storyChapterEndComponentSlidingText

         storyChapterEndComponentProductListCollection(limit:10,order:id_ASC,locale: $language) {
             items {
               id
               productName
               age
               unit
               description
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
               
               ourStoryListImage {
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
`;

class StoryDao {
  static async fetch<PageModel>(params:paramsContent) {
    const variables = { language: params?.locale || process.env.LOCATION };

    const headersList = headers();
    let url :string
    if (process.env.NODE_ENV === 'development') {
      // 在开发模式下执行的代码
      url = `http://${headersList.get('host')}/data/${params?.locale}/storyDao.json`;
    } else {
      // 在生产模式下执行的代码
      url = `${process.env.DOMAIN}data/${params?.locale}/storyDao.json`;
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
        ...PageModel.query("seo", result)
      },
      page:[
        {
          type: "fullPage",
          name: "fullPage",
          entry: {
            children: [
              {
                type: "storyOpeningComponent",
                name: "storyOpeningComponent",
                entry: {
                  ...PageModel.query("storyOpening", result),
                },
              },
              {
                type: "storyChapterOneComponent",
                name: "storyChapterOneComponent",
                entry: {
                  ...PageModel.query("storyChapterOne", result),
                },
              },
              {
                type: "storyChapterTwoComponent",
                name: "storyChapterTwoComponent",
                entry: {
                  ...PageModel.query("storyChapterTwo", result),
                },
              },
              {
                type: "storyChapterThreeComponent",
                name: "storyChapterThreeComponent",
                entry: {
                  ...PageModel.query("storyChapterThree", result),
                },
              },
              {
                type: "storyChapterFourComponent",
                name: "storyChapterFourComponent",
                entry: {
                  ...PageModel.query("storyChapterFour", result),
                },
              },
              {
                type: "storyChapterFiveComponent",
                name: "storyChapterFiveComponent",
                entry: {
                  ...PageModel.query("storyChapterFive", result),
                },
              },
              {
                type: "storyChapterSixComponent",
                name: "storyChapterSixComponent",
                entry: {
                  ...PageModel.query("storyChapterSix", result),
                },
              },
              {
                type: "storyChapterEndComponent",
                name: "storyChapterEndComponent",
                entry: {
                  ...PageModel.query("storyChapterEnd", result),
                },
              },
            ],
          },
        },
      ]
    };
  }
}

export default StoryDao;

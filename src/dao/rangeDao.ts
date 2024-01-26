import PageModel from "../model/pageModel";
import {paramsContent} from "@/app/[locale]/[...slug]/page";
// const BASE_URL = "https://graphql.contentful.com/content/v1/spaces/zedtwknbsk02/environments/staging?access_token=DO_VJeQwGw6xpl4gkcC5xey6o0Yx8zCfOdS6JbJqFss";

const BASE_URL = "https://uat-lamerqixi.workbyus.cn/px.php";

const query = `
query($language:String!) {

    seo:seoMetaTagsCollection(limit: 1, where: {name: "Our Range"},locale: $language) {
      items {
          title
          keyWords
          description
      }
    } 


    productFamily:rangeCollection (limit:1 where:{pageName:"range"} locale: $language) {
        items {
            productFamilyComponentProductsCollection(limit:10, order:id_ASC,locale: $language) {
                items {
                    id
                    active
                    num
                    tag
                    productName
                    age
                    unit
                    description
                    price 
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
                 
                }
            }
        }
    }
  
    talesFromTheWild:rangeCollection (limit:1 where:{pageName:"range"} locale: $language) {
        items {
  
            talesFromTheWildTitle
            talesFromTheWildListCollection (order:id_ASC, locale: $language) {
              items {
                  sys {
                    id
                }
                id
                listName
                listDescription
                listImage {
                    imagepc {
                        url
                    }
                    imagemobile {
                        url
                    }
                    altText
                }
                listSmallImage {
                    imagepc {
                        url
                    }
                    imagemobile {
                        url
                    }
                    altText
                }
                listAvatar {
                    imagepc {
                        url
                    }
                    imagemobile {
                        url
                    }
                    altText
                }
                 targetPage {
                  sys {
                      id
                  }
                 }
              }
            }
  
        }
    }
  
    servingSuggestion:rangeCollection (limit:1 where:{pageName:"range"} locale: $language) {
        items {
            servingSuggestionComponentTitle
            productFamilyComponentProducts:productFamilyComponentProductsCollection(limit:10, order:id_ASC, locale: $language) {
                items {
                    id
                    productName
                    servingSuggestionContentText
                    servingSuggestionDescription
                    servingSuggestionLeftImage {
                        imagepc {
                            url
                        }
                        imagemobile {
                            url
                        }
                        altText
                    }
                    servingSuggestionRightImage {
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
  
    bottleConcept:rangeCollection (limit:1 where:{pageName:"range"} locale: $language) {
        items {
            bottleConceptComponentTitle
            bottleConceptComponentPrompttext
            bottleConceptComponentVideo1 {
                video {
                    url
                }
            }
             bottleConceptComponentVideo2 {
                video {
                    url
                }
            }
        }
    }
  
    flavourFinder:rangeCollection (limit:1 where:{pageName:"range"} locale: $language) {
        items {
            flavourFinderComponentTitle
            flavourFinderComponentDescription1
            flavourFinderComponentStartContent
        }
    }
  
    rangeNav:rangeCollection (limit:1 where:{pageName:"range"} locale: $language) {
        items {
            nav1Name
            nav1Render
            nav2Name
            nav2Render
            nav3Name
            nav3Render
            nav4Name
            nav4Render
            nav5Name
            nav5Render
        }
    }
  
  }
`;

const quizQueryOne = `
  query($language:String!) {
    dataQuizQ1Collection(locale: $language) {
        items {
            id
             topicContent
             optionAId
             optionAValue
              optionAContent
              optionAImage {
                  imagepc {
                      url
                  }
                  imagemobile {
                      url
                  }
                  altText
              }
              optionBId
             optionBValue
              optionBContent
              optionBImage {
                  imagepc {
                      url
                  }
                  imagemobile {
                      url
                  }
                  altText
              }
              optionCId
              optionCValue
              optionCContent
              optionCImage {
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
`

const quizQueryTwo = `
  query($language:String!) {
    dataQuizQ2Collection(locale: $language) {
        items {
            id
            topicContent
            description
            optionAId
            optionAValue
              optionAContent
              optionAImage {
                  imagepc {
                      url
                  }

                  imagemobile {
                      url
                  }
                  altText
              }
              optionAAudio {
                  video {
                      url
                  }
              }

              optionBId
              optionBValue
              optionBContent
              optionBImage {
                  imagepc {
                      url
                  }

                  imagemobile {
                      url
                  }
                  altText
              }
              optionBAudio {
                  video {
                      url
                  }
              }

              optionCId
              optionCValue
              optionCContent
              optionCImage {
                  imagepc {
                      url
                  }

                  imagemobile {
                      url
                  }
                  altText
              }
              optionCAudio {
                  video {
                      url
                  }
              }
        }
    }
  }
`

const quizQueryThree = `
  query($language:String!) {
    dataQuizQ3Collection(locale: $language) {
        items {
            id
            topicContent
            question1Id
              question1Content
              option1AId
              option1AContent
              option1AValue
              option1AIcon {
                  imagepc {
                      url
                  }
                  imagemobile {
                      url
                  }
                  altText
              }
              option1BId
              option1BContent
              option1BValue
              option1BIcon {
                  imagepc {
                      url
                  }
                  imagemobile {
                      url
                  }
                  altText
              }
              option1CId
              option1CContent
              option1CValue
              option1CIcon {
                  imagepc {
                      url
                  }
                  imagemobile {
                      url
                  }
                  altText
              }
              option1DId
              option1DContent
              option1DValue
              option1DIcon {
                  imagepc {
                      url
                  }
                  imagemobile {
                      url
                  }
                  altText
              }
              option1EId
              option1EContent
              option1EValue
              option1EIcon {
                  imagepc {
                      url
                  }
                  imagemobile {
                      url
                  }
                  altText
              }
              option1FId
              option1FContent
              option1FValue
              option1FIcon {
                  imagepc {
                      url
                  }
                  imagemobile {
                      url
                  }
                  altText
              }
              question2Id
              question2Content
              option2AId
              option2AValue
              option2AContent
              option2AImage {
                  imagepc {
                      url
                  }
                  imagemobile {
                      url
                  }
              }
              option2BId
              option2BValue
              option2BContent
              option2BImage {
                  imagepc {
                      url
                  }
                  imagemobile {
                      url
                  }
              }

              option2CId
              option2CValue
              option2CContent
              option2CImage {
                  imagepc {
                      url
                  }
                  imagemobile {
                      url
                  }
              }

              option2DId
              option2DValue
              option2DContent
              option2DImage {
                  imagepc {
                      url
                  }
                  imagemobile {
                      url
                  }
              }
        }
    }
  }
`

const quizQueryFour = `
  query($language:String!) {
    dataQuizQ4Collection(locale: $language) {
        items {
            id
            topicContent
            optionAId
            optionAValue
              optionAContent
              optionAImage {
                  imagemobile {
                      url
                  }
                  imagepc {
                      url
                  }
                  altText
              }
              optionBId
              optionBValue
              optionBContent
              optionBImage {
                  imagemobile {
                      url
                  }
                  imagepc {
                      url
                  }
                  altText
              }
              optionCId
              optionCValue
              optionCContent
              optionCImage {
                  imagemobile {
                      url
                  }
                  imagepc {
                      url
                  }
                  altText
              }
        }
    }
  }
`

const quizQueryFive = `
  query($language:String!) {
    dataQuizQ5Collection(locale: $language) {
        items {
             id
             topicContent
              optionAId
              optionAValue
              optionAContent
              optionBId
              optionBValue
              optionBContent
              optionCId
              optionCValue
              optionCContent
        }
    }
  }
`


const quizQuery = `
query($language:String!) {


    rangeCollection (limit:1 where:{pageName:"range"},locale: $language ) {
      items {

          flavourFinderComponentTitle
          flavourFinderComponentStartContent
          flavourFinderComponentDescription1
          flavourFinderComponentDescription2
          dywfResultSubtitle
          dywfResultContent
          dywfExploreContent
          dywfEmailContent
          dywfEmailName
          dywfEmailAddress
          dywfSubmitContent
          dywfSeeYourFlavorProfile
          dywfRedo
      }
  }

    quizMessage:rangeCollection (limit:1 where:{pageName:"range"},locale: $language ) {
      items {
        dywfMessageTitleSuccess
        dywfMessageSuccess
        dywfMessageTitleFail
        dywfMessageFail
        dywfMessageBtnContent
      }
    }

    
}
`;

const productFamilyQuery = `
query($language:String!) {
    productFamily:rangeCollection (limit:1 where:{pageName:"range"},locale: $language) {
        items {
            productFamilyComponentProductsCollection(limit:10, order:id_ASC,locale: $language) {
                items {
                    id
                    active
                    num
                    tag
                    productName
                    age
                    unit
                    description
                    price 
                    quizResultProductImage{
                        imagepc {
                            url
                        }
                        imagemobile {
                            url
                        }
                        altText
                      }
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
                 
                }
            }
        }
    }
  }
`;

class RangeDao {
  static async fetch<PageModel>(params:paramsContent) {
    const variables = { language: params?.locale || process.env.LOCATION };
    const response = await fetch(BASE_URL, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });
    const result = await response.json();




    const quiz1 = await fetch(BASE_URL, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: quizQueryOne, variables  }),
    });
    const quiz1Result = await quiz1.json();

    const quiz2 = await fetch(BASE_URL, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: quizQueryTwo, variables  }),
    });
    const quiz2Result = await quiz2.json();

    const quiz3 = await fetch(BASE_URL, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: quizQueryThree, variables  }),
    });
    const quiz3Result = await quiz3.json();

    const quiz4 = await fetch(BASE_URL, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: quizQueryFour, variables  }),
    });
    const quiz4Result = await quiz4.json();

    const quiz5 = await fetch(BASE_URL, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: quizQueryFive, variables  }),
    });
    const quiz5Result = await quiz5.json();





    const quizResponse = await fetch(BASE_URL, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: quizQuery, variables  }),
    });

    const quizRes = await quizResponse.json();

    let quizResult = {
      data:{
        dataQuizQ1Collection:{
          ...quiz1Result.data.dataQuizQ1Collection
        },
        dataQuizQ2Collection:{
          ...quiz2Result.data.dataQuizQ2Collection
        },
        dataQuizQ3Collection:{
          ...quiz3Result.data.dataQuizQ3Collection
        },
        dataQuizQ4Collection:{
          ...quiz4Result.data.dataQuizQ4Collection
        },
        dataQuizQ5Collection:{
          ...quiz5Result.data.dataQuizQ5Collection
        },
        rangeCollection:{
          ...quizRes.data.rangeCollection
        },
        quizMessage:{
          ...quizRes.data.quizMessage
        },


      }
    };



    const productFamilyResponse = await fetch(BASE_URL, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: productFamilyQuery, variables  }),
    });
    const productFamilyResult = await productFamilyResponse.json();

    return {
      seo:{
        ...PageModel.query("seo", result)
      },
      page:[
        {
          type: "fullPage",
          name: "fullPage",
          rangeNav: true,
          rangeNavData: PageModel.query("rangeNav", result),
          entry: {
            children: [
              {
                type: "productFamilyComponent",
                name: "productFamilyComponent",
                entry: {
                  headStyle: "white",
                  hasNavigation: false,
                  ...PageModel.query("productFamily", result),
                },
              },
              {
                type: "talesFromTheWildComponent",
                name: "talesFromTheWildComponent",
                entry: {
                  headStyle: "black",
                  hasNavigation: true,
                  isFullPage: true,
                  ...PageModel.query("talesFromTheWild", result),
                },
              },
              {
                type: "servingSuggestionComponent",
                name: "servingSuggestionComponent",
                entry: {
                  headStyle: "black",
                  hasNavigation: true,
                  ...PageModel.query("servingSuggestion", result),
                },
              },
              {
                type: "bottleConceptComponent",
                name: "bottleConceptComponent",
                entry: {
                  headStyle: "white",
                  hasNavigation: true,
                  ...PageModel.query("bottleConcept", result),
                },
              },
              {
                type: "flavourFinderComponent",
                name: "flavourFinderComponent",
                entry: {
                  headStyle: "white",
                  ...quizResult,
                  ...PageModel.query("flavourFinder", result),
                  ...PageModel.query("productFamily", productFamilyResult),
                },
              },
            ],
          },
        },
      ]
    };
  }
}

export default RangeDao;

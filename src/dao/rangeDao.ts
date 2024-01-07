import PageModel from "../model/pageModel";

// const BASE_URL = "https://graphql.contentful.com/content/v1/spaces/zedtwknbsk02/environments/staging?access_token=DO_VJeQwGw6xpl4gkcC5xey6o0Yx8zCfOdS6JbJqFss";

const BASE_URL = "https://uat-lamerqixi.workbyus.cn/px.php";
  

const query = `
  query {
    productFamily:homeCollection (limit:1 where:{pageName:"home"} ) {
      items {
          productFamilyComponentProductsCollection(limit: 10, order:id_ASC) {
              items {
                id
                active
                num
                productName
                age
                tag
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
  }
`;

const quizQuery = `
query {

  productFamilyCollection(limit: 10, order:id_ASC) {
      items {
          id
          productCode
          productName
          quizResultProductImage {
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

  dataQuizQ1Collection {
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

  dataQuizQ2Collection {
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

  dataQuizQ3Collection {
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

  dataQuizQ4Collection {
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

  dataQuizQ5Collection {
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


  rangeCollection (limit:1 where:{pageName:"range"} ) {
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

  
}
`;

class RangeDao {
  static async fetch<PageModel>() {
    const response = await fetch(BASE_URL, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const result = await response.json();

    const quizResponse = await fetch(BASE_URL, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: quizQuery }),
    });
    const quizResult = await quizResponse.json();

    return [
      {
        type: "fullPage",
        name: "fullPage",
        rangeNav: true,
        entry: {
          children: [
            {
              type: "productFamilyComponent",
              name: "productFamilyComponent",
              entry: {
                headStyle: "white",
                ...PageModel.query("productFamily", result),
              },
            },
            {
              type: "talesFromTheWildComponent",
              name: "talesFromTheWildComponent",
              entry: {
                headStyle: "black",
                hasNavigation: true,
                kols: [
                  {
                    id: "10086",
                    name: "NAME of KOL",
                    avatar: `https://yumen-ali.oss-cn-beijing.aliyuncs.com/wild_face.png?w=1000&h=1000`,
                    banner: `https://yumen-ali.oss-cn-beijing.aliyuncs.com/wild_01.png?w=1000&h=1000`,
                    description: "Bring the drinking occasion to life in a way",
                  },
                  {
                    id: "10087",
                    name: "NAME of KOL",
                    avatar: `https://yumen-ali.oss-cn-beijing.aliyuncs.com/wild_face.png?w=1000&h=1000`,
                    banner: `https://yumen-ali.oss-cn-beijing.aliyuncs.com/wild_02.png?w=1000&h=1000`,
                    description: "Bring the drinking occasion to life in a way",
                  },
                  {
                    id: "10088",
                    name: "NAME of KOL",
                    avatar: `https://yumen-ali.oss-cn-beijing.aliyuncs.com/wild_face.png?w=1000&h=1000`,
                    banner: `https://yumen-ali.oss-cn-beijing.aliyuncs.com/wild_03.png?w=1000&h=1000`,
                    description: "Bring the drinking occasion to life in a way",
                  },
                  {
                    id: "10089",
                    name: "NAME of KOL",
                    avatar: `https://yumen-ali.oss-cn-beijing.aliyuncs.com/wild_face.png?w=1000&h=1000`,
                    banner: `https://yumen-ali.oss-cn-beijing.aliyuncs.com/wild_04.png?w=1000&h=1000`,
                    description: "Bring the drinking occasion to life in a way",
                  },
                  {
                    id: "10090",
                    name: "NAME of KOL",
                    avatar: `https://yumen-ali.oss-cn-beijing.aliyuncs.com/wild_face.png?w=1000&h=1000`,
                    banner: `https://yumen-ali.oss-cn-beijing.aliyuncs.com/wild_05.png?w=1000&h=1000`,
                    description: "Bring the drinking occasion to life in a way",
                  },
                ],
              },
            },
            {
              type: "servingSuggestionComponent",
              name: "servingSuggestionComponent",
              entry: {
                headStyle: "black",
              },
            },
            {
              type: "bottleConceptComponent",
              name: "bottleConceptComponent",
              entry: {
                headStyle: "white",
              },
            },
            {
              type: "flavourFinderComponent",
              name: "flavourFinderComponent",
              entry: {
                headStyle: "black",
                ...quizResult
              },
            },
          ],
        },
      },
    ];
  }
}

export default RangeDao;

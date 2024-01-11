import PageModel from "../model/pageModel";

// const GRAPHQL_URL = 'https://graphql.contentful.com/content/v1/spaces/zedtwknbsk02/environments/staging?access_token=DO_VJeQwGw6xpl4gkcC5xey6o0Yx8zCfOdS6JbJqFss';
const GRAPHQL_URL = "https://uat-lamerqixi.workbyus.cn/px.php";

const query = `
query($sysId:String!) {
    localMarketActivityDetailCollection (limit:1 where:{sys:{id:$sysId}},locale: "en") {
        items {
            sys {
                id
            }
            sectionName
            activityDetailComponentTitle
  
            pageDetailCollection(locale: "en") {              
                items {
                    ... on DataLocalMarketDetailCarouselImage {
                        imagesCollection (limit : 10,locale: "en") {
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
    static async fetch<PageModel>(id: string) {
        const variables = { sysId: id };
    
        const response = await fetch(GRAPHQL_URL, {
          method: "POST",
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query, variables }),
        });
        const result = await response.json();
        console.log(result)
        return [

            {
                type: "activityDetailComponent",
                name: "activityDetailComponent",
                entry: {
                    headStyle:'bg-white',
                    ...PageModel.query("localMarketActivityDetailCollection", result),
                },
            },
        ];
    }
}

export default ActivityDetailDao;

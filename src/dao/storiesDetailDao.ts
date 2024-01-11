import PageModel from "../model/pageModel";

// const GRAPHQL_URL = 'https://graphql.contentful.com/content/v1/spaces/zedtwknbsk02/environments/staging?access_token=DO_VJeQwGw6xpl4gkcC5xey6o0Yx8zCfOdS6JbJqFss';
const GRAPHQL_URL = "https://uat-lamerqixi.workbyus.cn/px.php";

const query = `
query {
    storiesDetailCollection (limit:1 where:{pageName:"Bring the drinking occasion to life in a way"} locale: "en") {
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
  
            storiesDetailComponentDetailCollection(locale: "en") {              
                items {
                    ... on DataKolDetailCarouselImage {
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
  
                    ... on DataKolDetailOneImageContent1 {
                        contentTitle
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
                    }
  
                    __typename
                }
            }
            
            
  
        }
    }
  
  }
`;

class StoriesDetailDao {
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
    
        console.log(result);
        
        return [

            {
                type: "storiesDetailComponent",
                name: "storiesDetailComponent",
                entry: {
                    headStyle:'bg-white',
                    ...result
                },
            },
        ];
    }
}

export default StoriesDetailDao;

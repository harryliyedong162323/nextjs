import LocalMarketActivityModel from "../model/localMarketActivityModel";


// const GRAPHQL_URL = 'https://graphql.contentful.com/content/v1/spaces/zedtwknbsk02/environments/staging?access_token=DO_VJeQwGw6xpl4gkcC5xey6o0Yx8zCfOdS6JbJqFss';
const GRAPHQL_URL = "https://uat-lamerqixi.workbyus.cn/px.php";
//

const query = `

    query {

    globalCampaigns:localMarketActivityCollection (limit:1 where:{internalName:"local market activity"},locale:"en" ) {
      items {
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

  introduceCampaign: localMarketActivityCollection(limit: 1, where: {internalName: "local market activity"},locale: "en") {
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
      introduceCampaignComponentCampaignsCollection(limit: 10,order:id_DESC,locale: "en") {
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
        }
      }
    }
  }

   interactiveVideo: localMarketActivityCollection(limit: 1, where: {internalName: "local market activity"},locale: "en") {
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

   talesFromTheWild:localMarketActivityCollection (limit:1 where:{internalName:"local market activity"} locale: "en") {
      items {
          talesFromTheWildListCollection (order:id_ASC, locale: "en") {
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
            }
          }
      }
  }

  
}





`


class LocalMarketActivityDao {
    static async fetch<LocalMarketActivityModel>() {
        const response = await fetch(GRAPHQL_URL, {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
        });
        const result = await response.json();
        return [

            {
                type: "fullPage",
                name: "fullPage",
                entry: {
                    children:[
                        {
                            type: "globalCampaignsComponent",
                            name: "globalCampaignsComponent",
                            entry: {
                                headStyle:'white',

                                ...LocalMarketActivityModel.query("globalCampaigns", result),
                            },
                        },
                        {
                            type: "introduceCampaignComponent",
                            name: "introduceCampaignComponent",
                            entry: {
                                headStyle:'black',

                                ...LocalMarketActivityModel.query("introduceCampaign", result),
                            },
                        },
                        {
                            type: "interactiveVideoComponent",
                            name: "interactiveVideoComponent",
                            entry: {
                                headStyle:'white',

                                ...LocalMarketActivityModel.query("interactiveVideo", result),
                            },
                        },
                        {
                            type: "talesFromTheWildComponent",
                            name: "talesFromTheWildComponent",
                            entry: {
                                headStyle:'black',
                                hasNavigation: true,
                                isFullPage: true,
                                ...LocalMarketActivityModel.query("talesFromTheWild", result),
                            },
                        },
                    ]
                }
            },


        ];
    }
}

export default LocalMarketActivityDao;

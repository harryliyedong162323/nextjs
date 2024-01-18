import FooterModel from "../model/footerModel";
import HomeModel from "../model/homeModel";

// const GRAPHQL_URL = 'https://graphql.contentful.com/content/v1/spaces/zedtwknbsk02/environments/staging?access_token=DO_VJeQwGw6xpl4gkcC5xey6o0Yx8zCfOdS6JbJqFss';
const GRAPHQL_URL = "https://uat-lamerqixi.workbyus.cn/px.php";
//
// const path = '/' + params.locale + '/' + params.slug.join('/')
// console.log(path)
//
// const response = await fetch(HOME_URL + '?path=' + path, { next: { tags: [path] }})

// fetch sharing menu
// fetch sharing footer
// fetch sharing popups

const query = `

query getFooter {
    footerMenuCollection(limit:1,locale: "en") {
        items {
            logo {
                imagepc {
                    url
                }
                imagemobile {
                    url
                }
                altText
            }
            joinUsPromptWord

            joinUsImagesCollection(locale: "en") {
                items {
                  ... on DataFooterJoinUs {
                    targetPage
                    channelName
                    iconImage {
                        imagepc {
                            url
                        }
                        imagemobile {
                            url
                        }
                        altText
                    }
                    qrCodeImage {
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
           
            group1TitleId
            group1Title
            group1TitleTargetPage
            group1ItemsCollection (limit:6,locale: "en") {
                items {
                    sys {
                        id
                    }
                    content
                    targetPage
                }
            }
            group2TitleId
            group2Title
            group2TitleTargetPage
            group2ItemsCollection (limit:6,locale: "en") {
                items {
                    sys {
                        id
                    }
                    content
                    targetPage
                }
            }
            group3TitleId
            group3Title
            group3TitleTargetPage
            group3ItemsCollection (limit:6,locale: "en") {
                items {
                    sys {
                        id
                    }
                    content
                    targetPage
                }
            }
            group4TitleId
            group4Title
            group4TitleTargetPage
            group4ItemsCollection (limit:6,locale: "en") {
                items {
                    sys {
                        id
                    }
                    content
                    targetPage
                }
            }

            privacyPolicyCta {
                content
                targetPage
            }

            termsOfServiceCta {
                content
                targetPage
            }

            copyRightCta {
                content
                targetPage
            }

            regionSwitchingPromptWords

            locationAndLanguageCollection(locale: "en") {
                items {
                    ... on DataNavLocationAndLanguage {
                        region
                        language
                        targetUrl
                        path
                    }
                }
            }
            
        }
    }
}


`;

class FooterDao {
  static async fetch<FooterModel>() {
    const response = await fetch(GRAPHQL_URL, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const result = await response.json();

    // return FooterModel.fromJson(result);
    // return result;
    // if(response.code == 200){
    //     return HomeModel.fromJson(result);
    // }else{
    //     throw Error('Failed to load home_page data');
    // }

    return {
      ...FooterModel.query("footerMenuCollection", result),
    };
  }
}

export default FooterDao;

import FooterModel from "../model/footerModel";
import HomeModel from "../model/homeModel";
import {paramsContent} from "@/app/[locale]/[...slug]/page";
import { headers } from 'next/headers';

// const GRAPHQL_URL = 'https://graphql.contentful.com/content/v1/spaces/zedtwknbsk02/environments/staging?access_token=DO_VJeQwGw6xpl4gkcC5xey6o0Yx8zCfOdS6JbJqFss';
//const GRAPHQL_URL = "https://uat-lamerqixi.workbyus.cn/px.php";

//
// const path = '/' + params.locale + '/' + params.slug.join('/')
// console.log(path)
//
// const response = await fetch(HOME_URL + '?path=' + path, { next: { tags: [path] }})

// fetch sharing menu
// fetch sharing footer
// fetch sharing popups

const query = `

query getFooter($language:String!) {
    footerMenuCollection(limit:1,locale: $language) {
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

            joinUsImagesCollection(locale: $language) {
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
            group1ItemsCollection (limit:6,locale: $language) {
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
            group2ItemsCollection (limit:6,locale: $language) {
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
            group3ItemsCollection (limit:6,locale: $language) {
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
            group4ItemsCollection (limit:6,locale: $language) {
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

            locationAndLanguageCollection(locale: $language) {
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
  static async fetch<FooterModel>(params:paramsContent) {
    const headersList = headers();
    let url :string
    if (process.env.NODE_ENV === 'development') {
      // 在开发模式下执行的代码
      url = `http://${headersList.get('host')}/data/${params?.locale}/footerDao.json`;
    } else {
      // 在生产模式下执行的代码
      url = `${process.env.DOMAIN}data/${params?.locale}/footerDao.json`;
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

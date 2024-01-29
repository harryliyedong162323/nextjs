import HeaderModel from "../model/headerModel";

import {paramsContent} from "@/app/[locale]/[...slug]/page";
import { headers } from 'next/headers';

// const GRAPHQL_URL = 'https://graphql.contentful.com/content/v1/spaces/zedtwknbsk02/environments/staging?access_token=DO_VJeQwGw6xpl4gkcC5xey6o0Yx8zCfOdS6JbJqFss';
//const GRAPHQL_URL = "https://uat-lamerqixi.workbyus.cn/px.php";
//const GRAPHQL_URL = "http://localhost:3000/data/en/headerDao.json?v=0129";


//
// const path = '/' + params.locale + '/' + params.slug.join('/')
// console.log(path)
//
// const response = await fetch(HOME_URL + '?path=' + path, { next: { tags: [path] }})

// fetch sharing menu
// fetch sharing footer
// fetch sharing popups

const query = `

query getHeader($language:String!) {
    headerMenuCollection(limit:1,locale: $language) {
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
           

            group1TitleId
            group1Title
            group1TargetPage
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
            group2TargetPage
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
            group3TargetPage
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
            group4TargetPage
            group4ItemsCollection (limit:6,locale: $language) {
                items {
                    sys {
                        id
                    }
                    content
                    targetPage
                }
            }

            group5TitleId
            group5Title
            group5TargetPage
            group5ItemsCollection (limit:6,locale: $language) {
                items {
                    sys {
                        id
                    }
                    content
                    targetPage
                }
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
    static async fetch<HeaderModel>(params:paramsContent) {
        const headersList = headers();
        let url :string
        //console.log(params);
        //
        if (process.env.NODE_ENV === 'development') {
            // 在开发模式下执行的代码
            url = `http://${headersList.get('host')}/data/${params?.locale}/headerDao.json?v=0129`;
        } else {
            // 在生产模式下执行的代码
           url = `${process.env.DOMAIN}data/${params?.locale}/headerDao.json?v=0129`;
        }

        console.log(url)

        const variables = { language: params?.locale || process.env.LOCATION };
        const response = await fetch(url, {
            // method: "POST",
            // cache: "no-store",
            // headers: {
            //     "Content-Type": "application/json",
            // },
            // body: JSON.stringify({ query, variables }),
        });

        const result = await response.json();

        console.log(11111)
        console.log(result)

        // return HeaderModel.fromJson(result);
        // return result;
        // if(response.code == 200){
        //     return HeaderModel.fromJson(result);
        // }else{
        //     throw Error('Failed to load home_page data');
        // }

        return {
            ...HeaderModel.query("headerMenuCollection", result),
        }
    }
}

export default FooterDao;

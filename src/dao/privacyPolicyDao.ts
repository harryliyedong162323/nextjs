import PrivacyPolicyModel from "../model/privacyPolicyModel";
import {paramsContent} from "@/app/[locale]/[...slug]/page";
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

     query($language:String!) {
    
    seo:seoMetaTagsCollection(limit: 1, where: {name: "Privacy Policy"},locale: $language) {
      items {
          title
          keyWords
          description
      }
    }
    
    
  privacypolicy:pagePrivacyPolicyCollection (limit:1 where:{internalName:"Privacy Policy"} locale: $language) {
      items {
        detailCollection {
            items {
                ... on DataPrivacyPolicy {
                      title
                      content {
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
                
            }
        }
      }
  }


}


`;

class privacyPolicyDao {
  static async fetch<PrivacyPolicyModel>(params: paramsContent) {
    const variables = { sysId: params?.slug[1],language: params?.locale || process.env.LOCATION };

    const response = await fetch(GRAPHQL_URL, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query,variables }),
    });
    const result = await response.json();

    return {
      seo:{
        ...PrivacyPolicyModel.query("seo", result),
      },
      page:[
        {
          type: "privacyPolicyComponent",
          name: "privacyPolicyComponent",
          entry: {
            headStyle: "bg-white",

            ...PrivacyPolicyModel.query("privacypolicy", result),
          },
        },
      ]
    };
  }
}

export default privacyPolicyDao;

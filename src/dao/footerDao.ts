import FooterModel from "../model/footerModel";

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

        // return HomeModel.fromJson(result);
        // return result;
        // if(response.code == 200){
        //     return HomeModel.fromJson(result);
        // }else{
        //     throw Error('Failed to load home_page data');
        // }

        return [
            {
                type: "fullPage",
                name: "fullPage",
                entry: {
                    children: [
                        {
                            type: "KVAnimationComponent",
                            name: "KVAnimationComponent",
                            entry: {
                                headStyle: "large", //large white black bg-white none

                                ...HomeModel.query("KVAnimation", result),
                            },
                        },
                        {
                            type: "productFamilyComponent",
                            name: "productFamilyComponent",
                            entry: {
                                headStyle: "white",

                                ...HomeModel.query("productFamily", result),
                            },
                        },
                        {
                            type: "interactiveVideoComponent",
                            name: "interactiveVideoComponent",
                            entry: {
                                headStyle: "white",

                                ...HomeModel.query("interactiveVideo", result),
                            },
                        },
                        {
                            type: "introduceCampaignComponent",
                            name: "introduceCampaignComponent",
                            entry: {
                                headStyle: "black",

                                ...HomeModel.query("introduceCampaign", result),
                            },
                        },
                        {
                            type: "nearYouComponent",
                            name: "nearYouComponent",
                            entry: {
                                headStyle: "black",

                                ...HomeModel.query("nearYou", result),
                            },
                        },

                        {
                            type: "VIPClubComponent",
                            name: "VIPClubComponent",
                            entry: {
                                headStyle: "white",

                                ...HomeModel.query("VIPClub", result),
                            },
                        },
                    ],
                },
            },
        ];
    }
}

export default HomeDao;

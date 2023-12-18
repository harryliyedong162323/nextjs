
import HomeModel from '../model/homeModel';

const HOME_URL = 'https://cdn.contentful.com/spaces/zedtwknbsk02/entries?content_type=landingPage&fields.slug=test1&locale=en-US&include=4&access_token=5mGkIgazQQqwe9NykxKqitB0zopjFOvVHotuSM8GZvg';

//
// const path = '/' + params.locale + '/' + params.slug.join('/')
// console.log(path)
//
// const response = await fetch(HOME_URL + '?path=' + path, { next: { tags: [path] }})

// fetch sharing menu
// fetch sharing footer
// fetch sharing popups


class HomeDao{
    static async fetch<HomeModel>(){
        // const response = await fetch(HOME_URL)
        // const result = await response.json()
        //
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
                    children:[
                        {
                            type: "KVAnimationComponent",
                            name: "KVAnimationComponent",
                            entry: {
                                headStyle:'large',   //large white black none
                            },
                        },
                        {
                            type: "productFamilyComponent",
                            name: "productFamilyComponent",
                            entry: {
                                headStyle:'white',
                            },
                        },
                        {
                            type: "interactiveVideoComponent",
                            name: "interactiveVideoComponent",
                            entry: {
                                headStyle:'white',
                            },
                        },
                        {
                            type: "introduceCampaignComponent",
                            name: "introduceCampaignComponent",
                            entry: {
                                headStyle:'black',
                            },
                        },
                        {
                            type: "nearYouComponent",
                            name: "nearYouComponent",
                            entry: {
                                headStyle:'black',
                            },
                        },

                        {
                            type: "VIPClubComponent",
                            name: "VIPClubComponent",
                            entry: {
                                headStyle:'white',
                            },
                        },
                    ]
                },
            },

        ];

    }
}


export default HomeDao;

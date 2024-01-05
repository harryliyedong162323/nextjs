
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
                                headStyle:'large',   //large white black bg-white none
                            },
                        },
                        {
                            type: "productFamilyComponent",
                            name: "productFamilyComponent",
                            entry: {
                                headStyle:'white',


                                bottleData:[



                                    {
                                        id:0,
                                        num:30,
                                        active:true,
                                        info:{
                                            name:'TROPICAL\nCOAST',
                                            bottle:{
                                                pImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/bottle-5.png",
                                                mImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/bottle-5.png",
                                            },
                                            bg:{
                                                pImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/kv-6.png",
                                                mImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/kv-6.png",
                                            },
                                            year:30,
                                            price:'£350 RRP ',
                                            tag:'TRAVEL RETAIL EXCLUSIVE',
                                            des:'A whisky of deep fruit and zesty spice with a smooth finish, inspired by the white sandy beaches of Scotland’s northwestern islands.'
                                        }
                                    },

                                    {
                                        id:1,
                                        num:30,
                                        active:false,
                                        info:{
                                            name:'RUGGED COAST',
                                            bottle:{
                                                pImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/bottle-4.png",
                                                mImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/bottle-4.png",
                                            },
                                            bg:{
                                                pImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/kv-3.png",
                                                mImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/kv-3.png",
                                            },
                                            year:30,
                                            price:'£350 RRP',
                                            tag:'',
                                            des:'Experience waves of bonfire smoke, sea salt and vanilla sweetness, balanced with sherry spice. A whisky inspired by Scotland’s rugged coastlines.'
                                        }
                                    },



                                    {
                                        id:2,
                                        num:23,
                                        active:false,
                                        info:{
                                            name:'WAKING FOREST',
                                            bottle:{
                                                pImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/bottle-6.png",
                                                mImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/bottle-6.png",
                                            },
                                            bg:{
                                                pImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/kv-5.png",
                                                mImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/kv-5.png",
                                            },
                                            year:23,
                                            price:'£75 RRP ',
                                            tag:'',
                                            des:'A vibrant combination of deep vanilla oak and subtle sherry spice, inspired by Scotland’s vast ancient woodlands.'
                                        }
                                    },
                                    {
                                        id:3,
                                        num:40,
                                        active:false,
                                        info:{
                                            name:'black mountain',
                                            bottle:{
                                                pImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/bottle-2.png",
                                                mImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/bottle-2.png",
                                            },
                                            bg:{
                                                pImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/kv-4.png",
                                                mImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/kv-4.png",
                                            },
                                            year:40,
                                            price:'£750 RRP',
                                            tag:'',
                                            des:'A towering peak of flavour, where vanilla and caramel notes meet an indulgent sherry richness. The pinnacle of the Wildmoor range.'
                                        }
                                    },


                                    {
                                        id:4,
                                        num:23,
                                        active:false,
                                        info:{
                                            name:'ANCIENT MOORLAND',
                                            bottle:{
                                                pImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/bottle-1.png",
                                                mImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/bottle-1.png",
                                            },
                                            bg:{
                                                pImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/kv.png",
                                                mImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/kv.png",
                                            },
                                            year:23,
                                            price:'£175 RRP',
                                            tag:'',
                                            des:'An epic landscape of rich oak, deep vanilla, mellow sherry spice and sweetness, inspired by Scotland’s heather-covered moorlands in full bloom.'
                                        }
                                    },





                                    {
                                        id:5,
                                        num:23,
                                        active:false,
                                        info:{
                                            name:'dark\nmoorland',
                                            bottle:{
                                                pImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/bottle-3.png",
                                                mImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/bottle-3.png",
                                            },
                                            bg:{
                                                pImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/kv-2.png",
                                                mImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/kv-2.png",
                                            },
                                            year:23,
                                            price:'£175 RRP',
                                            tag:'TRAVEL RETAIL  EXCLUSIVE',
                                            des:'A vibrant combination of deep vanilla oak and subtle sherry spice, inspired by Scotland’s vast ancient woodlands.'
                                        }
                                    },

                                ]

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

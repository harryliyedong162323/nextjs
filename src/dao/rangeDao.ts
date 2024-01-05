import RangeModel from "../model/rangeModel";

const HOME_URL =
  "https://cdn.contentful.com/spaces/zedtwknbsk02/entries?content_type=landingPage&fields.slug=test1&locale=en-US&include=4&access_token=5mGkIgazQQqwe9NykxKqitB0zopjFOvVHotuSM8GZvg";

class RangeDao {
  static async fetch<RangeModel>() {
    // const response = await fetch(HOME_URL)
    // const result = await response.json()
    // return HomeModel.fromJson(result);
    return [

      {
        type: "fullPage",
        name: "fullPage",
        rangeNav: true,
        entry: {
          children:[
            {
              type: "productFamilyComponent",
              name: "productFamilyComponent",
              entry: {
                headStyle:'white',

                bottleData:[
                  {
                    id:0,
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
                      price:'£750 RRP ',
                      des:'An epic landscape of rich oak, deep vanilla, mellow sherry spice and sweetness, inspired by Scotland’s heather-covered moorlands in full bloom.'
                    }
                  },
                  {
                    id:1,
                    num:40,
                    active:false,
                    info:{
                      name:'ANCIENT MOORLAND',
                      bottle:{
                        pImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/bottle-2.png",
                        mImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/bottle-2.png",
                      },
                      bg:{
                        pImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/kv-2.png",
                        mImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/kv-2.png",
                      },
                      year:40,
                      price:'£750 RRP ',
                      des:'An epic landscape of rich oak, deep vanilla, mellow sherry spice and sweetness, inspired by Scotland’s heather-covered moorlands in full bloom.'
                    }
                  },
                  {
                    id:2,
                    num:23,
                    active:false,
                    info:{
                      name:'ANCIENT MOORLAND',
                      bottle:{
                        pImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/bottle-3.png",
                        mImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/bottle-3.png",
                      },
                      bg:{
                        pImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/kv-3.png",
                        mImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/kv-3.png",
                      },
                      year:23,
                      price:'£750 RRP ',
                      des:'An epic landscape of rich oak, deep vanilla, mellow sherry spice and sweetness, inspired by Scotland’s heather-covered moorlands in full bloom.'
                    }
                  },
                  {
                    id:3,
                    num:30,
                    active:false,
                    info:{
                      name:'ANCIENT MOORLAND',
                      bottle:{
                        pImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/bottle-4.png",
                        mImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/bottle-4.png",
                      },
                      bg:{
                        pImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/kv-4.png",
                        mImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/kv-4.png",
                      },
                      year:30,
                      price:'£750 RRP ',
                      des:'An epic landscape of rich oak, deep vanilla, mellow sherry spice and sweetness, inspired by Scotland’s heather-covered moorlands in full bloom.'
                    }
                  },
                  {
                    id:4,
                    num:30,
                    active:false,
                    info:{
                      name:'ANCIENT MOORLAND',
                      bottle:{
                        pImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/bottle-5.png",
                        mImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/bottle-5.png",
                      },
                      bg:{
                        pImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/kv-5.png",
                        mImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/kv-5.png",
                      },
                      year:30,
                      price:'£750 RRP ',
                      des:'An epic landscape of rich oak, deep vanilla, mellow sherry spice and sweetness, inspired by Scotland’s heather-covered moorlands in full bloom.'
                    }
                  },
                  {
                    id:5,
                    num:23,
                    active:true,
                    info:{
                      name:'ANCIENT MOORLAND',
                      bottle:{
                        pImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/bottle-6.png",
                        mImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/bottle-6.png",
                      },
                      bg:{
                        pImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/kv-6.png",
                        mImg:"https://miracle-1300295615.cos.ap-shanghai.myqcloud.com/widmoor/productFamily/kv-6.png",
                      },
                      year:23,
                      price:'£750 RRP ',
                      des:'An epic landscape of rich oak, deep vanilla, mellow sherry spice and sweetness, inspired by Scotland’s heather-covered moorlands in full bloom.'
                    }
                  },
                ]


              },
            },
            {
              type: "talesFromTheWildComponent",
              name: "talesFromTheWildComponent",
              entry: {
                headStyle:'black',
                hasNavigation: true,
                kols: [
                  {
                    id: "10086",
                    name: "NAME of KOL",
                    avatar: `https://yumen-ali.oss-cn-beijing.aliyuncs.com/wild_face.png?w=1000&h=1000`,
                    banner:  `https://yumen-ali.oss-cn-beijing.aliyuncs.com/wild_01.png?w=1000&h=1000`,
                    description: "Bring the drinking occasion to life in a way",
                  },
                  {
                    id: "10087",
                    name: "NAME of KOL",
                    avatar: `https://yumen-ali.oss-cn-beijing.aliyuncs.com/wild_face.png?w=1000&h=1000`,
                    banner: `https://yumen-ali.oss-cn-beijing.aliyuncs.com/wild_02.png?w=1000&h=1000`,
                    description: "Bring the drinking occasion to life in a way",
                  },
                  {
                    id: "10088",
                    name: "NAME of KOL",
                    avatar: `https://yumen-ali.oss-cn-beijing.aliyuncs.com/wild_face.png?w=1000&h=1000`,
                    banner: `https://yumen-ali.oss-cn-beijing.aliyuncs.com/wild_03.png?w=1000&h=1000`,
                    description: "Bring the drinking occasion to life in a way",
                  },
                  {
                    id: "10089",
                    name: "NAME of KOL",
                    avatar: `https://yumen-ali.oss-cn-beijing.aliyuncs.com/wild_face.png?w=1000&h=1000`,
                    banner: `https://yumen-ali.oss-cn-beijing.aliyuncs.com/wild_04.png?w=1000&h=1000`,
                    description: "Bring the drinking occasion to life in a way",
                  },
                  {
                    id: "10090",
                    name: "NAME of KOL",
                    avatar: `https://yumen-ali.oss-cn-beijing.aliyuncs.com/wild_face.png?w=1000&h=1000`,
                    banner: `https://yumen-ali.oss-cn-beijing.aliyuncs.com/wild_05.png?w=1000&h=1000`,
                    description: "Bring the drinking occasion to life in a way",
                  },
                ],
              },
            },
            {
              type: "servingSuggestionComponent",
              name: "servingSuggestionComponent",
              entry: {
                headStyle:'black',
              },
            },
            {
              type: "bottleConceptComponent",
              name: "bottleConceptComponent",
              entry: {
                headStyle:'white',
              },
            },
            {
              type: "flavourFinderComponent",
              name: "flavourFinderComponent",
              entry: {
                headStyle:'black',
              },
            },
          ]
        }
      },


    ];
  }
}

export default RangeDao;

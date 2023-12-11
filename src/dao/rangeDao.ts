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
        type: "productFamilyComponent",
        name: "productFamilyComponent",
        entry: {},
      },
      {
        type: "talesFromTheWildComponent",
        name: "talesFromTheWildComponent",
        entry: {
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
        entry: {},
      },
      {
        type: "bottleConceptComponent",
        name: "bottleConceptComponent",
        entry: {},
      },
      {
        type: "flavourFinderComponent",
        name: "flavourFinderComponent",
        entry: {},
      },
    ];
  }
}

export default RangeDao;

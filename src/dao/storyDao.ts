import PageModel from "../model/pageModel";

const HOME_URL =
  "https://cdn.contentful.com/spaces/zedtwknbsk02/entries?content_type=landingPage&fields.slug=test1&locale=en-US&include=4&access_token=5mGkIgazQQqwe9NykxKqitB0zopjFOvVHotuSM8GZvg";

class StoryDao {
  static async fetch<PageModel>() {
    // const response = await fetch(HOME_URL)
    // const result = await response.json()
    // return HomeModel.fromJson(result);
    return [

      {
        type: "fullPage",
        name: "fullPage",
        entry: {
          children:[
            {
              type: "storyOpeningComponent",
              name: "storyOpeningComponent",
              entry: {},
            },
            {
              type: "storyChapterOneComponent",
              name: "storyChapterOneComponent",
              entry: {},
            },
            {
              type: "storyChapterTwoComponent",
              name: "storyChapterTwoComponent",
              entry: {},
            },
            {
              type: "storyChapterThreeComponent",
              name: "storyChapterThreeComponent",
              entry: {},
            },
            {
              type: "storyChapterFourComponent",
              name: "storyChapterFourComponent",
              entry: {},
            },
            {
              type: "storyChapterFiveComponent",
              name: "storyChapterFiveComponent",
              entry: {},
            },
            {
              type: "storyChapterSixComponent",
              name: "storyChapterSixComponent",
              entry: {},
            },
            {
              type: "storyChapterEndComponent",
              name: "storyChapterEndComponent",
              entry: {},
            },
          ]
        }
        },


    ];
  }
}

export default StoryDao;

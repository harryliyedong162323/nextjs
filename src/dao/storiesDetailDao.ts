import StoryModel from "../model/storyModel";

const HOME_URL =
    "https://cdn.contentful.com/spaces/zedtwknbsk02/entries?content_type=landingPage&fields.slug=test1&locale=en-US&include=4&access_token=5mGkIgazQQqwe9NykxKqitB0zopjFOvVHotuSM8GZvg";

class StoriesDetailDao {
    static async fetch<StoryModel>() {
        // const response = await fetch(HOME_URL)
        // const result = await response.json()
        // return HomeModel.fromJson(result);
        return [

            {
                type: "StoriesDetailComponent",
                name: "StoriesDetailComponent",
                entry: {},
            },
        ];
    }
}

export default StoriesDetailDao;

import PageModel from "../model/pageModel";

const HOME_URL =
    "https://cdn.contentful.com/spaces/zedtwknbsk02/entries?content_type=landingPage&fields.slug=test1&locale=en-US&include=4&access_token=5mGkIgazQQqwe9NykxKqitB0zopjFOvVHotuSM8GZvg";

class ActivityDetailDao {
    static async fetch<PageModel>() {
        // const response = await fetch(HOME_URL)
        // const result = await response.json()
        // return HomeModel.fromJson(result);
        return [

            {
                type: "activityDetailComponent",
                name: "activityDetailComponent",
                entry: {
                    headStyle:'bg-white',
                },
            },
        ];
    }
}

export default ActivityDetailDao;

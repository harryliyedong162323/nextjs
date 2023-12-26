import RangeModel from "../model/rangeModel";

const HOME_URL =
    "https://cdn.contentful.com/spaces/zedtwknbsk02/entries?content_type=landingPage&fields.slug=test1&locale=en-US&include=4&access_token=5mGkIgazQQqwe9NykxKqitB0zopjFOvVHotuSM8GZvg";

class HowToBuyDao {
    static async fetch<RangeModel>() {
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
                            type: "locationInfoComponent",
                            name: "locationInfoComponent",
                            entry: {
                                headStyle:'black',
                            },
                        },
                        // {
                        //     type: "locationMapComponent",
                        //     name: "locationMapComponent",
                        //     entry: {
                        //         headStyle:'black',
                        //     },
                        // },
                        {
                            type: "IRLExperiencesComponent",
                            name: "IRLExperiencesComponent",
                            entry: {
                                headStyle:'none',
                            },
                        },
                        {
                            type: "digitalExperienceComponent",
                            name: "digitalExperienceComponent",
                            entry: {
                                headStyle:'none',
                            },
                        },
                    ]
                }
            },


        ];
    }
}

export default HowToBuyDao;

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


class errorDao{
    static async fetch<errorDao>(){
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
                type: "errorComponent",
                name: "errorComponent",
                entry: {},
            },

        ];

    }
}


export default errorDao;

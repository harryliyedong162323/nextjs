import CommonModel from './commonModel';


interface pageLayout {
    data:pageItem
}

interface pageItem {
    [key: string]: {
        items:Array<Object>
    };
}

class HowToBuyModel extends CommonModel{

    constructor() {
        super();
    }


    fromJson(json: pageLayout):object | undefined{
        const currentPage: pageItem = json.data;
        this.setPageContent(currentPage);

        return this.getPageContent();
    }



    query(name: string, json: pageLayout):object | undefined {
        const currentPage: pageItem = json.data;

        let targetComponent;
        for (let key in currentPage) {
            if (name === key) {
                targetComponent = currentPage[key].items[0];
                break;
            }
        }

        return targetComponent;
    }


    queryStores(json: pageLayout){
        const currentPage:pageItem = json.data;

        let targetComponent;
        for(let key in currentPage){
            if('stores' == key){
                targetComponent = currentPage[key].items
                break;
            }
        }

        return targetComponent;
    }


    queryIrlstores(json: pageLayout){
        const currentPage:pageItem = json.data;

        let targetComponent;
        for(let key in currentPage){
            if('irlstores' == key){
                targetComponent = currentPage[key].items
                break;
            }
        }

        return targetComponent;
    }


}


export default new HowToBuyModel();

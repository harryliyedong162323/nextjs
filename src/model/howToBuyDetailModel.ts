import CommonModel from './commonModel';


interface pageLayout {
    data:pageItem
}

interface pageItem {
    [key: string]: {
        items:Array<Object>
    };
}


class HowToBuyDetailModel extends CommonModel{

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




}


export default new HowToBuyDetailModel();

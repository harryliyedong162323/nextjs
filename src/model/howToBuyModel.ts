import CommonModel from './commonModel';


interface pageLayout {
    data:object
}


class HowToBuyModel extends CommonModel{

    constructor() {
        super();
    }


    fromJson<T extends string | any[]>(json: pageLayout){
        const currentPage = json.data;
        this.setPageContent(currentPage);

        return this.getPageContent();
    }



    query(name:string,json: pageLayout){
        const currentPage:any = json.data;

        let targetComponent;
        for(let key in currentPage){
            if(name == key){
                targetComponent = currentPage[key].items[0]
                break;
            }
        }

        return targetComponent;
    }

}


export default new HowToBuyModel();

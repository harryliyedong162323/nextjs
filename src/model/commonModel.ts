

interface pageItem {
    [key: string]: {
        items:Array<Object>
    };
}

class CommonModel{

    public pageContent:Object;

    constructor() {
        this.pageContent = {}

    }

    setPageContent(components:pageItem):void{

        let mapping:Array<object> = [];

        for(let key in components){

            const item = components[key].items[0];

            mapping.push({
                type:key+'Component',
                name:key+'Component',
                entry:item
            })
        }

        this.pageContent = mapping;



    }

    getPageContent():object | undefined{
        return this.pageContent;
    }


}


export default CommonModel

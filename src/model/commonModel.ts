
interface itemObj{
    items:Array<object>
}

class CommonModel{

    public pageContent:Object;

    constructor() {
        this.pageContent = {}

    }

    // setPageContent<T extends itemObj>(containers:T[],components:[]):void{
    //
    //     const mapping = containers.map((item,index:number)=>{
    //
    //
    //         let currentComponent = components.filter(list=>list['sys']['id'] ==item.sys.id)[0];
    //
    //         return  {
    //             type: currentComponent['sys']['contentType']['sys']['id'],
    //             name: currentComponent['sys']['contentType']['sys']['id'],
    //             entry:currentComponent,
    //             // publicComponents:components,
    //         }
    //     });
    //
    //     this.pageContent = mapping;
    //
    //
    //
    // }



    setPageContent(components:any):void{

        let mapping = [];

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





    replaceComponentById(containers:any,components:[]){

        for (let i=0;i<containers.length;i++){
            for(let j in containers[i].entry.fields){
                this.replaceComponentById(containers[i].entry.fields,components);
                if(containers[i].entry.fields[j].sys){
                    containers[i].entry.fields[j].sys = components.filter(list=>list['sys']['id'] == containers[i].entry.fields[j].sys.id)[0];
                }
            }

        }


    }

    getPageContent(){
        return this.pageContent;
    }


}


export default CommonModel

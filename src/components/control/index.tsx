import React,{Component} from "react";

import {isRelativePath} from "@/utils/common"

// import BaseImage from "../base/image";
// import BaseLink from "../base/link";
// import BaseVideo from "../base/video";
// import BaseButton from "../base/button"


interface MappingProps {
    data:Array<any>,
    componentContext:any,
   
}

interface ComponentMetadata {
    path: string;
    component: React.ComponentType;
}

interface State {
    componentMap:Object,
}

class MappingComponent extends Component<MappingProps,State>{
    constructor(props:any) {
        super(props);

        const components: ComponentMetadata[] = []





        /*
        const components: ComponentMetadata[] = this.props.componentContext
            .keys()
            .reduce<ComponentMetadata[]>((acc, componentPath) => {
                const normalizedPath = componentPath.replace(/^\.\//, '').split('.').shift();
                if (isRelativePath(componentPath)) {
                    const Component = this.props.componentContext(componentPath).default;
                    acc[normalizedPath] = Component;
                    // acc.push({ path: normalizedPath, component: Component });
                }
                return acc;
            }, {});
        */

        // console.log(components);


        this.state = {
            componentMap:{
                // image:BaseImage,
                // link:BaseLink,
                // video:BaseVideo,
                // button:BaseButton,
                ...components
            }
        }


    }


    render() {

        return (
            <div>
            </div>
        );

        /*
        const components = this.props.data.map((item:object, index:number) => {
            const Component = this.state.componentMap[item.type];
            if (Component) {
                return <Component key={index} name={item.name} entry={item.entry} />;
            } else {
                return null;
            }
        });


        return (
            <div>
                {components}
            </div>
        );
        */
    }
}

export default MappingComponent

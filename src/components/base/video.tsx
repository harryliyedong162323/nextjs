import React,{Component} from "react";
import fnv1a from "next/dist/shared/lib/fnv1a";

interface State {
    name:string,
}
interface propsContent {
    display?:boolean,
    alt?:string,
    src:string,
    autoplay?:boolean,
    loop?:boolean,
    controls?:boolean,
    controlsList?:string,
    poster?:string,
    muted?:boolean,
    height:number,
    width:number
}
class BaseVideo extends Component<propsContent,State>{


    static defaultProps = {
        display:true,
        src:'',
        alt:'',
        loop:false,
        autoplay:false,
        muted:true,
        controlsList:'nodownload',
        controls:false,
        poster:'',
        height:200,
        width:300,
    }

    constructor(props:any) {
        super(props);
        this.state = {
            name:'base-video',
        }
    }



    render() {
        if(this.props.display){
            return (
                <div className={this.state.name}>
                    <video
                        src={this.props.src}
                        autoPlay={this.props.autoplay}
                        loop={this.props.loop}
                        width={this.props.width}
                        height={this.props.height}
                        muted={this.props.muted}
                        controls={this.props.controls}
                        controlsList={this.props.controlsList}
                    ></video>
                </div>
            );
        }else{
            return null;
        }

    }
}


export default BaseVideo;

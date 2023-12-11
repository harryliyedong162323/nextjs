import React,{Component} from "react";


interface State {
    name:string,
}
interface propsContent {
    display?:boolean,
    className?:string,
    alt?:string,
    src:string,
    autoplay?:boolean,
    loop?:boolean,
    controls?:boolean,
    controlsList?:string,
    poster?:string,
    muted?:boolean,
    height:string,
    width:string
}
class BaseVideo extends Component<propsContent,State>{


    static defaultProps:any = {
        display:true,
        src:'',
        className:'',
        alt:'',
        loop:false,
        autoplay:false,
        muted:true,
        controlsList:'nodownload',
        controls:false,
        poster:'',
        height:'200',
        width:'300',
    }

    state: State = {
        name: 'base-video',
    };


    constructor(props:any) {
        super(props);
        // this.state = {
        //     name:'base-video',
        // }
    }
    computedClassName():string{
        let className:string[] = [
            this.state.name,
            this.props.className ?? '',
        ];
        return className.filter(Boolean).join(' ');

    }




    render() {
        if(this.props.display){
            return (
                <video
                    className={this.computedClassName()}
                    src={this.props.src}
                    autoPlay={this.props.autoplay}
                    loop={this.props.loop}
                    width={this.props.width}
                    height={this.props.height}
                    muted={this.props.muted}
                    controls={this.props.controls}
                    controlsList={this.props.controlsList}
                ></video>
            );
        }else{
            return null;
        }

    }
}


export default BaseVideo;

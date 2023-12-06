import React,{Component} from "react";

interface State {
    link:String,
    text:String,
}

class BaseImage extends Component<{},State>{
    constructor(props:{}) {
        super(props);
        this.state = {
            link:'https://vd3.bdstatic.com/mda-pjfmbq3us8q1eq92/wzdash/bd265/1697482150021338695/mda-pjfmbq3us8q1eq92/dash-fhd.mp4?cr=3&cd=1&abtest=112954_2&logid=0310694009&pd=1&pt=3&vid=16956352271853885370',
            text:'button'
        }
    }



    render() {
        return (
            <div className='base-button'>
                <button>{this.state.text}</button>
            </div>
        );
    }
}


export default BaseImage;
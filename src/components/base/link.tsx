import React,{Component} from "react";
import Link from 'next/link';
interface State {
    name:string
}
interface propsContent {
    display?:boolean,
    hover?:string,
    color?:string,
    link:string,
    children?:any,
}

class BaseLink extends Component<propsContent,State>{

    static defaultProps = {
        display:true,
        color:'',
        hover:'',
        link:''
    }

    state: State = {
        name:'base-link',
    };

    constructor(props:any) {
        super(props);

    }

    init(){
        setTimeout(()=>{document&&(document.body.style.overflow = 'auto');},0);
    }

    hasColor():string{
        if(this.props.color){
            return 'hover:'+this.props.color;
        }else{
            return '';
        }
    }

    hasHover():string{
        if(this.props.hover){
            return 'hover:'+this.props.hover;
        }else{
            return '';
        }
    }


    computedClassName():string{
        let className:string[] = [
            this.state.name,
            this.hasColor(),
            this.hasHover(),
        ];
        return className.filter(Boolean).join(' ');

    }



    render() {
        if(this.props.display){
            // this.state.name+' '+(this.hasHover())+' '
            return (
                <Link className={this.computedClassName()} href={this.props.link} onClick={()=>{this.init()}}>{this.props.children}</Link>
            );
        }else{
            return null;
        }

    }
}


export default BaseLink;

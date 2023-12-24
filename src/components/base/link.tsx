import React,{Component} from "react";
import Link from 'next/link';
interface State {
    name:string
}
interface propsContent {
    autoLanguage?:boolean,
    display?:boolean,
    hover?:string,
    color?:string,
    link:string,
    children?:any,
}

class BaseLink extends Component<propsContent,State>{

    static defaultProps = {
        autoLanguage:true,

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




    computedLink():string{
        let location :string | undefined = process.env.LOCATION;
        let trimmedUrl: string;
        let trimmedLink:string;
        let targetUrl:string;
        let link:string = this.props.link;
        if (location) {
            trimmedUrl = location.replace(/^\/|\/$/g, '');
        } else {
            trimmedUrl = '';
        }

        trimmedLink = (link.replace(/^\/|\/$/g, ''))

        if(trimmedLink == ''){
           targetUrl = '/'
        }else{
           targetUrl = this.props.autoLanguage ? (`/${trimmedUrl}/`) + trimmedLink: this.props.link;
        }

        return targetUrl;


    }



    render() {
        if(this.props.display){
            // this.state.name+' '+(this.hasHover())+' '
            return (
                <Link rel="preload" className={this.computedClassName()} href={this.computedLink()} onClick={()=>{this.init()}}>{this.props.children}</Link>
            );
        }else{
            return null;
        }

    }
}


export default BaseLink;

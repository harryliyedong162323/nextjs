import React,{Component} from "react";
import Link from 'next/link';

import { sendScrollEvent,TrackingType } from "@/utils/analytics";

interface State {
    name:string
}
interface propsContent {
    autoLanguage?:boolean,
    className?:string,
    display?:boolean,
    hover?:string,
    color?:string,
    link:string,
    children?:React.ReactNode,
    onClick?:(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void,
    onMouseEnter?:(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void,
    onMouseLeave?:(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void,
    onHover?:(enter: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void,leave: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void)=>void,
}

class BaseLink extends Component<propsContent,State>{
    private location: string;
    static defaultProps = {
        autoLanguage:true,
        className:'',
        display:true,
        color:'',
        hover:'',
        link:'',
        onMouseEnter:(()=>{}),
        onMouseLeave:(()=>{}),
    }
    state: State = {
        name:'base-link',
    };

    constructor(props:propsContent) {
        super(props);
        this.location = '';
    }

    setLocation(path:string){

        window.localStorage.setItem('location',path);
        this.location = path;
    }

    getLocation():string{
        return this.location;
    }


    handleClick(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        this.init();

        this.props.onClick&&this.props.onClick(e);
    }


    leavePageAnalytics(){
        const scrollDom = document.getElementById('currentScroll') as HTMLInputElement;
        const scrollValue:string | undefined = scrollDom.value || '';
        const scrollSlug:string | undefined = scrollDom.getAttribute('data-slug') || '';

        // console.log(scrollSlug);
        // console.log(scrollValue);


        sendScrollEvent(scrollValue, scrollSlug);

    }



    handleMouseLeave(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>):void{
        if(typeof this.props.onHover === 'function'){
           // this.props.onHover&&this.props.onHover((e)=>{
           //
           // },(e)=>{
           //
           // })
        }else{

            this.props.onMouseLeave&&this.props.onMouseLeave(e);
        }
    }

    handleMouseEnter(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>):void{
        if(typeof this.props.onHover === 'function'){
            // this.props.onHover&&this.props.onHover((e)=>{
            //
            // },(e)=>{
            //
            // })
        }else{

            this.props.onMouseEnter&&this.props.onMouseEnter(e);
        }

    }

    init(){
        this.leavePageAnalytics();

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
            this.props.className || '',
            this.hasColor(),
            this.hasHover(),
        ];
        return className.filter(Boolean).join(' ');

    }




    computedLink():string{
        let location :string | undefined = this.getLocation() || process.env.LOCATION;
        let trimmedUrl: string;
        let trimmedLink:string;
        let targetUrl:string;
        let link:string = this.props.link ?? '';

        if(link == '') return link

        // if (location) {
        //     trimmedUrl = location.replace(/^\/|\/$/g, '');
        // } else {
        //     trimmedUrl = '';
        // }
        //
        // trimmedLink = (link.replace(/^\/|\/$/g, ''))
        //
        // if(trimmedLink == ''){
        //    targetUrl = '/'
        // }else{
        //
        //     targetUrl = this.props.autoLanguage ? (`/${trimmedUrl}/`) + trimmedLink : this.props.link;
        // }

        targetUrl = this.props.autoLanguage ? process.env.DOMAIN + this.props.link : this.props.link;


        return targetUrl;


    }

    render() {
        if(this.props.display){
            // this.state.name+' '+(this.hasHover())+' '
            return (
                <Link

                    className={this.computedClassName()}
                    href={this.computedLink()}
                    onMouseLeave={(e)=>{this.handleMouseLeave(e)}}
                    onMouseEnter={(e)=>{this.handleMouseEnter(e)}}
                    onClick={(e)=>{this.handleClick(e)}}>
                    {this.props.children}
                </Link>
            );
        }else{
            return null;
        }

    }
}


export default BaseLink;

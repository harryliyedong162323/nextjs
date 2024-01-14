import React,{Component} from "react";
import { logEvent } from "@/utils/analytics";

interface State {
    name:string
}
interface propsContent {
    className?:string,
    children?:any,
    category?: string,
    action?: string,
    onClick?:(e: any) => void,
}

class BaseButton extends Component<propsContent,State>{
    static defaultProps = {
        className:'',
        category: "",
        action: "",
        onMouseEnter:(()=>{}),
        onMouseLeave:(()=>{}),
    }
    state: State = {
        name:'base-button',
    };

    constructor(props:any) {
        super(props);
    }

    handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.MouseEvent<HTMLButtonElement, MouseEvent>){
        console.log('base button click')
        logEvent(this.props.category, this.props.action)
        this.props.onClick&&this.props.onClick(e);
    }

    computedClassName():string{
        let className:string[] = [
            this.state.name,
            this.props.className || '',
        ];
        return className.filter(Boolean).join(' ') + '';
    }


    render() {
        return (
            <button
                rel="preload"
                className={`${this.computedClassName()}`}
                onClick={(e)=>{this.handleClick(e)}}>
                {this.props.children}
            </button>
        );

    }
}


export default BaseButton;

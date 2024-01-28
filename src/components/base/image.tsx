import React, { Component } from "react";
import Image from "next/image";

interface State {
  name: string;
  src: string;
  ready: boolean;
}
interface propsContent {
  className?: string;
  loading?: boolean;
  display?: boolean;
  alt?: string;
  pointerEvents?: boolean;
  height: number;
  width: number;
  objectFit?: string; //fill contain cover none scale-down
  objectPosition?: string; //top bottom left right center top left top right bottom left bottom right ["50%", "50%"]
  defaultImg?: string;
  quality?: number;
  layout?: string;
  pImg?: string; // pc img
  mImg?: string; // mobile img
}

class BaseImage extends Component<propsContent, State> {
  static defaultProps = {
    pointerEvents: true,
    objectFit: "",
    layout: "",
    className: "",
    objectPosition: "",
    quality: 0,
    display: true,
    height: 200,
    alt: "",
    width: 300,
    loading: false,
    defaultImg: "",
    pImg: "",
    mImg: "",
  };

  state: State = {
    name: "base-image",
    src: "",
    ready: false,
  };

  constructor(props: propsContent) {
    super(props);
    // console.log(this.state.name)
    // this.init();
  }

  init() {
    if (this.props.defaultImg != "") {
      // this.state.src = this.props.defaultImg;
      this.setState({ src: this.props.defaultImg } as Pick<State, keyof State>);
    } else {
      this.setState({ src: require("../../../public/empty_img.png") } as Pick<
        State,
        keyof State
      >);
      // this.state.src = require('../../../public/empty_img.png');
    }
  }

  handleResize = () => {
    if (this.props.pImg == "" && this.props.mImg == "") {
      this.setState({ ready: true } as Pick<State, keyof State>);
      return false;
    }

    if (window.innerWidth < 768) {
      if (this.props.mImg == "") {
        this.setState({ src: require("../../../public/empty_img.png") } as Pick<
          State,
          keyof State
        >);
      } else {
        this.setState({ src: this.props.mImg } as Pick<State, keyof State>);
      }
    } else {
      if (this.props.pImg == "") {
        this.setState({ src: require("../../../public/empty_img.png") } as Pick<
          State,
          keyof State
        >);
      } else {
        this.setState({ src: this.props.pImg } as Pick<State, keyof State>);
      }
    }
    this.setState({ ready: true } as Pick<State, keyof State>);
  };

  componentDidMount() {
    this.init();
    this.handleResize(); // 初始化时进行一次判断
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  componentDidUpdate(prevProps: propsContent) {
    if (
      this.props.pImg !== prevProps.pImg ||
      this.props.mImg !== prevProps.mImg
    ) {
      // 在 props 变化时执行操作
      // 比如更新组件内部的状态
      this.handleResize();
      // console.log(prevProps)
    }
  }

  computedClassName(): string {
    let className: string[] = [
      this.state.name,
      this.props.className ?? "",
      this.props.pointerEvents ? "pointer-events-none" : "",
    ];
    return className.filter(Boolean).join(" ");
  }

  // width={this.props.width}
  // height={this.props.height}
  // {this.props.objectFit}
  //     layout='responsive'
  render() {
    if (this.props.display && this.state.ready) {
      return (
        <Image
          className={this.computedClassName()}
          layout={this.props.layout}
          quality={this.props.quality}
          src={this.state.src}
          objectPosition={this.props.objectPosition}
          objectFit={this.props.objectFit}
          alt={this.props.alt ?? ""}
        ></Image>
      );
    } else {
      if (this.props.loading) {
        return (
          <Image
            className={this.state.name + "-loading"}
            src={require("../../../public/loading.gif")}
            alt={this.props.alt ?? ""}
          ></Image>
        );
      } else {
        return null;
      }
    }
  }
}

export default BaseImage;

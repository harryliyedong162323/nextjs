import ReactGA from "react-ga4";
import exp from "constants";


export interface TrackingTypeContent {
  viewPage : string,
  click : string,
  scrollFull : string,
  scroll25 : string,
  scroll50 : string,
  scroll75 : string,
  play : string,
}

export const TrackingType:TrackingTypeContent = {
  viewPage : "Viewpage",
  click : "Click",
  scrollFull : "Scroll",
  scroll25 : "25%Scroll",
  scroll50 : "50%Scroll",
  scroll75 : "75%Scroll",
  play : "Play",
}

const TRACKING_ID = "G-2HKP8KF0FX";
const isProduction = process.env.NODE_ENV === "production";

export const initGA = () => {
  console.log("GA init");
  // window.ReactGA = ReactGA;
  ReactGA.initialize(TRACKING_ID, { testMode: !isProduction });
};

export const logPageView = (pageName: string) => {
  console.log(`Logging pageview for ${pageName}`);

  ReactGA.set({ page: pageName });


  ReactGA.send({ hitType: "pageview", page: pageName });
};

export const logEvent = (category:string = "", action:string = "",categorySub:string = "") => {
  console.log(`Logging button for category: ${category} && action: ${action}`);
  if (category && action) {
    // ReactGA.event({ category, action })
    if(categorySub){
      ReactGA.event(`Click_${category}_${action}|${categorySub}`);
    }else{
      ReactGA.event(`Click_${category}_${action}`);
    }

  }
};

export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.gtag("event", "exception", {
      description,
      fatal, // set to true if the error is fatal
    });
  }
};

export const sendScrollEvent = ( trackingType: string = '',pageName: string = '',)=>{

  if(trackingType && pageName){
    console.log(`${trackingType}_${pageName}Page`);
    ReactGA.event(`${trackingType}_${pageName}Page`);
  }

}




export const sendEvent = (
  trackingType: TrackingTypeContent,
  pageName: string,
  eventVal: string
) => {
  ReactGA.event(`${trackingType}_${pageName}_${eventVal}`);
};

import React from "react";
import { useMediaQuery} from "react-responsive";

export const Pc = ({ children }) => {
    const isPc = useMediaQuery({
      query: "(min-width:600px)"
    });
    return <>{isPc && children}</>
}

export const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({
      query: "(min-width:0px) and (max-width:600px)"
    });
    return <>{isMobile && children}</>
  }
  

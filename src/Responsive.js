import React from "react";
import { useMediaQuery} from "react-responsive";

export const PC = ({ children }) => {
    const isPC = useMediaQuery({
      query: "(min-width:600px)"
    });
    return <>{isPC && children}</>
}

export const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({
      query: "(min-width:320px) and (max-width:599px)"
    });
    return <>{isMobile && children}</>
  }
  

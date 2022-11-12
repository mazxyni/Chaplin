import React from "react"
import HeaderPc from './PC/component/Header_PC';
import { PC, Mobile } from "./Responsive";

function Test() {

    return(
        <div>
            <PC>PC
                <HeaderPc />
                
            </PC>
            <Mobile>Mobile</Mobile>
        </div>
    )
}
export default Test;

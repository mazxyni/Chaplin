import React from "react";
import '../CSS/Footer.css'

function Footer() {

    return(
        <div className="Footer">
            <p style={{marginTop:'15px', marginBottom:'5px', fontFamily:'Roboto', fontSize:'11px',fontWeight:'700'}}>이용약관  |  개인정보처리방침  |  고객 문의 전화 : 010-0079-6105</p>

            <p style={{marginTop:'5px', marginBottom:'15px', fontFamily:'Noto Sans KR', fontSize:'10px', fontWeight:'700'}}>COPYRIGHT© 2022 CHAPLIT. ALL RIGHT RESERVED.</p>
        </div>
    )
}
export default Footer;
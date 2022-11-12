import React from 'react';
import { Link } from "react-router-dom";
import './Self.css'
function Self() {
    return(
        <div className='selves'>
        <div className='self_left'></div>
        <div className='self'>
        <div className='sub_title'>본인인증</div>
        <p>본인인증을 위해 정보를 입력해주시길 바랍니다.</p>
        <div class="name">
        <div className="name_text">이름 <div className='red_star'>*</div></div>
            <input type="name" className="input_name" placeholder="이름을 입력하세요."/>
        </div>

        <div class="phone">
        <div className="phone_text">전화번호 <div className='red_star'>*</div></div>
            <input type="name" className="input_phone" placeholder="전화번호를 입력하세요."/>
            <div className='phone_button'>
            <Link to="#"><input type="submit" value="인증요청" /></Link>
            </div>
        </div>

        <div class="num">
        <div className="num_text">인증번호 <div className='red_star'>*</div></div>
            <input type="name" className="input_num" placeholder="인증번호를 입력하세요."/>
            <div className='num_button'>
            <Link to="#"><input type="submit" value="인증확인" /></Link>
            </div>
        </div>
        <div className="self_next">
        <Link to="/signup"><input type="submit" value="다음" /></Link>
        </div>
        </div>

        
        <div className='self_right'></div>
        </div>
    )  
}

export default Self;
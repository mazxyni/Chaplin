import React from 'react';
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
    return(
        <div className='signups'>
        <div className='signup_left'></div>

        <div className='signup'>
            <div class="signup_id">
                <div className='sub_title'>회원정보 입력</div>
            <div className="id_text">아이디 <div className='red_star'>*</div></div>
                <input type="id" className='input_id' placeholder='아이디를 입력하세요.'/>
            </div>

            <div class="signup_pw">
            <div className="pw_text">비밀번호 <div className='red_star'>*</div></div>
                <input type="password" className="input_pw" placeholder="비밀번호를 입력하세요."/>
            </div>

            <div class="signp_confirm">
            <div className="confirm_text">비밀번호 확인 <div className='red_star'>*</div></div> 
                <input type="password_confirm" className="input_pw_confirm" />
            </div>   

            <div class="email">
            <div className="email_text"> 이메일 <div className='red_star'>*</div></div>
            <div className='email_input'>
                <input className="box" type="text"/>
                @ 
                <select className="select_box">
                <option value="naver.com">naver.com</option>
                <option value="google.com">google.com</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="nate.com">nate.com</option>
                <option value="kakao.com">kakao.com</option>
                <option value="선택하세요">선택하세요.</option>
                </select>
                </div>
            </div>

            <div class="name">
            <div className="name_text">이름 <div className='red_star'>*</div></div>
                <input type="name" className="input_name" />
            </div>
            
            <div class="birth">
            <div className="birth_text">생년월일 <div className='red_star'>*</div></div>
                <input type="name" className="input_birth" />
            </div>

            <div class="gender">
            <div className="gender_text">성별 <div className='red_star'>*</div></div>
                    <input className="gender_woman" type="radio"/> 여자
                    <input className="gender_man" type="radio"  /> 남자

            </div>

            <div class="signup_next ">
            <Link to="/login"><input type="submit" value="확인" /></Link>
            </div>
            <div className='already_login'><Link to="/login">이미 채플린의 회원이신가요?</Link></div>
        </div>

        <div className='signup_right'></div>

        </div>
    )
}  


export default Signup;
import React from 'react';
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
    return(
        <div className='Logins'>

            <div className='login_left'></div>

            <div className='login'>

                <div className="login_text">로그인</div>
                <div className="eng">Login</div>

                <div className="login_id">
                    <div className="id_text">아이디</div>
                    <input type="id"/>
                </div>

                <div className="login_pw">
                <div className="pw_text">비밀번호</div>
                    <input type="password" />
                </div>

                <div class="login_etc">
                    <div class="checkbox">
                    <input type="checkbox" />
                        <h4>로그인 상태 유지</h4>
                    </div>
                </div>

                <div class="login_next">
                <Link to="/"><input type="submit" value="로그인" /></Link>
                </div>

                <div class="find">
                    <h4>아이디 찾기</h4>
                    <h4>|</h4>
                    <h4>비밀번호 찾기</h4>
                    <h4>|</h4>
                    <h4>회원가입</h4>
                </div>

            </div>

            <div className='login_right'></div>

        </div>
    )  
}

export default Login;
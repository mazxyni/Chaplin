import React, { useState } from 'react';
import "./Login.css";
import { Link } from "react-router-dom";
import axios from 'axios';

function Login() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const [isId, setIsId] = useState(true);
    const [isPw, setIsPw] = useState(true);
    const [isLogin, setIsLogin] = useState(false);

    const onIdHandler = (e) => {
        setId(e.target.value);
        if(!e.target.value) {
            setIsId(true);
        }else{
            setIsId(false);
        }
    }

    const onPwHandler = (e) => {
        setPw(e.target.value);
        if(!e.target.value) {
            setIsPw(true);
        }else{
            setIsPw(false);
        }
    }

    const onLoginHandler = (e) => {
        setIsLogin(e.target.cheked);
    }

    const onSubmitHandler = () => {
        if(isId) {
            alert('아이디를 입력하세요.');
        }
        else if(isPw) {
            alert('비밀번호를 입력하세요');
        }
    }

    function userLogin() {
        axios.post('/api/login', {
            usrId : id,
            usrPw: pw
        }).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }

    return(
        <div className='Logins'>

            <div className='login_left'></div>

            <div className='login'>

                <div className="login_text">로그인</div>
                <div className="eng">Login</div>

                <div className="login_id">
                    <div className="id_text">아이디</div>
                    <input type="text" onChange={onIdHandler}/>
                </div>

                <div className="login_pw">
                <div className="pw_text">비밀번호</div>
                    <input type="password" onChange={onPwHandler} />
                </div>

                <div class="login_etc">
                    <div class="checkbox">
                    <input type="checkbox" />
                        <h4>로그인 상태 유지</h4>
                    </div>
                </div>

                <div class="login_next">
                {!isId  && !isPw ? 
                (<Link to="#"><input type="submit" value="로그인" onClick={userLogin} /></Link>):(
                    <input type="submit" value="로그인" onClick={onSubmitHandler}/>
                )}
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
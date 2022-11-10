import React from "react";
import {Link } from "react-router-dom";
import { ReactComponent as Chaplinlogo } from '../PC_component/chaplin_logo.svg';
import '../CSS/PC/Header_PC.css'

function HeaderPC() {
  return(
    <div className="header">
      <div className="sign">
        <div className="header_login"><Link to="/login">로그인</Link></div>
        <div className="header_signup"><Link to="/signup_terms">회원가입</Link></div>
      </div>
      <div className="gnb">
        <div>
          <Link to="#">챗봇 추천지</Link> 
        </div>

        <div>
          <Link to ="/"><Chaplinlogo width="80" height="80" /></Link>
        </div>

        <div>
          <Link to="/plan">일정 계획</Link>
        </div>
      </div>
    </div>
  )
};

export default HeaderPC;
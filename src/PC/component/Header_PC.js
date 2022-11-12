import React from "react";
import { Route, Link } from "react-router-dom";
import { ReactComponent as Chaplinlogo } from "./chaplin_logo.svg";
import './Header_PC.css'

function HeaderPc() {
  return (
    <div className="header">
    <div className="sign">
  <div className="header_login"><Link to="/Login">로그인</Link></div>
  <div className="header_signup"><Link to="/Terms">회원가입</Link></div>
  </div>
<div className="gnb">
  <div>
  <Link to='Chatbot'>챗봇 추천지</Link>
  </div>
  <div>
    <Link to ="/"><Chaplinlogo width="80" height="80" /></Link>
  </div>
  <div><Link to="/plan">일정 계획</Link></div>
</div>

</div>
  );
}

export default HeaderPc;

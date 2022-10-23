import React from "react";
import { ReactComponent as Chaplinlogo } from "./chaplin_logo.svg";
import '../CSS/PC/Header_PC.css'

function HeaderPc() {
  return (
    <div className="header">
      <div className="gnb">
        <div>
          <a href="#" className="info">
            채플린
          </a>
        </div>
        <div>
          <a href="#" className="chat">
            챗봇 추천지
          </a>
        </div>
        <div>
          <Chaplinlogo width="80" height="80" />
        </div>
        <div>
          <a href="#" className="plan">
            일정 계획
          </a>
        </div>
        <div>
          <a href="#" className="fes">
            전국 축제
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeaderPc;

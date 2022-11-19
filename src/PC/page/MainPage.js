import React from "react";
import Header from "../component/Header_PC";
import Footer from "../component/Footer_PC";
import { Route, Link } from "react-router-dom";
import Main1 from "../component/main_1.jpg";


 function MainPage() {
  
    return (
    <div id="container">
      <Header /> 
      <Link to='/MyPage'>마이페이지</Link>
      <br/>
      <Link to='/Test'>반응형 테스트</Link>
      <img src={Main1} width="100%" />
      <Footer />
    </div>
  );
  
}

export default MainPage;

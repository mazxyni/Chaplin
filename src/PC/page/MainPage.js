import React from "react";
import Header from "../component/Header_PC";
import Footer from "../component/Footer_PC";
import { Route, Link } from "react-router-dom";
import Main1 from "../assets/images/main_1.jpg";


 function MainPage() {
  
    return (
    <div id="container">
      <Header />
      <img src={Main1} width="100%" />
      <p><Link to='/MyPage'>마이페이지</Link></p>
      <p><Link to='/Test'>반응형 테스트</Link></p>
      <Footer />
    </div>
  );
  
}

export default MainPage;

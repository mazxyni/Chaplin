import React, {useState, useEffect} from 'react'
import './App.css';
//import { BrowserView, MobileView } from 'react-device-detect';
import {Route, Routes} from 'react-router-dom'
import axios from 'axios';
import Main from './Mobile/Mobile_Page/MainPage';
import ScheduleAPlanPage from './Mobile/Mobile_Page/PlanPage_Mobile';
import SelectRegion from './Mobile/Mobile_Page/PlanPage_selectRegion';
import SelectDate from './Mobile/Mobile_Page/PlanPage_selectDate';
import MyPage from './Mobile/Mobile_Page/MyPage';
import ChatBot from './Page/Chatbot';
import PlanPage from './Page/PlanPage';

import LoginPage from './PC/page/LoginPage';
import TermsPage from './PC/page/TermsPage';
import SignupHome from './PC/page/SignupPage';
import SelfPage from './PC/page/SelfPage';


function App() {
  // const [user, setUser] = useState("");
  // useEffect(() => {
  //   axios.post("/api/users").then((response) => {
  //     if (response.data) {
  //       setUser(response.data);
  //     } else {
  //       alert("failed to");
  //     }
  //   });
  // }, []);
    

  return (
    <div className="App">
        {/* <h1>{user.usrNm}</h1> */}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='SelectRegion' element={<SelectRegion />} />
          <Route path='SelectDate' element={<SelectDate />}/>
          <Route path='Plan_Mobile' element={<ScheduleAPlanPage />} />
          <Route path='MyPage' element={<MyPage />} />
          <Route path='Chatbot' element={<ChatBot />} />
          <Route path='Plan' element={<PlanPage />} />

          <Route path='Login' element={<LoginPage />} />
          <Route path='Terms' element={<TermsPage />} />
          <Route path='Signup' element={<SignupHome />} />
          <Route path='Self' element={<SelfPage />} />
        </Routes>
      
    </div>
  );
}
export default App;


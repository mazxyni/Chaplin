import './App.css';
//import { BrowserView, MobileView } from 'react-device-detect';
import {Route, Routes} from 'react-router-dom'
import Main from './Page/MainPage';
import ScheduleAPlanPage from './Page/PlanPage_Mobile';
import SelectRegion from './Page/PlanPage_selectRegion';
import SelectDate from './Page/PlanPage_selectDate';
import MyPage from './Page/MyPage';
import ChatBot from './Page/Chatbot';

import Login from './PC/component/Login/Login';
import Terms from './PC/component/Terms/Terms';
import Signup from './PC/page/SignupPage';
import Plan from './PC/page/PlanPage';
import Self from './PC/page/SelfPage';
function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='SelectRegion' element={<SelectRegion />} />
          <Route path='SelectDate' element={<SelectDate />}/>
          <Route path='Plan_Mobile' element={<ScheduleAPlanPage />} />
          <Route path='MyPage' element={<MyPage />} />
          <Route path='Chatbot' element={<ChatBot />} />

          <Route path='Login' element={<Login />} />
          <Route path='Terms' element={<Terms />} />
          <Route path='Signup' element={<Signup/>} />
          <Route path='Plan' element={<Plan />} />
          <Route path='Self' element={<Self />} />
        </Routes>
      
    </div>
  );
}
export default App;


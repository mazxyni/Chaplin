import './App.css';
//import { BrowserView, MobileView } from 'react-device-detect';
import {Route, Routes} from 'react-router-dom'
import Main from './Page/MainPage';
import ScheduleAPlanPage from './Page/PlanPage_home';
import SelectRegion from './Page/PlanPage_selectRegion';
import SelectDate from './Page/PlanPage_selectDate';
import Test from './Page/Test';



function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='Test' element={<Test />} />
          <Route path='SelectRegion' element={<SelectRegion />} />
          <Route path='SelectDate' element={<SelectDate />}/>
          <Route path='Plan' element={<ScheduleAPlanPage />} />
        </Routes>
      
    </div>
  );
}
export default App;


import './App.css';
import { BrowserView, MobileView } from 'react-device-detect';
import {Route, Routes} from 'react-router-dom'
import Main from './Page/MainPage';
import ScheduleAPlanPage from './Page/PlanPage_home';



function App() {
  return (
    <div className="App">
      
      <BrowserView>
        웹 브라우저
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='Plan' element={<ScheduleAPlanPage />} />
        </Routes>
      </BrowserView>

      <MobileView>    
          
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='Plan' element={<ScheduleAPlanPage />} />
        </Routes>
      </MobileView>
    </div>
  );
}
export default App;


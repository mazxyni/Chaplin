import {React, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../CSS/PlanPage.css';
import Header from '../mobile_component/Header';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from 'dayjs';
import { ko } from "date-fns/esm/locale";
import { setStartDate, setEndDate } from '../store.js'



function SelectDate () {

    const startDate = useSelector((state) => state.startDate)
    const endDate = useSelector((state) => state.endDate)
    const dispatch = useDispatch()
    

    const onChange = (dates) => {
      const [start, end] = dates;
      
      //setStartDate(start);
      //setEndDate(end);
      //console.log(dates)
      dispatch(setStartDate(dayjs(start).format('YYYYMMDD')));
      dispatch(setEndDate(dayjs(end).format('YYYYMMDD')));
    };

    

    //console.log(chosenStartDate, chosenEndDate)
    console.log(startDate, endDate)
    const [selectButton, setSelectButton] = useState(false);

    return(
        <div>
            {/* 헤더 */}
            <Header />
            {/* 여행 날짜 선택 */}
            <>
                <p className='Date'>여행 일자를 선택해주세요.</p>
                <div className='SelectDiv'> 
                    <DatePicker
                    locale={ko} // 한국어
                    minDate={new Date()} //현재시점의 이전 달 비활성화
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                    />
                    
                    
                    <Link to='/Plan'>
                        <div className='SelectButton-Date' >적용하기</div>
                    </Link>
                </div>

                
            </>
        </div>
    );
}
export default SelectDate;
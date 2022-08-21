import {React, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../CSS/PlanPage.css';
import Header from '../mobile_component/Header';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from 'dayjs';
import { ko } from "date-fns/esm/locale";
import { setChosenStartDate, setChosenEndDate, setChosenDateArray} from '../store.js'



function SelectDate () {
    const [startDate, setStartDate] = useState(new Date()); // 시작 날짜
    const [endDate, setEndDate] = useState(new Date()); // 종료 날짜
    const DateArray = []; // 일차 배열
    
    const dispatch = useDispatch()

    // 선택한 날짜 store에 저장하기
    function ChosenDate() {
        //console.log(dayjs(startDate).format('YYYYMMDD'));
        //console.log(dayjs(endDate).format('YYYYMMDD'));
        //console.log(chosenDateArray)
        dispatch(setChosenStartDate(dayjs(startDate).format('YYYY-MM-DD')));
        dispatch(setChosenEndDate(dayjs(endDate).format('YYYY-MM-DD')));
        //dispatch(setChosenDateArray())
    }

    // 날짜 선택하기
    const onChange = (dates) => {
      const [start, end] = dates;
      
      setStartDate(start);
      setEndDate(end);
      //console.log(dates)
      //console.log(setStartDate(dayjs(start).format('YYYYMMDD')))
      //console.log(setEndDate(dayjs(end).format('YYYYMMDD')));
      //dispatch(setStartDate(dayjs(start).format('YYYYMMDD')));
      //dispatch(setEndDate(dayjs(end).format('YYYYMMDD')));
    };

    // 일차 배열 
    function DayArray() {

        console.log(startDate, endDate);
        while(startDate <= endDate) {
            let offset = startDate.getTimezoneOffset() * 60000; //ms단위라 60000곱해줌
            let dateOffset = new Date(startDate.getTime() - offset);
            //console.log(dateOffset.toISOString())
            DateArray.push(dateOffset.toISOString().split('T')[0]);
            //console.log(DateArray);
            startDate.setDate(startDate.getDate() + 1);
            //console.log(startDate);
        }

        return dispatch(setChosenDateArray(DateArray));
    }
    

    //console.log(chosenStartDate, chosenEndDate)
    //console.log(startDate, endDate)
    

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
                        <div className='SelectButton-Date' onClick={() => {ChosenDate(); DayArray();}} >적용하기</div>
                    </Link>
                </div>

                
            </>
        </div>
    );
}
export default SelectDate;
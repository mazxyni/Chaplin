import {React, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './PlanPage_Mobile.css';
import Header from '../mobile_component/Header_Mobile';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from 'dayjs';
import { ko } from "date-fns/esm/locale";
import { setChosenStartDate, setChosenEndDate, setChosenDateArray} from '../../store'
import { Mobile } from '../../Responsive';



function SelectDate () {
    const [startDate, setStartDate] = useState(new Date()); // 시작 날짜
    const [endDate, setEndDate] = useState(new Date()); // 종료 날짜
    const DateArray = []; // 일차 배열
    const DATE_FORMAT_CALENDAR ='yyyy년 MM월'
    
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
      
      setStartDate(start); // strtDate를 start로 변경
      setEndDate(end); // endDate를 end로 변경
      //console.log(dates)
      //console.log(setStartDate(dayjs(start).format('YYYYMMDD')))
      //console.log(setEndDate(dayjs(end).format('YYYYMMDD')));
      //dispatch(setStartDate(dayjs(start).format('YYYYMMDD')));
      //dispatch(setEndDate(dayjs(end).format('YYYYMMDD')));
    };

    // 일차 배열 
    function DayArray() {

        console.log(startDate, endDate);

        // 첫 날짜만 선택했을 때(날짜 하나만 선택했을 때)
        if (endDate == null) {
            let offset = startDate.getTimezoneOffset() * 60000; //ms단위라 60000곱해줌
            let dateOffset = new Date(startDate.getTime() - offset);
            //console.log(dateOffset.toISOString())

            // 일차 배열에 날짜 넣기
            DateArray.push(dateOffset.toISOString().split('T')[0]);
            console.log(DateArray);

        }else{ // 첫날짜, 끝 날짜 선택했을 때 (날짜 두개 선택했을 때)

            // 첫 날짜부터 끝 날짜 동안 while문 실행
            while(startDate <= endDate) {
                

                let offset = startDate.getTimezoneOffset() * 60000; //ms단위라 60000곱해줌
                let dateOffset = new Date(startDate.getTime() - offset);
                //console.log(dateOffset.toISOString())

                // 일차 배열에 날짜 넣기
                DateArray.push(dateOffset.toISOString().split('T')[0]);
                //console.log(DateArray);
                //console.log(startDate);

                // 날짜 +1
                startDate.setDate(startDate.getDate() + 1);
                //console.log(startDate);
            }
        }

        return dispatch(setChosenDateArray(DateArray));  
    }
    

    //console.log(chosenStartDate, chosenEndDate)
    //console.log(startDate, endDate)
    

    return(
        <div>
            <Mobile>
            {/* 헤더 */}
            <Header />
            {/* 여행 날짜 선택 */}
            <>
                <p className='Date_mb'>여행 일자를 선택해주세요.</p>
                <div className='SelectDiv_mb'> 
                    <DatePicker
                    locale={ko} // 한국어
                    dateFormatCalendar={DATE_FORMAT_CALENDAR}
                    minDate={new Date()} //현재시점의 이전 달 비활성화
                    selected={startDate} // 초기 선택되어 있는 날짜는 현재 날짜로
                    onChange={onChange} // 날짜 선택하기
                    startDate={startDate} // 첫 날짜
                    endDate={endDate} // 끝 날짜
                    selectsRange
                    inline
                    disabledKeyboardNavigation
                    
                    />
                    
                    
                    <Link to='/Plan_Mobile'>
                        <div className='SelectButton-Date_mb' onClick={() => {ChosenDate(); DayArray();}} >적용하기</div>
                    </Link>
                </div>

                
            </>
            </Mobile>
        </div>
    );
}
export default SelectDate;

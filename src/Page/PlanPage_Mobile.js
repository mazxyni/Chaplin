/* 일정계획 페이지 
<지도>
- 카카오 맵
- 키워드 검색하면 그와 관련됨 목록이 뜨고 지도에 마킹됨 

<일정계획 검색창>
- 인풋창이 있고 버튼이 있음
- 인풋창에 값을 입력하고 버튼을 클릭

<지역, 날짜 선택 모달창>
- 선택한 지역과 날짜가 나타남
- 선택한 지역, 날짜 수정 가능, 눌렀을 때 선택 페이지로 이동

<내 일정>
- 일정 짜는 곳
- DAY를 보여주기
- 일차 선택하고 목적지 넣기
- 넣은 여행지 가로로 스크롤 할 수 있게 보여주기
- 일정저장 버튼
- 내 일정 버튼 : 일정표 열고 닫기 가능
*/

import React, { useState } from 'react'
import '../CSS/PlanPage.css';
import SearchPlace from '../mobile_component/PlanPage/Search';
import SelectSchedule from '../mobile_component/PlanPage/SelectSchedule';
import {FiCalendar} from 'react-icons/fi';
import {MdOutlineEditCalendar} from 'react-icons/md'
import {BiArrowBack} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {setChosenDateArray} from '../store.js';
import { PC, Mobile } from '../Responsive';


function ScheduleAPlanPage() {
    let [ScheduleButton, setScheduleButton] = useState(false); // true일 때 지역/일정 선택 모달 창 열림 , false일 때 지역/일정 선택 모달 창 닫힘

    const chosenDateArray = useSelector((state) => state.chosenDateArray) // 일차 배열
    //console.log(chosenDateArray);
    

    return (
        <div className='PlanPage' >

        <Mobile>
            {/* 일정 계획 페이지 헤더 */}
            <div className='PlanHeader'>
                <BiArrowBack className='Back' size={30}/>
                <MdOutlineEditCalendar className='Schedule' size={30} onClick = {() => {setScheduleButton(!ScheduleButton)}}/>
                {/* 지역,날짜 스케줄 */}
                {ScheduleButton == true ? (<SelectSchedule />) : (null)}
                
            </div>
            
            {/*검색창*/}
            <SearchPlace />
        </Mobile>
        </div>
    );
}
export default ScheduleAPlanPage;


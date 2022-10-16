import React from "react";
import Header from "../mobile_component/Header";
import Footer from "../mobile_component/Footer";
import {chosenEndDate, chosenStartDate} from '../store.js'
import { useSelector } from "react-redux";
import '../CSS/MyPage.css'
import dayjs from 'dayjs';

function MyPage() {
    const chosenStartDate = useSelector((state) => dayjs(state.chosenStartDate).format('YYYY/MM/DD'))
    const chosenEndDate = useSelector((state) => dayjs(state.chosenEndDate).format('YYYY/MM/DD'))
    //const chosenPlace = useSelector((state) => state.chosenPlace);
    const chosenPlace = [{num: 1, place: '롯데월드'}, {num: 1, place: '롯데월드2'}];

    console.log(dayjs(chosenStartDate).format('YYYY/MM/DD'))
    return(
        <div className="MyPage">
            <Header />
            
            {/* 프로필 */}
            <div className="profile">
                <div className="profile-img">
                </div>

            </div>

            {/* 프로필 수정 */}
            <div className="profileModify">
                <button className="profileModifyButton">프로필 수정</button>
            </div>

            <div>
                <p className="MyPlanP"> 내 여행 </p> 
            </div>

            {/* 내 여행 */}
            <div className="MyPagePlan">
                
                {chosenPlace.map((item, i) => (
                <div key = {i} className="MyPagePlanList">
                        <div className="MyPagePlanImg">이미지</div>

                        <div className="MyPagePlantext">
                            <div className="MyPagePlanDate">{chosenStartDate +'~'+ chosenEndDate}</div>
                            <div className="MyPagePlanModify">일정 수정</div>
                            <div className="MyPagePlanCheck">일정표 확인</div>
                            <div className="MyPagePlanOut">일정표 내보내기</div>
                        </div>
                </div>))}
            </div>            

            <Footer />
        </div>
    )
}
export default MyPage;
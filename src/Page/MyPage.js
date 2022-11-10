import React from "react";
import Header from "../mobile_component/Header_Mobile.js";
import Footer from "../mobile_component/Footer_Mobile.js";
import {chosenEndDate, chosenStartDate} from '../store.js'
import { useSelector } from "react-redux";
import '../CSS/Mobile/MyPage_Mobile.css'
import dayjs from 'dayjs';

function MyPage() {
    const chosenStartDate = useSelector((state) => dayjs(state.chosenStartDate).format('YYYY/MM/DD'))
    const chosenEndDate = useSelector((state) => dayjs(state.chosenEndDate).format('YYYY/MM/DD'))
    const chosenPlace = useSelector((state) => state.chosenPlace);
    

    console.log(dayjs(chosenStartDate).format('YYYY/MM/DD'))
    return(
        <div className="MyPage_mb">
            <Header />
            
            {/* 프로필 */}
            <div className="profile_mb">
                <div className="profile-img_mb">
                </div>

            </div>

            {/* 프로필 수정 */}
            <div className="profileModify_mb">
                <button className="profileModifyButton_mb">프로필 수정</button>
            </div>

            <div className="MyPlanP_mb">내 여행 </div>

            {/* 내 여행 */}
            <div className="MyPagePlan_mb">
                
                {chosenPlace.map((item, i) => (
                <div key = {i} className="MyPagePlanList_mb">
                        <div className="MyPagePlanImg_mb">이미지</div>

                        <div className="MyPagePlantext_mb">
                            <div className="MyPagePlanDate_mb">{chosenStartDate +'~'+ chosenEndDate}</div>
                            <div className="MyPagePlanModify_mb">일정 수정</div>
                            <div className="MyPagePlanCheck_mb">일정표 확인</div>
                            <div className="MyPagePlanOut_mb">일정표 내보내기</div>
                        </div>
                </div>))}
            </div>            

            <Footer />
        </div>
    )
}
export default MyPage;
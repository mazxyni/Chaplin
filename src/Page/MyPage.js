import React from "react";
import Header from "../mobile_component/Header";
import Footer from "../mobile_component/Footer";
import {chosenEndDate, chosenStartDate} from '../store.js'
import { useSelector } from "react-redux";

function MyPage() {
    const chosenStartDate = useSelector((state) => state.chosenStartDate)
    const chosenEndDate = useSelector((state) => state.chosenEndDate)

    return(
        <div className="MyPage">
            <Header />
            
            {/* 프로필 */}
            <div className="profile">
                <div style={{width:'35px', height:'35px', backgroundColor:'#000', marginLeft:'45.4%', marginTop:'50px'}}>
                </div>

            </div>

            {/* 프로필 수정 */}
            <div className="profileModify">
                <button className="profileModifyButton" style={{marginTop:'20px', marginBottom:'50px'}}>프로필 수정</button>
            </div>

            {/* 내 여행 */}
            <div className="MyPagePlan">
                <div>
                   <p style={{fontSize:'14px', fontWeight:'700', textDecoration :'underline', textUnderlineOffset:'5px', textDecorationColor:'#566AF0', textDecorationThickness:'1.5px', marginBottom:'30px'}}> 내 여행 </p> 
                </div>

                <div className="MyPagePlanList">
                    <div>
                        <div className="MyPagePlanImg">이미지</div>

                        <div className="MyPagePlantext">
                            <div className="MyPagePlanDate">{chosenStartDate +'~'+ chosenEndDate}</div>
                            <div className="MyPagePlanModify">일정 수정</div>
                            <div className="MyPagePlanCheck">일정표 확인</div>
                            <div className="MyPagePlanOut">일정표 내보내기</div>
                        </div>
                    </div>
                </div>
            </div>            

            <Footer />
        </div>
    )
}
export default MyPage;
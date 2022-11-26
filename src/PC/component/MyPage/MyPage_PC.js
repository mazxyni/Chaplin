import React, { useState } from "react";
import { useSelector } from "react-redux";
import './MyPage_PC.css'
import dayjs from 'dayjs';
import PlacePC from "./Place_PC";

import {BsPersonCircle} from 'react-icons/bs'

function MyPagePc() {
    const chosenStartDate = useSelector((state) => dayjs(state.chosenStartDate).format('YYYY/MM/DD'))
    const chosenEndDate = useSelector((state) => dayjs(state.chosenEndDate).format('YYYY/MM/DD'))
    const chosenPlace = useSelector((state) => state.chosenPlace);
    const usrPlan = useSelector((state) => state.schedule);
    
    const [modal, setModal] = useState(false);

    let date = dayjs(new Date()).format('YYYY-MM-DD');

    console.log(usrPlan);
    

    return(
        <div className="MyPage_pc">
            
            { modal? <PlacePC setModal={setModal}/> : null }
            
            {/* 프로필 */}
            <div className="profile_pc" >
                <BsPersonCircle size={50} />

            </div>

            {/* 프로필 수정 */}
            <div className="profileModify_pc">
                <button className="profileModifyButton_pc">프로필 수정</button>
            </div>

            <div className="MyPlanP_pc">내 여행 </div>

            {/* 내 여행 */}
            <div className="MyPagePlan_pc">
                
                {usrPlan.map((item, i) => (
                <div key = {i} className="MyPagePlanList_pc">
                        <div className="MyPagePlanImg_pc">{usrPlan[i].metropolitan}</div>

                        <div className="MyPagePlantext_pc">
                            <div className="MyPagePlanName_pc">
                                <span style={{marginRight:'15.6%', fontWeight:'700'}}>여행이름 </span>
                                <span>{usrPlan[i].planNm}</span>
                            </div>

                            <div className="MyPagePlanDate_pc">
                                <span style={{marginRight:'16%', fontWeight:'700'}}>여행일자</span>
                                {usrPlan[i].plnFDd ?  (<span>{usrPlan[i].plnSDd +' ~ '+ usrPlan[i].plnFDd}</span>):(
                                    usrPlan[i].plnSDd ? (<span>{usrPlan[i].plnSDd}</span>) : (null))}
                            </div>
                            <div className="MyPagePlanModifyDate_pc">
                                <span style={{marginRight:'10%', fontWeight:'700'}}>최종수정날짜</span>
                                <span>{date}</span>
                            </div>
                            <div className="MyPagePlanModify_pc">
                                <div className="MyPagePlanModifyButton_pc">일정 수정</div>
                                <div className="MyPagePlanCheck_pc" onClick={()=>{setModal(!modal);}}>일정표 확인</div>
                                <div className="MyPagePlanDelete_pc" >일정표 삭제</div>
                            </div>
                            
                        </div>
                </div>))}
            </div>            


        
        </div>
    )
}
export default MyPagePc;
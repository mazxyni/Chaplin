import React, { useState } from "react";
import Header from "../mobile_component/Header_Mobile";
import Footer from "../mobile_component/Footer_Mobile";
import {chosenEndDate, chosenStartDate} from '../../store'
import { useSelector } from "react-redux";
import '../Mobile_Page/MyPage_Mobile.css'
import dayjs from 'dayjs';
import Place from "../mobile_component/MyPage/Place";
import {BsPersonCircle} from 'react-icons/bs'

function MyPage() {
    const chosenStartDate = useSelector((state) => dayjs(state.chosenStartDate).format('YYYY/MM/DD'))
    const chosenEndDate = useSelector((state) => dayjs(state.chosenEndDate).format('YYYY/MM/DD'))
    const chosenPlace = useSelector((state) => state.chosenPlace);
    const usrPlan = useSelector((state) => state.schedule);
    
    const [modal, setModal] = useState(false);

    console.log(usrPlan);
    

    console.log(dayjs(chosenStartDate).format('YYYY/MM/DD'))
    return(
        <div className="MyPage_mb">
            {modal ? <Place setModal = {setModal}/> : null}

            
            {/* 프로필 */}
            <div className="profile_mb" >
                <BsPersonCircle size={50} />

            </div>

            {/* 프로필 수정 */}
            <div className="profileModify_mb">
                <button className="profileModifyButton_mb">프로필 수정</button>
            </div>

            <div className="MyPlanP_mb">내 여행 </div>

            {/* 내 여행 */}
            <div className="MyPagePlan_mb">
                
                {usrPlan.map((item, i) => (
                <div key = {i} className="MyPagePlanList_mb">
                        <div className="MyPagePlanImg_mb">{usrPlan[i].metropolitan}</div>

                        <div className="MyPagePlantext_mb">
                            {usrPlan[i].plnFDd ?  (<div className="MyPagePlanDate_mb">{usrPlan[i].plnSDd +' ~ '+ usrPlan[i].plnFDd}</div>):(
                                    usrPlan[i].plnSDd ? (<div className="MyPagePlanDate_mb">{usrPlan[i].plnSDd}</div>) : (null))}
                        
                            <div className="MyPagePlanModify_mb">일정 수정</div>
                            <div className="MyPagePlanCheck_mb" onClick={()=>{setModal(!modal);}}>일정표 확인</div>
                            <div className="MyPagePlanDelete_mb">일정 삭제</div>
                        </div>
                </div>
                ))}
            </div>   
                              


        
        </div>
    )
}
export default MyPage;

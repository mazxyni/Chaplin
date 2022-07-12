// 일정계획 페이지 - 일정표
import React from 'react'

function Plan() {
    return (
        // 내 일정표
        <div className='MyPlan'>
            <div>
                {/*일차*/}
                <div className='MyPlanDay'>Day</div>

                {/*여행지*/}
                <div className='MyPlanPlace'>
                    여행지
                </div>
            </div>

            <div>
                {/*일정 저장 버튼*/}
                <div className='MyPlanSave'>일정 저장</div> 

                {/*내 일정 버튼*/}
                <div className='MyPlanButton'>내 일정</div>
            </div>
    
            
        </div>
            
        
    );
}
export default Plan;
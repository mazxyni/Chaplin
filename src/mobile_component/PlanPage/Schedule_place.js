// 일정계획 페이지 - 일정 표 안에 담아놓은 여행지 

import React, { useState } from 'react';

function SchedulePlace(props) {

    return(
        <div className='MyPlan'>
            {/*일차*/}
            <div className='MyPlanDay'>Day</div>

            <div className='MyPlanPlace'>
            {props.addPlace.map((item, i) => (<div key={i} className='MyPlanPlace-list'>
                    <div style={{display:'flex'}}>
                        <h4 style={{margin:'5px'}}>{item.place_name}</h4>
                        <span style={{marginLeft : 'auto', padding:'0px 10px'}} onClick={() => {
                            let copy = [...props.addPlace]; // addPlace배열 카피본 만들기
                            copy.splice(i,1); // 선택한 i번째 목적지 삭제하기
                            props.setAddPlace(copy); // addPlace 변경
                            //console.log(props.addPlace)
                        }}>-</span>
                    </div>
                    <div style={{fontSize:'15px'}}>
                        {item.road_address_name ? (
                        <p style={{margin:'5px'}}>{item.road_address_name}</p>
                        ) : (
                        <p style={{margin:'5px'}}>{item.address_name}</p>
                        )}
                    </div>
                </div>))}

            </div> 
            
        </div>
    
    );
}
export default SchedulePlace;

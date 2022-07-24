// 일정계획 페이지 - 일정 표 안에 담아놓은 여행지 

import React, { useState } from 'react';

function SchedulePlace(props) {

    return(
        <div className='MyPlan'>
            {/*일차*/}
            <div className='MyPlanDay'>Day</div>

            <div className='MyPlanPlace'>
            {props.addPlace.map((item, i) => (<div key={i} className='MyPlanPlace-list'>
                    <div style={{display:'flex', margin:'5px'}}>
                        <h4 style={{marginRight:'15px', fontFamily:'Roboto Bold', fontWeight:'700'}}>{item.place_name}</h4>
                        <span style={{marginLeft : 'auto'}} onClick={() => {
                            let copy = [...props.addPlace]; // addPlace배열 카피본 만들기
                            copy.splice(i,1); // 선택한 i번째 목적지 삭제하기
                            props.setAddPlace(copy); // addPlace 변경
                            //console.log(props.addPlace)
                        }}>➖</span>
                    </div>
                    <div style={{fontFamily:'Roboto Regular', fontWeight:'400', fontSize:'13px', margin:'10px 5px', textAlign:'left'}}>
                        {item.road_address_name ? (
                        <p >{item.road_address_name}</p>
                        ) : (
                        <p >{item.address_name}</p>
                        )}
                    </div>
                </div>))}

            </div> 
            
        </div>
    
    );
}
export default SchedulePlace;

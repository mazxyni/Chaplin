import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/PlanPage.css';
import Header from '../mobile_component/Header';

function SelectRegion () {
    
    return(
        <div>
            {/* 헤더 */}
            <Header />
            {/* 여행 지역 선택 */}
            <>
                <p className='Region'>여행 지역을 선택해주세요</p>
                <div className='SelectDiv'>
                    <div className='RegionDropDown'>
                        <div className='Metropolitan'>
                            <p>시·도</p>
                            <select name='metropolitan'>
                                <option value={'전체'}>전체</option>
                            </select> 
                        </div>
                        <div className='City'>
                            <p>시군구</p>
                            <select name='city'>
                                <option value={'전체'}>전체</option>
                            </select> 
                        </div>
                    </div>
                    <Link to='/SelectDate'>
                        <div className='SelectButton-Region'>적용하기</div>
                    </Link>
                </div>
            </>
        </div>
    );
}
export default SelectRegion;
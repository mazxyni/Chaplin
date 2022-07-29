import React from 'react';

function SelectRegion () {
    
    return(
        <div className='SelectDiv'>
            {/* 헤더 */}

            {/* 여행 지역 선택 */}
            <>
                <p>여행 지역을 선택해주세요</p>
                <div className='Region'>
                   <select></select> 
                </div>
            </>
        </div>
    );
}
export default SelectRegion;
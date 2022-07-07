/*
<지도>

<일정계획 검색창>
- 인풋창이 있고 버튼이 있음
- 인풋창에 값을 입력하고 버튼을 클릭하면 입력 값이 콘솔에 보여짐

<내 일정>
- 일정 짜는 곳
- DAY를 보여주기
- 넣은 여행지 가로로 스크롤 할 수 있게 보여주기
- 일정저장 버튼
- 내 일정 버튼 : 일정표 열고 닫기 가능
*/

import React from 'react'

function ScheduleAPlanPage() {

    return (
        // 지도
        <div className='Map'>

            {/*검색창*/}
            <div className='Search'>
                <input type="text" />
                <button>🔍</button>
            </div>

            {/*내 일정*/}

        </div>
    );
}
export default ScheduleAPlanPage;


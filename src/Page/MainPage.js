import React from 'react'
import {Link} from 'react-router-dom'
 
function Main() {
    
    return(
        <div>
            <h1>메인 페이지</h1>
            <Link to='/Plan'>일정계획</Link>
            <p><Link to='/MyPage'>마이페이지</Link></p>
            <p><Link to='/Test'>반응형 테스트</Link></p>
            <p><Link to='Chatbot'>챗봇</Link></p>
           
        </div>
    );
}
export default Main;
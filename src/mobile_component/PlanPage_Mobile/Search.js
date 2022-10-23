// 지도 검색창

import React, { useState } from 'react'
import KakaoMap from './KakaoMap';
import '../../CSS/Mobile/PlanPage_Mobile.css'
import { FaSearch } from 'react-icons/fa';

function SearchPlace() {
    const [InputText, setInputText] = useState('');
    const [Place, setPlace] = useState(' ');

    const onChange = (e) => {
        setInputText(e.target.value);
        //console.log(InputText);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPlace(InputText);
        //setInputText('');
        
    }
    

    return(
        <>
        
        <form className="inputForm" onSubmit={ handleSubmit }>
            <input type="text" placeholder="검색어를 입력하세요." onChange={onChange} value={InputText} className='Search'></input>
            <button type='submit' className='SearchButton' ><FaSearch /></button>
            {/* <h4>{console.log(InputText, '/'+Place+'/')}</h4> */}
        </form>
        <KakaoMap searchPlace={Place} /> 
        </>
    )
}
export default SearchPlace;
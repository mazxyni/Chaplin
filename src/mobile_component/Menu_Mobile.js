import React, { useState } from "react"
import '../CSS/Mobile/Header_Mobile.css'
import {IoMdClose} from 'react-icons/io'
import {MdOutlineHome} from 'react-icons/md'
import { Link, useNavigate } from "react-router-dom"


function Menu(props) {
    const [logIn, setLogIn] = useState(['로그아웃', '마이페이지']);
    const [logOut, setLogOut] = useState(['로그인', '회원가입']);

    const navigate = useNavigate();

    return(
        <div className="menuModal">
            <div className="menuHeader">
                <MdOutlineHome className="home" size={25}/>
                <IoMdClose className='close' size={25} onClick={() => {props.setMenu(false)}}/>
            
            </div>
            <div className="menuLoginOut">
                <p style={{marginRight:'20px'}}>{logOut[0]}</p>
                <p>{logOut[1]}</p>
            </div>
            <div className="menuList">
                <ul className="textMenu" 
                style={{fontSize:'16px', fontWeight:'400', textDecoration :'underline', textUnderlineOffset:'5px', textDecorationColor:'#566AF0', textDecorationThickness:'1.5px', marginBottom:'30px'}}>
                    MENU</ul>
                <li>챗봇 추천지</li>
                <li onClick={() => {navigate('/Plan_Mobile')}}>일정 계획</li>
            </div>

        </div>
    )
}
export default Menu;
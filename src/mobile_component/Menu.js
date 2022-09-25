import React from "react"
import '../CSS/Header.css'
import {IoMdClose} from 'react-icons/io'
import {MdOutlineHome} from 'react-icons/md'

function Menu(props) {

    return(
        <div className="MenuModal">
            <div className="MenuHeader">
                <MdOutlineHome className="home" size={25}/>
                <IoMdClose className='close' size={25} onClick={() => {props.setMenu(false)}}/>
            
            </div>
            <div className="MenuLogin">
                <p style={{marginLeft:'210px'}}>로그인</p>
                <p style={{marginLeft:'20px'}}>회원가입</p>
            </div>
            <div className="MenuList">
                <ul className="TextMenu" 
                style={{fontSize:'16px', fontWeight:'400', textDecoration :'underline', textUnderlineOffset:'5px', textDecorationColor:'#566AF0', textDecorationThickness:'1.5px', marginBottom:'30px'}}>
                    MENU</ul>
                <li style={{fontSize:'14px', fontWeight:'400', marginBottom:'30px'}}>챗봇 추천지</li>
                <li style={{fontSize:'14px', fontWeight:'400', marginBottom:'30px'}}>일정 계획</li>
                <li style={{fontSize:'14px', fontWeight:'400', marginBottom:'30px'}}>전국 축제</li>   
            </div>

        </div>
    )
}
export default Menu;
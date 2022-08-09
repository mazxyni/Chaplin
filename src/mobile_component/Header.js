import React from 'react';
import {HiOutlineMenu} from 'react-icons/hi';
import '../CSS/Header.css'


function Header() {

    return (
        <div className='Header'>
            {/* 채플린 아이콘 */}
            <img className='Logo' alt='logo' src={'img/logo.png'}/>

            {/* 햄버거메뉴 */}
            <HiOutlineMenu className='Hamburger' size={30}/>
        </div>
    );
}
export default Header;
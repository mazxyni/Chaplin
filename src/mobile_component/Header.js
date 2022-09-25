import React , { useState } from 'react';
import {HiOutlineMenu} from 'react-icons/hi';
import '../CSS/Header.css'
import Menu from './Menu';


function Header() {
    const [menu, setMenu] = useState(false);

    return (
        <>
        {menu == true? (<Menu setMenu={setMenu}/>) : (null)}
        
        <div className='Header'>
            {/* 채플린 아이콘 */}
            <img className='Logo' alt='logo' src={'img/logo.png'}/>

            {/* 햄버거메뉴 */}
            <HiOutlineMenu className='Hamburger' size={30} onClick={() => {setMenu(true)}}/>

        </div>
        
        </>
    );
}
export default Header;
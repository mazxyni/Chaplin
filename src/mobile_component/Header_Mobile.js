import React , { useState } from 'react';
import {HiOutlineMenu} from 'react-icons/hi';
import '../CSS/Mobile/Header_Mobile.css'
import Menu from './Menu_Mobile';


function HeaderMobile() {
    const [menu, setMenu] = useState(false);

    return (
        <>
        {menu == true? (<Menu setMenu={setMenu}/>) : (null)}
        
        <div className='HeaderMobile'>
            {/* 채플린 아이콘 */}
            <img className='Logo' alt='logo' src={'img/logo.png'}/>

            {/* 햄버거메뉴 */}
            <div className='Hamburger'>
                <HiOutlineMenu  size={30} onClick={() => {setMenu(true)}}/>
            </div>
        </div>
        
        </>
    );
}
export default HeaderMobile;
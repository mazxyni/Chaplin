import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './Self.css'
import axios from 'axios';

function Self() {

    const [name, setName] = useState('');
    const [phoneNumber, setPhone] = useState('');
    const [certification, setCertification] = useState('');
    const [num, setNum] = useState('');

    const[isName, setIsName] = useState(true);
    const[isPhone, setIsPhone] = useState(true);
    const[isCerti, setIsCerti] = useState(true);

    //console.log(num);
    //console.log(isPhone);
    console.log(isCerti);
    //console.log(certification == num);

    const onNameHandler = (e) => {
        setName(e.target.value);
        if(!e.target.value) {
            setIsName(true);
        }else{
            setIsName(false);
        }
    }

    const onPhoneHandler = (e) => {
        setPhone(e.target.value);
        if(!e.target.value) {
            setIsPhone(true);
        }else{
            setIsPhone(false);
        }
 
    }

    const onCertiHandler = (e) => {
        setCertification(e.target.value);
        if(!e.target.value) {
            setIsCerti(true);
        }else {
            setIsCerti(false);
        }
    }

    const phoneSubmit = () => {
        //console.log(phoneNumber);
        axios.get('/sms', {
            params: {
                'phoneNumber':phoneNumber
            }
        }).then((response) => {
                if (response.data) {
                  //console.log(response.data);
                  setNum(response.data);
                } else {
                  alert("failed to");
                }
              }).catch(function (error) {
                alert('error');
            });
    }



    function certificationSubmit() {
        //console.log(phoneNumber);
        
            if (certification == num) {
                alert('본인인증에 성공하였습니다');
            } else {
                alert("인증번호를 다시 입력해주세요.");
                setCertification('');
                setIsCerti(true);
            }
    }

    const onSubmitHandler = () => {
        if (isName) {
            alert('이름을 입력하세요.');
        }
        else if (isPhone) {
            alert('전화번호를 입력하세요.');
        }
        else if (isCerti) {
            alert('인증번호를 입력하세요.');
        }
        else if (!num) {
            alert("인증번호를 확인해주세요");
        }
    }

    return(
        <div className='selves'>
        <div className='self_left'></div>
        <div className='self'>
        <div className='sub_title'>본인인증</div>
        <p>본인인증을 위해 정보를 입력해주시길 바랍니다.</p>
        <div class="name">
        <div className="name_text">이름 <div className='red_star'>*</div></div>
            <input type="name" className="input_name" placeholder="이름을 입력하세요." onChange={onNameHandler}/>
        </div>

        <div class="phone">
        <div className="phone_text">전화번호 <div className='red_star'>*</div></div>
            <input type="name" className="input_phone" placeholder="전화번호를 입력하세요." onChange={onPhoneHandler}/>
            <button className='phone_button' onClick={phoneSubmit}>인증요청</button>
        </div>

        <div class="num">
        <div className="num_text">인증번호 <div className='red_star'>*</div></div>
            <input type="name" className="input_num" placeholder="인증번호를 입력하세요." onChange={onCertiHandler} value={certification}/>
            <button className='num_button' onClick={certificationSubmit}>인증확인</button>
        </div>
        <div className="self_next">
            {isName == false && isPhone == false && isCerti == false && num && certification == num ?
        (<Link to="/signup"><input type="submit" value="다음" /></Link>):(
            <input type="submit" value="다음" onClick={onSubmitHandler}/> 
        )}
        </div>
        </div>

        
        <div className='self_right'></div>
        </div>

        
    )  
}

export default Self;
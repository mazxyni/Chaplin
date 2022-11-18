import React, { useState } from 'react';
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from 'axios';

function Signup() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [confirmPw, setConfirmPw] = useState('');
    const [emailFirst, setEmailFirst] = useState('');
    const [emailSelect, setEmailSelect] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');

    const email = emailFirst != '' &&  emailSelect != '' ? (emailFirst + "@" + emailSelect) : ('');

    const [isId, setIsId] = useState(false);
    const [isPw, setIsPw] = useState(false);
    const [isConfirmPw, setIsConfirmPw] = useState(false);
    const [isName, setIsName] = useState(true);
    const [isGender, setIsGender] = useState(true);

    const [id2, setId2] = useState('');

    console.log(id);
    console.log(pw);
    console.log(confirmPw);
    console.log(email);
    console.log(name);
    console.log(gender);
    console.log(isId);
    console.log(isPw);
    console.log(isConfirmPw);
    console.log(email != '');
    console.log(isName);
    console.log(isGender);


    const onIdHandler = (e) => {
        let idCheck = /^[A-Za-z0-9]{6,16}$/; 
        if (idCheck.test(e.target.value) || !e.target.value) {
            setIsId(false);
            setId(e.target.value);
        }else{
            setIsId(true);
            //console.log('error');
        }
        
    }

    const onPwHandler = (e) => {
        let pwCheck = /^[A-Za-z0-9!@#$%^&*()_+-=~`:;'",./?<>]{8,16}$/;
        if (pwCheck.test(e.target.value) || !e.target.value) {
            setIsPw(false);
            setPw(e.target.value);
        }else{
            //console.log('error');
            setIsPw(true);
        }
        
    }

    const onConfirmPwHandler = (e) => {
        let pwCheck = /^[A-Za-z0-9!@#$%^&*()_+-=~`:;'",./?<>]{8,16}$/;
        if (pwCheck.test(e.target.value) || !e.target.value) {
            setIsConfirmPw(false);
            setConfirmPw(e.target.value);
        }else{
            //console.log('error');
            setIsConfirmPw(true);
        }
        
    }

    const onEmailFirstHandler = (e) => {
        setEmailFirst(e.target.value);
    }

    const onEmailSelectHandler = (e) => {
        setEmailSelect(e.target.value);
    }


    const onNameHandler = (e) => {
        setName(e.target.value);
        if(!e.target.value) {
            setIsName(true);
        }else{
            setIsName(false);
        }
    }


    const onGenderHandler = (e) => {
        setGender(e.target.value);
        if(!e.target.value) {
            setIsGender(true);
        }else{
            setIsGender(false);
        }
    }

    const onSubmitHandler = () => {
        if(id == '') {
            return alert("아이디를 입력하세요");
        }
        else if(pw == '') {
            return alert("비밀번호를 입력하세요.");
        }
        else if(confirmPw  == '') {
            return alert("비밀번호 확인을 입력하세요.");
        }
        else if (pw !== confirmPw) {
            return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        }
        else if (email == '') {
            return alert("이메일을 입력하세요.");
        }
        else if(name == '') {
            return alert("이름을 입력하세요");
        }
        else if(gender == '') {
            return alert("성별을 선택하세요");
        }
    }

    function signPost() {
        axios.post('/usr', {
            usr_id: id,
            usr_pw: pw,
            usr_nm: name,
            usr_gn: gender,
            usr_em: email,
            usr_role: 'ROLE_USER'
        }).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }

    function duplicateId () {
        axios.get('/usr/{id}', {
            params:{
                'id' : id
            }
        }).then((response)=>{
            if (response.data) {
                console.log('response.data')
            } else {
                
              }
            }).catch(function (error) {
              alert('error');
          });
    }

    

    return(
        <div className='signups'>
        <div className='signup_left'></div>

        <div className='signup'>
        <div className='sub_title'>회원정보 입력</div>
        <div class="signup_id">
                
            <div className="id_text">아이디 <div className='red_star'>*</div></div>
                <input type="id" className='input_id' placeholder='영문 또는 숫자 6~16자로 입력해주세요.' onChange={onIdHandler}/>
                <button className='button_id' onClick={duplicateId}>중복확인</button>
                {isId == true? (<div>영문 또는 숫자 6~16자로 입력해주세요.</div>) : (null)}
            </div>

            <div class="signup_pw">
            <div className="pw_text">비밀번호 <div className='red_star'>*</div></div>
                <input type="password" className="input_pw" placeholder=" 영문, 숫자, 특수문자를 이용하여 8~16자로 입력해주세요. " 
                onChange={onPwHandler} />
                {isPw == true? (<div>영문, 숫자, 특수문자를 이용하여 8~16자로 입력해주세요.</div>) : (null)}

            </div>

            <div class="signp_confirm">
            <div className="confirm_text">비밀번호 확인 <div className='red_star'>*</div></div> 
                <input type="password" className="input_pw_confirm" onChange={onConfirmPwHandler} />
                {isConfirmPw == true? (<div>영문, 숫자, 특수문자를 이용하여 8~16자로 입력해주세요.</div>) : (null)}

            </div>   

            <div class="email">
            <div className="email_text"> 이메일 <div className='red_star'>*</div></div>
            <div className='email_input'>
                <input className="box" type="text" onChange={onEmailFirstHandler} />
                @ 
                <select className="select_box" onChange={onEmailSelectHandler}>
                <option value="선택하세요">선택하세요.</option>
                <option value="naver.com">naver.com</option>
                <option value="google.com">google.com</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="nate.com">nate.com</option>
                <option value="kakao.com">kakao.com</option>
                </select>
                </div>
            </div>

            <div class="name">
            <div className="name_text">이름 <div className='red_star'>*</div></div>
                <input type="name" className="input_name" onChange={onNameHandler}/>
            </div>
            

            <div class="gender">
            <div className="gender_text">성별 <div className='red_star'>*</div></div>
                <input className="gender_woman" type="radio" name='gender' value='여자' onClick={onGenderHandler}/> 여자
                <input className="gender_man" type="radio" name='gender' value='남자' onClick={onGenderHandler}/> 남자
            </div>

            <div class="signup_next ">
            {isId == false && isPw == false && (pw == confirmPw) == true && (email != '') == true && isName == false && isGender == false ?
            (<Link to="/login"><input type="submit" value="확인" onClick={signPost}/></Link>) : (
                <input type="submit" value="확인" onClick={onSubmitHandler} />
            )}</div>
            
            
            <div className='already_login'><Link to="/login">이미 채플린의 회원이신가요?</Link></div>
            
        </div>

        <div className='signup_right'></div>

        </div>
    )
}  


export default Signup;
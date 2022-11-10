import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { useState } from 'react';
import '../CSS/ChatBot.css'

function ChatBot() {

  const [input, setInput] = useState('');
  const [chat, setChat] = useState('');
  console.log(chat)

  const handleSubmit = (e) => {
    e.preventDefault();
    setChat(input);
    e.target.reset();
      
  }

  // 채팅을 시작할 때 나오는 고정 메세지
  const evnetQuery = () => {


  }

  // 사용자가 입력한 메세지 
  const textQuery = () => {
    // 사용자가 보낸 메세지 관리

    // 챗봇이 보낸 메세지 관리
    // textQuery에 리퀘스트를 보냄
  }

  const keyPressHandler = (e) => {
    if (e.key == 'Enter'){  // 엔터키를 눌렀을 때
      if (!e.target.value) { // 입력값이 없다면
        alert('대화를 입력하세요');
      }

      // 입력값이 있다면
      // 입력값 request 보내기
      // textQuery(e.target.value);

      
    }
  }

    return (
        <div className='ChatDiv'>
            <div className='ChatBot'>
              <div></div>

              <form className="Input" onSubmit={ handleSubmit }>
                <input className='ChatInput' 
                placeholder="대화를 입력하세요." 
                onChange={(e) => {setInput(e.target.value)}} 
                onKeyPress = {keyPressHandler}
                ></input>
                <button className='ChatSend'>전송</button>
              </form>
            </div>
        </div>
    )
}
export default ChatBot;
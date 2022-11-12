import React from 'react';
import Header from '../component/Header_PC';
import Footer from '../component/Footer_PC';
import Signup from '../component/Signup/Signup';
import SignupHeader from '../component/Signup/SignupHeader';


function SignupHome() {

    return (
        <div>
            <Header />
            <SignupHeader />
            <Signup />
            <Footer/>
        </div>
    )
    
}
             
export default SignupHome;
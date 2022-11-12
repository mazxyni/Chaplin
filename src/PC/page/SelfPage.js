import React, { Component } from 'react';
import Header from '../component/Header_PC';
import Footer from '../component/Footer_PC';
import Self from '../component/Self/Self';
import SignupHeader from '../component/Signup/SignupHeader';


class SelfPage extends Component{
    render() {
        return (
            <div>
                <Header />
                <SignupHeader />
                <Self />
                <Footer/>
            </div>
        )
    }
}
             
export default SelfPage;
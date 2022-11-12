import React, { Component } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Terms from '../component/Terms/Terms';
import SignupHeader from '../component/Signup/SignupHeader';


class TermsPage extends Component{
    render() {
        return (
            <div>
                <Header />
                <SignupHeader />
                <Terms />
                <Footer/>
            </div>
        )
    }
}
             
export default TermsPage;
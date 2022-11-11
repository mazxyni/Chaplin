import React, { Component } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Login from '../component/Login/Login';

class LoginPage extends Component{
    render() {
        return (
            <div>
                <Header />
                    <Login />               
                <Footer/>
            </div>
        )
    }
}
             
export default LoginPage;
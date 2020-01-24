import React, {Component} from 'react';
import './Register.scss';
import firebase from '../../../config/firebase';

class Register extends Component{
    state ={
        email:'',
        password:''
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleRegisterSubmit = () => {
        const {email,password}=this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password).then(res=>{
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
        
    }
    render(){
        return(
            <div className="login-container">
                <section className="login" id="login">
                    <header>
                    <h2>Richard APP</h2>
                    <h4>Register</h4>
                    </header>
                    <div className="login-form">
                        <input type="text" id="email" className="login-input" placeholder="Email" onChange={this.handleChangeText} required autoFocus/>
                        <input type="password" id="password" className="login-input" placeholder="Password" onChange={this.handleChangeText} required/>
                        <div className="submit-container">
                            <button onClick={this.handleRegisterSubmit} className="login-button">SIGN UP</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Register;

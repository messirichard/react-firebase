import React, {Component} from 'react';
import './Register.scss';
import {connect} from 'react-redux';
import Button from '../../../components/atoms/Button';
import {registerUserAPI} from '../../../config/redux/action';


class Register extends Component{
    state ={
        email:'',
        password:'',
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleRegisterSubmit = () => {
        const {email,password}=this.state;
        this.props.registerAPI({email,password})
        // MOVE TO REDUCER
        // firebase.auth().createUserWithEmailAndPassword(email, password).then(res=>{
        // }).catch(function(error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     // ...
        // });
        
    }
    render(){
        return(
            <div className="login-container">
                <section className="login" id="login">
                    <header>
                    <h2>Richard APPS</h2>
                    <h4>Register</h4>
                    </header>
                    <div className="login-form">
                        <input type="text" id="email" className="login-input" placeholder="Email" onChange={this.handleChangeText} required autoFocus/>
                        <input type="password" id="password" className="login-input" placeholder="Password" onChange={this.handleChangeText} required/>
                        <div className="submit-container">
                            {/* <button onClick={this.handleRegisterSubmit} className="login-button">SIGN UP</button> */}
                            <Button onClick={this.handleRegisterSubmit} title="Register" loading={this.props.isLoading} />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDispatch) (Register);

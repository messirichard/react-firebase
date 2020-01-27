import React, {Component} from 'react';
import Button from '../../../components/atoms/Button';
import {connect} from 'react-redux';
import {loginUserAPI} from '../../../config/redux/action';
import { Redirect } from 'react-router';

class Login extends Component{
    state ={
        email:'',
        password:'',
        toRegister: false
    }

    handletoRegistLogin = () => {
        this.setState({
            toRegister: true
        })
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleLoginSubmit = async () => {

        const {email,password}=this.state;
        const {history} = this.props
        const res = await this.props.loginAPI({email,password}).catch(err=>err)
        if(res === true){
            // console.log("login sukses")
            history.push('/dashboard')
        }
        else{
            this.setState({
                password:''
            })
        }

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
        if (this.state.toRegister === true) {
            return <Redirect to='/register' />
        }
        return(
            <div className="login-container">
                <section className="login" id="login">
                    <header>
                    <h2>Richard APPS</h2>
                    <h4>Login</h4>
                    </header>
                    <div className="login-form">
                        <input type="text" id="email" className="login-input" placeholder="Email" onChange={this.handleChangeText} value={this.state.email} required autoFocus/>
                        <input type="password" id="password" className="login-input" placeholder="Password" onChange={this.handleChangeText} value={this.state.password} required/>
                        <div className="submit-container">
                            {/* <button onClick={this.handleLoginSubmit} className="login-button">SIGN UP</button> */}
                            <Button onClick={this.handleLoginSubmit} title="Login" loading={this.props.isLoading} />
                            <Button onClick={this.handletoRegistLogin} title="Register" />
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
    loginAPI: (data) => dispatch(loginUserAPI(data))
})

export default connect(reduxState, reduxDispatch) (Login);

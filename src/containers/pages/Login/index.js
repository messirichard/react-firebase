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
            /* Force */
            history.push('/dashboard')
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
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-action teal lighten-1 white-text">
                            <h3>Login Form</h3>
                            <h4>Richard APP</h4>
                        </div>
                        <div className="card-content">
                            <div className="form-field">
                                <label for="username">Email</label>
                                <input type="text" id="email" className="login-input" placeholder="Email" onChange={this.handleChangeText} value={this.state.email} required autoFocus/>
                            </div>
                            <div className="form-field">
                                <label for="password">Password</label>
                                <input type="password" id="password" className="login-input" placeholder="Password" onChange={this.handleChangeText} value={this.state.password} required/>
                            </div>
                            <div className="form-field d-inline">
                                {/* <button className="btn-large waves-effect waves-dark">Login</button> */}
                                <Button onClick={this.handleLoginSubmit} title="Login" loading={this.props.isLoading} />
                            </div>
                            <div className="form-field d-inline ml-3">
                                <Button onClick={this.handletoRegistLogin} title="Register" />
                            </div>
                        </div>
                    </div>
                </div>
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

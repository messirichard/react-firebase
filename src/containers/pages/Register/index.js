import React, {Component} from 'react';
import './Register.scss';
import {connect} from 'react-redux';
import Button from '../../../components/atoms/Button';
import {registerUserAPI} from '../../../config/redux/action';


class Register extends Component{
    state ={
        email:'',
        password:'',
        alert: false
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleRegisterSubmit = async () => {
        if (this.state.email === "" & this.state.password === ""){
            alert("Check")
        }
        else{
            const {email,password}=this.state;
            this.props.registerAPI({email,password})
            const {history} = this.props
            const res = await this.props.registerAPI({email,password}).catch(err=>err)
            history.push('/')
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
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-action teal lighten-1 white-text">
                            <h3>Register Form</h3>
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
                                <Button onClick={this.handleRegisterSubmit} title="Register" loading={this.props.isLoading} />
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
    registerAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDispatch) (Register);

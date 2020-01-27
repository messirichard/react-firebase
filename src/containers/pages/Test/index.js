import React, {Component} from 'react'; import './Test.scss';
import { Button, Card, Row, Col } from 'react-materialize';

class Test extends Component{ 
    render(){ 
        return(

    <div>
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-action teal lighten-1 white-text">
                        <h3>Login Form</h3>
                        <h4>Richard APP</h4>
                    </div>
                    <div className="card-content">
                        <div className="form-field">
                            <label for="username">Username</label>
                            <input type="text" id="username"></input>
                        </div>
                        <div className="form-field">
                            <label for="password">Password</label>
                            <input type="password" id="password"></input>
                        </div>
                        <div className="form-field">
                            <input type="checkbox" id="remem"></input>
                            <label for="remem">Rememeber me</label>
                        </div>
                        <div className="form-field">
                            <button className="btn-large waves-effect waves-dark">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    ) } } export default Test;
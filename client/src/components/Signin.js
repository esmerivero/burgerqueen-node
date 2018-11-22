import React, { Component } from 'react';
import {ConfigFire} from '../firebase/Firebase';
import './Signin.css';
import Logo from '../assets/bq-logo.png';
import { withRouter } from 'react-router-dom';

class Signin extends Component{
    constructor(props){
        super(props);

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);

        this.state = {
            email: null,
            pass: '',
        };
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangePass(event) {
        this.setState({pass: event.target.value});
    }

    handleSignIn(){
        ConfigFire.auth().signInWithEmailAndPassword((this.state.email), (this.state.pass))
        .then(
            this.props.history.replace('/menu') 
        )
        .catch(function(error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            alert(errorCode);
            alert(errorMessage);
        });
    }
    

    render(){
        return(
            <section className="container">

                <article className="row">
                    <div className="col-md-6 offset-md-3">
                        <img src={Logo} className="logo" alt="Logotipo de burger queen" /> 
                    </div>
                </article>

                <div className="row contenido">
                    <div className="col-md-6 offset-md-3">
                        <div className="input-group input-group-lg">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg">CORREO</span>
                        </div>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" 
                        value={this.state.email} onChange={this.handleChangeEmail}/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 offset-md-3 align-items">
                        <div className="input-group input-group-lg">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg">CONTRASEÑA</span>
                        </div>
                        <input type="password" className="form-control" aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-lg" value={this.state.pass} onChange={this.handleChangePass}/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <button type="submit" onClick={this.handleSignIn} className="btn btn-success btn-lg col-md-4 offset-md-4 align-items">ACCEDER</button>
                </div>

                <div className="row">
                    <button type="button" className="btn btn-link btn-lg offset-md-8 col-md-3 align-items">Recuperar contraseña</button>
                </div>

            </section>
        );
    }
}

export default withRouter(Signin);
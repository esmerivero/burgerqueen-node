import React, { Component } from 'react';
import Logo from '../assets/bq-logo.png';
import './Navbar.css';
import ButtonLogout from './ButtonLogout';

export default class Navbar extends Component{

    render(){
        return(
            <header>
                <nav className="navbar navbar-light bg-light nav-pills">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} width="60" height="auto" alt="Logotipo de burger queen"/>
                    </a>

                    <ButtonLogout />
                </nav>
            </header>
        );
    }
}
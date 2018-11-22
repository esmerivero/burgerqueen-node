import React, { Component } from 'react';
import './SectionMenu.css';
import Data from '../Menu.json';

export default class Breakfast extends Component{
    constructor(props){
        super(props);

        this.handleMenuBreakfast = this.handleMenuBreakfast.bind(this);
    }

    handleMenuBreakfast(){
        const menu = (Data.breakfast).map((item) => {
            return (
                <button type="button" className="btn btn-success btn-lg btn-menu"
                data-type={item.type}
                data-price={item.price}
                onClick={this.props.getOption}>
                {item.type}<br/>{item.price}
                </button>
            );
        });
        return menu;
    }

    render(){        
        return(
            <section className="btn-menu">
                <this.handleMenuBreakfast />
            </section>
        );
    }
}
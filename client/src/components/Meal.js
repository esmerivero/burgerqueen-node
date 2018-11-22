import React, { Component } from 'react';
import './SectionMenu.css'
import Data from '../Menu.json';

export default class Meal extends Component{
    constructor(props){
        super(props);

        this.handleChangeMenuMeal = this.handleChangeMenuMeal.bind(this);
    }

    handleChangeMenuMeal(){
        const menu = (Data.meal).map((item) => {
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
                <this.handleChangeMenuMeal />
            </section>
        );
    }
}
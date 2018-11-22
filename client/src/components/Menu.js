import React, { Component } from 'react';
import Navbar from './Nabvar';
import SectionMenu from './SectionMenu';
import SectionOrder from './SectionOrder';
import './Menu.css'

export default class Menu extends Component{
    constructor(props){
        super(props);
        this.handleGetOrder = this.handleGetOrder.bind(this);

        this.state = {
            breakfast:true,
            meal:false,
            order:[]
        }
    }

    handleGetOrder(e){
        const joined = this.state.order.concat({typeMenu:e.target.dataset.type,price:e.target.dataset.price});
        this.setState({ order: joined })
    }

    render(){
        return(
            <div className="container">
            <Navbar />
                <div className="content row">
                    <SectionMenu breakfasMenu={this.state.breakfast} mealMenu={this.state.meal} getOrder={this.handleGetOrder}/>
                    <SectionOrder order={this.state.order}/>
                </div>
            </div>
        );
    }
}
import React, { Component } from 'react';
import Navbar from './Nabvar';
import SectionMenu from './SectionMenu';
import SectionOrder from './SectionOrder';
import './Menu.css'

export default class Menu extends Component{
    constructor(props){
        super(props);
        this.handleGetOrder = this.handleGetOrder.bind(this);
        this.handleNewTotal = this.handleNewTotal.bind(this);

        this.state = {
            breakfast:true,
            meal:false,
            order:[]
        }
    }

    handleNewTotal(){
        const objectOrder = this.state.order.map((items) => {
            return parseInt(items.price);
        });
        let newTotal = 0;
        objectOrder.forEach(element => {
            newTotal = newTotal + element;
        });
        return newTotal;
        // console.log('handlenewtotal',newTotal);
        // this.setState({total: newTotal}, ()=>console.log('afterset', this.state.total));
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
                    <SectionOrder order={this.state.order} newTotal={this.handleNewTotal}/>
                </div>
            </div>
        );
    }
}
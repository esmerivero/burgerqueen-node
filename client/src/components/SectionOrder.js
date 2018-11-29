import React, { Component } from 'react';
import './SectionOrder.css';
import ButtonSendOrder from './ButtonSendOrder';

export default class SectionOrder extends Component{
    constructor(props){
        super(props);
        this.handlePrintOrder = this.handlePrintOrder.bind(this);
    }

    print(order){
        return(
            <div className="row">
                <div className="col">{order.typeMenu}</div>
                <div className="col">{order.price}</div>
                <i class="material-icons">delete</i>
                <hr/>
            </div>
        );
    }

    handlePrintOrder(){
        const item = (this.props.order).map((order) => {
            return this.print(order);
        });
        return(item);
    }

    componentDidUpdate(){
        this.handlePrintOrder();
    }

    render(){
        return(
            <section className="col-md-5">
                    <div className="card section-order">
                        <div className="card-body">
                            <this.handlePrintOrder />
                        </div>
                        <ButtonSendOrder order={this.props.order} newTotal={this.props.newTotal}/>
                    </div>
            </section>
        );
    }
}
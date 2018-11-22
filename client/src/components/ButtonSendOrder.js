import React, { Component } from 'react';
// import axios from ('axios');

// export const getOrders = () => dispatch => {
//     dispatch();
//     axios.get('/api/orders')
//     .then(res => dispatch(
//         {
//             type: 
//         }
//     ))
// }


export default class ButtonLogout extends Component{
    constructor(props){
        super(props);

        this.handleSendOrder = this.handleSendOrder.bind(this);
        this.state = {
            name: null,
            total: 0,
            date: Date.now(),
            status: 'Pending'
        };
    }

    

    handleSendOrder(){
        let total = 0 ;
        let getObjectOrder = this.props.order.map((item) => {
            total = parseInt(total) + parseInt(item.price);
            return (this.setState({total:total}));
         });
        console.log(this.state.total);
        
        return getObjectOrder;
        // console.log(this.props.order);
    }
    render(){
        return(
            <button type="button" className="btn btn-warning justify-content-center" onClick={this.handleSendOrder}>Enviar a cocina</button>
        );
    }
}
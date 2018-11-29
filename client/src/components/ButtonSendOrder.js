import React, { Component } from 'react';
import axios from 'axios';

// export const getOrders = () => dispatch => {
//     dispatch();
//     axios.get('/api/orders')
//     .then(res => dispatch(
//         {
//             type: 
//         }
//     ))
// }


export default class ButtonSendOrder extends Component{
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
        // this.props.newTotal();
        // console.log(this.props.newTotal());
        const newTotal = this.props.newTotal();

        const obj = {
            name: 'ejemplo numero 3',
            status: 'Pending',
            total: newTotal
          };
          axios.post(('/api/orders'), obj)
              .then(res => console.log(res.data));
          
          this.setState({
            name: '',
            status: '',
            total: 0
          })
    }

    render(){
        return(
            <button type="button" className="btn btn-warning justify-content-center" onClick={this.handleSendOrder}>Enviar a cocina</button>
        );
    }
}
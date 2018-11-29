import React, { Component } from 'react';
import axios from 'axios';

export default class Orders extends Component{
    constructor(props){
        super(props);

        this.handleGetOrders = this.handleGetOrders.bind(this);
        this.state = {
            name: '',
            status: '',
            total: 0,
            date:''
        }    
    }

    handleGetOrders(){ 
        axios.get(('/api/orders'))
            .then(res => {
                const dataArray = res.data;
                dataArray.forEach(element => {
                    this.setState({name: element.name, date: element.date, total: element.total, status: element.status });
                });
            }
        );
    }

    render(){
        return(
            <div>
            <button type="button" className="btn btn-info justify-content-center" onClick={this.handleGetOrders}
            data-toggle="modal" data-target="#modalOrders">Historial</button>
            
            <div className="modal fade" id="modalOrders" tabindex="-1" role="dialog" aria-labelledby="modalOrdersTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modalOrdersTitle">Historial de órdenes</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    Nombre: {this.state.name} <br/>
                    Total: {this.state.total} <br/>
                    Status: {this.state.status}<br/> 
                    Fecha: {this.state.date}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}
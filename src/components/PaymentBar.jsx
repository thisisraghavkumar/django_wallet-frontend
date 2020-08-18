import React, { Component } from 'react';

class PaymentBar extends Component {
    constructor(props){
        super(props);
        this.state = {amount: 0, unit: "eth"};
    }

    handleAmountChange = (event)=>{
        event.preventDefault();
        this.setState({amount: event.target.value});
    }

    handleUnitChange = (event) =>{
        event.preventDefault();
        var newUnit = event.target.value;
        this.setState({unit: newUnit});
    }

    handlePayment = () =>{
        var amt = this.state.amount;
        this.props.paymentMethod(amt);
    }

    render() { 
        return ( <div className="container border">
            <input type="text" id="amount" name="amount" onChange={this.handleAmountChange} value={this.state.amount}/>
            <select id="unit" name="unit" onChange={this.handleUnitChange}>
                <option value="eth">Ether</option>
                <option value="wei">Wei</option>
            </select>
            <button type="submit" onClick={() => this.props.paymentMethod(this.state.amount, this.state.unit)}>Pay</button>
        </div> );
    }
}
 
export default PaymentBar;
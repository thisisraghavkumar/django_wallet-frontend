import React, { Component } from 'react';
import Profile from './Profile';
import {Link} from 'react-router-dom';
import TransactionList from './TransactionList';
import PaymentBar from './PaymentBar';

// dummy transactions
const txList = [
    { 
        hash: "0x0356c9a5b86d4b085abb6b0ed0058758bd68ca6d1f6928d5ebd368088e3fa9ea",
        date: new Date("2019-05-13")
    },
    {
        hash: "0x304b9de0021fcec047b27fce0939544c46c9edf86e57e9663b15d79812e253e4",
        date: new Date("2019-07-17")
    }
];


class ProfilePage extends Component {
    constructor(props){
        super(props);
        this.state = {
                        myAddress: null, 
                        currentAddress: this.props.match.params.address, 
                        currentBalance: 0,
                        transactions: []
                    };
    }

    async componentDidMount(){
        try{
            const myAddr = (await this.props.web3.eth.getAccounts())[0];
            var curBal = (await this.props.web3.eth.getBalance(this.state.currentAddress));
            curBal = this.props.web3.utils.fromWei(curBal, "ether");
            this.setState({myAddress: myAddr, currentBalance: curBal, transactions:txList});    
        }catch{
            console.log("Err")
        }
        
    }

    makePayment = (amount, unit) => {

        try{
            var tx = {
                        from: this.state.myAddress, 
                        to: this.state.currentAddress, 
                        value: (unit==="eth")?this.props.web3.utils.toWei(amount, "ether"):amount
                    };
            console.log(tx);
            this.props.web3.eth.sendTransaction(tx).then((receipt)=>{
                console.log("Transaction Successful!");
                console.log(receipt);
            }, 
            (err)=>{
                console.error(err);
            }).finally(()=>{
                console.log("Transaction complete!");
            });
        }catch(err){
            console.log(err);
        }

    }

    render() { 
        console.log("Matched url", this.props.match.params);
        return ( 
            <div id='ProfilePage'>
                <div className="navbar navbar-expand-lg bg-light navbar-light" id='navbar'>
                    <p className="navbar-brand">EthContact</p>
                    <div className="navbar-nav">
                        <Link className="nav-link active" to="/">Home</Link>
                    </div>
                </div>
                <div id = 'content'>
                    <h1> Profile Page </h1>
                    <Profile address={this.state.currentAddress} web3={this.props.web3}/>
                    <PaymentBar paymentMethod={this.makePayment} valueConvertor={this.props.web3}/>
                    <TransactionList list={this.state.transactions} web3 = {this.props.web3}/>
                </div>
            </div>
         );
    }
}
 
export default ProfilePage;
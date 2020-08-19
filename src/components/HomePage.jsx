import React, { Component } from 'react';
import Profile from './Profile';
import getWeb3 from '../getWeb3';
import TransactionList from './TransactionList';
import ContactList from './ContactList';
import SearchBar from './SearchBar';

//import TransactionList from './TransactionList';

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

const savedAccounts = [
    {name: "Alice", address: "0x072Ee7De3d14c072f2a993F22C071606B498f527"},
    {name: "Raghav", address: "0xcaca4cd658a660083C4c0b55281bE79849Ff6bB0"}
]

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {providedAddress:0x0, balance:0, contacts:[], transactions:[]};
    }

   async componentDidMount(){
       try{
            var address = await this.props.web3.eth.getAccounts();
            address = address[0];
            // var bal = await this.props.web3.eth.getBalance(address);
            // var balEth = this.props.web3.utils.fromWei(bal, "ether";
            this.setState({providedAddress: address});
            
            // dummy data
            this.setState({transactions: txList, contacts: savedAccounts});
       }catch{
           console.log("Loading address!");
       }
   }
    render() { 
        return ( 
            <div id = 'My Page' className="container">
                <SearchBar/>
                <div className="container row">
                    <div className="container col-5">
                        <h1>My Profile</h1>
                        <Profile address={this.state.providedAddress} web3={this.props.web3}/>
                    </div>
                    <div className="container col">
                        <h1>My Contacts</h1>
                        <ContactList list={this.state.contacts}/>
                    </div>
                </div>
                <br/>
                <div className="container-fluid row">
                    <div className="container col">
                        <h1>My Transactions</h1>
                        <TransactionList list={this.state.transactions} web3 = {this.props.web3}/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default HomePage;
import React, { Component } from 'react';
import TransactionCard from './TransactionCard';

class TransactionList extends Component {
    render() {
        var listOfTransactions =  this.props.list.map((t, index)=> {
                                return <div className='container row' key={'tx-'+index}>
                                            <div className="container col-1 border">
                                                {index+1}
                                            </div>
                                            <div className="container col border">
                                                <TransactionCard tx = {t} web3 = {this.props.web3}/>
                                            </div>
                                        </div>
                                });
        return ( 
            <div className="container border">
                {listOfTransactions}
            </div>
         );
    }
}

export default TransactionList;
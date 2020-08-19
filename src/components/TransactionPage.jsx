import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Transaction extends Component {
    
    constructor(props){
        super(props);
        this.state = {}
    }

    async componentDidMount(){
        var entries = [];
        try{
            var txRes = await this.props.web3.eth.getTransaction(this.props.match.params.txHash);
            this.setState(txRes);
        }catch{

        }
    }

    render() { 
        return ( 
            <div id = 'TransactionPage'>
                <div className="navbar navbar-expand-lg bg-light navbar-light" id='navbar'>
                    <p className="navbar-brand">EthContact</p>
                    <div className="navbar-nav">
                        <Link className="nav-link active" to="/">Home</Link>
                    </div>
                </div>
                
                <h2> Transaction - {this.props.match.params.txHash} </h2>
                <div id='result'>
                    <table id='resList' className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Parameter</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Transction Hash</td>
                                <td>{this.state.hash}</td>
                            </tr>
                            <tr>
                                <td>From</td>
                                <td><Link to={()=>'/profile/'+this.state.from}>{this.state.from}</Link></td>
                            </tr>
                            <tr>
                                <td>To</td>
                                <td><Link to={()=>'/profile/'+this.state.to}>{this.state.to}</Link></td>
                            </tr>
                            <tr>
                                <td>Block Hash</td>
                                <td>{this.state.blockHash}</td>
                            </tr>
                            <tr>
                                <td>Block Number</td>
                                <td>{this.state.blockNumber}</td>
                            </tr>
                            <tr>
                                <td>Gas</td>
                                <td>{this.state.gas}</td>
                            </tr>
                            <tr>
                                <td>Gas Price</td>
                                <td>{this.state.gasPrice}</td>
                            </tr>
                            <tr>
                                <td>Nonce</td>
                                <td>{this.state.nonce}</td>
                            </tr>
                            <tr>
                                <td>Value</td>
                                <td>{this.state.value}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
         );
    }
}
 
export default Transaction;
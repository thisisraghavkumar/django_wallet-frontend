import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class TransactionCard extends Component {

    constructor(props){
        super(props);
        this.state = {from: null, to: null, value: null, gasUsed: null};
    }

    async componentDidMount(){
        var tx = await this.props.web3.eth.getTransaction(this.props.tx.hash);
        this.setState({from: tx.from, to: tx.to, value: tx.value, gasUsed: tx.gas});
    }
    render() { 
        return ( 
            <div className="container">
                <p>
                    <Link to={()=> '/transaction/'+this.props.tx.hash}>
                        {this.props.tx.hash}
                    </Link>
                    <br/>
                    <b>({this.props.tx.date.toString()})</b>
                </p>
                <div className='container row'>
                    <div className='container col'>
                        <p>
                            <b>From - </b>
                            <a href={'/profile/'+this.state.from}>
                                {this.state.from}
                            </a>
                        </p>
                    </div>
                    <div className='container col'>
                    <p>
                            <b>To - </b>
                            <a href={'/profile/'+this.state.to}>
                                {this.state.to}
                            </a>
                        </p>
                    </div>
                </div>
                <div className='container row'>
                    <div className='container col'>
                        <p><b>Value - </b> {this.state.value} ethers </p>
                    </div>
                    <div className='container col'>
                        <p><b>Gas Used - </b> {this.state.gasUsed} ethers</p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default TransactionCard;
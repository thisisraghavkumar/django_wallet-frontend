import React, { Component } from 'react';


class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {balance: 0};
    }


    async componentDidMount(){

        try {
            var bal = await this.props.web3.eth.getBalance(this.props.address);
            bal = await this.props.web3.utils.fromWei(bal, "ether");
            this.setState({balance: bal});
        } catch{

        }
    }

    render = function(){
        return(<div id='profile' className='container border'>
            <p>{this.props.address}</p>
            <p><b>Balance</b> : {this.state.balance} <s></s> ethers</p>
        </div>);
    }
}

export default Profile;
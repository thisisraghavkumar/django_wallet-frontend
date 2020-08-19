import React, { Component } from 'react';


class Profile extends Component{
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {balance: 0};
        this._isMounted = false;
    }

    /*
        async componentDidMount(){
            console.log("called Profile.componentDidMount()");
            try {
                console.log(this.props.address);
                var bal = await this.props.web3.eth.getBalance(this.props.address);
                bal = await this.props.web3.utils.fromWei(bal, "ether");
                this.setState({balance: bal});
            } catch(err){
                console.error(err);
            }
        }
    */

    componentDidMount(){
        this._isMounted = true;
    }

    async componentDidUpdate(){
        try {
            var bal = await this.props.web3.eth.getBalance(this.props.address);
            bal = await this.props.web3.utils.fromWei(bal, "ether");
            if(this._isMounted)
                this.setState({balance: bal});
        } catch(err){
            console.error(err);
        }
    }

    componentWillUnmount(){
        this._isMounted = false;
    }
    
    render = function(){
        return(<div id='profile' className='container border'>
            <p>{this.props.address}</p>
            <p><b>Balance</b> : {this.state.balance} <s></s> ethers</p>
        </div>);
    }
}

export default Profile;
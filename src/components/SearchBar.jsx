import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {addr: ""};
    }

    handleAddressChange = (event)=>{
        event.preventDefault();
        this.setState({addr: event.target.value});
    }

    goToProfile = (event)=>{
        event.preventDefault();
        window.location.href = 'profile/'+this.state.addr;
    }

    render() { 
        return ( 
        <div className="container">
            <label name="searchAddress">Address</label>
            <input id="searchAddress" type="text" onChange={this.handleAddressChange}/>
            <button type="submit" onClick={this.goToProfile}>Go</button>
        </div> );
    }
}
 
export default SearchBar;
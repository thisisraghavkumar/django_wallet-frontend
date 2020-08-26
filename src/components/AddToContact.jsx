import React, { Component } from 'react';
import axios from "axios"

class AddToContact extends Component {
    
    constructor(props){
        super(props);
        this.state = {isContact : false};
    }

    createContact = ()=>{
            var name = prompt();
            var saving = { owner: this.props.myAddress, contact_address: this.props.currentAddress, contact_name: name};
            console.log(saving);
            // add api call
            axios.post('http://localhost:8000/api/contact/', {data: saving}).then(
                (resp) => {
                    console.log(resp);
                },
                (err) => {
                    alert("An error occured while saving contact!\n"+err);
                }
            )

    }

    showContact(){
        if(this.props.isContact){
            return null;
        }else{
            return <button type="submit" onClick={this.createContact}>Save contact</button>
        }
    }

    render() {
        return ( 
            <div className="container">
                {this.showContact()}
            </div>
         );
    }
}
 
export default AddToContact;
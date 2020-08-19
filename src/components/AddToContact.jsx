import React, { Component } from 'react';

class AddToContact extends Component {
    
    createContact = ()=>{
            var name = prompt();
            var saving = {owner: this.props.myAddress, contact: this.props.currentAddress, name: name};
            console.log(saving);
            // add api call
    }

    showContact(){
        var isContact = false; // add api call
        if(isContact){
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
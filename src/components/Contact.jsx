import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Contact extends Component {
    render() { 
        return ( 
            <div className="container">
                <p><Link to={()=>'/profile/'+this.props.contact.address}>{this.props.contact.name}</Link></p>
                <p>{this.props.contact.address}</p>
            </div>
         );
    }
}
 
export default Contact;
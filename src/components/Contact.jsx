import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Contact extends Component {
    render() { 
        return ( 
            <div className="container">
                <p><Link to={()=>'/profile/'+this.props.contact.contact_address}>{this.props.contact.contact_name}</Link></p>
                <p>{this.props.contact.contact_address}</p>
            </div>
         );
    }
}
 
export default Contact;
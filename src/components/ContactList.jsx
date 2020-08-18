import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
    render() { 
        var list_of_contacts = this.props.list.map((contact, index)=> {
            return (<div className='container row border'>
                        <div className='container col-1 border-right'>
                            {index}
                        </div>
                        <div className='container col'>
                            <Contact contact={contact}/>
                        </div>     
                    </div>)
        });
        return ( 
            <div>
                {list_of_contacts}
            </div>
         );
    }
}
 
export default ContactList;
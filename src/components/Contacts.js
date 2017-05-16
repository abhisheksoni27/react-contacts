import React, {Component} from 'react';

import Header from './Header';
import ListOfContacts from './ListOfContacts';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <ListOfContacts/>
            </div>
        );
    }
}

export default Contact;
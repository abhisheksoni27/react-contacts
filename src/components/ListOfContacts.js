import React, { Component } from 'react';
import List from './List';
import KeyList from './KeyList';

class ListOfContacts extends Component{
    render(){
        return(<div>
            <KeyList />
            <List />
            </div>
        );
    }
}

export default ListOfContacts;    
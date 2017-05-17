import React, { Component } from 'react';
import List from './List';
import KeyList from './KeyList';
import mapStateToProps from '../util/mapStateToProps.js';
import {
    connect
} from 'react-redux';

class ListOfContacts extends Component{
    render(){
        return(<div>
            <KeyList />
            {this.props.list.map(listItem=>{
                return <List key={listItem.index} value={listItem}/>
            })}
            </div>
        );
    }
}

export default connect(mapStateToProps)(ListOfContacts);    
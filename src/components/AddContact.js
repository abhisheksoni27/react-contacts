import React, {Component} from 'react';
import '../css/AddContact.css';
import {connect} from 'react-redux';

import addContacts from '../redux/actions/contactActions.js';

import mapStateToProps from '../util/mapStateToProps.js';

class AddContact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phoneNumber: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // Check to see which field changed
        if (event.target.id === 'name') {
            this.setState({name: event.target.value});
        } else {
            this.setState({phoneNumber: event.target.value});
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        
        // The New Contact Object
        let newContact = {

            name: this.state.name,
            phoneNumber: this.state.phoneNumber,
            index: this.props.list.length + 1

        };

        let {dispatch} = this.props;
        
        // Send event to Redux Reducer
        dispatch(addContacts(newContact));

        // Going back to the Home (display contacts) page
        // Could also use this.props.rotuer.goBack();
        this.props.router.push('/');
    }

    render() {
        return (
            <div className='FormContainer'>

                <h2>Add</h2>

                <form onSubmit={this.handleSubmit} className='ContactForm'>

                    <label htmlFor='name' className='namelabel'>Name</label>
                    <input
                        type="text"
                        id='name'
                        placeholder='Harry Potter'
                        autoComplete={true}
                        max='25'
                        min='1'
                        value={this.state.name}
                        onChange={this.handleChange}
                        required/>

                    <label htmlFor='mobile' className='mobilelabel'>Mobile Number</label>
                    <input
                        type="tel"
                        id='mobile'
                        placeholder='+91-XXX-XXX-XXX'
                        autoComplete={true}
                        value={this.state.phoneNumber}
                        onChange={this.handleChange}
                        required/>

                    <input type="submit" id='submitAddContact' value="Add Contact"/>

                </form>

            </div>
        );
    }
}

export default connect(mapStateToProps)(AddContact);
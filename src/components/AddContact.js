import React, {Component} from 'react';
import '../css/AddContact.css';
import {connect} from 'react-redux';

import addContacts from '../redux/actions/contactActions.js';

import mapStateToProps from '../util/mapStateToProps.js';

import {getRandomColor, getFontColor} from '../util/color.js';

class AddContact extends Component {

    constructor(props) {
        super(props);

        // Internal State to handle Input
        this.state = {
            name: '',
            phoneNumber: '',
            email: '',
            otherInfo: ''
        };
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handleChange(event) {
        // Check to see which field changed
        let id = event.target.id;
        switch (id) {

            case 'name':
                this.setState({name: event.target.value});
                break;

            case 'email':
                this.setState({email: event.target.value});
                break;

            case 'otherInfo':

                this.setState({otherInfo: event.target.value});
                break;

            case 'mobile':
                this.setState({phoneNumber: event.target.value});
                break;

            default:
                break;
        }

    }

    handleSubmit(event) {
        event.preventDefault();

        let newBackground = getRandomColor();
        let newFontColor = getFontColor(newBackground);

        // The New Contact Object
        let newContact = {

            name: this.state.name,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            otherInfo: this.state.otherInfo,
            index: this.props.list.length + 1,
            background: getRandomColor(),
            font:newFontColor

        };

        let {dispatch} = this.props;

        // Send event to Redux Reducer
        dispatch(addContacts(newContact));

        // Going back to the Home (display contacts) page Could also use
        // this.props.rotuer.goBack();
        this
            .props
            .router
            .push('/');
    }

    render() {
        return (
            <div className='FormContainer'>

                <h2>Add</h2>

                <form onSubmit={this.handleSubmit} className='ContactForm'>

                    <label htmlFor='name' className='nameLabel'>Name</label>
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

                    <label htmlFor='mobile' className='mobileLabel'>Mobile Number</label>
                    <input
                        type="tel"
                        id='mobile'
                        placeholder='000-000-000'
                        autoComplete={true}
                        maxLength="10"
                        pattern="[0-9]{10}"
                        value={this.state.phoneNumber}
                        onChange={this.handleChange}
                        required/>
                    <label htmlFor='email' className='emailLabel'>Email</label>

                    <input
                        type="email"
                        id='email'
                        placeholder='yourName@domain.com'
                        autoComplete={true}
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required/>

                    <label htmlFor='otherInfo' className='otherInfoLabel'>Other Information</label>

                    <input
                        type="text"
                        id='otherInfo'
                        placeholder='Front-End Developer'
                        autoComplete={true}
                        value={this.state.otherInfo}
                        onChange={this.handleChange}/>

                    <input type="submit" id='submitAddContact' value="Add Contact"/>

                </form>

            </div>
        );
    }
}

export default connect(mapStateToProps)(AddContact);
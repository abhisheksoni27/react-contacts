import React, {Component} from 'react';
import '../css/AddContact.css';
import {
    connect
} from 'react-redux';



class AddContact extends Component {

     constructor(props) {
         super(props);
         this.state = {
             name: '',
             phoneNumber:''
         };

         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleChange(event) {
         if (event.target.id === 'name') {
             this.setState({
                 name: event.target.value
             });
         } else {
             this.setState({
                 phoneNumber: event.target.value
             });
         }
     }

     handleSubmit(event) {
         let newContact = {

             name: this.state.name,
             phoneNumber: this.state.phoneNumber

         }
         
         console.log(newContact);

         event.preventDefault();
     }

    render() {
        return (
            <div className='FormContainer'>
            
            <h2>Add</h2>
            
            <form onSubmit={this.handleSubmit} className='ContactForm'>
                
                <label htmlFor='name' className='namelabel'>Name</label>
                <input type="text" id='name' placeholder='Harry Potter' autoComplete={true} max='25' min='1' value={this.state.name} onChange={this.handleChange} required/>
                
                <label htmlFor='mobile' className='mobilelabel' >Mobile Number</label>
                <input type="tel" id='mobile' placeholder='+91-XXX-XXX-XXX' autoComplete={true} value={this.state.phoneNumber} onChange={this.handleChange} required/>

                <input type="submit" id='submitAddContact' value="Add Contact" />
            </form>
            
            </div>
        );
    }
}

export default AddContact;
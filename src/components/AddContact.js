import React, {Component} from 'react';

class AddContact extends Component {

    onclick(){
        
    }

    render() {
        return (
            <div className='AddContactContainer'>
            <h1>Add</h1>
            <form action={this.onclick}></form>
                
                <input type="number" autoComplete={true}/>
                
                <input type="text"/>

                <button onClick={this.onclick}>Submit</button>
            </div>
        );
    }
}

export default AddContact;
import React, {Component} from 'react';
import '../css/KeyList.css';

class List extends Component {
    render() {
        return (
            <div className="Row">
                <div className="Index">S. No.</div>
                <div className="Name">Name</div>
                <div className="MobileNumber">Mobile Number</div>
            </div>
        );
    }
}

export default List;



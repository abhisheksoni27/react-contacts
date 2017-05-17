import React, {Component} from 'react';
import '../css/KeyList.css';

class List extends Component {
    render() {
        return (
            <div className="Row">
                <div className="IndexHeader">#</div>
                <div className="NameHeader">Name</div>
                <div className="MobileNumberHeader">Mobile Number</div>
            </div>
        );
    }
}

export default List;



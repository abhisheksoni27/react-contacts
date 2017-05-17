import React, {Component} from 'react';

class List extends Component {
    render() {
        return (
            <div className="Row">
                <div className="Index">{this.props.value.index}</div>
                <div className="Name">{this.props.value.name}</div>
                <div className="MobileNumber">{this.props.value.phoneNumber}</div>
            </div>
        );
    }
}

export default List;
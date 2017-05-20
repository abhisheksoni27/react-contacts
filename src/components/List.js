import React, {Component} from 'react';

function formatPhoneNumbers(number) {
    // Check if input number is of the form (+CN) XXX-XXX-XXX
    // CN: Two-Digit Country Code
    let matches = number.match(/\+(\d{2})(\d{3})(\d{3})(\d{4})$/);
    return (!matches) ? number : "(+" + matches[1] + ") " + matches[2] + "-" + matches[3] + "-" + matches[4];
}

class List extends Component {
    render() {
        return (
            <div className="Row" style={{background:this.props.value.background, color:this.props.value.font}}>
                <div className="Index">{this.props.value.index}</div>
                <div className="Name">{this.props.value.name}</div>
                <div className="MobileNumber">{formatPhoneNumbers(this.props.value.phoneNumber)}</div>
                <div className="Email">{this.props.value.email}</div>
                <div className="OtherInfo">{this.props.value.otherInfo}</div>
            </div>
        );
    }
}

export default List;
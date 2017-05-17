import React, {Component} from 'react';

function formatPhoneNumbers(number){
  let matches = number.match(/\+(\d{2})(\d{3})(\d{3})(\d{4})$/);
  return (!matches) ? null : "(+" + matches[1] + ") " + matches[2] + "-" + matches[3] + "-" + matches[4];
}

class List extends Component {
    render() {
        return (
            <div className="Row">
                <div className="Index">{this.props.value.index}</div>
                <div className="Name">{this.props.value.name}</div>
                <div className="MobileNumber">{formatPhoneNumbers(this.props.value.phoneNumber)}</div>
            </div>
        );
    }
}

export default List;
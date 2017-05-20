import React, {Component} from 'react';

import '../css/Header.css';
import {Link} from 'react-router';

class Header extends Component {
    render() {
        return (<div>
                    <header className='Header'>
                        <h4 className='Heading'>
                            Contacts
                        </h4>

                    </header>

                        <button className="AddContact"><Link to="/add-contact">+</Link></button>
                    </div>
        );
    }
}

export default Header;
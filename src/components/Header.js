import React, {Component} from 'react';

import '../css/Header.css';
import {Link} from 'react-router';

class Header extends Component {
    render() {
        return (
                <div className='HeaderParent'>
                    <header className='Header'>
                        <h4 className='Heading'>
                            Contacts
                        </h4>

                    </header>
                    <div className='AddContact'>
                        <button><Link className="Link" to="/add-contact">+</Link></button>
                    </div>
                </div>
        );
    }
}

export default Header;
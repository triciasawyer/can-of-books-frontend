import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render() {

        return (
            <>
                <h1>Can of Books</h1>
                <nav>
                    <ul>
                        <li className='home-nav'>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"about"}>About</Link>
                        </li>
                    </ul>
                </nav>
            </>
        );
    }


}


export default Header;

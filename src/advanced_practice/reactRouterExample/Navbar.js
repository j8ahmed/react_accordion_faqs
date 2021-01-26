import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    let style = {
        backgroundColor: 'rgb(220,220,220)',
        maxWidth: '500px'                
    }
    let linkStyle = {
        margin:'1rem',
    }
    return (
        <nav style={style}>
            <ul style={{listStyle:'none', display:'flex', margin:'0', padding:'0'}}>
                <li style={linkStyle}>
                    <Link to='/'>Home</Link>
                </li>
                <li style={linkStyle}>
                    <Link to='/about'>About</Link>
                </li>
                <li style={linkStyle}>
                    <Link to='/portfolio'>Portfolio</Link>
                </li>
                <li style={linkStyle}>
                    <Link to='/people'>People</Link>
                </li>
                <li style={linkStyle}>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
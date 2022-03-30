import React from 'react'
import './Header.css'
import logo from '../favicon.ico'

function Header () {
    return (
        <div className='container'>
            <header className='header'>
                <img src={logo} className="header__img"/>
                <ul className='header__row'>
                    <li>Home</li>
                    <li>Information</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </header>
        </div>
    )
}

export default Header
import React from 'react';
import './Header.sass';

function Header() {
    // const handListAdd = () {
    //     if ()
    // }
    return (
            <header>
                <a href="#" className="logo">
                    <i className="fas fa-utensils">Logo</i>
                </a>
                <div id="menu-bar" className="fas fa-bars"></div>
                <nav className="navbar">
                    <a href="#">Home</a>
                    <a href="#">Speciality</a>
                    <a href="#">Poplulaer</a>
                    <a href="#">Galeriya</a>
                    <a href="#">Reverid</a>
                    <a href="#">Order</a>
                </nav>
            </header>
    );
}

export default Header;
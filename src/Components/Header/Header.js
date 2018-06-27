import React from 'react'
import icon from '../../assets/bee.svg'
import './header.css'
// import Search from '../Search/Search'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img  className="logo-img" alt="logo" src={icon}></img>
                <h1 className="logo-text">Head Count 2.0</h1>
            </div>
        </div>
    )
}

export default Header
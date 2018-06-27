import React from 'react'
import icon from '../../assets/bee.svg'
import './header.css'


const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img  className="logo-img" alt="logo" src={icon}></img>
                <h1 className="logo-text">HeadCount 2.0</h1>
            </div>
        </div>
    )
}

export default Header
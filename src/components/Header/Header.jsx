import React from 'react'
import './Header.css'

function Header() {
  return (
    <>
    <header>
        <div className="container">
            <div className="header-container">
                <a href="#" className='logo'>Logo</a>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                    </ul>
                </nav>
                <button className='btn'>Log in</button>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header

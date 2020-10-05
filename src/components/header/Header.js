import React,{ useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const [ isNavOpen, toggleNav ] = useState(false)

    return (
        <div>
            <header id="header" className="alt">
                <Link  to="home" className="logo"><strong>Forty</strong> <span className="text-white">by SandyRocx</span></Link>
                <nav>
                    <span className="menu-bar text-white" onClick={()=>toggleNav(!isNavOpen)}>Menu</span>
                </nav>
            </header>
            <nav id="menu" className={isNavOpen ? 'show-item' : ''}>
                <div className="inner">
                    <ul className="links text-white">
                        <li onClick={()=>toggleNav(false)}><Link to="/home">Home</Link></li>
                        <li onClick={()=>toggleNav(false)}><Link to="/note">Note</Link></li>
                        <li onClick={()=>toggleNav(false)}><Link to="/about">About</Link></li>
                        <li onClick={()=>toggleNav(false)}><Link to="/contact">Contact</Link></li>
                    </ul>
                    <ul className="actions stacked">
                        <li><button className="button primary fit">Get Started</button></li>
                        <li><button className="button fit">Log In</button></li>
                    </ul>
                </div>
                <span className="close" onClick={()=>toggleNav(!isNavOpen)} >Close</span>
            </nav>
        </div>
    )
}

export default Header

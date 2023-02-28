import React from 'react'
import {Link} from 'react-scroll'
import {useState} from 'react'
import logo from '../assets/images/logo1.png'

function NavBar(){
    
    const[nav, setNav] = useState(false)

    const changeBackgroud = () => {
        if(window.scrollY >= 50){
            setNav(true)
        }
        else{
            setNav(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to="main" className='logo' >
                <img src={logo} alt='' />
            </Link>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><Link to="#"Header></Link></li>
            </ul>
        </nav>
    )
}

export default NavBar
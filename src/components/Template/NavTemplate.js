import React from 'react'
import { Home, Users } from 'react-feather'
import { Link } from 'react-router-dom'
import './NavTemplate.css'

const NavTemplate = () => {
    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <Home className="feather" size={16} /> Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/users">
                        <Users className="feather" size={16} /> Users
                    </Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavTemplate
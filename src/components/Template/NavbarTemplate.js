import React from 'react'
import { Link } from 'react-router-dom'
import './NavbarTemplate.css'

const NavbarTemplate = () => {
    return (
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/">Users CRUD</Link>
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                <Link className="nav-link" to="/logout">Sign out</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavbarTemplate
import React from 'react'
import NavbarTemplate from './NavbarTemplate'
import NavTemplate from './NavTemplate'

const MainTemplate = ({ children }) => {
    return (
        <div>
            <NavbarTemplate />
            <NavTemplate />
            <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
                { children }
            </div>
        </div>
    )
}

export default MainTemplate
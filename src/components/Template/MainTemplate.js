import React from 'react'
import NavbarTemplate from './NavbarTemplate'
import NavTemplate from './NavTemplate'

const MainTemplate = ({ onClick, children }) => {
    return (
        <div>
            <NavbarTemplate onClick={onClick} />
            <NavTemplate />
            <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
                { children }
            </div>
        </div>
    )
}

export default MainTemplate
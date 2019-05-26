import React from 'react'
import Search from './Search';

const Navbar = ({value,onChange}) => {
    return (
        <nav className="navbar is-warning">
                <div className="navbar-brand navbar-start">
                    <a className="navbar-item" href="/">
                        Meteorites
                    </a>
                </div>
                <div className="navbar-end">
                    <Search value={value} onChange={onChange} />
                </div>
        </nav>
    )
}

export default Navbar

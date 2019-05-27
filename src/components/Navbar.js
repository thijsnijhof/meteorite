import React from 'react'
import Search from './Search';

const Navbar = ({value,onChange,onSearch, displayError, charError}) => {
    return (
        <nav className="navbar is-warning is-flex-touch">
                <div className="navbar-brand navbar-start is-flex-touch">
                    <a className="navbar-item" href="/">
                        Meteorites
                    </a>
                </div>
                <div className="navbar-end">
                    {{ charError } ? <div className="navbar-item">{charError}</div> : null}
                    <Search value={value} onChange={onChange} />
                    <div className="navbar-item">
                        <button 
                            className="button is-primary is-inverted" 
                            onClick={onSearch}
                            disabled = {!charError ? false : true}
                        >Search</button>
                    </div>
                </div>
        </nav>
    )
}

export default Navbar

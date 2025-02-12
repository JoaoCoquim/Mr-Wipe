import React from 'react'
import './NavBar.css'

function NavBar() {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <a href="/" className="navbar-logo">
                    <img src="/img/MR.WIPE.png" alt="Logo" />
                </a>

                <div className="nav-items">
                    <a href="#">Limpeza Doméstica</a>
                    <a href="#">Limpeza Automotiva</a>
                    <a href="#">Contato</a>
                </div>

                <button className="collaborator">Seja um Colaborador</button>
            </nav>

            <div className="flag-container">
                <img className="pt-flag" src="/img/pt-flag.png" alt="Portugal Flag" />
                <div className="dropdown-icon">
                    <img src="/img/Vector.png" alt="Dropdown icon" />
                </div>
            </div>
        </div>
    )
}

export default NavBar

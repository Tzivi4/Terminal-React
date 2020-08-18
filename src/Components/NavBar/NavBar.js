import React from 'react'
import '../NavBar/NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = (props) => (
    <nav className="nav navbar">
        <div className="container-sm p-0 d-flex justify-content-center">
            <div class="navbar-brand navbar-brand-centered">
                Terminal
            </div>
        </div>
    </nav>
)

export default NavBar
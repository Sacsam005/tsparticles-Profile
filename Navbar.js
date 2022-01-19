import React, { useState } from 'react'
import logo from '../img/logo.png'
import './Navbar.css'
import { Fade } from 'react-awesome-reveal';

export default function Navbar() {
    const [click, setClick] = useState(true)

    const handleClick = () => {
        setClick(!click);
    }

    return (
        <>
            <Fade duration={2500}>
                <nav className="navbar navbar-expand-lg navbar-muted bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img className="logo" src={logo} alt="Logo" style={{ width: "15rem" }} />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleClick}>
                            <div className={click ? "fas fa-bars" : "fas fa-times"}></div>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0" >
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About Me</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#experience">Experience</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Fade>
        </>
    )
}

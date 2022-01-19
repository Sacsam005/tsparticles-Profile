import React from 'react'
import Typed from 'react-typed'
import './Header.css'
import { Fade } from 'react-awesome-reveal'


export default function Header() {
    return (
        <>
            <div className="header-wrapper" id="home">
                <div className="main-info">
                    <Fade top duration={2000} cascade>
                        <Typed
                            className="typed-text"
                            strings={["Regulatory Program Supervisor at HyLife", "Teaching Assistant at MSU", "Quality Assurance Laboratory Technician"]}
                            typeSpeed={40}
                            backSpeed={30}
                            loop
                        />
                    </Fade>

                </div>
            </div>
        </>
    )
}

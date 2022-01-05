import React from 'react'
import Typed from 'react-typed'
import './Header.css'
import Fade from 'react-reveal/Fade'


export default function Header() {
    return (
        <>
            <Fade top duration={2000}>
                <div className="header-wrapper" id="home">
                    <div className="main-info">
                        <Typed
                            className="typed-text"
                            strings={["Regulatory Program Supervisor at HyLife", "Teaching Assistant at MSU", "Quality Assurance Laboratory Technician"]}
                            typeSpeed={40}
                            backSpeed={30}
                            loop
                        />
                    </div>
                </div>
            </Fade>
        </>
    )
}

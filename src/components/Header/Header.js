import React from 'react'
import Typed from 'react-typed'
import './Header.css'
export default function Header() {
    return (
        <>
            <div className="header-wrapper">
                {/* <img src={require("../img/background.jpg")} alt="" /> */}
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
        </>
    )
}

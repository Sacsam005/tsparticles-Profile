import React from 'react'
import './Section.css'

export default function Section() {
    return (
        <>
            <div className="main-section">
                <h2><span>Experiences</span></h2>
                <h6 className="text-center">Skilled in Environmental regulations, assessment and laboratory techniques.</h6>

                <div className="section">
                    <div className="section-1">
                        <ul className="item-links" >

                            <li className="item">
                                <div className="years">Aug 2017-May2020</div>
                                <div className="header">Graduate teaching Assistant</div>
                                <div className="content">Minnesota State University</div>
                            </li>


                            <li className="item">
                                <div className="years">May 2020-Aug 2020</div>
                                <div className="header">Quality Assurance Lab Technician</div>
                                <div className="content">Comfrey Farm Prime Pork LLC</div>
                            </li>
                            <li className="item">
                                <div className="years">Aug 2020-Present</div>
                                <div className="header">Regulatory Program Supervisor</div>
                                <div className="content">HyLife</div>
                            </li>
                        </ul>
                    </div>
                    <div className="section-2">
                        <img src={require('../img/s1.JPG')} alt="Pic" />
                        <img src={require('../img/s2.JPG')} alt="Pic" />
                        <img src={require('../img/img2.JPG')} alt="Pic" />
                        <img src={require('../img/s4.JPG')} alt="Pic" />
                        <img src={require('../img/s3.JPG')} alt="Pic" />
                    </div>
                </div>
            </div>

            <div className="section-4">
                <h2><span>Affiliation Partners</span></h2>
                <div className="logo-section">
                    <img src={require('../img/logo1.png')} alt="Logo" style={{ width: "22rem", height: "5rem" }} />
                    <img src={require('../img/logo2.png')} alt="Logo" style={{ width: "8rem" }} />
                    <img src={require('../img/logo3.jpg')} alt="Logo" style={{ width: "18rem" }} />
                </div>
            </div>

        </>
    )
}

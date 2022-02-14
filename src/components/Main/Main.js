import React from 'react'
import './Main.css'
import { Zoom, Fade } from 'react-awesome-reveal'


export default function Main() {
    return (
        <>
            <div className="container">
                <Fade duration={6000}>
                    <h1 className='text-center' id="about">Environmental toxicology graduate with a demonstrated history of working in the higher education research field.</h1>
                </Fade>
                <div className="card-section">
                    <Fade duration={5000}>
                        <h2 ><span>About Me</span></h2>
                    </Fade>

                    <div className="row">
                        <Zoom duration={2500} cascade>
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={require('../img/img1.JPG')} className="card-img-top" alt="Profile" />
                                    <div className="card-body text-center">
                                        <h1 className="card-title">What I like</h1>
                                        <ul>
                                            <li>Food & Travel</li>
                                            <li>Bible & History</li>
                                            <li>Camping</li>
                                        </ul>
                                        <i className="far fa-heart fa-2x" style={{ color: "red" }}></i>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                        <Zoom duration={2500} cascade>
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={require('../img/img3.JPG')} className="card-img-top" alt="Profile" />
                                    <div className="card-body text-center">
                                        <h1 className="card-title">Who I am</h1>
                                        <ul>
                                            <li>Major: Environmental Science</li>
                                            <li>Degree: Masters</li>
                                            <li>University: Minnesota State University</li>
                                            <li>CGPA: 3.9</li>
                                        </ul>
                                        👩🏻‍💻
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                        <Zoom duration={2500} cascade>
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={require('../img/s5.JPG')} className="card-img-top" alt="Profile" />
                                    <div className="card-body text-center">
                                        <h1 className="card-title">What I can do</h1>
                                        <ul>
                                            <li>Lead Improvement Team</li>
                                            <li>Manage food safety system</li>
                                            <li>Review trends</li>
                                        </ul>
                                        <i className="fab fa-servicestack fa-2x" style={{ color: "cyan" }}></i>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </div>
        </>
    )
}

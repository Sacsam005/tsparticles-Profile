import React from 'react'
import './Main.css'
import Section from './Section'

export default function Main() {
    return (
        <>
            <div className="container">
                <h1 className='text-center'>Environmental toxicology graduate with a demonstrated history of working in the higher education research field.</h1>
                <div className="card-section">
                    <h2><span>About Me</span></h2>

                    <div className="row">
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
                    </div>
                </div>
            </div>
            <Section />
        </>
    )
}

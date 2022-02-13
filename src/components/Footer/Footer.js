import React from 'react'
import './Footer.css'
import { Fade } from 'react-awesome-reveal';


export default function Footer() {
    return (
        <>
            <Fade down duration={5000}>
                <div className="footer-section">
                    <div className="footer-content">
                        <div className="footer-sub-content">
                            <h6>Connect with me</h6>

                            <ul className="footer-item">
                                <a href="https://linkedin.com/in/bina-rai-502745162" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-2x"></i></a>
                                <i className="fab fa-twitter fa-2x"></i>
                                <a href="https://www.instagram.com/bina._.rai/"><i className="fab fa-instagram fa-2x"></i></a>
                                <a href="https://www.facebook.com/profile.php?id=100016910795790"><i className="fab fa-facebook fa-2x"></i></a>
                                <a href="mailto:binarai532@gmail.com"><i className="far fa-envelope fa-2x"></i></a>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-content">
                        <img className="logo" src={require('../img/logo.png')} alt="" style={{ width: "200px", height: "100px" }} />
                    </div>

                    <div className="footer-content" id="sitemap">
                        <h6>SiteMap | </h6>
                        <ul>
                            <li className="footer-links"><a href="#home">Home</a></li>
                            <li className="footer-links"><a href="#about">About Me</a></li>
                            <li className="footer-links"><a href="#experience">Experiences</a></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright_text">
                    <h6 class="">© 2021 | Bina Rai Samal Magar </h6>
                </div>
            </Fade>
        </>
    )
}

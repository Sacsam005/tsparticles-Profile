import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div>
            <div className="footer-section">
                <div className="footer-content">
                    <div className="footer-sub-content">
                        <h6>© 2021 | Bina Rai Samal Magar </h6>

                        <ul className="footer-item">
                            <i className="fab fa-facebook fa-2x"></i>
                            <i className="fab fa-twitter fa-2x"></i>
                            <i className="fab fa-instagram fa-2x"></i>
                            <i className="fab fa-linkedin fa-2x"></i>
                        </ul>
                    </div>
                </div>

                <div className="footer-content">
                    <img className="logo" src={require('../img/logo.png')} alt="" style={{ width: "200px", height: "100px" }} />
                </div>

                <div className="footer-content" id="sitemap">
                    <h6>SiteMap | </h6>
                    <ul>
                        <li className="footer-links"><a href="/">Home</a></li>
                        <li className="footer-links"><a href="/">About Me</a></li>
                        <li className="footer-links"><a href="/">Experiences</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

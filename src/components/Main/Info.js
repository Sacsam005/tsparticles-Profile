import React from 'react';
import './Info.css';
import { Slide, Fade } from 'react-awesome-reveal';

const Info = () => {
    return (
        <>
            <main className="main-grid">
                <img src={require('../img/ex1.jpg')} alt="Sample" />
                <Slide duration={3000}>
                    <div className="box">
                        <Fade duration={5000} >
                            <div className="text-box">
                                <span className="dots"></span>
                                <span className="dots"></span>
                                <span className="dots"></span>
                                <h3><a href="https://link.springer.com/article/10.1007/s11356-019-07088-5" target="_blank" rel="noopener"><marquee loop="-1" scrollamount="5" width="100%"> Environmentally relevant exposures of male mice to carbendazim and thiram cause persistent genotoxicity in male mice</marquee>
                                    <span>Click to read the article...</span></a></h3>
                            </div>
                        </Fade>
                    </div>
                </Slide >
                <img src={require('../img/ex2.JPG')} alt="Sample" />
            </main>


        </>
    )
};

export default Info;


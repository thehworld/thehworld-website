import React from 'react';
import home from "../assets/images/home.png"
import { Container } from 'react-bootstrap';
import About from '../component/About';
import Ingredient from '../component/Ingredient';
import { Helmet } from 'react-helmet';


function Home() {
    return(
        <div>
        <div >
        <Helmet>
                <meta charSet="utf-8" />
                <title>The H World - Home</title>
                <meta name="description" content="Innovative hair & skin care products made out of nature." />
           
            </Helmet>
            <Container className="slant-container">
                <div className='cont-in-sc'>
                    <div className='cont-in-sc-img'>
                        <img src={home} className="home-img" />
                    </div>
                    <div className='cont-in-sc-content'>
                        <h1 className="home-title MonteserratBold">
                            EVERYDAY <br/ >
                            ENHANCEMENT <br />
                            FOR YOUR HAIR <br />
                        </h1>
                        <p className="home-sub GelionMedium">
                        Herbal Hair Styling Gel
                        </p>
                        <button className='header-main-btn'>
                        About Us
                        </button>
                    </div>
                </div>
            </Container>
            
        </div>
        <div style={{marginTop: "5rem", minHeight: "60vh"}}>
        <Container >
            <About />
        </Container>
        </div>
        <div style={{marginBottom: "60px", marginTop: "60px"}}>
            <Ingredient />
        </div>
        </div>
    )
}

export default Home
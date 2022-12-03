import React from 'react';
import home from "../assets/images/home.png"
import { Container } from 'react-bootstrap';
import About from '../component/About';
import Ingredient from '../component/Ingredient';

function Home() {
    return(
        <div>
        <div >
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
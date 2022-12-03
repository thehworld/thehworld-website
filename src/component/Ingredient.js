import React from "react";
import { Container } from "react-bootstrap";
import home from "../assets/images/home.png"
import one from "../assets/images/1.png";
import two from "../assets/images/2.png";
import three from "../assets/images/3.png";


function Ingredient() {
    return(
        <Container className="slant-container">
                <h1 className="MonteserratBold ing-main-title">HERBAL INGREDIENTS</h1>
                <div className='cont-ing-sc' style={{padding: "40px"}}>
                    <div className='cont-in-sc-img'>
                        <img src={one} className="ing-img" />
                        <h2 className="ing-sub Monteserrat">Moistures scalp & Reduce dandruff</h2>
                    </div>
                    <div className='cont-in-sc-img'>
                        <img src={two} className="ing-img" />
                        <h2 className="ing-sub Monteserrat">Prevents breakage & Increase hair health</h2>
                    </div>
                    <div className='cont-in-sc-img'>
                        <img src={three} className="ing-img" />
                        <h2 className="ing-sub Monteserrat">Make hair look Shinny & Soft</h2>
                    </div>
                   
                </div>
            </Container>
    )
}

export default Ingredient
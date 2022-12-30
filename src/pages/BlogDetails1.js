import React from "react";
import { Container } from "react-bootstrap";
import blogs from "../assets/images/blogs/blog1.webp"
import { MDBCardText, MDBCardTitle } from "mdb-react-ui-kit";
import blogsimg from "../assets/images/blogs/blog1.webp"

function BlogDetails1(){
    return(
        <>
        <div className="blog--header" style={{backgroundImage: `url(${blogsimg})`}}>
            <MDBCardTitle className='MonteserratBold  blogdetails-card-title'>What Causes Hair Loss and How Can It Be Controlled?</MDBCardTitle>
        </div>
        <Container>
            <div className="blog-details-cardcontent">
            {/* <h2 style={{paddingBottom: "1rem"}}>Content heading</h2> */}
            It's unpleasant to frequently see too many hair strands in your comb. Even though losing a few strands each day is natural, it can become worrying if the quantity rises consistently. Most people who experience such problems worry about things like "why does hair fall happen?" or "what causes excessive hair fall?" In today's blog post, we're going to look for some solutions to these problems.

Alopecia, the widely discussed cause of significant hair loss, is a complex disorder that can be localized or diffused, according to experts. Localized hair loss occurs when someone finds their scalp losing a lot of hair. However, in other cases, excessive hair breakage starts off as a gradual process after hair thinning first appears. While the majority of illnesses are treatable, some might potentially result in permanent hair loss.

            </div>
            <div className='blog-imageside'>
            <img src={blogs} style={{width:"100%", height: "50vh"}}/>
            <div >
            <h2 style={{paddingBottom: "1rem"}}>Why is maintaining a proper hair care routine important?</h2>
            Nearly everything you'll require for a hair care routine is listed below:

1. Hair oil: Head massages have therapeutic advantages and can help prevent hair loss. To stop hair loss, warm the H World Herbal Hair oil and then apply it from the scalp to the tips of the strands.

2. Shampoo and conditioner: Cleaning your hair with a mild and nourishing shampoo is just as important as oiling it. Regular hygiene maintenance is key to having a healthy scalp.
Using shampoo and conditioner from the hair care regimen can yield better effects when used regularly because you are applying the same ingredients.



            </div>
            </div>
            <div className="blog-details-cardcontent">
            {/* <h2 style={{paddingBottom: "1rem"}}>Content heading</h2> */}
            3. Hair Mask: You should use a hair mask once a week to give your hair the love, care, and attention it requires. A hair mask is a highly effective mask that is rich in oils and butter and can immediately provide your hair with the nutrients it needs. Depending on your hair type, you may apply it at least twice a month to give your hair the shine and beauty it requires and to enjoy a spa-like experience at home.

– A massage with H World Herbal hair oil increases blood flow to the scalp, aiding in deep exfoliation and promoting healthy hair development. If you oil your hair frequently, it will face less stress and damage. It would also soften the strands, keep them from drying out, and give them a glossy appearance.
            </div>
            
        </Container>
        </>
    )
}

export default BlogDetails1
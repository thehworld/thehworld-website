import React from "react";
import { Container } from "react-bootstrap";
import blogs from "../assets/images/blogs/blog2.webp"
import { MDBCardText, MDBCardTitle } from "mdb-react-ui-kit";
import blogsimg from "../assets/images/blogs/blog2.webp"

function BlogDetails2(){
    return(
        <>
        <div className="blog--header" style={{backgroundImage: `url(${blogsimg})`}}>
            <MDBCardTitle className='MonteserratBold  blogdetails-card-title'>Why is maintaining a proper hair care routine important?</MDBCardTitle>
        </div>
        <Container>
            <div className="blog-details-cardcontent">
            {/* <h2 style={{paddingBottom: "1rem"}}>Content heading</h2> */}
            You want to keep your hair healthy, shiny, and thick since it is your crowning beauty. The trick? traditional hair oil. That's correct; there is just one time-tested solution that has been used for ages to produce strong, beautiful hair. We've created a short guide to assist you in finding some of the top hair oils for quicker hair development because of this. They will also assist you in giving your hair more lustre, thickness, density, and bounce.

Hair oil is a need in your hair care routine, regardless of whether your hair is dry or oily. How much oil you apply and how often depends on the type of hair you have. The hair oil you decide on will also. Each oil has a special blend of moisturising and nourishing components that successfully address various problems.

Strengthening follicles, enhancing blood circulation, and enhancing scalp health are just a few of the benefits that H World Herbal hair oil provide for treating split ends, thick or curly hair (especially in men), and split ends. Coconut oil is a great ingredient for people who frequently bleach their hair or use hot equipment because it is particularly good at preventing damage.

Along with coconut, other fantastic possibilities to think about include grapeseed, argan, olive, castor, almond, jojoba, bergamot, avocado, lavender, rosemary, tea tree, ylang-ylang, Amla, onion, and peppermint. Avoid parabens, sulphates, and oils with artificial smells.

            </div>
            <div className='blog-imageside'>
            <img src={blogs} style={{width:"100%", height: "50vh"}}/>
            <div >
            <h2 style={{paddingBottom: "1rem"}}>Which oils promote hair growth?</h2>
            Numerous hair oils aid in hair growth. Castor, argan, coconut, onion, olive, almond, Amla, jojoba, grapeseed, and peppermint oils are included in this list. You can also look at the traditional Ayurvedic recipes that recommend Baheda, Bhringraj, and Brahmi as effective oils for hair development. These components can be found in THE H WORLDS HERBAL HAIR OIL.
            </div>
            </div>
            <div className="blog-details-cardcontent">
            <h2 style={{paddingBottom: "1rem"}}>Which oil is the best in India for thickening and growing hair?</h2>

            Thus, a range of elements like nutrition, sleeping habits, stress and pollution levels, hair care routines, etc., influence the type and structure of our hair. Therefore, it is advised to choose one that adequately complements the texture of the hair and contains safe, toxic-free substances.
You can select the best hair oil in India, H World Herbal hair oil, which encourages quicker hair development while providing your hair with the right nutrition

            </div>
            
        </Container>
        </>
    )
}

export default BlogDetails2
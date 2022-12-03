import { MDBCardText, MDBCardTitle } from "mdb-react-ui-kit";
import React from "react";
import blogs from "../assets/images/blogs.jpg"

function BlogHeader() {
    return(
        <div>
        <div className="blog--header" style={{backgroundImage: `url(${blogs})`}}>
        <MDBCardTitle className='MonteserratBold  blogdetails-card-title'>Blog title</MDBCardTitle>
        </div>
        </div>
    )
}

export default BlogHeader;
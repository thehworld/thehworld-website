import React from "react";
import { Container } from "react-bootstrap";
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Contact() {
    return(
        <Container>
            <div className="contact-container">
                <div className="contact-form">
                    <div className="contact-form-in">
                    <form>
                        <MDBRow className='mb-4'>
                            <MDBCol>
                            <MDBInput id='form6Example1' label='First name' />
                            </MDBCol>
                            <MDBCol>
                            <MDBInput id='form6Example2' label='Last name' />
                            </MDBCol>
                        </MDBRow>

                        <MDBInput wrapperClass='mb-4' id='form6Example4' label='Address' />
                        <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' />

                        <MDBInput wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Message' />

                       

                        <MDBBtn className='mb-4' type='submit' block style={{backgroundColor: "#4FB23A"}}>
                            Send Message
                        </MDBBtn>
                        </form>
                    </div>
                </div>
                <div className="contact-details">
                    <div className="contact-details-in">
                    <div className="contact-box">
                    <h3 className="MonteserratBold">
                        Address:
                    </h3>
                    <h5 className="GelionMedium">
                    R.S puram, Coimbatore, Tamil Nadu
                    </h5>
                    <h3 className="MonteserratBold" style={{marginTop: "2rem"}}>
                        Email:
                    </h3>
                    <h5 className="GelionMedium">
                    thehworld@gmail.com
                    </h5>
                    <h3 className="MonteserratBold" style={{marginTop: "2rem"}}>
                        phone no:
                    </h3>
                    <h5 className=" GelionMedium">
                    95959595959, 95959595959
                    </h5>
                    </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}


export default Contact;
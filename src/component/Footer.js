import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from "../assets/images/logo.png"

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{backgroundColor: "#4FB23A", color: "#fff"}}>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a> */}
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a> */}
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <img src={logo} style={{width:"120px"}} />
                
              </h6>
              <p>
                about the company.  about the company. about the company. about the company. about the company.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#' className='text-reset'>
                  Hair gel
                </a>
              </p>
              <p>
                <a href='#' className='text-reset'>
                  Night Mask
                </a>
              </p>
              <p>
                <a href='#' className='text-reset'>
                  hair serum
                </a>
              </p>
              
            </MDBCol>

            {/* <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol> */}

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                R.S puram, Coimbatore, Tamil Nadu
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                thehworld@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 98989898989
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +91 95959595959
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 Monteserrat ' style={{ backgroundColor: "#fff", color: "#7F8487" }}>
        © 2022 Copyright
        <a className='text-reset fw-bold' href='' style={{marginLeft: "8px"}}>
          The H World 
        </a>
        <div>
        powered by
        <a className='text-reset fw-bold' href='https://thedottech.in' style={{marginLeft: "8px"}}>
          the DotTech 
        </a>
        </div>
      </div>
    </MDBFooter>
  );
}
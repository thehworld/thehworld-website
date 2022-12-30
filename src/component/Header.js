

import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import logo from "../assets/images/logo.png"

export default function Header() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light' sticky>
      <MDBContainer >
        
        <MDBNavbarBrand href='/'><img src={logo} className="header-logo" /></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
            
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/' className="nav-links GelionMedium">
                HOME
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/blogs' className="nav-links GelionMedium">
                BLOG
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/contact' className="nav-links GelionMedium  ">
                CONTACT
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle style={{background: "none", color: "#131313", boxShadow: "none", border: "none", marginLeft: "15px"}} className="nav-links GelionMedium" role='button'>
                  ACCESSORIES
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem className='GelionMedium drop-navlinks' link href="/accessories/stools&trolley">Stools & Trolley</MDBDropdownItem>
                  <MDBDropdownItem className='GelionMedium drop-navlinks' link href="/accessories/regular_salon_chair">Regular Salon Chair</MDBDropdownItem>
                  <MDBDropdownItem className='GelionMedium drop-navlinks' link href="/accessories/fancy_studio_salon_chair">Fancy Studio Salon Chair</MDBDropdownItem>
                  <MDBDropdownItem className='GelionMedium drop-navlinks' link href="/accessories/imported_salon_chair">Imported Salon Chair</MDBDropdownItem>
                  <MDBDropdownItem className='GelionMedium drop-navlinks' link href="/accessories/styling_unisex_salon_chair">Styling Unisex Salon Chair</MDBDropdownItem>
                  <MDBDropdownItem className='GelionMedium drop-navlinks' link href="/accessories/manicure_and_pedicure">Manicure and Pedicure Chair Massager</MDBDropdownItem>
                  <MDBDropdownItem className='GelionMedium drop-navlinks' link href="/accessories/hair_wash_station">Hair Wash Station</MDBDropdownItem>
                  <MDBDropdownItem className='GelionMedium drop-navlinks' link href="/accessories/massagingbeds">Massaging/Facial Beds</MDBDropdownItem>
                  <MDBDropdownItem className='GelionMedium drop-navlinks' link href="/accessories/jacuzzitub">Jacuzzi Tub</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
           
            

          </MDBNavbarNav>

           
          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
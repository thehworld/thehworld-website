import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';
import blogs from "../assets/images/blogs.jpg"
import posts from '../data/blogCards';
import { Link } from 'react-router-dom';

export default function Blogs() {
  return (
    <Container>
    <div className='blog-container'>
    
    {posts.map((post, index) => {
      return(
      <MDBCard className="blog-card" key={index}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={post.img} fluid alt='...'  />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody >
        <MDBCardTitle className='MonteserratBold  blog-card-title' >{post.title}</MDBCardTitle>
        <MDBCardText className='Monteserrat blog-card-content'>
          {post.content}
        </MDBCardText>
        <MDBBtn href= {`/blogdetails/${post.route}`} style={{backgroundColor: "#4FB23A"}}>View blog</MDBBtn>
      </MDBCardBody>
    </MDBCard>)
    })}
    
    
    {/* <MDBCard className="blog-card">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={blogs} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className='MonteserratBold  blog-card-title'>Blog title</MDBCardTitle>
        <MDBCardText className='Monteserrat blog-card-content'>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='/blogdetails' style={{backgroundColor: "#4FB23A"}}>View blog</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard className="blog-card">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={blogs} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className='MonteserratBold  blog-card-title'>Blog title</MDBCardTitle>
        <MDBCardText className='Monteserrat blog-card-content'>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='/blogdetails ' style={{backgroundColor: "#4FB23A"}}>View blog</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard className="blog-card">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={blogs} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className='MonteserratBold  blog-card-title'>Blog title</MDBCardTitle>
        <MDBCardText className='Monteserrat blog-card-content'>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='/blogdetails' style={{backgroundColor: "#4FB23A"}}>View blog</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard className="blog-card">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={blogs} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className='MonteserratBold  blog-card-title'>Blog title</MDBCardTitle>
        <MDBCardText className='Monteserrat blog-card-content'>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='/blogdetails' style={{backgroundColor: "#4FB23A"}}>View blog</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard className="blog-card">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={blogs} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className='MonteserratBold  blog-card-title'>Blog title</MDBCardTitle>
        <MDBCardText className='Monteserrat blog-card-content'>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='/blogdetails' style={{backgroundColor: "#4FB23A"}}>View blog</MDBBtn>
      </MDBCardBody>
    </MDBCard> */}
    </div>
    </Container>
  );
}
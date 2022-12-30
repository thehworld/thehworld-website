import React, {useEffect, useState} from "react";
import acchome from "../assets/images/acchome.webp"
import Blogs from "./Blogs";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
import blogsimg from "../assets/images/blogs.jpg"
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";


function Accessories() {

    const[accessoriesType, setAccessoriesType] = useState("");

    useEffect(() => {
        if(id){
            switch(id){

                case "regular_salon_chair":
                    setAccessoriesType({folderName: "regularchair", title: "REGULAR SALON CHAIR"});
                break;

                case "stools&trolley":
                    setAccessoriesType({folderName: "stoolsandtrolley", title: "STOOLS & TROLLEY"});
                break;
                case "fancy_studio_salon_chair":
                    setAccessoriesType({folderName: "fancystudio", title: "FANCY STUDIO SALON CHAIR"});
                break;
                case "imported_salon_chair":
                    setAccessoriesType({folderName: "importedchair", title: "IMPORTED SALON CHAIR"});
                break;
                case "styling_unisex_salon_chair":
                    setAccessoriesType({folderName: "stylingchair", title: "STYLING UNISEX SALON CHAIR"});
                break;
                case "manicure_and_pedicure":
                    setAccessoriesType({folderName: "manicure", title: "MANICURE AND PEDICURE CHAIR MASSAGER"});
                break;
                case "hair_wash_station":
                    setAccessoriesType({folderName: "hairwash", title: "HAIR WASH STATION"});
                break;
                case "massagingbeds":
                    setAccessoriesType({folderName: "beds", title: "MASSAGING / FACIAL BEDS"});
                break;
                case "jacuzzitub":
                    setAccessoriesType({folderName: "jacuzzi", title: "JACUZZI TUB"});
                break;
            }
        }
    }, [])

    const { id } = useParams();

    const renderAccessories = (index) => {
        if(index && accessoriesType)
        try{
            return(
                <MDBCard className="blog-card" key={index}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={require(`../assets/images/accessories/${accessoriesType.folderName}/${index}.webp`)} fluid alt='...'  />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                    </MDBRipple>
                </MDBCard>
            )
        }
        catch(err){
            return(
                <></>
            )
        }
    }

    return(
        <Container>
        
        <div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "10px"}}>
            <div className="MonteserratBold acc-heading">{accessoriesType.title}</div>
            </div>
           
            <div className="acc-img-grid">
            
            {accessoriesType && [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].map((index) => (
                renderAccessories(index)
            ))}
            
            
            </div>
        </div>
        
        </Container>
    )
}

export default Accessories;
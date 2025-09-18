
 import { FaCalendarCheck, FaUserMd} from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import Carousel from 'react-bootstrap/Carousel';
import ban1 from "../images/banner2.avif";
import ban2 from "../images/image1.avif";
import ban3 from "../images/syrup.avif";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import BackendURL from '../util/BackEndUrl';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import img1 from "../images/banner.webp"

const Home=()=>{
  const[mydata,setMydata]=useState([]);
  const navigate=useNavigate();
  const getData=async()=>{
    let api=`${BackendURL}/doctor/getdoctor`;
    try {
      const res=await axios.get(api);
      console.log(res.data);
      setMydata(res.data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getData();
  },[])
  const list=mydata.map((item)=>{
    return(
      <>
      <Card id="card">
      <Card.Img variant="top" src={item.image} height="270" />
      <Card.Body>
        <Card.Title><span className='span'>Dr.:{item.doctorname}</span> </Card.Title>
        <Card.Text>
          Speciality:{item.speciality}<br/>
          City:{item.city}
        </Card.Text>
        <Button variant="primary" onClick={()=>{navigate(`/getappoint/${item._id}`)}} className="cartbtn">Get Appointment</Button>
      </Card.Body>
    </Card>
      </>
    )
  })
    return(
        <>

         <div className="container">
    
  <div className="text">
    <h1>Book Your Doctor Appointment Online</h1>
    <p>
      Get access to trusted healthcare at your fingertips. Book appointments 
      with experienced doctors, consult online, and manage your health records 
      all in one place. Fast, easy, and secure for you and your family.
    </p>
    <button>Book Appointment</button>
  </div>

  <div className="image">
    <img src={img1} alt="Doctor appointment illustration" />
  </div>

</div>

           <Carousel id="outlet">
      <Carousel.Item>
         <img src={ban1}  width="100%" height="400"  / >

        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img src={ban2}  width="100%" height="400"  / >
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={ban3}  width="100%" height="400"  / >
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  {/*===============================================================================================================================================*/}
<div id="icon">
  <div id="box1">
    <h3><FaCalendarCheck id="icons" /> EASY APPOINTMENT</h3>
    <p>Book your doctor appointment online within minutes, anytime and anywhere.</p>
  </div>

  <div>
    <h3><FaUserMd id="icons" /> EXPERIENCED DOCTORS</h3>
    <p>Consult with qualified and trusted healthcare professionals across specialties.</p>
  </div>

  <div>
    <h3><MdLocalOffer id="icons" /> AFFORDABLE PACKAGES</h3>
    <p>Access affordable health checkups and treatment plans for you and your family.</p>
  </div>

  <div>
    <h3><RiSecurePaymentFill id="icons" /> SECURE BOOKINGS</h3>
    <p>Enjoy safe and secure online payments with guaranteed appointment confirmation.</p>
  </div>
</div>

      <h3 className='h33'> Top Doctors </h3>

      <div id="docList">
        {list}
      </div>
        </>
    )
}

export default Home;
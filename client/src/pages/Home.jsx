import Carousel from 'react-bootstrap/Carousel';
import ban1 from "../images/ban1.jpeg";
import ban2 from "../images/ban2.jpg";
import ban3 from "../images/ban3.webp";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import doc1 from "../images/doc1.jpeg";
import doc2 from "../images/doc2.jpeg";
import doc3 from "../images/doc3.jpeg";
import doc4 from "../images/doc4.jpeg";
import { useEffect, useState } from 'react';
import BackendURL from '../util/BackendUrl';
import axios from 'axios';

const Home=()=>{
  const[mydata,setMydata]=useState([]);
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
  })
  const list=mydata.map((item)=>{
    return(
      <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} height="270" />
      <Card.Body>
        <Card.Title>DR:{key.doctorname}</Card.Title>
        <Card.Text>
          Speciality:{item.speciality}<br/>
          City:{item.city}
        </Card.Text>
        <Button variant="primary">Get Appointment</Button>
      </Card.Body>
    </Card>
      </>
    )
  })
    return(
        <>
           <Carousel>
      <Carousel.Item>
         <img src={ban1}  width="100%" height="300"  / >

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img src={ban2}  width="100%" height="300"  / >
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={ban3}  width="100%" height="300"  / >
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      <h1> Top Doctors </h1>

      <div id="docList">
        {list}
      </div>
        </>
    )
}

export default Home;
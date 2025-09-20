import { FaCalendarCheck, FaUserMd } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import Carousel from 'react-bootstrap/Carousel';
import ban1 from "../images/banner2.avif";
import ban2 from "../images/image1.avif";
import ban3 from "../images/syrup.avif";
import ban4 from "../images/banner4.jpeg";
import ban5 from "../images/banner5.jpeg";
import ban6 from "../images/banner6.jpeg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import img1 from "../images/banner.webp"
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';


const Home = () => {
  const [mydata, setMydata] = useState([]);
  const navigate = useNavigate();
  const doctorSectionRef = useRef(null);

  const getData = async () => {
    let api = `${import.meta.env.VITE_API_URL}/doctor/getdoctor`;
    try {
      const res = await axios.get(api);
      console.log(res.data);
      setMydata(res.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData();
  }, [])

  // Bootstrap Modal Spinner
  const LoadingModal = ({ show }) => (
    <Modal show={show} backdrop="static" centered>
      <Modal.Body className="text-center">
        <Spinner animation="border" role="status" variant="primary" />
        <p className="mt-3">Loading doctors...</p>
      </Modal.Body>
    </Modal>
  );

  if (mydata.length === 0) {
    return <LoadingModal show={true} />;
  }

  const list = mydata.map((item) => {
    return (
      <Card id="card" key={item._id}>
        <Card.Img variant="top" src={item.image} height="200" />
        <Card.Body>
          <Card.Title><span className='span'>Dr.: {item.doctorname}</span> </Card.Title>
          <Card.Text>
            Speciality: {item.speciality}<br />
            City: {item.city}
          </Card.Text>
          <Button variant="primary" onClick={() => { navigate(`/getappoint/${item._id}`) }} className="cartbtn">Get Appointment</Button>
        </Card.Body>
      </Card>
    )
  })

  return (
    <>
      {/*  NEW TOP CAROUSEL */}
      <Carousel id="heroCarousel">
        <Carousel.Item>
          <img src={ban4} alt="banner1" className="d-block w-100 hero-img" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={ban5} alt="banner2" className="d-block w-100 hero-img" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={ban6} alt="banner3" className="d-block w-100 hero-img" />
        </Carousel.Item>
      </Carousel>

      {/* Text + Image Section */}
      <div className="container hero-section">
        <div className="text">
          <h1>Book Your Doctor Appointment Online</h1>
          <p>
            Get access to trusted healthcare at your fingertips. Book appointments
            with experienced doctors, consult online, and manage your health records
            all in one place. Fast, easy, and secure for you and your family.
          </p>
          <button onClick={() => doctorSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}>Book Appointment</button>
        </div>

        <div className="image">
          <img src={img1} alt="Doctor appointment illustration" />
        </div>
      </div>

      {/* Existing Carousel */}
      <Carousel id="outlet">
        <Carousel.Item>
          <img src={ban1} width="100%" height="400" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={ban2} width="100%" height="400" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={ban3} width="100%" height="400" />
        </Carousel.Item>
      </Carousel>

      {/* Features Section */}
      <div id="icon">
        <div>
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

      <div id="docList" ref={doctorSectionRef}>
        {list}
      </div>
    </>
  )
}

export default Home;

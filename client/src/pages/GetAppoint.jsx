
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import BackendURL from '../util/BackendUrl';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
const GetAppoint=()=>{
    const{id}=useParams();
    const[mydata,setMydata]=useState({});
    const[input,setInput]=useState({});
    const getData=async()=>{
        let api=`${BackendURL}/doctor/doctorInfo/?id=${id}`
        const res=await axios.get(api);
        console.log(res.data);
        setMydata(res.data)
    }
    useEffect(()=>{
        getData();
    },[])

    const handleInput=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
       setInput(values=>({...values, [name]:value}));
       console.log(input);
   }

   const handleSubmit=async(e)=>{
       e.preventDefault();
       let api=`${BackendURL}/doctor/patientInfo`
       try {
        const res=await axios.post(api,{id:id,...input});
        console.log(res.data)
        toast.success("Appointment Booked Seccessfully")
       } catch (error) {
        console.log(error)
       }
   }
    return(
        <>
         <h3 className='h33'>Book your appointment</h3>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={mydata.image} height="270" />
      <Card.Body>
        <Card.Title><span className='span'>Dr.:{mydata.doctorname}</span> </Card.Title>
        <Card.Text>
          Speciality:{mydata.speciality}<br/>
          City:{mydata.city}<br/>
          Email:{mydata.email}<br/>
          Mobileno:{mydata.contact}
        </Card.Text>
    </Card.Body>
    </Card>

    
     <h3 className='h33'>Submit Patient Detail For Appointment</h3>
    <Form id='form'>
      <Form.Group className="mb-3" >
        <Form.Label>Enter Patient Name</Form.Label>
        <Form.Control type="text" name="patientname" onChange={handleInput} />
      </Form.Group>
       
       <Form.Group className="mb-3" >
        <Form.Label>Enter Diseases</Form.Label>
        <Form.Control type="text" name="diseases"  onChange={handleInput}/>
      </Form.Group>
       <Form.Group className="mb-3" >
        <Form.Label>Enter  Address</Form.Label>
        <Form.Control type="text" name="address" onChange={handleInput} />
      </Form.Group>
       
       <Form.Group className="mb-3" >
        <Form.Label>Enter Contact Number</Form.Label>
        <Form.Control type="text" name="contact" onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" >
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text"  name="email" onChange={handleInput}/>
      </Form.Group>
       
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    <ToastContainer/>
        </>
    )
}
export default GetAppoint;
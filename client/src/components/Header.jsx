//import docimg from "../images/doctor.jpeg";
import mainheading from "../images/logo.png";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import BackendUrl from "../util/BackendUrl";
import {ToastContainer,toast} from "react-toastify"
import axios from "axios";
import "react-toastify/dist/ReactToastify.css"
import {useNavigate} from "react-router-dom"
const Header=()=>{
  //====================================================REGITRATION MODAL===========================================================================
    const [input, setInput] = useState({});
    const [image, setImage] = useState("");
   const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //====================================================LOGIN MODAL===========================================================================
    
    const [showlog, setShowlog] = useState(false);
    const handleCloselog = () => setShowlog(false);
    const handleShowlog = () => setShowlog(true);
    const [emaillog,setEmaillog]=useState("");
    const [passwordlog,setPasswordlog]=useState("");
   const navigate=useNavigate();
   
  const handleImage=(e)=>{
       setImage(e.target.files[0]);
       console.log(e.target.files[0]);
  }

   const handleInput=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
       setInput(values=>({...values, [name]:value}));
       console.log(input);
   }
   const handleSubmit=async(e)=>{
    e.preventDefault();
    let api=`${BackendUrl}/doctor/registration`;
    if(!image) return alert("Please upload doctor image");
    const formData=new FormData();
    formData.append("file",image)

    for(let x in input){
      formData.append(x,input[x]);
    }
    try {
      const res=await axios.post(api,formData,{
        headers:{"Content-Type":"multipart/form-data"}
      })
      console.log(res)
      setShow(false);
      toast.info("Registration Successfully")
    } catch (error) {
      console.log(error)
      
    }
   }

   const loginSubmit=async(e)=>{
    e.preventDefault();
    let api=`${BackendUrl}/doctor/login`;
    try {
      const res=await axios.post(api,{email:emaillog,password:passwordlog})
      console.log(res.data);
      toast.success("Login Successfully")
      navigate("/doctorhome")
    } catch (error) {
      console.log(error)
    }
   }
   return(
        <>
            <div id="header">
               <div id="heading">
                     <img src={mainheading} />
               </div>
               <div id="rightmenu">
                <Button variant="primary" onClick={handleShowlog}>Login</Button>    <Button variant="primary" onClick={handleShow}>Registration</Button>
               </div>
     
            </div>


         
{/* //=============================================================================REGITRATION MODEL====================================================================================*/}
      <Modal show={show} onHide={handleClose}> 
        <Modal.Header closeButton>
          <Modal.Title>Doctor Registration Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Enter Doctor Name</Form.Label>
        <Form.Control type="text" name="doctorname" onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" >
        <Form.Label>Select Specialization</Form.Label>
       <Form.Select aria-label="Default select example" name="speciality" onChange={handleInput}>
      <option>Open this select menu</option>
      <option value="Cardiologist">Cardiologist</option>
      <option value="Gastroenterologist">Gastroenterologist</option>
      <option value="Neurologist">Neurologist</option>
       <option value="Radiologist">Radiologist</option>
        <option value="General Physician">General Physician</option>
         <option value="ENT Specialist">ENT Specialist</option>
          <option value="Dentist">Dentist</option>
           <option value="Gynecologist">Gynecologist</option>
            <option value="Surgeon">Surgeon</option>
    </Form.Select>
      </Form.Group>
       <Form.Group className="mb-3" >
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name="city"  onChange={handleInput}/>
      </Form.Group>
       <Form.Group className="mb-3" >
        <Form.Label>Enter Clinic Address</Form.Label>
        <Form.Control type="text" name="address" onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" >
        <Form.Label>Upload Doctor Image</Form.Label>
        <Form.Control type="file" name="file" onChange={handleImage}  />
      </Form.Group>
       <Form.Group className="mb-3" >
        <Form.Label>Enter Contact Number</Form.Label>
        <Form.Control type="text" name="contact" onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" >
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text"  name="email" onChange={handleInput}/>
      </Form.Group>
       <Form.Group className="mb-3" >
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" name="password" onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

{/* //=============================================================================LOGIN MODEL====================================================================================*/}
      <Modal show={showlog} onHide={handleCloselog}> 
        <Modal.Header closeButton>
          <Modal.Title>Doctor Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text"  name="emaillog" value={emaillog} onChange={(e)=>{setEmaillog(e.target.value)}}/>
      </Form.Group>
       <Form.Group className="mb-3" >
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" name="passwordlog" value={passwordlog} onChange={(e)=>{setPasswordlog(e.target.value)}} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={loginSubmit}>
        LOGIN
      </Button>
    </Form>
    </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloselog}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>




      <ToastContainer/>
        </>
    )
}

export default Header;
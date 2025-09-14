import Button from 'react-bootstrap/Button';
// import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import BackendURL from '../util/BackendUrl';
import axios from 'axios';
const SearchCity=()=>{
    const[mydata,setMydata]=useState([])
    const[city,setCity]=useState("")
    const handleSubmit=async(e)=>{
        e.preventDefault();
        let api=`${BackendURL}/doctor/getcity`;
        const res=await axios.post(api,{city:city});
        console.log(res.data);
        setMydata(res.data);
    }
     const City=mydata.map((key)=>{
            return(
                    <>
                       <div>
                            
                            <h3> <img src={key.image} alt="web" id='searchimg'/></h3>
                            <h2>Name:{key.doctorname}</h2>
                            <h3>City:{key.city}</h3>
                            <h2>Speciality:{key.speciality}</h2>
                            <h3>Email:{key.email}</h3>
                                
                       </div>
                    </>
                )
         })
     return(
        <>
        <h3 className='h33'>Search By City</h3>
        <Form id="form2">
      <Form.Group className="mb-3" >
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name="name" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
     </Form.Group>
     <Button variant="primary" type="submit" onClick={handleSubmit}>
             Search
           </Button>
         </Form>
         
         <div id="searchtable">
          {City}
         </div>
        </>
    )
}
export default SearchCity;
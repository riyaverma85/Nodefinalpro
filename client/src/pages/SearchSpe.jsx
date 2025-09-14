import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import BackendURL from "../util/BackEndUrl";
import axios from 'axios';
const SearchSpe=()=>{
    const[mydata,setMydata]=useState("")
    const[spe,setSpe]=useState("")
    const handleSubmit=async(e)=>{
        e.preventDefault();
        let api=`${BackendURL}/doctor/getspeciality`;
        const res=await axios.get(api,{speciality:spe});
        console.log(res.data);
        setMydata(res.data);
    }
    return(
        <>
        <h3>Search By Speciality</h3>
        <Form id="form2">
      <Form.Group className="mb-3" >
        <Form.Label>Enter Speciality</Form.Label>
        <Form.Control type="text" name="name" value={spe} onChange={(e)=>{setSpe(e.target.value)}}/>
     </Form.Group>
     <Button variant="primary" type="submit" onClick={handleSubmit}>
             Search
           </Button>
         </Form>
        </>
    )
}
export default SearchSpe;
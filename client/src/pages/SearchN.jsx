import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import BackendURL from "../util/BackEndUrl";
import axios from 'axios';
const SearchName=()=>{
    const[mydata,setMydata]=useState({})
    const[name,setName]=useState("")
    const handleSubmit=async(e)=>{
        e.preventDefault();
        let api=`${BackendURL}/doctor/getname`;
        const res=await axios.post(api,{doctorname:name});
        console.log(res.data);
        setMydata(res.data);
    }
    return(
        <>
        <h3 className='h33'>Search By Speciality</h3>
        <Form id="form2">
      <Form.Group className="mb-3" >
        <Form.Label>Enter Speciality</Form.Label>
        <Form.Control type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
     </Form.Group>
     <Button variant="primary" type="submit" onClick={handleSubmit}>
             Search
           </Button>
         </Form>
         <Table striped bordered hover variant="dark" className='tbl'>
               <thead>
                 <tr>
                    <th>NO</th>
                    <th>IMAGE</th>
                   <th>Name</th>
                   <th>CITY</th>
                   <th>SPECIALITY</th>
                   <th>EMAIL</th>
                 </tr>
               </thead>
               <tbody>
                  {mydata.length>=1 && mydata.map((key,index)=>{
                        return(
                            <>
                            <tr>
                                <td>{index+1}</td>
                                <td> <img src={key.image} alt="web" id='searchimg'/></td>
                                <td>{key.doctorname}</td>
                                <td>{key.city}</td>
                                <td>{key.speciality}</td>
                                <td>{key.email}</td>
                                
                            </tr>
                            </>
                        )
                  })}
               </tbody>
               </Table>
        </>
    )
}
export default SearchName;
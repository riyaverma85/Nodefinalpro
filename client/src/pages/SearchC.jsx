import Button from 'react-bootstrap/Button';
 import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import BackendUrl from "../util/backendUrl";
import axios from 'axios';
const SearchCity=()=>{
    const[mydata,setMydata]=useState([])
    const[city,setCity]=useState("")
    const handleSubmit=async(e)=>{
        e.preventDefault();
        let api=`${BackendUrl}/doctor/getcity`;
        const res=await axios.post(api,{city:city});
        console.log(res.data);
        setMydata(res.data);
    }
     const City= mydata.map((key,index)=>{
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
      <Table className='tbl'>
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
                {mydata.length>=1 ?(
                  <>
                  {City}
                  </>
                ):(
                  <span>No Record Found!!</span>
                )}
                
               </tbody>
        </Table>
         
        </>
    )
}
export default SearchCity;
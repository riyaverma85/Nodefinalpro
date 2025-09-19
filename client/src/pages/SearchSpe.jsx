import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import BackendUrl from "../util/BackendUrl";
import axios from 'axios';
const SearchSpe=()=>{
    const[mydata,setMydata]=useState([])
    const[spe,setSpe]=useState("")
    const handleSubmit=async(e)=>{
        e.preventDefault();
        let api=`${BackendUrl}/doctor/getspeciality`;
        const res=await axios.post(api,{speciality:spe});
        console.log(res.data);
        setMydata(res.data);
    }
    return(
        <>
        <h3 className='h33'>Search By Speciality</h3>
        <Form id="form2">
      <Form.Group className="mb-3" >
        <Form.Label>Select Specialization</Form.Label>
       <Form.Select aria-label="Default select example" value={spe} onChange={(e)=>setSpe(e.target.value)}>
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
export default SearchSpe;
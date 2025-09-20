import { useState } from "react";
import BackendUrl from "../util/BackendUrl";
import axios from "axios";
import { useEffect } from "react";
import Table from 'react-bootstrap/Table';
const Patient=()=>{
    const[mydata,setMydata]=useState([]);
    const getData=async()=>{
        let api=`${BackendUrl}/doctor/patientshow/?id=${localStorage.getItem("docid")}`;
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
    let sno=0
    const list=mydata.map((item)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{item.patientname}</td>
                <td>{item.diseases}</td>
                <td>{item.address}</td>
                <td>{item.contact}</td>
                <td>{item.email}</td>
            </tr>
            </>
        )
    })
    return(
        <>
         <h3 className="h33">Patient Details!!</h3>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Patient Name</th>
          <th>Diseases</th>
          <th>Address</th>
          <th>Contact</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {list}
      </tbody>
      </Table>
        </>
    )
}
export default Patient;



// import Button from 'react-bootstrap/Button';
// import Table from 'react-bootstrap/Table';
// import Form from 'react-bootstrap/Form';
// import { useState } from "react";
// import BackendURL from '../util/BackendUrl';
// import axios from 'axios';
// import img2 from "../images/banner2.avif"
// const SearchName=()=>{
//     const[mydata,setMydata]=useState([])
//     const[name,setName]=useState("")
//     const handleSubmit=async(e)=>{
//         e.preventDefault();
//         let api=`${BackendURL}/doctor/getname`;
//         const res=await axios.post(api,{doctorname:name});
//         console.log(res.data);
//         setMydata(res.data);
//     }
    
//     return(
//         <>
//     <section class="search-section">
//     <div class="search-content">
//       <h1>Find the Right Doctor Near You</h1>
//       <p>
//         Book appointments with trusted doctors, search by specialization,
//         city or hospital. Get quick access to quality healthcare anytime,
//         anywhere.
//       </p>
//       <div class="search-bar">
//         <input type="text" placeholder="🔍 Search doctors, hospitals, cities..."/>
//         <button>Search</button>
//       </div>
//       <ul class="features">
//         <li>✔ 24/7 Online Booking</li>
//         <li>✔ Trusted Specialists</li>
//         <li>✔ Secure & Easy Payments</li>
//       </ul>
//     </div>

//     <div class="search-image">
//       <img src={img2} alt="Doctor" />
//     </div>
//   </section>

//         <h3 className='h33'>Search By Name</h3>
//         <Form id="form2">
//       <Form.Group className="mb-3" >
//         <Form.Label>Enter Name</Form.Label>
//         <Form.Control type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
//      </Form.Group>
//      <Button variant="primary" type="submit" onClick={handleSubmit}>
//              Search
//            </Button>
//          </Form>
//          <Table striped bordered hover variant='dark' className='tbl'>
//                <thead>
//                  <tr>
//                     <th>NO</th>
//                     <th>IMAGE</th>
//                    <th>Name</th>
//                    <th>CITY</th>
//                    <th>SPECIALITY</th>
//                    <th>EMAIL</th>
//                  </tr>
//                </thead>
//                <tbody>
//                   {mydata.length>=1 && mydata.map((key,index)=>{
//                         return(
//                             <>
//                             <tr>
//                                 <td>{index+1}</td>
//                                 <td> <img src={key.image} alt="web" id='searchimg'/></td>
//                                 <td>{key.doctorname}</td>
//                                 <td>{key.city}</td>
//                                 <td>{key.speciality}</td>
//                                 <td>{key.email}</td>
                                
//                             </tr>
//                             </>
//                         )
//                   })}
//                </tbody>
//                </Table>
//         </>
//     )
// }
// export default SearchName;













import Table from 'react-bootstrap/Table';
import { useState } from "react";
import BackendURL from '../util/BackendUrl';
import axios from 'axios';
import img2 from "../images/banner2.avif";

const SearchName = () => {
  const [mydata, setMydata] = useState([]);
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `${BackendURL}/doctor/search`; // 👈 new common route
    const res = await axios.post(api, { query });
    console.log(res.data);
    setMydata(res.data);
  }

  return (
    <>
      {/*====================================== Banner Section============================================================ */}
      <section className="search-section">
        <div className="search-content">
          <h1>Find the Right Doctor Near You</h1>
          <p>
            Book appointments with trusted doctors, search by specialization,
            city or hospital. Get quick access to quality healthcare anytime,
            anywhere.
          </p>
          <div className="search-bar">
            <input
              type="text"
              placeholder="🔍 Search doctors by name, city or speciality..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSubmit}>Search</button>
          </div>
          <ul className="features">
            <li>✔ 24/7 Online Booking</li>
            <li>✔ Trusted Specialists</li>
            <li>✔ Secure & Easy Payments</li>
          </ul>
        </div>

        <div className="search-image">
          <img src={img2} alt="Doctor" />
        </div>
      </section>

      {/* Search Results */}
      <h3 className='h33'>Search Results</h3>
      <Table striped bordered hover variant='dark' className='tbl'>
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
          {mydata.length >= 1 && mydata.map((key, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><img src={key.image} alt="web" id='searchimg' /></td>
                <td>{key.doctorname}</td>
                <td>{key.city}</td>
                <td>{key.speciality}</td>
                <td>{key.email}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}
export default SearchName;

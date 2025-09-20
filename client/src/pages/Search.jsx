
import Table from 'react-bootstrap/Table';
import { useState } from "react";
import axios from 'axios';
import img2 from "../images/banner2.avif";

const Search = () => {
  const [mydata, setMydata] = useState([]);
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `${import.meta.env.VITE_API_URL}/doctor/search`; // 👈 new common route
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

      {/*====================================== Search Table============================================= */}
      <h3 className='h33'>Search Results</h3>
      <Table striped bordered hover className='tbl'>
        <thead>
          <tr>
            <th>NO</th>
            <th>Image</th>
            <th>Name</th>
            <th>City</th>
            <th>Speciality</th>
            <th>Email</th>
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
export default Search;

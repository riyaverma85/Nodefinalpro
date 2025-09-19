import { Link, Outlet } from "react-router-dom";


const Doctorhome = () => {
  return (
    <div className="doctor-home-container">
      <h3 className="doctor-home-header">Welcome to Doctor Dashboard!!</h3>
      <div>
        <div>
          <Link to="patientlist" className="nav-link">Patient List</Link>
        </div>
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Doctorhome;

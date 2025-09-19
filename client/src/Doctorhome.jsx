import { Link, Outlet } from "react-router-dom";


const Doctorhome = () => {
  return (
    <div className="doctorhome">
      <h3 className="doctorheader">Welcome to Doctor Dashboard!!</h3>
      <div>
        <div>
          <Link to="patientlist" className="nav1-link">Patient List</Link>
        </div>
        <div className="outlethome">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Doctorhome;

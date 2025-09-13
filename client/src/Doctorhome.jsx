import { Link, Outlet } from "react-router-dom";

const Doctorhome=()=>{
    return(
        <>
         <h3>Welcome to Doctor Dashboard!!</h3>
         <div>
            <div>
                <Link to="patientlist">Patient List</Link>
            </div>
            <div>
                <Outlet/>
            </div>
         </div>
        </>
    )
}
export default Doctorhome;


import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Doctorhome from "./Doctorhome";
import Patient from "./pages/Patient";
const App=()=>{
  return(
    <>
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
            </Route>
          </Routes>  
          <Routes>
             <Route path="/doctorhome" element={<Doctorhome/>}>
             <Route path="patientlist" element={<Patient/>}/>
             </Route>
          </Routes>      
        </BrowserRouter>
    </>
  )
}

export default App;


import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Doctorhome from "./Doctorhome";
import Patient from "./pages/Patient";
import SearchSpe from "./pages/SearchSpe";
import SearchName from "./pages/SearchN";
import SearchCity from "./pages/SearchC";
const App=()=>{
  return(
    <>
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="searchname" element={<SearchName/>}/>
                <Route path="searchcity" element={<SearchCity/>}/>
                <Route path="speciality" element={<SearchSpe/>}/>
                
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
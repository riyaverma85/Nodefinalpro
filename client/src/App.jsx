

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Doctorhome from "./Doctorhome";
import Patient from "./pages/Patient";
import Search from "./pages/Search";
// import SearchSpe from "./pages/SearchSpe";
// import SearchName from "./pages/SearchN";
// import SearchCity from "./pages/SearchC";
import GetAppoint from "./pages/GetAppoint";
import Contact from "./pages/Contact";
import About from "./pages/About";
const App=()=>{
  return(
    <>
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/search" element={<Search/>}/>  
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/getappoint" element={<GetAppoint/>}/>
                {/* <Route path="searchname" element={<SearchName/>}/>
                <Route path="searchcity" element={<SearchCity/>}/>
                <Route path="speciality" element={<SearchSpe/>}/> */}
                <Route path="getappoint/:id" element={<GetAppoint/>}/>
                
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
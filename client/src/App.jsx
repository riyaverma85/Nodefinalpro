

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Doctorhome from "./Doctorhome";
const App=()=>{
  return(
    <>
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
            </Route>
          </Routes>  
          <Routes>
             <Route path="/doctorhome" element={<Doctorhome/>}>
             </Route>
          </Routes>      
        </BrowserRouter>
    </>
  )
}

export default App;
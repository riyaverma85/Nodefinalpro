import Header from "./components/Header";
import Container from 'react-bootstrap/Container';
import TopMenu from "./components/TopMenu";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
const Layout=()=>{
    return(
        <>

       <Container fluid>
        <div className="sticky-top">
           <Header/>
           <TopMenu/>
        </div>
           <div className="outletdiv">
           <Outlet/>
           </div>

           <Footer/>

       </Container>


        
        
        </>
    )
}

export default Layout;
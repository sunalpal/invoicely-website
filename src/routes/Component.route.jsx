import { Link,Routes,Route } from "react-router-dom"

import Home from '../pages/Home'
import About from "../pages/About"
import SubLogin from "../pages/SubLogin"

import Login from "../pages/Login"
import Services from "../pages/Services"


import "../routes/Component.route.css"
const Routee = () => {


  return (
   <>
   
     <nav className="services-nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Service</Link>
      <Link to="/login">Login</Link>
    
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
       <Route path="/sublogin" element={<SubLogin />} />
    </Routes>
</>
  )
}

export default Routee
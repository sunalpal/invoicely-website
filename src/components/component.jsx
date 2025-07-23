import "./component.css"


import Routee from "../routes/Component.route"
import { BrowserRouter as Router ,Routes,Route ,Link} from "react-router-dom"
import '../pages/SubLogin';
import {  useNavigate } from "react-router-dom"
const Component = () => {
  const navigate=useNavigate();
  return (
   <>
   <div className="main_div"> 

    <div className="main-section">
     <h1>Create Professional <br />invoices in Seconds</h1>
     <button className="btn" onClick={()=>navigate('/sublogin')}>Generate Invoices</button>
     <div className="features">
  <div className="feature-box">
    <h3>Easy</h3>
    <p>Simply fill out a form and generate your invoice.</p>
  </div>
  <div className="feature-box">
    <h3>Fast</h3>
    <p>Create invoice quicker than ever before.</p>
  </div>
  <div className="feature-box">
    <h3>Secure</h3>
    <p>Your data is also secure with us.</p>
  </div>
</div>
<h4>Made By Sunal Pal 💝</h4>
    </div>

</div>

    
<div className="services-container">
  <div className="services-header"> <h1 className="services-title">SERVICES</h1>

<Routee>
  
</Routee>
  </div>
</div>
   </>
  )
}

export default Component
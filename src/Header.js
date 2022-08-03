import React from 'react'
import Booking from './components/Booking'
import Earnings from './components/Earnings'
import Home from './components/Home'
import Upload from './components/Upload'
import Faq from './components/Faq'
import Changepassword from './components/Changepassword'
import ChangenewPassword from './components/ChangenewPassword'
import Contactus from './components/Contactus'
import Settings from './components/Settings'
import Login from './components/Login'
import Signup from './components/Signup'
import Otp from './components/Otp'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
function Header() {
  return (
    <>
   <Router>
<div className="header">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
	<nav className="navbar navbar-expand-lg navbar-light navbarcustomemain">
		<a className="navbar-brand" href="#"><img src="images/logohome.png"/></a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarSupportedContent">
		  <ul className="navbar-nav mr-auto">
			<li className="nav-item active">
            <NavLink className="nav-link" to="/">Home</NavLink>
			</li>
			<li className="nav-item">
            <NavLink className="nav-link" to="/Booking">Booking</NavLink>
			</li>
			<li className="nav-item">
            <NavLink className="nav-link" to="/Earnings">Earnings</NavLink>
			</li>
			<li className="nav-item">
            <NavLink className="nav-link" to="/Upload">Upload</NavLink>
				
			</li>
			<li className="nav-item dropdown">
				<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				  Settings
				</a>
				<div className="dropdown-menu" aria-labelledby="navbarDropdown">
				  <NavLink className="dropdown-item custmitmdrop" to="/Faq">FAQ</NavLink>
				  <NavLink className="dropdown-item custmitmdrop" to="/Contactus">Contact Us</NavLink>
				  <NavLink className="dropdown-item custmitmdrop" to="/Changenewpassword">Change Password</NavLink>
				</div>
			  </li>
		  </ul>
		  <form className="form-inline my-2 my-lg-0">
			<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
		  </form>
		</div>
		<a className="userdefoultloginbtn" href="#"><img  className="userdefoultimg" src="images/userdefoultlogin.png"/></a>
		<Link className="loginbtn" to={"/Login"}>Log In</Link>
		
	  </nav>
	</div>
</div>
</div>
</div>

 
    {/* <ul>
       <Link to="/">Home</Link>
       <Link to="Booking">Booking</Link>
       <Link to="Contact">Contact</Link>
    </ul> */}
    <Routes>
    <Route exact path='/' element={< Home />}></Route>
    <Route  path='/Booking' element={< Booking />}></Route>
    <Route  path='/Earnings' element={< Earnings />}></Route>
    <Route  path='/Upload' element={< Upload />}></Route>
    <Route  path='*' element={<Settings />}></Route>
    <Route  path='/Faq' element={< Faq />}></Route>
    <Route  path='/Changepassword' element={< Changepassword />}></Route>
    <Route  path='/Contactus' element={< Contactus />}></Route>
	<Route  path='/Login' element={< Login />}></Route>
	<Route  path='/ChangenewPassword' element={< ChangenewPassword />}></Route>
	<Route  path='/Signup' element={< Signup />}></Route>
	<Route  path='/Otp' element={< Otp />}></Route>
	
    </Routes>
    </Router>
    </>
  )
}

export default Header
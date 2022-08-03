import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
function Signup() {
     // Initialize a boolean state
const [passwordShown, setPasswordShown] = useState(false);
// Password toggle handler
const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  return (
    <main>
<div class="mainheadingsection">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-5">
				<div class="leftloginwrapper">
						<div class="leftloginformcontainer">
						<div class="leftformsectionboxheading">
							<img src="images/logohome.png" alt="ms"/>
							</div>
						<div class="leftformsectioninnerdata">
					<h1>Welcome to <span>Ink Pinned</span> </h1>
					<h6>Sign Up as Artist or Vendor </h6>
					<nav>
					<div class="nav nav-tabs custom-maintab1" id="nav-tab" role="tablist">
						
						<a class="nav-item nav-link active show  custom-tab " id="nav-Business-tab1" data-toggle="tab" href="#nav-Business" role="tab"
						  aria-controls="nav-Business" aria-selected="true">Business</a>
						<a class="nav-item nav-link  custom-tab " id="nav-Customer-tab" data-toggle="tab" href="#nav-Customer" role="tab"
						  aria-controls="nav-Customer" aria-selected="false">Customer</a>
					   
					  </div>
					  </nav>
					  <div class="tab-content " id="nav-tabContent">
							<div class="tab-pane fade active show" id="nav-Business" role="tabpanel" aria-labelledby="nav-Business-tab1">
					
								<form>
									<div class="row">
										<div class="col-md-12">
											<div class="form-group">
												<div class="iconbox">
													<i class="fa fa-building-o" aria-hidden="true"></i>
												</div>
											
												
													<select  class="form-control customchangesemail">
													  <option selected>Business Type</option>
													  <option>...</option>
													</select>
												 
											  </div>
										</div>
										<div class="col-md-12">
											<div class="form-group">
												<div class="iconbox">
													<i class="fa fa-user-o" aria-hidden="true"></i>
												</div>
												<input type="email" class="form-control customchangesemail" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User Name"/>
												
											  </div>
										</div>
								<div class="col-md-12">
									<div class="form-group">
										<div class="iconbox">
											<i class="fa fa-user-o" aria-hidden="true"></i>
										</div>
										<input type="text" class="form-control customchangesemail" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name"/>
										
									  </div>
								</div>
								<div class="col-md-12">
                                <div class="form-group">
							<div class="iconbox">
								<i class="fa fa-unlock-alt" aria-hidden="true"></i>
							</div>
							<input type={passwordShown ? "text" : "password"} class="form-control customchangesemail" id="exampleInputPassword1" placeholder="Password"/>
							<div class="iconbox2" onClick={togglePassword}>
								<i class="fa fa-eye" aria-hidden="true"></i>
							</div>
						</div>
								</div>
								<div class="col-md-12">
                                <div class="form-group">
							<div class="iconbox">
								<i class="fa fa-unlock-alt" aria-hidden="true"></i>
							</div>
							<input type={passwordShown ? "text" : "password"} class="form-control customchangesemail" id="exampleInputPassword1" placeholder="Password"/>
							<div class="iconbox2" onClick={togglePassword}>
								<i class="fa fa-eye" aria-hidden="true"></i>
							</div>
						</div>
								</div>
								
								
			</div>
							</form>
						  </div>
					
						<div class="tab-pane fade " id="nav-Customer" role="tabpanel" aria-labelledby="nav-Customer-tab">
                        <form>
									<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<div class="iconbox">
										<i class="fa fa-user-o" aria-hidden="true"></i>
									</div>
									<input type="text" class="form-control customchangesemail" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name"/>
									
								  </div>
							</div>
							<div class="col-md-12">
								<div class="form-group">
									<div class="iconbox">
										<i class="fa fa-envelope-o" aria-hidden="true"></i>
									</div>
									<input type="password" class="form-control customchangesemail" id="exampleInputPassword1" placeholder="Email ID"/>
									
								  </div>
							</div>
							<div class="col-md-12">
                            <div class="form-group">
							<div class="iconbox">
								<i class="fa fa-unlock-alt" aria-hidden="true"></i>
							</div>
							<input type={passwordShown ? "text" : "password"} class="form-control customchangesemail" id="exampleInputPassword1" placeholder="Password"/>
							<div class="iconbox2" onClick={togglePassword}>
								<i class="fa fa-eye" aria-hidden="true"></i>
							</div>
						</div>
							</div>
							<div class="col-md-12">
                            <div class="form-group">
							<div class="iconbox">
								<i class="fa fa-unlock-alt" aria-hidden="true"></i>
							</div>
							<input type={passwordShown ? "text" : "password"} class="form-control customchangesemail" id="exampleInputPassword1" placeholder="Confirm Password"/>
							<div class="iconbox2" onClick={togglePassword}>
								<i class="fa fa-eye" aria-hidden="true"></i>
							</div>
						</div>
							</div>
								</div>	  
								 
                                
							</form>
                            </div>
					  </div>

		
				<button type="button" class="btn btn-primary custombuttonchanges">Sign Up</button>
				
				<h5>Already have an account? <Link className="" to="/Login">Sign In</Link></h5>
			
				</div>
			
		</div> 
	</div> 
			</div>
			<div class="col-md-7">
				<div class="leftformsectionbox">
					<img src="images/artistmainpic.png"/>
				</div>
			</div>
		</div>
	</div>
</div>
    </main>
  )
}

export default Signup
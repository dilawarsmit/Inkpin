import React from 'react'
import { useState } from "react";
function ChangenewPassword() {
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
    <div>
    <div class="mainheadingsection">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-5">
				<div class="leftloginwrapper">
						<div class="leftloginformcontainer">
						<div class="leftformsectionboxheading">
							<img src="images/logohome.png" alt="logoimg"/>
							</div>
						<div class="leftformsectioninnerdata">
					<h1>Welcome to <span>Ink Pinned</span> </h1>
					<h6>Confirm your account by entering
						the OTP code sent by email.</h6>
				
					<form>
						<div class="row">
                        <div class="col-md-12">
						<div class="form-group">
							<div class="iconbox">
								<i class="fa fa-unlock-alt" aria-hidden="true"></i>
							</div>
							<input type={passwordShown ? "text" : "password"} class="form-control customchangesemail" id="exampleInputPassword1" placeholder="Old Password"/>
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
							<input type={passwordShown ? "text" : "password"} class="form-control customchangesemail" id="exampleInputPassword1" placeholder="New Password"/>
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
							<input type={passwordShown ? "text" : "password"} class="form-control customchangesemail" id="exampleInputPassword1" placeholder="Confirm New Password"/>
							<div class="iconbox2" onClick={togglePassword}>
								<i class="fa fa-eye" aria-hidden="true"></i>
							</div>
						</div>
					</div>
					
					
</div>
				</form>
				<button type="button" class="btn btn-primary custombuttonchanges">Submit</button>
				
			
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
    </div>
    </main>  
  )
}

export default ChangenewPassword
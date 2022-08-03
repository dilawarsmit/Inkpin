import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
function Login() {
    // Initialize a boolean state
const [passwordShown, setPasswordShown] = useState(false);
const [isActive, setIsActive] = useState(false);
// Password toggle handler
const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
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
							<img src="images/logohome.png" alt="loginlogo"/>
							</div>
						<div class="leftformsectioninnerdata">
					<h1>Welcome to <span>Ink Pinned</span> </h1>
					<h6>Please sign in to continue</h6>
				
					<form>
						<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<div class="iconbox">
								<i class="fa fa-envelope-o" aria-hidden="true"></i>
							</div>
							<input type="email" class="form-control customchangesemail" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email ID"/>
							
						  </div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<div class="iconbox">
								<i class="fa fa-unlock-alt" aria-hidden="true"></i>
							</div>
							<input type={passwordShown ? "text" : "password"} class="form-control customchangesemail" id="exampleInputPassword1" placeholder="Password"/>
							<div className={isActive ? 'bg-salmon' : 'showpass'} onClick={handleClick}>
                            <div class="iconbox2" onClick={togglePassword} >
								<i class="fa fa-eye" aria-hidden="true"></i>
                                <i class="fa fa-eye-slash" aria-hidden="true"></i>
							</div>
                            </div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
							<label class="form-check-label customrememberchanges" for="defaultCheck1">
							 Remember Me?
							</label>
						  </div>
						  
					</div>
					<div class="col-md-6">
						<div class="forgotpassword">
                        <Link className="" to="/ChangePassword">Forgot Password?</Link>
						</div>
					</div>
</div>
				</form>
				<button type="button" class="btn btn-primary custombuttonchanges">Sign In</button>
				
			   <h5>Don't have an account? <Link className="" to="/Signup">Sign Up</Link></h5>
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

export default Login
import React from 'react'

function Otp() {
  return (
    <main>
        <div className="mainheadingsection">
	<div className="container-fluid">
		<div className="row">
			<div className="col-md-5">
				<div className="leftloginwrapper">
						<div className="leftloginformcontainer">
						<div className="leftformsectionboxheading">
							<img src="images/logohome.png"/>
							</div>
						<div className="leftformsectioninnerdata">
					<h1>Welcome to <span>Ink Pinned</span> </h1>
					<h6 className="forgottext">Confirm your account by entering
						the OTP code sent by email.</h6>
				
					<form>
						<div className="row">
					<div className="col-md-12">
						<div className="form-group">
							
							<input type="number" className="form-control customchangesemail" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="3"/>
							
						  </div>
					</div>
					
					
					
</div>
				</form>
				<h3><button className="resebd" type='button'>Re-send</button></h3>
				<button type="button" className="btn btn-primary custombuttonchanges">SUBMIT</button>
				
			
				</div>
			
		</div> 
	</div> 
			</div>
			<div className="col-md-7">
				<div className="leftformsectionbox">
					<img src="images/artistmainpic.png" alt="dd"/>
				</div>
			</div>
		</div>
	</div>
</div>
    </main>
  )
}

export default Otp
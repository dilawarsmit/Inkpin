import React from 'react'

function Footer() {
  return (
    <div>
      <footer>
		<section className="contact-area" id="contact">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 offset-lg-3">
						<div className="contact-content text-center">
	
							<div className="contact-social">
								<ul>
									<li><a className="hover-target" href=""><i className="fa fa-facebook-f"></i></a></li>
									<li><a className="hover-target" href=""><i className="fa fa-linkedin"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<footer>
			<p>Copyright &copy; 2022 <img className="footerlogo" src="images/logohome.png"/>All Rights Reserved.</p>
		</footer>
	</footer>
    </div>
  )
}

export default Footer
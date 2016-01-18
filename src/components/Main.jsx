import React from 'react';  
import {Link} from 'react-router';
require('scss/try.scss');

var Main = React.createClass ({  
  render() {
    return (
    	<div className="row">
    		<div className="col-md-12">
    			<div className="row">
    				<div className="col-md-12 header">
				        <div className="row">
				        	<div className="col-md-12 manage-rentals-row">
				        		<div className="col-md-2">
				        			<p>Manage Rentals</p>
			        			</div>
		        				<div className="col-md-6">
			        			</div>
			        			<div className="col-md-4">
			        				<div className="row">
			        					<div className="col-md-8 ppt-manager-button">
			        						<Link to="pptmanager" className="btn btn-primary">Become A Property Manager</Link>
			        					</div>
			        					<div className="col-md-4 login">
			        						<Link to="login">Login</Link>
			        					</div>
			        				</div>
			        			</div>
				        	</div>
				        </div>
				        <div className="row">
					        <div className="col-md-12">
						        <div className="row">
							        <div className="col-md-12 renting-out-ppt-row">
					        			<h1>Renting Out Properties</h1>
					        			<h1>Made Easy For You</h1>
					        		</div>
				        		</div>
				        		<div className="row">
							        <div className="col-md-12 reliable-risk-free-row">
					        			<p>Reliable and risk free property renting,</p>
					        			<p>all under your supervision.</p>
					        		</div>
				        		</div>
			        		</div>
				        </div>
				        <div className="row">
					        <div className="col-md-12 info-row">
						        <div className="row">
						        	<div className="col-md-4">
						        		<div className="row">
						        			<div className="col-md-12">
						        				<h4>Trusted Property Managers</h4>
						        			</div>
						        		</div>
						        		<div className="row">
						        			<div className="col-md-12">
						        				<p>Handpicked by commonfloor to give you an awesome experience</p>
						        			</div>
						        		</div>
						        	</div>
						        	<div className="col-md-4">
						        		<div className="row">
						        			<div className="col-md-12">
						        				<h4>Hassle Free Property Renting</h4>
						        			</div>
						        		</div>
						        		<div className="row">
						        			<div className="col-md-12">
						        				<p>No longer get any maintenance &amp; repair calls from tenants</p>
						        			</div>
						        		</div>
						        	</div>
						        	<div className="col-md-4">
						        		<div className="row">
						        			<div className="col-md-12">
						        				<h4>One Click Property Overview</h4>
						        			</div>
						        		</div>
						        		<div className="row">
						        			<div className="col-md-12">
						        				<p>Tenant profile, payment information, property status with pics all at a click</p>
						        			</div>
						        		</div>
						        	</div>
					        	</div>
					        	<div className="row">
							        <div className="col-md-12 signup">
					        			<Link to="signup" className="btn">Sign Up</Link>
					        		</div>
				        		</div>
				        	</div>
				        </div>
				    </div>
		        </div>
		        <div className="row">
		        	<div className="col-md-12 how-it-works">
		        		<div className="row">
		        			<div className="col-md-2">
		        			</div>
		        			<div className="col-md-8 process">
		        				<div className="row">
		        					<div className="col-md-12">
		        						<h4>How Does It Work</h4>
		        					</div>
		        				</div>
		        				<div className="row">
		        					<div className="col-md-4 provide-ppt-details image-common-ppt">
		        					</div>
		        					<div className="col-md-8 how-it-works-process">
		        						<h5>Provide Property Details</h5>
		        						<p>Just give us basic details of your property it&#39;s location and your rent expectation</p>
		        					</div>
		        				</div>
		        				<div className="row dot-left-down">
		        				</div>
		        				<div className="row dot-right">
		        				</div>
		        				<div className="row">
		        					<div className="col-md-8 how-it-works-process select-from-trusted">
		        						<h5>Select From Trusted Property Managers</h5>
		        						<p>View complete profile of Property managers with information like ratings &amp; reviews, past experience, number of properties being managed &amp; then decide your Property manager.</p>
		        					</div>
		        					<div className="col-md-4 trusted-ppt-managers image-common-ppt">
		        					</div>
		        				</div>
		        				<div className="row dot-right-down">
		        				</div>
		        				<div className="row dot-left">
		        				</div>
		        				<div className="row">
		        					<div className="col-md-4 ppt-manager-gets-tenants image-common-ppt">
		        					</div>
		        					<div className="col-md-8 how-it-works-process">
		        						<h5>Property Manager Gets Tenants</h5>
		        						<p>After collecting your house keys from you, PM does all the ground work and finds you prospective tenants. You get to chose which tenants live in your property.</p>
		        					</div>
		        				</div>
		        				<div className="row dot-left-down">
		        				</div>
		        				<div className="row dot-right">
		        				</div>
		        				<div className="row">
		        					<div className="col-md-8 how-it-works-process">
		        						<h5>Get Monthly Rent Direct In Your Account</h5>
		        						<p>Property Manager gets agreement done for you &amp; your tenanat.You get rental &amp; security deposit in your bank account. Delayed rental payments with penalty.</p>
		        					</div>
		        					<div className="col-md-4 get-monthly-rent-direct image-common-ppt">
		        					</div>
		        				</div>
		        				<div className="row dot-right-down">
		        				</div>
		        				<div className="row dot-left">
		        				</div>
		        				<div className="row">
		        					<div className="col-md-4 manage-ppt-remotly image-common-ppt">
		        					</div>
		        					<div className="col-md-8 how-it-works-process">
		        						<h5>Manage Your Property Remotely</h5>
		        						<p>Property inspection reports, tenanat IDs, Agreements, issued rent receipts all in one place. SOmething not right right, just message property manager and it will be done.</p>
		        					</div>
		        				</div>
		        			</div>
		        			<div className="col-md-2">
		        			</div>
		        		</div>
		        	</div>
		        </div>
		        <div className="row">
		        	<div className="col-md-12 ppt-manager">
		        		<h5>Want To Become A Property Manager?</h5>
		        		<Link to="viewDetails" className="btn">View Details</Link>
		        	</div>
		        </div>
	        </div>
	    </div>
    );
  }
});

module.exports = Main;
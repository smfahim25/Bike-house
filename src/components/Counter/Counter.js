import React from 'react';
import './Counter.css';
import CountUp from 'react-countup';
const Counter = () => {
	return (
		<div>

			<section className="py-50 bg-img countnm-bx d-flex">


				<div className="container">
					<div className="counter-colection">
						<h3 className='text-center text-light'>Explore so many Bike Quickly And Easily</h3>
						<p className='text-center text-light'>We believe in making simple and huge number of collection i our bike inventory plans. <br /> Choose your next successful plan and get started today!.</p>
					</div>
					<div className="row">
						<div className="col-lg-3 col-md-6 col-12 border-style">
							<div className="text-center">
								<div className="w-80 h-80 l-h-100  text-center mx-auto">
									<span className="text-white fs-40 icon-Selected-file"><span className="path1"></span><span className="path2"></span></span>
								</div>
								<h1 className="countnm my-10 text-white fw-300"><CountUp start={0} end={8980} duration={20} /></h1>
								<div className="text-uppercase text-white">Total Bike</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 border-style">
							<div className="text-center">
								<div className="w-80 h-80 l-h-100  text-center mx-auto">
									<span className="text-white fs-40 icon-Edit"><span className="path1"></span><span className="path2"></span></span>
								</div>
								<h1 className="countnm my-10 text-white fw-300"><CountUp start={0} end={3428} duration={20} /></h1>
								<div className="text-uppercase text-white">New Collection</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 border-style">
							<div className="text-center">
								<div className="w-80 h-80 l-h-100  text-center mx-auto">
									<span className="text-white fs-40 icon-Briefcase"><span className="path1"></span><span className="path2"></span></span>
								</div>
								<h1 className="countnm my-10 text-white fw-300"><CountUp start={0} end={2128} duration={20} /></h1>
								<div className="text-uppercase text-white">Premimum Bike</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 border-style">
							<div className="text-center">
								<div className="w-80 h-80 l-h-100 text-center mx-auto">
									<span className="text-white fs-40 icon-Add-user"><span className="path1"></span><span className="path2"></span></span>
								</div>
								<h1 className="countnm my-10 text-white fw-300"><CountUp start={0} end={4428} duration={20} /></h1>
								<div className="text-uppercase text-white">Cheapest Bike</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Counter;
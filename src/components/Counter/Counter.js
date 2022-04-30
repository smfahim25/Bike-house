import React from 'react';
import './Counter.css';
import CountUp from 'react-countup';

const Counter = () => {
	return (
		<div>
			<section className="py-50 bg-img countnm-bx">


				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6 col-12 border-style">
							<div className="text-center">
								<div className="w-80 h-80 l-h-100  text-center mx-auto">
									<span className="text-white fs-40 icon-Selected-file"><span className="path1"></span><span className="path2"></span></span>
								</div>
								<h1 className="countnm my-10 text-white fw-300"><CountUp start={0} end={3250} /></h1>
								<div className="text-uppercase text-white">Our Client</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 border-style">
							<div className="text-center">
								<div className="w-80 h-80 l-h-100  text-center mx-auto">
									<span className="text-white fs-40 icon-Edit"><span className="path1"></span><span className="path2"></span></span>
								</div>
								<h1 className="countnm my-10 text-white fw-300"><CountUp start={0} end={8560} /></h1>
								<div className="text-uppercase text-white">Jobs Positon</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 border-style">
							<div className="text-center">
								<div className="w-80 h-80 l-h-100  text-center mx-auto">
									<span className="text-white fs-40 icon-Briefcase"><span className="path1"></span><span className="path2"></span></span>
								</div>
								<h1 className="countnm my-10 text-white fw-300"><CountUp start={0} end={4570} /></h1>
								<div className="text-uppercase text-white">Dealer</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 border-style">
							<div className="text-center">
								<div className="w-80 h-80 l-h-100 text-center mx-auto">
									<span className="text-white fs-40 icon-Add-user"><span className="path1"></span><span className="path2"></span></span>
								</div>
								<h1 className="countnm my-10 text-white fw-300"><CountUp start={0} end={9530} /></h1>
								<div className="text-uppercase text-white">Members</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Counter;
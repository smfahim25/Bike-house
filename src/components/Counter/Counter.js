import React from 'react';
import './Counter.css';
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <div>
            <section class="py-50 bg-img countnm-bx">

			
		<div class="container">
			<div class="row">
				<div class="col-lg-3 col-md-6 col-12 border-style">
					<div class="text-center">
						<div class="w-80 h-80 l-h-100  text-center mx-auto">
							<span class="text-white fs-40 icon-Selected-file"><span class="path1"></span><span class="path2"></span></span>
						</div>
						<h1 class="countnm my-10 text-white fw-300"><CountUp start={0} end={5428} /></h1>
						<div class="text-uppercase text-white">Jobs Posted</div>
					</div>
				</div>	
				<div class="col-lg-3 col-md-6 col-12 border-style">
					<div class="text-center">
						<div class="w-80 h-80 l-h-100  text-center mx-auto">
							<span class="text-white fs-40 icon-Edit"><span class="path1"></span><span class="path2"></span></span>
						</div>
						<h1 class="countnm my-10 text-white fw-300"><CountUp start={0} end={5428} /></h1>
						<div class="text-uppercase text-white">Jobs Filled</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-12 border-style">
					<div class="text-center">
						<div class="w-80 h-80 l-h-100  text-center mx-auto">
							<span class="text-white fs-40 icon-Briefcase"><span class="path1"></span><span class="path2"></span></span>
						</div>
						<h1 class="countnm my-10 text-white fw-300"><CountUp start={0} end={5428} /></h1>
						<div class="text-uppercase text-white">Companies</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-12 border-style">
					<div class="text-center">
						<div class="w-80 h-80 l-h-100 text-center mx-auto">
							<span class="text-white fs-40 icon-Add-user"><span class="path1"></span><span class="path2"></span></span>
						</div>
						<h1 class="countnm my-10 text-white fw-300"><CountUp start={0} end={5428} /></h1>
						<div class="text-uppercase text-white">Members</div>
					</div>
				</div>			
			</div>
		</div>
	</section>
        </div>
    );
};

export default Counter;
import React from 'react';
import DevTechnology from '../components/DevTechnology/DevTechnology';
import Header from '../components/Header/Header';
import OurCustomers from '../components/OurCustomers/OurCustomers';
import OurPortfolio from '../components/OurPortfolio/OurPortfolio';
import OurProducts from '../components/OurProducts/OurProducts';
import TalkAbout from '../components/TalkAbout/TalkAbout';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Video from '../components/Video/Video';
import WhatWeDo from '../components/WhatWeDo/WhatWeDo';
import YourPlan from '../components/YourPlan/YourPlan';

const Home = () => {
	return (
		<>
			<TopNavigation />
			<Header />
			<Video />
			<OurCustomers />
			<WhatWeDo />
			<OurProducts />
			<YourPlan />
			<TalkAbout />
			<OurPortfolio />
			<DevTechnology />
		</>
	);
};

export default Home;

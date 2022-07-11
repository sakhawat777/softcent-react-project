import React from 'react';
import DesignTechnology from '../components/DesignTechnology/DesignTechnology';
import DevTechnology from '../components/DevTechnology/DevTechnology';
import Header from '../components/Header/Header';
import OurCustomers from '../components/OurCustomers/OurCustomers';
import OurPortfolio from '../components/OurPortfolio/OurPortfolio';
import OurProducts from '../components/OurProducts/OurProducts';
import TalkAbout from '../components/TalkAbout/TalkAbout';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Video from '../components/Video/Video';
import WhatWeDo from '../components/WhatWeDo/WhatWeDo';
import Workflow from '../components/Workflow/Workflow';
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
			<DesignTechnology />
			<Workflow />
		</>
	);
};

export default Home;

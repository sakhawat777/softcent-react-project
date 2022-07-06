import React from 'react';
import Header from '../components/Header/Header';
import OurCustomers from '../components/OurCustomers/OurCustomers';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Video from '../components/Video/Video';
import WhatWeDo from '../components/WhatWeDo/WhatWeDo';

const Home = () => {
	return (
		<>
			<TopNavigation />
			<Header />
			<Video />
			<OurCustomers />
			<WhatWeDo />
		</>
	);
};

export default Home;

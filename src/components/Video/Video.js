import React from 'react';
import './Video.css';
const Video = () => {
	return (
		<div className='container'>
			<section className='video-section d-flex justify-content-center'>
				<iframe
					width='100%'
					height='600'
					src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
					title='YouTube video player'
					frameborder='0'
					allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen></iframe>

				<br />
			</section>
		</div>
	);
};

export default Video;

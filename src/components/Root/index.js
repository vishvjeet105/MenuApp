import React from 'react';
import './index.scss';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';
import LeftSide from '../LeftSide';

const Root = () => {
	return (
		<div className='root'>
			<Header />
			<div className='left-main-container'>
				<LeftSide />
				<Main />
			</div>
			<Footer />
		</div>
	);
};

export default Root;

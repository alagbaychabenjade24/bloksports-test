import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import UserBetting from './components/UserBetting';

const App = () => {
	return (
		<Router>
			<Header />
			<UserBetting />
			<Footer />
		</Router>
	);
};

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import BlokSportsLogo from '../dist/images/bloksports-nav.png';
import AsideBanner from '../dist/images/aside-bloksports.png';
import Phone from '../dist/images/device.png';

import '../dist/styles/Header.scss';

const Nav = () => {
	const { loginWithRedirect, isAuthenticated } = useAuth0();

	return (
		!isAuthenticated && (
			<header>
				<nav className='public__nav minmax'>
					<Link to='/' className='logo--home'>
						<img src={BlokSportsLogo} alt='BlockSports Logo' />
					</Link>

					<ul>
						<li>
							<Link to='/'>ABOUT US</Link>
						</li>

						<li>
							<Link to='/'>FAQs</Link>
						</li>

						<li>
							<Link to='/'>CONTACT US</Link>
						</li>

						<li>
							<div></div>
						</li>

						<li>
							<Link to='/' className='login' onClick={loginWithRedirect}>
								START BETTING
							</Link>
						</li>
					</ul>
				</nav>

				<section className='home'>
					<div className='home__overlay'></div>

					<div className='home__wrapper'>
						<div className='home__content'>
							<h1>
								Sports Betting Redefined <br /> Social. Secure. Fair.
							</h1>

							<h2>
								Bet your friends and peers directly. No house. No
								hassles.
							</h2>

							<div className='btns'>
								<button
									className='start--btn'
									onClick={loginWithRedirect}
								>
									START BETTING
								</button>
								<button className='update--btn'>GET UPDATES</button>
							</div>
						</div>

						<img src={Phone} alt='home phone' />
					</div>
				</section>

				<aside className='banner minmax'>
					<img src={AsideBanner} alt='aside banner' />
				</aside>
			</header>
		)
	);
};

export default Nav;

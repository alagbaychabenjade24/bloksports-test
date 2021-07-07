import React from 'react';
import { Link } from 'react-router-dom';

import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import BlokSportsLogo from '../dist/images/bloksports.png';

import '../dist/styles/Footer.scss';

const Footer = () => {
	return (
		<footer>
			<div className='minmax'>
				<section className='top'>
					<Link to='/' className='logo--home'>
						<img src={BlokSportsLogo} alt='BlockSports Logo' />
					</Link>

					<a
						href='https://www.bloksports.com/#/MillionDollarMadnessHowToPlay'
						rel='noreferrer'
						target='_blank'
					>
						How to Play Million Dollar Madness
					</a>

					<div className='social'>
						<a
							href='https://www.facebook.com/pages/category/Sports/Bloksports-341817853085759/'
							rel='noreferrer'
							target='_blank'
						>
							<FaFacebookF />
						</a>

						<a
							href='https://twitter.com/bloksports1'
							rel='noreferrer'
							target='_blank'
						>
							<FaTwitter />
						</a>

						<a
							href='https://www.linkedin.com/company/blok-sports/'
							rel='noreferrer'
							target='_blank'
						>
							<FaLinkedinIn />
						</a>
					</div>
				</section>

				<aside className='divider'></aside>

				<section className='btm'>
					<Link to='/' className='copyrights'>
						&copy;{' '}
						<strong>
							<em>
								BLOK<span>SPORTS</span>
							</em>
						</strong>
						, LLC 2021
					</Link>

					<a href='mailto:support@bloksports.com'>
						support@bloksports.com
					</a>

					<div className='security'>
						<a
							href='https://www.bloksports.com/#/TermsAndConditions'
							rel='noreferrer'
							target='_blank'
						>
							Terms and Conditions
						</a>

						<a
							href='https://www.bloksports.com/#/nftTermsAndConditions'
							rel='noreferrer'
							target='_blank'
						>
							NFT Terms and Conditions
						</a>

						<a
							href='https://www.bloksports.com/#/PrivacyPolicy'
							rel='noreferrer'
							target='_blank'
						>
							Privacy Policy
						</a>
					</div>
				</section>
			</div>
		</footer>
	);
};

export default Footer;

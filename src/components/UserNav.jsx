import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { AiOutlineLogout } from 'react-icons/ai';

import BlokSportsLogo from '../dist/images/bloksports.png';

import '../dist/styles/UserNav.scss';

const UserNav = () => {
	const { user } = useAuth0();
	const { logout } = useAuth0();

	return (
		<header className='user__header'>
			<div className='minmax'>
				<aside className='topbar'>Online Sports Betting | BlokSports</aside>

				<nav className='user__nav'>
					<Link to='/'>
						<img
							src={BlokSportsLogo}
							alt='Bloksports Logo'
							className='img'
						/>
					</Link>

					<ul className='links'>
						<li className='profile'>
							<span className='name' title={user.nickname}>
								{user.given_name} {user.family_name}
							</span>
							<img
								src={user.picture}
								alt={`${user.given_name} ${user.family_name}`}
								title={`${user.given_name} ${user.family_name}`}
							/>
						</li>

						<li>
							<AiOutlineLogout className='sign--out' onClick={logout} />
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default UserNav;

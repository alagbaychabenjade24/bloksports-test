import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import UserNav from './UserNav';
import SportsData from '../containers/SportsData';

const UserBetting = () => {
	const { isAuthenticated } = useAuth0();

	return (
		isAuthenticated && (
			<>
				<UserNav />

				<div className='minmax'>
					<div className='bar__wrapper'>
						<SportsData />
					</div>
				</div>
			</>
		)
	);
};

export default UserBetting;

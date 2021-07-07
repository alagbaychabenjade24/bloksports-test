import React, { useEffect, useState } from 'react';
import axios from 'axios';

import HeadingBet from '../dist/images/heading-bets.svg';

import '../dist/styles/SportsData.scss';

const SportsData = () => {
	const apiKey = process.env.REACT_APP_API_URL;

	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get(
				`https://api.the-odds-api.com/v4/sports/upcoming/odds/?apiKey=${apiKey}&regions=us&markets=h2h,spreads&oddsFormat=american`
			)
			.then(response => {
				setData(response.data);
			})
			.catch(error => console.error(error));
	}, [apiKey]);

	return (
		<div className='data__container'>
			<aside className='bet__title'>
				<img src={HeadingBet} alt='bets' />
				<h2>LIVE & UPCOMING BETS</h2>
			</aside>

			<section className='bet__data'>
				{data.map(data => {
					return (
						<div className='col' key={data.id}>
							<div className='col__header'>
								<span className='title'>{data.sport_title}</span>
								<span className='time'>{data.commence_time}</span>
							</div>

							<div className='hr'></div>

							<div className='col__data'>
								<div className='left'>
									<p className='home__team'>@{data.home_team}</p>
									<p className='away__team'>{data.away_team}</p>
								</div>

								<div className='right'>
									{data.bookmakers.map(bookmaker => {
										return (
											<>
												{bookmaker.title.includes('Unibet')
													? bookmaker.markets.map(market => {
															return (
																<>
																	{market.key.includes(
																		'spreads'
																	)
																		? market.outcomes.map(
																				outcome => {
																					return (
																						<div>
																							<span className='name'>
																								{
																									outcome.name
																								}
																							</span>
																							<span className='price'>
																								{
																									outcome.price
																								}
																							</span>
																						</div>
																					);
																				}
																		  )
																		: undefined}
																</>
															);
													  })
													: undefined}
											</>
										);
									})}
								</div>
							</div>
						</div>
					);
				})}
			</section>
		</div>
	);
};

export default SportsData;

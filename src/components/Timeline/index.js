import React from 'react';

import { Li, Ul, Container } from './styles.js';

const Timeline = props => {
	const listDates = props.dates.map((date, index) => (
		<Li
			key={index}
			data-key={index}
			onClick={e => {
				props.setIndex(index);
				e.target.focus({ preventScroll: false });
			}}
			tabIndex={index}
		>
			{date}
		</Li>
	));

	return (
		<Container>
			<Ul>{listDates}</Ul>
		</Container>
	);
};

export default Timeline;

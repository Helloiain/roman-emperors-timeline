import React from 'react';
import styled from 'styled-components';

const Timeline = props => {
	const listDates = props.dates.map((date, index) => (
		<Li
			key={index}
			onClick={e => {
				props.setIndex(index);
			}}
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

const Li = styled.li`
	position: relative;
	margin: 4rem 0;
	padding-right: 1rem;
	list-style: none;
	white-space: nowrap;
	&::after {
		content: '';
		position: absolute;
		top: 10px;
		right: 0;
		width: 10px;
		height: 2px;
		background: #000;
		opacity: 0.5;
		transform: scaleX(1);
		transition: all 0.3s ease-in-out 0s;
	}
	&:hover {
		cursor: pointer;
	}
	&:hover::after {
		transform: scale(3, 2);
	}
`;

const Ul = styled.ul`
	max-height: 75%;
	overflow-y: auto;
	overflow-x: hidden;
	&::-webkit-scrollbar {
		width: 0 !important;
	}
`;

const Container = styled.div`
	display: flex;
	align-items: center;
	height: 100vh;
	border-right: 2px solid;
	border-image: radial-gradient(#000, rgba(0, 0, 0, 0)) 1 1%;
`;

export default Timeline;

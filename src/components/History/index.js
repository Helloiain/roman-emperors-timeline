import React from 'react';
import {
	Container,
	Title,
	Index,
	ContentContainer,
	Content
} from './styles.js';

const History = props => {
	return (
		<Container>
			<Title>{props.names[props.index]}</Title>
			<Index>({props.index + 1})</Index>
			<ContentContainer>
				<Content>{props.history[props.index]}</Content>
			</ContentContainer>
		</Container>
	);
};

export default History;

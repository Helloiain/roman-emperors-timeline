import React from 'react';
import styled from 'styled-components';

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

const Title = styled.h1`
	font-family: 'Julius Sans One';
	margin-bottom: 0;
`;

const Index = styled.p`
	margin: 0;
	opacity: 0.6;
`;

const ContentContainer = styled.div`
	display: flex;
	height: 300px;
`;

const Content = styled.p`
	line-height: 1.6;
	max-height: 100%;
	overflow: auto;
	&::-webkit-scrollbar {
		width: 2px;
	}
	&::-webkit-scrollbar-thumb {
		background: rgba(0, 0, 0, 0.5);
	}
`;

const Container = styled.div`
	display: block;
	margin: auto 50px;
`;

export default History;

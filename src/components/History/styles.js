import styled from 'styled-components';
import { color } from '../Theme';

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
		opacity: 0.6;
		background: ${color};
	}
`;

const Container = styled.div`
	display: block;
	color: ${color};
	margin: auto 50px;
`;

export { Title, Index, ContentContainer, Content, Container };

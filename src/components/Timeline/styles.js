import styled from 'styled-components';
import { color } from '../Theme';

const Li = styled.li`
	color: ${color};
	position: relative;
	margin: 4rem 0;
	padding-right: 1rem;
	list-style: none;
	white-space: nowrap;
	outline: none;
	&::after {
		content: '';
		position: absolute;
		top: 10px;
		right: 0;
		width: 10px;
		height: 2px;
		background: ${color};
		opacity: 0.5;
		transform: scaleX(1);
		transition: all 0.3s ease-in-out 0s;
	}
	&:hover {
		cursor: pointer;
	}
	&:focus::after {
		transform: scale(3);
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
	border-image: radial-gradient(${color}, transparent) 1 1%;
`;

export { Li, Ul, Container };

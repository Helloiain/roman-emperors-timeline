import styled from 'styled-components';

const Li = styled.li`
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
		background: #000;
		opacity: 0.5;
		transform: scaleX(1);
		transition: all 0.3s ease-in-out 0s;
	}
	&:hover {
		color: grey;
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
	border-image: radial-gradient(#000, rgba(0, 0, 0, 0)) 1 1%;
`;

export { Li, Ul, Container };

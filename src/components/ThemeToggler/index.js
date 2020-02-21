import React from 'react';
import styled from 'styled-components';
import { color } from '../Theme';

const Toggle = styled.span`
	position: absolute;
	bottom: 4rem;
	left: 12rem;
	color: transparent;
	text-shadow: #fff;
	-webkit-text-stroke: 1px ${color};
	&:hover {
		cursor: pointer;
	}
`;

const ThemeToggler = props => {
	const toggleTheme = () => {
		if (props.theme.mode === 'light') {
			props.setTheme({ mode: 'dark' });
			console.log('light');
		} else {
			props.setTheme({ mode: 'light' });
			console.log('dark');
		}
	};

	return (
		<Toggle onClick={toggleTheme}>
			{props.theme.mode === 'light' ? '☀️' : '🌕'}
		</Toggle>
	);
};

export default ThemeToggler;

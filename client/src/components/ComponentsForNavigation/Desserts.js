import React from 'react';
import styled from 'styled-components';

export const Desserts = () => {
	return (
		<Container>
			<div>
				<div>Desserts</div>
			</div>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	justify-content: space-around;
	height: 800px; 
	color: green;  
`
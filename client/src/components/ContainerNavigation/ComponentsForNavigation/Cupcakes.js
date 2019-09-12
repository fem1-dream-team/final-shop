import React from 'react';
import styled from 'styled-components';

export const Cupcakes = () => {
	return (
		<Container>
			<div>
				<div>Cupcakes</div>
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
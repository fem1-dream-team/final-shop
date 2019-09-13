import React from 'react';
import styled from 'styled-components';
import collectionsImg from './collectionsImg.jpg'

export const Collections = () => {
	return (
		<div>
			<DivImg><img src={collectionsImg} style={{width: '100%', height: '300px'}}/></DivImg>
			Collections
		</div>
	)
}
const DivImg = styled.div`	
	width: 100%;
	height: 10%;
`
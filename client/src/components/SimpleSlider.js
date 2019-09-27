import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { Container } from '@material-ui/core';

export class SimpleSlider extends Component {
	render () {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<Container>
				<SliderConstructor>
					<SliderTitle> News & Promotions</SliderTitle>
					<Slider {...settings}>
						<img alt="cake1" src="img/slider-img/10.jpg"/>
						<img alt="cake2" src="img/slider-img/20.jpg"/>
						<img alt="cake3" src="img/slider-img/30.jpg"/>
						<img alt="cake4" src="img/slider-img/40.jpg"/>
						<img alt="cake5" src="img/slider-img/50.jpg"/>
						<img alt="cake6" src="img/slider-img/60.jpg"/>
					</Slider>
					<EventName>
						<EventNameWrap>SALE</EventNameWrap>
					</EventName>
				</SliderConstructor>
			</Container>
		);
	}
}

const SliderConstructor = styled.div`
position: relative;
background-color: transparent;
`;

const SliderTitle = styled.div`
margin-top: 10px;
color: #8B0000;
font-weight:bold;
font-size: 30px;
text-align:center;
text-transform: uppercase;
`;

const EventName = styled.div`
position: absolute;
bottom: 15%;
left: 50%;
height: 60px;   
border: 2px solid white;
transform: translate(-50%, -50%);
`;

const EventNameWrap = styled.div`
height: 20px;
margin: 6px;
padding: 21px 64px 0px 64px;
color: #8B0000;
font-size: 10px;
text-align: center;
text-transform: uppercase;
border: 2px solid white;
`;
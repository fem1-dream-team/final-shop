import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import s from './Products/category.module.css';

export class SimpleSlider extends Component {
	render () {
		const settings = {
			autoplay: true,
			autoplaySpeed: 2000,
			dots: false,
			infinite: true,
			speed: 3000,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<Container>
				<SliderConstructor>

					<SliderTitle></SliderTitle>
					<Slider {...settings}>
						<SliderImg1></SliderImg1>
						<SliderImg2></SliderImg2>
						<SliderImg3></SliderImg3>
						<SliderImg4></SliderImg4>
						<SliderImg5></SliderImg5>
						<SliderImg6></SliderImg6>
					</Slider>
					<EventName>
						<EventNameWrap>
							<h1 className={s.text}>SALE</h1>
						</EventNameWrap>
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
margin-top: 30px;
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
background: linear-gradient(rgba(0, 0, 0, .3),rgba(0, 0, 0, .3));
border: 2px solid white;
transform: translate(-50%, -50%);
`;

const EventNameWrap = styled.div`
height: 20px;
margin: 6px;
padding: 21px 64px 0px 64px;
color: antiquewhite;
font-size: 10px;
text-align: center;
text-transform: uppercase;
border: 2px solid white;
`;

const SliderImg1 = styled.div`
height: 450px;
background: url("img/slider-img/10.jpg") no-repeat 100% 20%;
background-size: cover;
`;

const SliderImg2 = styled.div`
height: 450px;
background: url("img/slider-img/20.jpg") no-repeat center center;
background-size: cover;
`;

const SliderImg3 = styled.div`
height: 450px;
background: url("img/slider-img/30.jpg") no-repeat center center;
background-size: cover;
`;

const SliderImg4 = styled.div`
height: 450px;
background: url("img/slider-img/40.jpg") no-repeat center 25%;
background-size: cover;
`;

const SliderImg5 = styled.div`
height: 450px;
background: url("img/slider-img/50.jpg") no-repeat center 25%;
background-size: cover;
`;

const SliderImg6 = styled.div`
height: 450px;
background: url("img/slider-img/60.jpg") no-repeat center center;
background-size: cover;
`;
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

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
			<div>
				<SliderConstructor>

					<SliderTitle> News & Promotions</SliderTitle>
					<Slider {...settings}>
						<div>
							<StyledImg alt="cake1" src="img/slider-img/1.jpg"/>
						</div>
						<div>
							<StyledImg alt="cake2" src="img/slider-img/2.jpg"/>
						</div>
						<div>
							<StyledImg alt="cake3" src="img/slider-img/3.jpg"/>
						</div>
						<div>
							<StyledImg alt="cake4" src="img/slider-img/4.jpg"/>
						</div>
						<div>
							<StyledImg alt="cake5" src="img/slider-img/5.jpg"/>
						</div>
						<div>
							<StyledImg alt="cake6" src="img/slider-img/6.jpg"/>
						</div>
					</Slider>

					<EventName>
						<EventNameWrap>Until the end of the sale:</EventNameWrap>
					</EventName>

				</SliderConstructor>
			</div>
		);
	}
}

const SliderConstructor = styled.div`
position: relative;
height: 300px;
background-color: #FFE4C4;
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

const StyledImg = styled.img`
height: 200px;
`;

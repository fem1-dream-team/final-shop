import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';


export class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <SliderConstructor>

                    <SliderTitle> News & Promotions</SliderTitle>
                    <Slider {...settings}>
                        <div>
                            <img alt="cake1" src="../images/1.jpg"/>
                        </div>
                        <div>
                            <img alt="cake2" src="../images/2.jpg"/>
                        </div>
                        <div>
                            <img alt="cake3" src="../images/3.jpg"/>
                        </div>
                        <div>
                            <img alt="cake4" src="../images/4.jpg"/>
                        </div>
                        <div>
                            <img alt="cake5" src="../images/5.jpg"/>
                        </div>
                        <div>
                            <img alt="cake6" src="../images/6.jpg"/>
                        </div>
                    </Slider>

                    <EventName>
                        <EventNameWrap>Until the end of the sale:</EventNameWrap>
                    </EventName>

            </SliderConstructor>
    );
    }
}

const SliderConstructor = styled.div`
background-color: #FFE4C4;
position: relative;
height: 300px;
`;


const SliderTitle = styled.div`
color: #8B0000;
font-size: 30px;
font-weight:bold;
text-transform: uppercase;
text-align:center;
margin-top: 10px;
`;

const EventName = styled.div `
    position: absolute;
    bottom: 15%;
    left: 50%;
    height: 60px;
    transform: translate(-50%, -50%);   
    border: 2px solid white;
`;

const EventNameWrap = styled.div `
 border: 2px solid white;
    height: 20px;
    margin: 6px;
    text-align: center;
    color: #8B0000;
    font-size: 10px;
    padding: 21px 64px 0px 64px;
    text-transform: uppercase;
`;
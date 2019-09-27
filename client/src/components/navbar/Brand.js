import React from 'react'
import styled from "styled-components";

import logo from "../../images/logo/logoCakeWhite.png";
import logo2 from "../../images/logo/textLogoWhite.png";


const Brand = () => {
	return (
		<div>
			<Image src={logo} alt="Company Logo" />
			<Image src={logo2} alt="Company Logo" />
		</div>
)
};

export default Brand

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`;
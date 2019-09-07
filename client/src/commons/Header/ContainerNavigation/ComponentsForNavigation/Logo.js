import React from 'react';
import logo from '../../logoImages/logo.png'
import styled from "styled-components";


export const Logo = () => {
    return (
            <Container>
                <img src={logo} width="180" height="180"/>
            </Container>
    )
};

const Container = styled.div`
    width: 180px;
    margin: 0 auto;
`

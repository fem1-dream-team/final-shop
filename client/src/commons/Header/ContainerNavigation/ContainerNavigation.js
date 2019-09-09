import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import s from './ConteinerNavigation.module.css'
import logoCakeWhite from "../logoImages/logoCakeWhite.png"
import textLogoWhite from "../logoImages/textLogoWhite.png"

export const ContainerNavigation = () => {
    return (
        <div>
            <Container>
                <ContainerLogo>
                    <NavLink to="/home"><StyledLinkLogoImg src={logoCakeWhite} alt='logoCake'/></NavLink>
                    <NavLink to="/home"><StyledLinkLogoText src={textLogoWhite} alt='textLogo'/></NavLink>
                </ContainerLogo>
                <ContainerNav>
                    <div>
                    <div className={s.item}>
                        <NavLink activeClassName={s.active} to="/products">
                            <div>Products</div>
                        </NavLink>
                    </div>
                    </div>
                    <div className={s.item}>
                        <NavLink activeClassName={s.active} to="/signatureCakes">Signature cakes</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink activeClassName={s.active} to="/customOrders">Custom orders</NavLink>
                        </div>
                    <div className={s.item}>
                        <NavLink activeClassName={s.active} to="/weddingCakes">Weddings cakes</NavLink>
                        </div>
                    <div className={s.item}>
                        <NavLink activeClassName={s.active} to="/cart">Cart</NavLink>
                    </div>
                </ContainerNav>
            </Container>
        </div>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    background-color: #331a13;
    color: #f186a0;
    height: 45px;
    font-size: 14px;  
  
`
const ContainerNav = styled.div`
    width: 600px;
    display: flex;
    justify-content: space-between;

`
const ContainerLogo = styled.div`
    align-self: center;
     `

const StyledLinkLogoImg = styled.img`
    width: 45px;
    height: 45px;
`

const StyledLinkLogoText = styled.img`
    width: 110px;
    height: 40px;
    margin-top: 5px;
`

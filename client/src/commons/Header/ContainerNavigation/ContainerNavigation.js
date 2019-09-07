import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import s from './ConteinerNavigation.module.css'
import {Logo} from "./ComponentsForNavigation/Logo";
import logoCakeWhite from "../logoImages/logoCakeWhite.png"
import textLogoWhite from "../logoImages/textLogoWhite.png"


export const ContainerNavigation = () => {
    return (
        <div>
            <NavLink to="/home"><Logo/></NavLink>

            <Container>
                <ContainerLogo>
                    <NavLink to="/home"><img src={logoCakeWhite} style = {{width: '45px', height: '45px',}}/></NavLink>
                    <NavLink to="/home"><img src={textLogoWhite} style = {{width: '110px', height: '40px', marginTop: '5px'}}/></NavLink>
                </ContainerLogo>
                
                <ContainerNav>
                    <div>
                    <div className={s.item}>
                        <NavLink activeClassName={s.active} to="/products">
                            <div>Products</div>
                        </NavLink>
                    </div>
                          {/*<div>*/}
                          {/*     <li>Cakes</li>*/}
                          {/*     <li>Cupcakes</li>*/}
                          {/*     <li>Candies</li>*/}
                          {/*     <li>Cookies</li>*/}
                          {/*     <li>Macaroons</li>*/}
                          {/*</div>*/}
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



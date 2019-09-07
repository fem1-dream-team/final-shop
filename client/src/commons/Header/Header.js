import React from 'react';
// import {NavLink} from "react-router-dom";
// import {Container, Grid, Box} from "@material-ui/core/index";
// import logo from "./logoImages/logo.png"
// import styled from 'styled-components';
import {ContainerSearch} from "./ContainerSearch"
import {ContainerNavigation} from "./ContainerNavigation/ContainerNavigation"
import {Products} from "./ContainerNavigation/ComponentsForNavigation/Products";
import {SignatureCakes} from "./ContainerNavigation/ComponentsForNavigation/SignatureCakes";
import {CustomOrders} from "./ContainerNavigation/ComponentsForNavigation/CustomOrders";
import {WeddingsCakes} from "./ContainerNavigation/ComponentsForNavigation/WeddingCakes";
import {Cart} from "./ContainerNavigation/ComponentsForNavigation/Cart";
import {BrowserRouter, Route} from 'react-router-dom'
import {Home} from "../../components";

export const Header = () => {
    return (
     <BrowserRouter>
        <div>
               <ContainerSearch/>

               <div>
                    <ContainerNavigation/>
               </div>

               <div>
                   {/*<Route path='/home' component={Home}/>*/}
                   <Route exact path='/products' component={Products}/>

                   <Route path='/signatureCakes' component={SignatureCakes}/>
                   <Route path='/customOrders' component={CustomOrders}/>
                   <Route path='/weddingCakes' component={WeddingsCakes}/>
                   <Route path='/cart' component={Cart}/>
               </div>
               <div>
                    <Route exact path='/home' component={Home}/>
               </div>
        </div>
     </BrowserRouter>
    )
}





import React from 'react';
import {ContainerSearchAccount} from "./ConteinerSearchAccount/ContainerSearchAccount"
import {ContainerNavigation} from "./ContainerNavigation/ContainerNavigation"
import {Logo} from "./Logo";
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    return (
        <div>
               <ContainerSearchAccount/>

                <NavLink to="/"><Logo/></NavLink>

               <div>
                    <ContainerNavigation/>
               </div>
        </div>
    )
}





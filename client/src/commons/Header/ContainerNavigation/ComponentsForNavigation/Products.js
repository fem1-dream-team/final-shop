import React from 'react';
import styled from 'styled-components';


export const Products = () => {
    return (
        <ContainerProducts>
            <div>
                <div>Products</div>
            </div>
        </ContainerProducts>
    )
}

const ContainerProducts = styled.div`
    display: flex;
    justify-content: space-around; 
    color: green;
    height: 800px;
    
`


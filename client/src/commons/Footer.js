import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {Container, Grid, Box} from "@material-ui/core";

export const Footer = () => {
    return (
        <Grid>
            <Container>
                <Box> 24 / 7 </Box>
                <Box> +38(073)123-45-67 </Box>
                <Box>
                    <Box component="p" m={0}> Abbey Road, 12 </Box>
                    <Box component="p" m={0}> Kyiv </Box>
                </Box>
            </Container>
            <Container>
                <Box> 24 / 7 </Box>
                <Box> +38(073)123-45-67 </Box>
                <Box>
                    <Box component="p" m={0}> Abbey Road, 12 </Box>
                    <Box component="p" m={0}> Kyiv </Box>
                </Box>
            </Container>
            <TestContainer>
                <Box> 24 / 7 </Box>
                <Box> +38(073)123-45-67 </Box>
                <Box>
                    <Box component="p" m={0}> Abbey Road, 12 </Box>
                    <Box component="p" m={0}> Kyiv </Box>
                </Box>
            </TestContainer>
        </Grid>
    )
};

const TestContainer = styled.div`
  padding: 10px;
  font-size: 30px;
  background-color: limegreen;
`;
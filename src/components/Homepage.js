import React from 'react'
import styled from 'styled-components'
import { NavLink, Route } from 'react-router-dom'

const HomepageContainer = styled.div`
    width: 100%;
    margin: 2% 0;
    
    .hero {
        background: url('https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80');
        background-size: cover;
        height: 100vh;
    }
`;


export default function Homepage(props) {
    return(
        <HomepageContainer>
            <div className='hero'></div>
        </HomepageContainer>
    )
}
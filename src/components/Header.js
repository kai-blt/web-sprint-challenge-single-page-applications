import React from 'react'
import styled from 'styled-components'
import { NavLink, Route, Switch } from 'react-router-dom'
import Homepage from './Homepage'
import PizzaForm from './PizzaForm'
import Confirmation from './Confirmation'

const HeaderContainer = styled.div`
    font-size: 2rem;
    width: 100%;
    background-color: #555;    
    color: #fff;

    a {
        text-decoration: none;
        margin: 0 5%;
        padding: 2%;

        &:visited {
            color: #fff;
        }

        &:hover {
            color: #333;
        }
    }
`;

export default function Header(props) {
    return(
        <HeaderContainer>
            <div><h1>Lambda Eats</h1></div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/pizza'>Build Your Own</NavLink>
            
            <Switch>    
                <Route path='/confirmation'>
                    <Confirmation />
                </Route>            
                <Route path='/pizza'>
                    <PizzaForm />
                </Route>
                <Route path='/'>
                    <Homepage />
                </Route>
            </Switch>
        </HeaderContainer>
    )
}
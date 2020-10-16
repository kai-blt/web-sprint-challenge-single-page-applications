import React from 'react'
import styled from 'styled-components'
import { NavLink, Route, Switch } from 'react-router-dom'
import Homepage from './Homepage'
import PizzaForm from './PizzaForm'

const HeaderContainer = styled.div``;

export default function Header(props) {
    return(
        <HeaderContainer>
            <div><h1>Lambda Eats</h1></div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/pizza'>Build Your Own</NavLink>
            
            <Switch>    
                <Route path='/confirmation'>
                    <PizzaForm />
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
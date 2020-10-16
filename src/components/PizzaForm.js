import React from 'react'
import styled from 'styled-components'
import { NavLink, Route } from 'react-router-dom'

export default function Homepage(props) {
    return(
        <>
        <div>Pizza Form</div>
        <div>
            <form>
                <label>Name
                    <input></input>
                </label>
            </form>
        </div>
        </>
    )
}
import React from 'react'
import styled from 'styled-components'
import { NavLink, Route } from 'react-router-dom'

export default function Homepage(props) {



    
    return(
        <>
        <div>
            <form>
                <h1>Build Your Own Pizza</h1>
                <label>Pizza Size
                    <select>
                        <option>--Please select your pizza size--</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Extra Large</option>
                    </select>
                </label><br/>
                <h2>Sauce</h2>
                    <label>
                        <input
                            type="radio"
                            name="Pepperoni"
                            value="Pepperoni"
                            onChange=""
                        />Marinara
                    </label><br/>
                    <label>
                        <input
                            type="radio"
                            name="Pepperoni"
                            value="Pepperoni"
                            onChange=""
                        />Alfredo
                    </label><br/>
                    <label>
                        <input
                            type="radio"
                            name="Pepperoni"
                            value="Pepperoni"
                            onChange=""
                        />Curry
                    </label><br/>
                <h2>Toppings</h2>
                <label>
                    <input
                        type="checkbox"
                        name="Pepperoni"
                        value="Pepperoni"
                        onChange=""
                    />Pepperoni
                </label><br/>
                <label>
                    <input
                        type="checkbox"
                        name="Pepperoni"
                        value="Pepperoni"
                        onChange=""
                    />Sausage
                </label><br/>
                <label>
                    <input
                        type="checkbox"
                        name="Pepperoni"
                        value="Pepperoni"
                        onChange=""
                    />Onion
                </label><br/>
                <label>
                    <input
                        type="checkbox"
                        name="Pepperoni"
                        value="Pepperoni"
                        onChange=""
                    />Anchovy
                </label><br/>
                <h2>Address Information</h2>
                <label>Name
                    <input
                        type="text"
                        name="name"
                        value=""
                        onChange=""></input>
                </label><br/>
                <label>Address
                    <input
                        type="text"
                        name="name"
                        value=""
                        onChange=""></input>
                </label><br/>
                <label>Phone Number
                    <input
                        type="text"
                        name="name"
                        value=""
                        onChange=""></input>
                </label><br/>
                
                <button>Order</button>
            </form>
        </div>
        </>
    )
}
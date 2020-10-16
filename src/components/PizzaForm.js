import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavLink, Route } from 'react-router-dom'



//Default form Values
const defaultFormValues = {
    size: '',
    sauce: '',
    pepperoni: false,
    sausage: false,
    onion: false,
    anchovy: false,
    name: '',
    address: '',
    phone_number: '',
    special_instructions: ''
}

//Error values
const defaultErrors = {
    size: '',
    sauce: '',
    pepperoni: false,
    sausage: false,
    onion: false,
    anchovy: false,
    name: '',
    address: '',
    phone_number: '',
    special_instructions: ''
}





export default function Homepage(props) {
    
    //Store Form Values
    const [formValues, setFormValues] = useState(defaultFormValues)

    //Set Button State
    const [disabled, setDisabled] = useState(true)

    //Form Handlers
    const handleChange = (event) => {
        //Destructure event.target
        const { name, value, type, checked } = event.target

        //Check if checkbox, use correct value
        const valueToUse = type === 'checkbox' ? checked : value;

        //Check yup
        setFormValues({...formValues, [name]: valueToUse})
    }

    //Submit
    const submit = () => {

    }
    
    return(
        <>
        <div>
            <form onSubmit={submit}>
                <h1>Build Your Own Pizza</h1>
                <label>Pizza Size
                    <select name="size" value={formValues.size} onChange={handleChange}>
                        <option value=''>--Please select your pizza size--</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                        <option value='extralarge'>Extra Large</option>
                    </select>
                </label><br/>
                <h2>Sauce</h2>
                    <label>
                        <input
                            type="radio"
                            name="sauce"
                            value="marinara"
                            checked={formValues.sauce === 'marinara'}
                            onChange={handleChange}
                        />Marinara
                    </label><br/>
                    <label>
                        <input
                            type="radio"
                            name="sauce"
                            value="alfredo"
                            checked={formValues.sauce === 'alfredo'}
                            onChange={handleChange}
                        />Alfredo
                    </label><br/>
                    <label>
                        <input
                            type="radio"
                            name="sauce"
                            value="curry"                         
                            checked={formValues.sauce === 'curry'}
                            onChange={handleChange}
                        />Curry
                    </label><br/>
                <h2>Toppings</h2>
                <label>
                    <input
                        type="checkbox"
                        name="pepperoni"
                        onChange={handleChange}
                    />Pepperoni
                </label><br/>
                <label>
                    <input
                        type="checkbox"
                        name="sausage"
                        onChange={handleChange}
                    />Sausage
                </label><br/>
                <label>
                    <input
                        type="checkbox"
                        name="onion"
                        onChange={handleChange}
                    />Onion
                </label><br/>
                <label>
                    <input
                        type="checkbox"
                        name="anchovy"
                        onChange={handleChange}
                    />Anchovy
                </label><br/>
                <h2>Address Information</h2>
                <label>Name
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}></input>
                </label><br/>
                <label>Address
                    <input
                        type="text"
                        name="address"
                        onChange={handleChange}></input>
                </label><br/>
                <label>Phone Number
                    <input
                        type="number"
                        name="phone_number"
                        onChange={handleChange}></input>
                </label><br/>
                <h2>Special Instructions</h2>
                <textarea name="special_instructions"></textarea><br/>
                <button disabled={disabled}>Order</button>
            </form>
        </div>
        </>
    )
}
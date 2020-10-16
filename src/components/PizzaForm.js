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
    phonenumber: ''
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
    
    return(
        <>
        <div>
            <form>
                <h1>Build Your Own Pizza</h1>
                <label>Pizza Size
                    <select name="size" value={formValues.size}>
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
                            name="Marinara"
                            value={formValues.sauce === 'marinara'}
                            onChange={handleChange}
                        />Marinara
                    </label><br/>
                    <label>
                        <input
                            type="radio"
                            name="Alfredo"
                            value="Alfredo"
                            onChange={handleChange}
                        />Alfredo
                    </label><br/>
                    <label>
                        <input
                            type="radio"
                            name="Curry"
                            value="Curry"
                            onChange={handleChange}
                        />Curry
                    </label><br/>
                <h2>Toppings</h2>
                <label>
                    <input
                        type="checkbox"
                        name="pepperoni"
                        value={formValues.pepperoni === 'pepperoni'}
                        onChange={handleChange}
                    />Pepperoni
                </label><br/>
                <label>
                    <input
                        type="checkbox"
                        name="sausage"
                        value={formValues.sausage === 'sausage'}
                        onChange={handleChange}
                    />Sausage
                </label><br/>
                <label>
                    <input
                        type="checkbox"
                        name="onion"
                        value={formValues.onion === 'onion'}
                        onChange={handleChange}
                    />Onion
                </label><br/>
                <label>
                    <input
                        type="checkbox"
                        name="anchovy"
                        value={formValues.anchovy === 'anchovy'}
                        onChange={handleChange}
                    />Anchovy
                </label><br/>
                <h2>Address Information</h2>
                <label>Name
                    <input
                        type="text"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}></input>
                </label><br/>
                <label>Address
                    <input
                        type="text"
                        name="address"
                        value={formValues.address}
                        onChange={handleChange}></input>
                </label><br/>
                <label>Phone Number
                    <input
                        type="text"
                        name="phonenumber"
                        value={formValues.phonenumber}
                        onChange={handleChange}></input>
                </label><br/>
                
                <button disabled={disabled}>Order</button>
            </form>
        </div>
        </>
    )
}
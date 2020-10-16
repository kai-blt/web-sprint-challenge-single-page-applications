import React, { useState, useEffect } from 'react'
import { NavLink, Route } from 'react-router-dom'
import styled from 'styled-components'
import * as yup from 'yup'
import schema from '../schema/schema'


//Styled Components
const ErrorContainer = styled.div`
    color: red;
`;



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

    //Set Up Error States 
    const [errors, setErrors] = useState(defaultErrors)

    //Set Button State
    const [disabled, setDisabled] = useState(true)

    //Set button on if form is valid
    useEffect(() => {
        schema.isValid(formValues)
            .then((valid) => setDisabled(!valid))
    }, [formValues])



    //Form Handlers
    const handleChange = (event) => {
        //Destructure event.target
        const { name, value, type, checked } = event.target

        //Check if checkbox, use correct value
        const valueToUse = type === 'checkbox' ? checked : value;

        //Check yup
        yup.reach(schema, name)
            .validate(valueToUse)
                //If valid, clear our any errors
                .then(valid => setErrors({ ...errors, [name]:'' }))
                //If invalid, set errors from yup schema
                .catch(error => setErrors({ ...errors, [name]: error.errors[0] }));

        setFormValues({...formValues, [name]: valueToUse})
    }

    //Submit Handler
    const submit = (event) => {
        //Prevent default form submit behaviour
        event.preventDefault();
        
        //Clear form after submission
        setFormValues(defaultFormValues);
    }
    
    return(
        <>
        <div>
            <form onSubmit={submit}>
                <ErrorContainer>                    
                    <div>{errors.size}</div>
                    <div>{errors.sauce}</div>
                    <div>{errors.name}</div>
                    <div>{errors.address}</div>
                    <div>{errors.phone_number}</div>
                </ErrorContainer>

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
                        type="number"
                        name="phone_number"                        
                        value={formValues.phone_number}
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
import * as yup from 'yup'

const schema = yup.object().shape({
    size: yup
        .string()
        .required('please select pizza size'),
    sauce: yup
        .string()
        .required('Please select a sauce'),
    pepperoni: yup
        .boolean(),
    sausage: yup
        .boolean(),
    onion: yup
        .boolean(),
    anchovy: yup
        .boolean(),
    name: yup
        .string()
        .required('Please enter your name')
        .min(4, 'Please enter a name greater than 4 characters'),
    address: yup
        .string()
        .required('Please enter a valid address')
        .min(5, 'Please enter an address longer than 5 characters'),
    phone_number: yup
        .number()
        .required('Please enter your phone number'),
    special_instructions: yup
        .string()
})


export default schema
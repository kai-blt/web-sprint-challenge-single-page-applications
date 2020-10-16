import * as yup from 'yup'

const schema = yup.object().shape({
    size: yup
        .string(),
    sauce: yup
        .string(),
    pepperoni: yup
        .boolean(),
    sausage: yup
        .boolean(),
    onion: yup
        .boolean(),
    anchovy: yup
        .boolean(),
    name: yup
        .string(),
    address: yup
        .string(),
    phonenumber: yup
        .string(),
    phone_number: yup
        .number(),
    special_instructions: yup
        .string()
})


export default schema
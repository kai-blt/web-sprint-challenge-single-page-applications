//Tests the Pizza form on the site

describe('Test Pizza Site', () => {

    beforeEach(() => {
        cy.visit('localhost:3000');
    })

    //Helpers to avoid repetition
    const nameInput = () => cy.get('input[name="name"]');
    const addressInput = () => cy.get('input[name="address"]');
    const phoneInput = () => cy.get('input[name="phone_number"]');
    const buildYourOwn = () => cy.contains('Build Your Own');
    const orderButton = () => cy.get('button');

    describe('Input Field Testing', () => {
        it('Checks if can enter information into the text fields and correct value represented', () => {
            buildYourOwn()
                .click()

            nameInput()
                .should('exist')
                .type('Test Name')
                .should('have.value', 'Test Name')

            addressInput()
            .should('exist')
            .type('12354 Testing Road, Test City, TT 12345')
            .should('have.value', '12354 Testing Road, Test City, TT 12345')

            phoneInput()
                .should('exist')
                .type('(123) 123-1234')
                .should('have.value', '(123) 123-1234')
        })
    })

})
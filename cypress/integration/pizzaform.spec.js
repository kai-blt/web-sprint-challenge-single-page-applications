//Tests the Pizza form on the site

describe('Test Pizza Site', () => {

    beforeEach(() => {
        cy.visit('localhost:3000');
    })

    //Helpers to avoid repetition
    const buildYourOwn = () => cy.contains('Build Your Own');

    const pizzaSize = () => cy.get('select[name="size"]')
    const sauceRadio = () => cy.get('input[name="sauce"]')
  
    const pepperoniBox = () => cy.get('input[name="pepperoni"]');
    const sausageBox = () => cy.get('input[name="sausage"]');
    const anchovyBox = () => cy.get('input[name="anchovy"]');
    const onionBox = () => cy.get('input[name="onion"]');

    const nameInput = () => cy.get('input[name="name"]');
    const addressInput = () => cy.get('input[name="address"]');
    const phoneInput = () => cy.get('input[name="phone_number"]');
    const specialInput = () => cy.get('textarea[name="special_instructions"]');   
   
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

    describe('Checkbox Testing', () => {
        it('Checks if multiple toppings can be selected', () => {
            buildYourOwn()
                .click()

            pepperoniBox()
                .should('exist')
                .click()
                .should('have.checked', 'true')

            sausageBox()
                .should('exist')
                .click()
                .should('have.checked', 'true')

            anchovyBox()
                .should('exist')
                .click()
                .should('have.checked', 'true')
            
            onionBox()
                .should('exist')
                .click()
                .should('have.checked', 'true')
        })
    })


    describe('Submit Testing', () => {
        it('Checks if the form can be submitted', () => {
            buildYourOwn()
                .click()

            pizzaSize()
                .select('small')

            sauceRadio()
                .check('marinara')

            pepperoniBox()
                .click()

            sausageBox()
                .click()

            anchovyBox()
                .click()
            
            onionBox()
                .click()

            nameInput()
                .type('Test Name')

            addressInput()
                .type('12354 Testing Road, Test City, TT 12345')

            phoneInput()
                .type('(123) 123-1234')

            specialInput()
                .type('I\'d like my pizza for free please')

            orderButton()
                .click()

            cy.contains('Congratulations your order was successfully placed!')
        })
    })
})
describe('test www.carsdirect.com', () => {
    it('should load carsdirect main page', () => {
        cy.visit('www.carsdirect.com')
    })
    it('should display new cars page', () => {
        cy.clickNewCars()
    })
    it('should display honda cars', () => {
        cy.selectBrandMakeDropdown('honda')
        cy.findYourCar()
    })
    it('Insight should be listed as one of the models', () => {
        cy.carModelVisible('Insight')
    })
    it('should display minivan/van cars', () => {
        cy.selectSegmentDropdown('Minivan/Van')
    })
    it('Insight should not be listed as one of the models', () => {
        cy.carModelNotVisible('Insight')

    })
})
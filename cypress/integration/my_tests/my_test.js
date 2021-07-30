/// <reference types="cypress" />

//nisam stavio da ima .spec u filename-u jer ga onda zbog nekog razloga i jest run-a

describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

describe('Pikachu', function() {
  it("open pikachu", function() {
    // cy.visit('http://localhost:5000/pokemon/pikachu')
    cy.visit('http://localhost:5000')
    cy.contains('pikachu').click()
    cy.contains('lightning rod')
  })
})
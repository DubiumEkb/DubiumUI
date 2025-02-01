import "cypress-axe"

// Добавляем команду для проверки доступности
Cypress.Commands.add("checkAccessibility", () => {
	cy.injectAxe() // Внедряем axe-core в страницу
	cy.checkA11y() // Проверяем доступность
})

/// <reference types="cypress" />
import { displayTypeNameArray } from '../../../../frontend/src/store/display'

describe('header select', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('header should have 3 display_type buttons', () => {
    displayTypeNameArray.forEach(buttonName => {
      cy
        .findByText(buttonName)
        .should('exist')
    })
  })

  const TaskViewName = displayTypeNameArray[0]
  it(`'${TaskViewName}' component should be the initial display`, () => {
    cy
      .get(`[class=${TaskViewName}]`)
      .should('exist')
  })

  const scheduleViewName = displayTypeNameArray[1]
  it(`'${scheduleViewName}' component should be displayed if the button was clicked`, () => {
    cy
      .get('button')
      .filter(`:contains(${scheduleViewName})`)
      .click()
    cy
      .get(`[class=${scheduleViewName}]`)
      .should('exist')
  })

  const progressViewName = displayTypeNameArray[2]
  it(`${progressViewName} should be displayed if the button was clicked`, () => {
    cy
      .get('button')
      .filter(`:contains(${progressViewName})`)
      .click()
    cy
      .get(`[class=${progressViewName}]`)
      .should('exist')
  })
})
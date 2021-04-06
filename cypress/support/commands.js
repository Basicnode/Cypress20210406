// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
import 'cypress-iframe'

// Cypress.Commands.add('loginweb',(username,password)=>{
//     cy.get('#account').type(username)
//     cy.get('#password').type(`${password}{enter}`)
// })


Cypress.Commands.add('loginweb',(username,password)=>{
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type(username)
    cy.get(':nth-child(3) > .el-form-item__content > .el-input > .el-input__inner').type(`${password}{enter}`)
})
// 正常登录
// Cypress.Commands.add('loginweb',(username,password)=>{
//     cy.request({
//             method:'post',
//             url:'/prod-api/account/login',
//             form:true,
//             body:{"username":username,"password":password}
//     })
// })


Cypress.Commands.add('logout',(username,password)=>{
    // cy.get(':nth-child(7) > .annex').click()
    cy.contains('退出').click()
    cy.get('.layui-layer-btn0').click()

})


// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

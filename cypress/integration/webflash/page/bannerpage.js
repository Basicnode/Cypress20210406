import locator from './locator.json'
import faker from 'faker'

faker.setLocale('en')  //英文
// faker.setLocale('zh_CN')  //中文

export default class BannerPage{
    visit(){
        cy.visit('/')
        cy.viewport(1920,1440)
        cy.loginweb('developer','developer')
        this.bannermanager.click({force:true})
    }
    get bannermanager(){
        return cy.get(locator.banner.bannermanager)
    }

    get addbutton(){
        return cy.get(locator.banner.addbutton)
    }

    get newtitle(){
        return cy.get(locator.banner.newtitle).type(faker.name.firstName() + faker.name.lastName())
    }

    get newurl(){
        return cy.get(locator.banner.newurl).type(faker.internet.url())
    }

    get newtype(){
        return cy.get(locator.banner.newtype)
    }

    // get uploadicon(){
    //     return cy.get(locator.banner.idFile).click()
    // }

    get submit(){
        return cy.get(locator.banner.submit).click()
    }

}
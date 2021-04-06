import BannerPage from './page/bannerpage'
describe("banner管理",()=>{
    beforeEach(()=>{
        let instance = new BannerPage()
        instance.visit()

        cy.wrap(instance).as('instance') //包装成全局对象，可以在测试用例中引用它。用例中的第二个参数不能是箭头函数,否则不能引用
    })

    it("数据合法，添加banner成功", function (){
        this.instance.addbutton.click()
        this.instance.newtitle
        this.instance.newurl.click({force: true})
        this.instance.newtype.click({force:true})
        // this.instance.uploadicon

        this.instance.submit
    })
})